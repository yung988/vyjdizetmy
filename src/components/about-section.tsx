"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })
  return (
    <section id="about" className="w-full py-20 bg-gradient-to-br from-emerald-50 via-background to-emerald-100/50 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-emerald-300 rounded-full blur-2xl"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </motion.div>
            <h2 className="text-[32px] lg:text-[36px] font-bold text-foreground">O Sabině Weisbergerové</h2>
            <p className="text-[16px] leading-[1.6] text-muted-foreground max-w-[680px]">
              Jmenuji se Sabina Weisbergerová a jsem certifikovanou facilitátorkou metody PSYCH-K®. Mým posláním je
              pomáhat lidem objevovat cestu z temnoty svých bloků k vnitřní svobodě, radosti a novému životnímu elánu.
            </p>
            <motion.button 
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 py-3 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Více o mém příběhu
              <svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div 
            className="rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
             <Image
               src="/sofiatherapy1.webp"
               alt="Sabina Weisbergerová při konzultaci"
               width={600}
               height={400}
               className="w-full h-[400px] object-cover"
               priority
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
             />
          </motion.div>
        </motion.div>

        {/* Mission statement */}
         <motion.div
           className="card-soft p-12 text-center relative"
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           whileHover={{ scale: 1.02 }}
         >
           <motion.svg
             className="w-12 h-12 text-primary mx-auto mb-6"
             fill="currentColor"
             viewBox="0 0 24 24"
             initial={{ scale: 0 }}
             animate={inView ? { scale: 1 } : { scale: 0 }}
             transition={{ duration: 0.5, delay: 0.8 }}
           >
             <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
           </motion.svg>
            <blockquote className="text-xl lg:text-2xl font-semibold text-foreground mb-6 text-balance leading-relaxed">
              &quot;Moje práce je založená na respektu, důvěře a konkrétních výsledcích. Nabízím vám nejen podporu, ale hlavně
              účinné nástroje pro změnu.&quot;
            </blockquote>
           <cite className="text-base text-muted-foreground">- Sabina Weisbergerová</cite>
         </motion.div>

         {/* Personal Story - Enhanced */}
         <motion.div
           className="mt-16 bg-card rounded-3xl p-8"
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           whileHover={{ scale: 1.02 }}
         >
           <div className="grid md:grid-cols-2 gap-8 items-center">
             <div>
               <h3 className="text-[20px] lg:text-[24px] font-bold mb-6">Můj příběh transformace</h3>
               <p className="text-lg text-muted-foreground mb-6">
                 Sama jsem si prošla obdobím vyhoření, ale PSYCH-K® mi vrátil energii už po prvním sezení.
                 Tato zkušenost mě inspirovala k pomoci ostatním najít jejich cestu k uzdravení.
               </p>
               <motion.div
                 className="inline-flex items-center gap-4 bg-primary/10 rounded-full px-6 py-3"
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                 <span className="text-sm font-medium text-red-600">Před: 10% energie</span>
                 <div className="w-3 h-3 bg-primary rounded-full"></div>
                 <span className="text-sm font-medium text-primary">Po: 95% energie</span>
               </motion.div>
             </div>
             <div className="grid grid-cols-2 gap-4">
               <motion.div
                 className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 text-center"
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="text-2xl font-bold text-primary mb-1">5+</div>
                 <div className="text-sm text-muted-foreground">let praxe</div>
               </motion.div>
               <motion.div
                 className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-4 text-center"
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="text-2xl font-bold text-secondary mb-1">250+</div>
                 <div className="text-sm text-muted-foreground">klientů</div>
               </motion.div>
               <motion.div
                 className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-4 text-center"
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="text-2xl font-bold text-accent mb-1">98%</div>
                 <div className="text-sm text-muted-foreground">spokojenost</div>
               </motion.div>
               <motion.div
                 className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 text-center"
                 whileHover={{ scale: 1.05 }}
               >
                 <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                 <div className="text-sm text-muted-foreground">podpora</div>
               </motion.div>
             </div>
           </div>
         </motion.div>

         {/* Certifications & Values */}
         <motion.div
           className="mt-16 grid md:grid-cols-2 gap-8"
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
           transition={{ duration: 0.8, delay: 1.0 }}
         >
           <motion.div
             className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/10"
             whileHover={{ scale: 1.02 }}
           >
             <h3 className="text-2xl font-bold mb-6 text-primary">Certifikace & Vzdělání</h3>
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                   </svg>
                 </div>
                 <span className="text-muted-foreground">PSYCH-K® Advanced Facilitator</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                   </svg>
                 </div>
                 <span className="text-muted-foreground">Bach Flower Remedies Practitioner</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                   <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                   </svg>
                 </div>
                 <span className="text-muted-foreground">NLP Master Practitioner</span>
               </div>
             </div>
           </motion.div>

           <motion.div
             className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-3xl p-8 border border-secondary/10"
             whileHover={{ scale: 1.02 }}
           >
             <h3 className="text-2xl font-bold mb-6 text-secondary">Mé hodnoty</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">🤝</div>
                  <div className="font-semibold text-sm text-primary">Důvěra</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">💚</div>
                  <div className="font-semibold text-sm text-secondary">Empatie</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">✨</div>
                  <div className="font-semibold text-sm text-accent">Autenticita</div>
                </motion.div>
                <motion.div
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-tertiary/10 to-tertiary/5 border border-tertiary/20"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-3xl mb-2">🌱</div>
                  <div className="font-semibold text-sm text-tertiary">Růst</div>
                </motion.div>
              </div>
           </motion.div>
         </motion.div>
      </div>
    </section>
  )
}