
"use client"

import { AnimatedCounter } from "./animated-counter"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import testimonialsData from "@/content/testimonials.json"

export function TestimonialsSection() {
  // Load testimonials from JSON
  const testimonials = testimonialsData.testimonials

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="w-full py-20 bg-gradient-to-br from-amber-50 via-background to-amber-100/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-36 h-36 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-amber-300 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.div>
          <h2 className="text-[28px] lg:text-[36px] font-bold text-foreground mb-4">
            Co říkají klienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skutečné příběhy transformace od lidí, kteří našli svou cestu k uzdravení
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-white via-primary/5 to-secondary/10 rounded-2xl p-8 shadow-sm border border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1 mx-auto max-w-2xl"
          >
            <div className="flex items-center gap-1 mb-4 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-primary text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>

            <svg className="w-8 h-8 text-primary/30 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>

            <p className="text-muted-foreground mb-4 italic leading-relaxed text-center">
              &ldquo;{testimonials[currentIndex].text}&rdquo;
            </p>

            <div className="border-t pt-4 flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="text-center">
                <p className="font-semibold text-foreground">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">{testimonials[currentIndex].result}</p>
              </div>
            </div>
          </motion.div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Přejít na testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">Spokojených klientů</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={250} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Úspěšných terapií</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={5} suffix=" let" />
              </div>
              <p className="text-sm text-muted-foreground">Zkušeností</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                <AnimatedCounter end={2} suffix=" týdny" />
              </div>
              <p className="text-sm text-muted-foreground">Průměrné zlepšení</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-primary">P</div>
              <div className="w-8 h-8 bg-secondary/20 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-secondary">K</div>
              <div className="w-8 h-8 bg-accent/20 rounded-full border-2 border-background flex items-center justify-center text-xs font-bold text-accent">B</div>
            </div>
            <span className="text-sm font-medium text-primary">
              Certifikovaný PSYCH-K® Facilitator • Bachovy esence • Online terapie
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}