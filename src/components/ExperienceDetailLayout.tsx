'use client'

import Link from 'next/link'
import HeroSection from './HeroSection'
import AnimatedSection from './AnimatedSection'
import StoryTile from './StoryTile'

interface ExperienceDetailProps {
  title: string
  subtitle: string
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  gradient?: string
  accentColor: string
  whoFor: string
  whatHappens: string[]
  skills: string[]
  story: {
    name: string
    pathway: string
    fullStory?: string
    quote: string
  }
  howToEngage: { title: string; description: string }[]
}

export default function ExperienceDetailLayout({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  gradient = 'from-primary-dark via-purple to-primary',
  accentColor,
  whoFor,
  whatHappens,
  skills,
  story,
  howToEngage,
}: ExperienceDetailProps) {
  return (
    <>
      <HeroSection
        headline={title}
        subheadline={subtitle}
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        gradient={gradient}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 text-sm text-body">
          <Link href="/" className="hover:text-primary-dark">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/experiences" className="hover:text-primary-dark">Experiences</Link>
          <span className="mx-2">›</span>
          <span className="text-secondary font-medium">{title}</span>
        </div>
      </div>

      {/* Who It's For */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Who It&apos;s For</h2>
            <p className="text-lg text-body leading-relaxed">{whoFor}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">What You&apos;ll Experience</h2>
            {whatHappens.map((p, i) => (
              <p key={i} className="text-body leading-relaxed mb-4">{p}</p>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Skills You'll Build */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Skills You&apos;ll Build</h2>
            <ul className="space-y-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-body">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: accentColor }} />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Where This Can Lead</h2>
          </AnimatedSection>
          {story.fullStory ? (
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 relative overflow-hidden" style={{ borderTopColor: accentColor, borderTopWidth: '3px' }}>
                <h3 className="text-xl font-display font-bold text-secondary mb-2">{story.name}</h3>
                <p className="text-sm text-body leading-relaxed mb-3 italic">{story.pathway}</p>
                <p className="text-body leading-relaxed mb-4">{story.fullStory}</p>
                <blockquote className="text-body italic leading-relaxed border-l-2 pl-4" style={{ borderColor: accentColor }}>
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>
            </AnimatedSection>
          ) : (
            <StoryTile name={story.name} pathway={story.pathway} quote={story.quote} color={accentColor} size="large" delay={0.1} />
          )}
        </div>
      </section>

      {/* How to Engage */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">How to Engage</h2>
          </AnimatedSection>
          <div className="space-y-6">
            {howToEngage.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: accentColor }} />
                  <div>
                    <h3 className="font-display font-bold text-secondary mb-1">{item.title}</h3>
                    <p className="text-sm text-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Get Started</h2>
            <p className="text-lg text-white/90 mb-8">Ready to be part of this experience? Connect with E4Youth today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href={primaryCTA.href} className="btn-gold">{primaryCTA.text}</Link>
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
