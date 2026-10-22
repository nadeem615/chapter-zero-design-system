# Chapter Zero · Sample landing page

A standalone React + Vite landing page that demonstrates the Chapter Zero brand library in a real page layout. It is a separate app with its own `package.json`; it reads the design system from the parent folder (`../src` and `../public/assets`) without modifying it.

## Run

```sh
cd landing-page
npm install
npm run dev
```

Open http://127.0.0.1:5174/. Build with `npm run build`.

## What it uses

- Logos: `horizontal-light.png`, `horizontal-dark.png`, `logo-mark.png` (original artwork, cropped by CSS only)
- Offers: the four community pillars from `src/system.js`
- All 13 `BrandKit.jsx` exports, `BrandIcon`, brand shapes and patterns, and `design-tokens.css`

## Form

The "Request an invitation" form validates on the client and shows a confirmation. There is no backend: nothing is sent or stored. Connect `handleSubmit` in `src/JoinForm.jsx` to a real endpoint when one exists.

All member names, events and listings on the page are labelled samples.
