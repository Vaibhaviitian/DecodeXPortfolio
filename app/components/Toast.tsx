"use client"

import { useEffect } from "react"
import { CheckCircle, X, Mail } from "lucide-react"

interface ToastProps {
  message: string
  type: "success" | "error" | "info"
  isVisible: boolean
  onClose: () => void
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-6 h-6 text-green-400" />
      case "error":
        return <X className="w-6 h-6 text-red-400" />
      case "info":
        return <Mail className="w-6 h-6 text-blue-400" />
      default:
        return <CheckCircle className="w-6 h-6 text-green-400" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500/20 border-green-500/50"
      case "error":
        return "bg-red-500/20 border-red-500/50"
      case "info":
        return "bg-blue-500/20 border-blue-500/50"
      default:
        return "bg-green-500/20 border-green-500/50"
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50 animate-fade-in-up">
      <div
        className={`flex items-center space-x-3 p-4 rounded-lg border backdrop-blur-sm ${getBgColor()} shadow-lg max-w-md`}
      >
        {getIcon()}
        <div className="flex-1">
          <p className="text-white font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
