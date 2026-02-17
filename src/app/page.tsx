import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import FaIcon from '@/components/FaIcon'

export default function Home() {
  return (
    <>
      <Hero
        title="Transform Your Voice Into Your Future"
        lead="E4 Youth turns storytelling into a powerful tool for learning, growth, and opportunity. We help young people discover their authentic voice, build essential digital skills, and connect their unique stories to meaningful career pathways."
        bgImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop"
        buttons={[
          { label: 'Discover Your Program', href: '/programs', variant: 'primary' },
          { label: 'Hear Community Stories', href: '/stories', variant: 'secondary' },
        ]}
        slides={[
          {
            title: 'Transform Your Voice Into Your Future',
            lead: 'E4 Youth turns storytelling into a powerful tool for learning, growth, and opportunity. We help young people discover their authentic voice, build essential digital skills, and connect their unique stories to meaningful career pathways.',
            bgImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop',
            buttons: [
              { label: 'Discover Your Program', href: '/programs', variant: 'primary' },
              { label: 'Hear Community Stories', href: '/stories', variant: 'secondary' },
            ],
          },
          {
            title: 'Storytelling as Infrastructure for Change',
            lead: 'We don\'t just teach storytelling — we use it as the foundation for building communication skills, technical expertise, and professional confidence that opens doors.',
            bgImage: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1920&h=1080&fit=crop',
            buttons: [
              { label: 'Explore Programs', href: '/programs', variant: 'primary' },
              { label: 'See Our Impact', href: '/impact', variant: 'secondary' },
            ],
          },
          {
            title: 'Real Skills. Real Community. Real Opportunity.',
            lead: 'From digital storytelling workshops to professional mentorship networks, E4 Youth creates connected pathways where creativity meets career readiness.',
            bgImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&h=1080&fit=crop',
            buttons: [
              { label: 'Get Involved', href: '/contact', variant: 'primary' },
              { label: 'Partner With Us', href: '/partner', variant: 'secondary' },
            ],
          },
        ]}
      />

      <Section icon="fa-solid fa-compass" title="Stories Shape Futures" lead="At E4 Youth, we believe every young person has a story worth telling—and skills worth developing. Through innovative programs that blend storytelling with digital literacy, we create transformative experiences where creativity meets opportunity.">
        <div className="text-center">
          <p>We don&apos;t just teach storytelling; we use it as infrastructure. Your narrative becomes the foundation for building communication skills, technical expertise, and professional confidence that opens doors to colleges, careers, and community leadership.</p>
        </div>
      </Section>

      <Section icon="fa-solid fa-rocket" title="The Four E's That Drive Change">
        <div className="grid grid-2">
          {[
            { icon: 'fa-solid fa-handshake', title: 'Engage', desc: 'We meet young people where they are, honoring their experiences and perspectives as valuable starting points for growth.', img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop' },
            { icon: 'fa-solid fa-graduation-cap', title: 'Educate', desc: 'Through hands-on workshops and mentorship, participants develop both creative and technical skills that translate directly to academic and professional success.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop' },
            { icon: 'fa-solid fa-fist-raised', title: 'Empower', desc: 'We provide platforms and opportunities for young voices to be heard, creating confidence and agency in personal and professional settings.', img: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&h=400&fit=crop' },
            { icon: 'fa-solid fa-link', title: 'Elevate', desc: 'Participants leave our programs not just with skills, but with portfolios, networks, and clear pathways to their next opportunities.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop' },
          ].map((e) => (
            <div className="card" key={e.title}>
              <Image src={e.img} alt={`${e.title} - youth engagement`} className="card-image" width={600} height={400} loading="lazy" />
              <span className="card-icon"><FaIcon iconClass={e.icon} /></span>
              <h3 className="card-title">{e.title}</h3>
              <p className="card-description">{e.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-bridge" title="Beyond Self-Expression: Storytelling as Infrastructure">
        <div className="grid grid-2">
          <div>
            <p>Traditional youth programs often separate &quot;soft skills&quot; from &quot;hard skills,&quot; treating creativity as enrichment rather than foundation. E4 Youth recognizes that storytelling is actually workforce and civic infrastructure—a core competency that drives success across industries and life experiences.</p>
            <p>When young people learn to document their histories, articulate their values, and share their perspectives using professional digital tools, they&apos;re not just being creative.</p>
          </div>
          <div>
            <h3>They&apos;re developing:</h3>
            <ul className="check-list">
              <li><strong>Communication mastery</strong> that serves them in interviews, presentations, and leadership roles</li>
              <li><strong>Technical fluency</strong> with industry-standard creative and digital tools</li>
              <li><strong>Professional portfolios</strong> that demonstrate both skills and authentic perspective</li>
              <li><strong>Network connections</strong> with mentors, peers, and community leaders</li>
              <li><strong>Civic engagement</strong> skills that strengthen their communities</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-lg">
          <div className="btn-group">
            <Link href="/programs" className="btn btn-primary">Explore Our Programs</Link>
            <Link href="/impact" className="btn btn-accent">See Community Impact</Link>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-calendar" title="Jump In: Experiences Available Now">
        <div className="grid grid-3">
          {[
            {
              img: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?w=800&h=600&fit=crop',
              alt: 'Person using AR technology to explore history',
              title: 'Walk With History: The Jacob Fontaine AR Tour',
              desc: 'Discover Black Austin history through cutting-edge augmented reality. This community-developed experience brings untold stories into public spaces, created by and for the community.',
              href: '/experiences/wow',
              cta: 'Experience AR History',
            },
            {
              img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
              alt: 'Community members presenting their work at a showcase event',
              title: 'Community Showcases & Learning Events',
              desc: 'Monthly celebrations where emerging creatives present their work alongside mentors, historians, and industry professionals. Network, learn, and be inspired.',
              href: '/experiences/live',
              cta: 'Attend Next Showcase',
            },
            {
              img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
              alt: 'Young people working on laptops in a workshop setting',
              title: 'Innovation Workshops & Labs',
              desc: 'Hands-on sessions exploring oral history, digital storytelling, creative technology, and professional development. Small groups, personalized attention.',
              href: '/experiences/level-up',
              cta: 'Join a Workshop',
            },
          ].map((c) => (
            <div className="card" key={c.title}>
              <Image src={c.img} alt={c.alt} className="card-image" width={800} height={600} loading="lazy" />
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.desc}</p>
              <div className="card-cta">
                <Link href={c.href} className="btn btn-primary">{c.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-star" title="Real Stories, Real Impact">
        <div className="grid grid-3">
          {[
            { quote: '"E4 Youth taught me that my experiences weren\'t just personal—they were professional assets. Now I\'m using storytelling skills in my marketing internship and loving it."', author: '— Maria, Get Creative! Graduate' },
            { quote: '"The digital storytelling program helped my daughter find her voice and discover she\'s actually great with technology. She\'s more confident in school and excited about college."', author: '— Jennifer, Parent' },
            { quote: '"Partnering with E4 Youth brought authentic community voices into our workforce development programming. The results speak for themselves."', author: '— David Chen, Community Partnership Manager' },
          ].map((t) => (
            <div className="testimonial" key={t.author}>
              <p className="testimonial-quote">{t.quote}</p>
              <p className="testimonial-author">{t.author}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-lg">
          <Link href="/stories" className="btn btn-primary">Read More Success Stories</Link>
        </div>
      </Section>

      <Section icon="fa-solid fa-arrow-right" title="Ready to Transform Your Story?" lead="Whether you're a young person ready to discover your potential, an educator seeking innovative programming, or a community partner interested in collaboration, E4 Youth has a place for you.">
        <div className="btn-group">
          <Link href="/contact" className="btn btn-primary">Find Your Path</Link>
          <Link href="/programs" className="btn btn-accent">Explore All Programs</Link>
          <Link href="/partner" className="btn btn-outline">Partner With Us</Link>
        </div>
        <div className="text-center mt-lg">
          <p><strong>Contact Info:</strong><br />
          Email: hello@e4youth.org | Phone: (512) 555-0123 | Austin, TX</p>
        </div>
      </Section>
    </>
  )
}
