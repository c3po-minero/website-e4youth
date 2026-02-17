import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact & Get Involved',
  description: 'Whether you\'re a participant, partner, educator, or supporter, there are many ways to connect with E4 Youth.',
}

export default function ContactPage() {
  return <ContactClient />
}
