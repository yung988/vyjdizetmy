"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="w-full py-16 bg-muted/30 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Kontaktujte mě</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chcete začít svou cestu k transformaci? Ozvěte se mi a společně najdeme řešení vašich bloků.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="px-0 pt-0">
              <CardTitle className="text-2xl">Napište mi</CardTitle>
              <CardDescription>
                Vyplňte formulář a já se vám ozvu co nejdříve.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">Jméno</label>
                    <Input id="firstName" placeholder="Vaše jméno" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Příjmení</label>
                    <Input id="lastName" placeholder="Vaše příjmení" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="vas.email@priklad.cz" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Telefon (volitelné)</label>
                  <Input id="phone" type="tel" placeholder="+420 xxx xxx xxx" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Vaše zpráva</label>
                  <Textarea
                    id="message"
                    placeholder="Popište stručně, s čím potřebujete pomoci..."
                    rows={4}
                  />
                </div>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full">
                  Odeslat zprávu
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Kontaktní informace</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0 space-y-6">
                 <div className="flex items-start gap-4">
                   <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                   <div>
                     <p className="font-medium">Email</p>
                     <p className="text-muted-foreground">info@vyjdizetmy.cz</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                   <div>
                     <p className="font-medium">Telefon</p>
                     <p className="text-muted-foreground">+420 xxx xxx xxx</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                   <div>
                     <p className="font-medium">Lokace</p>
                     <p className="text-muted-foreground">Vysočina / Online</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-4">
                   <svg className="w-6 h-6 text-primary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                   <div>
                     <p className="font-medium">Dostupnost</p>
                     <p className="text-muted-foreground">Po-Pá: 9:00-17:00</p>
                   </div>
                 </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  )
}