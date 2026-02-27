'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

const experienceGroups = [
  {
    label: 'Public Experiences',
    href: '/experiences/public',
    items: [
      { name: 'AR Heritage Tours', href: '/experiences/ar-heritage-tours' },
      { name: 'Community Showcases', href: '/experiences' },
      { name: 'WOW Public Events', href: '/experiences/wow' },
    ],
  },
  {
    label: 'Learning Experiences',
    href: '/experiences/learning',
    items: [
      { name: 'Digital Storytelling (DSP)', href: '/experiences/digital-storytelling' },
      { name: 'Workshops & Labs', href: '/experiences' },
    ],
  },
  {
    label: 'Professional Experiences',
    href: '/experiences/professional',
    items: [
      { name: 'Get Creative!', href: '/experiences/get-creative' },
      { name: 'Heritage Innovation (HIP)', href: '/experiences/hip' },
      { name: 'E4 Level Up', href: '/experiences/e4-level-up' },
    ],
  },
]

const navLinks = [
  { name: 'E4 Ecosystem', href: '/e4-ecosystem' },
  { name: 'Experiences', href: '/experiences', hasDropdown: true },
  { name: 'Impact', href: '/impact' },
  { name: 'Partner', href: '/partner' },
  { name: 'WOW Heritage Center', href: '/wow-heritage-center' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [experiencesOpen, setExperiencesOpen] = useState(false)
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
                {link.hasDropdown && (
                  <FontAwesomeIcon icon={faChevronDown} className="w-3 h-3" />
                )}
              </Link>
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-4 min-w-[320px]">
                    {experienceGroups.map((group, gi) => (
                      <div key={group.label} className={gi > 0 ? 'mt-3 pt-3 border-t border-gray-100' : ''}>
                        <Link
                          href={group.href}
                          className="block px-5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-dark hover:underline"
                        >
                          {group.label}
                        </Link>
                        {group.items.map((child) => (
                          <Link
                            key={child.href + child.name}
                            href={child.href}
                            className="block px-5 py-2 text-sm text-secondary hover:text-primary-dark hover:bg-primary/5 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-800 hover:text-primary-dark transition-colors p-2"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-4 h-4" />
          </button>
          <Link href="/contact" className="btn-primary text-sm !px-6 !py-2.5 hidden min-[1180px]:inline-flex">
            Get Involved
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-gray-800"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
          </button>
          <button
            className="p-2 text-gray-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <FontAwesomeIcon icon={mobileOpen ? faTimes : faBars} className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Search bar */}
      {searchOpen && (
        <div className="bg-white border-t border-gray-100 shadow-lg px-6 py-4">
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto flex gap-3">
            <div className="relative flex-1">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experiences, stories, and more..."
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
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setExperiencesOpen(!experiencesOpen)}
                      className="w-full flex items-center justify-between py-3 text-secondary font-medium"
                      aria-expanded={experiencesOpen}
                    >
                      {link.name}
                      <FontAwesomeIcon icon={faChevronDown} className={`w-3 h-3 transition-transform ${experiencesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {experiencesOpen && (
                      <div className="pl-4 space-y-1">
                        {experienceGroups.map((group) => (
                          <div key={group.label}>
                            <Link
                              href={group.href}
                              className="block py-2 text-xs font-semibold uppercase tracking-wider text-primary-dark"
                              onClick={() => setMobileOpen(false)}
                            >
                              {group.label}
                            </Link>
                            {group.items.map((child) => (
                              <Link
                                key={child.href + child.name}
                                href={child.href}
                                className="block py-2 pl-3 text-sm text-body hover:text-primary-dark"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
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
