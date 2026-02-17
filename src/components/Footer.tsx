import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Programs</h4>
            <ul className="footer-links">
              <li><Link href="/programs/dsp">Digital Storytelling Program</Link></li>
              <li><Link href="/programs/get-creative">Get Creative!</Link></li>
              <li><Link href="/programs/hip">Heritage &amp; Innovation Pathways</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Experiences</h4>
            <ul className="footer-links">
              <li><Link href="/experiences/wow">What Once Was</Link></li>
              <li><Link href="/experiences/heritage-center">WOW Heritage Center</Link></li>
              <li><Link href="/experiences/live">E4 Live</Link></li>
              <li><Link href="/experiences/level-up">E4 Level Up</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>About</h4>
            <ul className="footer-links">
              <li><Link href="/about">About E4 Youth</Link></li>
              <li><Link href="/stories">Stories &amp; Showcases</Link></li>
              <li><Link href="/impact">Impact &amp; Evaluation</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><Link href="/partner">Partner With Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/funders">For Funders</Link></li>
            </ul>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="social-link" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-link" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} E4 Youth. All rights reserved. | Made with <i className="fa-solid fa-heart" style={{ color: '#e74c3c' }}></i> in Austin, TX</p>
        </div>
      </div>
    </footer>
  )
}
