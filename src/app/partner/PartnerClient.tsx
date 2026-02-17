'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const partnerTypes = [
  { title: 'Schools & Educators', desc: 'Bring E4 Youth programming into your school, after-school program, or educational institution. We offer curriculum integration, workshops, and ongoing partnerships.', icon: 'school' as const, color: '#4DB8FF' },
  { title: 'Workforce & Industry Partners', desc: 'Connect with emerging creative talent through paid learning pilots, mentorship opportunities, portfolio reviews, and hiring pathways.', icon: 'briefcase' as const, color: '#9B51E0' },
  { title: 'Funders & Foundations', desc: 'Invest in storytelling as infrastructure for equity and opportunity. Support programs, evaluation, and organizational growth.', icon: 'seedling' as const, color: '#FCB900' },
  { title: 'Community Organizations', desc: 'Collaborate on projects that preserve community history, amplify local voices, and create shared learning experiences.', icon: 'people-group' as const, color: '#7BDCB5' },
  { title: 'Cultural Institutions', desc: 'Partner on exhibitions, public programming, and research projects that connect community storytelling to institutional reach.', icon: 'landmark' as const, color: '#0072CE' },
  { title: 'Technology Partners', desc: 'Provide tools, platforms, and expertise that help E4 Youth participants build cutting-edge digital skills.', icon: 'code' as const, color: '#9B51E0' },
]

export default function PartnerClient() {
  return (
    <>
      <HeroSection
        headline="Partner With Us"
        subheadline="E4 Youth partners with schools, workforce and industry partners, and funders to expand access to creative learning and opportunity."
        primaryCTA={{ text: 'Explore Partnership Options', href: '#partners' }}
        secondaryCTA={{ text: 'Start a Conversation', href: '/contact' }}
        gradient="from-primary-dark via-gold to-purple"
      />

      <section id="partners" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Partnership Opportunities</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">There are many ways to partner with E4 Youth. Find the path that aligns with your mission and goals.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerTypes.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 card-hover h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: `${p.color}15` }}>
                    <FontAwesomeIcon icon={p.icon} className="w-6 h-6" style={{ color: p.color }} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary mb-3">{p.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-gold to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Partner?</h2>
            <p className="text-lg text-white/90 mb-8">Let us explore how we can work together to expand access to creative learning and opportunity.</p>
            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-secondary font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
              Start a Conversation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
