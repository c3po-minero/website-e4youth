'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const publicExperiences = [
  {
    title: 'AR Heritage Tours',
    description: 'Youth-created augmented reality walking tours that bring Austin\'s cultural history to life. Experience community stories through immersive AR technology — designed and led by young people.',
    href: '/experiences/ar-heritage-tours',
    color: '#4DB8FF',
  },
  {
    title: 'Community Showcases',
    description: 'Public exhibitions where E4Youth participants present original creative work to their communities. A celebration of what young people build when given real tools and real support.',
    href: '/experiences',
    color: '#4DB8FF',
  },
  {
    title: 'WOW Exhibitions & Public Storytelling',
    description: 'Workforce-focused exhibitions and public storytelling events that connect audiences to the creative technology work happening inside the E4Youth ecosystem.',
    href: '/experiences/wow',
    color: '#4DB8FF',
  },
]

const learningExperiences = [
  {
    title: 'Digital Storytelling Program (DSP)',
    description: 'The foundational youth media training experience. Learn to research, produce, and share digital stories rooted in community — building skills in audio, video, photography, and narrative design.',
    href: '/experiences/digital-storytelling',
    color: '#9B51E0',
  },
  {
    title: 'Workshops & Labs',
    description: 'Focused sessions in creative technology: graphic design, audio production, photography, video editing, AR development, and more. Hands-on, skill-specific, and project-based.',
    href: '/experiences',
    color: '#9B51E0',
  },
]

const professionalExperiences = [
  {
    title: 'Get Creative!',
    description: 'Hands-on creative technology education where participants develop original projects across design, media, and digital arts. Work produced here becomes your professional portfolio.',
    href: '/experiences/get-creative',
    color: '#FCB900',
  },
  {
    title: 'Heritage Innovation Program (HIP)',
    description: 'Youth-driven heritage research and creative production preserving community stories through technology. Lead original projects with real community impact.',
    href: '/experiences/hip',
    color: '#FCB900',
  },
  {
    title: 'E4 Level Up',
    description: 'Career advancement connecting experienced participants to employer-funded professional opportunities and leadership roles across Austin\'s creative technology sector.',
    href: '/experiences/e4-level-up',
    color: '#7BDCB5',
  },
]

function ExperienceCard({ title, description, href, color }: { title: string; description: string; href: string; color: string }) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden hover:shadow-md transition-shadow" style={{ borderTopColor: color, borderTopWidth: '3px' }}>
        <h3 className="text-lg font-display font-bold text-secondary mb-3 group-hover:text-primary-dark transition-colors">{title}</h3>
        <p className="text-sm text-body leading-relaxed mb-4">{description}</p>
        <span className="inline-flex items-center text-sm font-semibold text-primary-dark group-hover:gap-3 gap-2 transition-all">
          Learn More <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}

export default function ExperiencesClient() {
  return (
    <>
      <HeroSection
        headline="Youth Experiences in Creative Technology"
        subheadline="E4Youth offers a range of creative technology experiences across every stage of the 4E Ecosystem. Whether you're exploring for the first time, building skills, producing professional work, or stepping into a paid career — there's an experience for where you are right now."
        primaryCTA={{ text: 'Explore the 4E Ecosystem', href: '/ecosystem' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
        gradient="from-primary-dark via-purple to-gold"
        backgroundImage="/images/e4youth/e4y_creative_clubs-64_1.webp"
        backgroundImageAlt="E4Youth youth experiences in creative technology"
      />

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-sm text-body text-center">All professional experiences are <strong>stipend-supported + employer-funded (expanding)</strong>.</p>
        </div>
      </div>

      {/* Public Experiences */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Public Experiences</h2>
            <p className="mt-2 text-body">Open to everyone. No application required. Show up, experience something powerful, and see where it leads.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicExperiences.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <ExperienceCard {...exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experiences */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Learning Experiences</h2>
            <p className="mt-2 text-body">Structured skill-building in digital media, creative technology, and community storytelling.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningExperiences.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <ExperienceCard {...exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Experiences */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Professional Experiences</h2>
            <p className="mt-2 text-body">Create real work, build professional portfolios, and step into paid career pathways. Stipend-supported + employer-funded (expanding).</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {professionalExperiences.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <ExperienceCard {...exp} />
              </AnimatedSection>
            ))}
          </div>
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
              { '@type': 'ListItem', position: 1, url: '/experiences/ar-heritage-tours' },
              { '@type': 'ListItem', position: 2, url: '/experiences/digital-storytelling' },
              { '@type': 'ListItem', position: 3, url: '/experiences/get-creative' },
              { '@type': 'ListItem', position: 4, url: '/experiences/hip' },
              { '@type': 'ListItem', position: 5, url: '/experiences/wow' },
              { '@type': 'ListItem', position: 6, url: '/experiences/wow-heritage-center' },
              { '@type': 'ListItem', position: 7, url: '/experiences/e4-live' },
              { '@type': 'ListItem', position: 8, url: '/experiences/e4-level-up' },
            ],
          }),
        }}
      />
    </>
  )
}
