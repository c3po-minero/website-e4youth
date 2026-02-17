import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'About E4 Youth' }

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Community-Rooted. Story-Driven. Future-Focused."
        lead="E4 Youth is a community-rooted organization using storytelling to unlock equity and opportunity across generations. We believe every voice has value, every story has power, and every young person deserves authentic pathways to success."
        bgImage="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&h=1080&fit=crop"
        buttons={[
          { label: 'Explore Our Programs', href: '/programs', variant: 'primary' },
          { label: 'Partner With Our Mission', href: '/partner', variant: 'secondary' },
        ]}
      />

      <Section icon="fa-solid fa-heart" title="Built From Community, For Community">
        <div className="grid grid-2">
          <div>
            <p>E4 Youth emerged from a simple but powerful recognition: traditional youth development often separates creativity from career readiness, treats storytelling as enrichment rather than infrastructure, and focuses on fixing young people instead of amplifying their existing strengths.</p>
            <p>We took a different approach.</p>
            <p>Founded in Austin, Texas, E4 Youth was created by and with community members who understood that young people don&apos;t need more programs that prepare them for someone else&apos;s vision of success. They need authentic opportunities to develop their voices, build professional skills, and contribute meaningfully to their communities while creating clear pathways to the futures they envision for themselves.</p>
            <p>From day one, we&apos;ve operated on the principle that <strong>storytelling is workforce and civic infrastructure</strong>—not just personal expression, but a fundamental tool for communication, professional development, community building, and social change.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop" alt="Diverse group collaborating on storytelling projects" className="card-image" />
            <h3>Our community-centered approach means:</h3>
            <ul className="check-list">
              <li><strong>Youth leadership</strong> in program design and evaluation</li>
              <li><strong>Family engagement</strong> that honors community knowledge and priorities</li>
              <li><strong>Intergenerational collaboration</strong> that connects wisdom with innovation</li>
              <li><strong>Local hiring</strong> and professional development that strengthens community capacity</li>
              <li><strong>Authentic partnerships</strong> based on mutual benefit and shared accountability</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-lg">
          <Link href="/impact" className="btn btn-accent">See Our Community Impact</Link>
        </div>
      </Section>

      <Section icon="fa-solid fa-compass" title="How We Work: The Four E's That Drive Everything">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-handshake', title: 'Engage: Meeting Young People Where They Are', desc: 'We start with authentic relationship building and recognition of young people\'s existing strengths, experiences, and aspirations.', items: ['Programming that builds on participants\' interests and cultural backgrounds', 'Flexible engagement that accommodates work, school, and family responsibilities', 'Peer mentorship and collaborative learning'] },
            { icon: 'fa-solid fa-graduation-cap', title: 'Educate: Skills That Matter, Learning That Lasts', desc: 'Our educational approach connects creative exploration with professional skill development.', items: ['Digital production skills using industry-standard tools', 'Communication expertise through storytelling and presentation', 'Research capabilities through oral history and community investigation'] },
            { icon: 'fa-solid fa-bullhorn', title: 'Empower: Voice, Agency, and Professional Confidence', desc: 'We create platforms and opportunities for young voices to be heard by authentic audiences.', items: ['Public presentations to community leaders and industry professionals', 'Professional portfolio development', 'Leadership roles in program planning and mentorship'] },
            { icon: 'fa-solid fa-rocket', title: 'Elevate: Clear Pathways to Opportunity', desc: 'Participants leave our programs with more than skills and confidence—they have concrete next steps.', items: ['College readiness with portfolios and scholarship connections', 'Career preparation through internships and professional networks', 'Community leadership opportunities'] },
          ].map((e) => (
            <div className="card" key={e.title}>
              <span className="card-icon"><i className={e.icon}></i></span>
              <h3 className="card-title">{e.title}</h3>
              <p className="card-description">{e.desc}</p>
              <div className="card-cta">
                <strong>What This Looks Like:</strong>
                <ul style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                  {e.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-chart-bar" title="Measurable Change, Lasting Transformation">
        <div className="stats">
          <div className="stat"><span className="stat-number">150+</span><span className="stat-label">Youth Participants Annually</span></div>
          <div className="stat"><span className="stat-number">95%</span><span className="stat-label">Complete Programs with Professional Portfolios</span></div>
          <div className="stat"><span className="stat-number">85%</span><span className="stat-label">Advance to Next Opportunity Within 6 Months</span></div>
          <div className="stat"><span className="stat-number">30+</span><span className="stat-label">Community Partnerships</span></div>
        </div>
        <div className="text-center mt-lg">
          <Link href="/impact" className="btn btn-primary">Read Detailed Impact Reports</Link>
        </div>
      </Section>

      <Section icon="fa-solid fa-trophy" title="Community Recognition and Appreciation">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Awards and Recognition</h3>
            <ul className="check-list">
              <li><strong>Austin Community Impact Award (2024):</strong> Recognition for innovative community-centered youth development</li>
              <li><strong>Digital Storytelling Excellence (2023):</strong> Texas Council for Community Arts award</li>
              <li><strong>Workforce Development Innovation (2023):</strong> Austin Chamber of Commerce recognition</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">Media Coverage</h3>
            <ul className="check-list">
              <li><strong>Austin American-Statesman:</strong> &quot;Local Organization Uses Storytelling to Build Career Pathways&quot;</li>
              <li><strong>KUT Public Radio:</strong> Featured programming on youth development innovation</li>
              <li><strong>Austin Chronicle:</strong> Recognition as &quot;Best Community Youth Programming&quot;</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-door-open" title="Join Our Community: There's a Place for Everyone">
        <div className="grid grid-2">
          <div className="card">
            <span className="card-icon"><i className="fa-solid fa-users"></i></span>
            <h3 className="card-title">For Young People &amp; Families</h3>
            <p className="card-description"><strong>Ages 12-18:</strong> Explore Digital Storytelling Program, Get Creative!, or community workshops<br /><strong>Ages 18-25:</strong> Engage with Heritage &amp; Innovation Pathways, E4 Level Up, or mentorship opportunities<br /><strong>All Ages:</strong> Attend E4 Live events, community showcases, and family programming</p>
            <div className="card-cta"><Link href="/programs" className="btn btn-primary">Explore Program Options</Link></div>
          </div>
          <div className="card">
            <span className="card-icon"><i className="fa-solid fa-handshake"></i></span>
            <h3 className="card-title">For Community Members &amp; Organizations</h3>
            <p className="card-description"><strong>Professionals:</strong> Provide mentorship, internship opportunities, or professional development workshops<br /><strong>Organizations:</strong> Collaborate on curriculum development, resource sharing, and community capacity building<br /><strong>Community Leaders:</strong> Share knowledge through oral history projects and cultural preservation initiatives</p>
            <div className="card-cta"><Link href="/partner" className="btn btn-primary">Explore Partnership Opportunities</Link></div>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-heart" title="Ready to Join Our Story?" lead="Whether you're a young person ready to discover your potential, a family seeking community connection, a professional wanting to give back, or an organization interested in collaboration—E4 Youth has a place for you.">
        <div className="btn-group">
          <Link href="/contact" className="btn btn-primary">Connect With Us</Link>
          <Link href="/programs" className="btn btn-accent">Discover Your Program</Link>
          <Link href="/partner" className="btn btn-outline">Partner With Our Mission</Link>
        </div>
        <div className="text-center mt-lg">
          <p><strong>Contact Info:</strong><br />Email: hello@e4youth.org | Phone: (512) 555-0123 | Austin, TX</p>
        </div>
      </Section>
    </>
  )
}
