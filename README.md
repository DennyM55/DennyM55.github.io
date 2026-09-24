# Denny Mathew — Software Engineering Portfolio

A static professional portfolio for Java backend engineering, enterprise integration, AI applications and media projects. The site presents selected projects, career experience, technical skills, education and Microsoft certifications, with professional contact routed through LinkedIn.

**Website:** [dennymathew.me](https://dennymathew.me/)

## Run locally

The site uses plain HTML, CSS and JavaScript. There is no package installation, build step, application server or API key requirement.

From the repository root, run:

```sh
python3 -m http.server 8080
```

Open [localhost:8080](http://localhost:8080/) in a browser. On Windows, `py -3 -m http.server 8080` can be used instead. Stop the server with `Ctrl+C`.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All public content, semantic page structure, project cards, career timeline, SEO metadata and structured data. |
| `styles.css` | Responsive design, project illustrations, focus states, reduced-motion support and print styles. |
| `script.js` | Progressive enhancements for mobile navigation, project filtering, direct project links, active navigation and the footer year. |
| `assets/favicon.svg` | Site icon. |
| `assets/social-card.png` | 1200 × 630 social-sharing image referenced by Open Graph metadata. |
| `CNAME` | Existing GitHub Pages custom domain: `dennymathew.me`. |

The design uses CSS and inline SVG for its decorative illustrations. Typography uses available local fonts; the page does not depend on a remote font service.

## Browsing and accessibility

- The default enhanced project view shows four featured projects. Filters offer **All work**, **Java & backend**, **AI**, **Media** and **Enterprise** views across the full project collection.
- Every project is included directly in the HTML. With JavaScript disabled, all projects and the navigation remain available; inactive filter controls stay hidden.
- Native `details`/`summary` elements expose engineering details without requiring JavaScript.
- Project filters expose their selected state with `aria-pressed`, and the visible project count is announced through a polite live region.
- Mobile navigation provides an expanded state, closes on Escape and returns focus to the menu button when dismissed with Escape.
- A skip link, visible keyboard focus styles and reduced-motion handling support keyboard and motion-sensitive browsing.
- Links to project IDs reveal the destination even if it is outside the current filter. Print styling includes all project cards regardless of the selected filter.

These are implementation features, not a claim of formal accessibility certification. Review keyboard navigation and browser behavior when changing them.

## Update content

Edit the public copy in `index.html`. Keep dates, designations, project scope and supported metrics consistent with the current professional profile. Distinguish professional client work from independent projects, completed implementations from future plans, and configured demonstration limits from measured performance.

To add a project, follow an existing card's structure:

```html
<article class="project-card"
         data-project
         data-categories="backend media"
         id="project-unique-name">
  <!-- Type, title, summary, supported metric, technology tags,
       engineering details and descriptive source/demo links. -->
</article>
```

- Give every card a unique, stable ID so existing links keep working.
- Use space-separated category tokens from `backend`, `ai`, `media`, `enterprise` and `web`. The `web` token is available for classification, but currently has no dedicated filter button.
- Add `data-featured="true"` only to projects intended for the default featured view.
- The script calculates project counts from the cards; no separate count needs updating.
- Keep decorative visuals `aria-hidden="true"` and retain meaningful information in the accessible card text.
- Use descriptive link labels. External links opening a new tab should include `target="_blank" rel="noopener noreferrer"`.
- For proprietary work without a public artifact, link to the relevant experience rather than presenting a client's homepage as source code or a demo. Label archived app listings as archived.

Update colors and spacing through the variables and rules in `styles.css`. When changing branding or the domain, also review the title, description, canonical URL, Open Graph tags and JSON-LD in `index.html`. Keep the social image's declared dimensions aligned with the actual asset.

## Public links and privacy policy for maintainers

The main professional destinations are:

- [LinkedIn](https://www.linkedin.com/in/dennymathew119) — professional experience and recruitment conversations.
- [GitHub](https://github.com/DennyM55) — project repositories and implementation details.
- [YouTube](https://www.youtube.com/@denny-mathew) — learning and technical content.

Publish only intentional professional information: career history, project descriptions, supported achievements, skills and qualification names. Certification names and public exam codes such as AZ-900 and AI-900 may appear; personal certificate IDs and credential documents should not.

Do not add private phone numbers, email addresses, home addresses, birth dates, family details, salary information, identity documents, passwords, tokens or API keys to the site, assets, metadata or repository. Check screenshots and downloadable files as well as visible page text. A public repository's history can retain removed content, so removal from the latest page alone does not erase previous commits.

There is no contact form, analytics integration or client-side storage in the current site code. Contact calls to action link to public professional profiles. Any future data collection or third-party integration should be reviewed before it is added.

## GitHub Pages

This repository serves the static site through GitHub Pages. Preserve the existing `CNAME` value, `dennymathew.me`, unless the custom domain is intentionally being changed. No new deployment service or build workflow is needed for these static files.

The published version depends on the repository's configured Pages source. Review changes on a branch or pull request before merging into that source. After publication, check the custom domain, page assets and social-sharing image; a local preview alone does not verify deployment.

## Before publishing

Use this as a manual review checklist; it does not report that checks have already passed:

- Preview desktop and narrow mobile layouts; check long text and horizontal overflow.
- Use only the keyboard to visit navigation links, filters and expandable details. Check the mobile menu and Escape behavior.
- Try each project filter and a direct link to a non-featured project.
- Disable JavaScript and confirm all projects and navigation remain usable.
- Check print preview and the reduced-motion setting.
- Confirm repository, demo, app-listing and professional-profile links point to the intended destinations.
- Confirm `assets/favicon.svg` and `assets/social-card.png` load, and check the browser console for errors.
- Review visible content, metadata and assets for accuracy and private information.
