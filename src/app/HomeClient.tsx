'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faLightbulb, faCompass, faLandmark, faSchool, faMicrophone, faRocket, faVrCardboard, faPeopleGroup, faMagicWandSparkles, faHeart, faGraduationCap, faBolt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
    title: 'AR Heritage Tours',
    description: 'Youth-created augmented reality tours bringing Austin\'s cultural history to life in public spaces. Walk through neighborhoods and experience community storytelling through immersive AR technology.',
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

const elevateProofStories = [
  {
    title: 'From Workshop to Heritage Guide',
    description: 'A DSP participant who started as a 10th grader documenting family stories now leads AR Heritage Tours as a stipend-supported facilitator — teaching visitors and younger participants alike.',
    tag: 'Elevate · AR Heritage Tours',
    color: '#7BDCB5',
  },
  {
    title: 'Portfolio to Paycheck',
    description: 'After building a creative portfolio through Get Creative and HIP, one participant landed a paid position with a local media company — their E4Youth work served as their résumé.',
    tag: 'Elevate · Workforce',
    color: '#FCB900',
  },
  {
    title: 'Community Historian at 19',
    description: 'A Heritage Innovation Pathways participant went from collecting oral histories to presenting original research at a regional conference — then came back to mentor the next cohort.',
    tag: 'Elevate · Leadership',
    color: '#9B51E0',
  },
  {
    title: 'Mentor, Then Manager',
    description: 'An early E4Youth participant returned as a program mentor during college, then transitioned into a part-time staff role helping shape the next generation of programming.',
    tag: 'Elevate · Full Circle',
    color: '#4DB8FF',
  },
]

export default function HomeClient() {
  return (
    <>
      <HeroSection
        headline="Building Futures Through Creative Technology"
        subheadline="From grandparents sharing oral histories to young professionals leading AR tours — E4Youth creates pathways where communities and emerging creatives explore identity, build digital literacy, and translate their stories into skills, portfolios, and career-connected opportunities."
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
                E4Youth uses the power of storytelling to unlock equity and opportunity across generations. We create spaces where communities and emerging creatives can explore identity, build digital literacy, and translate their stories into skills, portfolios, and career-connected opportunities.
              </p>
              <p className="mt-6 text-body leading-relaxed">
                Through immersive workshops, oral history projects, and interactive experiences, E4Youth equips participants to be seen, heard, and hired — not only as job seekers, but as cultural innovators and emerging professionals. Our work spans generations: young people learn from elders, communities shape curriculum, and alumni return as mentors and leaders.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4E Ecosystem Circle */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-purple/10 text-purple font-semibold text-sm rounded-full mb-4">Our Model</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">The 4E Ecosystem</h2>
            <p className="mt-4 max-w-2xl mx-auto text-body">
              Every E4Youth experience is part of a connected cycle. Four stages — Engage, Educate, Empower, and Elevate — create a living ecosystem where young people grow, contribute, and come back to lift others.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Engage', icon: faHeart, color: '#4DB8FF', desc: 'Meeting young people and families where they are — through public events, AR heritage tours, and community storytelling.' },
              { label: 'Educate', icon: faGraduationCap, color: '#9B51E0', desc: 'Building digital literacy, creative confidence, and professional skills through structured, stipend-supported learning experiences.' },
              { label: 'Empower', icon: faBolt, color: '#FCB900', desc: 'Creating real work with real audiences — portfolios, exhibitions, public installations, and employer-connected projects.' },
              { label: 'Elevate', icon: faRocket, color: '#7BDCB5', desc: 'Stepping into leadership, earning opportunity, and returning to strengthen the ecosystem that built you.' },
            ].map((e, i) => (
              <AnimatedSection key={e.label} delay={i * 0.1}>
                <Link href="/ecosystem" className="block h-full">
                  <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4" style={{ backgroundColor: `${e.color}15` }}>
                      <FontAwesomeIcon icon={e.icon} className="w-7 h-7" style={{ color: e.color }} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-secondary mb-2">{e.label}</h3>
                    <p className="text-sm text-body">{e.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all">
              Explore the Full 4E Ecosystem <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Elevate Proof — Where This Leads */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-mint/10 text-mint font-semibold text-sm rounded-full mb-4">Elevate Proof</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Where This Leads</h2>
            <p className="mt-4 max-w-2xl mx-auto text-body">
              The 4E Ecosystem isn&apos;t a theory. These are real outcomes from real people who moved through our programs and stepped into something bigger.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {elevateProofStories.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: story.color, borderTopWidth: '3px' }}>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: `${story.color}15`, color: story.color }}>
                    {story.tag}
                  </span>
                  <h3 className="text-lg font-display font-bold text-secondary mb-2">{story.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{story.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Built Across Generations */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Built Across Generations</h2>
            <p className="text-lg text-body leading-relaxed">
              E4Youth didn&apos;t start in a boardroom. It started in community — with elders sharing stories, young people picking up cameras, and families asking what it would look like to preserve their history and build careers at the same time.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              Today, that question drives everything we do. Grandparents sit beside grandchildren in our workshops. Alumni return as mentors. Community historians co-design curriculum with technologists. This is multi-generational work — not as a tagline, but as a practice.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-display font-bold text-secondary mb-3">Community Roots</h3>
                <p className="text-sm text-body leading-relaxed">
                  Our programs are built in Austin, TX, rooted in the cultural traditions and neighborhoods that shaped them. Every experience we offer connects to a living community — not an abstract audience.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                <h3 className="text-xl font-display font-bold text-secondary mb-3">Multi-Generational Impact</h3>
                <p className="text-sm text-body leading-relaxed">
                  When a young person documents an elder&apos;s story, both are changed. When that story becomes a public AR experience, the whole community benefits. And when that young person grows into a professional who returns to teach — the circle is complete.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why This Work Matters */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-purple text-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Why This Work Matters</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Stories are often treated as personal expression alone. E4Youth treats storytelling as workforce and civic infrastructure. When young people and communities are supported to document their histories, articulate their identities, and apply digital tools, stories become assets that shape public memory, strengthen civic voice, build career-relevant skills, and open pathways to opportunity across generations.
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
            <p className="text-lg text-white/90 mb-8">Whether you are a young creative, educator, funder, or community partner, there is a place for you at E4Youth.</p>
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
            '@type': 'Organization',
            name: 'E4Youth',
            description: 'Youth workforce development through creative technology in Austin, TX',
            url: 'https://e4youth.org',
            address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX' },
            sameAs: [
              'https://www.facebook.com/e4youth',
              'https://twitter.com/e4youth',
              'https://www.instagram.com/e4youth',
            ],
          }),
        }}
      />
    </>
  )
}
