"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FAQSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const faqs = [
    {
      question: "Jak rychle mohu očekávat změnu?",
      answer: "Většina klientů cítí první pozitivní změny už po prvním sezení. PSYCH-K® pracuje s podvědomím, takže výsledky jsou často okamžité. Komplexnější změny se projeví během několika týdnů."
    },
    {
      question: "Je PSYCH-K® vědecky podložená metoda?",
      answer: "Ano, PSYCH-K® je metoda založená na principech kvantové fyziky, neurovědy a psychologie. Má za sebou více než 30 let výzkumu a tisíce úspěšných případů. Metoda je uznávaná mezinárodními organizacemi."
    },
    {
      question: "Musím o svých problémech podrobně mluvit?",
      answer: "Ne, PSYCH-K® není tradiční terapie. Nesoustředíme se na rozebírání minulosti, ale na konkrétní řešení. Stačí uvést, čeho chcete dosáhnout, a já vás provedu procesem transformace."
    },
    {
      question: "Jsou sezení vhodná i pro děti?",
      answer: "Ano, PSYCH-K® je velmi jemná a neinvazivní metoda, která je vhodná pro všechny věkové kategorie včetně dětí. U mladších klientů pracujeme hravější formou."
    },
    {
      question: "Jak probíhá online konzultace?",
      answer: "Online sezení probíhají přes Zoom nebo Skype s plnou kvalitou jako osobní konzultace. Potřebujete pouze stabilní internetové připojení a klidné místo. Získáte stejné výsledky jako při osobním setkání."
    },
    {
      question: "Co jsou Bachovy květové esence?",
      answer: "Bachovy květové esence jsou přírodní tinktury vyrobené z květů divokých rostlin. Každá esence harmonizuje specifické emoce. Namíchám vám individuální kombinaci podle vašich aktuálních potřeb."
    },
    {
      question: "Kolik sezení budu potřebovat?",
      answer: "Záleží na vašich cílech a situaci. Někteří klienti dosáhnou svých cílů už po 1-2 sezeních, jiní preferují komplexnější práci. Společně naplánujeme optimální počet sezení."
    },
    {
      question: "Jak se připravit na první sezení?",
      answer: "Přineste si jasnou představu o tom, čeho chcete dosáhnout. Můžete si připravit seznam oblastí života, kde chcete změnu. Přijďte s otevřenou myslí a ochotou experimentovat."
    }
  ]

  return (
    <section id="faq" className="w-full py-16 bg-gradient-to-l from-background via-secondary/5 to-background" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.div>
        <h2 className="text-[28px] lg:text-[36px] font-bold text-foreground mb-8">Časté otázky</h2>
            Často kladené otázky
          </h2>
          <p className="text-lg text-muted-foreground">
            Odpovědi na nejčastější dotazy o PSYCH-K® a mé práci
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-soft border border-primary/10 rounded-2xl px-6"
                >
                  <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                    <span className="font-medium text-base lg:text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="card-soft p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3 text-primary">Máte další otázky?</h3>
            <p className="text-muted-foreground mb-4">
              Neváhejte se zeptat. Rád/a vám poskytnu všechny informace, které potřebujete.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary px-6 py-2 text-sm"
            >
              Kontaktujte mě
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}