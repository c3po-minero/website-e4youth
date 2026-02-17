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

export default function EcosystemCircle({ size = 'default' }: { size?: 'default' | 'large' }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const circleSize = size === 'large' ? 640 : 640
  const radius = circleSize / 2 - 60
  const center = circleSize / 2

  return (
    <div className="flex flex-col items-center">
      {/* Desktop: circular layout */}
      <div className="hidden md:block relative" style={{ width: circleSize, height: circleSize }}>
        {/* Outer ring */}
        <svg className="absolute inset-0" viewBox={`0 0 ${circleSize} ${circleSize}`} fill="none">
          {stages.map((stage, i) => {
            const startAngle = (i * 90 - 90) * (Math.PI / 180)
            const endAngle = ((i + 1) * 90 - 90) * (Math.PI / 180)
            const x1 = center + radius * Math.cos(startAngle)
            const y1 = center + radius * Math.sin(startAngle)
            const x2 = center + radius * Math.cos(endAngle)
            const y2 = center + radius * Math.sin(endAngle)
            const isElevate = stage.label === 'Elevate'
            return (
              <path
                key={stage.label}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2}`}
                stroke={stage.color}
                strokeWidth={isElevate ? 6 : 3}
                strokeLinecap="round"
                className={isElevate ? 'drop-shadow-lg' : ''}
              />
            )
          })}
          {/* Arrow indicators between stages */}
          {stages.map((_, i) => {
            const midAngle = ((i * 90 + 45) - 90) * (Math.PI / 180)
            const arrowR = radius + 18
            const ax = center + arrowR * Math.cos(midAngle)
            const ay = center + arrowR * Math.sin(midAngle)
            const angle = (i * 90 + 45)
            return (
              <text
                key={`arrow-${i}`}
                x={ax}
                y={ay}
                fill="#94a3b8"
                fontSize="18"
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${angle}, ${ax}, ${ay})`}
              >
                ›
              </text>
            )
          })}
        </svg>

        {/* Stage labels positioned in quadrants */}
        {stages.map((stage, i) => {
          const angle = (i * 90) * (Math.PI / 180)
          const labelR = radius * 0.55
          const x = center + labelR * Math.cos(angle - Math.PI / 4)
          const y = center + labelR * Math.sin(angle - Math.PI / 4)
          const isElevate = stage.label === 'Elevate'
          return (
            <motion.div
              key={stage.label}
              className="absolute text-center cursor-pointer"
              style={{
                left: x - 55,
                top: y - 30,
                width: 110,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white mb-2 ${isElevate ? 'ring-2 ring-offset-2 ring-emerald-300 animate-pulse' : ''}`}
                style={{ backgroundColor: stage.color }}
              >
                <FontAwesomeIcon icon={stage.icon} className="w-7 h-7" />
              </div>
              <span className="text-sm font-semibold text-secondary">{stage.label}</span>

              {/* Hover tooltip */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute z-50 bg-white rounded-xl shadow-xl border border-gray-200 p-4 text-left"
                    style={{
                      width: 240,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '100%',
                      marginTop: 8,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stage.color}15` }}>
                        <FontAwesomeIcon icon={stage.icon} className="w-4 h-4" style={{ color: stage.color }} />
                      </div>
                      <h4 className="font-display font-bold text-secondary text-sm">{stage.label}</h4>
                    </div>
                    <p className="text-xs text-body mb-2">{stage.desc}</p>
                    <p className="text-xs font-semibold text-secondary mb-1">Programs:</p>
                    <ul className="text-xs text-body space-y-0.5">
                      {stage.programs.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                    {/* Tooltip arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">4E</span>
            <p className="text-lg font-display font-bold text-secondary">Ecosystem</p>
          </div>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <div className="md:hidden space-y-3 w-full max-w-sm">
        {stages.map((stage, i) => {
          const isElevate = stage.label === 'Elevate'
          return (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 p-4 rounded-xl border ${isElevate ? 'border-2 shadow-md' : 'border-gray-100'}`}
              style={{ borderColor: isElevate ? stage.color : undefined }}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 ${isElevate ? 'ring-2 ring-offset-1 ring-emerald-300' : ''}`}
                style={{ backgroundColor: stage.color }}
              >
                <FontAwesomeIcon icon={stage.icon} className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-secondary text-sm">{stage.label}</p>
                <p className="text-xs text-body">{stage.desc}</p>
              </div>
              {i < stages.length - 1 && (
                <span className="text-gray-300 ml-auto">↓</span>
              )}
              {i === stages.length - 1 && (
                <span className="text-emerald-400 ml-auto text-xs">↻</span>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
