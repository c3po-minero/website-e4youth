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
            <a href="https://minero.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center" aria-label="Minero">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 36" fill="currentColor" className="h-3 w-auto relative -top-[2px]"><path fillRule="evenodd" d="M90.41,11.66c6.67,0,10.33,4.88,10.33,11.03,0,.33-.03.85-.07,1.3-.04.48-.43.84-.91.84h-14.16c-.59,0-1.03.55-.89,1.12.84,3.37,3.61,5.12,6.79,5.12,2.56,0,4.67-1.21,5.75-1.98.44-.31,1.04-.19,1.32.27h0l1.49,2.46c.24.39.15.9-.22,1.19-1.25.98-4.36,2.99-8.75,2.99-7.72,0-12.52-5.56-12.52-12.17,0-7.16,4.84-12.17,11.84-12.17ZM133.41,11.66c7.13,0,12.8,5.06,12.8,12.17s-5.67,12.17-12.8,12.17-12.75-5.01-12.75-12.17,5.67-12.17,12.75-12.17ZM24.3,12.41c5.83,0,11.36,4.53,11.36,12.46,0,1.78-.27,3.37-.69,4.78-.79,2.67-2.1,4.64-3.06,5.81h-5.86c-.5,0-.91-.41-.91-.91h0v-3.99c0-.5.41-.91.91-.91h2.51c.6-1.31,1.07-2.91,1.07-4.73,0-3.45-2.17-5.96-5.24-5.96s-5.14,2.86-5.14,6.61c0,.54-.45.98-.99.98h-5.59c-.21,0-.42-.07-.59-.2h0l-3.98-2.96c-1.78-1.18-2.67-2.31-2.67-2.31h-.1s.15,1.08.15,3.1h0v4.38c0,.6.49,1.08,1.09,1.08h.37c.5,0,.91.41.91.91h0v3.99c0,.5-.41.91-.91.91h-3.58c-2.32,0-3.36-.69-3.36-3.05h0V15.25c0-1.03.84-1.86,1.87-1.86h1.48c.42,0,.83.14,1.16.41h0l9.16,7.3c.18.14.45.04.49-.18.91-4.52,4.42-8.51,10.13-8.51ZM41.92,12.21c2.2,0,3.98,1.78,3.98,3.96v12.49c0,1.01.78,1.83,1.77,1.91h.15c.5,0,.91.41.91.92v3.05c0,.5-.41.91-.91.91h-4.62c-2.15,0-3.06-.91-3.06-3.1v-14.22c0-.68-.37-1-1.01-1h-.91c-.5,0-.91-.41-.91-.91v-3.1c0-.5.41-.91.91-.91h3.7ZM66.4,11.66c5.16,0,8.14,2.69,8.14,8.84v8.16c0,1.06.86,1.91,1.92,1.91.5,0,.91.41.91.91v3.05c0,.5-.41.91-.91.91h-3.7c-2.22,0-4.02-1.8-4.02-4.01v-9.75c0-2.83-.73-4.74-3.66-4.74-3.11,0-5.44,1.96-6.26,4.74-.32.96-.46,2.01-.46,3.1v9.75c0,.5-.41.91-.91.91h-3.93c-.5,0-.91-.41-.91-.91v-16.41c0-.68-.37-1-1.01-1h-.91c-.5,0-.91-.41-.91-.91v-3.1c0-.5.41-.91.91-.91h4.43c2.06,0,3.06.96,3.06,2.6v.68c0,.5-.09,1-.09,1h.09c1.01-1.96,3.52-4.83,8.23-4.83ZM118.56,11.89c.5.02.9.42.9.91v3.89c0,.52-.43.93-.95.9-.14,0-.3,0-.46,0-2.47,0-5.3,1.41-6.35,4.88-.32,1.14-.5,2.42-.5,3.78v8.3c0,.5-.41.91-.91.91h-3.93c-.5,0-.91-.41-.91-.91v-16.41c0-.68-.37-1-1.01-1h-.91c-.5,0-.91-.41-.91-.91v-3.1c0-.5.41-.91.91-.91h4.39c2.06,0,3.11.87,3.11,2.83v1.37c0,.87-.09,1.46-.09,1.46h.09c1.05-3.33,3.84-5.97,7.4-5.97.05,0,.1,0,.16,0ZM133.41,16.58c-3.75,0-6.9,2.96-6.9,7.25s3.15,7.25,6.9,7.25,6.95-2.92,6.95-7.25-3.15-7.25-6.95-7.25ZM90.41,16.13c-2.52,0-4.41,1.27-5.32,3.44-.25.6.2,1.26.85,1.26h7.82c.59,0,1.02-.55.89-1.12-.5-2.16-2.2-3.57-4.24-3.57ZM149.35,12.89c.15,0,.22.07.22.22v.16c0,.15-.07.22-.22.22h-.66v2.07c0,.15-.07.22-.22.22h-.26c-.15,0-.22-.07-.22-.22v-2.07h-.66c-.15,0-.22-.07-.22-.22v-.16c0-.15.07-.22.22-.22h2.03ZM150.68,12.89c.13,0,.21.06.25.18l.36,1.04s.03.1.05.15c.02.06.03.11.05.16.02.06.03.11.05.17h0c.02-.06.03-.11.05-.17.01-.05.03-.1.05-.16.02-.06.03-.11.05-.15l.36-1.04c.04-.12.12-.18.25-.18h.37c.14,0,.22.07.23.21l.2,2.45c0,.07,0,.13-.05.17-.04.04-.09.06-.16.06h-.26c-.14,0-.22-.07-.23-.21l-.07-1.09c0-.05,0-.11-.01-.17,0-.06,0-.11,0-.16,0-.05,0-.11,0-.16h0c-.02.06-.04.12-.06.17-.02.05-.03.1-.05.16-.02.06-.04.11-.05.15l-.24.66c-.04.12-.13.18-.26.18h-.23c-.13,0-.21-.06-.26-.18l-.24-.66s-.03-.1-.05-.15c-.02-.06-.04-.11-.05-.16-.02-.06-.04-.11-.06-.17h0c0,.05,0,.11,0,.16,0,.05,0,.1,0,.16,0,.06,0,.11,0,.17l-.07,1.09c-.01.14-.09.21-.23.21h-.27c-.07,0-.13-.02-.16-.06-.04-.04-.05-.1-.05-.17l.2-2.45c.01-.14.09-.21.23-.21h.37ZM42.44.33l3.18,3.17c.46.46.43,1.22-.05,1.7l-3.07,3.06c-.48.48-1.25.5-1.7.05l-3.18-3.17c-.46-.46-.43-1.22.05-1.7l3.07-3.06c.48-.48,1.25-.5,1.7-.05Z"/></svg>
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
