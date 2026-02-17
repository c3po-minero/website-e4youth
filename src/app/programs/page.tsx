import { Metadata } from 'next'
import ProgramsClient from './ProgramsClient'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'E4 Youth programs support young people at different ages and stages—from early exposure to professional readiness.',
}

export default function ProgramsPage() {
  return <ProgramsClient />
}
