"use client"

import type React from "react"

// Cursor provider disabled - no cursor modifications
export default function CursorProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
