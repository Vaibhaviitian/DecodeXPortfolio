"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, ExternalLink, GitBranch } from "lucide-react";
export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </div>

        <div className="justify-center gap-8 sm:gap-10 items-center mb-10">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-100">
              Passionate Developer & Competitive Programmer & Open Source
              Contributor
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
              I'm a third-year Mining Engineering undergraduate at IIT (ISM)
              Dhanbad with a deep passion for technology and problem solving.
              Active member of{" "}
              <a
                href="https://cyberlabs.club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 inline-flex items-center"
              >
                CYBERLABS <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              . I love building pragmatic full‑stack products and sharpening
              problem‑solving with sports programming.
            </p>
            <p className="text-sm sm:text-base text-gray-300">
              Strong CS fundamentals: DS&A, OOP, OS, CN, REST APIs, JWT Auth,
              WebSockets. Comfortable across frontend and backend stacks with
              modern tooling.
            </p>

            {/* Contributor badge */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs sm:text-sm">
                <GitBranch className="w-4 h-4" />
                Open Source Contributor
              </span>
              <a
                href="https://github.com/Vaibhaviitian"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-300 hover:text-white underline/50 hover:underline"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Education */}
        <div
          className={`mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Education
            </h3>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              IIT (ISM) Dhanbad
            </h4>
            <p className="text-purple-400 font-semibold mb-1 text-sm sm:text-base">
              B.Tech in Mining Engineering • CGPA: 7.77/10
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mb-1">
              Expected June 2027 • Dhanbad, Jharkhand
            </p>
            <p className="text-gray-300 text-xs sm:text-sm">
              Relevant Coursework: C Programming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
