# Error Handling Strategy

## Expected Failures and Local Recovery

Expected failures belong close to the operation that can explain and recover from them. ReactGuard represents network progress and HTTP or validation failures in `useFetch`, renders those states in `UserProfile`, validates external JSON with Zod, and uses descriptive thrown errors for invalid function inputs rather than converting every failure into an application-wide crash.

## Error Boundary Placement

Boundaries should match useful failure zones instead of wrapping every element or relying only on one root fallback. ReactGuard keeps a final root boundary for unexpected render failures, then gives the permanently broken widget and the user-profile feature separate nested boundaries so either section can fail without removing the rest of the interface; reset behavior remains available at the smallest sensible boundary.

## Monitoring, Context, and Privacy

Unexpected boundary failures are reported with a message, stack, React component stack, relevant non-sensitive context, and an ISO timestamp. Production monitoring should group recurring failures and attach release or route information, but it must avoid passwords, tokens, complete form submissions, and unnecessary personal data; malformed user payload details are logged as schema issues while the user sees a concise recovery message.
