import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Stories & Showcases' }

export default function StoriesPage() {
  return (
    <>
      <Hero title="Real Stories, Real Impact, Real Community Change" lead="Stories & Showcases highlight youth voices, project outcomes, and public storytelling experiences across E4 Youth programs." bgImage="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop" icon="fa-solid fa-microphone" buttons={[{ label: 'Explore Stories', href: '#stories', variant: 'primary' }, { label: 'Attend a Showcase', href: '#showcases', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-heart" title="More Than Success Stories: Authentic Community Narratives">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-user', title: 'Participant Ownership', desc: 'Stories are told by participants in their own words and on their own terms' },
            { icon: 'fa-solid fa-users', title: 'Community Context', desc: 'Individual growth is always connected to broader community relationships' },
            { icon: 'fa-solid fa-road', title: 'Ongoing Journey', desc: 'We highlight progress and learning rather than just completion moments' },
            { icon: 'fa-solid fa-star', title: 'Diverse Outcomes', desc: 'Success takes many forms, from creative confidence to career advancement' },
          ].map(c => <div className="card" key={c.title}><span className="card-icon"><i className={c.icon}></i></span><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-users" title="Voices From Our Community" id="stories">
        <div className="grid grid-2">
          <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
            <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop" alt="Young woman with camera" className="card-image" />
            <h3 className="card-title">Maria&apos;s Story: From Shy Student to Community Documentary Filmmaker</h3>
            <p style={{ fontSize: '0.9rem' }}><strong>Program:</strong> DSP → Get Creative! → HIP<br /><strong>Timeline:</strong> 4 years with E4 Youth<br /><strong>Current:</strong> College sophomore studying Media Arts</p>
            <blockquote className="blockquote">&quot;I started DSP in middle school because my mom thought it would help me make friends. I was really shy. The first day, we learned how to interview our family members about their immigration stories, and suddenly I realized my quiet listening skills were actually superpowers for storytelling.&quot;</blockquote>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>Recent Work: &quot;Vanishing Austin: Small Business Stories&quot; - 6-part documentary series featured in local film festival</p>
          </div>
          <div className="card" style={{ padding: 'var(--spacing-xl)' }}>
            <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop" alt="Young person working on UX design" className="card-image" />
            <h3 className="card-title">Jordan&apos;s Story: Creative Technology Career Through Community Connection</h3>
            <p style={{ fontSize: '0.9rem' }}><strong>Program:</strong> Get Creative! → E4 Level Up Workshops<br /><strong>Timeline:</strong> 2 years with E4 Youth<br /><strong>Current:</strong> UX Designer at local tech company, volunteer mentor</p>
            <blockquote className="blockquote">&quot;I came to Get Creative! thinking I wanted to be a graphic designer, but I had no idea how many different creative careers existed. The program introduced me to UX design, and suddenly I understood how creativity could solve real problems for people.&quot;</blockquote>
            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>Current Role: Lead UX designer for Austin nonprofit client portal</p>
          </div>
        </div>
        <div className="text-center mt-lg"><Link href="/contact" className="btn btn-primary">Share Your Story</Link></div>
      </Section>

      <Section icon="fa-solid fa-house" title="Family and Community Perspectives">
        <div className="grid grid-3">
          {[
            { q: '"When my daughter started DSP, she could barely speak up in class. Now she\'s presenting to city council meetings and planning to study journalism."', a: '— Rosa Martinez, Parent' },
            { q: '"My son was struggling in traditional school, but E4 Youth recognized his creativity and gave him hands-on learning that clicked."', a: '— Kenneth Williams, Parent' },
            { q: '"I\'ve watched E4 Youth participants become some of our most engaged young advocates."', a: '— Dr. Angela Chen, Community Organization Director' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-images" title="Community Portfolio Showcases" id="showcases">
        <div className="grid grid-3">
          {[
            { img: 'https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&h=600&fit=crop', title: '"Voices of East Austin" Documentary Series', desc: 'HIP participants created a 5-part documentary series highlighting longtime East Austin residents.', impact: 'Featured at Austin Film Festival, screened at community centers' },
            { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', title: 'Community Resource Platform', desc: 'Get Creative! participants designed a multilingual web platform connecting community members with resources.', impact: 'Serving 300+ community members monthly' },
            { img: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop', title: 'Austin History AR Experience', desc: 'Level Up workshop participants created an augmented reality tour highlighting overlooked Austin history.', impact: 'Downloaded 500+ times, used by schools' },
          ].map(c => (
            <div className="card" key={c.title}>
              <img src={c.img} alt={c.title} className="card-image" />
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.desc}</p>
              <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>Impact: {c.impact}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-lg">
          <div className="stats">
            <div className="stat"><span className="stat-number">47</span><span className="stat-label">Community Projects</span></div>
            <div className="stat"><span className="stat-number">2,500+</span><span className="stat-label">Community Members Reached</span></div>
            <div className="stat"><span className="stat-number">12</span><span className="stat-label">Local Media Features</span></div>
            <div className="stat"><span className="stat-number">85%</span><span className="stat-label">Projects Continue Beyond Program</span></div>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-hands-clapping" title="Be Part of the Story">
        <div className="grid grid-3">
          <div className="card"><span className="card-icon"><i className="fa-solid fa-plus"></i></span><h3 className="card-title">Share Your Story</h3><p className="card-description">Current and former participants can contribute their stories.</p><div className="card-cta"><Link href="/contact" className="btn btn-accent">Submit Your Story</Link></div></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-calendar"></i></span><h3 className="card-title">Attend Showcases</h3><p className="card-description">Join community events to see participant work and support youth voices.</p><div className="card-cta"><Link href="/contact" className="btn btn-accent">View Event Calendar</Link></div></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-handshake"></i></span><h3 className="card-title">Support Community Voices</h3><p className="card-description">Professional mentors and organizations can support showcase events.</p><div className="card-cta"><Link href="/partner" className="btn btn-accent">Partner With Us</Link></div></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-envelope" title="Connect With Community Stories">
        <div className="text-center">
          <p><strong>Stories &amp; Showcases:</strong> stories@e4youth.org<br /><strong>Event Information:</strong> events@e4youth.org<br /><strong>Media &amp; Press:</strong> media@e4youth.org<br /><strong>Phone:</strong> (512) 555-0123</p>
          <div className="btn-group mt-lg"><Link href="/contact" className="btn btn-primary">Contact Us</Link><Link href="/programs" className="btn btn-accent">Explore Programs</Link><Link href="/impact" className="btn btn-outline">See Our Impact</Link></div>
        </div>
      </Section>
    </>
  )
}
