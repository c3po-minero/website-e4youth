import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Programs' }

export default function ProgramsPage() {
  return (
    <>
      <Hero title="Programs That Grow With You" lead="E4 Youth programs create a connected ecosystem of learning opportunities that meet young people where they are and support their growth over time." bgImage="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop" buttons={[{ label: 'Find Your Program', href: '#program-pathways', variant: 'primary' }, { label: 'Schedule a Visit', href: '/contact', variant: 'secondary' }]} />

      <Section icon="🔗" title="Beyond Standalone Classes: An Ecosystem Approach" lead="E4 Youth designs programs as a connected ecosystem where participants can enter at multiple points, progress naturally between levels, and return to contribute as mentors and leaders.">
        <div className="grid grid-2">
          {[
            { icon: '🚪', title: 'Multiple Entry Points', desc: "Whether you're 8 or 25, there's a place to begin your storytelling journey" },
            { icon: '📈', title: 'Progressive Skill Building', desc: 'Each program level prepares participants for the next stage of learning and opportunity' },
            { icon: '👥', title: 'Community Connection', desc: 'Older participants mentor younger ones, creating sustainable learning communities' },
            { icon: '💼', title: 'Real-World Application', desc: 'Every program connects to authentic opportunities for growth and contribution' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon">{c.icon}</span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="🗺️" title="Three Core Programs, Endless Possibilities" id="program-pathways">
        <div className="grid grid-3">
          <div className="card">
            <span className="card-icon">🌱</span>
            <h3 className="card-title">Foundation Level: Digital Storytelling Program (DSP)</h3>
            <p><strong>Ages:</strong> Elementary and middle school students, families</p>
            <p><strong>Duration:</strong> 6-8 week sessions, ongoing workshops</p>
            <p><strong>Focus:</strong> Creative confidence, basic digital literacy, storytelling fundamentals</p>
            <p><strong>Outcomes:</strong> Foundation skills, program readiness, family engagement</p>
            <div className="card-cta"><Link href="/programs/dsp" className="btn btn-primary">Learn More About DSP</Link></div>
          </div>
          <div className="card">
            <span className="card-icon">🎨</span>
            <h3 className="card-title">Development Level: Get Creative!</h3>
            <p><strong>Ages:</strong> High school students</p>
            <p><strong>Duration:</strong> Semester-long programs, summer intensives</p>
            <p><strong>Focus:</strong> Career exploration, portfolio development, professional skills</p>
            <p><strong>Outcomes:</strong> College and career readiness, professional portfolios, mentor networks</p>
            <div className="card-cta"><Link href="/programs/get-creative" className="btn btn-primary">Explore Get Creative!</Link></div>
          </div>
          <div className="card">
            <span className="card-icon">🏔️</span>
            <h3 className="card-title">Leadership Level: Heritage &amp; Innovation Pathways (HIP)</h3>
            <p><strong>Ages:</strong> College students and emerging adults</p>
            <p><strong>Duration:</strong> Year-long commitments, project-based work</p>
            <p><strong>Focus:</strong> Advanced projects, community leadership, professional development</p>
            <p><strong>Outcomes:</strong> Public-facing work, employment connections, community impact</p>
            <div className="card-cta"><Link href="/programs/hip" className="btn btn-primary">Discover HIP Opportunities</Link></div>
          </div>
        </div>
      </Section>

      <Section icon="🏆" title="Real Growth, Real Impact">
        <div className="grid grid-3">
          {[
            { quote: '"My daughter started in DSP when she was 10. Three years later, she\'s in Get Creative! and talking about studying graphic design in college."', author: '— Maria Santos, Parent', tag: 'DSP to Get Creative! Success' },
            { quote: '"Get Creative! taught me the technical skills, but HIP taught me how to use those skills to make a difference."', author: '— Jordan Williams, HIP Participant', tag: 'Get Creative! to HIP Leadership' },
            { quote: '"I\'ve been with E4 Youth for 4 years now. The programs don\'t just teach you skills—they help you find your voice."', author: '— Alex Chen, Program Alumni', tag: 'Full Pathway Journey' },
          ].map(t => (
            <div className="testimonial" key={t.author}>
              <p className="testimonial-quote">{t.quote}</p>
              <p className="testimonial-author">{t.author}</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', marginTop: '0.5rem' }}><strong>{t.tag}</strong></p>
            </div>
          ))}
        </div>
        <div className="text-center mt-lg"><Link href="/stories" className="btn btn-primary">Read More Success Stories</Link></div>
      </Section>

      <Section icon="🚪" title="Ready to Begin Your Journey?">
        <div className="grid grid-3">
          {[
            { icon: '👥', title: 'For Youth & Families', steps: ['Explore our programs and identify the best fit', 'Attend a community showcase or information session', 'Complete application and participate in orientation', 'Begin your storytelling journey'] },
            { icon: '🏫', title: 'For Educators & Organizations', steps: ['Contact us to discuss bringing programming to your community', 'Participate in program observation and planning', 'Collaborate on customized programming', 'Launch partnership with ongoing support'] },
            { icon: '🤝', title: 'For Community Partners', steps: ['Explore collaboration opportunities', 'Meet with staff to discuss partnership models', 'Develop agreement that benefits all parties', 'Implement partnership with shared learning'] },
          ].map(c => (
            <div className="card" key={c.title}>
              <span className="card-icon">{c.icon}</span>
              <h3 className="card-title">{c.title}</h3>
              <ol style={{ textAlign: 'left', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
                {c.steps.map(s => <li key={s}>{s}</li>)}
              </ol>
            </div>
          ))}
        </div>
        <div className="text-center mt-lg">
          <div className="btn-group">
            <Link href="/contact" className="btn btn-primary">Start the Conversation</Link>
          </div>
        </div>
      </Section>

      <Section icon="💬" title="Questions? We're Here to Help">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Program Information</h3>
            <p><strong>Phone:</strong> (512) 555-0123<br /><strong>Email:</strong> programs@e4youth.org<br /><strong>Office Hours:</strong> Monday-Friday, 9AM-5PM</p>
          </div>
          <div className="card">
            <h3 className="card-title">Application Deadlines</h3>
            <ul className="check-list">
              <li><strong>Fall Programs:</strong> Applications due August 1st</li>
              <li><strong>Spring Programs:</strong> Applications due January 1st</li>
              <li><strong>Summer Intensives:</strong> Applications due May 1st</li>
              <li><strong>Rolling Admission:</strong> Available for some programs</li>
            </ul>
            <div className="info-box">
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--secondary)' }}>Financial Support Available</p>
              <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>Need-based scholarships available for all programs. No one is turned away for financial reasons.</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
