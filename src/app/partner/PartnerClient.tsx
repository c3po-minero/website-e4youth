'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGraduationCap, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import EcosystemCircle from '@/components/EcosystemCircle'

const partnerStages = [
  {
    title: 'Invest in Engage',
    subtitle: 'Schools, community organizations, cultural institutions, neighborhood associations',
    icon: faHeart,
    color: '#4DB8FF',
    body: 'Engage partners help E4Youth reach young people and communities who haven\'t yet connected with the ecosystem. They host AR Heritage Tours, bring students to community showcases, share opportunities with their networks, and open doors to new neighborhoods and populations.',
    items: [
      'Host an AR Heritage Tour at your school or organization',
      'Co-promote community showcases and public events',
      'Refer young people to E4Youth experiences',
      'Provide space for community engagement programming',
    ],
  },
  {
    title: 'Invest in Educate',
    subtitle: 'Technology providers, curriculum partners, educational institutions, media organizations',
    icon: faGraduationCap,
    color: '#9B51E0',
    body: 'Educate partners strengthen the learning experiences that build real skills. They provide technology, curriculum expertise, professional mentorship, and access to industry-standard tools and platforms.',
    items: [
      'Provide technology, software, or equipment for learning experiences',
      'Co-develop curriculum with E4Youth facilitators',
      'Offer guest instruction or professional mentorship',
      'Host workshops or lab sessions at your facility',
    ],
  },
  {
    title: 'Invest in Empower',
    subtitle: 'Project sponsors, exhibition venues, creative agencies, community organizations',
    icon: faBolt,
    color: '#FCB900',
    body: 'Empower partners amplify the work young people create. They provide venues for showcases, sponsor creative projects, host portfolio reviews, and connect participants with real audiences and professional feedback.',
    items: [
      'Host or sponsor a portfolio showcase or creative exhibition',
      'Provide professional portfolio review and feedback',
      'Commission creative projects from E4Youth participants',
      'Offer presentation opportunities at industry events',
    ],
  },
  {
    title: 'Invest in Elevate',
    subtitle: 'Employers, workforce development organizations, funders, industry leaders',
    icon: faRocket,
    color: '#7BDCB5',
    body: 'Elevate partners create the paid pathways that make the ecosystem sustainable. They hire E4Youth participants, fund stipend-supported positions, create employer-funded roles, and invest in the long-term career trajectory of emerging creative technology professionals.',
    items: [
      'Create employer-funded positions for E4Youth talent',
      'Host paid pilot placements at your organization',
      'Fund stipend-supported cohort positions',
      'Join the E4 Level Up employer network',
      'Invest in the expansion of employer-funded pathways across Austin',
    ],
  },
]

export default function PartnerClient() {
  return (
    <>
      <HeroSection
        headline="Partner in Building the E4 Ecosystem"
        subheadline="Schools, workforce and industry partners, and funders all have a role in the E4 Ecosystem. Whether you're looking to connect with emerging talent, support community impact, or invest in youth workforce development — there's a partnership model built for you."
        primaryCTA={{ text: 'Become a Partner', href: '/contact' }}
        secondaryCTA={{ text: 'Contact Us', href: '/contact' }}
        gradient="from-primary-dark via-gold to-purple"
        backgroundImage="/images/e4youth/_a4a1947_1.webp"
        backgroundImageAlt="E4Youth partnership and collaboration"
      />

      {/* The Model */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">The Model</h2>
            <p className="text-body leading-relaxed mb-10">
              The E4 Ecosystem is a circular model — Story to Skill to Opportunity to Leadership — powered at every stage by partners who bring resources, expertise, access, and opportunity.
            </p>
          </AnimatedSection>
          <AnimatedSection className="flex justify-center" delay={0.2}>
            <EcosystemCircle />
          </AnimatedSection>
        </div>
      </section>

      {/* Partner stages */}
      <section className="section-padding bg-gray-50">
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
                  <p className="text-sm font-semibold text-secondary mb-2">How to partner at this stage:</p>
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-gold to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Partner?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-secondary font-bold rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Become a Partner
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
                Contact Us
              </Link>
            </div>
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
