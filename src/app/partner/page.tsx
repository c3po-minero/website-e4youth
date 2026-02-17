import { Metadata } from 'next'
import PartnerClient from './PartnerClient'

export const metadata: Metadata = {
  title: 'Partner With E4Youth — Youth Workforce Development | Austin TX',
  description: 'Join E4Youth\'s 4E Ecosystem as a corporate, community, or education partner. Support youth workforce development through creative technology in Austin, TX.',
}

export default function PartnerPage() {
  return <PartnerClient />
}
