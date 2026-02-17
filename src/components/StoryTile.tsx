'use client'

import AnimatedSection from './AnimatedSection'

interface StoryTileProps {
  name: string
  pathway: string
  quote: string
  color?: string
  size?: 'default' | 'large'
  delay?: number
}

export default function StoryTile({ name, pathway, quote, color = '#7BDCB5', size = 'default', delay = 0 }: StoryTileProps) {
  if (size === 'large') {
    return (
      <AnimatedSection delay={delay}>
        <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 relative overflow-hidden" style={{ borderTopColor: color, borderTopWidth: '3px' }}>
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: `${color}15`, color }}>
            Elevate Proof
          </span>
          <h3 className="text-xl font-display font-bold text-secondary mb-2">{name}</h3>
          <p className="text-sm text-body leading-relaxed mb-3">{pathway}</p>
          <blockquote className="text-sm italic text-body leading-relaxed border-l-2 pl-4" style={{ borderColor: color }}>
            &ldquo;{quote}&rdquo;
          </blockquote>
        </div>
      </AnimatedSection>
    )
  }

  return (
    <AnimatedSection delay={delay}>
      <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: color, borderTopWidth: '3px' }}>
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: `${color}15`, color }}>
          Elevate Proof
        </span>
        <h3 className="text-lg font-display font-bold text-secondary mb-2">{name}</h3>
        <p className="text-xs text-body leading-relaxed mb-2">{pathway}</p>
        <blockquote className="text-sm italic text-body leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
    </AnimatedSection>
  )
}
