"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import site from "@/content/site.json"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Vylepšený background s organickými tvary */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand/80 via-background to-primary-soft/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,102,159,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(155,141,196,0.12),transparent_50%)]" />

      {/* Jednoduchý floating element */}
      <div className="absolute top-32 right-16 w-6 h-6 bg-primary/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-32 left-16 w-4 h-4 bg-secondary/25 rounded-full animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-8 w-3 h-3 bg-tertiary/30 rounded-full animate-float-slow" style={{animationDelay: '2s'}} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Levá strana - text content */}
          <div className="space-y-8">
            {/* Modern typography */}
            <div className="space-y-6">
              <motion.h1
                className="text-[48px] lg:text-[56px] font-bold tracking-tight leading-[1.08]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {site.hero.heading1} <em className="not-italic"> </em>
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <em className="italic text-[var(--accent-mint)]">{site.hero.heading2}</em>
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-[16px] lg:text-[18px] text-muted-foreground max-w-[680px] leading-[1.6]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {site.hero.subheading}
              </motion.p>
            </div>

            {/* CTA buttons per brief */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-6 py-3 bg-[var(--primary)] text-[var(--primary-foreground)] rounded-[20px] font-semibold text-base"
                aria-label="Objednat konzultaci"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {site.hero.primaryCta}
              </motion.button>
              {/* Secondary CTA switches by breakpoint */}
              {/* Mobile: Zjistit víc (scroll to about) */}
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="sm:hidden px-6 py-3 rounded-[20px] font-semibold text-base bg-[var(--accent-mint)] text-[#113322] hover:opacity-90 transition"
                aria-label="Zjistit víc"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Zjistit víc
              </motion.button>
              {/* Desktop: WhatsApp */}
              <motion.button
                onClick={() => window.open('https://wa.me/', '_blank')}
                className="hidden sm:inline-flex px-6 py-3 rounded-[20px] font-semibold text-base bg-[var(--accent-mint)] text-[#113322] hover:opacity-90 transition items-center gap-2"
                aria-label="Kontaktovat přes WhatsApp"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0012 0C5.4 0 0 5.4 0 12a11.86 11.86 0 003.48 8.52L2.4 24l3.6-1.08A11.86 11.86 0 0012 24c6.6 0 12-5.4 12-12 0-3.18-1.32-6.24-3.48-8.52zM12 22.08a10.08 10.08 0 01-5.16-1.44l-.36-.24-2.16.66.66-2.1-.24-.36A10.08 10.08 0 1122.08 12 10.08 10.08 0 0112 22.08zm5.64-7.38c-.3-.12-1.74-.84-2.01-.93-.27-.09-.45-.12-.63.12-.18.24-.72.93-.9 1.11-.18.18-.33.21-.63.09-.3-.12-1.26-.45-2.4-1.44-.9-.81-1.5-1.8-1.68-2.1-.18-.3 0-.45.12-.57.12-.12.27-.33.39-.51.12-.18.18-.3.27-.51.09-.24.03-.45-.03-.63-.06-.18-.63-1.5-.87-2.04-.24-.57-.48-.48-.66-.48h-.57c-.18 0-.45.06-.69.33-.24.24-.9.87-.9 2.1 0 1.23.93 2.43 1.05 2.61.12.18 1.83 2.79 4.44 3.9 2.61 1.11 2.61.75 3.09.72.48-.03 1.5-.6 1.71-1.17.21-.57.21-1.05.15-1.17-.06-.12-.24-.18-.54-.3z"/></svg>
                {site.hero.secondaryCta}
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-secondary/20 rounded-full border-2 border-background"></div>
                <div className="w-8 h-8 bg-sage/20 rounded-full border-2 border-background"></div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">98%</span> spokojených klientů
              </div>
            </motion.div>
          </div>

          {/* Pravá strana - fotokarta s "tag" štítky (inspirováno referenčními obrázky) */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-xl"
            >
              <div className="aspect-[4/5] w-full">
                <Image
                  src="/sofiatherapy4.webp"
                  alt="Sabina Weisbergerová – facilitátorka PSYCH-K®"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Horní pravý roh: pilulka Book now */}
              <div className="absolute top-4 right-4">
                <Button
                  variant="pill"
                  size="sm"
                  className="bg-card/80 backdrop-blur-md border border-border text-foreground hover:bg-card/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book now
                </Button>
              </div>

              {/* Plovoucí tagy */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/70 backdrop-blur-sm">✨ Průzkum</Badge>
                <Badge variant="outline" className="bg-white/70 backdrop-blur-sm">🌱 Růst</Badge>
                <Badge variant="outline" className="bg-white/70 backdrop-blur-sm">💖 Healing</Badge>
              </div>

              {/* Spodní rating karta */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                <div className="card-soft px-4 py-3 rounded-2xl border bg-white/90 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.217 3.744a1 1 0 00.95.69h3.938c.776 0 1.101.994.472 1.45l-3.181 2.31a1 1 0 00-.363 1.118l1.217 3.744c.3.922-.756 1.688-1.539 1.118l-3.18-2.31a1 1 0 00-1.176 0l-3.18 2.31c-.783.57-1.839-.196-1.539-1.118l1.217-3.744a1 1 0 00-.363-1.118L2.423 8.81c-.629-.456-.304-1.45.472-1.45h3.938a1 1 0 00.95-.69l1.217-3.744z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-foreground">200+ hodnocení</span>
                  </div>
                  <Button size="sm" className="btn-primary px-3 py-1 text-sm">Rezervovat</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            className="w-1 h-3 bg-primary/50 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
