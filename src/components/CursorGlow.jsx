import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function CursorGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth trailing effect
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 150)
      mouseY.set(e.clientY - 150)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <motion.div
      style={{
        left: springX,
        top: springY
      }}
      className="
        pointer-events-none
        fixed
        z-50
        w-[300px]
        h-[300px]
        rounded-full
        bg-indigo-500/20
        blur-[120px]
      "
    />
  )
}