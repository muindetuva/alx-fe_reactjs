export const actionLogger = () => (next) => (action) => {
  console.log(`[${new Date().toISOString()}] ${action.type}`)
  return next(action)
}
