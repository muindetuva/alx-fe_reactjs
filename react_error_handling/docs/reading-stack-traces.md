# Reading Stack Traces

A runtime error interrupts execution and normally provides an exception message and stack trace. A logic error can keep running and return a believable but incorrect result, as `sumWithoutLast` does when its off-by-one loop silently includes the final array item; tests, invariants, and careful review are needed because there may be no stack trace at all.

When a runtime stack is available, start with the error message and then find the first frame that points to source owned by this project rather than React, Vite, or another dependency. That first own-source frame is usually the closest location where our data or control flow caused the failure; inspect its inputs, then follow the calling frames upward to learn how execution reached it.

Generated bundles and framework frames still provide context, but source maps should lead back to the original module and line. The earliest project frame is a starting hypothesis, not automatic proof, because the invalid value may have been created earlier and only detected there.
