import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'E4 Level Up',
  description: 'E4 Level Up is an advanced workshop and professional development series for college-aged, early-career, and established creatives.',
}

export default function E4LevelUpPage() {
  return (
    <ProgramPageLayout
      title="E4 Level Up"
      overview="E4 Level Up is an advanced workshop and professional development series for college-aged, early-career, and established creatives."
      expandedOverview="Level Up takes participants beyond foundational skills into advanced professional development. Through intensive workshops, mentorship, and applied projects, creatives build the expertise, networks, and credentials needed to thrive in competitive creative and technology industries."
      accentColor="#FCB900"
      gradient="from-gold via-primary-dark to-purple"
      features={[
        { title: 'Advanced Workshops', description: 'Intensive skill-building sessions in specialized creative and technology disciplines.', icon: 'bolt' },
        { title: 'Professional Mentorship', description: 'One-on-one and group mentoring with established industry professionals.', icon: 'handshake' },
        { title: 'Applied Projects', description: 'Real-world project work that builds portfolios and professional credibility.', icon: 'briefcase' },
        { title: 'Industry Connections', description: 'Direct access to employers, organizations, and opportunities in creative fields.', icon: 'globe' },
        { title: 'Leadership Development', description: 'Training in project management, collaboration, and creative leadership.', icon: 'star' },
        { title: 'Career Acceleration', description: 'Targeted support for landing jobs, freelance work, and advanced education opportunities.', icon: 'rocket' },
      ]}
      primaryCTA={{ text: 'Explore Level Up Workshops', href: '/contact' }}
      secondaryCTA={{ text: 'Partner on Level Up', href: '/partner' }}
    />
  )
}
