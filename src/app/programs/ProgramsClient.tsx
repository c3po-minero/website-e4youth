'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVrCardboard, faMicrophone, faPeopleGroup, faBookOpen, faLightbulb, faCompass, faLandmark, faSchool, faRocket } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import ProgramCard from '@/components/ProgramCard'

const publicExperiences = [
  { title: 'AR Heritage Tours', description: 'Youth-created augmented reality tours bringing Austin\'s cultural history to life in public spaces. Walk through neighborhoods and experience community storytelling through immersive AR technology — designed and facilitated by E4Youth participants.', href: '/programs/dsp', icon: faVrCardboard, color: '#9B51E0', stage: 'Engage' },
  { title: 'E4 Live', description: 'Dynamic in-person networking events celebrating creativity, connection, and community. Emerging creatives present work alongside mentors, professionals, and community members.', href: '/programs/e4-live', icon: faMicrophone, color: '#9B51E0', stage: 'Engage' },
  { title: 'Community Showcases', description: 'Public exhibitions and events where E4Youth participants present portfolios, research, and creative projects to community audiences.', href: '/programs/wow', icon: faPeopleGroup, color: '#FCB900', stage: 'Engage · Empower' },
]

const learningExperiences = [
  { title: 'Digital Storytelling Program (DSP)', description: 'Introduces young people to storytelling, digital literacy, and creative expression through workshops, curriculum, and community-based learning. For school-aged youth and families.', href: '/programs/dsp', icon: faBookOpen, color: '#4DB8FF', stage: 'Educate', compensation: 'Stipend-supported' },
  { title: 'Get Creative', description: 'Career exploration and applied learning helping high school students connect storytelling and digital skills to creative and technology career pathways.', href: '/programs/get-creative', icon: faLightbulb, color: '#9B51E0', stage: 'Educate', compensation: 'Stipend-supported' },
  { title: 'Heritage Innovation Pathways (HIP)', description: 'Connects community history, storytelling, and emerging technology to applied learning, research, and professional pathways for college-aged participants.', href: '/programs/hip', icon: faCompass, color: '#FCB900', stage: 'Educate · Empower', compensation: 'Stipend-supported' },
]

const professionalExperiences = [
  { title: 'What Once Was (WOW)', description: 'E4Youth\'s public storytelling platform elevating participant work into exhibitions, digital experiences, and public space. Participants take on production, curation, and facilitation roles.', href: '/programs/wow', icon: faLandmark, color: '#7BDCB5', stage: 'Empower', compensation: 'Stipend-supported + employer-funded (expanding)' },
  { title: 'WOW Heritage Center', description: 'E4Youth\'s physical, place-based hub for storytelling, learning, and community connection. Participants work in operations, programming, and visitor engagement.', href: '/programs/wow-heritage-center', icon: faSchool, color: '#0072CE', stage: 'Empower', compensation: 'Stipend-supported + employer-funded (expanding)' },
  { title: 'E4 Level Up', description: 'Advanced professional development for college-aged, early-career, and established creatives. Leadership training, portfolio refinement, and employer connections.', href: '/programs/e4-level-up', icon: faRocket, color: '#FCB900', stage: 'Elevate', compensation: 'Stipend-supported + employer-funded (expanding)' },
]

function StageBadge({ stage, color }: { stage: string; color: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: `${color}15`, color }}>
      {stage}
    </span>
  )
}

export default function ProgramsClient() {
  return (
    <>
      <HeroSection
        headline="Youth Experiences in Creative Technology"
        subheadline="E4Youth experiences support young people at different ages and stages — from early exposure and creative confidence-building to professional readiness and public visibility. All experiences are part of the E4 Ecosystem."
        primaryCTA={{ text: 'Explore Experiences', href: '#public-experiences' }}
        secondaryCTA={{ text: 'Join an Experience', href: '/contact' }}
        gradient="from-purple via-primary-dark to-mint"
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-lg text-body leading-relaxed">
              Rather than offering standalone classes, E4Youth organizes its work as a connected ecosystem of experiences that allow participants to enter at multiple points and grow over time. Every experience maps to a stage of the <Link href="/e4-ecosystem" className="text-primary-dark font-semibold hover:underline">E4 Ecosystem</Link> — Engage, Educate, Empower, or Elevate — and many span multiple stages as participants progress.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              All learning and professional experiences are stipend-supported + employer-funded (expanding).
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Public Experiences */}
      <section id="public-experiences" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark font-semibold text-sm rounded-full mb-4">Public Experiences</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Public Experiences</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Open to everyone. No application required. These are community-facing experiences designed to spark curiosity, share stories, and connect people to E4Youth&apos;s work.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicExperiences.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: p.color, borderTopWidth: '3px' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${p.color}15` }}>
                      <FontAwesomeIcon icon={p.icon} className="w-5 h-5" style={{ color: p.color }} />
                    </div>
                    <StageBadge stage={p.stage} color={p.color} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-secondary mb-2">{p.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experiences */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple/10 text-purple font-semibold text-sm rounded-full mb-4">Learning Experiences</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Learning Experiences</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Structured, stipend-supported programs that build skills, confidence, and portfolio-ready work. Designed for different ages and experience levels.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningExperiences.map((p, i) => (
              <ProgramCard key={p.href + p.title} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experiences */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-semibold text-sm rounded-full mb-4">Professional Experiences</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Professional Experiences</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Real work, real pay, real impact. Professional experiences connect participants to employer-funded positions, leadership roles, and career pathways through E4Youth&apos;s partner network.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalExperiences.map((p, i) => (
              <ProgramCard key={p.href + p.title} {...p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Compensation Note */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-4">Stipend-Supported + Employer-Funded (Expanding)</h2>
            <p className="text-body leading-relaxed">
              E4Youth believes that learning is work and work deserves compensation. All structured learning and professional experiences are stipend-supported, and we&apos;re expanding employer-funded positions as our partner network grows. No young person should have to choose between building skills and earning a living.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Find Your Path</h2>
            <p className="text-lg text-white/90 mb-8">Whether you are just starting your creative journey or ready to level up, E4Youth has an experience for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Join an Experience</Link>
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
            '@type': 'ItemList',
            name: 'E4Youth Experiences',
            itemListElement: [
              { '@type': 'ListItem', position: 1, url: 'https://e4youth.org/programs/dsp' },
              { '@type': 'ListItem', position: 2, url: 'https://e4youth.org/programs/get-creative' },
              { '@type': 'ListItem', position: 3, url: 'https://e4youth.org/programs/hip' },
              { '@type': 'ListItem', position: 4, url: 'https://e4youth.org/programs/wow' },
              { '@type': 'ListItem', position: 5, url: 'https://e4youth.org/programs/wow-heritage-center' },
              { '@type': 'ListItem', position: 6, url: 'https://e4youth.org/programs/e4-live' },
              { '@type': 'ListItem', position: 7, url: 'https://e4youth.org/programs/e4-level-up' },
            ],
          }),
        }}
      />
    </>
  )
}
