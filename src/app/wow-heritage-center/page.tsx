import { Metadata } from 'next'
import WowHeritageClient from './WowHeritageClient'

export const metadata: Metadata = {
  title: 'WOW Heritage Center — The Physical Hub of the E4 Ecosystem | E4Youth Austin',
  description: 'The WOW Heritage Center is the physical hub of the E4 Ecosystem — where heritage, creative technology, and workforce development come together under one roof in Austin, TX.',
}

export default function WowHeritageCenterPage() {
  return <WowHeritageClient />
}
