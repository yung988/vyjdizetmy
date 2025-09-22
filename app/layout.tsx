import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '@/components/scroll-progress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Sabina Weisbergerová - PSYCH-K® Facilitátorka | Transformace podvědomí',
    template: '%s | Sabina Weisbergerová'
  },
  description: 'Profesionální transformace podvědomých bloků metodou PSYCH-K®. Pomáhám lidem najít vnitřní klid, překonat strachy a dosáhnout skutečných změn. Online i osobní sezení.',
  keywords: [
    'PSYCH-K',
    'transformace podvědomí',
    'terapie',
    'osobní rozvoj',
    'úzkost',
    'strach',
    'Bachovy esence',
    'facilitátorka',
    'Vysočina',
    'online terapie'
  ],
  authors: [{ name: 'Sabina Weisbergerová' }],
  creator: 'Sabina Weisbergerová',
  publisher: 'Sabina Weisbergerová',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vyjdizetmy.cz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sabina Weisbergerová - PSYCH-K® Facilitátorka',
    description: 'Transformujte své podvědomí metodou PSYCH-K®. Najděte cestu k vnitřnímu klidu a skutečným změnám.',
    url: 'https://vyjdizetmy.cz',
    siteName: 'Sabina Weisbergerová - PSYCH-K®',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sabina Weisbergerová - PSYCH-K® Facilitátorka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabina Weisbergerová - PSYCH-K® Facilitátorka',
    description: 'Transformujte své podvědomí metodou PSYCH-K®. Najděte cestu k vnitřnímu klidu.',
    images: ['/og-image.jpg'],
    creator: '@sabinapsychk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fdfcfb' },
    { media: '(prefers-color-scheme: dark)', color: '#2a2d3a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d4669f" />
        <meta name="msapplication-TileColor" content="#d4669f" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'GA_MEASUREMENT_ID'}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sabina Weisbergerová - PSYCH-K® Facilitátorka",
              "description": "Profesionální transformace podvědomých bloků metodou PSYCH-K®. Pomáhám lidem najít vnitřní klid a dosáhnout skutečných změn.",
              "url": "https://vyjdizetmy.cz",
              "telephone": "+420-777-123-456",
              "email": "info@vyjdizetmy.cz",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Vysočina",
                "addressCountry": "CZ"
              },
              "serviceType": ["PSYCH-K® Therapy", "Personal Development", "Bach Flower Remedies"],
              "areaServed": "Czech Republic",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              },
              "sameAs": [
                "https://www.facebook.com/sabinapsychk",
                "https://www.instagram.com/sabinapsychk"
              ]
            })
          }}
        />

        {/* Additional structured data for services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "PSYCH-K® Individuální sezení",
                "description": "Komplexní transformace podvědomých bloků metodou PSYCH-K®",
                "provider": {
                  "@type": "Person",
                  "name": "Sabina Weisbergerová"
                },
                "areaServed": "Czech Republic",
                "serviceType": "Therapy",
                "offers": {
                  "@type": "Offer",
                  "price": "1400",
                  "priceCurrency": "CZK",
                  "priceValidUntil": "2025-12-31"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Online PSYCH-K® konzultace",
                "description": "Stejná účinnost jako osobní sezení z pohodlí domova",
                "provider": {
                  "@type": "Person",
                  "name": "Sabina Weisbergerová"
                },
                "areaServed": "Worldwide",
                "serviceType": "Online Therapy",
                "offers": {
                  "@type": "Offer",
                  "price": "1200",
                  "priceCurrency": "CZK",
                  "priceValidUntil": "2025-12-31"
                }
              }
            ])
          }}
        />
      </head>
      <body className="antialiased">
        <ScrollProgress />
        {children}

        {/* Skip to main content for accessibility */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Přeskočit na hlavní obsah
        </a>
      </body>
    </html>
  );
}
