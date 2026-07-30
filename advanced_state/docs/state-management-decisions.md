# State Management Decisions

## When Context Fits

Context fits state that is small, broadly meaningful, and changes infrequently. MarketCart keeps its light/dark theme in Context because the value is simple, most of the interface needs it, and a dedicated provider with a memoized value is sufficient without adding store machinery.

## Why Mixing Tools Is Reasonable

Using Context and Redux Toolkit together is reasonable when each tool owns the state it handles best. In MarketCart, Context owns theme presentation, while Redux owns the frequently changing cart and asynchronous products domain, including request lifecycle state, middleware logging, and developer tooling; the split follows responsibility rather than forcing one solution everywhere.

## Signals to Migrate

Theme state should migrate away from Context if it gains complex workflows, server synchronization, audit requirements, or update patterns that cause broad expensive re-renders. Cart or products state could move to a lighter local solution if it becomes isolated to one screen, while additional Redux slices are justified when more features need shared async data, coordinated events, middleware, or time-travel debugging.
