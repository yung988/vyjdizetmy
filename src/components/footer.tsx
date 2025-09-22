"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import site from "@/content/site.json"

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
    <footer className="mt-16" style={{ backgroundColor: "#111" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 text-white">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[var(--accent-mint)] rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-[#111] rounded-full"></div>
              </div>
              <span className="font-semibold text-lg text-white">{site.brandName}</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Certifikovaná facilitátorka metody PSYCH-K®. Pomáhám lidem najít cestu k vnitřnímu klidu a transformaci.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/70 hover:text-[var(--accent-mint)] transition-colors"
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
            <h3 className="font-semibold text-white mb-4">Služby</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[var(--accent-mint)] transition-colors text-sm"
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
            <h3 className="font-semibold text-white mb-4">O webu</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-[var(--accent-mint)] transition-colors text-sm"
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
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-white/70">Email</p>
                <p className="text-white">{site.contact.email}</p>
              </div>
              <div>
                <p className="text-white/70">Telefon</p>
                <p className="text-white">{site.contact.phone}</p>
              </div>
              <div>
                <p className="text-white/70">Lokace</p>
                <p className="text-white">{site.contact.location}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          className="p-6 mb-8 rounded-[16px] border border-white/10 bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white mb-1">Tipy pro osobní rozvoj</h4>
              <p className="text-white/70 text-sm">
                Přihlaste se k odběru newsletteru s praktickými tipy
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Váš email"
                className="px-3 py-2 border border-white/20 rounded-md bg-transparent text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--accent-mint)] flex-1 md:w-48"
              />
              <Button className="bg-white text-[#111] hover:bg-white/90 whitespace-nowrap">
                Přihlásit
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-white/70">
            © {currentYear} {site.brandName}. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white/70 hover:text-[var(--accent-mint)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="text-center mt-8 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-xs text-white/60">
            Certifikovaná facilitátorka PSYCH-K® International • Registrovaná v České republice
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
