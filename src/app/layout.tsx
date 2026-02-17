import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: { default: 'E4 Youth | Storytelling for Equity & Opportunity', template: '%s | E4 Youth' },
  description: 'Empowering youth through storytelling, digital literacy, and career-connected opportunities.',
  openGraph: {
    title: 'E4 Youth | Storytelling for Equity & Opportunity',
    description: 'Empowering youth through storytelling, digital literacy, and career-connected opportunities.',
    type: 'website',
    url: 'https://e4youth.org',
    images: ['https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
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
