import { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'E4 Youth — Storytelling for Equity & Opportunity',
  description: 'E4 Youth uses the power of storytelling to unlock equity, workforce access, and opportunity across generations.',
}

export default function HomePage() {
  return <HomeClient />
}
