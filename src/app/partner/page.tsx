import { Metadata } from 'next'
import PartnerClient from './PartnerClient'

export const metadata: Metadata = {
  title: 'Partner With Us',
  description: 'E4 Youth partners with schools, workforce and industry partners, and funders to expand access to creative learning and opportunity.',
}

export default function PartnerPage() {
  return <PartnerClient />
}
