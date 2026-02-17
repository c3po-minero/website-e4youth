'use client'
import FaIcon from '@/components/FaIcon'
import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <Hero title="Ready to Join Our Story? There's a Place for You Here." lead="Whether you're a young person, family member, professional, or organization—E4 Youth has multiple ways for you to get involved." bgImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop" buttons={[{ label: 'Find Your Path', href: '#get-involved', variant: 'primary' }, { label: 'Contact Us Directly', href: '#contact-form', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-compass" title="Multiple Ways to Engage" id="get-involved">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-rocket', title: '"I\'m a young person (ages 12-25)"', desc: 'Discover programs that combine storytelling with digital literacy, career preparation, and community connection.', href: '/programs', cta: 'Explore Youth Programs' },
            { icon: 'fa-solid fa-house', title: '"I\'m a parent or family member"', desc: 'Join family engagement opportunities that honor community knowledge and support intergenerational learning.', href: '#family-engagement', cta: 'Join Family Programming' },
            { icon: 'fa-solid fa-handshake', title: '"I\'m a professional who wants to mentor"', desc: 'Become a community mentor, share industry knowledge, and connect with motivated young people.', href: '/partner', cta: 'Become a Community Mentor' },
            { icon: 'fa-solid fa-link', title: '"I represent an organization"', desc: 'Explore collaboration opportunities with schools, businesses, and foundations.', href: '/partner', cta: 'Explore Partnership Options' },
          ].map(c => (
            <div className="card" key={c.title}>
              <span className="card-icon"><FaIcon iconClass={c.icon} /></span>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.desc}</p>
              <div className="card-cta"><Link href={c.href} className="btn btn-primary">{c.cta}</Link></div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-envelope" title="Get In Touch" lead="Have questions? Want to explore partnership opportunities? Send us a message." id="contact-form">
        <div className="grid grid-2">
          <div>
            {submitted ? (
              <div className="card" style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                <span style={{ fontSize: '3rem', color: 'var(--primary)' }}><FaIcon iconClass="fa-solid fa-circle-check" /></span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We typically respond within 48-72 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <div className="form-group"><label htmlFor="name" className="form-label">Full Name *</label><input type="text" id="name" className="form-input" required /></div>
                <div className="form-group"><label htmlFor="email" className="form-label">Email Address *</label><input type="email" id="email" className="form-input" required /></div>
                <div className="form-group"><label htmlFor="phone" className="form-label">Phone Number (Optional)</label><input type="tel" id="phone" className="form-input" /></div>
                <div className="form-group">
                  <label htmlFor="interest" className="form-label">How would you like to get involved? *</label>
                  <select id="interest" className="form-select" required>
                    <option value="">Select your primary interest</option>
                    <option value="youth-programs">Youth Programs (Ages 12-25)</option>
                    <option value="family-engagement">Family Engagement &amp; Programming</option>
                    <option value="professional-mentorship">Professional Mentorship</option>
                    <option value="educational-partnership">Educational Institution Partnership</option>
                    <option value="workforce-partnership">Workforce &amp; Industry Partnership</option>
                    <option value="community-partnership">Community Organization Partnership</option>
                    <option value="funding-partnership">Foundation &amp; Funding Partnership</option>
                    <option value="volunteer">Volunteer &amp; Community Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="general">General Question</option>
                  </select>
                </div>
                <div className="form-group"><label htmlFor="organization" className="form-label">Organization/School (If applicable)</label><input type="text" id="organization" className="form-input" /></div>
                <div className="form-group"><label htmlFor="message" className="form-label">Tell us more *</label><textarea id="message" className="form-textarea" rows={5} required placeholder="Share details about your interest in E4 Youth..." /></div>
                <div className="form-group"><button type="submit" className="btn btn-primary btn-full"><FaIcon iconClass="fa-solid fa-paper-plane" /> Send Message</button></div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text)', textAlign: 'center' }}>We typically respond within 48-72 hours. For urgent inquiries, call (512) 555-0123.</p>
              </form>
            )}
          </div>
          <div>
            <div className="card card-compact">
              <h3><FaIcon iconClass="fa-solid fa-clock" /> Response Timeline</h3>
              <ul className="check-list">
                <li><strong>General inquiries:</strong> 48-72 hours</li>
                <li><strong>Program applications:</strong> 1 week</li>
                <li><strong>Partnership development:</strong> 2 weeks</li>
                <li><strong>Meeting scheduling:</strong> Within 1 week</li>
              </ul>
            </div>
            <div className="card card-compact mt-md">
              <h3><FaIcon iconClass="fa-solid fa-list-check" /> What Happens Next?</h3>
              <ol style={{ paddingLeft: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                <li>We&apos;ll review your message and interests</li>
                <li>Connect you with the right team member</li>
                <li>Schedule a conversation or send detailed information</li>
                <li>Invite you to relevant upcoming events</li>
                <li>Follow up with concrete next steps</li>
              </ol>
            </div>
            <div className="card card-compact mt-md">
              <h3><FaIcon iconClass="fa-solid fa-universal-access" /> Accessibility Support</h3>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>We offer: Spanish language support, extended response times, phone and video call options, in-person meetings, and alternative communication formats.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-address-book" title="Direct Contact Information">
        <div className="grid grid-3">
          {[
            { icon: 'fa-solid fa-envelope', title: 'General Information', desc: 'Email: hello@e4youth.org\nPhone: (512) 555-0123' },
            { icon: 'fa-solid fa-graduation-cap', title: 'Youth Programs', desc: 'Email: programs@e4youth.org\nAlex Martinez, Youth Engagement Coordinator' },
            { icon: 'fa-solid fa-house', title: 'Family Engagement', desc: 'Email: families@e4youth.org\nJennifer Park, Family Coordinator' },
            { icon: 'fa-solid fa-handshake', title: 'Professional Mentorship', desc: 'Email: mentors@e4youth.org\nSarah Chen, Professional Development Coordinator' },
            { icon: 'fa-solid fa-briefcase', title: 'Workforce Partnerships', desc: 'Email: careers@e4youth.org\nDavid Kim, Workforce Engagement Manager' },
            { icon: 'fa-solid fa-school', title: 'Educational Partnerships', desc: 'Email: schools@e4youth.org\nDr. Maria Rodriguez, Educational Collaboration Director' },
          ].map(c => (
            <div className="card" key={c.title}>
              <span className="card-icon"><FaIcon iconClass={c.icon} /></span>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description" style={{ whiteSpace: 'pre-line' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-calendar" title="Join Us: Regular Community Events" id="family-engagement">
        <div className="grid grid-3">
          <div className="card"><span className="card-icon"><FaIcon iconClass="fa-solid fa-users" /></span><h3 className="card-title">E4 Live Networking Events</h3><p className="card-description"><strong>When:</strong> First Thursday of each month, 6:00-8:00 PM<br /><strong>Cost:</strong> Free, no registration required</p></div>
          <div className="card"><span className="card-icon"><FaIcon iconClass="fa-solid fa-star" /></span><h3 className="card-title">Quarterly Community Showcases</h3><p className="card-description"><strong>When:</strong> End of each program session<br /><strong>Duration:</strong> 2-3 hours with flexible arrival</p></div>
          <div className="card"><span className="card-icon"><FaIcon iconClass="fa-solid fa-heart" /></span><h3 className="card-title">Annual Community Celebration</h3><p className="card-description"><strong>When:</strong> Early summer (date announced annually)<br /><strong>Special Features:</strong> Intergenerational community connection</p></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-arrow-right" title="Ready to Connect?" lead="Every meaningful relationship starts with conversation. We're here to help you find the perfect way to engage.">
        <div className="btn-group">
          <Link href="#contact-form" className="btn btn-primary">Send Us a Message</Link>
          <Link href="/programs" className="btn btn-accent">Explore Our Programs</Link>
          <Link href="/partner" className="btn btn-outline">Learn About Partnership</Link>
        </div>
      </Section>
    </>
  )
}
