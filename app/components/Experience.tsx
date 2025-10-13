"use client"

export default function Experience() {
  // Simple, text-first, always-visible content
  const items = [
    {
      type: "achievement",
      title: "HaXplore-CodeFest '25 Winner",
      org: "IIT BHU Varanasi",
      period: "2025",
      desc: "Achieved Rank 4 in HaXplore-CodeFest '25, competing among 350+ teams.",
      bullets: ["Rank 4 among 350+ teams", "Innovative solution development", "Team collaboration excellence"],
    },
    {
      type: "achievement",
      title: "HackFest'25 Organizer & Winner",
      org: "IIT (ISM) Dhanbad",
      period: "2025",
      desc: "Official organizer for HackFest'25 (36-hour hackathon) and secured Rank 2 as participant.",
      bullets: ["Organized 36-hour hackathon", "Rank 2 in competition", "Event management & coordination"],
    },
    {
      type: "achievement",
      title: "Winter of Code 6.0 Winner",
      org: "Web Development Division",
      period: "2024",
      desc: "Winner in Web Development Division — top 11 among 300+ participants.",
      bullets: ["Top 11 among 300+", "Web development excellence", "Open source contributions"],
    },
    {
      type: "work",
      title: "Tech Team Member",
      org: "Parakram'25 - Annual Sports Fest",
      period: "2024 - Present",
      desc: "Contributed to official website development and technical support.",
      bullets: ["Website development & maintenance", "Event tech support", "Cross-functional collaboration"],
    },
    {
      type: "work",
      title: "Web Development Instructor",
      org: "CYBERLABS - IIT (ISM) Dhanbad",
      period: "2024",
      desc: "Taught web development fundamentals to first-year students.",
      bullets: ["Taught 50+ students", "Curriculum development", "Mentoring & guidance"],
    },
    {
      type: "education",
      title: "B.Tech Mining Engineering",
      org: "IIT (ISM) Dhanbad",
      period: "2023 - 2027",
      desc: "Bachelor of Technology with strong CS fundamentals and programming.",
      bullets: ["OS, DBMS, OOP foundations", "Active CYBERLABS member", "Competitive programming experience"],
    },
  ]

  const tagStyles: Record<string, string> = {
    work: "text-indigo-300 bg-indigo-500/10 border border-indigo-500/30",
    achievement: "text-amber-300 bg-amber-500/10 border border-amber-500/30",
    education: "text-emerald-300 bg-emerald-500/10 border border-emerald-500/30",
  }

  return (
    <section id="experience" className="py-16 px-4 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experience & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Simple Vertical Timeline */}
        <ol className="relative border-s border-gray-700 pl-6 md:pl-8 space-y-8">
          {items.map((it, idx) => (
            <li key={idx} className="relative">
              {/* Dot */}
              <span
                className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-[0_0_0_3px_rgba(147,51,234,0.15)]"
                aria-hidden="true"
              />
              {/* Content */}
              <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 md:p-5">
                <div className="flex flex-wrap items-center gap-2 justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{it.title}</h3>
                  <span className="text-xs md:text-sm text-gray-400">{it.period}</span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-purple-300 font-medium">{it.org}</span>
                  <span className={`text-[11px] md:text-xs px-2 py-0.5 rounded-full ${tagStyles[it.type] || ""}`}>
                    {it.type.charAt(0).toUpperCase() + it.type.slice(1)}
                  </span>
                </div>
                {it.desc && <p className="mt-2 text-gray-300 text-sm md:text-base">{it.desc}</p>}

                {it.bullets?.length ? (
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-400 text-sm md:text-base">
                    {it.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        {/* Club Involvement - Simple bullets (optional, small and mobile-friendly) */}
        <div className="mt-10 rounded-lg border border-gray-700/60 bg-gray-800/40 p-4 md:p-5">
          <h3 className="text-xl font-semibold text-white mb-3">Club Involvement</h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-300 text-sm md:text-base">
            <li>CYBERLABS — Official Programming and Development Club of IIT (ISM) Dhanbad</li>
            <li>Parakram'25 — Tech Team Member for Annual Sports Fest</li>
            <li>HackFest'25 — Official Organizer for 36-Hour Hackathon</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
