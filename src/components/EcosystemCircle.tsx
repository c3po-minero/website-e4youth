'use client'

import { motion } from 'framer-motion'

const stages = [
  { label: 'Engage', color: '#4DB8FF', desc: 'Discover creative technology through community experiences' },
  { label: 'Educate', color: '#9B51E0', desc: 'Build real skills through hands-on digital media training' },
  { label: 'Empower', color: '#FCB900', desc: 'Create original work, build portfolios, present to real audiences' },
  { label: 'Elevate', color: '#7BDCB5', desc: 'Step into stipend-supported cohorts, paid placements, and employer-funded roles' },
]

export default function EcosystemCircle({ size = 'default' }: { size?: 'default' | 'large' }) {
  const circleSize = size === 'large' ? 400 : 320
  const radius = circleSize / 2 - 40
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
            const arrowR = radius + 12
            const ax = center + arrowR * Math.cos(midAngle)
            const ay = center + arrowR * Math.sin(midAngle)
            const angle = (i * 90 + 45)
            return (
              <text
                key={`arrow-${i}`}
                x={ax}
                y={ay}
                fill="#94a3b8"
                fontSize="14"
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
          const labelR = radius * 0.58
          const x = center + labelR * Math.cos(angle - Math.PI / 4)
          const y = center + labelR * Math.sin(angle - Math.PI / 4)
          const isElevate = stage.label === 'Elevate'
          return (
            <motion.div
              key={stage.label}
              className="absolute text-center"
              style={{
                left: x - 45,
                top: y - 20,
                width: 90,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
            >
              <div
                className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white font-bold text-xs mb-1 ${isElevate ? 'ring-2 ring-offset-2 ring-emerald-300 animate-pulse' : ''}`}
                style={{ backgroundColor: stage.color }}
              >
                {stage.label.charAt(0)}
              </div>
              <span className="text-xs font-semibold text-secondary">{stage.label}</span>
            </motion.div>
          )
        })}

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">4E</span>
            <p className="text-sm font-display font-bold text-secondary">Ecosystem</p>
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
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${isElevate ? 'ring-2 ring-offset-1 ring-emerald-300' : ''}`}
                style={{ backgroundColor: stage.color }}
              >
                {stage.label.charAt(0)}
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
