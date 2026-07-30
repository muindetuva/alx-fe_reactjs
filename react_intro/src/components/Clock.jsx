import { useEffect, useState } from 'react'

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
      console.log('Clock interval cleaned up')
    }
  }, [])

  return (
    <p className="clock" role="timer" aria-live="off">
      {currentTime.toLocaleTimeString()}
    </p>
  )
}

export default Clock
