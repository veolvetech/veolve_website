import { useEffect, useState } from 'react'

export default function FakeCount({
  value,
  suffix = '',
  duration = 2000, // total animation time
  speed = 30,      // VERY FAST flicker
}) {
  const [display, setDisplay] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let intervalId
    const start = Date.now()

    intervalId = setInterval(() => {
      const elapsed = Date.now() - start

      if (elapsed >= duration) {
        clearInterval(intervalId)
        setDisplay(value)
        setDone(true)
      } else {
        // random fast flicker (never show suffix here)
        const random = Math.floor(Math.random() * value * 2)
        setDisplay(random)
      }
    }, speed)

    return () => clearInterval(intervalId)
  }, [value, duration, speed])

  return (
    <span>
      {display}
      {done && suffix}
    </span>
  )
}
