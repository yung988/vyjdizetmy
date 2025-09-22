"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import stepsData from "@/content/how-we-work.json"

export function HowWeWork() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  const steps = stepsData.steps

  return (
    <section id="how-we-work" className="w-full py-20 bg-gradient-to-br from-muted/40 via-background to-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2 className="text-[32px] lg:text-[36px] font-bold text-foreground mb-4">Jak pracuji</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Jasný, jemný a účinný proces vedený k měřitelným změnám.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-40">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-primary border">
                    {s.num}. krok
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                  <CardDescription>{s.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>Citlivě • Měřitelně • Prakticky</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}