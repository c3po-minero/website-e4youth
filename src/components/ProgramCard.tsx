'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import AnimatedSection from './AnimatedSection'

interface Props {
  title: string
  description: string
  href: string
  icon: IconProp
  color: string
  delay?: number
}

export default function ProgramCard({ title, description, href, icon, color, delay = 0 }: Props) {
  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group">
        <div className="relative bg-white rounded-2xl p-8 shadow-md card-hover border border-gray-100 overflow-hidden h-full">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${color}, ${color}88)` }} />
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            style={{ backgroundColor: `${color}15` }}
          >
            <FontAwesomeIcon icon={icon} className="w-6 h-6" style={{ color }} />
          </div>
          <h3 className="text-xl font-display font-bold text-secondary mb-3 group-hover:text-primary-dark transition-colors">
            {title}
          </h3>
          <p className="text-body text-sm leading-relaxed mb-4">{description}</p>
          <span className="inline-flex items-center text-sm font-semibold text-primary-dark group-hover:gap-3 gap-2 transition-all">
            Learn More <FontAwesomeIcon icon="arrow-right" className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </AnimatedSection>
  )
}
