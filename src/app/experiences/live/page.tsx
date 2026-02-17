import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'E4 Live' }

export default function LivePage() {
  return (
    <>
      <Hero title="E4 Live: Where Stories Spark Opportunities" lead="E4 Live is a dynamic series of in-person networking events that celebrate creativity, connection, and community." bgImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop" icon="👥" buttons={[{ label: 'Attend Next E4 Live', href: '#upcoming', variant: 'primary' }, { label: 'Partner on E4 Live', href: '#partnership', variant: 'secondary' }]} />

      <Section icon="🤝" title="More Than Networking: Building Creative Community" lead="E4 Live creates spaces where relationships form naturally around shared creative work and mutual inspiration.">
        <div className="grid grid-2">
          {[
            { icon: '📖', title: 'Story-Centered', desc: 'Every event centers participant work, creating genuine conversation starters' },
            { icon: '👨‍👩‍👧‍👦', title: 'Intergenerational', desc: 'Young creatives connect directly with established professionals' },
            { icon: '📍', title: 'Community-Rooted', desc: 'Events highlight local culture, venues, and creative ecosystems' },
            { icon: '➡️', title: 'Action-Oriented', desc: 'Conversations lead to concrete next steps and opportunities' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon">{c.icon}</span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="📅" title="What to Expect at E4 Live">
        <div className="grid grid-3">
          {[
            { icon: '💬', title: 'Pre-Event Connection', desc: 'Registered participants receive digital portfolios showcasing featured work.' },
            { icon: '🖥️', title: 'Creative Showcases', desc: '6-8 emerging creatives presenting their latest work in 3-minute spotlight presentations.' },
            { icon: '🔄', title: 'Facilitated Connections', desc: 'Structured activities that help attendees connect around shared interests.' },
            { icon: '🚀', title: 'Professional Speed Mentoring', desc: 'Established professionals rotate through brief mentoring conversations.' },
            { icon: '📍', title: 'Community Resource Fair', desc: 'Local organizations share information about opportunities and resources.' },
            { icon: '💡', title: 'Collaborative Project Launching', desc: 'Idea-sharing sessions where attendees can pitch collaborative projects.' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon">{c.icon}</span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="🏆" title="Real Connections, Real Opportunities">
        <div className="grid grid-3">
          {[
            { q: '"I met my mentor at an E4 Live event. Three months later, I had an internship at her marketing firm."', a: '— Sarah, Get Creative! Participant' },
            { q: '"E4 Live introduced me to two other young filmmakers. We collaborated on a documentary screening at three film festivals."', a: '— Marcus, HIP Graduate' },
            { q: '"As a professional mentor, E4 Live gives me access to emerging talent with fresh perspectives."', a: '— Jennifer Chen, Creative Director' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
        <div className="text-center mt-lg">
          <div className="stats">
            <div className="stat"><span className="stat-number">150+</span><span className="stat-label">Professional Connections Made</span></div>
            <div className="stat"><span className="stat-number">45</span><span className="stat-label">Mentorship Relationships Formed</span></div>
            <div className="stat"><span className="stat-number">30+</span><span className="stat-label">Collaborative Projects Launched</span></div>
            <div className="stat"><span className="stat-number">85%</span><span className="stat-label">Report Meaningful Connections</span></div>
          </div>
        </div>
      </Section>

      <Section icon="📅" title="Upcoming E4 Live Events" id="upcoming">
        <div className="grid grid-2">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop" alt="Creative Tech Showcase" className="card-image" />
            <h3 className="card-title">Creative Tech Showcase</h3>
            <p className="card-description"><strong>Date:</strong> March 15, 2025 | 6:00PM - 8:30PM<br /><strong>Location:</strong> Capital Factory, Austin<br /><strong>Focus:</strong> Digital storytelling meets emerging technology</p>
            <div className="card-cta"><Link href="/contact" className="btn btn-primary">Register Now</Link></div>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&h=600&fit=crop" alt="Stories for Change" className="card-image" />
            <h3 className="card-title">Stories for Change: Community Impact Edition</h3>
            <p className="card-description"><strong>Date:</strong> April 12, 2025 | 5:30PM - 8:00PM<br /><strong>Location:</strong> WOW Heritage Center<br /><strong>Focus:</strong> Storytelling for social justice and community organizing</p>
            <div className="card-cta"><Link href="/contact" className="btn btn-primary">Register Now</Link></div>
          </div>
        </div>
        <div className="text-center mt-lg">
          <div className="btn-group"><Link href="/contact" className="btn btn-primary">Join Our Mailing List</Link></div>
        </div>
      </Section>

      <Section icon="🤝" title="Partner With Us on E4 Live" id="partnership">
        <div className="grid grid-3">
          <div className="card"><span className="card-icon">🏢</span><h3 className="card-title">Corporate Partners</h3><p className="card-description">Connect with emerging talent and support community development.</p><div className="card-cta"><Link href="/partner" className="btn btn-accent">Explore Partnership</Link></div></div>
          <div className="card"><span className="card-icon">🎨</span><h3 className="card-title">Creative Professionals</h3><p className="card-description">Join as a mentor, presenter, or workshop leader.</p><div className="card-cta"><Link href="/contact" className="btn btn-accent">Become a Mentor</Link></div></div>
          <div className="card"><span className="card-icon">📍</span><h3 className="card-title">Venue Partners</h3><p className="card-description">Host an E4 Live event at your space.</p><div className="card-cta"><Link href="/contact" className="btn btn-accent">Host an Event</Link></div></div>
        </div>
      </Section>
    </>
  )
}
