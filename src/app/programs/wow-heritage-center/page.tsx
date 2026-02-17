import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'WOW Heritage Center',
  description: 'The WOW Heritage Center is E4 Youth\'s physical, place-based hub for storytelling, learning, and community connection.',
}

export default function WOWHeritageCenterPage() {
  return (
    <ProgramPageLayout
      title="WOW Heritage Center"
      overview="The WOW Heritage Center is E4 Youth's physical, place-based hub for storytelling, learning, and community connection."
      expandedOverview="The Heritage Center serves as E4 Youth's home base—a welcoming space where programs come to life, communities gather, and stories are preserved. It is both a working studio and a public venue, designed to foster creativity, learning, and intergenerational exchange."
      accentColor="#0072CE"
      gradient="from-primary-dark via-primary to-mint"
      features={[
        { title: 'Creative Studios', description: 'Fully equipped spaces for audio, video, and digital production work.', icon: 'video' },
        { title: 'Exhibition Space', description: 'Rotating galleries showcasing participant and community storytelling projects.', icon: 'eye' },
        { title: 'Learning Labs', description: 'Classrooms and workshop spaces designed for hands-on creative learning.', icon: 'laptop-code' },
        { title: 'Community Gathering', description: 'Event space for showcases, networking, and community celebrations.', icon: 'people-group' },
        { title: 'Archive & Library', description: 'A growing collection of community stories, oral histories, and cultural artifacts.', icon: 'book-open' },
        { title: 'Partner Hub', description: 'Co-working and collaboration space for community organizations and partners.', icon: 'handshake' },
      ]}
      primaryCTA={{ text: 'Visit the WOW Heritage Center', href: '/contact' }}
      secondaryCTA={{ text: 'Partner With the Center', href: '/partner' }}
    />
  )
}
