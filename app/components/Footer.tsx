"use client"

import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp, Code, Trophy, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDownloadCV = () => {
    window.open("https://drive.google.com/file/d/1e-ZqGVmnfXmJ6rzvUI3jmAwVA5hIeFyv/view?usp=drive_link", "_blank")
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Vaibhaviitian", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vaibhav-aryan-00650b287/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/aryanvaibhav15/", label: "Instagram" },
    { icon: Mail, href: "mailto:23je1055@iitism.ac.in", label: "Email" },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const competitiveProgramming = [
    { name: "Codeforces", href: "https://codeforces.com/profile/DecodeX" },
    { name: "LeetCode", href: "https://leetcode.com/u/Varyan/" },
    { name: "AtCoder", href: "https://atcoder.jp/users/vaibhaviitian" },
    { name: "CodeChef", href: "https://www.codechef.com/users/code_learnerva" },
  ]

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Vaibhav Aryan
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Third-year Mining Engineering student at IIT (ISM) Dhanbad, passionate about full-stack development and
              competitive programming. Active member of{" "}
              <a
                href="https://cyberlabs.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center"
              >
                CYBERLABS <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              .
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-6">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Dhanbad, Jharkhand • Originally from Banda, UP</span>
            </div>

            {/* CV Download Button */}
            <button
              onClick={handleDownloadCV}
              className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 hover:bg-purple-500/20"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Competitive Programming */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
              Coding Profiles
            </h3>
            <ul className="space-y-2">
              {competitiveProgramming.map((platform, index) => (
                <li key={index}>
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  >
                    {platform.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-white mb-2">Recent Achievements</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span className="flex items-center">
                <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
                Rank 4 in HaXplore-CodeFest '25 (IIT BHU)
              </span>
              <span className="flex items-center">
                <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
                Rank 2 in HackFest'25 (IIT Dhanbad)
              </span>
              <span className="flex items-center">
                <Trophy className="w-4 h-4 mr-1 text-yellow-400" />
                Winner of Winter of Code 6.0
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Vaibhav Aryan
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  )
}
