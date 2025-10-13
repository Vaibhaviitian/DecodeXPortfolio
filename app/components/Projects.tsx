"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const projects = [
    {
      id: 1,
      title: "CodeFusion - Collaborative Code Editor",
      description:
        "Real-time collaborative editor with Monaco, multi-language support, secure auth (JWT, OTP, Google OAuth), and AI assistant.",
      longDescription:
        "Built a collaborative online code editor supporting real-time editing for multiple users via Socket.io, integrated Monaco Editor for syntax highlighting and themes, and secure authentication with JWT, OTP, and Google OAuth. Added a responsive dashboard and an AI assistant for basic code suggestions.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "JWT", "Twilio", "Monaco Editor"],
      images: ["/collaborative-code-editor-monaco-ui.jpg", "/realtime-pair-programming-editor.jpg"],
      liveUrl: "https://code-fusion-code-collab.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "FinanceBrain AI - Financial Query Platform",
      description:
        "Real-time financial insights via voice/text queries with NLP, dashboards, and WebSocket-driven live updates.",
      longDescription:
        "Developed a platform enabling users to retrieve insights from enterprise data using voice and text queries. Integrated NLP modules for intent interpretation with ~85% accuracy, designed an intuitive dashboard, and used WebSockets for live communication and synchronization.",
      technologies: ["React.js", "Node.js", "Express.js", "Flask", "MongoDB", "WebSockets", "NLP"],
      images: ["/financial-dashboard-charts-and-graphs.jpg", "/nlp-voice-assistant-interface.jpg"],
      liveUrl: "https://hackfest2025.vercel.app/",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "TravelTrack - Travel Management Platform",
      description:
        "Full-stack travel platform with trip planning, community features, notifications, and collaboration tools.",
      longDescription:
        "Community-driven travel management platform with personalized dashboards, trip management, real-time notifications, rating, chatbot, and lost & found sections.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      images: ["/travel-app-hero-ui.jpg"],
      liveUrl: "https://traveltrack21.netlify.app/",
      githubUrl: "https://github.com/Vaibhaviitian/TravelTrackFrontend",
      featured: false,
    },
    {
      id: 4,
      title: "CollabSpace - Real-time Collaboration",
      description:
        "Secure team collaboration with real-time editing, version history, and cross-platform compatibility.",
      longDescription:
        "A modern collaboration platform featuring E2E encryption, multi-user editing, version history, and seamless sharing.",
      technologies: ["React", "TailwindCSS", "Framer Motion", "Node.js", "Express", "MongoDB"],
      images: ["/team-collaboration-app-dashboard.jpg"],
      liveUrl: "https://collabspacehub.vercel.app/",
      githubUrl: "https://github.com/Vaibhaviitian/Collabspace",
      featured: false,
    },
    {
      id: 5,
      title: "CricketXtra Browser Extension",
      description: "Browser extension with live scores, match schedules, and player statistics.",
      longDescription: "Feature-rich extension for cricket enthusiasts providing real-time updates and detailed stats.",
      technologies: ["HTML", "CSS", "JavaScript", "Chrome Extensions API"],
      images: ["/browser-extension-popup.png"],
      liveUrl: "#",
      githubUrl: "https://github.com/Vaibhaviitian/CricketExtension",
      featured: false,
    },
    {
      id: 6,
      title: "Face Recognition Security System",
      description: "ML-powered anti-spoofing system detecting real faces vs images in real time.",
      longDescription:
        "Computer vision system with real-time face detection and anti-spoofing algorithms using Python and Flask.",
      technologies: ["Python", "Machine Learning", "Computer Vision", "Flask"],
      images: ["/face-recognition-security-ui.jpg"],
      liveUrl: "#",
      githubUrl: "https://github.com/Vaibhaviitian/sih",
      featured: false,
    },
    {
      id: 7,
      title: "EasyNetlifyText - AI Content Generation",
      description: "AI tool for generating blogs, titles, summaries, and marketing content without sign-up.",
      longDescription: "Mobile-friendly MERN app integrating AI for fast content creation across multiple formats.",
      technologies: ["MERN Stack", "AI APIs", "Responsive Design"],
      images: ["/ai-content-generator-interface.png"],
      liveUrl: "https://easytext21.netlify.app/",
      githubUrl: "#",
      featured: false,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const openModal = (projectId: number) => {
    setSelectedProject(projectId)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "unset"
  }

  const nextImage = () => {
    const project = projects.find((p) => p.id === selectedProject)
    if (project) setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    const project = projects.find((p) => p.id === selectedProject)
    if (project) setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my development journey and practical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
              onClick={() => openModal(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && selectedProjectData && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-900/80 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Gallery */}
                <div className="relative">
                  <img
                    src={selectedProjectData.images[currentImageIndex] || "/placeholder.svg"}
                    alt={selectedProjectData.title}
                    className="w-full h-64 md:h-96 object-cover"
                  />

                  {selectedProjectData.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-900/80 rounded-full hover:bg-gray-700 transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Indicators */}
                  {selectedProjectData.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                      {selectedProjectData.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-white" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">{selectedProjectData.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedProjectData.longDescription}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selectedProjectData.liveUrl !== "#" && (
                      <a
                        href={selectedProjectData.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:scale-105 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {selectedProjectData.githubUrl !== "#" && (
                      <a
                        href={selectedProjectData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
