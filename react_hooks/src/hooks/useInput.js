import { useCallback, useState } from 'react'

/**
 * Provides spreadable controlled-input props and a reset function.
 * @param {string} initialValue The input value restored by reset.
 * @returns {{value: string, onChange: Function, reset: Function}} Controlled input state and helpers.
 */
export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback((event) => {
    setValue(event.target.value)
  }, [])

  const reset = useCallback(() => {
    setValue(() => initialValue)
  }, [initialValue])

  return { value, onChange, reset }
}
