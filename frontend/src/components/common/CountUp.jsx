import { useEffect, useRef, useState } from 'react'

export default function CountUp({
  value,
  duration = 2000,
  suffix = '',
  className = '',
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          animate()
        }
      },
      { threshold: 0.6 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const animate = () => {
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOut
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  )
}
