'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGraduationCap, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

const stages: { label: string; color: string; desc: string; icon: IconDefinition; programs: string[] }[] = [
  { label: 'Engage', color: '#4DB8FF', desc: 'Discover creative technology through community experiences', icon: faHeart, programs: ['AR Heritage Tours', 'Public showcases', 'WOW experiences'] },
  { label: 'Educate', color: '#9B51E0', desc: 'Build real skills through hands-on digital media training', icon: faGraduationCap, programs: ['DSP', 'Workshops & labs'] },
  { label: 'Empower', color: '#FCB900', desc: 'Create original work, build portfolios, present to real audiences', icon: faBolt, programs: ['Get Creative!', 'Portfolio building', 'Presentations'] },
  { label: 'Elevate', color: '#7BDCB5', desc: 'Step into stipend-supported cohorts, paid placements, and employer-funded roles', icon: faRocket, programs: ['HIP', 'Level Up', 'Stipend-supported cohorts', 'Paid placements', 'Employer-funded roles'] },
]

export default function EcosystemCircle() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const circleSize = 640
  const radius = circleSize / 2 - 70
  const center = circleSize / 2

  return (
    <div className="flex flex-col items-center">
      {/* Desktop: circular layout */}
      <div className="hidden md:block relative" style={{ width: circleSize, height: circleSize }}>
        {/* Outer ring arcs */}
        <svg className="absolute inset-0" viewBox={`0 0 ${circleSize} ${circleSize}`} fill="none">
          <defs>
            <marker id="arrowMarker" markerWidth="12" markerHeight="10" refX="6" refY="5" orient="auto">
              <path d="M0,0 L12,5 L0,10 Z" fill="#94a3b8" />
            </marker>
          </defs>
          {stages.map((stage, i) => {
            const gap = 4 * (Math.PI / 180)
            const startAngle = (i * 90 - 90) * (Math.PI / 180) + gap / 2
            const endAngle = ((i + 1) * 90 - 90) * (Math.PI / 180) - gap / 2
            const x1 = center + radius * Math.cos(startAngle)
            const y1 = center + radius * Math.sin(startAngle)
            const x2 = center + radius * Math.cos(endAngle)
            const y2 = center + radius * Math.sin(endAngle)
            const isHovered = hoveredIndex === i
            return (
              <path
                key={stage.label}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                stroke={stage.color}
                strokeWidth={isHovered ? 8 : 6}
                strokeLinecap="round"
                opacity={hoveredIndex !== null && hoveredIndex !== i ? 0.3 : 1}
                className="transition-all duration-300"
              />
            )
          })}

          {/* Large directional arrows between stages */}
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
                className="transition-opacity duration-300"
                opacity={hoveredIndex !== null ? 0.3 : 0.7}
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
          const isHovered = hoveredIndex === i
          return (
            <motion.div
              key={stage.label}
              className="absolute text-center cursor-pointer z-10"
              style={{
                left: x - 65,
                top: y - 40,
                width: 130,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: isHovered ? 1.1 : 1 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center text-white mb-2 transition-all duration-300 ${isHovered ? 'shadow-xl scale-110' : 'shadow-md'}`}
                style={{ backgroundColor: stage.color }}
              >
                <FontAwesomeIcon icon={stage.icon} className="w-9 h-9" />
              </div>
              <span className="text-base font-display font-bold text-secondary">{stage.label}</span>

              {/* Hover tooltip / dialog */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 text-left"
                    style={{
                      width: 280,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '100%',
                      marginTop: 12,
                    }}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-l border-t border-gray-200 rotate-45" />

                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${stage.color}20` }}>
                        <FontAwesomeIcon icon={stage.icon} className="w-5 h-5" style={{ color: stage.color }} />
                      </div>
                      <h4 className="font-display font-bold text-secondary text-lg">{stage.label}</h4>
                    </div>
                    <p className="text-sm text-body mb-3 leading-relaxed">{stage.desc}</p>
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wider">Includes</p>
                      <ul className="text-sm text-body space-y-1">
                        {stage.programs.map((p) => (
                          <li key={p} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: stage.color }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">4E</span>
            <p className="text-xl font-display font-bold text-secondary">Ecosystem</p>
          </div>
        </div>
      </div>

      {/* Mobile: interactive stacked layout */}
      <div className="md:hidden space-y-3 w-full max-w-md">
        {stages.map((stage, i) => {
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <details className="rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center gap-4 p-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
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
                  <span className="text-gray-400 ml-2 transition-transform">
                    {i < stages.length - 1 ? '↓' : '↻'}
                  </span>
                </summary>
                <div className="px-4 pb-4 border-t border-gray-100 pt-3">
                  <p className="text-xs font-semibold text-secondary mb-1.5 uppercase tracking-wider">Includes</p>
                  <ul className="text-sm text-body space-y-1">
                    {stage.programs.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: stage.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
