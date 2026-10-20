# Chapter Zero · Brand library v2

A React + Vite reference site for the Chapter Zero online book community. Includes sixteen searchable sections, a contrast calculator, typography playground, editable SVG campaign studio, interactive component examples, writing bank, locally saved release checklist, and downloadable asset kit.

The **Elements & shapes** section adds eight supporting shapes, three repeatable patterns, four color treatments, and thirteen reusable React exports. It includes a live component gallery, editable SVG downloads, copyable usage snippets, and downloadable component source. These supporting graphics are separate from the original logo artwork.

**Logo & identity** now includes visual format selection, schematic clear-space diagrams, minimum-size guidance and a live sizing preview, approved backgrounds, six misuse demonstrations, partnership and placement rules, and production requirements. **Iconography** provides 32 original rounded outline icons with live search, categories, size and dark-surface previews, SVG/React exports, accessibility examples, meaning, construction, and contribution rules.

## Run

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. To build: `npm run build`. To preview the build: `npm run preview`. Run focused validation with `npm test`.

## Update content and assets

Edit `src/system.js` for v2 guidance and creative recipes; `src/foundation.md` preserves the detailed first release. Run `node scripts/build-assets.mjs` to regenerate the v2 download specifications, writing bank, tokens, and template starters. The ZIP is created by `scripts/package-kit.py` after assets are generated.

For the elements collection, edit `src/brand-elements.js` and `src/components/BrandKit.jsx`, run `node scripts/extend-elements.mjs`, then `python scripts/package-kit.py`. Components are documented in `public/downloads/component-catalog.md`. Downloadable ZIPs include 44 SVG variants and portable React source with base styles and licensed Sora files.

For icons and logo rules, edit `src/icons.js`, `src/components/BrandIcon.jsx`, `src/LogoGuide.jsx`, and `src/IconGuide.jsx`. Run `node scripts/build-identity.mjs` then `python scripts/package-kit.py` to refresh the icon ZIP, guide downloads, and main kit. `BrandIcon` is decorative by default; use a visible label or label the containing icon-only button. The original raster logos are preserved; guide crops trim unused canvas only.

Original logos are supplied PNG files under `public/assets`. New SVGs are supporting illustrations and editable template starters, not fabricated vector logo masters. All missing originals and unconfirmed operating decisions are identified in the asset status file. No community data is sent by the component demonstrations. Checklist selections save in browser localStorage.

The brand studio exports live-text SVG. Install Sora before production editing; verify copy fit and replace draft text signatures with the original identity artwork. Fonts must retain their license when distributed.

## Verification scope

Build and unit checks cover route uniqueness, contrast math, XML escaping, and export dimensions. Keyboard, responsive layout, dialog focus, spoiler disclosure, filters, studio export, and local persistence should also be checked in a real browser. No WCAG certification is implied.
