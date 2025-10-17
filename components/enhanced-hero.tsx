"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function EnhancedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let devicePixelRatio: number
    let animationId: number

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      targetX = e.clientX - rect.left
      targetY = e.clientY - rect.top
    }

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const rect = canvas.getBoundingClientRect()
      const touch = e.touches[0]
      if (touch) {
        targetX = touch.clientX - rect.left
        targetY = touch.clientY - rect.top
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: false })

    // Enhanced Particle class with 3D-like effects
    class EnhancedParticle {
      x: number
      y: number
      z: number
      size: number
      baseX: number
      baseY: number
      baseZ: number
      density: number
      color: string
      distance: number
      rotationX: number
      rotationY: number
      rotationSpeed: number
      pulse: number
      pulseSpeed: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.z = Math.random() * 100
        this.baseX = x
        this.baseY = y
        this.baseZ = this.z
        this.size = Math.random() * 2 + 1 // تصغير الحجم أكثر // Smaller particles for mobile
        this.density = Math.random() * 20 + 1 // Reduced density for better performance
        this.distance = 0
        this.rotationX = 0
        this.rotationY = 0
        this.rotationSpeed = Math.random() * 0.02 + 0.01
        this.pulse = 0
        this.pulseSpeed = Math.random() * 0.05 + 0.02

        // Enhanced color palette
        const colorOptions = [
          `hsl(${200 + Math.random() * 60}, 80%, 60%)`, // Blues to cyans
          `hsl(${280 + Math.random() * 40}, 70%, 65%)`, // Purples to magentas
          `hsl(${320 + Math.random() * 40}, 75%, 70%)`, // Magentas to pinks
        ]
        this.color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      }

      update() {
        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        this.distance = Math.sqrt(dx * dx + dy * dy)

        const forceDirectionX = dx / this.distance
        const forceDirectionY = dy / this.distance

        const maxDistance = window.innerWidth < 768 ? 80 : 120 // Smaller interaction area on mobile
        const force = (maxDistance - this.distance) / maxDistance

        if (this.distance < maxDistance) {
          const directionX = forceDirectionX * force * this.density * 0.3 // Reduced force for smoother mobile experience
          const directionY = forceDirectionY * force * this.density * 0.3

          this.x -= directionX
          this.y -= directionY
          this.z += force * 15
        } else {
          // Return to base position
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX
            this.x -= dx / 15
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY
            this.y -= dy / 15
          }
          if (this.z !== this.baseZ) {
            const dz = this.z - this.baseZ
            this.z -= dz / 15
          }
        }

        // Rotation and pulse effects
        this.rotationX += this.rotationSpeed
        this.rotationY += this.rotationSpeed * 0.7
        this.pulse += this.pulseSpeed

        // Smooth mouse following
        mouseX += (targetX - mouseX) * 0.05
        mouseY += (targetY - mouseY) * 0.05
      }

      draw() {
        const scale = 1 + this.z / 200
        const alpha = Math.max(0.3, 1 - this.z / 150)
        const pulseSize = this.size * (1 + Math.sin(this.pulse) * 0.3) * scale

        // Create gradient for 3D effect
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseSize)
        gradient.addColorStop(0, this.color.replace(")", `, ${alpha})`).replace("hsl", "hsla"))
        gradient.addColorStop(0.7, this.color.replace(")", `, ${alpha * 0.5})`).replace("hsl", "hsla"))
        gradient.addColorStop(1, this.color.replace(")", `, 0)`).replace("hsl", "hsla"))

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
        ctx.fill()

        // Add inner glow
        ctx.fillStyle = this.color.replace(")", `, ${alpha * 0.8})`).replace("hsl", "hsla")
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize * 0.4, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create enhanced particle grid
    const particlesArray: EnhancedParticle[] = []
    const isMobile = window.innerWidth < 768
    const gridSize = isMobile ? 45 : 40 // شبكة أكبر = جسيمات أقل // Larger grid for mobile to reduce particle count

    function init() {
      particlesArray.length = 0

      const canvasWidth = canvas.width / devicePixelRatio
      const canvasHeight = canvas.height / devicePixelRatio

      const numX = Math.floor(canvasWidth / gridSize)
      const numY = Math.floor(canvasHeight / gridSize)

      for (let y = 0; y < numY; y++) {
        for (let x = 0; x < numX; x++) {
          const posX = x * gridSize + gridSize / 2 + (Math.random() - 0.5) * 10
          const posY = y * gridSize + gridSize / 2 + (Math.random() - 0.5) * 10
          particlesArray.push(new EnhancedParticle(posX, posY))
        }
      }
    }

    init()

    // Enhanced animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)

      // Create background gradient
      const bgGradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200)
      bgGradient.addColorStop(0, "rgba(59, 130, 246, 0.02)")
      bgGradient.addColorStop(0.5, "rgba(147, 51, 234, 0.01)")
      bgGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Draw enhanced connections (reduced for mobile performance)
      const connectionDistance = isMobile ? 60 : 80
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x
          const dy = particlesArray[i].y - particlesArray[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = ((connectionDistance - distance) / connectionDistance) * 0.3
            const gradient = ctx.createLinearGradient(
              particlesArray[i].x,
              particlesArray[i].y,
              particlesArray[j].x,
              particlesArray[j].y,
            )
            gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity})`)
            gradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 0.8})`)
            gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity})`)

            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
      init()
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative overflow-hidden rounded-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl" />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 p-[1px] sm:p-[2px]">
        <div className="w-full h-full bg-zinc-900/80 rounded-2xl" />
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full rounded-2xl touch-none"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Floating elements - smaller on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-5 sm:top-8 left-5 sm:left-8 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-5 sm:bottom-8 right-5 sm:right-8 w-6 sm:w-10 lg:w-12 h-6 sm:h-10 lg:h-12 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-5 sm:w-8 lg:w-10 h-5 sm:h-8 lg:h-10 bg-pink-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </motion.div>
  )
}
