import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Partner With Us' }

export default function PartnerPage() {
  return (
    <>
      <Hero title="Partner With Us: Expanding Creative Learning and Opportunity" lead="E4 Youth partners with schools, workforce and industry partners, and funders to expand access to creative learning and opportunity." bgImage="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1920&h=1080&fit=crop" buttons={[{ label: 'Explore Partnership Options', href: '#partnership-types', variant: 'primary' }, { label: 'Start a Conversation', href: '/contact', variant: 'secondary' }]} />

      <Section icon="🧭" title="Beyond Transactional: Building Authentic Community Relationships">
        <div className="grid grid-2">
          <div>
            <h3>Our Partnership Principles:</h3>
            <ul className="check-list">
              <li><strong>Community-Centered:</strong> Partnerships serve community-defined needs</li>
              <li><strong>Youth Leadership:</strong> Young people participate meaningfully in partnership development</li>
              <li><strong>Mutual Benefit:</strong> All partners gain value, learn, and contribute</li>
              <li><strong>Long-Term Commitment:</strong> Sustainable relationships that deepen over time</li>
              <li><strong>Shared Accountability:</strong> Collaborative evaluation and continuous improvement</li>
            </ul>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop" alt="Diverse group collaborating" className="card-image" />
          </div>
        </div>
        <div className="text-center mt-lg"><Link href="/impact" className="btn btn-accent">See Our Community Impact Results</Link></div>
      </Section>

      <Section icon="🔗" title="Diverse Partnership Models" id="partnership-types">
        <div className="grid grid-2">
          {[
            { icon: '🎓', title: 'Educational Institution Partnerships', desc: 'Curriculum integration, teacher professional development, family engagement programming', partners: ['Austin ISD Creative Arts Integration', 'Community College Pathway Programming', 'University Research Collaborations'] },
            { icon: '💼', title: 'Workforce and Industry Partnerships', desc: 'Professional mentorship, internship opportunities, career pathway development', partners: ['Local Creative Agencies', 'Technology Companies', 'Nonprofit Organizations'] },
            { icon: '👥', title: 'Community Organization Partnerships', desc: 'Shared programming, community storytelling projects, resource sharing', partners: ['Austin History Center', 'Neighborhood Associations', 'Cultural Organizations'] },
            { icon: '💰', title: 'Funding and Foundation Partnerships', desc: 'Program support, evaluation development, field-building initiatives', partners: ['Austin Community Foundation', 'National Arts & Humanities Foundations', 'Local Business & Corporate Funders'] },
          ].map(c => (
            <div className="card" key={c.title}>
              <span className="card-icon">{c.icon}</span>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.desc}</p>
              <strong>Current Partners:</strong>
              <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{c.partners.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="🏆" title="Real Partnerships, Real Community Impact">
        <div className="grid grid-3">
          {[
            { q: '"Our partnership with E4 Youth has transformed how we approach creative arts education in our district."', a: '— Dr. Maria Rodriguez, Creative Arts Coordinator, Austin ISD' },
            { q: '"E4 Youth participants bring fresh perspectives and strong creative skills to our projects."', a: '— David Kim, Community Engagement Manager' },
            { q: '"Our collaboration has transformed how we engage with community storytelling and historical documentation."', a: '— Dr. Sarah Williams, Austin History Center' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
      </Section>

      <Section icon="📈" title="From Initial Conversation to Deep Collaboration">
        <div className="grid grid-3">
          {[
            { icon: '🧭', title: 'Step 1: Partnership Exploration', desc: '1-2 months — Initial meetings to explore alignment and mutual interest.' },
            { icon: '🌱', title: 'Step 2: Pilot Project Development', desc: '3-6 months — Small-scale collaboration to test the partnership model.' },
            { icon: '🤝', title: 'Step 3: Formal Partnership Agreement', desc: 'Ongoing with annual review — Collaborative development of structure and expectations.' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon">{c.icon}</span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="🚪" title="Ready to Explore Partnership with E4 Youth?" lead="Let's start a conversation about how we can work together to expand creative learning opportunities and strengthen our community.">
        <div className="btn-group">
          <Link href="/contact" className="btn btn-primary">Start Partnership Conversation</Link>
          <Link href="/programs" className="btn btn-accent">Observe Our Programs</Link>
          <Link href="/impact" className="btn btn-outline">Review Our Impact</Link>
        </div>
        <div className="text-center mt-lg">
          <p><strong>Partnership Contact:</strong><br />Email: partnerships@e4youth.org | Phone: (512) 555-0123<br />David Park, Partnership Manager</p>
        </div>
      </Section>
    </>
  )
}
