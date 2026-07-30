# State Management in React

This Vite React project uses Zustand to manage a persisted todo application and UI settings. It demonstrates immutable actions, selectors, slice composition, devtools and persistence middleware, shallow selection, external store access, filtering in the view, and isolated store tests.

## Features

- Add, toggle, edit, delete, filter, and clear completed todos.
- Persist only todo data under the `todo-storage` key.
- Compose todo and filter slices before applying middleware once at the store boundary.
- Manage dark mode, font size, and font family in a separate settings store.
- Test the singleton store with Vitest state resets.

## Run Locally

```bash
npm install
npm test
npm run build
```
