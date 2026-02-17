'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { searchIndex } from '@/lib/searchIndex'
import AnimatedSection from '@/components/AnimatedSection'

const fuse = new Fuse(searchIndex, {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'description', weight: 0.3 },
    { name: 'keywords', weight: 0.3 },
  ],
  threshold: 0.4,
  includeScore: true,
})

export default function SearchClient() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)

  const results = useMemo(() => {
    if (!query.trim()) return []
    return fuse.search(query.trim())
  }, [query])

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-primary-dark via-purple to-primary min-h-[40vh] flex items-center">
        <div className="max-w-3xl mx-auto w-full text-center">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Search E4 Youth</h1>
          <form onSubmit={(e) => e.preventDefault()} className="relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs, stories, and more..."
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-0 text-lg shadow-xl focus:ring-4 focus:ring-white/30 outline-none"
              autoFocus
            />
          </form>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {query.trim() ? (
            <>
              <p className="text-body mb-8">
                {results.length === 0
                  ? 'No results found. Try a different search term.'
                  : `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`}
              </p>
              <div className="space-y-6">
                {results.map((result, i) => (
                  <AnimatedSection key={result.item.href} delay={i * 0.05}>
                    <Link href={result.item.href} className="block group">
                      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary-dark">
                            {result.item.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-display font-bold text-secondary group-hover:text-primary-dark transition-colors mb-2">
                          {result.item.title}
                        </h2>
                        <p className="text-body text-sm leading-relaxed">{result.item.description}</p>
                        <span className="inline-flex items-center text-sm font-semibold text-primary-dark mt-3 gap-2 group-hover:gap-3 transition-all">
                          Visit page <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-12 h-12 text-gray-300 mb-4" />
              <p className="text-body text-lg">Enter a search term to find programs, stories, and resources.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
