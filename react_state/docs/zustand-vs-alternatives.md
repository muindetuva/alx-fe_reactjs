# Zustand vs Alternatives

## React Context

React Context is built in and works well for values that change infrequently, such as a locale or a modest theme object. A single broad Context value can cause every subscribed component beneath its provider to re-render when any part of that value changes, so larger state objects usually require careful provider splitting and memoization.

Zustand allows each component to subscribe to a focused selector without adding provider nesting. In this todo application, the form can subscribe only to `addTodo`, the filter buttons only to filter state, and the footer only to `clearCompleted`, keeping dependencies visible and updates narrow.

## Redux

Redux provides a highly structured event model, mature developer tools, and a large ecosystem that are valuable for complex applications and teams that need strict conventions. Even with Redux Toolkit, it introduces more concepts and setup than this small todo application needs.

Zustand is lighter than Redux for this project because the store, immutable actions, slice composition, persistence, and devtools integration require little boilerplate. Redux would become more attractive if the product required extensive event auditing, sophisticated middleware pipelines, or organization-wide state conventions.
