import type { Metadata } from 'next'
import { Playfair_Display, Inter, Geist_Mono } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
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

export const metadata: Metadata = {
  title: {
    default: 'Levant Gold & Silver | Buy & Sell Precious Metals in Southern California',
    template: '%s | Levant Gold & Silver',
  },
  description:
    "Southern California's trusted precious metals dealer. Buy and sell gold, silver, platinum, and palladium at three convenient locations in Orange, Pomona, and San Bernardino. Same-day cash offers, no appointment needed.",
  keywords: ['buy gold', 'sell gold', 'precious metals', 'Southern California', 'gold dealer', 'silver bullion'],
  openGraph: {
    type: 'website',
    siteName: 'Levant Gold & Silver',
    title: 'Levant Gold & Silver | Buy & Sell Precious Metals',
    description: "Southern California's trusted precious metals dealer with 3 locations.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
