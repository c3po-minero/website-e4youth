'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { resolveIcon } from '@/lib/iconMap'
import HeroSection from './HeroSection'
import AnimatedSection from './AnimatedSection'

interface Outcome {
  text: string
  icon: string | IconDefinition
}

interface Props {
  title: string
  whoFor?: string
  overview: string
  expandedOverview?: string
  outcomes?: Outcome[]
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  gradient?: string
  accentColor: string
  features?: { title: string; description: string; icon: string | IconDefinition }[]
}

export default function ProgramPageLayout({
  title,
  whoFor,
  overview,
  expandedOverview,
  outcomes,
  primaryCTA,
  secondaryCTA,
  gradient = 'from-primary-dark via-purple to-primary',
  accentColor,
  features,
}: Props) {
  return (
    <>
      <HeroSection
        headline={title}
        subheadline={overview}
        primaryCTA={primaryCTA}
        secondaryCTA={secondaryCTA}
        gradient={gradient}
      />

      {whoFor && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: accentColor }}>Who This Is For</span>
                <p className="text-2xl md:text-3xl font-display font-bold text-secondary mt-3">{whoFor}</p>
                {expandedOverview && (
                  <p className="text-lg text-body leading-relaxed mt-6">{expandedOverview}</p>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {outcomes && outcomes.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">What Participants Gain</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {outcomes.map((o, i) => (
                <AnimatedSection key={o.text} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center h-full">
                    <div className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${accentColor}15` }}>
                      <FontAwesomeIcon icon={resolveIcon(o.icon)} className="w-6 h-6" style={{ color: accentColor }} />
                    </div>
                    <p className="font-display font-semibold text-secondary">{o.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {features && features.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">How It Works</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((f, i) => (
                <AnimatedSection key={f.title} delay={i * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: `${accentColor}15` }}>
                      <FontAwesomeIcon icon={resolveIcon(f.icon)} className="w-5 h-5" style={{ color: accentColor }} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-secondary mb-1">{f.title}</h3>
                      <p className="text-sm text-body">{f.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Get Started</h2>
            <p className="text-lg text-white/90 mb-8">Ready to be part of this experience? Connect with E4 Youth today.</p>
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
