# StateCraft: Redux & Context API

This Vite React project demonstrates how Context and Redux Toolkit can coexist in one application. Context owns the low-frequency visual theme, while Redux Toolkit owns cart state, asynchronous product data, request status, and action middleware.

## Architecture

- `ThemeContext` exposes a memoized light/dark theme and guarded `useTheme` Hook.
- `CartContext` preserves the reducer and state/dispatch context-splitting exercise for comparison.
- Redux Toolkit provides the final runtime cart and product stores.
- `fetchProducts` reads a delayed mock API and exposes loading, success, and failure UI states.
- Logger middleware records each Redux action type and ISO timestamp before forwarding it.

## Run Locally

```bash
npm install
npm run build
```
