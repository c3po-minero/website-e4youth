import { Metadata } from 'next'
import ExperiencesClient from './ExperiencesClient'

export const metadata: Metadata = {
  title: 'Youth Experiences — Creative Technology & Workforce Programs | E4Youth Austin',
  description: 'Explore E4Youth\'s stipend-supported experiences: digital storytelling, AR heritage tours, live production, and workforce opportunities for young people in Austin, TX.',
}

export default function ExperiencesPage() {
  return <ExperiencesClient />
}
