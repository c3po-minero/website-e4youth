import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FontAwesomeConfig from '@/components/FontAwesomeConfig'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_URL = 'https://e4youth.org'
const SITE_NAME = 'E4 Youth'
const SITE_DESC = 'Empowering youth through storytelling, digital literacy, and career-connected opportunities in Austin, TX.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'E4 Youth | Storytelling for Equity & Opportunity', template: '%s | E4 Youth' },
  description: SITE_DESC,
  keywords: ['youth empowerment', 'storytelling', 'digital literacy', 'Austin TX', 'career development', 'E4 Youth', 'equity', 'opportunity'],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'E4 Youth | Storytelling for Equity & Opportunity',
    description: SITE_DESC,
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: 'E4 Youth – Empowering youth through storytelling' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E4 Youth | Storytelling for Equity & Opportunity',
    description: SITE_DESC,
    images: [`${SITE_URL}/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: 'https://e4youth.org/wp-content/uploads/2024/06/Copy-of-e4-full-white-logo.png',
  description: SITE_DESC,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  email: 'hello@e4youth.org',
  telephone: '(512) 555-0123',
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <FontAwesomeConfig />
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main className="main" id="main" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
