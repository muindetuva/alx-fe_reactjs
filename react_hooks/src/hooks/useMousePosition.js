import { useEffect, useState } from 'react'

/**
 * Tracks the latest pointer coordinates in the browser window.
 * @returns {{x: number, y: number}} The current global cursor coordinates.
 */
export default function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return position
}
