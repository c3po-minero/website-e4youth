'use client'

import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import EcosystemCircle from '@/components/EcosystemCircle'
import StoryTile from '@/components/StoryTile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart, faGraduationCap, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'

export default function HomeClient() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="Building Futures Through Creative Technology"
        subheadline="E4Youth connects young people, mentors, and communities across Austin through a living ecosystem of creative technology experiences — from first spark to paid career."
        primaryCTA={{ text: 'Explore 4E Ecosystem', href: '/ecosystem' }}
        secondaryCTA={{ text: 'Join an Experience', href: '/experiences' }}
      >
        <div className="mt-4">
          <Link href="/partner" className="inline-flex items-center px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
            Partner With Us
          </Link>
        </div>
      </HeroSection>

      {/* 4E Ecosystem Circle */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">The 4E Ecosystem</h2>
            <h3 className="text-lg md:text-xl text-body mt-2">Engage → Educate → Empower → Elevate</h3>
            <p className="mt-4 max-w-3xl mx-auto text-body leading-relaxed">
              Every experience at E4Youth lives inside a single, circular ecosystem. Young people enter through community engagement — AR Heritage Tours, public showcases, live events — and move through stages of learning, creating, and leading. The model doesn&apos;t end at Elevate. Alumni return as mentors, leaders, and advocates, fueling the next generation&apos;s entry point. The circle continues.
            </p>
          </AnimatedSection>

          <AnimatedSection className="flex justify-center mb-10" delay={0.2}>
            <EcosystemCircle />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: 'Engage', color: '#4DB8FF', icon: faHeart, desc: 'Discover creative technology through community experiences' },
              { label: 'Educate', color: '#9B51E0', icon: faGraduationCap, desc: 'Build real skills through hands-on digital media training' },
              { label: 'Empower', color: '#FCB900', icon: faBolt, desc: 'Create original work, build portfolios, present to real audiences' },
              { label: 'Elevate', color: '#7BDCB5', icon: faRocket, desc: 'Step into stipend-supported cohorts, paid pilot placements, and employer-funded roles (expanding)' },
            ].map((e, i) => (
              <AnimatedSection key={e.label} delay={i * 0.1}>
                <div className="text-center p-4">
                  <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${e.color}15` }}>
                    <FontAwesomeIcon icon={e.icon} className="w-5 h-5" style={{ color: e.color }} />
                  </div>
                  <p className="font-display font-bold text-secondary text-sm">{e.label}</p>
                  <p className="text-xs text-body mt-1">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all">
              See How the Ecosystem Works <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Elevate Proof — Where This Leads */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Elevate Proof — Where This Leads</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StoryTile
              name="Marcus Reyes"
              pathway="AR Heritage Tours volunteer → DSP → Get Creative! → HIP researcher → paid content producer"
              quote="I showed up to an AR tour because my grandmother wanted to see her old neighborhood. Two years later, I'm producing stories for a living."
              color="#4DB8FF"
              delay={0}
            />
            <StoryTile
              name="Destiny Okafor"
              pathway="WOW attendee → DSP → Get Creative! → E4 Level Up → employer-funded UX designer"
              quote="E4Youth didn't hand me a job — they helped me build a career I didn't know existed."
              color="#9B51E0"
              delay={0.1}
            />
            <StoryTile
              name="Rosa Medina"
              pathway="Community volunteer → Educate workshops → HIP lead researcher → stipend-supported program coordinator"
              quote="I came back to mentor because someone did it for me. That's how the circle works."
              color="#7BDCB5"
              delay={0.2}
            />
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/stories" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all">
              Meet More Leaders <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Built Across Generations */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Built Across Generations</h2>
            <p className="text-lg text-body leading-relaxed">
              E4Youth is designed to be multi-generational from the ground up. Young people bring energy and vision. Community leaders bring lived experience and deep roots. Mentors bridge the gap between learning and doing. Industry partners open doors to real careers. And alumni return to strengthen every stage of the ecosystem. This isn&apos;t a youth program with adult supervision — it&apos;s a community model where every generation has a role, a voice, and a stake in what comes next.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'E4Youth',
            description: 'Youth workforce development through creative technology in Austin, TX',
            url: 'https://e4youth.org',
            address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX' },
            sameAs: [
              'https://www.facebook.com/e4youth',
              'https://twitter.com/e4youth',
              'https://www.instagram.com/e4youth',
            ],
          }),
        }}
      />
    </>
  )
}
