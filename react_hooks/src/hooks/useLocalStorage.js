import { useCallback, useState } from 'react'

/**
 * Stores React state in localStorage with guarded serialization and parsing.
 * @param {string} key The localStorage key.
 * @param {any} initialValue The fallback value when no valid entry exists.
 * @returns {[any, Function]} The persisted value and its setter.
 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item === null ? initialValue : JSON.parse(item)
    } catch (error) {
      console.warn(`Unable to read localStorage key "${key}"`, error)
      return initialValue
    }
  })

  const setValue = useCallback(
    (nextValue) => {
      setStoredValue((currentValue) => {
        const value =
          typeof nextValue === 'function'
            ? nextValue(currentValue)
            : nextValue

        if (typeof window !== 'undefined') {
          try {
            window.localStorage.setItem(key, JSON.stringify(value))
          } catch (error) {
            console.warn(`Unable to write localStorage key "${key}"`, error)
          }
        }

        return value
      })
    },
    [key],
  )

  return [storedValue, setValue]
}
