import FaIcon from '@/components/FaIcon'
import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Impact & Evaluation' }

export default function ImpactPage() {
  return (
    <>
      <Hero title="Impact Beyond Numbers: Stories of Real Change" lead="E4 Youth measures impact across learning, visibility, and opportunity, capturing growth over time through portfolios, applied work, and progression into next-step pathways." bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop" icon="fa-solid fa-chart-bar" buttons={[{ label: 'View Impact Highlights', href: '#highlights', variant: 'primary' }, { label: 'Partner on Evaluation', href: '#evaluation', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-compass" title="Beyond Traditional Metrics" lead="E4 Youth designs evaluation that honors participant voice, documents community-defined success, and tracks authentic progression.">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-circle-check', title: 'Participant-Centered', desc: 'Success metrics developed with participants' },
            { icon: 'fa-solid fa-users', title: 'Community-Defined', desc: 'Impact indicators reflect community values' },
            { icon: 'fa-solid fa-chart-line', title: 'Longitudinal Tracking', desc: 'We measure growth over time' },
            { icon: 'fa-solid fa-folder-open', title: 'Portfolio-Based', desc: 'Participants document their own learning' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon"><FaIcon iconClass={c.icon} /></span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-cubes" title="Learning, Visibility, and Opportunity">
        <div className="grid grid-3">
          <div className="card">
            <span className="card-icon"><FaIcon iconClass="fa-solid fa-graduation-cap" /></span>
            <h3 className="card-title">Learning</h3>
            <ul className="check-list" style={{ fontSize: '0.9rem' }}>
              <li>92% demonstrate improvement in 3+ technical skill areas</li>
              <li>85% report increased confidence in public speaking</li>
              <li>100% complete professional portfolio projects</li>
            </ul>
          </div>
          <div className="card">
            <span className="card-icon"><FaIcon iconClass="fa-solid fa-bullhorn" /></span>
            <h3 className="card-title">Visibility</h3>
            <ul className="check-list" style={{ fontSize: '0.9rem' }}>
              <li>Work presented to 2,500+ community members</li>
              <li>67% report ongoing mentor relationships</li>
              <li>Featured in 12 local media outlets</li>
            </ul>
          </div>
          <div className="card">
            <span className="card-icon"><FaIcon iconClass="fa-solid fa-door-open" /></span>
            <h3 className="card-title">Opportunity</h3>
            <ul className="check-list" style={{ fontSize: '0.9rem' }}>
              <li>89% enroll in post-secondary education within 12 months</li>
              <li>76% use storytelling skills professionally</li>
              <li>47 internships and 23 full-time positions secured</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-clipboard-list" title="How We Gather and Honor Participant Voice" id="evaluation">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-folder-open', title: 'Portfolio-Based Assessment', desc: 'Participants document their learning through creative portfolios with work samples, reflections, and peer feedback.' },
            { icon: 'fa-solid fa-comments', title: 'Community Feedback Integration', desc: 'Family members, community partners, and mentor networks provide regular feedback on participant growth.' },
            { icon: 'fa-solid fa-microphone', title: 'Longitudinal Participant Interviews', desc: 'Annual interviews use storytelling methodologies to document learning experiences and community connections.' },
            { icon: 'fa-solid fa-handshake', title: 'Partner Organization Evaluation', desc: 'Schools, employers, and community organizations provide feedback on readiness levels and ongoing contribution.' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon"><FaIcon iconClass={c.icon} /></span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-star" title="2024 Impact Snapshot" id="highlights">
        <div className="grid grid-3">
          <div className="card">
            <h3 className="card-title">Participant Development</h3>
            <div className="stats" style={{ textAlign: 'left' }}>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>127</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Active participants</span></div>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>89%</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Retention rate</span></div>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>94%</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Digital literacy improvement</span></div>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Community Partnership</h3>
            <div className="stats" style={{ textAlign: 'left' }}>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>23</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Active partnerships</span></div>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>47</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>History projects completed</span></div>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>12</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>New employer partners</span></div>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Economic Development</h3>
            <div className="stats" style={{ textAlign: 'left' }}>
              <div className="stat"><span className="stat-number" style={{ fontSize: '1.8rem' }}>$127K</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Internship/employment income</span></div>
              <div className="stat"><span className="stat-number" style={{ fontSize: '1.8rem' }}>$34K</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Freelance creative work</span></div>
              <div className="stat"><span className="stat-number" style={{ fontSize: '2rem' }}>234</span><span className="stat-label" style={{ fontSize: '0.9rem' }}>Professional connections</span></div>
            </div>
          </div>
        </div>
        <div className="text-center mt-lg"><Link href="/stories" className="btn btn-primary">See Individual Success Stories</Link></div>
      </Section>

      <Section icon="fa-solid fa-heart" title="Impact in Their Own Words">
        <div className="grid grid-3">
          {[
            { q: '"E4 Youth didn\'t just teach me video editing—it helped me understand my own story and how to use it as a bridge to connect with others."', a: '— Aaliyah, DSP Graduate, Studying Communications at UT' },
            { q: '"My daughter was shy and uncertain about her future. Through Get Creative!, she discovered she\'s a natural leader."', a: '— Maria Santos, Parent' },
            { q: '"Working with E4 Youth taught our organization how to center community voice in our programming."', a: '— David Kim, Community Partner Director' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-rocket" title="Ready to See Impact in Action?">
        <div className="text-center">
          <p className="lead">Whether you&apos;re interested in learning about our evaluation approaches, partnering on research, or seeing how we can help your organization, we&apos;d love to connect.</p>
          <div className="btn-group mt-lg">
            <Link href="/contact" className="btn btn-primary">Contact Our Evaluation Team</Link>
            <Link href="/stories" className="btn btn-accent">Read Success Stories</Link>
            <Link href="/programs" className="btn btn-outline">Explore Programs</Link>
          </div>
          <div className="mt-lg"><p><strong>Evaluation &amp; Research:</strong> impact@e4youth.org<br /><strong>Partnership:</strong> partners@e4youth.org<br /><strong>Phone:</strong> (512) 555-0123</p></div>
        </div>
      </Section>
    </>
  )
}
