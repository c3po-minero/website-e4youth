'use client'
import { useState, useEffect, useRef, useMemo } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'

interface SearchItem {
  title: string
  description: string
  href: string
  category: string
  keywords: string
}

const searchData: SearchItem[] = [
  { title: 'Home', description: 'Transform your voice into your future with E4 Youth', href: '/', category: 'Pages', keywords: 'home main landing storytelling youth' },
  { title: 'Digital Storytelling Program (DSP)', description: 'Foundation program for children ages 8-14 and families. Creative confidence, digital literacy, storytelling fundamentals.', href: '/programs/dsp', category: 'Programs', keywords: 'dsp digital storytelling kids children elementary middle school family workshop' },
  { title: 'Get Creative!', description: 'High school students explore creative careers through hands-on projects, industry mentorship, and portfolio development.', href: '/programs/get-creative', category: 'Programs', keywords: 'get creative high school teens career portfolio design adobe' },
  { title: 'Heritage & Innovation Pathways (HIP)', description: 'College students and emerging adults lead community projects while building advanced professional skills.', href: '/programs/hip', category: 'Programs', keywords: 'hip heritage innovation pathways college leadership community projects' },
  { title: 'All Programs', description: 'Explore our connected ecosystem of learning opportunities for ages 8-25.', href: '/programs', category: 'Programs', keywords: 'programs all overview ecosystem pathway' },
  { title: 'What Once Was: AR Experience', description: 'Augmented reality walking tour of Black Austin history. Download the app and explore.', href: '/experiences/wow', category: 'Experiences', keywords: 'what once was AR augmented reality history tour walking black austin jacob fontaine' },
  { title: 'WOW Heritage Center', description: 'Community hub for storytelling, workshops, events, and community gathering. Space rental available.', href: '/experiences/heritage-center', category: 'Experiences', keywords: 'heritage center community space rental venue workshops archive' },
  { title: 'E4 Live', description: 'Monthly networking events celebrating creativity, connection, and community.', href: '/experiences/live', category: 'Experiences', keywords: 'live events networking showcase monthly creative community' },
  { title: 'E4 Level Up', description: 'Advanced workshops and professional development for early-career and established creatives.', href: '/experiences/level-up', category: 'Experiences', keywords: 'level up workshops professional development career advanced training' },
  { title: 'About E4 Youth', description: 'Community-rooted organization using storytelling to unlock equity and opportunity across generations.', href: '/about', category: 'About', keywords: 'about mission vision values community austin texas four es engage educate empower elevate' },
  { title: 'Stories & Showcases', description: 'Real stories and community portfolios from E4 Youth participants and alumni.', href: '/stories', category: 'About', keywords: 'stories showcases testimonials alumni success portfolio documentary' },
  { title: 'Impact & Evaluation', description: 'Measurable outcomes across learning, visibility, and opportunity. Impact reports and data.', href: '/impact', category: 'About', keywords: 'impact evaluation data metrics outcomes statistics results report' },
  { title: 'Partner With Us', description: 'Schools, workforce partners, and community organizations — explore collaboration opportunities.', href: '/partner', category: 'Get Involved', keywords: 'partner partnership collaborate schools workforce industry mentor volunteer' },
  { title: 'For Funders', description: 'Investment opportunities, strategic funding priorities, and partnership models for foundations.', href: '/funders', category: 'Get Involved', keywords: 'funders foundations grants funding investment donate sponsor' },
  { title: 'Contact Us', description: 'Get in touch, find your path, and connect with the right team member.', href: '/contact', category: 'Get Involved', keywords: 'contact email phone address get involved apply register sign up' },
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
    <div className="search-overlay" onClick={close}>
      <div className="search-modal" onClick={e => e.stopPropagation()}>
        <div className="search-input-wrap">
          <i className="fa-solid fa-magnifying-glass search-input-icon"></i>
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
                    <i className="fa-solid fa-arrow-trend-up"></i> {s.label}
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
              <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '2rem', color: 'var(--border)', marginBottom: '1rem' }}></i>
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
