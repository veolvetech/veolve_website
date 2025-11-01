# Design notes — Veolve Coming Soon

## Purpose
Temporary landing page to show a polished "coming soon" screen while the full site is in development. Lightweight static files — easy to host on Hostinger or any static host.

## Assets
Place these in `src/assets/`:
- `logo.svg` — Veolve logo (use white / dark variations).
- `float-1.svg`, `float-2.svg` — decorative 3D shapes (png/svg). You can drop multiple float assets and reference them in HTML/CSS.
- (optional) `favicon.ico` / `favicon.svg`

## Customization
- Brand colors: edit `--accent` and gradients in `styles.css`.
- Typography: swap Google Fonts link in `index.html`.
- Notifications: replace localStorage flow in `main.js` with API call or 3rd-party form provider:
  - Mailchimp, ConvertKit, Formspree, or your own server endpoint.
  - Suggested JSON payload: `{ email: "...", source: "coming-soon", page: "index" }`

## Accessibility
- Form uses `type="email"` and `required`. Consider adding ARIA live region for toast messages if you expect screen-reader users.
- Ensure color contrast for brand variations.

## Deployment notes
- Hostinger: easiest is to upload the contents of `src/` into `public_html` so this page shows as the root.
- If using Git deployment: configure Hostinger to pull from your repo branch and set root to `src/` (or add a build that copies `src` into `public_html`).

## Future
- Add countdown timer
- Add simple analytics or UTM capture in forms
- Add language translations
