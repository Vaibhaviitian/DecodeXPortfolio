"use client"

import { useEffect, useRef, useState, useCallback } from "react"

// Fixed background settings - no user controls
const BACKGROUND_SETTINGS = {
  opacity: 22, // Fixed at 22% for optimal readability
  animationsEnabled: true,
  particlesEnabled: true,
  shapesEnabled: true,
  gradientEnabled: true,
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const shapesRef = useRef<Shape[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  // Particle class
  class Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    maxOpacity: number
    life: number
    maxLife: number
    color: string

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.5
      this.vy = (Math.random() - 0.5) * 0.5
      this.size = Math.random() * 3 + 1
      this.maxOpacity = Math.random() * 0.5 + 0.2
      this.opacity = 0
      this.maxLife = Math.random() * 300 + 200
      this.life = 0
      this.color = this.getRandomColor()
    }

    getRandomColor(): string {
      const colors = ["#8B5CF6", "#06B6D4", "#EC4899", "#10B981", "#F59E0B"]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    update(canvas: HTMLCanvasElement, mouseX: number, mouseY: number) {
      // Mouse interaction
      const dx = mouseX - this.x
      const dy = mouseY - this.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 100) {
        const force = (100 - distance) / 100
        this.vx += (dx / distance) * force * 0.01
        this.vy += (dy / distance) * force * 0.01
      }

      this.x += this.vx
      this.y += this.vy
      this.life++

      // Boundary wrapping
      if (this.x < 0) this.x = canvas.width
      if (this.x > canvas.width) this.x = 0
      if (this.y < 0) this.y = canvas.height
      if (this.y > canvas.height) this.y = 0

      // Opacity animation
      const lifeCycle = this.life / this.maxLife
      if (lifeCycle < 0.1) {
        this.opacity = (lifeCycle / 0.1) * this.maxOpacity
      } else if (lifeCycle > 0.9) {
        this.opacity = ((1 - lifeCycle) / 0.1) * this.maxOpacity
      } else {
        this.opacity = this.maxOpacity
      }

      // Reset particle when life ends
      if (this.life >= this.maxLife) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.life = 0
        this.color = this.getRandomColor()
      }
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.globalAlpha = this.opacity
      ctx.fillStyle = this.color
      ctx.shadowBlur = 10
      ctx.shadowColor = this.color
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }
  }

  // Shape class
  class Shape {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    rotation: number
    rotationSpeed: number
    opacity: number
    type: "circle" | "triangle" | "hexagon"
    color: string

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.vx = (Math.random() - 0.5) * 0.3
      this.vy = (Math.random() - 0.5) * 0.3
      this.size = Math.random() * 40 + 20
      this.rotation = Math.random() * Math.PI * 2
      this.rotationSpeed = (Math.random() - 0.5) * 0.02
      this.opacity = Math.random() * 0.1 + 0.05
      this.type = ["circle", "triangle", "hexagon"][Math.floor(Math.random() * 3)] as any
      this.color = this.getRandomColor()
    }

    getRandomColor(): string {
      const colors = ["#8B5CF6", "#06B6D4", "#EC4899", "#10B981", "#F59E0B"]
      return colors[Math.floor(Math.random() * colors.length)]
    }

    update(canvas: HTMLCanvasElement) {
      this.x += this.vx
      this.y += this.vy
      this.rotation += this.rotationSpeed

      // Boundary wrapping
      if (this.x < -this.size) this.x = canvas.width + this.size
      if (this.x > canvas.width + this.size) this.x = -this.size
      if (this.y < -this.size) this.y = canvas.height + this.size
      if (this.y > canvas.height + this.size) this.y = -this.size
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save()
      ctx.globalAlpha = this.opacity
      ctx.translate(this.x, this.y)
      ctx.rotate(this.rotation)
      ctx.strokeStyle = this.color
      ctx.lineWidth = 2
      ctx.shadowBlur = 5
      ctx.shadowColor = this.color

      switch (this.type) {
        case "circle":
          ctx.beginPath()
          ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2)
          ctx.stroke()
          break
        case "triangle":
          ctx.beginPath()
          ctx.moveTo(0, -this.size / 2)
          ctx.lineTo(-this.size / 2, this.size / 2)
          ctx.lineTo(this.size / 2, this.size / 2)
          ctx.closePath()
          ctx.stroke()
          break
        case "hexagon":
          ctx.beginPath()
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3
            const x = (Math.cos(angle) * this.size) / 2
            const y = (Math.sin(angle) * this.size) / 2
            if (i === 0) ctx.moveTo(x, y)
            else ctx.lineTo(x, y)
          }
          ctx.closePath()
          ctx.stroke()
          break
      }
      ctx.restore()
    }
  }

  // Initialize particles and shapes
  const initializeElements = useCallback((canvas: HTMLCanvasElement) => {
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 30 : 60
    const shapeCount = isMobile ? 8 : 15

    particlesRef.current = Array.from({ length: particleCount }, () => new Particle(canvas))
    shapesRef.current = Array.from({ length: shapeCount }, () => new Shape(canvas))
  }, [])

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !BACKGROUND_SETTINGS.animationsEnabled) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw gradient background
    if (BACKGROUND_SETTINGS.gradientEnabled) {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2,
      )

      const time = Date.now() * 0.001
      const r1 = Math.sin(time * 0.5) * 50 + 100
      const g1 = Math.sin(time * 0.7) * 50 + 100
      const b1 = Math.sin(time * 0.9) * 50 + 150
      const r2 = Math.sin(time * 0.3) * 50 + 50
      const g2 = Math.sin(time * 0.5) * 50 + 150
      const b2 = Math.sin(time * 0.7) * 50 + 100

      gradient.addColorStop(0, `rgba(${r1}, ${g1}, ${b1}, 0.1)`)
      gradient.addColorStop(1, `rgba(${r2}, ${g2}, ${b2}, 0.05)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Update and draw particles
    if (BACKGROUND_SETTINGS.particlesEnabled) {
      particlesRef.current.forEach((particle) => {
        particle.update(canvas, mouseRef.current.x, mouseRef.current.y)
        particle.draw(ctx)
      })
    }

    // Update and draw shapes
    if (BACKGROUND_SETTINGS.shapesEnabled) {
      shapesRef.current.forEach((shape) => {
        shape.update(canvas)
        shape.draw(ctx)
      })
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [])

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }, [])

  // Handle resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initializeElements(canvas)
  }, [initializeElements])

  // Initialize canvas and start animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return // Don't start animations if user prefers reduced motion
    }

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    initializeElements(canvas)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(canvas)

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Handle tab visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      } else if (BACKGROUND_SETTINGS.animationsEnabled && isVisible) {
        animate()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      observer.disconnect()
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [handleResize, handleMouseMove, animate, initializeElements, isVisible])

  // Start/stop animation based on visibility and settings
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (BACKGROUND_SETTINGS.animationsEnabled && isVisible && !document.hidden && !prefersReducedMotion) {
      animate()
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, isVisible])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: BACKGROUND_SETTINGS.opacity / 100,
        transition: "opacity 0.3s ease",
      }}
    />
  )
}
