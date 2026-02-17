'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface HeroSlide {
  title: string
  lead: string
  bgImage: string
  buttons: { label: string; href: string; variant: 'primary' | 'secondary' | 'accent' }[]
}

interface HeroProps {
  title: string
  lead: string
  bgImage: string
  buttons: { label: string; href: string; variant: 'primary' | 'secondary' | 'accent' }[]
  icon?: string
  slides?: HeroSlide[]
}

export default function Hero({ title, lead, bgImage, buttons, icon, slides }: HeroProps) {
  const allSlides = slides && slides.length > 1 ? slides : [{ title, lead, bgImage, buttons }]
  const isSlider = allSlides.length > 1
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent(c => (c + 1) % allSlides.length), [allSlides.length])
  const prev = useCallback(() => setCurrent(c => (c - 1 + allSlides.length) % allSlides.length), [allSlides.length])

  useEffect(() => {
    if (!isSlider) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [isSlider, next])

  const slide = allSlides[current]

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.bgImage}')`,
        transition: 'background-image 0.8s ease-in-out',
      }}
    >
      <div className="container">
        <div className="hero-content" key={current} style={{ animation: 'heroFadeIn 0.6s ease' }}>
          {icon && <div className="hero-icon"><i className={icon}></i></div>}
          <h1>{slide.title}</h1>
          <p className="lead">{slide.lead}</p>
          <div className="btn-group">
            {slide.buttons.map((b) => (
              <Link href={b.href} className={`btn btn-${b.variant}`} key={b.label}>
                {b.label}
              </Link>
            ))}
          </div>
        </div>
        {isSlider && (
          <div className="hero-controls">
            <button className="hero-arrow hero-prev" onClick={prev} aria-label="Previous slide">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <div className="hero-dots">
              {allSlides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-dot${i === current ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="hero-arrow hero-next" onClick={next} aria-label="Next slide">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
