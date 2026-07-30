import { useCallback, useState } from 'react'

/**
 * Creates a counter with stable functional update operations.
 * @param {number} initialValue The value restored by reset.
 * @returns {{count: number, increment: Function, decrement: Function, reset: Function}} Counter state and actions.
 */
export default function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue)

  const increment = useCallback(() => {
    setCount((currentCount) => currentCount + 1)
  }, [])

  const decrement = useCallback(() => {
    setCount((currentCount) => currentCount - 1)
  }, [])

  const reset = useCallback(() => {
    setCount(() => initialValue)
  }, [initialValue])

  return { count, increment, decrement, reset }
}
