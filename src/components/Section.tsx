import { ReactNode } from 'react'
import FaIcon from './FaIcon'

interface SectionProps {
  icon?: string
  title?: string
  lead?: string
  children: ReactNode
  id?: string
}

export default function Section({ icon, title, lead, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        {(icon || title || lead) && (
          <div className="section-header">
            {icon && <span className="section-icon"><FaIcon iconClass={icon} /></span>}
            {title && <h2>{title}</h2>}
            {lead && <p className="lead">{lead}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
