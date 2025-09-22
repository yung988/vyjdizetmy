"use client"

import site from "@/content/site.json"

export function QuickContact() {
  return (
    <section aria-labelledby="quick-contact" className="w-full py-10">
      <h2 id="quick-contact" className="sr-only">Rychlý kontakt</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-[16px] shadow-[var(--soft-shadow)] transition-transform duration-200 hover:scale-[1.03]" style={{ backgroundColor: "var(--accent-mint)" }}>
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-6 h-6 text-[#113322]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="font-semibold text-[#113322]">Zavolejte</div>
            <div className="text-sm text-[#113322]/80">{site.contact.phone}</div>
          </div>
        </div>
        <div className="p-4 rounded-[16px] shadow-[var(--soft-shadow)] transition-transform duration-200 hover:scale-[1.03]" style={{ backgroundColor: "#E6DAF5" }}>
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-6 h-6 text-[#3d2d55]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="font-semibold text-[#3d2d55]">E-mail</div>
            <div className="text-sm text-[#3d2d55]/80">{site.contact.email}</div>
          </div>
        </div>
        <div className="p-4 rounded-[16px] shadow-[var(--soft-shadow)] transition-transform duration-200 hover:scale-[1.03]" style={{ backgroundColor: "#FBDDE2" }}>
          <div className="flex flex-col items-center text-center gap-2">
            <svg className="w-6 h-6 text-[#5a2e39]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-6H3v6a2 2 0 002 2z" />
            </svg>
            <div className="font-semibold text-[#5a2e39]">Objednat online</div>
            <a href="#contact" className="text-sm underline text-[#5a2e39]/80">Rezervovat konzultaci</a>
          </div>
        </div>
      </div>
    </section>
  )
}
