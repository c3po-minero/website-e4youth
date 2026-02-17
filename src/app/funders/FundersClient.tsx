'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChalkboardTeacher, faBriefcase, faEye, faChartLine, faVrCardboard, faPeopleGroup, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export default function FundersClient() {
  return (
    <>
      <HeroSection
        headline="Leveraging storytelling as infrastructure for equity, workforce readiness, and intergenerational opportunity."
        subheadline="E4 Youth designs and pilots community-informed pathways that combine storytelling, digital literacy, and applied learning to prepare emerging creatives for visible, paid, and workforce-connected roles."
        primaryCTA={{ text: 'Explore Partnership Opportunities', href: '/partner' }}
        secondaryCTA={{ text: 'View Our Impact', href: '/impact' }}
        gradient="from-secondary via-primary-dark to-primary"
      />

      {/* The Gap */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-semibold text-sm rounded-full mb-4">The Challenge</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">The Gap We Address</h2>
              <p className="text-body leading-relaxed mb-4">
                Many youth and workforce initiatives focus on skills without addressing narrative, identity, or professional visibility. At the same time, employers and cultural institutions struggle to engage emerging talent early or translate community knowledge into workforce-relevant assets.
              </p>
              <p className="text-body leading-relaxed">
                E4 Youth operates at this intersection—bridging the gap between creative expression and economic opportunity through intentional, community-rooted programming.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-primary/10 to-purple/10 rounded-3xl p-10">
                <h3 className="text-2xl font-display font-bold text-secondary mb-6">Storytelling as Infrastructure</h3>
                <p className="text-body leading-relaxed">
                  E4 Youth treats storytelling as a system-level workforce and civic tool. Rather than viewing storytelling as enrichment alone, we design it as infrastructure that connects learning to visibility, credibility, and opportunity.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">How We Work With Partners</h2>
            <p className="text-body max-w-2xl mx-auto">
              We collaborate with funders, public agencies, educational institutions, and corporate partners to design, pilot, and scale community-informed approaches.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: faChalkboardTeacher, label: 'Co-Designed Programs', desc: 'Tailored initiatives that reflect community priorities and institutional goals.' },
              { icon: faBriefcase, label: 'Paid Learning Pilots', desc: 'Compensated pathways where participants build real skills with real stakes.' },
              { icon: faEye, label: 'Public Showcases', desc: 'Events and exhibitions that demonstrate impact and elevate participant voices.' },
              { icon: faChartLine, label: 'Evaluation & Infrastructure', desc: 'Rigorous measurement and systems to scale what works.' },
            ].map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 bg-primary-dark/10">
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-primary-dark" />
                  </div>
                  <h3 className="font-display font-bold text-secondary mb-2">{item.label}</h3>
                  <p className="text-sm text-body">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Engage */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Ways to Engage</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { title: 'AR Heritage Tours', desc: 'A location-based augmented reality experience developed with community input that brings Black Austin history into public space through youth-informed storytelling and technology.', icon: faVrCardboard, color: '#9B51E0' },
              { title: 'Community Showcases and Public Learning Events', desc: 'Live events where emerging creatives present work, portfolios, and research alongside mentors, historians, and partners.', icon: faPeopleGroup, color: '#FCB900' },
              { title: 'Workshops, Labs, and Pilot Programs', desc: 'Immersive learning experiences exploring oral history, digital storytelling, creative technology, and workforce connection.', icon: faLaptopCode, color: '#7BDCB5' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-gray-50 rounded-2xl p-8 h-full border-l-4" style={{ borderLeftColor: item.color }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}15` }}>
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Partner With E4 Youth</h2>
            <p className="text-lg text-white/90 mb-8">Invest in storytelling as infrastructure. Shape the next generation of creative professionals and cultural innovators.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner" className="btn-gold">Explore Partnership Opportunities</Link>
              <Link href="/impact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">View Our Impact</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
