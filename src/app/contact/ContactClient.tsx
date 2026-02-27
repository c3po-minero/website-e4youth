'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faGraduationCap, faHandshake, faHeart, faEnvelope, faLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const pathways = [
  {
    title: 'Participant',
    subtitle: 'Join an Experience',
    desc: 'Explore creative technology experiences across every stage of the E4 Ecosystem. No prerequisites required — find where you fit and start building.',
    icon: faUsers,
    color: '#4DB8FF',
    href: '/experiences',
    cta: 'Browse Experiences',
  },
  {
    title: 'Educator',
    subtitle: 'Bring E4 to Your Community',
    desc: 'Partner with E4 Youth to bring creative technology programming to your school, after-school program, or community organization. We design experiences that integrate with your goals.',
    icon: faGraduationCap,
    color: '#9B51E0',
    href: '#contact-form',
    cta: 'Start a Conversation',
  },
  {
    title: 'Partner / Funder',
    subtitle: 'Start a Conversation',
    desc: 'Whether you represent a corporation, foundation, workforce organization, or community institution, there is a partnership model built for you within the E4 Ecosystem.',
    icon: faHandshake,
    color: '#FCB900',
    href: '/partner',
    cta: 'Explore Partnerships',
  },
  {
    title: 'Supporter',
    subtitle: 'Support the Ecosystem',
    desc: 'Your support helps sustain stipend-supported cohorts, expand employer-funded pathways, and keep the E4 Ecosystem accessible to every young person who walks through the door.',
    icon: faHeart,
    color: '#7BDCB5',
    href: '#contact-form',
    cta: 'Get Involved',
  },
]

export default function ContactClient() {
  return (
    <>
      <HeroSection
        headline="Contact & Get Involved"
        subheadline="Whether you're a participant, partner, educator, or supporter, there are many ways to connect with E4 Youth."
        primaryCTA={{ text: 'Contact Us', href: '#contact-form' }}
        secondaryCTA={{ text: 'Join an Experience', href: '/experiences' }}
        gradient="from-purple via-primary-dark to-mint"
        backgroundImage="/images/e4youth/_a4a5415.webp"
        backgroundImageAlt="Connect with E4Youth"
      />

      {/* Connect Pathways */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Connect Pathways</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Find your entry point into the E4 Ecosystem. Every pathway leads to meaningful connection and impact.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pathways.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full flex flex-col" style={{ borderTopColor: p.color, borderTopWidth: '3px' }}>
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${p.color}15` }}>
                    <FontAwesomeIcon icon={p.icon} className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-display font-bold text-secondary text-center mb-1">{p.title}</h3>
                  <p className="text-sm font-semibold text-center mb-3" style={{ color: p.color }}>{p.subtitle}</p>
                  <p className="text-sm text-body leading-relaxed mb-6 flex-1">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold text-sm text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ backgroundColor: p.color }}
                  >
                    {p.cta} <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                  </Link>
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
                  <option value="participant">Joining an Experience</option>
                  <option value="educator">Bringing E4 to My Community</option>
                  <option value="partnership">Partnership / Funding</option>
                  <option value="supporter">Supporting the Ecosystem</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mr-2" />
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
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-gold" />
                <a href="mailto:info@e4youth.org" className="text-white hover:text-gold transition-colors">info@e4youth.org</a>
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-gold" />
                <span>Austin, Texas</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
