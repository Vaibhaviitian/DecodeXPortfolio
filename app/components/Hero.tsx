"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Linkedin, Mail, Download, Instagram } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Full-Stack Developer & Competitive Programmer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1e-ZqGVmnfXmJ6rzvUI3jmAwVA5hIeFyv/view?usp=drive_link", "_blank")
  }

  return (
    <section
      id="home"
      className="min-h-screen mt-16 sm:mt-20 flex items-center justify-center relative overflow-hidden px-4"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0 opacity-10">
          <svg width="60" height="60" className="absolute inset-0 w-full h-full" style={{ backgroundRepeat: "repeat" }}>
            <defs>
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="#9C92AC" fillOpacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-pink-500/10 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Vaibhav Aryan
            </span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 min-h-[32px] sm:min-h-[36px]">
            {text}
            <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
          </div>

          <p className="text-base sm:text-lg text-gray-400 mb-3 sm:mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed px-4">
            Third-year Mining Engineering student at IIT (ISM) Dhanbad, passionate about creating innovative web
            solutions and solving complex algorithmic challenges.
          </p>

          <p className="text-sm sm:text-md text-gray-500 mb-8 sm:mb-12 animate-fade-in-up-delayed px-4">
            📍 Currently in Dhanbad, Jharkhand • Originally from Banda, Uttar Pradesh
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
            <button
              onClick={scrollToProjects}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </button>

            <button
              onClick={handleDownloadCV}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-500 rounded-full font-semibold transition-all duration-300 hover:bg-purple-500 hover:scale-105 text-sm sm:text-base"
            >
              <span className="flex items-center justify-center space-x-2">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </span>
            </button>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 px-4">
            {[
              { icon: Github, href: "https://github.com/Vaibhaviitian", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-aryan-00650b287/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/aryanvaibhav15/", label: "Instagram" },
              { icon: Mail, href: "mailto:23je1055@iitism.ac.in", label: "Email" },
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 sm:p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:bg-purple-500/20"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-purple-400 transition-colors" />
                </a>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
      </div>
    </section>
  )
}
