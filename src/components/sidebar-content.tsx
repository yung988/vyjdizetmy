"use client"

import { Button } from "@/components/ui/button"

export function SidebarContent() {
  const testimonials = [
    {
      name: "Marie K.",
      text: "Změnilo mi to život během 3 sezení",
      rating: 5
    },
    {
      name: "Petr M.",
      text: "Konečně mám energii zpět",
      rating: 5
    }
  ]

  return (
    <div className="space-y-6">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-4 text-center border border-primary/20 sticky top-0 shadow-sm">
        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-base font-bold text-foreground mb-2">
          Jsem tady pro vás
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          První krok může změnit vše. Začněte svou transformaci ještě dnes.
        </p>
        <Button
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 text-sm w-full shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Rezervovat konzultaci
          <svg className="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      {/* Quick Services */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Služby
        </h4>

        <div className="space-y-2">
          <div
            className="bg-card rounded-lg p-3 border hover:border-primary hover:shadow-md cursor-pointer transition-all duration-300 hover-lift"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <h5 className="font-medium text-primary text-sm mb-1">PSYCH-K® Individuální</h5>
            <p className="text-xs text-muted-foreground">1400 Kč / 75 min</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Nejoblíbenější</span>
            </div>
          </div>

          <div
            className="bg-card rounded-lg p-3 border hover:border-primary hover:shadow-md cursor-pointer transition-all duration-300 hover-lift"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <h5 className="font-medium text-primary text-sm mb-1">Online konzultace</h5>
            <p className="text-xs text-muted-foreground">1200 Kč / 60 min</p>
          </div>

          <div
            className="bg-card rounded-lg p-3 border hover:border-primary hover:shadow-md cursor-pointer transition-all duration-300 hover-lift"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <h5 className="font-medium text-primary text-sm mb-1">Bachovy květové esence</h5>
            <p className="text-xs text-muted-foreground">450 Kč</p>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-gradient-to-br from-muted/30 to-background rounded-2xl p-4 border">
        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
          Co říkají klienti
        </h4>

        <div className="space-y-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/50 rounded-lg p-3">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-primary text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
               <p className="text-xs text-muted-foreground italic mb-2">
                 &quot;{testimonial.text}&quot;
               </p>
              <p className="text-xs font-medium text-foreground">{testimonial.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center justify-center gap-2 text-xs text-primary">
            <div className="flex -space-x-1">
              <div className="w-4 h-4 bg-primary/30 rounded-full"></div>
              <div className="w-4 h-4 bg-secondary/30 rounded-full"></div>
              <div className="w-4 h-4 bg-accent/30 rounded-full"></div>
            </div>
            <span className="font-medium">95% spokojenost</span>
          </div>
        </div>
      </div>

      {/* PSYCH-K Info */}
      <div className="bg-muted/50 rounded-2xl p-4">
        <h4 className="text-sm font-semibold text-foreground mb-3">Proč PSYCH-K®?</h4>
        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
            <span>Rychlé výsledky už po prvním sezení</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
            <span>Vědecky podložená metoda</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
            <span>Trvalé a hluboké změny</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
            <span>Bezpečná a šetrná terapie</span>
          </li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="bg-card rounded-2xl p-4 border">
        <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Certifikace
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">PSYCH-K® Facilitator</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">Bachovy květové esence</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">10+ let praxe</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-card rounded-2xl p-4 border">
        <h4 className="text-sm font-semibold text-foreground mb-3">Kontakt</h4>
        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">info@vyjdizetmy.cz</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Telefon</p>
              <p className="text-muted-foreground">+420 xxx xxx xxx</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Lokace</p>
              <p className="text-muted-foreground">Vysočina / Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
