'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const ways = [
  { title: 'Youth & Families', desc: 'Explore programs, sign up for workshops, or attend an upcoming event.', icon: 'users' as const, color: '#4DB8FF' },
  { title: 'Educators', desc: 'Bring E4 Youth programming into your school or after-school program.', icon: 'graduation-cap' as const, color: '#9B51E0' },
  { title: 'Partners & Funders', desc: 'Start a conversation about collaboration, sponsorship, or investment.', icon: 'handshake' as const, color: '#FCB900' },
  { title: 'Volunteers & Mentors', desc: 'Share your skills and time with the next generation of creatives.', icon: 'heart' as const, color: '#7BDCB5' },
]

export default function ContactClient() {
  return (
    <>
      <HeroSection
        headline="Contact & Get Involved"
        subheadline="Whether you're a participant, partner, educator, or supporter, there are many ways to connect with E4 Youth."
        primaryCTA={{ text: 'Contact Us', href: '#contact-form' }}
        secondaryCTA={{ text: 'Join an Experience', href: '/programs' }}
        gradient="from-purple via-primary-dark to-mint"
      />

      {/* Ways to Connect */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Ways to Connect</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ways.map((w, i) => (
              <AnimatedSection key={w.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center card-hover h-full">
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${w.color}15` }}>
                    <FontAwesomeIcon icon={w.icon} className="w-6 h-6" style={{ color: w.color }} />
                  </div>
                  <h3 className="font-display font-bold text-secondary mb-2">{w.title}</h3>
                  <p className="text-sm text-body">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Send Us a Message</h2>
            <p className="mt-4 text-body">Fill out the form below and we will get back to you as soon as possible.</p>
          </AnimatedSection>
          <AnimatedSection>
            <form className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-secondary mb-2">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-secondary mb-2">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">Email</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-secondary mb-2">I am interested in...</label>
                <select id="interest" name="interest" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                  <option value="">Select an option</option>
                  <option value="programs">Joining a Program</option>
                  <option value="partnership">Partnership</option>
                  <option value="funding">Funding / Sponsorship</option>
                  <option value="volunteering">Volunteering / Mentoring</option>
                  <option value="education">Bringing E4 Youth to My School</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <FontAwesomeIcon icon="envelope" className="w-4 h-4 mr-2" />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-display font-bold mb-8">Other Ways to Reach Us</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="envelope" className="w-5 h-5 text-gold" />
                <a href="mailto:info@e4youth.org" className="text-white hover:text-gold transition-colors">info@e4youth.org</a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon="location-dot" className="w-5 h-5 text-gold" />
                <span>Austin, Texas</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
