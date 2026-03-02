# DennyM55.github.io

Preview the site locally or via GitHub Pages.

## Preview locally

Option A — Quick open
- Double‑click index.html to open it in your browser.
- Note: Some features that rely on http(s) may not work on the file:// protocol. If anything looks off, use Option B.

Option B — Lightweight local server (Python)
1. Open PowerShell in this folder (githubio).
2. Run one of the following:
   - Python 3: python -m http.server 8080
   - Python 2: python -m SimpleHTTPServer 8080
3. Visit http://localhost:8080 in your browser.

Option C — VS Code Live Server
1. Open this folder in VS Code.
2. Install the “Live Server” extension.
3. Right‑click index.html → “Open with Live Server”.

## Dark mode
- Click the round button at the top‑right to toggle theme.
- Your choice is saved to localStorage and also respects your system preference on first load.

## Deploy / Preview online
- This repo is set up for GitHub Pages with custom domain: https://dennymathew.me
- If you fork it, enable GitHub Pages in your fork’s settings and the site will be available at:
  - User site: https://<your‑username>.github.io/
  - Project site: https://<your‑username>.github.io/<repo‑name>/

## Notes
- SEO and Open Graph meta tags are included. Update og image URLs if needed.
- Fonts are loaded via Google Fonts with preconnect for performance.

## Add your profile picture
You can show your profile photo in the hero avatar instead of the "DM" initials.

Option A — Local file (recommended)
1. Prepare a square image, e.g. 512×512. JPG or WEBP suggested (under ~200 KB).
2. Save the file as `profile.jpg` in this same folder (next to `index.html`).
3. Refresh the page. The image will appear automatically and the initials will hide.

Option B — Different filename or external URL
1. Open `index.html` and find the avatar block in the hero section.
2. Edit the `src` on the `<img>` tag:
   - Local file: `src="my-photo.webp"` (place the file next to `index.html`).
   - External URL: `src="https://example.com/me.jpg"`.
3. Save and refresh.

Notes:
- If the image fails to load, it gracefully falls back to initials.
- The image is clipped with rounded corners and uses `object-fit: cover`.
- You can adjust the avatar size via the `.avatar { width/height }` CSS.