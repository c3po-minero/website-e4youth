'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const metrics = [
  { label: 'Youth Engaged', value: '500+', icon: 'users' as const, color: '#4DB8FF' },
  { label: 'Programs Delivered', value: '25+', icon: 'calendar-days' as const, color: '#9B51E0' },
  { label: 'Community Partners', value: '40+', icon: 'handshake' as const, color: '#FCB900' },
  { label: 'Cities Reached', value: '3', icon: 'globe' as const, color: '#7BDCB5' },
]

export default function ImpactClient() {
  return (
    <>
      <HeroSection
        headline="Impact & Evaluation"
        subheadline="E4 Youth measures impact across learning, visibility, and opportunity, capturing growth over time through portfolios, applied work, and progression into next-step pathways."
        primaryCTA={{ text: 'View Impact Highlights', href: '#metrics' }}
        secondaryCTA={{ text: 'Partner on Evaluation', href: '/partner' }}
        gradient="from-gold via-purple to-primary-dark"
      />

      {/* Metrics */}
      <section id="metrics" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <AnimatedSection key={m.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${m.color}15` }}>
                    <FontAwesomeIcon icon={m.icon} className="w-7 h-7" style={{ color: m.color }} />
                  </div>
                  <p className="text-4xl font-display font-bold text-secondary">{m.value}</p>
                  <p className="text-body mt-1">{m.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Measure */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">How We Measure Impact</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Our evaluation framework captures both quantitative and qualitative growth across multiple dimensions.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Learning & Skill Development', desc: 'Tracking growth in digital literacy, creative production, communication, and professional readiness through portfolio assessment and skill benchmarks.', icon: 'graduation-cap' as const, color: '#4DB8FF' },
              { title: 'Visibility & Public Engagement', desc: 'Measuring the reach and impact of participant work through exhibitions, events, media features, and audience engagement metrics.', icon: 'eye' as const, color: '#9B51E0' },
              { title: 'Opportunity & Pathway Progression', desc: 'Following participants as they move into advanced programs, employment, higher education, and leadership roles in creative industries.', icon: 'rocket' as const, color: '#FCB900' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: item.color, borderTopWidth: '3px' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}15` }}>
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Invest in Measurable Impact</h2>
            <p className="text-lg text-white/90 mb-8">Partner with E4 Youth to build and evaluate programs that create lasting change for emerging creatives and communities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner" className="btn-gold">Partner on Evaluation</Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">Contact Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
