"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Úvod" },
  { id: "about", label: "O mně" },
  { id: "services", label: "Služby" },
  { id: "testimonials", label: "Reference" },
  { id: "pricing", label: "Ceník" },
  { id: "contact", label: "Kontakt" }
]

export function SectionProgress() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight - windowHeight

      // Update scroll progress
      setScrollProgress((scrollY / docHeight) * 100)

      // Update active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offset: section.id === "hero" ? 0 : windowHeight * 0.3
      }))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element, offset } = sectionElements[i]
        if (element && scrollY >= element.offsetTop - offset) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection)

  return (
    <div className="fixed top-20 left-6 z-30 hidden lg:block">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/20 min-w-[200px]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">
            {sections[currentSectionIndex]?.label}
          </span>
        </div>

        {/* Section progress */}
        <div className="space-y-2">
          {sections.map((section, index) => (
            <div key={section.id} className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index <= currentSectionIndex ? 'bg-primary' : 'bg-muted'
              }`}></div>
              <span className={`text-xs transition-colors duration-300 ${
                index === currentSectionIndex ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}>
                {section.label}
              </span>
            </div>
          ))}
        </div>

        {/* Overall progress bar */}
        <div className="mt-4 w-full bg-muted rounded-full h-1 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
      </div>
    </div>
  )
}