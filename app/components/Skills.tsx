"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Code, Server, Database, Wrench, Brain, Trophy } from "lucide-react"

type Category = {
  title: string
  icon: React.ElementType
  color: string
  items: string[]
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  const categories: Category[] = [
    {
      title: "Languages",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      items: ["C", "C++", "JavaScript", "HTML5"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      color: "from-blue-500 to-cyan-500",
      items: ["React.js", "Node.js", "Express.js", "FastAPI", "ShadCN UI", "Chrome Extensions API"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      items: ["MongoDB", "Cloudinary (basic)"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      items: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "Concepts",
      icon: Brain,
      color: "from-violet-500 to-indigo-500",
      items: [
        "DSA",
        "OOP",
        "Operating Systems",
        "Computer Networks",
        "RESTful APIs",
        "JWT Authentication",
        "WebSockets",
      ],
    },
  ]

  const sportsProgramming = [
    { platform: "Codeforces", handle: "DecodeX", rating: "max 1202", solved: "550+" },
    { platform: "AtCoder", handle: "DecodeX", rating: "max 303", solved: "100+" },
    { platform: "CodeChef", handle: "DecodeX", rating: "max 1431", solved: "60+" },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-12 sm:py-16 md:py-20 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Aligned with your resume — clean and readable on all screens
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.title}
                className={`relative p-5 sm:p-6 rounded-xl border border-gray-700/60 bg-gray-800/40 backdrop-blur-sm transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${idx * 70}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${cat.color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm bg-gray-800/60 border border-gray-700 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Sports Programming */}
        <div
          className={`mt-10 sm:mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Sports Programming
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {sportsProgramming.map((p, i) => (
              <div
                key={p.platform}
                className="p-4 rounded-lg border border-gray-700/60 bg-gray-800/40 text-center"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="text-gray-300 text-sm">{p.platform}</div>
                <div className="text-white font-semibold">{p.handle}</div>
                <div className="text-purple-300 text-sm mt-1">{p.rating}</div>
                <div className="text-gray-400 text-xs mt-1">Problems Solved: {p.solved}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
