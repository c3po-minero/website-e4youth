'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface Props {
  headline: string
  subheadline: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  gradient?: string
  children?: ReactNode
}

export default function HeroSection({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  gradient = 'from-primary-dark via-purple to-primary',
  children,
}: Props) {
  return (
    <section className={`relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br ${gradient}`}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 animate-float" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-white/3 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight max-w-4xl"
        >
          {headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
        >
          {subheadline}
        </motion.p>
        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
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
          </motion.div>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
