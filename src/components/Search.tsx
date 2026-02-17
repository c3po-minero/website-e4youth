'use client'
import { useState, useEffect, useRef, useMemo } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'
import FaIcon from './FaIcon'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
  keywords: string
}

const searchData: SearchItem[] = [
  { title: 'Home', description: 'Transform your voice into your future with E4 Youth', href: '/', category: 'Pages', keywords: 'home main landing storytelling youth' },
  { title: 'Digital Storytelling Program (DSP)', description: 'Foundation program for children ages 8-14 and families.', href: '/programs/dsp', category: 'Programs', keywords: 'dsp digital storytelling kids children' },
  { title: 'Get Creative!', description: 'High school students explore creative careers through hands-on projects.', href: '/programs/get-creative', category: 'Programs', keywords: 'get creative high school teens career' },
  { title: 'Heritage & Innovation Pathways (HIP)', description: 'College students and emerging adults lead community projects.', href: '/programs/hip', category: 'Programs', keywords: 'hip heritage innovation pathways college' },
  { title: 'All Programs', description: 'Explore our connected ecosystem of learning opportunities.', href: '/programs', category: 'Programs', keywords: 'programs all overview' },
  { title: 'What Once Was: AR Experience', description: 'Augmented reality walking tour of Black Austin history.', href: '/experiences/wow', category: 'Experiences', keywords: 'what once was AR augmented reality' },
  { title: 'WOW Heritage Center', description: 'Community hub for storytelling and workshops.', href: '/experiences/heritage-center', category: 'Experiences', keywords: 'heritage center community space' },
  { title: 'E4 Live', description: 'Monthly networking events celebrating creativity.', href: '/experiences/live', category: 'Experiences', keywords: 'live events networking' },
  { title: 'E4 Level Up', description: 'Advanced workshops and professional development.', href: '/experiences/level-up', category: 'Experiences', keywords: 'level up workshops professional' },
  { title: 'About E4 Youth', description: 'Community-rooted organization using storytelling.', href: '/about', category: 'About', keywords: 'about mission vision' },
  { title: 'Stories & Showcases', description: 'Real stories from E4 Youth participants.', href: '/stories', category: 'About', keywords: 'stories showcases testimonials' },
  { title: 'Impact & Evaluation', description: 'Measurable outcomes and impact reports.', href: '/impact', category: 'About', keywords: 'impact evaluation data' },
  { title: 'Partner With Us', description: 'Explore collaboration opportunities.', href: '/partner', category: 'Get Involved', keywords: 'partner partnership collaborate' },
  { title: 'For Funders', description: 'Investment opportunities for foundations.', href: '/funders', category: 'Get Involved', keywords: 'funders foundations grants' },
  { title: 'Contact Us', description: 'Get in touch with E4 Youth.', href: '/contact', category: 'Get Involved', keywords: 'contact email phone' },
]

const popularSearches = [
  { label: 'Programs for Youth', href: '/programs' },
  { label: 'Get Creative!', href: '/programs/get-creative' },
  { label: 'AR Walking Tour', href: '/experiences/wow' },
  { label: 'Partner With Us', href: '/partner' },
  { label: 'Contact', href: '/contact' },
  { label: 'Impact Data', href: '/impact' },
]

export default function Search() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const fuse = useMemo(() => new Fuse(searchData, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'description', weight: 0.3 },
      { name: 'keywords', weight: 0.2 },
      { name: 'category', weight: 0.1 },
    ],
    threshold: 0.4,
    includeScore: true,
  }), [])

  const results = query.length > 0 ? fuse.search(query).slice(0, 8) : []

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setQuery('')
    }
  }, [open])

  const close = () => setOpen(false)

  if (!open) return null

  return (
    <div className="search-overlay" onClick={close} role="dialog" aria-label="Search">
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <FaIcon iconClass="fa-solid fa-magnifying-glass" className="search-input-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search pages, programs, experiences..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search the site"
          />
          <kbd className="search-kbd">ESC</kbd>
        </div>

        <div className="search-body">
          {query.length === 0 ? (
            <div className="search-section">
              <p className="search-section-title">Popular Searches</p>
              <div className="search-popular">
                {popularSearches.map(s => (
                  <Link href={s.href} key={s.href} className="search-popular-item" onClick={close}>
                    <FaIcon iconClass="fa-solid fa-arrow-trend-up" /> {s.label}
                  </Link>
                ))}
              </div>
              <p className="search-section-title" style={{ marginTop: '1.5rem' }}>Browse by Category</p>
              <div className="search-categories">
                {['Programs', 'Experiences', 'About', 'Get Involved'].map(cat => (
                  <button key={cat} className="search-category-btn" onClick={() => setQuery(cat)}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="search-results">
              {results.map(r => (
                <Link href={r.item.href} key={r.item.href} className="search-result" onClick={close}>
                  <span className="search-result-category">{r.item.category}</span>
                  <span className="search-result-title">{r.item.title}</span>
                  <span className="search-result-desc">{r.item.description}</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="search-empty">
              <FaIcon iconClass="fa-solid fa-magnifying-glass" style={{ fontSize: '2rem', color: 'var(--border)', marginBottom: '1rem' }} />
              <p>No results for &quot;{query}&quot;</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text)' }}>Try searching for programs, experiences, or topics</p>
            </div>
          )}
        </div>

        <div className="search-footer">
          <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
          <span><kbd>↵</kbd> Open</span>
          <span><kbd>ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  )
}
