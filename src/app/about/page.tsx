import { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About E4 Youth',
  description: 'E4 Youth is a community-rooted organization using storytelling to unlock equity and opportunity across generations.',
}

export default function AboutPage() {
  return <AboutClient />
}
