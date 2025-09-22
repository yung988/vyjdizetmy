"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "PSYCH-K® Individuální", href: "#services" },
      { name: "Online konzultace", href: "#services" },
      { name: "Bachovy květové esence", href: "#services" },
      { name: "Speciální programy", href: "#pricing" }
    ],
    about: [
      { name: "O mně", href: "#about" },
      { name: "Reference", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
      { name: "Kontakt", href: "#contact" }
    ],
    legal: [
      { name: "Ochrana soukromí", href: "#" },
      { name: "Podmínky použití", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.966.021 6.677.072 5.393.124 4.434.265 3.633.523c-.806.26-1.488.598-2.168 1.278C.783 2.58.445 3.263.185 4.07c-.258.8-.4 1.76-.45 3.044C-.01 8.4 0 8.83 0 12.45s-.021 4.054-.072 5.343c-.051 1.289-.192 2.248-.45 3.048-.26.806-.598 1.488-1.278 2.168-.68.68-1.362 1.018-2.168 1.278-.8.258-1.76.4-3.044.45-1.289.051-1.719.072-5.343.072s-4.054-.021-5.343-.072c-1.289-.051-2.248-.192-3.048-.45-.806-.26-1.488-.598-2.168-1.278C.783 21.42.445 20.737.185 19.93c-.258-.8-.4-1.76-.45-3.044C-.01 15.6 0 15.17 0 11.55s.021-4.054.072-5.343c.051-1.289.192-2.248.45-3.048.26-.806.598-1.488 1.278-2.168.68-.68 1.362-1.018 2.168-1.278.8-.258 1.76-.4 3.044-.45 1.289-.051 1.719-.072 5.343-.072s4.054.021 5.343.072c1.289.051 2.248.192 3.048.45.806.26 1.488.598 2.168 1.278.68.68 1.018 1.362 1.278 2.168.258.8.4 1.76.45 3.044.051 1.289.072 1.719.072 5.343s-.021 4.054-.072 5.343c-.051 1.289-.192 2.248-.45 3.048-.26.806-.598 1.488-1.278 2.168-.68.68-1.018 1.362-1.278 2.168-.258.8-.4 1.76-.45 3.044-.051 1.289-.072 1.719-.072 5.343s.021-4.054.072-5.343c.051-1.289.192-2.248.45-3.048.26-.806.598-1.488 1.278-2.168.68-.68 1.018-1.362 1.278-2.168.258-.8.4-1.76.45-3.044.051-1.289.072-1.719.072-5.343zM12.017 5.84c-3.527 0-6.39 2.863-6.39 6.39s2.863 6.39 6.39 6.39 6.39-2.863 6.39-6.39-2.863-6.39-6.39-6.39zm0 10.566c-2.302 0-4.166-1.864-4.166-4.166s1.864-4.166 4.166-4.166 4.166 1.864 4.166 4.166-1.864 4.166-4.166 4.166zM19.894 5.618c-.825 0-1.493-.668-1.493-1.493s.668-1.493 1.493-1.493 1.493.668 1.493 1.493-.668 1.493-1.493 1.493z"/>
        </svg>
      )
    }
  ]

  return (
    <footer className="bg-gradient-soft border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="font-semibold text-lg">Sabina Weisbergerová</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Certifikovaná facilitátorka metody PSYCH-K®. Pomáhám lidem najít cestu k vnitřnímu klidu a transformaci.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Služby</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">O webu</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p className="text-foreground">info@vyjdizetmy.cz</p>
              </div>
              <div>
                <p className="text-muted-foreground">Telefon</p>
                <p className="text-foreground">+420 777 123 456</p>
              </div>
              <div>
                <p className="text-muted-foreground">Lokace</p>
                <p className="text-foreground">Vysočina / Online</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          className="card-soft p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-primary mb-1">Tipy pro osobní rozvoj</h4>
              <p className="text-muted-foreground text-sm">
                Přihlaste se k odběru newsletteru s praktickými tipy
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Váš email"
                className="px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary flex-1 md:w-48"
              />
              <Button className="btn-primary whitespace-nowrap">
                Přihlásit
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sabina Weisbergerová. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-muted-foreground">
            Certifikovaná facilitátorka PSYCH-K® International • Registrovaná v České republice
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
