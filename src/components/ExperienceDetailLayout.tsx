'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faCompass, faUsers, faStar } from '@fortawesome/free-solid-svg-icons'
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

const skillIcons = [faLightbulb, faCompass, faUsers, faStar, faLightbulb, faCompass, faUsers, faStar, faLightbulb, faCompass]

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

      {/* Who It's For — Reference design */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Who This Is For</span>
              <p className="text-2xl md:text-3xl font-display font-bold text-secondary mt-3">{whoFor}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What You'll Experience — Centered intro with content */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>What You&apos;ll Experience</span>
            </div>
          </AnimatedSection>
          <div className="max-w-3xl mx-auto">
            {whatHappens.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="text-body leading-relaxed mb-4">{p}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills You'll Build — Reference grid pattern */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Skills You&apos;ll Build</span>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
                    <FontAwesomeIcon icon={skillIcons[i % skillIcons.length]} className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary mb-1">{skill}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story — Two-column with decorative icon */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Where This Can Lead</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center max-w-4xl mx-auto">
              {/* Decorative icon side */}
              <div className="md:col-span-2 flex justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center" style={{ backgroundColor: `${accentColor}10` }}>
                  <FontAwesomeIcon icon={faStar} className="w-16 h-16 md:w-20 md:h-20" style={{ color: `${accentColor}40` }} />
                </div>
              </div>
              {/* Story content */}
              <div className="md:col-span-3">
                {story.fullStory ? (
                  <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 relative overflow-hidden" style={{ borderTopColor: accentColor, borderTopWidth: '3px' }}>
                    <h3 className="text-xl font-display font-bold text-secondary mb-2">{story.name}</h3>
                    <p className="text-sm text-body leading-relaxed mb-3 italic">{story.pathway}</p>
                    <p className="text-body leading-relaxed mb-4">{story.fullStory}</p>
                    <blockquote className="text-body italic leading-relaxed border-l-2 pl-4" style={{ borderColor: accentColor }}>
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                  </div>
                ) : (
                  <StoryTile name={story.name} pathway={story.pathway} quote={story.quote} color={accentColor} size="large" delay={0} />
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How to Engage — Reference grid pattern */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>How to Engage</span>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howToEngage.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
                    <FontAwesomeIcon icon={skillIcons[i % skillIcons.length]} className="w-5 h-5" style={{ color: accentColor }} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-secondary mb-1">{item.title}</h3>
                    <p className="text-sm text-body">{item.description}</p>
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
