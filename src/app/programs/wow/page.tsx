import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'What Once Was (WOW)',
  description: 'WOW is E4 Youth\'s public storytelling platform elevating participant work into exhibitions, digital experiences, and public space.',
}

export default function WOWPage() {
  return (
    <ProgramPageLayout
      title="What Once Was (WOW)"
      overview="What Once Was (WOW) is E4 Youth's public storytelling platform that elevates participant work into exhibitions, digital experiences, and public space."
      expandedOverview="WOW transforms the stories and creative work produced through E4 Youth programs into powerful public experiences. From augmented reality tours to gallery exhibitions, WOW ensures that participant voices reach broader audiences and contribute to public memory and cultural discourse."
      accentColor="#7BDCB5"
      gradient="from-mint via-primary to-primary-dark"
      features={[
        { title: 'Public Exhibitions', description: 'Curated showcases of participant work in galleries, museums, and community venues.', icon: 'eye' },
        { title: 'AR Experiences', description: 'Location-based augmented reality tours that bring community stories into physical spaces.', icon: 'vr-cardboard' },
        { title: 'Digital Platforms', description: 'Online galleries and interactive experiences accessible to audiences worldwide.', icon: 'globe' },
        { title: 'Community Events', description: 'Public gatherings that celebrate storytelling and creative achievement.', icon: 'people-group' },
        { title: 'Media Production', description: 'Professional-quality video, audio, and multimedia storytelling projects.', icon: 'clapperboard' },
        { title: 'Cultural Preservation', description: 'Documentation and sharing of community histories for future generations.', icon: 'landmark' },
      ]}
      primaryCTA={{ text: 'Explore WOW', href: '/contact' }}
      secondaryCTA={{ text: 'Partner on Public Storytelling', href: '/partner' }}
    />
  )
}
