import { Metadata } from 'next'
import FundersClient from './FundersClient'

export const metadata: Metadata = {
  title: 'For Funders & Institutions',
  description: 'E4 Youth designs community-informed pathways combining storytelling, digital literacy, and applied learning for workforce readiness.',
}

export default function FundersPage() {
  return <FundersClient />
}
