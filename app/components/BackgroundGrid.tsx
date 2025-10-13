"use client"

import { useEffect, useState } from "react"

// Fixed grid settings - no user controls
const GRID_OPACITY = 0.05

export default function BackgroundGrid() {
  const [opacity, setOpacity] = useState(GRID_OPACITY)

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      return // Don't animate if user prefers reduced motion
    }

    const interval = setInterval(() => {
      setOpacity((prev) => {
        const newOpacity = prev + (Math.random() - 0.5) * 0.02
        return Math.max(0.02, Math.min(0.08, newOpacity))
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000" style={{ opacity }}>
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#gridGradient)" strokeWidth="1" />
          </pattern>
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}
