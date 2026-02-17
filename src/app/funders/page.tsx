import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'For Funders' }

export default function FundersPage() {
  return (
    <>
      <Hero title="Beyond Programming: Infrastructure for Equity" lead="E4 Youth creates scalable, community-informed pathways that connect storytelling, digital literacy, and workforce readiness." bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop" buttons={[{ label: 'Explore Partnership Models', href: '#partnership-models', variant: 'primary' }, { label: 'Review Impact Data', href: '/impact', variant: 'secondary' }]} />

      <Section icon="📈" title="Closing Critical Gaps in Youth Development" lead="Traditional youth programming creates artificial divisions between soft and hard skills. E4 Youth bridges them through storytelling.">
        <div className="grid grid-2">
          {[
            { icon: '🔌', title: 'Narrative-Professional Disconnect', desc: 'Young people develop identity and skills in isolation from career pathways' },
            { icon: '💻', title: 'Digital Divide', desc: 'Unequal access to professional-grade creative technology and mentorship' },
            { icon: '📁', title: 'Portfolio Gap', desc: 'Students graduate without compelling evidence of their capabilities' },
            { icon: '🔗', title: 'Network Isolation', desc: 'Limited connections between emerging talent and established professionals' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon">{c.icon}</span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="⚙️" title="Why Storytelling is Workforce Development" lead="Storytelling isn't enrichment—it's infrastructure that builds communication, technical, and professional competencies.">
        <div className="grid grid-2">
          {[
            { title: 'Technical Skills Development', items: ['Industry-standard software proficiency', 'Digital media production and editing', 'Data visualization and presentation design', 'Professional communication platforms'] },
            { title: 'Professional Competency Building', items: ['Portfolio development and personal branding', 'Interview and presentation skills', 'Project management and collaboration', 'Client communication and feedback integration'] },
            { title: 'Community Connection Systems', items: ['Mentorship networks with industry professionals', 'Peer learning cohorts', 'Public presentation opportunities', 'Partnership pathways with educational and corporate partners'] },
            { title: 'Civic Engagement Infrastructure', items: ['Community history documentation and preservation', 'Public memory projects', 'Cross-generational knowledge exchange', 'Leadership development through community storytelling'] },
          ].map(c => (
            <div className="card" key={c.title}>
              <h3 className="card-title">{c.title}</h3>
              <ul className="check-list">{c.items.map(i => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="🤝" title="Flexible Collaboration Approaches" id="partnership-models">
        <div className="grid grid-2">
          {[
            { icon: '⚙️', title: 'Program Development Partnerships', desc: 'Co-design customized programming', timeline: '3-6 months development, 12-month implementation', investment: '$25,000-75,000' },
            { icon: '🧪', title: 'Pilot Program Funding', desc: 'Support innovation and testing of new program models', timeline: '6-month pilot with 3-month evaluation', investment: '$15,000-40,000' },
            { icon: '📊', title: 'Capacity Building Investments', desc: 'Strengthen infrastructure to expand reach', timeline: 'Focus on staff development, technology, space', investment: '$10,000-100,000+' },
            { icon: '📅', title: 'Public Showcase & Event Sponsorship', desc: 'Support community events celebrating participant work', timeline: 'Quarterly showcases, annual celebration', investment: '$2,500-15,000' },
          ].map(c => (
            <div className="card" key={c.title}>
              <span className="card-icon">{c.icon}</span>
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.desc}</p>
              <ul style={{ fontSize: '0.9rem', marginTop: '1rem' }}>
                <li><strong>Timeline:</strong> {c.timeline}</li>
                <li><strong>Investment:</strong> {c.investment}</li>
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="📊" title="Measurable Impact, Community-Defined Success">
        <div className="grid grid-3">
          <div className="card">
            <h3 className="card-title">Individual Outcomes</h3>
            <div className="stats">
              <div className="stat"><span className="stat-number">85%+</span><span className="stat-label">Portfolio Completion</span></div>
              <div className="stat"><span className="stat-number">75%+</span><span className="stat-label">Post-Program Placement</span></div>
            </div>
          </div>
          <div className="card">
            <h3 className="card-title">Community-Level Impact</h3>
            <ul style={{ fontSize: '0.9rem' }}><li>Intergenerational relationship building</li><li>Community story documentation projects</li><li>Public space activation through storytelling</li></ul>
          </div>
          <div className="card">
            <h3 className="card-title">Systems-Level Change</h3>
            <ul style={{ fontSize: '0.9rem' }}><li>Partner organization capacity building</li><li>Community stakeholder network development</li><li>Policy and practice influence</li></ul>
          </div>
        </div>
        <div className="text-center mt-lg"><div className="btn-group"><Link href="/impact" className="btn btn-accent">View Current Impact Data</Link></div></div>
      </Section>

      <Section icon="🎯" title="Strategic Funding Priorities">
        <div className="grid grid-3">
          <div className="card">
            <h3 className="card-title">Immediate Impact</h3>
            <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.25rem' }}>$5,000-25,000</p>
            <ul><li>Equipment &amp; Technology</li><li>Showcase Events</li><li>Mentor Stipends</li><li>Transportation</li></ul>
          </div>
          <div className="card">
            <h3 className="card-title">Program Expansion</h3>
            <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.25rem' }}>$25,000-75,000</p>
            <ul><li>New Cohort Development</li><li>Curriculum Innovation</li><li>Staff Development</li><li>Community Space</li></ul>
          </div>
          <div className="card">
            <h3 className="card-title">Systems Change</h3>
            <p style={{ fontWeight: 600, color: 'var(--primary)', fontSize: '1.25rem' }}>$75,000+</p>
            <ul><li>Research &amp; Documentation</li><li>Replication Support</li><li>Policy Influence</li><li>Endowment Building</li></ul>
          </div>
        </div>
      </Section>

      <Section icon="📅" title="Begin the Conversation" lead="E4 Youth welcomes partnerships with funders who share our commitment to community-driven youth development.">
        <div className="grid grid-2">
          <div>
            <h3>Partnership Development Process:</h3>
            <ol style={{ paddingLeft: '2rem', lineHeight: 1.8 }}>
              <li><strong>Initial Conversation</strong> — Explore alignment</li>
              <li><strong>Community Introduction</strong> — Meet participants and staff</li>
              <li><strong>Proposal Development</strong> — Co-create partnership structure</li>
              <li><strong>Implementation Planning</strong> — Develop timelines and outcomes</li>
              <li><strong>Ongoing Collaboration</strong> — Regular communication and learning</li>
            </ol>
          </div>
          <div className="card">
            <h3>Contact Information</h3>
            <p><strong>Partnerships Director:</strong><br />partnerships@e4youth.org</p>
            <p><strong>Executive Director:</strong><br />director@e4youth.org</p>
            <p><strong>Main Office:</strong><br />(512) 555-0123</p>
            <div className="btn-group mt-md"><Link href="/contact" className="btn btn-primary">Schedule Initial Meeting</Link></div>
          </div>
        </div>
      </Section>
    </>
  )
}
