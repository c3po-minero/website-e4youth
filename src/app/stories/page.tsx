import { Metadata } from 'next'
import StoriesClient from './StoriesClient'

export const metadata: Metadata = {
  title: 'Stories & Showcases',
  description: 'Stories & Showcases highlight youth voices, project outcomes, and public storytelling experiences across E4 Youth programs.',
}

export default function StoriesPage() {
  return <StoriesClient />
}
