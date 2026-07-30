# ReactGuard: Mastering Error Handling

This Vite React project demonstrates layered error handling with descriptive exceptions, HTTP validation, abortable request state, runtime schema validation, class Error Boundaries, focused fallback UI, reset behavior, and structured monitoring reports. It also documents the difference between runtime failures and silent logic bugs and explains where each recovery mechanism belongs.

## Run Locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The intentionally broken widget is enclosed by its own Error Boundary, so the rest of the application remains usable.
