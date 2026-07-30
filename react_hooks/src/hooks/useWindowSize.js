import { useEffect, useState } from 'react'

function readWindowSize() {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 }
  }

  return { width: window.innerWidth, height: window.innerHeight }
}

/**
 * Tracks the browser viewport dimensions with safe lazy initialization.
 * @returns {{width: number, height: number}} Current viewport dimensions.
 */
export default function useWindowSize() {
  const [size, setSize] = useState(readWindowSize)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleResize = () => {
      setSize(readWindowSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
