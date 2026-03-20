import type { Metadata } from 'next'
import { Playfair_Display, Inter, Geist_Mono } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import JsonLd from '@/components/seo/JsonLd'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://levantgold.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Levant Gold & Silver | Buy & Sell Precious Metals in Southern California',
    template: '%s | Levant Gold & Silver',
  },
  description:
    "Southern California's trusted precious metals dealer. Buy and sell gold, silver, platinum, and palladium at four convenient locations in Orange, Pomona, San Bernardino, and Walnut. Free XRF testing, same-day cash offers, no appointment needed.",
  keywords: [
    'buy gold Southern California', 'sell gold Southern California',
    'gold dealer Orange CA', 'gold dealer Pomona CA', 'gold dealer San Bernardino', 'gold dealer Walnut CA',
    'precious metals dealer Southern California', 'precious metals dealer Inland Empire',
    'sell gold jewelry Orange County', 'sell gold jewelry Inland Empire',
    'cash for gold Orange CA', 'cash for gold Pomona', 'cash for gold San Bernardino',
    'gold buyer near me', 'sell gold near me', 'precious metals buyer near me',
    'buy gold Orange County', 'buy gold Inland Empire',
    'gold coins buyer California', 'silver bullion dealer California',
    'gold appraisal Southern California', 'XRF gold testing',
    'sell gold bars California', 'sell silver coins California',
    'estate jewelry buyer Southern California', 'gold scrap buyer California',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Levant Gold & Silver',
    title: 'Levant Gold & Silver | Buy & Sell Precious Metals in Southern California',
    description:
      "Southern California's trusted precious metals dealer. 4 locations in Orange, Pomona, San Bernardino & Walnut. Free XRF testing, same-day cash, no appointment needed.",
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Levant Gold & Silver | Buy & Sell Precious Metals in Southern California',
    description:
      "Southern California's trusted precious metals dealer. 4 locations. Free XRF testing, same-day cash offers — Orange, Pomona, San Bernardino & Walnut.",
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
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${baseUrl}/#organization`,
  name: 'Levant Gold & Silver',
  url: baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${baseUrl}/images/logo/levant-logo.png`,
  },
  description:
    "Southern California's trusted precious metals dealer with four locations in Orange, Pomona, San Bernardino, and Walnut.",
  areaServed: [
    'Orange, CA', 'Pomona, CA', 'San Bernardino, CA', 'Walnut, CA',
    'Santa Ana, CA', 'Anaheim, CA', 'Tustin, CA', 'Garden Grove, CA',
    'Riverside, CA', 'Colton, CA', 'Redlands, CA', 'Fontana, CA',
    'Diamond Bar, CA', 'West Covina, CA', 'Ontario, CA', 'Chino, CA',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd id="schema-org" schema={orgSchema} />
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
