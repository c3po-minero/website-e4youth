import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'WOW Heritage Center' }

export default function HeritageCenterPage() {
  return (
    <>
      <Hero title="A Physical Home for Community Stories" lead="The WOW Heritage Center serves as E4 Youth's community hub—a welcoming space where neighbors gather to share stories, learn new skills, access resources, and build connections." bgImage="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=1080&fit=crop" icon="fa-solid fa-house" buttons={[{ label: 'Visit the Center', href: '#contact', variant: 'primary' }, { label: 'Reserve Space', href: '#rental', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-house-chimney" title="More Than a Building - A Community Home" lead="The WOW Heritage Center operates as both a neighborhood gathering place and a specialized hub for community storytelling work.">
        <div className="grid grid-2">
          <div className="card"><span className="card-icon"><i className="fa-solid fa-users"></i></span><h3 className="card-title">Community Gathering Space</h3><p className="card-description">Free, accessible venue for neighborhood meetings, celebrations, and informal connection</p></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-video"></i></span><h3 className="card-title">Storytelling Production Hub</h3><p className="card-description">Professional-grade equipment and technical support for community story creation</p></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-graduation-cap"></i></span><h3 className="card-title">Learning &amp; Workshop Center</h3><p className="card-description">Regular programming in digital literacy, creative skills, and community engagement</p></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-book"></i></span><h3 className="card-title">Community Archive &amp; Resource Center</h3><p className="card-description">Physical and digital archives accessible to community members and researchers</p></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-building" title="Designed for Community, Built for Stories">
        <div className="grid grid-3">
          {[
            { img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop', title: 'Main Community Room', desc: 'Capacity: 75 people for events, 40 for workshops. Flexible seating, projection system, live-streaming capability.' },
            { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop', title: 'Digital Storytelling Lab', desc: '15 workstations with professional cameras, audio recording, editing computers. Adobe Creative Suite.' },
            { img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop', title: 'Community Archive & Research Area', desc: 'Climate-controlled storage, digitization equipment, research tables. Open research hours.' },
            { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop', title: 'Kitchen & Hospitality Space', desc: 'Full kitchen facilities for event catering, cooking workshops, and community meals.' },
            { img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop', title: 'Flexible Workshop Rooms', desc: 'Two rooms that can be combined or separate. 12-15 people each. Moveable furniture.' },
            { img: 'https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=800&h=600&fit=crop', title: 'Outdoor Community Space', desc: 'Covered pavilion, garden areas, performance space, children\'s play area.' },
          ].map(c => <div className="card" key={c.title}><img src={c.img} alt={c.title} className="card-image" width={800} height={600} loading="lazy" /><h3 className="card-title">{c.title}</h3><p className="card-description">{c.desc}</p></div>)}
        </div>
      </Section>

      <Section icon="fa-solid fa-key" title="Your Community Space - Use It!" lead="The WOW Heritage Center prioritizes community use and keeps rental costs low to ensure accessibility." id="rental">
        <div className="grid grid-2">
          <div className="card"><span className="card-icon"><i className="fa-solid fa-users"></i></span><h3 className="card-title">Community Organization Meetings</h3><p className="card-description"><strong>Rate:</strong> Free for registered community organizations<br /><strong>Includes:</strong> Basic room setup, AV equipment, kitchen access</p></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-cake-candles"></i></span><h3 className="card-title">Private Community Events</h3><p className="card-description"><strong>Rate:</strong> $50-150 sliding scale<br /><strong>Includes:</strong> Space rental, basic setup, kitchen access</p></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-graduation-cap"></i></span><h3 className="card-title">Nonprofit &amp; Educational Events</h3><p className="card-description"><strong>Rate:</strong> $25-100 sliding scale<br /><strong>Includes:</strong> Space, AV support, promotional support</p></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-briefcase"></i></span><h3 className="card-title">Small Business &amp; Professional Use</h3><p className="card-description"><strong>Rate:</strong> Market rate ($150-300)<br /><strong>Includes:</strong> Professional space rental with full AV and hospitality support</p></div>
        </div>
        <div className="text-center mt-lg"><Link href="#contact" className="btn btn-primary">Reserve Community Space</Link></div>
      </Section>

      <Section icon="fa-solid fa-map" title="Come See Us - You're Always Welcome" id="contact">
        <div className="grid grid-2">
          <div>
            <h3>WOW Heritage Center</h3>
            <p><strong>Address:</strong> 1234 E 12th Street, Austin, TX 78702<br /><strong>Phone:</strong> (512) 555-0131<br /><strong>Email:</strong> heritage@e4youth.org</p>
            <h4>Operating Hours</h4>
            <p><strong>Monday-Friday:</strong> 10:00AM - 8:00PM<br /><strong>Saturday:</strong> 9:00AM - 6:00PM<br /><strong>Sunday:</strong> 12:00PM - 6:00PM</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop" alt="WOW Heritage Center" style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--spacing-md)' }} />
            <h4>Contact &amp; Questions</h4>
            <p><strong>General:</strong> heritage@e4youth.org<br /><strong>Space Rental:</strong> events@e4youth.org<br /><strong>Archive:</strong> archive@e4youth.org<br /><strong>Volunteering:</strong> volunteer@e4youth.org</p>
            <div className="btn-group mt-md"><Link href="/contact" className="btn btn-accent">Contact Us</Link></div>
          </div>
        </div>
      </Section>
    </>
  )
}
