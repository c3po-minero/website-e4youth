'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const programs = [
  { name: 'Digital Storytelling (DSP)', href: '/programs/dsp' },
  { name: 'Get Creative!', href: '/programs/get-creative' },
  { name: 'Heritage & Innovation (HIP)', href: '/programs/hip' },
  { name: 'What Once Was (WOW)', href: '/programs/wow' },
  { name: 'WOW Heritage Center', href: '/programs/wow-heritage-center' },
  { name: 'E4 Live', href: '/programs/e4-live' },
  { name: 'E4 Level Up', href: '/programs/e4-level-up' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs', children: programs },
  { name: 'Impact', href: '/impact' },
  { name: 'Stories', href: '/stories' },
  { name: 'Partners', href: '/partner' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo-white.png" alt="E4 Youth" width={120} height={36} className="h-8 w-auto invert" priority />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-secondary font-medium hover:text-primary-dark transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.children && (
                  <FontAwesomeIcon icon="chevron-down" className="w-3 h-3" />
                )}
              </Link>
              {link.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-3 min-w-[260px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-secondary hover:text-primary-dark hover:bg-primary/5 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-secondary hover:text-primary-dark transition-colors p-2"
            aria-label="Search"
          >
            <FontAwesomeIcon icon="magnifying-glass" className="w-4 h-4" />
          </button>
          <Link href="/contact" className="btn-primary text-sm !px-6 !py-2.5">
            Get Involved
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-secondary"
            aria-label="Search"
          >
            <FontAwesomeIcon icon="magnifying-glass" className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-secondary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <FontAwesomeIcon icon={mobileOpen ? 'times' : 'bars'} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="bg-white border-t border-gray-100 shadow-lg px-6 py-4">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3">
            <div className="relative flex-1">
              <FontAwesomeIcon icon="magnifying-glass" className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programs, stories, and more..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-dark focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                autoFocus
              />
            </div>
            <button type="submit" className="btn-primary text-sm !px-6 !py-3">
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setProgramsOpen(!programsOpen)}
                      className="w-full flex items-center justify-between py-3 text-secondary font-medium"
                      aria-expanded={programsOpen}
                    >
                      {link.name}
                      <FontAwesomeIcon icon="chevron-down" className={`w-3 h-3 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {programsOpen && (
                      <div className="pl-4 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 text-sm text-body hover:text-primary-dark"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-3 text-secondary font-medium hover:text-primary-dark"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/contact" className="btn-primary w-full justify-center mt-4 text-sm" onClick={() => setMobileOpen(false)}>
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
