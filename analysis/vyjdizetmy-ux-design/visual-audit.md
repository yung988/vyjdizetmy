# Vizuální audit - Web vyjdizetmy.cz

## 🎨 Současný stav designu

### Barevná paleta
Analyzoval jsem vaši současnou barevnou paletu definovanou v `globals.css`:

#### Silné stránky ✅
- **Růžová primární barva (#e91e63)** - výrazná a energická, vhodná pro terapeutický web zaměřený na ženy
- **Levandulová sekundární (#ba68c8)** - jemná, uklidňující, vytváří příjemný kontrast
- **Zlatá akcentní (#ffd700)** - dodává pocit luxusu a důvěryhodnosti
- **Podpora dark mode** - moderní přístup, uživatelsky přívětivý

#### Slabé stránky ⚠️
- **Příliš ostrá růžová** může působit agresivně na některé návštěvníky
- **Chybí jemnější přechodové barvy** pro vytvoření uklidňující atmosféry
- **Nedostatečné využití gradientů** - moderní weby využívají jemné barevné přechody

### Typografie

#### Současný stav
- **Headingy**: Playfair Display (serif) - elegantní, klasický
- **Body text**: Inter (sans-serif) - čistý, moderní

#### Hodnocení
- ✅ Dobrá kombinace serif/sans-serif
- ⚠️ Chybí větší variabilita velikostí pro lepší hierarchii
- ⚠️ Nedostatečné využití font-weight variací

### Komponenty a jejich vizuální konzistence

#### Hero sekce (`hero-section.tsx`)
**Silné stránky:**
- Využívá Framer Motion pro animace
- Gradient pozadí s radial-gradient efekty
- Animované čítače pro statistiky

**Problémy:**
- Příliš mnoho animací může být rušivé
- Gradient pozadí je příliš subtilní (5% opacity)
- Chybí vizuální kotva (hero image nebo ilustrace)

#### About sekce (`about-section.tsx`)
**Pozitiva:**
- Využívá obrázky z inspirace (sofiatherapy)
- Grid layout pro lepší strukturu
- Quote sekce s gradientním pozadím

**Nedostatky:**
- Obrázek `sofiatherapy1.webp` nemusí být autentický
- Gradient `from-blue-50 to-purple-50` je příliš jemný
- Transformační příběh je vizuálně nezajímavý

#### Services sekce (`Services.tsx`)
**Dobré prvky:**
- Karty s hover efekty
- Badge pro "Nejoblíbenější" službu
- Ikony pro jednotlivé služby

**K vylepšení:**
- Ikony jsou příliš generické
- Chybí vizuální diferenciace mezi službami
- Speciální programy nejsou dostatečně zvýrazněné

## 📊 Analýza vizuální hierarchie

### Současná hierarchie
1. **Primární fokus**: Text "Zažijte změnu" - dobrý, ale chybí vizuální podpora
2. **Sekundární**: CTA tlačítka - správně umístěná, ale málo výrazná
3. **Terciární**: Statistiky - zajímavé, ale vizuálně nudné

### Problémy s hierarchií
- **Příliš mnoho textu** bez vizuálních přerušení
- **Nedostatečné využití white space** v některých sekcích
- **Chybí vizuální průvodci** (šipky, linie, grafické prvky)

## 🎭 Emocionální design

### Co funguje
- Použití teplých barev (růžová, levandulová) evokuje péči a podporu
- Animace dodávají pocit života a dynamiky

### Co chybí
- **Nedostatek autentických fotografií** - pouze stock fotky
- **Chybí ilustrace nebo ikony** specifické pro PSYCH-K®
- **Málo osobního doteku** - web působí genericky

## 🖼️ Porovnání s inspirací (sofiatherapy)

Analyzoval jsem inspirační obrázky a váš současný web výrazně zaostává:

### Inspirace obsahuje:
- Jemné, organické tvary a vlny
- Uklidňující pastelové barvy
- Profesionální fotografie prostředí
- Minimalistický, čistý design

### Váš web postrádá:
- Organické tvary a měkké linie
- Profesionální fotografie Sabiny a prostředí
- Jemnější barevné přechody
- Vizuální metafory transformace

## 🔍 Konzistence designu

### Inkonsistence, které jsem našel:
1. **Různé styly tlačítek** - někde rounded-full, jinde rounded-xl
2. **Nejednotné spacing** - různé hodnoty padding/margin
3. **Různé animační rychlosti** - od 0.3s do 3s
4. **Nekonzistentní hover efekty** - scale, translateY, shadow

## 💡 Hlavní vizuální problémy k řešení

### Priorita 1 - Kritické
1. **Chybí silný vizuální první dojem** - hero sekce je příliš textová
2. **Nedostatečná diferenciace sekcí** - vše splývá dohromady
3. **Chybí autentické fotografie** - snižuje důvěryhodnost

### Priorita 2 - Důležité
1. **Příliš ostrá primární barva** - může odradit citlivější návštěvníky
2. **Nedostatečné využití ilustrací** - web působí chladně
3. **Chybí mikrointerakce** - tlačítka a odkazy nejsou dostatečně responzivní

### Priorita 3 - Vylepšení
1. **Monotónní layout** - všechny sekce mají podobnou strukturu
2. **Chybí vizuální storytelling** - transformační cesta není vizualizovaná
3. **Nedostatečné využití prostoru** - zejména na větších obrazovkách

## 📈 Metriky vizuálního designu

| Aspekt | Současný stav | Cílový stav | Priorita |
|--------|--------------|-------------|----------|
| První dojem | 5/10 | 9/10 | Kritická |
| Barevná harmonie | 6/10 | 8/10 | Vysoká |
| Typografická hierarchie | 7/10 | 9/10 | Střední |
| Vizuální konzistence | 5/10 | 9/10 | Vysoká |
| Emocionální působení | 4/10 | 9/10 | Kritická |
| Profesionalita | 6/10 | 9/10 | Vysoká |
| Unikátnost | 3/10 | 8/10 | Střední |

## 🎯 Závěr auditu

Váš web má **dobrý technický základ** (Next.js, Framer Motion, shadcn/ui), ale **vizuální provedení výrazně zaostává** za potenciálem. Hlavními problémy jsou:

1. **Generický vzhled** - chybí osobitost a autenticita
2. **Nedostatečná emocionální rezonance** - pro terapeutický web klíčové
3. **Slabá vizuální hierarchie** - návštěvník se ztrácí v textu

Web potřebuje **komplexní vizuální redesign** se zaměřením na:
- Jemnější, uklidňující barevnou paletu
- Autentické fotografie a ilustrace
- Silnější vizuální příběh transformace
- Lepší využití prostoru a hierarchie

Detailní doporučení najdete v souboru `design-recommendations.md`.