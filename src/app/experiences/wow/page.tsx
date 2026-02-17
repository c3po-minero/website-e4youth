import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'What Once Was: AR Historical Experience' }

export default function WOWPage() {
  return (
    <>
      <Hero title="What Once Was: AR Historical Experience" lead="Walk through Austin's streets and discover the untold stories of Black history through immersive augmented reality experiences created by and for the community." bgImage="https://images.unsplash.com/photo-1617791160588-241658c0f566?w=1920&h=1080&fit=crop" buttons={[{ label: 'Download AR App', href: '#', variant: 'primary' }, { label: 'Plan Your Tour', href: '#tour-info', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-map-pin" title="Experience History Where It Happened" lead="Using your smartphone, discover historical markers that come alive with stories, images, and voices from Austin's Black community leaders and historians." id="tour-info">
        <div className="grid grid-3">
          <div className="card"><span className="card-icon"><i className="fa-solid fa-mobile-screen"></i></span><h3>How It Works</h3><ol><li>Download the WOW app</li><li>Visit participating locations</li><li>Point your phone at AR markers</li><li>Experience immersive stories</li></ol></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-map"></i></span><h3>Featured Locations</h3><ul><li>Historic East Austin neighborhoods</li><li>Former Blackshear School site</li><li>Victory Grill and music venues</li><li>Community gathering spaces</li></ul></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-users"></i></span><h3>Community Voices</h3><ul><li>Elder community storytellers</li><li>Local historians and researchers</li><li>Youth documentarians</li><li>Neighborhood residents</li></ul></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-handshake" title="Community-Developed Stories">
        <div className="grid grid-2">
          <div>
            <h3>Created By Community</h3>
            <p>Every story in the What Once Was experience comes directly from community members — elders who lived these stories, historians who researched them, and young people who helped bring them to digital life.</p>
            <p>This isn&apos;t history told about our community — it&apos;s history told by our community.</p>
          </div>
          <div className="card">
            <h3>Tour Highlights</h3>
            <ul><li><strong>The Jacob Fontaine Story:</strong> Discover the legacy of East Austin&apos;s influential community leader</li><li><strong>Music Heritage:</strong> Experience the vibrant history of Austin&apos;s Black music scene</li><li><strong>Educational Legacy:</strong> Learn about schools and educators who shaped generations</li><li><strong>Business District:</strong> Explore the thriving commercial life of historic Black Austin</li></ul>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-calendar" title="Join a Guided Tour">
        <div className="grid grid-2">
          <div className="card">
            <h3>Monthly Community Tours</h3>
            <p>Join community historians and story creators for guided walking tours that combine AR technology with live storytelling.</p>
            <p><strong>Next Tours:</strong><br />March 15, 2025 - 10:00 AM<br />April 19, 2025 - 2:00 PM<br />May 17, 2025 - 10:00 AM</p>
          </div>
          <div className="card">
            <h3>Private Group Tours</h3>
            <p>Perfect for schools, organizations, and families who want a personalized experience.</p>
            <p><strong>Available:</strong> Weekdays and weekends<br /><strong>Duration:</strong> 90 minutes<br /><strong>Group Size:</strong> 5-20 people</p>
          </div>
        </div>
        <div className="text-center mt-lg"><Link href="/contact" className="btn btn-primary">Book a Tour</Link></div>
      </Section>
    </>
  )
}
