"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.body.addEventListener("mouseleave", handleMouseLeave)
    document.body.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  return (
    <>
      {/* المؤشر الخارجي - محسن للأداء */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          type: "tween", 
          duration: 0.05,
          ease: "linear"
        }}
      >
        <div className="w-full h-full rounded-full bg-blue-500 opacity-60 border border-blue-400/30"></div>
      </motion.div>

      {/* المؤشر الداخلي - محسن للأداء */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue-400 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 0.75,
          y: mousePosition.y - 0.75,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          type: "tween", 
          duration: 0.03,
          ease: "linear"
        }}
      />


    </>
  )
}
