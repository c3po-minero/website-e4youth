import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/lib/fontawesome'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins', display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'E4 Youth — Storytelling for Equity & Opportunity',
    template: '%s | E4 Youth',
  },
  description: 'E4 Youth uses the power of storytelling to unlock equity, workforce access, and opportunity across generations.',
  metadataBase: new URL('https://e4youth.org'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'E4 Youth',
    title: 'E4 Youth — Storytelling for Equity & Opportunity',
    description: 'E4 Youth uses the power of storytelling to unlock equity, workforce access, and opportunity across generations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E4 Youth — Storytelling for Equity & Opportunity',
    description: 'E4 Youth uses the power of storytelling to unlock equity, workforce access, and opportunity across generations.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary-dark focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
