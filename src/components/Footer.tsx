import Link from 'next/link'
import FaIcon from './FaIcon'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2 className="footer-heading">Programs</h2>
            <ul className="footer-links">
              <li><Link href="/programs/dsp">Digital Storytelling Program</Link></li>
              <li><Link href="/programs/get-creative">Get Creative!</Link></li>
              <li><Link href="/programs/hip">Heritage &amp; Innovation Pathways</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">Experiences</h2>
            <ul className="footer-links">
              <li><Link href="/experiences/wow">What Once Was</Link></li>
              <li><Link href="/experiences/heritage-center">WOW Heritage Center</Link></li>
              <li><Link href="/experiences/live">E4 Live</Link></li>
              <li><Link href="/experiences/level-up">E4 Level Up</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">About</h2>
            <ul className="footer-links">
              <li><Link href="/about">About E4 Youth</Link></li>
              <li><Link href="/stories">Stories &amp; Showcases</Link></li>
              <li><Link href="/impact">Impact &amp; Evaluation</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2 className="footer-heading">Connect</h2>
            <ul className="footer-links">
              <li><Link href="/partner">Partner With Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/funders">For Funders</Link></li>
            </ul>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><FaIcon iconClass="fa-brands fa-facebook" /></a>
              <a href="#" className="social-link" aria-label="Twitter"><FaIcon iconClass="fa-brands fa-x-twitter" /></a>
              <a href="#" className="social-link" aria-label="Instagram"><FaIcon iconClass="fa-brands fa-instagram" /></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><FaIcon iconClass="fa-brands fa-linkedin" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} E4 Youth. All rights reserved. | Made with <FaIcon iconClass="fa-solid fa-heart" style={{ color: '#e74c3c' }} /> in Austin, TX</p>
        </div>
      </div>
    </footer>
  )
}
