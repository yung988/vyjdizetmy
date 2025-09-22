"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Úvod", icon: "🏠" },
  { id: "about", label: "O mně", icon: "👤" },
  { id: "services", label: "Služby", icon: "💼" },
  { id: "testimonials", label: "Reference", icon: "⭐" },
  { id: "pricing", label: "Ceník", icon: "💰" },
  { id: "contact", label: "Kontakt", icon: "📞" }
]

export function SectionNavigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Show navigation after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.5)

      // Update active section based on scroll position
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = sectionId === "hero" ? 0 : 80 // Account for header
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      })
    }
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-primary/20">
        <nav className="flex flex-col gap-2">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`relative w-12 h-12 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground shadow-md scale-110"
                  : "bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:scale-105"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={section.label}
            >
              {section.icon}
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-primary rounded-xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Progress indicator */}
        <div className="mt-4 w-1 h-16 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-t from-primary to-secondary rounded-full"
            style={{
              height: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%`
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  )
}