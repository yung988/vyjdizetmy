"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import servicesData from "@/content/services.json"

export function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  const services = servicesData.services

  return (
    <section id="services" className="w-full py-16 bg-gradient-to-r from-blue-50 via-background to-blue-100/50 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-blue-300 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.2, rotate: 180 }}
            transition={{ duration: 0.8 }}
          >
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Nabízené služby</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nabízím profesionální podporu při osobní transformaci pomocí metody PSYCH-K® a dalších ověřených přístupů.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const getThemeClasses = () => {
              switch (service.theme) {
                case "primary":
                  return {
                    iconBg: "bg-primary/10",
                    iconColor: "text-primary",
                    priceColor: "text-primary",
                    cardBorder: service.popular ? "ring-primary" : "border-primary/20",
                    badge: "bg-primary text-primary-foreground"
                  }
                case "secondary":
                  return {
                    iconBg: "bg-secondary/10",
                    iconColor: "text-secondary",
                    priceColor: "text-secondary",
                    cardBorder: "border-secondary/20",
                    badge: "bg-secondary text-secondary-foreground"
                  }
                case "accent":
                  return {
                    iconBg: "bg-accent/10",
                    iconColor: "text-accent",
                    priceColor: "text-accent",
                    cardBorder: "border-accent/20",
                    badge: "bg-accent text-accent-foreground"
                  }
                default:
                  return {
                    iconBg: "bg-primary/10",
                    iconColor: "text-primary",
                    priceColor: "text-primary",
                    cardBorder: "border-primary/20",
                    badge: "bg-primary text-primary-foreground"
                  }
              }
            }

            const themeClasses = getThemeClasses()

            const renderIcon = () => {
              const iconClass = `w-8 h-8 ${themeClasses.iconColor}`
              switch (service.icon) {
                case "users":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  )
                case "video":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )
                case "flower":
                  return (
                    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )
                default:
                  return null
              }
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className={`h-full relative ${service.popular ? `ring-2 ${themeClasses.cardBorder} shadow-lg bg-gradient-to-br from-white to-primary/5` : `border ${themeClasses.cardBorder} bg-gradient-to-br from-white to-secondary/3`} hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                  {service.popular && (
                    <motion.div 
                      className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    >
                       <Badge className={themeClasses.badge}>
                         Nejoblíbenější
                       </Badge>
                    </motion.div>
                  )}
                  <CardHeader className="text-center">
                     <motion.div
                       className={`w-16 h-16 ${themeClasses.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}
                       whileHover={{ rotate: 360 }}
                       transition={{ duration: 0.6 }}
                     >
                       {renderIcon()}
                     </motion.div>
                     <CardTitle className="text-xl">{service.title}</CardTitle>
                     <motion.div
                       className={`text-2xl font-bold ${themeClasses.priceColor} mt-2`}
                       initial={{ scale: 0 }}
                       animate={inView ? { scale: 1 } : { scale: 0 }}
                       transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                     >
                       {service.price}
                     </motion.div>
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div 
          className="bg-gradient-to-r from-muted/50 to-background rounded-3xl p-8 text-center border"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold mb-4">Speciální programy</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Pro komplexnější práci nabízím intenzivní programy zaměřené na specifické oblasti života.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              { title: '"Vyjdi ze tmy"', desc: "6týdenní program pro překonání životní krize" },
              { title: "Rodinná harmonie", desc: "Speciální přístup pro harmonii ve vztazích" },
              { title: "Úspěšná kariéra", desc: "Program pro rozvoj kariéry a sebedůvěry" }
            ].map((program, index) => (
              <motion.div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h4 className="font-semibold mb-2 text-primary">{program.title}</h4>
                <p className="text-sm text-muted-foreground">{program.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}