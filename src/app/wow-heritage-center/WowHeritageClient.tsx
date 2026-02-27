'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGraduationCap, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const activations: {
  label: string
  title: string
  color: string
  icon: IconDefinition
  body: string
}[] = [
  {
    label: 'Engage',
    title: 'Engage in Place',
    color: '#4DB8FF',
    icon: faHeart,
    body: 'Public heritage exhibitions, AR Heritage Tour launch points, community events, and open-access creative technology demonstrations bring people into the ecosystem through the Center\'s doors.',
  },
  {
    label: 'Educate',
    title: 'Educate in Place',
    color: '#9B51E0',
    icon: faGraduationCap,
    body: 'DSP cohorts, workshops, and creative technology labs run on-site, giving participants access to professional equipment, studio space, and dedicated learning environments.',
  },
  {
    label: 'Empower',
    title: 'Empower in Place',
    color: '#FCB900',
    icon: faBolt,
    body: 'Portfolio showcases, public presentations, and creative exhibitions happen at the Center, giving participants a professional venue to present work to community and industry audiences.',
  },
  {
    label: 'Elevate',
    title: 'Elevate in Place',
    color: '#7BDCB5',
    icon: faRocket,
    body: 'Stipend-supported and employer-funded positions at the Heritage Center itself provide real professional experience in heritage programming, creative production, event management, and community engagement.',
  },
]

export default function WowHeritageClient() {
  return (
    <>
      <HeroSection
        headline="The physical hub of the E4 Ecosystem."
        subheadline="Where heritage, creative technology, and workforce development come together under one roof."
        primaryCTA={{ text: 'Visit the Center', href: '/contact' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
        backgroundImage="/images/e4youth/_a4a2559.webp"
        backgroundImageAlt="WOW Heritage Center — the physical hub of the E4 Ecosystem"
        gradient="from-primary via-primary-dark to-mint"
      />

      {/* E4 Activation Sections */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Every Stage of the Ecosystem, Under One Roof</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activations.map((a, i) => (
              <AnimatedSection key={a.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: a.color, borderTopWidth: '3px' }}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${a.color}15` }}>
                      <FontAwesomeIcon icon={a.icon} className="w-6 h-6" style={{ color: a.color }} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: a.color }}>{a.label}</span>
                      <h3 className="text-xl font-display font-bold text-secondary">{a.title}</h3>
                    </div>
                  </div>
                  <p className="text-body leading-relaxed">{a.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image sections */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/e4youth/_a4a2629.webp"
                  alt="XR experience at the WOW Heritage Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/e4youth/_a4a2527.webp"
                  alt="Community dialogue at the WOW Heritage Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Not a venue — infrastructure for long-term opportunity.</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">
              The WOW Heritage Center is where the E4 Ecosystem becomes tangible. It is the space where community members, young creatives, and industry partners converge — building skills, presenting work, and launching careers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Visit the Center</Link>
              <Link href="/partner" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
                Partner With the Heritage Center
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
            '@type': 'Place',
            name: 'WOW Heritage Center',
            description: 'The physical hub of the E4 Ecosystem — heritage, creative technology, and workforce development under one roof.',
            address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX' },
          }),
        }}
      />
    </>
  )
}
