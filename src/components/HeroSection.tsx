'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'

interface Props {
  headline: string
  subheadline: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  gradient?: string
  backgroundImage?: string
  backgroundImageAlt?: string
  children?: ReactNode
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  gradient = 'from-primary-dark via-purple to-primary',
  backgroundImage,
  backgroundImageAlt,
  children,
}: Props) {
  return (
    <section className={`relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={backgroundImageAlt || ''}
            fill
            className="object-cover"
            sizes="100vw"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>
      )}

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 animate-float" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-white/3 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight max-w-4xl animate-fade-in-up"
        >
          {headline}
        </h1>
        <p
          className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          {subheadline}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {primaryCTA && (
              <Link href={primaryCTA.href} className="btn-gold">
                {primaryCTA.text}
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        )}
        {children && (
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
