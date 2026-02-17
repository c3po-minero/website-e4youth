'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faLightbulb, faCompass, faLandmark, faSchool, faMicrophone, faRocket, faVrCardboard, faPeopleGroup, faMagicWandSparkles, faHeart, faGraduationCap, faBolt } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import ProgramCard from '@/components/ProgramCard'

const programs = [
  { title: 'Digital Storytelling (DSP)', description: 'Introduces young people to storytelling, digital literacy, and creative expression through workshops and community learning.', href: '/programs/dsp', icon: faBookOpen, color: '#4DB8FF' },
  { title: 'Get Creative!', description: 'Career exploration and applied learning helping high school students connect storytelling to creative and tech pathways.', href: '/programs/get-creative', icon: faLightbulb, color: '#9B51E0' },
  { title: 'Heritage & Innovation (HIP)', description: 'Connects community history and emerging tech to applied learning, research, and professional pathways.', href: '/programs/hip', icon: faCompass, color: '#FCB900' },
  { title: 'What Once Was (WOW)', description: 'Public storytelling platform elevating participant work into exhibitions, digital experiences, and public space.', href: '/programs/wow', icon: faLandmark, color: '#7BDCB5' },
  { title: 'WOW Heritage Center', description: 'Physical, place-based hub for storytelling, learning, and community connection.', href: '/programs/wow-heritage-center', icon: faSchool, color: '#0072CE' },
  { title: 'E4 Live', description: 'Dynamic in-person networking events celebrating creativity, connection, and community.', href: '/programs/e4-live', icon: faMicrophone, color: '#9B51E0' },
  { title: 'E4 Level Up', description: 'Advanced workshop and professional development for college-aged, early-career, and established creatives.', href: '/programs/e4-level-up', icon: faRocket, color: '#FCB900' },
]

const experiences = [
  {
    title: 'Walk With History: The Jacob Fontaine AR Tour',
    description: 'A location-based augmented reality experience developed with community input that brings Black Austin history into public space through youth-informed storytelling and technology.',
    icon: faVrCardboard,
    color: '#9B51E0',
  },
  {
    title: 'Community Showcases and Public Learning Events',
    description: 'Live events where emerging creatives present work, portfolios, and research alongside mentors, historians, and partners.',
    icon: faPeopleGroup,
    color: '#FCB900',
  },
  {
    title: 'Workshops, Labs, and Pilot Programs',
    description: 'Immersive learning experiences exploring oral history, digital storytelling, creative technology, and workforce connection.',
    icon: faMagicWandSparkles,
    color: '#7BDCB5',
  },
]

export default function HomeClient() {
  return (
    <>
      <HeroSection
        headline="Using the power of storytelling to unlock equity, workforce access, and opportunity across generations."
        subheadline="E4 Youth creates spaces where communities and emerging creatives explore identity, build digital literacy, and translate their stories into skills, portfolios, and career connected opportunities."
        primaryCTA={{ text: 'Join an Experience', href: '/contact' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
      />

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary-dark font-semibold text-sm rounded-full mb-6">Our Mission</span>
              <p className="text-lg md:text-xl text-body leading-relaxed">
                E4 Youth uses the power of storytelling to unlock equity and opportunity across generations. We create spaces where communities and emerging creatives can explore identity, build digital literacy, and translate their stories into skills, portfolios, and career-connected opportunities.
              </p>
              <p className="mt-6 text-body leading-relaxed">
                Through immersive workshops, oral history projects, and interactive experiences, E4 Youth equips participants to be seen, heard, and hired—not only as job seekers, but as cultural innovators and emerging professionals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision / 4 E's */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple/10 text-purple font-semibold text-sm rounded-full mb-4">Our Vision</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">The 4 E&apos;s</h2>
            <p className="mt-4 max-w-2xl mx-auto text-body">
              Through the 4 E&apos;s—Engage, Educate, Empower, and Elevate—E4 Youth develops the next generation of changemakers, artists, technologists, and cultural visionaries who are fluent in story, strategy, and real-world application.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Engage', icon: faHeart, color: '#4DB8FF', desc: 'Meeting young people where they are through culturally relevant programming.' },
              { label: 'Educate', icon: faGraduationCap, color: '#9B51E0', desc: 'Building digital literacy, communication skills, and creative confidence.' },
              { label: 'Empower', icon: faBolt, color: '#FCB900', desc: 'Creating pathways for participants to own their narratives and build portfolios.' },
              { label: 'Elevate', icon: faRocket, color: '#7BDCB5', desc: 'Connecting emerging creatives to workforce opportunities and public visibility.' },
            ].map((e, i) => (
              <AnimatedSection key={e.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 h-full">
                  <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${e.color}15` }}>
                    <FontAwesomeIcon icon={e.icon} className="w-7 h-7" style={{ color: e.color }} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary mb-2">{e.label}</h3>
                  <p className="text-sm text-body">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-purple text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why This Work Matters</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Stories are often treated as personal expression alone. E4 Youth treats storytelling as workforce and civic infrastructure. When young people and communities are supported to document their histories, articulate their identities, and apply digital tools, stories become assets that shape public memory, strengthen civic voice, build career-relevant skills, and open pathways to opportunity across generations.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-semibold text-sm rounded-full mb-4">Our Programs</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Programs & Experiences</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p, i) => (
              <ProgramCard key={p.href} {...p} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-mint/10 text-mint font-semibold text-sm rounded-full mb-4">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Experiences You Can Engage With Now</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `${exp.color}15` }}>
                    <FontAwesomeIcon icon={exp.icon} className="w-5 h-5" style={{ color: exp.color }} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-secondary mb-3">{exp.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{exp.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Join an Experience
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-padding bg-gradient-to-r from-gold via-purple to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-white/90 mb-8">Whether you are a young creative, educator, funder, or community partner, there is a place for you at E4 Youth.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner" className="btn-gold">Partner With Us</Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
                Support the Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'NonprofitOrganization',
            name: 'E4 Youth',
            description: 'E4 Youth uses the power of storytelling to unlock equity, workforce access, and opportunity across generations.',
            url: 'https://e4youth.org',
            address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX' },
          }),
        }}
      />
    </>
  )
}
