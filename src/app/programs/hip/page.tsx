import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Heritage & Innovation Pathways' }

export default function HIPPage() {
  return (
    <>
      <Hero title="Heritage & Innovation Pathways" lead="College students and emerging adults lead community projects while building advanced professional skills, creating public impact, and developing career-defining networks." bgImage="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop" buttons={[{ label: 'Apply for HIP', href: '/contact', variant: 'primary' }, { label: 'Explore Opportunities', href: '#program-details', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-mountain" title="Where Leadership Meets Community Impact" lead="HIP participants don't just learn skills—they apply them in real community contexts, creating meaningful change while building professional experience." id="program-details">
        <div className="grid grid-2">
          <div className="card"><h3>Program Focus</h3><ul><li>Community-partnered research and storytelling projects</li><li>Advanced digital production and project management</li><li>Public presentation and community engagement leadership</li><li>Professional network development and career pathway planning</li></ul></div>
          <div className="card"><h3>Who This Serves</h3><ul><li><strong>Ages:</strong> College students and emerging adults (18-25)</li><li><strong>Duration:</strong> Year-long commitments, project-based work</li><li><strong>Outcomes:</strong> Public-facing work, employment connections, community impact</li></ul></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-clipboard-list" title="Current HIP Projects">
        <div className="grid grid-3">
          {[
            { img: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=800&h=600&fit=crop', title: 'What Once Was AR Experience', desc: 'Leading the development and community engagement for our augmented reality historical walking tour.' },
            { img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop', title: 'Heritage Documentation Initiative', desc: 'Partnering with community elders to create multimedia archives of neighborhood stories.' },
            { img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop', title: 'Youth Program Leadership', desc: 'Designing and facilitating workshops for DSP and Get Creative! participants.' },
          ].map(c => <div className="card" key={c.title}><img src={c.img} alt={c.title} className="card-image" width={800} height={600} loading="lazy" /><h3>{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-briefcase" title="Professional Skills & Networks">
        <div className="grid grid-2">
          <div className="card"><h3>Advanced Skills Development</h3><ul><li>Grant writing and nonprofit administration</li><li>Community engagement and organizing strategies</li><li>Professional project management methodologies</li><li>Public speaking and media relations</li><li>Advanced digital production techniques</li></ul></div>
          <div className="card"><h3>Career Pathway Support</h3><ul><li>Direct connections to Austin nonprofit and creative sectors</li><li>Professional reference development</li><li>Portfolio and resume consultation</li><li>Graduate school and career planning support</li><li>Networking events and professional introductions</li></ul></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-trophy" title="HIP Alumni Impact">
        <div className="grid grid-3">
          {[
            { q: '"HIP gave me real leadership experience I could point to in job interviews. I\'m now a program coordinator at a major nonprofit."', a: '— Maya S., Nonprofit Program Coordinator' },
            { q: '"The community connections I made through HIP led to my current role in city government."', a: '— Carlos M., Austin City Council Staff' },
            { q: '"HIP prepared me for graduate school in ways my undergrad never could."', a: '— Jennifer L., Graduate Student, Social Work' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-door-open" title="Ready to Lead?">
        <div className="grid grid-2">
          <div className="card"><h3>Application Requirements</h3><ul><li>Current college enrollment or recent graduation</li><li>Demonstrated interest in community impact</li><li>Portfolio or examples of previous project work</li><li>Availability for year-long commitment</li><li>Strong communication and collaboration skills</li></ul></div>
          <div className="card"><h3>Application Process</h3><ol><li>Submit application with portfolio and essay</li><li>Participate in group interview and project simulation</li><li>Meet with current HIP participants and staff</li><li>Begin leadership journey with community orientation</li></ol></div>
        </div>
        <div className="text-center mt-lg"><div className="btn-group"><Link href="/contact" className="btn btn-primary">Apply Now</Link></div></div>
      </Section>
    </>
  )
}
