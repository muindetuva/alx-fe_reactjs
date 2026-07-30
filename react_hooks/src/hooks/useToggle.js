import { useCallback, useState } from 'react'

/**
 * Creates a boolean value and a stable function that flips it.
 * @param {boolean} initialValue The initial boolean state.
 * @returns {[boolean, Function]} The current value and toggle function.
 */
export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((currentValue) => !currentValue)
  }, [])

  return [value, toggle]
}
