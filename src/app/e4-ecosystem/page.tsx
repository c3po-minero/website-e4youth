import { Metadata } from 'next'
import EcosystemClient from './EcosystemClient'

export const metadata: Metadata = {
  title: 'The E4 Ecosystem — Engage, Educate, Empower, Elevate | E4Youth',
  description: 'Discover E4Youth\'s circular development model. Four stages — Engage, Educate, Empower, Elevate — create lasting workforce pathways through creative technology and community storytelling.',
}

export default function EcosystemPage() {
  return <EcosystemClient />
}
