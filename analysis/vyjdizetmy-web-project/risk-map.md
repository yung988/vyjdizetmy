# Risk Map and Mitigations - Projekt vyjdizetmy.cz

## Přehled rizik
Projekt je základní web pro PSYCH-K® facilitátorku. Rizika zahrnují technické problémy, SEO, přístupnost a bezpečnost. Priorita je na rychlém spuštění s možností rozšíření.

## Vysoká pravděpodobnost / Vysoký dopad

### 1. Duplikovaná struktura komponent
**Popis**: Komponenty jsou v `/components` i `/src/components`, což způsobuje konflikty importů a build chyby.
**Pravděpodobnost**: Vysoká
**Dopad**: Vysoký (build selže)

**Mitigace**:
- Sjednotit na jednu strukturu (doporučeno `/components`)
- Odstranit duplikáty
- Aktualizovat import cesty

### 2. Chybějící závislosti v buildu
**Popis**: `lucide-react` není správně nainstalované nebo importované.
**Pravděpodobnost**: Vysoká
**Dopad**: Vysoký (runtime chyby)

**Mitigace**:
- Ověřit `pnpm install`
- Zkontrolovat lockfile
- Testovat build lokálně

### 3. SEO optimalizace pro lokální vyhledávání
**Popis**: Web není optimalizovaný pro klíčová slova jako "PSYCH-K® facilitátor Česká republika".
**Pravděpodobnost**: Vysoká
**Dopad**: Vysoký (nízká viditelnost)

**Mitigace**:
- Přidat meta tagy a strukturovaná data
- Lokální SEO (Google My Business)
- Klíčová slova v obsahu

## Střední pravděpodobnost / Střední dopad

### 4. Přístupnost (WCAG compliance)
**Popis**: Web nemusí být plně přístupný pro handicapované uživatele.
**Pravděpodobnost**: Střední
**Dopad**: Střední (etický, právní)

**Mitigace**:
- Testovat s Lighthouse Accessibility
- Přidat alt texty k obrázkům
- Zajistit klávesovou navigaci

### 5. Mobilní optimalizace
**Popis**: Některé komponenty nemusí být plně responsive.
**Pravděpodobnost**: Střední
**Dopad**: Střední (UX, konverze)

**Mitigace**:
- Testovat na různých zařízeních
- Použít Tailwind responsive classes
- Optimalizovat obrázky

### 6. Bezpečnost formulářů
**Popis**: Kontaktní formulář bez backend validace.
**Pravděpodobnost**: Střední
**Dopad**: Střední (spam, data)

**Mitigace**:
- Přidat server-side validaci
- CAPTCHA pro prevenci spamu
- Šifrování dat

## Nízká pravděpodobnost / Nízký dopad

### 7. Výkon a načítání
**Popis**: Velké obrázky mohou zpomalit web.
**Pravděpodobnost**: Nízká
**Dopad**: Nízký

**Mitigace**:
- Optimalizovat obrázky (WebP, lazy loading)
- Použít Next.js Image komponentu
- Monitorovat Core Web Vitals

### 8. GDPR compliance
**Popis**: Chybí cookie banner a privacy policy.
**Pravděpodobnost**: Nízká
**Dopad**: Nízký (pokuty)

**Mitigace**:
- Přidat cookie consent
- Jasná privacy policy
- Minimalizovat tracking

## Monitorování a reporting
- **Týdenní build testy** s Vercel
- **Měsíční SEO audit** s Google Search Console
- **User feedback** přes kontaktní formulář
- **Performance monitoring** s Vercel Analytics

## Doporučení pro mitigaci
1. Opravit strukturu komponent před dalším developmentem
2. Implementovat základní SEO ihned
3. Přidat přístupnost jako prioritu
4. Plánovat backend pro formuláře
5. Pravidelné zálohy kódu