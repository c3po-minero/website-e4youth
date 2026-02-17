import { Metadata } from 'next'
import StoriesClient from './StoriesClient'

export const metadata: Metadata = {
  title: 'Stories — Youth Voices & Elevate Proof | E4Youth Austin',
  description: 'Real stories from E4Youth participants. Hear how young people in Austin engage, grow, and elevate through creative technology and workforce experiences.',
}

export default function StoriesPage() {
  return <StoriesClient />
}
