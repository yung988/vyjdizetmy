"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import site from "@/content/site.json"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  return (
    <header className="w-full">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 py-3">
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center border border-border">
                  <svg width="16" height="16" viewBox="0 0 24 24" className="text-foreground">
                    <path d="M12 2c2 3 3 5 3 7a3 3 0 11-6 0c0-2 1-4 3-7zm0 9c-5 0-9 4-9 9h18c0-5-4-9-9-9z" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-semibold text-[18px] tracking-tight text-foreground">{site.brandName}</span>
              </div>

              <div className="hidden md:flex items-center gap-7">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'O mně' },
                  { id: 'how-we-work', label: 'Jak pracuji' },
                  { id: 'results', label: 'Výsledky' },
                  { id: 'contact', label: 'Kontakt' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'home') {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      } else {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-[14px] tracking-[0.06em] uppercase text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Přepnout tmavý režim"
                >
                  {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
                <Button
                  variant="pill"
                  className="hidden sm:flex px-6 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[20px] font-semibold"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Objednat konzultaci
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>

                {/* Compact mobile CTA icon */}
                <button
                  className="sm:hidden p-2 rounded-full bg-[var(--primary)] text-white mr-1"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  aria-label="Objednat konzultaci"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z" />
                  </svg>
                </button>
                <button
                  className="md:hidden p-2"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Spacer to offset fixed header height */}
      <div className="h-16" />

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-2 py-4 border-t border-border overflow-hidden mx-6"
          >
            <div className="flex flex-col space-y-4">
              {[
                { id: 'about', label: 'O mně' },
                { id: 'how-we-work', label: 'Jak pracuji' },
                { id: 'results', label: 'Výsledky' },
                { id: 'contact', label: 'Kontakt' },
              ].map((item, idx) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }}
                  className="text-foreground hover:text-[var(--accent-mint)] transition-colors text-left text-[14px] tracking-[0.06em] uppercase"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                className="flex items-center justify-between py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <span className="text-sm text-muted-foreground">Tmavý režim</span>
                <button
                  onClick={() => {
                    toggleDarkMode()
                    setIsMenuOpen(false)
                  }}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Přepnout tmavý režim"
                >
                  {isDark ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  className="bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 rounded-[20px] w-full justify-center font-semibold"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }}
                >
                  Objednat konzultaci
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
