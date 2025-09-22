# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project stack and conventions
- Runtime and package manager: Bun. Use bun to run package.json scripts.
- Framework: Next.js 15 with the App Router (implemented in src/app) and TypeScript.
- Styling and design system: Tailwind CSS with CSS variables defined in src/app/globals.css; tailwind.config.js maps tokens (colors, radius, animations) to CSS vars and includes tailwindcss-animate.
- UI layer: Radix UI primitives wrapped as reusable components in src/components/ui; utility cn() (src/lib/utils.ts) merges Tailwind classes.
- Animations: framer-motion is used widely across client components.
- Path alias: @/* resolves to ./src/* (see tsconfig.json).
- Linting: Flat-config ESLint via eslint.config.mjs, extending next/core-web-vitals and next/typescript.
- Routing note: next.config.mjs sets pageExtensions, and the canonical entrypoints live under src/app (src/app/layout.tsx and src/app/page.tsx).

Commands (Bun)
- Install deps
```bash path=null start=null
bun install
```
- Start dev server (Next.js, default http://localhost:3000)
```bash path=null start=null
bun run dev
```
- Build production bundle
```bash path=null start=null
bun run build
```
- Start production server
```bash path=null start=null
bun run start
```
- Lint (fix optionally)
```bash path=null start=null
bun run lint
# optional fix
bunx eslint . --fix
```
- Tests
  - No test runner is configured in this repo. If you later add Bun’s test runner or Vitest, a single test can be run, e.g. with Bun’s built-in runner:
```bash path=null start=null
bun test path/to/file.test.ts -t "test case name"
```

High-level architecture
- App shell and SEO
  - src/app/layout.tsx defines global fonts (Inter, Playfair Display), metadata/viewport, and injects analytics and JSON-LD structured data. It renders a ScrollProgress component and the main app container. CSS variables and dark mode tokens come from src/app/globals.css.
- Page composition
  - src/app/page.tsx is the home route and composes sections: header, hero, about, stats, services, quiz, testimonials, contact, footer, plus a FloatingCTA and an optional sidebar on large screens. SmoothScroll wraps the page content for inertia-style scrolling.
  - In-page navigation uses scrollIntoView to anchors (e.g., #about, #services, #contact) from the Header.
- Components
  - Presentation components are under src/components (sections) and src/components/ui (primitives). The ui directory contains typed wrappers around Radix components (e.g., accordion) that apply consistent styling and accessibility patterns using cn().
  - Container (src/components/ui/container.tsx) standardizes responsive width and horizontal padding.
- Styling and theming
  - globals.css defines light/dark CSS variables for colors, gradients, and animation keyframes. Tailwind consumes these via theme extensions in tailwind.config.js. The app toggles dark mode by adding/removing the dark class on <html> (persisted in localStorage in Header).
- Data and server boundaries
  - No API routes or server actions are present (no app/api). The site is currently a client-rendered marketing page with static assets in public/ (includes manifest.json, robots.txt, sitemap.xml).

Configuration highlights
- tsconfig.json
  - Strict TypeScript, moduleResolution: bundler, jsx: preserve. Important: paths alias @/* → ./src/*.
- eslint.config.mjs
  - Extends Next + TypeScript rules and ignores build artifacts (.next/, out/, build/).
- tailwind.config.js
  - Content globs include app, src/components, and src/app. Extends colors to CSS vars and defines animations (accordion, fade-in, slide-up, float).
- next.config.mjs
  - pageExtensions ensures .ts/.tsx files are treated as pages; the repo uses src/app as the App Router root.

Environment and operational notes
- Analytics ID
  - src/app/layout.tsx references NEXT_PUBLIC_GA_ID. Provide it via .env.local for correct GA initialization.
```bash path=null start=null
# .env.local
NEXT_PUBLIC_GA_ID={{YOUR_GA_MEASUREMENT_ID}}
```
- Optional: OpenCode Telegram plugin (./.opencode/plugin)
  - Separate from the Next app, there is a small plugin to send session notifications.
  - Run it from the plugin directory:
```bash path=null start=null
bun run -C ./.opencode/plugin start
```
  - Configure via environment variables or JSON config:
```bash path=null start=null
# environment variables
export TELEGRAM_BOT_TOKEN={{YOUR_TELEGRAM_BOT_TOKEN}}
export TELEGRAM_CHAT_ID={{YOUR_TELEGRAM_CHAT_ID}}
```
```json path=null start=null
// .opencode/plugin/telegram-config.json
{
  "telegramIdle": {
    "enabled": true,
    "botToken": "{{YOUR_TELEGRAM_BOT_TOKEN}}",
    "chatId": "{{YOUR_TELEGRAM_CHAT_ID}}"
  }
}
```

Notes for future agents
- Prefer Bun for all script execution (bun run ...). Use the @ alias when importing from src.
- The canonical App Router lives in src/app; no server-side routes exist. Focus changes on presentational components, Tailwind tokens, and section composition.
