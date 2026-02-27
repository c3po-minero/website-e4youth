'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGraduationCap, faBolt, faRocket, faBookOpen, faPeopleGroup, faPalette, faGlobe, faEye, faSeedling, faUsers, faBriefcase, faDoorOpen, faChartLine, faHandshake } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

export default function AboutClient() {
  return (
    <>
      <HeroSection
        headline="About E4 Youth"
        subheadline="E4 Youth is a community-rooted organization using storytelling to unlock equity and opportunity across generations."
        primaryCTA={{ text: 'Explore Our Experiences', href: '/experiences' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
        gradient="from-primary via-purple to-gold"
        backgroundImage="/images/e4youth/_a4a3253_1.webp"
        backgroundImageAlt="E4Youth about our mission"
      />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark font-semibold text-sm rounded-full mb-4">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Who We Are</h2>
            <p className="text-body leading-relaxed mb-4">
              E4 Youth is a community-rooted organization using storytelling as infrastructure to connect generations and expand opportunity. Founded in Austin, Texas, we work at the intersection of culture, creativity, and workforce development to build pathways that are accessible, meaningful, and sustainable.
            </p>
            <p className="text-body leading-relaxed mb-4">
              We believe that every young person has a story worth telling, and that the act of telling it builds skills that matter: communication, technical fluency, leadership, and professional identity. Our programs serve hundreds of young people annually through immersive creative experiences, workforce-connected learning, and public storytelling platforms that create real visibility and real careers.
            </p>
            <p className="text-body leading-relaxed">
              E4 Youth is not a traditional nonprofit. We are a living ecosystem where participants, mentors, community members, and industry partners all contribute to a circular model of growth and return.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 font-semibold text-sm rounded-full mb-4">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Our Approach</h2>
            <p className="text-body leading-relaxed mb-4">
              We use the E4&apos;s to build the E4 Ecosystem &mdash; a circular model of progression and return. The four stages &mdash; Engage, Educate, Empower, and Elevate &mdash; guide everything we do, ensuring that participants move from initial engagement to visible, meaningful roles in their communities and careers.
            </p>
            <p className="text-body leading-relaxed mb-4">
              Rather than offering standalone programs, we organize our work as a connected ecosystem. Participants enter at multiple points and grow over time. As individuals elevate into paid and visible leadership roles, they reinforce the next cycle of engagement &mdash; returning as mentors, facilitators, and community leaders who power the system forward.
            </p>
            <p className="text-body leading-relaxed">
              This circular design means the ecosystem strengthens with every generation that moves through it. The model is intentionally open-access: there are no gatekeepers, no prerequisites for entry, and no ceiling on how far a participant can go.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="space-y-6">
              {[
                { label: 'Engage', desc: 'Meeting young people where they are through culturally relevant, community-informed programming.', color: '#4DB8FF', icon: faHeart },
                { label: 'Educate', desc: 'Building digital literacy, creative confidence, and professional communication skills.', color: '#9B51E0', icon: faGraduationCap },
                { label: 'Empower', desc: 'Creating pathways for participants to own their narratives and build public-facing work.', color: '#FCB900', icon: faBolt },
                { label: 'Elevate', desc: 'Connecting emerging creatives to workforce opportunities, visibility, and leadership.', color: '#7BDCB5', icon: faRocket },
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
      </section>

      {/* Differentiators */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold">What Makes Us Different</h2>
            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">The E4 Ecosystem is built on principles that set it apart from traditional youth development models.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Intergenerational',
                desc: 'Our ecosystem is not youth-only. It connects young people with elders, community leaders, mentors, and industry professionals across generations. Knowledge flows in every direction, and the model is designed so that alumni return as facilitators, creating a self-sustaining cycle of mentorship and growth that bridges age gaps and strengthens community bonds.',
                icon: faUsers,
                color: '#4DB8FF',
              },
              {
                title: 'Workforce-Aligned',
                desc: 'Every experience in the E4 Ecosystem connects to real workforce outcomes. We do not treat creativity and employment as separate tracks. From the earliest Engage experiences through Elevate career placements, participants build skills that employers recognize, portfolios that demonstrate capability, and professional networks that open doors to meaningful careers in creative technology.',
                icon: faBriefcase,
                color: '#9B51E0',
              },
              {
                title: 'Open-Access, Advanced Pathways',
                desc: 'There are no gatekeepers and no prerequisites for entry into the E4 Ecosystem. Participants can begin at any stage and progress as far as their dedication takes them. At the same time, our advanced pathways — stipend-supported cohorts, paid placements, and employer-funded roles — provide real economic opportunity for those who are ready to lead.',
                icon: faDoorOpen,
                color: '#FCB900',
              },
              {
                title: 'Measurable Progression',
                desc: 'Every stage of the ecosystem produces measurable outcomes — from community engagement metrics at the Engage level to employment rates and earnings data at the Elevate level. We track participant progression across stages, portfolio development, skill acquisition, and workforce placement to ensure the model delivers on its promise and continuously improves.',
                icon: faChartLine,
                color: '#7BDCB5',
              },
              {
                title: 'Partnership-Driven',
                desc: 'The E4 Ecosystem does not operate in isolation. It is powered by a network of schools, community organizations, technology providers, creative agencies, and employers who each contribute at different stages. Partners are not just funders — they are active participants in the ecosystem, providing mentorship, resources, venues, employment, and strategic direction.',
                icon: faHandshake,
                color: '#0072CE',
              },
            ].map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.08}>
                <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 h-full" style={{ borderTopColor: d.color, borderTopWidth: '3px' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${d.color}20` }}>
                    <FontAwesomeIcon icon={d.icon} className="w-5 h-5" style={{ color: d.color }} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{d.desc}</p>
                </div>
              </AnimatedSection>
            ))}
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
              { title: 'Stories Are Infrastructure', desc: 'Storytelling is not just enrichment — it is a workforce and civic tool that builds skills, visibility, and opportunity.', icon: faBookOpen, color: '#4DB8FF' },
              { title: 'Community Comes First', desc: 'Our programs are designed with and for the communities we serve, centering their knowledge, priorities, and voices.', icon: faPeopleGroup, color: '#9B51E0' },
              { title: 'Creativity Is Career-Ready', desc: 'Creative skills are professional skills. We bridge the gap between artistic expression and economic opportunity.', icon: faPalette, color: '#FCB900' },
              { title: 'Access Is Non-Negotiable', desc: 'Every young person deserves access to high-quality creative learning, regardless of background or circumstance.', icon: faGlobe, color: '#7BDCB5' },
              { title: 'Visibility Matters', desc: 'Being seen, heard, and recognized is a critical step in professional and personal development.', icon: faEye, color: '#0072CE' },
              { title: 'Growth Is a Journey', desc: 'Our ecosystem of programs meets participants where they are and supports growth over time.', icon: faSeedling, color: '#9B51E0' },
            ].map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full" style={{ borderTopColor: v.color, borderTopWidth: '3px' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${v.color}15` }}>
                    <FontAwesomeIcon icon={v.icon} className="w-5 h-5" style={{ color: v.color }} />
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
              <Link href="/experiences" className="btn-gold">Explore Our Experiences</Link>
              <Link href="/partner" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">Partner With Us</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
