import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'Digital Storytelling Program (DSP)',
  description: 'DSP introduces young people to storytelling, digital literacy, and creative expression through workshops, curriculum, tours, and community-based learning.',
}

export default function DSPPage() {
  return (
    <ProgramPageLayout
      title="Digital Storytelling Program (DSP)"
      whoFor="School-aged youth and families."
      overview="DSP introduces young people to storytelling, digital literacy, and creative expression through workshops, curriculum, tours, and community-based learning experiences."
      expandedOverview="Through hands-on creative projects, young participants learn to use digital tools to tell their own stories. DSP builds a foundation that prepares youth for deeper engagement with E4 Youth programs and creative career pathways."
      accentColor="#4DB8FF"
      gradient="from-primary via-primary-dark to-purple"
      outcomes={[
        { text: 'Foundational digital literacy and creative confidence', icon: 'laptop-code' },
        { text: 'Stronger communication and self-expression', icon: 'bullhorn' },
        { text: 'Readiness to engage in advanced E4 Youth pathways', icon: 'compass' },
      ]}
      features={[
        { title: 'Creative Workshops', description: 'Hands-on sessions where youth explore storytelling through video, audio, and digital media.', icon: 'video' },
        { title: 'Community Tours', description: 'Place-based learning experiences that connect participants to local history and culture.', icon: 'map-marker-alt' },
        { title: 'Curriculum Integration', description: 'Standards-aligned content that schools and organizations can embed in existing programs.', icon: 'book-open' },
        { title: 'Family Engagement', description: 'Intergenerational activities that bring families into the creative process together.', icon: 'people-group' },
        { title: 'Digital Tools Training', description: 'Introduction to cameras, editing software, and digital publishing platforms.', icon: 'code' },
        { title: 'Showcase Events', description: 'Opportunities for participants to share their work publicly and build confidence.', icon: 'star' },
      ]}
      primaryCTA={{ text: 'Explore DSP', href: '/contact' }}
      secondaryCTA={{ text: 'Bring DSP to Your School or Community', href: '/partner' }}
    />
  )
}
