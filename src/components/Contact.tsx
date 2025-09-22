"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import site from "@/content/site.json"

export function Contact() {
  return (
    <section id="contact" className="w-full py-16" style={{ backgroundColor: "#DFF5FF" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Potřebujete více informací?</h2>
            <p className="text-[18px] leading-relaxed text-foreground/80">Ráda si s vámi promluvím.</p>
            <div className="flex gap-4 flex-wrap">
              <a href={`tel:${site.contact.phone}`} className="text-[14px] inline-flex items-center gap-2 underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                Zavolejte
              </a>
              <a href="#contact" className="text-[14px] inline-flex items-center gap-2 underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z"/></svg>
                Rezervovat konzultaci
              </a>
            </div>
          </div>

          {/* Right form */}
          <Card className="p-6 rounded-[16px] shadow-[var(--soft-shadow)]">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">Napište mi</CardTitle>
              <CardDescription>Vyplňte formulář a já se vám ozvu co nejdříve.</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Jméno</label>
                    <Input id="firstName" placeholder="Vaše jméno" className="h-[44px] rounded-[12px]" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Příjmení</label>
                    <Input id="lastName" placeholder="Vaše příjmení" className="h-[44px] rounded-[12px]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                  <Input id="email" type="email" placeholder="vas.email@priklad.cz" className="h-[44px] rounded-[12px]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Stručný popis tématu</label>
                  <Textarea id="message" placeholder="S čím potřebujete pomoci..." rows={4} className="rounded-[12px]" />
                </div>
                <Button className="w-full bg-[var(--primary)] text-white rounded-[12px] py-3">
                  Odeslat
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
