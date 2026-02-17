'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export default function AboutClient() {
  return (
    <>
      <HeroSection
        headline="About E4 Youth"
        subheadline="E4 Youth is a community-rooted organization using storytelling to unlock equity and opportunity across generations."
        primaryCTA={{ text: 'Explore Our Programs', href: '/programs' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
        gradient="from-primary via-purple to-gold"
      />

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark font-semibold text-sm rounded-full mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Why We Exist</h2>
              <p className="text-body leading-relaxed mb-4">
                E4 Youth was born from the belief that every young person has a story worth telling—and that storytelling itself is a powerful tool for building skills, creating opportunity, and strengthening communities.
              </p>
              <p className="text-body leading-relaxed mb-4">
                Founded in Austin, Texas, E4 Youth has grown from a grassroots initiative into a multi-program organization that serves hundreds of young people annually through immersive creative experiences, workforce-connected learning, and public storytelling platforms.
              </p>
              <p className="text-body leading-relaxed">
                Our name reflects our framework: the 4 E&apos;s—Engage, Educate, Empower, and Elevate—guide everything we do, ensuring that participants move from initial engagement to visible, meaningful roles in their communities and careers.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {[
                  { label: 'Engage', desc: 'Meeting young people where they are through culturally relevant, community-informed programming.', color: '#4DB8FF', icon: 'heart' as const },
                  { label: 'Educate', desc: 'Building digital literacy, creative confidence, and professional communication skills.', color: '#9B51E0', icon: 'graduation-cap' as const },
                  { label: 'Empower', desc: 'Creating pathways for participants to own their narratives and build public-facing work.', color: '#FCB900', icon: 'bolt' as const },
                  { label: 'Elevate', desc: 'Connecting emerging creatives to workforce opportunities, visibility, and leadership.', color: '#7BDCB5', icon: 'rocket' as const },
                ].map((e) => (
                  <div key={e.label} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${e.color}15` }}>
                      <FontAwesomeIcon icon={e.icon} className="w-5 h-5" style={{ color: e.color }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-secondary">{e.label}</h3>
                      <p className="text-sm text-body">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">What We Believe</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Stories Are Infrastructure', desc: 'Storytelling is not just enrichment—it is a workforce and civic tool that builds skills, visibility, and opportunity.' },
              { title: 'Community Comes First', desc: 'Our programs are designed with and for the communities we serve, centering their knowledge, priorities, and voices.' },
              { title: 'Creativity Is Career-Ready', desc: 'Creative skills are professional skills. We bridge the gap between artistic expression and economic opportunity.' },
              { title: 'Access Is Non-Negotiable', desc: 'Every young person deserves access to high-quality creative learning, regardless of background or circumstance.' },
              { title: 'Visibility Matters', desc: 'Being seen, heard, and recognized is a critical step in professional and personal development.' },
              { title: 'Growth Is a Journey', desc: 'Our ecosystem of programs meets participants where they are and supports growth over time.' },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-purple flex items-center justify-center mb-4">
                    <FontAwesomeIcon icon="check" className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-secondary mb-2">{v.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-mint text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Join Our Mission</h2>
            <p className="text-lg text-white/90 mb-8">Be part of the movement to unlock equity and opportunity through the power of storytelling.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/programs" className="btn-gold">Explore Our Programs</Link>
              <Link href="/partner" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">Partner With Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
