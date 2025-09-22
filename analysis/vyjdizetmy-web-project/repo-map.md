# Repo Map - Projekt vyjdizetmy.cz

## Přehled projektu
Tento projekt je moderní webová aplikace pro Sabinu Weisbergerovou, facilitátorku metody PSYCH-K®. Web je postavený na Next.js 15 s Tailwind CSS a shadcn/ui komponentami. Zaměřuje se na prezentaci terapeutických služeb, osobní příběh facilitátorky a kontaktní informace. Projekt je aktuálně funkční a připravený pro další vylepšení.

## Struktura projektu

### Kořenový adresář
- `/app` - Next.js App Router struktura
  - `/page.tsx` - Hlavní stránka s komponentami Hero, Services, Contact, atd.
  - `/layout.tsx` - Globální layout s metadaty
  - `/globals.css` - Globální styly
- `/components` - Reusable komponenty
  - `/ui` - Shadcn/ui komponenty (Button, Card, Input, Dialog, atd.)
  - `/about-section.tsx` - Sekce "O mně" s biografií
  - `/contact.tsx` - Kontaktní formulář a informace
  - `/footer.tsx` - Zápatí webu
  - `/header.tsx` - Navigační hlavička
  - `/hero-section.tsx` - Hero sekce s úvodem
  - `/partners-section.tsx` - Sekce s certifikacemi
  - `/resilience-section.tsx` - Sekce o odolnosti
  - `/services.tsx` - Nabídka služeb
  - `/sidebar-content.tsx` - Boční panel s navigací
- `/lib` - Utility funkce
  - `/utils.ts` - Pomocné funkce
- `/public` - Statické assety
  - Obrázky (sofiatherapy1-4.webp, ikony)
- `/src` - Alternativní struktura (částečně používaná)
  - `/app` - Duplikát app/ struktury
  - `/components` - Duplikát komponent
- Konfigurační soubory: `package.json`, `tailwind.config.js`, `tsconfig.json`, `next.config.mjs`, `eslint.config.mjs`

### Moduly a vlastníci
- **Frontend modul**: React komponenty a UI
  - Vlastník: Vývojář (já)
  - Zodpovídá za design, interaktivitu, responsive layout
- **Content modul**: Texty a obsah
  - Vlastník: Sabina Weisbergerová
  - Zodpovídá za copywriting, osobní příběh, služby
- **Deployment modul**: Vercel hosting
  - Vlastník: Infrastruktura
  - Zodpovídá za build, deployment, monitoring

### Coupling a závislosti mezi moduly
- Komponenty jsou volně propojené přes props a context
- UI komponenty z shadcn/ui jsou sdílené napříč sekcemi
- Nízké coupling díky komponentní architektuře
- Žádné backend API (zatím), vše statické

## Technologický stack
- **Framework**: Next.js 15.5.3 (App Router)
- **UI Library**: shadcn/ui + Radix UI komponenty
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form + Zod validace
- **Deployment**: Vercel
- **Package Manager**: pnpm

## Vývojový stav
- Projekt je funkční s `npm run dev` a `npm run build`
- Obsahuje základní sekce: Hero, O mně, Služby, Kontakt
- Chybí: Blog, API pro formuláře, pokročilé funkce
- Potřebuje optimalizaci pro SEO, přístupnost, výkon