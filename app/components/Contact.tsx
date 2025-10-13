"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react"
import Toast from "./Toast"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: "success" | "error" | "info"
    isVisible: boolean
  }>({
    message: "",
    type: "success",
    isVisible: false,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const sendEmail = async (formData: any) => {
    // In a real application, you would send this to your backend API
    // For now, we'll simulate the email sending process
    const emailData = {
      to: "aryanvaibhav74@gmail.com",
      subject: `Portfolio Contact: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Email would be sent to:", emailData.to)
        console.log("Email content:", emailData)
        resolve(true)
      }, 2000)
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email (in real app, this would be an API call)
      await sendEmail(formData)

      // Show success toast
      setToast({
        message: "Thanks for reaching out! I'll get back to you soon. Your message has been sent successfully! 🚀",
        type: "success",
        isVisible: true,
      })

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      // Show error toast
      setToast({
        message: "Oops! Something went wrong. Please try again or contact me directly via email.",
        type: "error",
        isVisible: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "23je1055@iitism.ac.in",
      href: "mailto:23je1055@iitism.ac.in",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "830-313-1343",
      href: "tel:8303131343",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhanbad, Jharkhand",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@Vaibhaviitian",
      href: "https://github.com/Vaibhaviitian",
      color: "text-gray-400 hover:text-white",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Vaibhav Aryan",
      href: "https://www.linkedin.com/in/vaibhav-aryan-00650b287/",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@aryanvaibhav15",
      href: "https://www.instagram.com/aryanvaibhav15/",
      color: "text-pink-400 hover:text-pink-300",
    },
  ]

  return (
    <>
      <Toast message={toast.message} type={toast.type} isVisible={toast.isVisible} onClose={closeToast} />

      <section id="contact" ref={sectionRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's discuss how we can work together to bring innovative
              ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold mb-8 text-white">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in new opportunities, exciting projects, and meaningful collaborations. Whether
                you have a question about my work, want to discuss a potential project, or just want to say hello, I'd
                love to hear from you.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="group flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-400">{info.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Follow Me</h4>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="p-3 bg-gray-700 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                        <Icon className={`w-6 h-6 ${social.color} transition-colors`} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-purple-400 transition-colors">
                          {social.title}
                        </h4>
                        <p className="text-gray-400">{social.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
                <h4 className="text-white font-semibold mb-2">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  I typically respond to messages within 24 hours. For urgent matters, feel free to call or send a
                  direct email.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
