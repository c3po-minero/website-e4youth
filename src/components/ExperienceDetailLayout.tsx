'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faCompass, faUsers, faStar } from '@fortawesome/free-solid-svg-icons'
import HeroSection from './HeroSection'
import AnimatedSection from './AnimatedSection'

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
  storyImage?: string
  storyImageAlt?: string
  storyImage2?: string
  storyImage2Alt?: string
  heroImage?: string
  heroImageAlt?: string
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
  storyImage,
  storyImageAlt,
  storyImage2,
  storyImage2Alt,
  heroImage,
  heroImageAlt,
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
        backgroundImage={heroImage}
        backgroundImageAlt={heroImageAlt}
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

      {/* Featured Story — Two-column: Image + Story */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Where This Can Lead</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
              {/* Left: Two-image layered composition */}
              <div className="relative" style={{ minHeight: 420 }}>
                {storyImage ? (
                  <>
                    {/* Primary image — larger, top-left */}
                    <div className="relative rounded-2xl overflow-hidden shadow-lg w-[85%] aspect-[4/3]">
                      <Image
                        src={storyImage}
                        alt={storyImageAlt || `${title} — where this can lead`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                    {/* Secondary image — smaller, overlapping bottom-right */}
                    {storyImage2 && (
                      <div className="absolute bottom-0 right-0 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                          src={storyImage2}
                          alt={storyImage2Alt || `${title} — outcome`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    )}
                    {/* Accent dot decoration */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full opacity-40 hidden lg:block" style={{ backgroundColor: accentColor }} />
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full opacity-25 hidden lg:block" style={{ backgroundColor: accentColor }} />
                  </>
                ) : (
                  <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] flex items-center justify-center" style={{ backgroundColor: `${accentColor}08` }}>
                    <FontAwesomeIcon icon={faStar} className="w-24 h-24" style={{ color: `${accentColor}25` }} />
                  </div>
                )}
              </div>

              {/* Right: Story content */}
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-secondary mb-2">{story.name}</h3>
                <div className="w-12 h-1 rounded-full mb-4" style={{ backgroundColor: accentColor }} />
                <p className="text-sm text-body italic leading-relaxed mb-5">{story.pathway}</p>
                {story.fullStory && (
                  <p className="text-body leading-relaxed mb-6">{story.fullStory}</p>
                )}
                {/* Quote with left border */}
                <div className="border-l-4 pl-5 py-2" style={{ borderColor: accentColor }}>
                  <blockquote className="text-lg italic text-secondary leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className="mt-3 font-display font-bold text-secondary text-sm">— {story.name}</p>
                </div>
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
