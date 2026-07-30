# React JS with a CSS Framework

This Vite React project compares Bootstrap's component classes with Tailwind CSS utilities, then builds a responsive product interface using Tailwind v4's CSS-first configuration. It also defines semantic design tokens, a persistent dark theme, reusable components, and accessible shadcn-style dialog primitives backed by Radix UI.

## Styling Stack

- Bootstrap is loaded from its CDN for the framework comparison card.
- Tailwind CSS v4 is integrated through `@tailwindcss/vite` and `@import "tailwindcss"` without a Tailwind config or PostCSS file.
- Semantic `@theme` tokens and a custom `dark` variant provide reusable visual decisions.
- Local `Button` and `Dialog` primitives use the `@/components/ui/*` import convention.

## Run Locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```
