# Error Boundary Notes

Error Boundaries catch errors thrown during rendering, lifecycle methods, and constructors below the boundary. They do not catch errors from event handlers, asynchronous callbacks or rejected Promises, server-side rendering, or errors thrown inside the boundary component itself; those paths need ordinary `try`/`catch`, rejected-request state, server handling, or a higher boundary.

A reset button only clears the boundary's stored error, so an unchanged broken child can immediately throw again. The `BuggyWidget` intentionally demonstrates that behavior, while a recoverable component could use reset to retry after its inputs or external conditions change.

Libraries such as `react-error-boundary` support `resetKeys`, which can clear a captured error when specified values change. A concrete use would be a product-details boundary keyed by `productId`: navigating from a malformed product to a different product should reset the boundary and attempt to render the new record without requiring a full-page refresh.
