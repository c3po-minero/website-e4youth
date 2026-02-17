import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'E4 Live',
  description: 'E4 Live is a dynamic series of in-person networking events that celebrate creativity, connection, and community.',
}

export default function E4LivePage() {
  return (
    <ProgramPageLayout
      title="E4 Live"
      overview="E4 Live is a dynamic series of in-person networking events that celebrate creativity, connection, and community."
      expandedOverview="E4 Live brings together emerging creatives, established professionals, community members, and partners for vibrant, energizing events. Each gathering is designed to spark new connections, showcase talent, and build the creative ecosystem that supports E4 Youth participants."
      accentColor="#9B51E0"
      gradient="from-purple via-gold to-primary"
      features={[
        { title: 'Networking Events', description: 'Structured and organic networking opportunities for creatives at all career stages.', icon: 'people-group' },
        { title: 'Live Performances', description: 'Showcases of music, spoken word, and multimedia performances by emerging artists.', icon: 'microphone' },
        { title: 'Panel Discussions', description: 'Conversations with industry leaders about creativity, career, and community impact.', icon: 'chalkboard-teacher' },
        { title: 'Portfolio Reviews', description: 'Opportunities for participants to receive feedback from working professionals.', icon: 'eye' },
        { title: 'Community Building', description: 'Events designed to strengthen relationships across the E4 Youth ecosystem.', icon: 'heart' },
        { title: 'Partner Spotlights', description: 'Highlighting organizations and businesses that support emerging creative talent.', icon: 'star' },
      ]}
      primaryCTA={{ text: 'Attend an E4 Live Event', href: '/contact' }}
      secondaryCTA={{ text: 'Partner on E4 Live', href: '/partner' }}
    />
  )
}
