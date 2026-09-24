/* Content is static HTML. JavaScript only enhances navigation and filtering. */
(() => {
  'use strict';
  const root = document.documentElement;
  const menu = document.querySelector('.menu-button');
  const navigation = document.getElementById('navigation');
  const mobile = window.matchMedia('(max-width: 720px)');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const projects = [...document.querySelectorAll('[data-project]')];
  const toolbar = document.querySelector('.project-toolbar');
  const count = document.querySelector('.project-count');
  let activeFilter = 'featured';

  const closeMenu = (restoreFocus = false) => {
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus && mobile.matches) menu.focus();
  };
  menu.addEventListener('click', event => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (open && event.detail === 0) navigation.querySelector('a').focus();
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  const syncNavigation = () => {
    menu.hidden = !mobile.matches;
    closeMenu();
  };
  mobile.addEventListener('change', syncNavigation);
  syncNavigation();
  root.classList.add('js');

  const filterProjects = filter => {
    activeFilter = filter;
    let visible = 0;
    projects.forEach(project => {
      const show = filter === 'all' || (filter === 'featured'
        ? project.dataset.featured === 'true'
        : project.dataset.categories.split(' ').includes(filter));
      project.hidden = !show;
      visible += Number(show);
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    count.textContent = `${visible} of ${projects.length} projects`;
  };
  buttons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));

  // Direct links to any project must reveal it, including after back/forward navigation.
  const revealLinkedProject = () => {
    const target = document.getElementById(window.location.hash.slice(1));
    if (!target?.matches('[data-project]')) return;
    if (target.hidden) filterProjects('all');
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }));
  };
  document.querySelectorAll('[data-show-project]').forEach(link => {
    link.addEventListener('click', () => {
      const project = document.getElementById(link.dataset.showProject);
      if (project?.hidden) filterProjects('all');
    });
  });
  filterProjects('featured');
  toolbar.hidden = false;
  window.addEventListener('hashchange', revealLinkedProject);
  revealLinkedProject();

  // Keep the full resume content available in print, whatever filter was selected.
  let detailState = [];
  window.addEventListener('beforeprint', () => {
    projects.forEach(project => { project.hidden = false; });
    detailState = [...document.querySelectorAll('details')].map(detail => [detail, detail.open]);
    detailState.forEach(([detail]) => { detail.open = true; });
  });
  window.addEventListener('afterprint', () => {
    filterProjects(activeFilter);
    detailState.forEach(([detail, wasOpen]) => { detail.open = wasOpen; });
  });

  if ('IntersectionObserver' in window) {
    const links = [...navigation.querySelectorAll('a')];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px' });
    links.forEach(link => {
      const target = document.querySelector(link.hash);
      if (target) observer.observe(target);
    });
  }
  document.getElementById('year').textContent = new Date().getFullYear();
})();
