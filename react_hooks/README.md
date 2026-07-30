# HookMastery

This Vite React project builds reusable custom Hooks for browser events, form state, counters, toggles, network requests, persistence, debouncing, filtering, and pagination. It also demonstrates hook composition and verifies synchronous and timer-based behavior with Vitest and `renderHook`.

## Included Hooks

- `useMousePosition`, `useWindowSize`, and `useLocalStorage` connect components to browser APIs with cleanup and safe initialization.
- `useCounter`, `useToggle`, and `useInput` package common state behavior behind small reusable interfaces.
- `useFetch` handles loading, errors, HTTP failures, and aborted requests.
- `useDebounce`, `usePagination`, and `useFilteredList` compose stable behavior for larger interactive lists.

## Run Locally

```bash
npm install
npm test
npm run build
```
