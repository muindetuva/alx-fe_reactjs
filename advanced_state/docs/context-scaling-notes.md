# Context Scaling Notes

## Split by Domain

Splitting Context by domain gives independently changing concerns their own public boundary. Theme, authentication, cart, and locale providers can then evolve separately, and a component subscribing to theme does not re-render merely because the cart changed.

This approach is most useful when consumers naturally need the full state and actions for one compact concern. It also keeps ownership clear: a Theme provider should not quietly become a general application store.

## Split State from Dispatch

Splitting state and dispatch within one domain serves a different purpose. Components that only dispatch cart commands can subscribe to `CartDispatchContext`, whose reducer dispatch identity is stable, without re-rendering whenever the item array changes.

State/dispatch splitting does not replace domain splitting; the two techniques solve different subscription problems and may be combined. The exercise's nested cart providers demonstrate this pattern while preserving one `useCart` API for consumers that need both halves.
