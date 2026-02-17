import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto section-padding !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-display font-bold">
              <span className="text-primary">E4</span> Youth
            </Link>
            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Using the power of storytelling to unlock equity, workforce access, and opportunity across generations.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={['fab', 'instagram']} className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={['fab', 'youtube']} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/programs/dsp" className="hover:text-primary transition-colors">Digital Storytelling (DSP)</Link></li>
              <li><Link href="/programs/get-creative" className="hover:text-primary transition-colors">Get Creative!</Link></li>
              <li><Link href="/programs/hip" className="hover:text-primary transition-colors">Heritage & Innovation (HIP)</Link></li>
              <li><Link href="/programs/wow" className="hover:text-primary transition-colors">What Once Was (WOW)</Link></li>
              <li><Link href="/programs/wow-heritage-center" className="hover:text-primary transition-colors">WOW Heritage Center</Link></li>
              <li><Link href="/programs/e4-live" className="hover:text-primary transition-colors">E4 Live</Link></li>
              <li><Link href="/programs/e4-level-up" className="hover:text-primary transition-colors">E4 Level Up</Link></li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Organization</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/impact" className="hover:text-primary transition-colors">Impact & Evaluation</Link></li>
              <li><Link href="/stories" className="hover:text-primary transition-colors">Stories & Showcases</Link></li>
              <li><Link href="/partner" className="hover:text-primary transition-colors">Partner With Us</Link></li>
              <li><Link href="/funders" className="hover:text-primary transition-colors">For Funders</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon="location-dot" className="w-4 h-4 text-primary mt-0.5" />
                <span>Austin, Texas</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon="envelope" className="w-4 h-4 text-primary mt-0.5" />
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
