import { Metadata } from 'next'
import { Suspense } from 'react'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search E4 Youth programs, stories, and resources.',
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p>Loading...</p></div>}>
      <SearchClient />
    </Suspense>
  )
}
