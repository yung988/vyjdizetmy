"use client"

import { motion } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"

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
                className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="block text-sage"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Najděte cestu
                </motion.span>
                <motion.span
                  className="block text-gradient"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  k vnitřnímu klidu
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Transformujte své podvědomí metodou PSYCH-K® a objevte život bez limitů
              </motion.p>
            </div>

            {/* Modern CTA buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary group relative px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Začít transformaci - přejít na kontaktní formulář"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Začít transformaci</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border-2 border-primary/30 text-primary rounded-full font-semibold text-lg hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Zjistit více o metodě - přejít na sekci o mně"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                O metodě
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

          {/* Pravá strana - vizuální prvky */}
          <div className="relative">
            {/* Trust badges a stats */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-primary border border-primary/20">
                  PSYCH-K® Certified
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-secondary border border-secondary/20">
                  10+ let praxe
                </div>
              </motion.div>

              {/* Stats cards */}
              <motion.div
                className="grid grid-cols-1 gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <motion.div
                  className="card-soft p-6 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Spokojených klientů</div>
                </motion.div>
                <motion.div
                  className="card-soft p-6 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-secondary mb-1">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Úspěšnost transformace</div>
                </motion.div>
                <motion.div
                  className="card-soft p-6 text-center"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-3xl font-bold text-sage mb-1">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="text-sm text-muted-foreground">Let zkušeností</div>
                </motion.div>
              </motion.div>
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