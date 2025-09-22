# Dependency Inventory - Projekt vyjdizetmy.cz

## Přehled závislostí
Projekt používá moderní Next.js stack s shadcn/ui pro UI komponenty. Všechny závislosti jsou kompatibilní s Next.js 15 a Vercel deployment. Package manager je pnpm.

## Core závislosti

### Next.js ekosystém
- **next**: 15.5.3 - React framework s App Router
- **react**: ^18 - UI knihovna
- **react-dom**: ^18 - React DOM renderer
- **@types/react**: ^18 - TypeScript typy
- **@types/react-dom**: ^18 - TypeScript typy

### UI a styling
- **@radix-ui/*** (mnoho komponent): 1.x - Přístupné UI primitivy
- **tailwindcss**: ^3.4.0 - CSS framework
- **class-variance-authority**: ^0.7.1 - Variant management
- **clsx**: ^2.1.1 - Conditional classes
- **tailwind-merge**: ^3.3.1 - Tailwind class merging
- **lucide-react**: ^0.454.0 - Ikony (použité v komponentách)

### Formuláře a validace
- **react-hook-form**: ^7.60.0 - Form management
- **@hookform/resolvers**: ^3.10.0 - Resolver pro validaci
- **zod**: 3.25.67 - Schema validace

### Další utility
- **autoprefixer**: ^10.4.20 - CSS prefixing
- **postcss**: ^8.5 - CSS processing
- **date-fns**: 4.1.0 - Date utilities
- **sonner**: ^1.7.4 - Toast notifications
- **vaul**: ^0.9.9 - Drawer komponenta
- **input-otp**: 1.4.1 - OTP input
- **embla-carousel-react**: 8.5.1 - Carousel
- **recharts**: 2.15.4 - Charts
- **react-day-picker**: 9.8.0 - Date picker
- **react-resizable-panels**: ^2.1.7 - Resizable panels
- **next-themes**: ^0.4.6 - Theme switching
- **geist**: ^1.3.1 - Font

### Vercel deployment
- **@vercel/analytics**: 1.3.1 - Analytics

## Dev závislosti
- **typescript**: ^5 - TypeScript compiler
- **eslint**: ^9.36.0 - Linting
- **@eslint/eslintrc**: ^3.3.1 - ESLint config
- **@typescript-eslint/eslint-plugin**: ^8.0.0 - TS ESLint
- **@typescript-eslint/parser**: ^8.0.0 - TS parser
- **prettier**: (není v package.json, ale zmíněn v config)
- **postcss**: ^8.5 - CSS processing
- **tailwindcss**: ^3.4.0 - Tailwind
- **tw-animate-css**: 1.3.3 - Animations

## Verze a kompatibilita
- **Node.js**: >= 18.17.0 (Next.js 15 požadavek)
- **pnpm**: Doporučeno
- **TypeScript**: 5.x
- **React**: 18.x

## Správa závislostí
- Použití `pnpm` pro rychlejší instalace
- Lockfile: `pnpm-lock.yaml`
- Aktualizace: Pravidelné kontroly kompatibility s Next.js 15

## Potenciální konflikty
- Duplikované komponenty v `/components` a `/src/components`
- Některé importy mohou selhávat kvůli path konfiguraci
- Chybějící `lucide-react` v některých buildech (i když je v package.json)

## Doporučení
1. Sjednotit strukturu komponent (použít buď `/components` nebo `/src/components`)
2. Opravit import cesty pro UI komponenty
3. Přidat chybějící dev závislosti jako prettier
4. Pravidelné aktualizace pro security
5. Testovat build na Vercel před deployment