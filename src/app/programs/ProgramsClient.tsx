'use client'

import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import ProgramCard from '@/components/ProgramCard'

const corePrograms = [
  { title: 'Digital Storytelling Program (DSP)', description: 'DSP introduces young people to storytelling, digital literacy, and creative expression through workshops, curriculum, tours, and community-based learning experiences. For school-aged youth and families.', href: '/programs/dsp', icon: 'video' as const, color: '#4DB8FF' },
  { title: 'Get Creative!', description: 'A career exploration and applied learning program that helps high school students connect storytelling and digital skills to creative and technology pathways.', href: '/programs/get-creative', icon: 'palette' as const, color: '#9B51E0' },
  { title: 'Heritage & Innovation Pathways (HIP)', description: 'HIP connects community history, storytelling, and emerging technology to applied learning, research, and professional pathways for college-aged participants.', href: '/programs/hip', icon: 'landmark' as const, color: '#FCB900' },
]

const platforms = [
  { title: 'What Once Was (WOW)', description: 'E4 Youth\'s public storytelling platform that elevates participant work into exhibitions, digital experiences, and public space.', href: '/programs/wow', icon: 'globe' as const, color: '#7BDCB5' },
  { title: 'WOW Heritage Center', description: 'E4 Youth\'s physical, place-based hub for storytelling, learning, and community connection.', href: '/programs/wow-heritage-center', icon: 'landmark' as const, color: '#0072CE' },
  { title: 'E4 Live', description: 'A dynamic series of in-person networking events that celebrate creativity, connection, and community.', href: '/programs/e4-live', icon: 'microphone' as const, color: '#9B51E0' },
  { title: 'E4 Level Up', description: 'An advanced workshop and professional development series for college-aged, early-career, and established creatives.', href: '/programs/e4-level-up', icon: 'rocket' as const, color: '#FCB900' },
]

export default function ProgramsClient() {
  return (
    <>
      <HeroSection
        headline="Programs & Experiences"
        subheadline="E4 Youth programs support young people at different ages and stages—from early exposure and creative confidence-building to professional readiness and public visibility."
        primaryCTA={{ text: 'Explore Programs', href: '#core-programs' }}
        secondaryCTA={{ text: 'Join an Experience', href: '/contact' }}
        gradient="from-purple via-primary-dark to-mint"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-lg text-body leading-relaxed">
              Rather than offering standalone classes, E4 Youth organizes its work as a connected ecosystem of programs, experiences, and platforms that allow participants to enter at multiple points and grow over time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Programs */}
      <section id="core-programs" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark font-semibold text-sm rounded-full mb-4">Core Programs</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Building Skills at Every Stage</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePrograms.map((p, i) => (
              <ProgramCard key={p.href} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences & Platforms */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-semibold text-sm rounded-full mb-4">Experiences & Platforms</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Public Engagement & Growth</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((p, i) => (
              <ProgramCard key={p.href} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Find Your Path</h2>
            <p className="text-lg text-white/90 mb-8">Whether you are just starting your creative journey or ready to level up, E4 Youth has a program for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Join an Experience</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
