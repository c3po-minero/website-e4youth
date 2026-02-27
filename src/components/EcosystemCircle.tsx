'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faWrench, faDoorOpen, faCrown } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const stages: { label: string; color: string; desc: string; icon: IconDefinition; programs: string[] }[] = [
  { label: 'Story', color: '#4DB8FF', desc: 'Discover creative technology through community experiences', icon: faBookOpen, programs: ['AR Heritage Tours', 'Public showcases', 'WOW experiences'] },
  { label: 'Skill', color: '#9B51E0', desc: 'Build real skills through hands-on digital media training', icon: faWrench, programs: ['DSP', 'Workshops & labs'] },
  { label: 'Opportunity', color: '#FCB900', desc: 'Create original work, build portfolios, present to real audiences', icon: faDoorOpen, programs: ['Get Creative!', 'Portfolio building', 'Presentations'] },
  { label: 'Leadership', color: '#7BDCB5', desc: 'Step into stipend-supported cohorts, paid placements, and employer-funded roles', icon: faCrown, programs: ['HIP', 'Level Up', 'Stipend-supported cohorts', 'Paid placements', 'Employer-funded roles'] },
]

export default function EcosystemCircle() {
  const circleSize = 640
  const radius = circleSize / 2 - 70
  const center = circleSize / 2

  return (
    <div className="flex flex-col items-center">
      {/* Desktop: circular layout */}
      <div className="hidden md:block relative" style={{ width: circleSize, height: circleSize }}>
        {/* Outer ring arcs */}
        <svg className="absolute inset-0" viewBox={`0 0 ${circleSize} ${circleSize}`} fill="none">
          {stages.map((stage, i) => {
            const gap = 4 * (Math.PI / 180)
            const startAngle = (i * 90 - 90) * (Math.PI / 180) + gap / 2
            const endAngle = ((i + 1) * 90 - 90) * (Math.PI / 180) - gap / 2
            const x1 = center + radius * Math.cos(startAngle)
            const y1 = center + radius * Math.sin(startAngle)
            const x2 = center + radius * Math.cos(endAngle)
            const y2 = center + radius * Math.sin(endAngle)
            return (
              <path
                key={stage.label}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                stroke={stage.color}
                strokeWidth={6}
                strokeLinecap="round"
              />
            )
          })}

          {/* Directional arrows between stages */}
          {stages.map((_, i) => {
            const midAngle = ((i + 1) * 90 - 90) * (Math.PI / 180)
            const arrowR = radius + 24
            const ax = center + arrowR * Math.cos(midAngle)
            const ay = center + arrowR * Math.sin(midAngle)

            const tangentAngle = midAngle + Math.PI / 2
            const size = 10
            const tipX = ax + size * Math.cos(tangentAngle)
            const tipY = ay + size * Math.sin(tangentAngle)
            const baseL_X = ax - size * 0.6 * Math.cos(tangentAngle) + size * 0.5 * Math.cos(tangentAngle + Math.PI / 2)
            const baseL_Y = ay - size * 0.6 * Math.sin(tangentAngle) + size * 0.5 * Math.sin(tangentAngle + Math.PI / 2)
            const baseR_X = ax - size * 0.6 * Math.cos(tangentAngle) - size * 0.5 * Math.cos(tangentAngle + Math.PI / 2)
            const baseR_Y = ay - size * 0.6 * Math.sin(tangentAngle) - size * 0.5 * Math.sin(tangentAngle + Math.PI / 2)

            return (
              <polygon
                key={`arrow-${i}`}
                points={`${tipX},${tipY} ${baseL_X},${baseL_Y} ${baseR_X},${baseR_Y}`}
                fill="#64748b"
                opacity={0.7}
              />
            )
          })}
        </svg>

        {/* Stage icons + labels positioned in quadrants */}
        {stages.map((stage, i) => {
          const angle = (i * 90) * (Math.PI / 180)
          const labelR = radius * 0.55
          const x = center + labelR * Math.cos(angle - Math.PI / 4)
          const y = center + labelR * Math.sin(angle - Math.PI / 4)
          return (
            <div
              key={stage.label}
              className="absolute text-center z-10"
              style={{
                left: x - 65,
                top: y - 40,
                width: 130,
              }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white mb-2 shadow-md"
                style={{ backgroundColor: stage.color }}
              >
                <FontAwesomeIcon icon={stage.icon} className="w-9 h-9" />
              </div>
              <span className="text-base font-display font-bold text-secondary">{stage.label}</span>
            </div>
          )
        })}

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">E4</span>
            <p className="text-xl font-display font-bold text-secondary">Ecosystem</p>
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden space-y-3 w-full max-w-md">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0"
                style={{ backgroundColor: stage.color }}
              >
                <FontAwesomeIcon icon={stage.icon} className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-secondary">{stage.label}</p>
                <p className="text-xs text-body">{stage.desc}</p>
              </div>
              <span className="text-gray-400 ml-2">
                {i < stages.length - 1 ? '>' : ''}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
