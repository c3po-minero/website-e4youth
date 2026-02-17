'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Search from './Search'

const ChevronDown = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" style={{marginLeft:4,verticalAlign:'middle'}}>
    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
)

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs', href: '/programs', dropdown: [
      { label: 'All Programs', href: '/programs' },
      { label: 'Digital Storytelling Program', href: '/programs/dsp' },
      { label: 'Get Creative!', href: '/programs/get-creative' },
      { label: 'Heritage & Innovation Pathways', href: '/programs/hip' },
    ]
  },
  {
    label: 'Experiences', href: '#', dropdown: [
      { label: 'What Once Was', href: '/experiences/wow' },
      { label: 'WOW Heritage Center', href: '/experiences/heritage-center' },
      { label: 'E4 Live', href: '/experiences/live' },
      { label: 'E4 Level Up', href: '/experiences/level-up' },
    ]
  },
  {
    label: 'About', href: '#', dropdown: [
      { label: 'About E4 Youth', href: '/about' },
      { label: 'Stories & Showcases', href: '/stories' },
      { label: 'Impact & Evaluation', href: '/impact' },
    ]
  },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Contact', href: '/contact' },
]

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Programs', href: '/programs' },
  { label: '— Digital Storytelling Program', href: '/programs/dsp' },
  { label: '— Get Creative!', href: '/programs/get-creative' },
  { label: '— Heritage & Innovation Pathways', href: '/programs/hip' },
  { label: 'What Once Was', href: '/experiences/wow' },
  { label: 'WOW Heritage Center', href: '/experiences/heritage-center' },
  { label: 'E4 Live', href: '/experiences/live' },
  { label: 'E4 Level Up', href: '/experiences/level-up' },
  { label: 'About E4 Youth', href: '/about' },
  { label: 'Stories & Showcases', href: '/stories' },
  { label: 'Impact & Evaluation', href: '/impact' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Funders', href: '/funders' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mounted, setMounted] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  const mobileMenu = (
    <>
      {mobileOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        className={`mobile-menu${mobileOpen ? ' active' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <span style={{ color: 'var(--secondary)', fontWeight: 700, fontSize: '1.1rem' }}>Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: 'var(--secondary)', padding: '4px 8px' }}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        {mobileLinks.map((link) => (
          <Link href={link.href} className="mobile-nav-link" key={link.href + link.label} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )

  return (
    <>
      <header className={`header${hidden && !mobileOpen ? ' header-hidden' : ''}`} role="banner">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <Link href="/" aria-label="E4 Youth Home">
                <img
                  src="https://e4youth.org/wp-content/uploads/2024/06/Copy-of-e4-full-white-logo.png"
                  alt="E4 Youth Logo"
                  width={160}
                  height={40}
                />
              </Link>
            </div>

            <nav className="nav" aria-label="Main navigation">
              {navItems.map((item) => (
                <div className="nav-item" key={item.label}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                    {item.dropdown && <ChevronDown />}
                  </Link>
                  {item.dropdown && (
                    <div className="nav-dropdown">
                      {item.dropdown.map((d) => (
                        <Link href={d.href} className="dropdown-link" key={d.href}>{d.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <button
              className="search-toggle"
              onClick={() => {
                const event = new KeyboardEvent('keydown', { key: 'k', metaKey: true })
                window.dispatchEvent(event)
              }}
              aria-label="Search the site (Ctrl+K)"
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <button
              className="mobile-menu-toggle"
              onClick={(e) => { e.stopPropagation(); setMobileOpen(!mobileOpen) }}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              style={{ zIndex: 10000, position: 'relative' }}
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
        <Search />
      </header>
      {mounted && createPortal(mobileMenu, document.body)}
    </>
  )
}
