import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'E4 Level Up' }

export default function LevelUpPage() {
  return (
    <>
      <Hero title="Level Up: Where Skills Meet Strategy" lead="E4 Level Up is an advanced workshop and professional development series for college-aged, early-career, and established creatives." bgImage="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=1080&fit=crop" icon="fa-solid fa-chart-line" buttons={[{ label: 'Explore Workshops', href: '#workshops', variant: 'primary' }, { label: 'Partner on Level Up', href: '#partnership', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-compass" title="Beyond Basic Training: Strategic Creative Development" lead="E4 Level Up recognizes that today's creative professionals must be both technically excellent and strategically minded.">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-clipboard-list', title: 'Applied Learning', desc: 'Every workshop centers real projects and challenges' },
            { icon: 'fa-solid fa-industry', title: 'Industry Integration', desc: 'Working professionals co-facilitate workshops' },
            { icon: 'fa-solid fa-folder-open', title: 'Portfolio Development', desc: 'Participants leave with tangible work samples' },
            { icon: 'fa-solid fa-chess', title: 'Strategic Thinking', desc: 'Technical skills training integrates business strategy' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon"><i className={c.icon}></i></span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-book" title="Specialized Learning Tracks" id="workshops">
        <div className="grid grid-2">
          {[
            { img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop', title: 'Digital Storytelling Mastery', duration: '6-week intensive series', tools: 'Adobe Premiere Pro, After Effects, DaVinci Resolve', items: ['Advanced narrative structure and audience analysis', 'Professional documentary production techniques', 'Multi-platform content strategy', 'Client communication and project management'] },
            { img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop', title: 'Creative Technology Integration', duration: '8-week hybrid learning experience', tools: 'Unity, TouchDesigner, p5.js, Figma', items: ['AR/VR storytelling and experience design', 'Interactive media development', 'Creative coding for multimedia projects', 'User experience design'] },
            { img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=600&fit=crop', title: 'Professional Communication & Client Relations', duration: '4-week intensive', tools: 'Complete client pitch package', items: ['Client discovery and project scoping', 'Professional presentation and pitch development', 'Contract negotiation and project management', 'Creative feedback integration'] },
            { img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop', title: 'Community-Centered Research Methods', duration: '10-week program', tools: 'Complete community research project', items: ['Ethical community engagement methods', 'Oral history collection and archive development', 'Community asset mapping', 'Grant writing and program evaluation'] },
          ].map(c => (
            <div className="card" key={c.title}>
              <img src={c.img} alt={c.title} className="card-image" />
              <h3 className="card-title">{c.title}</h3>
              <p><strong>Duration:</strong> {c.duration}</p>
              <ul style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{c.items.map(i => <li key={i}>{i}</li>)}</ul>
              <p><strong>Tools:</strong> {c.tools}</p>
              <div className="card-cta"><Link href="/contact" className="btn btn-primary">Register</Link></div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-star" title="Professional Development That Delivers Results">
        <div className="grid grid-3">
          {[
            { q: '"The Creative Technology track gave me the skills to transition from web design to interactive media."', a: '— Alex Chen, Creative Technologist' },
            { q: '"Level Up\'s Communication workshop taught me how to price my work properly. My freelance income doubled."', a: '— Maria Rodriguez, Freelance Designer' },
            { q: '"The Research Methods program helped me combine my documentary background with community organizing."', a: '— Jordan Williams, Documentary Filmmaker' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
        <div className="text-center mt-lg">
          <div className="stats">
            <div className="stat"><span className="stat-number">89%</span><span className="stat-label">Career Advancement Within 1 Year</span></div>
            <div className="stat"><span className="stat-number">95%</span><span className="stat-label">Improved Professional Confidence</span></div>
            <div className="stat"><span className="stat-number">78%</span><span className="stat-label">Continue Mentor Relationships</span></div>
            <div className="stat"><span className="stat-number">100%</span><span className="stat-label">Complete Professional Portfolio</span></div>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-handshake" title="Industry Partners Make Level Up Possible" id="partnership">
        <div className="grid grid-2">
          <div className="card"><span className="card-icon"><i className="fa-solid fa-building"></i></span><h3 className="card-title">Corporate Training Partners</h3><p className="card-description">Creative agencies and technology companies provide guest instruction and internship opportunities.</p><div className="card-cta"><Link href="/partner" className="btn btn-accent">Become a Training Partner</Link></div></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-chalkboard-user"></i></span><h3 className="card-title">Professional Mentors</h3><p className="card-description">Working professionals co-facilitate workshops and provide ongoing mentorship.</p><div className="card-cta"><Link href="/contact" className="btn btn-accent">Join as a Mentor</Link></div></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-clipboard-list" title="Ready to Level Up Your Creative Career?">
        <div className="grid grid-2">
          <div>
            <h3>Application Process</h3>
            <ol style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1rem' }}><strong>Workshop Selection:</strong> Review descriptions and select your track</li>
              <li style={{ marginBottom: '1rem' }}><strong>Application:</strong> Submit portfolio samples and goals statement</li>
              <li style={{ marginBottom: '1rem' }}><strong>Interview:</strong> Brief conversation with facilitators</li>
              <li><strong>Confirmation:</strong> Receive acceptance with preparation materials</li>
            </ol>
            <h3>Investment</h3>
            <p>Workshop fees range from $500-1,200. Financial aid and payment plans available. No one turned away for financial reasons.</p>
          </div>
          <div>
            <h3>Application Deadlines</h3>
            <p><strong>Fall Workshops:</strong> Applications due August 15<br /><strong>Spring Workshops:</strong> Applications due January 15<br /><strong>Summer Intensives:</strong> Applications due May 1</p>
          </div>
        </div>
        <div className="text-center mt-lg">
          <div className="btn-group"><Link href="/contact" className="btn btn-primary">Start Your Application</Link><Link href="/contact" className="btn btn-accent">Schedule Info Session</Link></div>
        </div>
      </Section>
    </>
  )
}
