"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function PricingSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const pricingPlans = [
    {
      title: "PSYCH-K® Individuální",
      price: "1400 Kč",
      duration: "75 minut",
      description: "Komplexní transformace podvědomých bloků",
      features: [
        "Osobní konzultace",
        "Testování podvědomých přesvědčení",
        "Transformační protokoly",
        "První změny už po prvním sezení",
        "Podpora mezi sezeními"
      ],
      popular: true,
      cta: "Rezervovat konzultaci"
    },
    {
      title: "Online konzultace",
      price: "1200 Kč",
      duration: "60 minut",
      description: "Stejná účinnost z pohodlí domova",
      features: [
        "Videohovor přes Zoom/Skype",
        "Stejná kvalita jako osobně",
        "Flexibilní termíny",
        "Záznam sezení",
        "Online podpora"
      ],
      popular: false,
      cta: "Rezervovat online"
    },
    {
      title: "Bachovy květové esence",
      price: "450 Kč",
      duration: "lahvička",
      description: "Přírodní emoční podpora",
      features: [
        "Individuálně namíchané",
        "30ml lahvička na 3 týdny",
        "Harmonizace emocí",
        "Přírodní složení",
        "Konzultace o použití"
      ],
      popular: false,
      cta: "Objednat esence"
    }
  ]

  const packages = [
    {
      title: "Balíček 3 sezení",
      originalPrice: "4200 Kč",
      price: "3900 Kč",
      savings: "300 Kč úspora",
      description: "Pro komplexnější práci",
      features: [
        "3 individuální sezení PSYCH-K®",
        "Osobní nebo online",
        "Rozšířená podpora",
        "Sledování pokroku",
        "Bonus: Bachovy esence zdarma"
      ]
    },
    {
      title: "Vyjdi ze tmy",
      price: "dle domluvy",
      description: "6týdenní intenzivní program",
      features: [
        "6 sezení PSYCH-K®",
        "Práce se stresem a úzkostí",
        "Techniky pro každodenní život",
        "Bachovy esence v průběhu",
        "24/7 podpora"
      ]
    }
  ]

  return (
    <section id="pricing" className="w-full py-16 bg-gradient-to-t from-purple-50 via-background to-purple-100/50 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 right-12 w-44 h-44 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 left-12 w-36 h-36 bg-purple-300 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1, rotate: -10 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ceník služeb
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transparentní ceny bez skrytých poplatků. Každé sezení je individuálně přizpůsobené vašim potřebám.
          </p>
        </motion.div>

        {/* Main pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="h-full"
            >
              <Card className={`h-full relative card-soft ${plan.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <motion.div
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  >
                    <Badge className="bg-primary text-primary-foreground">
                      Nejoblíbenější
                    </Badge>
                  </motion.div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl lg:text-2xl">{plan.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary mt-4">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">{plan.duration}</div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full btn-primary"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Special packages */}
        <motion.div
          className="card-soft p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Speciální programy</h3>
            <p className="text-muted-foreground">
              Pro komplexnější práci a dlouhodobé výsledky
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/10"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary">{pkg.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      {pkg.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      {pkg.savings && (
                        <Badge variant="secondary" className="bg-sage/20 text-sage">
                          {pkg.savings}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{pkg.description}</p>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <svg className="w-4 h-4 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full border-primary/30 text-primary hover:bg-primary/10"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Zjistit více
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              Platba kartou, převodem nebo v hotovosti • Možnost splátek
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}