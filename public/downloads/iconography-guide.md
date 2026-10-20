# Chapter Zero · Iconography

## Family
32 original rounded outline symbols. These are functional icons, separate from the brand logo and supporting decorative shapes. New work uses this family. Existing library controls use compatible Lucide outlines; migrate consistently rather than mixing two versions of one meaning in a component.

## Construction
24×24 grid, 2-unit stroke, round caps and joins, no fills. Most paths use a 2-unit inset with optical exceptions. Scale proportionally; do not stretch, add shadows, or mix weights. Use 16px for dense metadata, 20px for controls, 24px default, 32px features, 48px emphasis. At 16px the proportional stroke is 1.33px; proof optical clarity.

## Color and access
Default Deep Spine on cream, cream on Deep Spine, and utility ink on orange. Essential icons need at least 3:1 contrast against their surface. Use text or an accessible label to communicate purpose. A visible text label makes its adjacent icon decorative. For an icon-only action, label the button (not both button and child), provide a 44×44px target and visible focus. Tooltips supplement names. A meaningful standalone image can receive a label via BrandIcon. Decorative SVGs are aria-hidden.

## Meaning
Exchange means book handoff, not refresh. Bookmark means save, not endorsement. Recommendation is not an invented rating. Perspective means interpretation, not privacy. Report is separate from disagreement. Directional navigation may mirror in RTL; books, clocks, logos, and nondirectional symbols do not mirror automatically.

## React
Copy src/icons.js and src/components/BrandIcon.jsx with their folder relationship intact. Requires React, no icon-font service. Import BrandIcon from './components/BrandIcon'; use <BrandIcon name="book" size={24} /> beside text. Standalone meaningful image: <BrandIcon name="book" label="Reading" />. Use the button's aria-label for an icon-only action.

## SVG
Files use stroke="currentColor". Inline SVG inherits CSS color; external SVG image rendering may default to black and cannot inherit the host element’s color. To recolor in a vector editor, set the stroke explicitly to an approved high-contrast color.

## Catalog
- **Book** — book / Reading
- **Library** — library / Reading
- **Bookmark** — bookmark / Reading
- **Reading list** — reading-list / Reading
- **Quotation** — quote / Reading
- **Annotation** — annotation / Reading
- **Exchange** — exchange / Community
- **Discussion** — discussion / Community
- **Readers** — readers / Community
- **Reader profile** — reader / Community
- **Recommendation** — recommend / Community
- **Perspective** — perspective / Community
- **Search** — search / Navigation
- **Next** — arrow-right / Navigation
- **Open destination** — arrow-up-right / Navigation
- **Expand or next** — chevron / Navigation
- **Menu** — menu / Navigation
- **Close** — close / Navigation
- **Filter** — filter / Actions
- **Add** — plus / Actions
- **Edit** — edit / Actions
- **Share** — share / Actions
- **Download** — download / Actions
- **Copy** — copy / Actions
- **Success** — check / Status
- **Warning** — warning / Status
- **Information** — info / Status
- **Time** — clock / Status
- **Event** — calendar / Community
- **Location scope** — location / Community
- **Notifications** — notification / Actions
- **Report concern** — report / Status

## Contribution
Reuse an existing meaning first. Review new paths at 16/20/24px, light/dark, and in context. Update metadata, accessible usage, downloads, tests, and docs together.
