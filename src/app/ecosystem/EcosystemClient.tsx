'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGraduationCap, faBolt, faRocket, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const stages = [
  {
    label: 'Engage',
    subtitle: 'Discover Your Creative Voice',
    icon: faHeart,
    color: '#4DB8FF',
    body: 'Engage is the front door. It\'s the first time a young person or family encounters E4Youth — at a community event, an AR Heritage Tour, or a live showcase. No applications, no prerequisites. Just come as you are.\n\nEngage experiences are designed to spark curiosity, build trust, and connect people to their own stories and communities. For many participants, this is where the journey begins.',
    experiences: [
      'AR Heritage Tours — Public, youth-created augmented reality tours of Austin\'s cultural history',
      'E4 Live — Community networking events celebrating creativity and connection',
      'Community Showcases — Public exhibitions of youth work and storytelling projects',
    ],
    story: {
      title: 'Curiosity to Commitment',
      description: 'A family attended an AR Heritage Tour during a neighborhood festival. Their daughter was fascinated by the technology and the stories. Three months later, she enrolled in the Digital Storytelling Program — and hasn\'t stopped creating since.',
      tag: 'Engage → Educate',
    },
  },
  {
    label: 'Educate',
    subtitle: 'Build Skills Through Technology',
    icon: faGraduationCap,
    color: '#9B51E0',
    body: 'Educate is where curiosity becomes capability. Through structured, stipend-supported programs, participants build real skills — digital storytelling, creative production, oral history methods, and professional communication. Every program pairs technical training with cultural grounding, so young people learn not just how to use tools but why their stories matter.\n\nEducate experiences are age-appropriate and progressive: younger participants build foundational literacy, while older participants develop portfolio-ready work and professional skills.',
    experiences: [
      'Digital Storytelling Program (DSP) — Storytelling, digital literacy, and creative expression for school-aged youth and families',
      'Get Creative — Career exploration connecting storytelling and digital skills to creative and tech pathways (high school)',
      'Heritage Innovation Pathways (HIP) — Community history, storytelling, and emerging technology for college-aged participants',
    ],
    compensation: 'All Educate experiences are stipend-supported.',
    story: {
      title: 'Skills That Transfer',
      description: 'A Get Creative participant used the video production and digital design skills she built in the program to land a summer internship at a local creative agency — before she\'d even graduated high school.',
      tag: 'Educate → Empower',
    },
  },
  {
    label: 'Empower',
    subtitle: 'Create Real Work, Real Impact',
    icon: faBolt,
    color: '#FCB900',
    body: 'Empower is where participants stop practicing and start producing. Their work goes public — through exhibitions, digital platforms, employer-connected projects, and community installations. This is real work for real audiences, and it builds the kind of portfolio and professional experience that opens doors.\n\nAt the Empower stage, participants also begin to take on leadership roles within E4Youth — mentoring newer participants, facilitating workshops, and co-designing programming. The work they produce has value beyond the classroom.',
    experiences: [
      'What Once Was (WOW) — Public storytelling platform elevating participant work into exhibitions, digital experiences, and public space',
      'WOW Heritage Center — Physical, place-based hub for storytelling, learning, and community connection',
      'Workforce Opportunities — Stipend-supported + employer-funded (expanding) positions connecting skills to careers',
    ],
    compensation: 'Empower experiences are stipend-supported + employer-funded (expanding).',
    story: {
      title: 'From Student Project to Public Installation',
      description: 'A team of HIP participants created an interactive heritage installation that was featured at the WOW Heritage Center for three months — visited by hundreds of community members and cited by a local news outlet.',
      tag: 'Empower → Elevate',
    },
  },
  {
    label: 'Elevate',
    subtitle: 'Lead, Earn, Transform',
    icon: faRocket,
    color: '#7BDCB5',
    isElevate: true,
    body: 'Elevate is where it all comes together. Participants at this stage aren\'t just beneficiaries — they\'re leaders, earners, and ecosystem builders. They hold professional roles, lead programs, mentor peers, and carry forward the cultural knowledge and technical skills they\'ve built.\n\nBut Elevate isn\'t the end. It\'s where the circle closes and reopens. Elevated participants become the mentors, facilitators, and community leaders who bring new people into the Engage stage. They hire from the ecosystem. They advocate for the work. They are the proof that the model works.',
    experiences: [
      'E4 Level Up — Advanced professional development for college-aged, early-career, and established creatives',
      'Alumni Leadership — Returning participants in mentorship, facilitation, and staff roles',
      'Employer Pathways — Career placements and professional opportunities through E4Youth\'s partner network',
    ],
    compensation: 'Elevate roles are employer-funded, with expanding opportunities.',
    story: {
      title: 'The Circle Completes',
      description: 'One of E4Youth\'s earliest participants — who started in DSP as a high schooler — now works part-time on staff, co-designs curriculum for new cohorts, and mentors youth who remind him of where he started. His career in creative media began here. His impact continues here.',
      tag: 'Elevate → Engage',
    },
  },
]

export default function EcosystemClient() {
  return (
    <>
      <HeroSection
        headline="The 4E Ecosystem — Engage, Educate, Empower, Elevate"
        subheadline="Not a pipeline. A circle. E4Youth's ecosystem is built so young people can enter at any point, grow through creative technology, and return to strengthen the community that invested in them."
        primaryCTA={{ text: 'See Our Experiences', href: '/programs' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
        gradient="from-purple via-primary-dark to-mint"
      />

      {/* The Model */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-lg text-body leading-relaxed">
              Most workforce programs move in a straight line: train, place, done. E4Youth works differently. Our 4E Ecosystem is circular — each stage feeds the next, and the final stage, Elevate, feeds right back into Engage.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              This means the young person who once attended a community event as a curious 8th grader can return years later as a mentor, facilitator, or professional — bringing new participants into the same ecosystem that shaped them.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              Every E4Youth experience maps to one or more of these stages. Together, they create a living system that grows stronger with each generation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4E Circle Visual */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stages.map((stage, i) => (
              <AnimatedSection key={stage.label} delay={i * 0.1}>
                <div
                  className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden ${stage.isElevate ? 'ring-2 ring-offset-2 ring-emerald-400' : ''}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: stage.color }} />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${stage.color}15` }}>
                      <FontAwesomeIcon icon={stage.icon} className="w-6 h-6" style={{ color: stage.color }} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-secondary">{stage.label}</h2>
                      <p className="text-sm text-body">{stage.subtitle}</p>
                    </div>
                  </div>
                  {stage.body.split('\n\n').map((paragraph, pi) => (
                    <p key={pi} className="text-sm text-body leading-relaxed mb-3">{paragraph}</p>
                  ))}

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-secondary mb-2">Key Experiences:</p>
                    <ul className="space-y-1">
                      {stage.experiences.map((exp) => (
                        <li key={exp} className="text-sm text-body leading-relaxed">• {exp}</li>
                      ))}
                    </ul>
                  </div>

                  {stage.compensation && (
                    <p className="mt-3 text-xs font-semibold" style={{ color: stage.color }}>{stage.compensation}</p>
                  )}

                  {/* Story tile */}
                  <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: `${stage.color}08`, borderLeft: `3px solid ${stage.color}` }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: stage.color }}>Where This Can Lead</p>
                    <h3 className="text-sm font-display font-bold text-secondary mb-1">{stage.story.title}</h3>
                    <p className="text-xs text-body leading-relaxed">{stage.story.description}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-semibold rounded-full" style={{ backgroundColor: `${stage.color}15`, color: stage.color }}>
                      {stage.story.tag}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Arrow indicator: Elevate → Engage */}
          <AnimatedSection className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="text-sm font-semibold" style={{ color: '#7BDCB5' }}>Elevate</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-semibold" style={{ color: '#4DB8FF' }}>Engage</span>
              <span className="text-xs text-body ml-2">The circle continues</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Circle Continues */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">The Circle Continues</h2>
            <p className="text-lg text-body leading-relaxed">
              The 4E Ecosystem isn&apos;t a one-time journey. It&apos;s a living system that strengthens with each participant, each cohort, each generation. When someone reaches the Elevate stage and comes back to invest in others, the whole ecosystem grows.
            </p>
            <p className="mt-4 text-body leading-relaxed">
              This is what makes E4Youth different. We don&apos;t graduate people out. We build them in.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/programs" className="btn-primary">See Our Experiences</Link>
              <Link href="/impact" className="inline-flex items-center px-8 py-4 border-2 border-primary-dark text-primary-dark font-semibold rounded-full hover:bg-primary-dark hover:text-white transition-all duration-300">View Our Impact</Link>
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
            '@type': 'WebPage',
            name: 'The 4E Ecosystem',
            description: 'Discover E4Youth\'s circular development model. Four stages — Engage, Educate, Empower, Elevate — create lasting workforce pathways through creative technology and community storytelling.',
            mainEntity: {
              '@type': 'EducationalOrganization',
              name: 'E4Youth',
              hasCredential: '4E Ecosystem Model',
            },
          }),
        }}
      />
    </>
  )
}
