export function reportError(error, context = {}) {
  const report = {
    message: error instanceof Error ? error.message : String(error),
    stack: error instanceof Error ? error.stack : undefined,
    context,
    timestamp: new Date().toISOString(),
  }

  console.error('[monitoring]', report)
  return report
}
