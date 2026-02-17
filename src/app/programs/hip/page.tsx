import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'Heritage & Innovation Pathways (HIP)',
  description: 'HIP connects community history, storytelling, and emerging technology to applied learning, research, and professional pathways.',
}

export default function HIPPage() {
  return (
    <ProgramPageLayout
      title="Heritage & Innovation Pathways (HIP)"
      whoFor="College-aged participants and emerging adults."
      overview="HIP connects community history, storytelling, and emerging technology to applied learning, research, and professional pathways."
      expandedOverview="Participants in HIP work at the advanced intersection of cultural preservation and technological innovation. They produce public-facing professional work while building expertise that translates directly to careers in research, media, technology, and cultural institutions."
      accentColor="#FCB900"
      gradient="from-gold via-purple to-primary-dark"
      outcomes={[
        { text: 'Public-facing professional work', icon: 'eye' },
        { text: 'Advanced research and digital production skills', icon: 'laptop-code' },
        { text: 'Clear next steps into employment or advanced study', icon: 'graduation-cap' },
      ]}
      features={[
        { title: 'Research Projects', description: 'Conduct original research into community history, oral traditions, and cultural assets.', icon: 'book-open' },
        { title: 'Emerging Technology', description: 'Work with AR, VR, interactive media, and digital production tools.', icon: 'vr-cardboard' },
        { title: 'Professional Mentorship', description: 'Connect with industry professionals, scholars, and community leaders.', icon: 'handshake' },
        { title: 'Public Exhibitions', description: 'Produce and present work in galleries, community spaces, and digital platforms.', icon: 'globe' },
        { title: 'Career Pathways', description: 'Build credentials and connections that lead to employment or further education.', icon: 'briefcase' },
        { title: 'Community Partnership', description: 'Work directly with communities to co-create meaningful cultural projects.', icon: 'people-group' },
      ]}
      primaryCTA={{ text: 'Explore HIP', href: '/contact' }}
      secondaryCTA={{ text: 'Partner on HIP', href: '/partner' }}
    />
  )
}
