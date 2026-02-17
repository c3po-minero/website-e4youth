import { Metadata } from 'next'
import ProgramPageLayout from '@/components/ProgramPageLayout'

export const metadata: Metadata = {
  title: 'Get Creative!',
  description: 'Career exploration and applied learning helping high school students connect storytelling and digital skills to creative and technology pathways.',
}

export default function GetCreativePage() {
  return (
    <ProgramPageLayout
      title="Get Creative!"
      whoFor="High school students."
      overview="Get Creative! is a career exploration and applied learning program that helps high school students connect storytelling and digital skills to creative and technology pathways."
      expandedOverview="Students build real portfolio pieces, develop professional communication skills, and explore careers at the intersection of creativity and technology. The program bridges the gap between classroom learning and real-world application."
      accentColor="#9B51E0"
      gradient="from-purple via-primary-dark to-gold"
      outcomes={[
        { text: 'Portfolio-ready creative work', icon: 'paint-brush' },
        { text: 'Professional communication skills', icon: 'bullhorn' },
        { text: 'Readiness for college-aged and early-career opportunities', icon: 'graduation-cap' },
      ]}
      features={[
        { title: 'Portfolio Development', description: 'Build a collection of professional creative work that demonstrates skills to colleges and employers.', icon: 'palette' },
        { title: 'Industry Exposure', description: 'Meet and learn from working professionals in creative and technology fields.', icon: 'briefcase' },
        { title: 'Applied Projects', description: 'Work on real-world projects that solve problems and serve communities.', icon: 'lightbulb' },
        { title: 'Presentation Skills', description: 'Practice pitching ideas and presenting work in professional settings.', icon: 'microphone' },
        { title: 'Career Mapping', description: 'Explore pathways in design, media, technology, and cultural work.', icon: 'compass' },
        { title: 'Peer Collaboration', description: 'Work alongside other motivated students in a creative studio environment.', icon: 'people-group' },
      ]}
      primaryCTA={{ text: 'Learn More About Get Creative!', href: '/contact' }}
      secondaryCTA={{ text: 'Partner on Get Creative!', href: '/partner' }}
    />
  )
}
