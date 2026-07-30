import { useEffect, useState } from 'react'

/**
 * Delays publishing a value until it remains unchanged for a duration.
 * @param {any} value The value to debounce.
 * @param {number} delay The delay in milliseconds.
 * @returns {any} The most recently settled value.
 */
export default function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timeoutId)
  }, [value, delay])

  return debouncedValue
}
