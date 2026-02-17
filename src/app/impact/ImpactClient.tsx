'use client'

import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import StoryTile from '@/components/StoryTile'

const metricSections = [
  {
    tag: 'Engage',
    title: 'Engage Metrics',
    color: '#4DB8FF',
    metrics: [
      'Community members reached through public experiences',
      'AR Heritage Tour participants served',
      'Community showcases and public events hosted',
      'New youth connected to the E4Youth ecosystem',
      'Neighborhoods and communities engaged across Austin',
    ],
    body: 'Engage creates the front door — bringing young people and communities into the ecosystem for the first time.',
  },
  {
    tag: 'Educate',
    title: 'Educate Metrics',
    color: '#9B51E0',
    metrics: [
      'Youth completing DSP cohorts',
      'Workshop and lab sessions delivered',
      'Digital media skills developed (audio, video, photography, design, AR)',
      'Portfolio projects initiated',
      'Hours of hands-on creative technology training',
    ],
    body: 'Educate builds capability — turning curiosity into real, marketable skills.',
  },
  {
    tag: 'Empower',
    title: 'Empower Metrics',
    color: '#FCB900',
    metrics: [
      'Original creative projects produced',
      'Professional portfolios completed',
      'Public presentations delivered to industry and community audiences',
      'Youth presenting work in professional settings',
      'Employer-ready work samples created',
    ],
    body: 'Empower makes talent visible — producing real work for real audiences.',
  },
  {
    tag: 'Elevate',
    title: 'Elevate Metrics',
    color: '#7BDCB5',
    metrics: [
      'Stipend-supported pathways created',
      'Employer-funded roles placed (expanding)',
      'Paid pilot placements completed',
      'Alumni returning as mentors and facilitators',
      'Youth in visible leadership positions across the ecosystem',
      'Career advancement outcomes tracked over time',
    ],
    body: 'Elevate delivers on the promise — paid pathways, visible leadership, and return-to-ecosystem mentorship.',
  },
]

export default function ImpactClient() {
  return (
    <>
      <HeroSection
        headline="Impact Across the 4E Ecosystem"
        subheadline="Every stage of the 4E Ecosystem produces measurable outcomes — for young people, for communities, and for Austin's creative economy. Here's what the numbers look like."
        primaryCTA={{ text: 'View Impact Highlights', href: '#metrics' }}
        secondaryCTA={{ text: 'Partner on Evaluation', href: '/partner' }}
        gradient="from-gold via-purple to-primary-dark"
      />

      {/* Metrics by Stage */}
      <div id="metrics">
        <AnimatedSection className="text-center section-padding bg-white !pb-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Our Impact — Measured Across Four Stages</h2>
        </AnimatedSection>

        {metricSections.map((section, i) => (
          <section key={section.tag} className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: section.color }} />
                  <h3 className="text-2xl font-display font-bold text-secondary">{section.title}</h3>
                </div>
                <ul className="space-y-2 mb-6">
                  {section.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-3 text-body">
                      <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: section.color }} />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm italic text-body">{section.body}</p>
              </AnimatedSection>
            </div>
          </section>
        ))}
      </div>

      {/* Elevate Proof */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Elevate Proof</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StoryTile
              name="Destiny Okafor"
              pathway="WOW attendee → DSP → Get Creative! → E4 Level Up → employer-funded UX designer"
              quote="E4Youth didn't hand me a job — they helped me build a career I didn't know existed."
              color="#9B51E0"
              delay={0}
            />
            <StoryTile
              name="Darnell Washington"
              pathway="Community mentor → Engage volunteer → HIP community advisor → stipend-supported Elevate mentor → returning ecosystem leader"
              quote="I'm 42. I came in as a mentor and ended up growing just as much as the young people I work with."
              color="#FCB900"
              delay={0.1}
            />
            <StoryTile
              name="James &quot;JT&quot; Thompson"
              pathway="DSP → Get Creative! → E4 Live production lead → E4 Level Up → employer-funded audio engineer"
              quote="I walked into DSP not knowing what a DAW was. Now I'm engineering sessions for artists I grew up listening to."
              color="#7BDCB5"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Invest in Measurable Impact</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner" className="btn-gold">Partner on Evaluation</Link>
              <Link href="/stories" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">View Impact Highlights</Link>
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
            name: 'E4Youth Impact',
            mainEntity: {
              '@type': 'Report',
              name: 'E4Youth Impact Metrics',
              about: 'Youth workforce development outcomes',
            },
          }),
        }}
      />
    </>
  )
}
