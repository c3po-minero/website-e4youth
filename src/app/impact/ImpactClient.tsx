'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMapMarkerAlt, faCalendarCheck, faUserPlus, faCity, faGraduationCap, faFlask, faLaptopCode, faFolderOpen, faClock, faPaintBrush, faBriefcase, faMicrophone, faUserTie, faFileAlt, faDollarSign, faBuilding, faHandshake, faUserShield, faEye, faChartLine } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import StoryTile from '@/components/StoryTile'

const metricSections: {
  tag: string
  title: string
  color: string
  image: string
  imageAlt: string
  image2: string
  image2Alt: string
  imagePosition: 'left' | 'right'
  metrics: { text: string; icon: IconDefinition }[]
  body: string
}[] = [
  {
    tag: 'Engage',
    title: 'Engage Metrics',
    color: '#4DB8FF',
    image: '/images/e4youth/_a4a2225.webp',
    imageAlt: 'Diverse community members participating in a public engagement event in Austin',
    image2: '/images/e4youth/_a4a2866.webp',
    image2Alt: 'Youth leading an interactive community tour experience',
    imagePosition: 'left',
    metrics: [
      { text: 'Community members reached through public experiences', icon: faUsers },
      { text: 'AR Heritage Tour participants served', icon: faMapMarkerAlt },
      { text: 'Community showcases and public events hosted', icon: faCalendarCheck },
      { text: 'New youth connected to the E4Youth ecosystem', icon: faUserPlus },
      { text: 'Neighborhoods and communities engaged across Austin', icon: faCity },
    ],
    body: 'Engage creates the front door — bringing young people and communities into the ecosystem for the first time.',
  },
  {
    tag: 'Educate',
    title: 'Educate Metrics',
    color: '#9B51E0',
    image: '/images/e4youth/e4y_creative_clubs-12.webp',
    imageAlt: 'Youth learning digital media skills in a creative technology workshop',
    image2: '/images/e4youth/e4y_creative_clubs-58_1.webp',
    image2Alt: 'Students collaborating on a digital storytelling project',
    imagePosition: 'right',
    metrics: [
      { text: 'Youth completing DSP cohorts', icon: faGraduationCap },
      { text: 'Workshop and lab sessions delivered', icon: faFlask },
      { text: 'Digital media skills developed (audio, video, photography, design, AR)', icon: faLaptopCode },
      { text: 'Portfolio projects initiated', icon: faFolderOpen },
      { text: 'Hours of hands-on creative technology training', icon: faClock },
    ],
    body: 'Educate builds capability — turning curiosity into real, marketable skills.',
  },
  {
    tag: 'Empower',
    title: 'Empower Metrics',
    color: '#FCB900',
    image: '/images/e4youth/_a4a5473_2.webp',
    imageAlt: 'Young creative professional presenting portfolio work at a showcase',
    image2: '/images/e4youth/e4y_creative_clubs-44_1.webp',
    image2Alt: 'Student working on a creative design project',
    imagePosition: 'left',
    metrics: [
      { text: 'Original creative projects produced', icon: faPaintBrush },
      { text: 'Professional portfolios completed', icon: faBriefcase },
      { text: 'Public presentations delivered to industry and community audiences', icon: faMicrophone },
      { text: 'Youth presenting work in professional settings', icon: faUserTie },
      { text: 'Employer-ready work samples created', icon: faFileAlt },
    ],
    body: 'Empower makes talent visible — producing real work for real audiences.',
  },
  {
    tag: 'Elevate',
    title: 'Elevate Metrics',
    color: '#7BDCB5',
    image: '/images/e4youth/_a4a1944.webp',
    imageAlt: 'Young professionals collaborating in leadership roles',
    image2: '/images/e4youth/_a4a1947_1.webp',
    image2Alt: 'Young professional in a creative technology leadership position',
    imagePosition: 'right',
    metrics: [
      { text: 'Stipend-supported pathways created', icon: faDollarSign },
      { text: 'Employer-funded roles placed (expanding)', icon: faBuilding },
      { text: 'Paid pilot placements completed', icon: faHandshake },
      { text: 'Alumni returning as mentors and facilitators', icon: faUserShield },
      { text: 'Youth in visible leadership positions across the ecosystem', icon: faEye },
      { text: 'Career advancement outcomes tracked over time', icon: faChartLine },
    ],
    body: 'Elevate delivers on the promise — paid pathways, visible leadership, and return-to-ecosystem mentorship.',
  },
]

export default function ImpactClient() {
  return (
    <>
      <HeroSection
        headline="Impact Across the E4 Ecosystem"
        subheadline="Every stage of the E4 Ecosystem produces measurable outcomes — for young people, for communities, and for Austin's creative economy. Here's what the numbers look like."
        primaryCTA={{ text: 'View Impact Highlights', href: '#metrics' }}
        secondaryCTA={{ text: 'Partner on Evaluation', href: '/partner' }}
        gradient="from-gold via-purple to-primary-dark"
        backgroundImage="/images/e4youth/_a4a5235-edit.webp"
        backgroundImageAlt="E4Youth impact and community outcomes"
      />

      {/* Metrics by Stage */}
      <div id="metrics">
        <AnimatedSection className="text-center section-padding bg-white !pb-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Our Impact — Measured Across Four Stages</h2>
        </AnimatedSection>

        {metricSections.map((section, i) => {
          const imageBlock = (
            <div className="relative" style={{ minHeight: 380 }}>
              {/* Primary image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg w-[85%] aspect-[4/3]">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Secondary image — overlapping */}
              <div className="absolute bottom-0 right-0 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src={section.image2}
                  alt={section.image2Alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              {/* Accent dots */}
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full opacity-40 hidden lg:block" style={{ backgroundColor: section.color }} />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full opacity-25 hidden lg:block" style={{ backgroundColor: section.color }} />
            </div>
          )

          const contentBlock = (
            <div>
              {/* Stage badge */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: section.color }} />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: section.color }}>{section.tag}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-2">{section.title}</h3>
              <div className="w-12 h-1 rounded-full mb-6" style={{ backgroundColor: section.color }} />

              <div className="space-y-4 mb-6">
                {section.metrics.map((metric) => (
                  <div key={metric.text} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: `${section.color}15` }}>
                      <FontAwesomeIcon icon={metric.icon} className="w-4 h-4" style={{ color: section.color }} />
                    </div>
                    <p className="text-body leading-relaxed pt-2">{metric.text}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm italic text-body border-l-4 pl-4 py-1" style={{ borderColor: section.color }}>{section.body}</p>
            </div>
          )

          return (
            <section key={section.tag} className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="max-w-7xl mx-auto">
                <AnimatedSection>
                  {/* Desktop: two-column with alternating image position */}
                  <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
                    {section.imagePosition === 'left' ? (
                      <>{imageBlock}{contentBlock}</>
                    ) : (
                      <>{contentBlock}{imageBlock}</>
                    )}
                  </div>

                  {/* Mobile: Title → Image → Metrics */}
                  <div className="lg:hidden">
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: section.color }} />
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: section.color }}>{section.tag}</span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-secondary">{section.title}</h3>
                    </div>
                    <div className="mb-8">{imageBlock}</div>
                    <div className="space-y-4 mb-6">
                      {section.metrics.map((metric) => (
                        <div key={metric.text} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5" style={{ backgroundColor: `${section.color}15` }}>
                            <FontAwesomeIcon icon={metric.icon} className="w-4 h-4" style={{ color: section.color }} />
                          </div>
                          <p className="text-body leading-relaxed pt-2">{metric.text}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm italic text-body border-l-4 pl-4 py-1" style={{ borderColor: section.color }}>{section.body}</p>
                  </div>
                </AnimatedSection>
              </div>
            </section>
          )
        })}
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
