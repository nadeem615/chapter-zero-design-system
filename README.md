# Chapter Zero · Brand library v2

A React + Vite reference site for the Chapter Zero online book community. Includes sixteen searchable sections, a contrast calculator, typography playground, editable SVG campaign studio, interactive component examples, writing bank, locally saved release checklist, and downloadable asset kit.

## Run

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. To build: `npm run build`. To preview the build: `npm run preview`. Run focused validation with `npm test`.

## Update content and assets

Edit `src/system.js` for v2 guidance and creative recipes; `src/foundation.md` preserves the detailed first release. Run `node scripts/build-assets.mjs` to regenerate the v2 download specifications, writing bank, tokens, and template starters. The ZIP is created by `scripts/package-kit.py` after assets are generated.

Original logos are supplied PNG files under `public/assets`. New SVGs are supporting illustrations and editable template starters, not fabricated vector logo masters. All missing originals and unconfirmed operating decisions are identified in the asset status file. No community data is sent by the component demonstrations. Checklist selections save in browser localStorage.

The brand studio exports live-text SVG. Install Sora before production editing; verify copy fit and replace draft text signatures with the original identity artwork. Fonts must retain their license when distributed.

## Verification scope

Build and unit checks cover route uniqueness, contrast math, XML escaping, and export dimensions. Keyboard, responsive layout, dialog focus, spoiler disclosure, filters, studio export, and local persistence should also be checked in a real browser. No WCAG certification is implied.
