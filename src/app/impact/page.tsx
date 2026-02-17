import { Metadata } from 'next'
import ImpactClient from './ImpactClient'

export const metadata: Metadata = {
  title: 'Impact & Evaluation',
  description: 'E4 Youth measures impact across learning, visibility, and opportunity, capturing growth over time.',
}

export default function ImpactPage() {
  return <ImpactClient />
}
