import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'E4Youth — Youth Workforce Development Through Creative Technology | Austin TX',
  description: 'E4Youth builds multi-generational pathways through creative technology. Engage, Educate, Empower, Elevate — stipend-supported experiences for young people in Austin, TX.',
}

export default function HomePage() {
  return <HomeClient />
}
