import { Metadata } from 'next'
import ImpactClient from './ImpactClient'

export const metadata: Metadata = {
  title: 'Impact — Youth Workforce Development Outcomes | E4Youth Austin',
  description: 'Measurable impact across four stages: Engage, Educate, Empower, Elevate. See how E4Youth transforms young lives through creative technology in Austin, TX.',
}

export default function ImpactPage() {
  return <ImpactClient />
}
