import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <Image src="/images/logo-white.png" alt="E4 Youth" width={160} height={48} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Building multi-generational pathways through creative technology. Engage, Educate, Empower, Elevate.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/e4youth" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/e4youth" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/e4youth" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Experiences */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Experiences</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/experiences/public" className="hover:text-primary transition-colors">Public Experiences</Link></li>
              <li><Link href="/experiences/learning" className="hover:text-primary transition-colors">Learning Experiences</Link></li>
              <li><Link href="/experiences/professional" className="hover:text-primary transition-colors">Professional Experiences</Link></li>
              <li className="pt-2 border-t border-gray-600"><Link href="/experiences/ar-heritage-tours" className="hover:text-primary transition-colors">AR Heritage Tours</Link></li>
              <li><Link href="/experiences/digital-storytelling" className="hover:text-primary transition-colors">Digital Storytelling (DSP)</Link></li>
              <li><Link href="/experiences/get-creative" className="hover:text-primary transition-colors">Get Creative!</Link></li>
              <li><Link href="/experiences/hip" className="hover:text-primary transition-colors">Heritage Innovation (HIP)</Link></li>
              <li><Link href="/experiences/wow" className="hover:text-primary transition-colors">WOW — Workforce Opportunity</Link></li>
              <li><Link href="/experiences/e4-level-up" className="hover:text-primary transition-colors">E4 Level Up</Link></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Organization</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/e4-ecosystem" className="hover:text-primary transition-colors">E4 Ecosystem</Link></li>
              <li><Link href="/experiences" className="hover:text-primary transition-colors">Experiences</Link></li>
              <li><Link href="/impact" className="hover:text-primary transition-colors">Impact</Link></li>
              <li><Link href="/partner" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="/wow-heritage-center" className="hover:text-primary transition-colors">WOW Heritage Center</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Stories</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 text-primary mt-0.5" />
                <span>Austin, Texas</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-primary mt-0.5" />
                <a href="mailto:info@e4youth.org" className="hover:text-primary transition-colors">info@e4youth.org</a>
              </li>
            </ul>
            <Link href="/contact" className="btn-primary text-sm !px-6 !py-2.5 mt-6">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} E4 Youth. All rights reserved.</p>
          <div className="flex items-center gap-1 text-gray-300">
            Powered by{' '}
            <a href="https://minero.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/minero-logo.svg" alt="Minero" className="h-3 w-auto opacity-60 invert" />
            </a>
            {' '}+ <span>🤖</span>
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
