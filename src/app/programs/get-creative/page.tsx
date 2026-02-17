import FaIcon from '@/components/FaIcon'
import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Get Creative!' }

export default function GetCreativePage() {
  return (
    <>
      <Hero title="Get Creative! Where Passion Meets Profession" lead="High school students explore creative careers and build professional skills through hands-on projects, industry mentorship, and real-world portfolio development." bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop" buttons={[{ label: 'Apply Now', href: '/contact', variant: 'primary' }, { label: 'Learn More', href: '#program-details', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-palette" title="Creative Skills Meet Professional Development" lead="Get Creative! bridges the gap between high school and career-ready skills, using storytelling and digital media as pathways to professional success." id="program-details">
        <div className="grid grid-2">
          <div className="card"><h3>Program Focus</h3><ul><li>Industry-standard software training</li><li>Professional portfolio development</li><li>Career exploration and networking</li><li>Real client and community projects</li></ul></div>
          <div className="card"><h3>Who This Serves</h3><ul><li><strong>Ages:</strong> High school students (14-18)</li><li><strong>Duration:</strong> Semester programs, summer intensives</li><li><strong>Outcomes:</strong> Professional portfolios, college/career readiness</li></ul></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-tools" title="Professional Skills & Industry Tools">
        <div className="grid grid-3">
          <div className="card"><span className="card-icon"><FaIcon iconClass="fa-solid fa-laptop-code" /></span><h3>Technical Skills</h3><ul><li>Adobe Creative Suite mastery</li><li>Web development basics</li><li>Video production &amp; editing</li><li>Digital photography</li></ul></div>
          <div className="card"><span className="card-icon"><FaIcon iconClass="fa-solid fa-chart-bar" /></span><h3>Professional Skills</h3><ul><li>Client communication</li><li>Project management</li><li>Portfolio presentation</li><li>Interview skills</li></ul></div>
          <div className="card"><span className="card-icon"><FaIcon iconClass="fa-solid fa-handshake" /></span><h3>Career Pathways</h3><ul><li>Creative industry connections</li><li>Internship opportunities</li><li>College program alignment</li><li>Professional mentorship</li></ul></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-star" title="Where Graduates Go">
        <div className="grid grid-3">
          {[
            { q: '"Get Creative! taught me that creativity and business skills go hand in hand. I\'m now studying marketing at UT with a portfolio that really stands out."', a: '— Sarah M., Program Graduate' },
            { q: '"The mentorship connections I made led directly to my internship at a local design firm. I felt prepared and confident from day one."', a: '— Marcus R., Program Alumni' },
            { q: '"I learned technical skills but also how to communicate my ideas professionally. That\'s made all the difference in my freelance work."', a: '— Zoe L., Freelance Designer' },
          ].map(t => <div className="testimonial" key={t.a}><p className="testimonial-quote">{t.q}</p><p className="testimonial-author">{t.a}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-door-open" title="Ready to Get Creative?">
        <div className="grid grid-2">
          <div className="card"><h3>Application Process</h3><ol><li>Submit online application with portfolio samples</li><li>Attend information session or portfolio review</li><li>Complete brief interview process</li><li>Begin your creative professional journey</li></ol></div>
          <div className="card"><h3>Program Details</h3><p><strong>Fall/Spring:</strong> 16-week semester programs<br /><strong>Summer:</strong> 8-week intensive<br /><strong>Schedule:</strong> After school or Saturday options<br /><strong>Cost:</strong> Sliding scale with scholarships available</p></div>
        </div>
        <div className="text-center mt-lg"><Link href="/contact" className="btn btn-primary">Apply Now</Link></div>
      </Section>
    </>
  )
}
