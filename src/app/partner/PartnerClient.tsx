'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGraduationCap, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const partnerStages = [
  {
    title: 'Engage Partners',
    subtitle: 'Community organizations, schools, neighborhood groups, cultural venues',
    icon: faHeart,
    color: '#4DB8FF',
    body: 'Engage Partners help us reach young people and families. You host events, connect us to communities, and create the first touchpoints that bring people into the ecosystem. If you run a school, community center, church, or cultural organization in Austin — you\'re an Engage Partner.',
    items: [
      'Hosting AR Heritage Tours or E4 Live events at your venue',
      'Co-promoting community showcases and public programs',
      'Connecting youth and families to E4Youth experiences',
      'Participating in community advisory and co-design sessions',
    ],
  },
  {
    title: 'Educate Partners',
    subtitle: 'Technology providers, curriculum collaborators, educational institutions',
    icon: faGraduationCap,
    color: '#9B51E0',
    body: 'Educate Partners invest in skill-building. You provide tools, platforms, expertise, and curriculum support that help E4Youth participants develop real, marketable skills. If you\'re a tech company, school district, university, or education nonprofit — you\'re an Educate Partner.',
    items: [
      'Providing software, hardware, or platform access for learning experiences',
      'Co-developing curriculum tied to industry-relevant skills',
      'Guest instruction, workshops, or mentorship sessions',
      'Supporting evaluation and assessment of learning outcomes',
    ],
  },
  {
    title: 'Empower Partners',
    subtitle: 'Project sponsors, venue partners, media and exhibition partners',
    icon: faBolt,
    color: '#FCB900',
    body: 'Empower Partners create platforms for participant work to be seen. You sponsor exhibitions, host installations, publish youth work, and create opportunities for participants to build public-facing portfolios. If you operate a gallery, media outlet, event space, or public venue — you\'re an Empower Partner.',
    items: [
      'Sponsoring or hosting public exhibitions and showcases',
      'Publishing or featuring participant work in your channels',
      'Providing venue space for community installations',
      'Co-producing public programs and events',
    ],
  },
  {
    title: 'Elevate Partners',
    subtitle: 'Employers, funders, foundations, workforce development organizations',
    icon: faRocket,
    color: '#7BDCB5',
    body: 'Elevate Partners close the loop. You hire emerging talent, fund professional development, and invest in the long-term sustainability of the ecosystem. When you hire from E4Youth, you\'re not just filling a role — you\'re validating the entire pipeline. If you\'re an employer, foundation, or workforce organization — you\'re an Elevate Partner.',
    items: [
      'Hiring E4Youth alumni and participants for paid positions',
      'Funding stipends, professional development, and program expansion',
      'Sponsoring E4 Level Up cohorts and advanced experiences',
      'Investing in evaluation, research, and ecosystem growth',
    ],
  },
]

const partnershipModels = [
  'Program Sponsorship — Fund a specific experience, cohort, or initiative',
  'In-Kind Support — Provide tools, space, expertise, or professional development',
  'Employer Partnership — Hire from the E4Youth ecosystem and invest in workforce pipelines',
  'Multi-Year Investment — Support organizational growth, evaluation, and long-term sustainability',
  'Co-Design Collaboration — Build new programs or experiences together',
]

export default function PartnerClient() {
  return (
    <>
      <HeroSection
        headline="Partner With E4Youth"
        subheadline="E4Youth partners with schools, employers, funders, and community organizations to expand access to creative learning and opportunity. Every partnership maps to our 4E Ecosystem — so your investment connects directly to outcomes."
        primaryCTA={{ text: 'Explore Partnership Options', href: '#4e-partners' }}
        secondaryCTA={{ text: 'Start a Conversation', href: '/contact' }}
        gradient="from-primary-dark via-gold to-purple"
      />

      {/* 4E Circle intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-4 py-1.5 bg-purple/10 text-purple font-semibold text-sm rounded-full mb-4">The 4E Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">The 4E Circle — Where Partners Fit</h2>
            <p className="text-body leading-relaxed">
              Every E4Youth partner plays a role in the ecosystem. Whether you&apos;re bringing young people in the door, supporting skill-building, sponsoring real-world projects, or hiring emerging talent — your contribution maps to a specific stage and creates measurable impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Partner stages */}
      <section id="4e-partners" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerStages.map((stage, i) => (
              <AnimatedSection key={stage.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: stage.color, borderTopWidth: '3px' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${stage.color}15` }}>
                      <FontAwesomeIcon icon={stage.icon} className="w-6 h-6" style={{ color: stage.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-secondary">{stage.title}</h3>
                      <p className="text-xs text-body">{stage.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-body leading-relaxed mb-4">{stage.body}</p>
                  <p className="text-sm font-semibold text-secondary mb-2">What this looks like:</p>
                  <ul className="space-y-1">
                    {stage.items.map((item) => (
                      <li key={item} className="text-sm text-body leading-relaxed">• {item}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">Partnership Models</h2>
            <p className="text-body leading-relaxed">
              There are many ways to partner with E4Youth. We work with organizations of all sizes and design partnerships that align with your mission and capacity.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <ul className="space-y-3">
              {partnershipModels.map((model) => (
                <li key={model} className="flex items-start gap-3 text-body">
                  <span className="text-primary-dark mt-1">•</span>
                  <span>{model}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Partner With E4Youth',
            potentialAction: {
              '@type': 'JoinAction',
              target: 'https://e4youth.org/partner',
            },
          }),
        }}
      />
    </>
  )
}
