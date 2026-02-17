'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faHeart, faGraduationCap, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import EcosystemCircle from '@/components/EcosystemCircle'
// StoryTile removed — using inline quote layout

const stages = [
  {
    label: 'Engage',
    subtitle: 'Discover Your Creative Voice',
    color: '#4DB8FF',
    icon: faHeart as IconDefinition,
    body: 'Engage is the front door. It\'s where young people, families, and community members encounter E4Youth for the first time — often without realizing they\'re stepping into a workforce development ecosystem.',
    experiences: [
      { name: 'AR Heritage Tours', desc: 'Youth-created augmented reality walking tours that bring Austin\'s cultural history to life through immersive storytelling. Open to the public, powered by young people.' },
      { name: 'Community Showcases', desc: 'Public exhibitions where E4Youth participants present creative work to their neighborhoods, families, and peers.' },
      { name: 'WOW Experiences', desc: 'Workforce-oriented events and exhibitions that connect attendees to the broader ecosystem of creative technology and opportunity.' },
    ],
    outcomes: 'Community connection, creative technology exposure, curiosity activated, pathways made visible.',
    story: {
      name: 'Linh Tran',
      pathway: 'AR Heritage Tours participant → Educate labs → Get Creative! → WOW Heritage Center guide → paid heritage programming lead',
      quote: 'The Heritage Center became my classroom, my portfolio, and then my workplace.',
    },
  },
  {
    label: 'Educate',
    subtitle: 'Build Skills Through Technology',
    color: '#9B51E0',
    icon: faGraduationCap as IconDefinition,
    body: 'Educate is where curiosity becomes capability. Young people build real, marketable skills in digital media, creative technology, and community storytelling through structured programs and hands-on labs.',
    experiences: [
      { name: 'Digital Storytelling Program (DSP)', desc: 'A foundational youth media training experience where participants learn to research, produce, and share digital stories rooted in their communities. DSP builds technical skills in audio, video, photography, and narrative design.' },
      { name: 'Workshops & Labs', desc: 'Focused skill-building sessions in creative technology disciplines: graphic design, audio production, photography, video editing, AR development, and more.' },
    ],
    outcomes: 'Digital media fluency, creative technology skills, storytelling confidence, portfolio foundations, professional communication.',
    story: {
      name: 'James "JT" Thompson',
      pathway: 'DSP participant → Get Creative! audio producer → E4 Live production lead → E4 Level Up → employer-funded audio engineer',
      quote: 'I walked into DSP not knowing what a DAW was. Now I\'m engineering sessions for artists I grew up listening to.',
    },
  },
  {
    label: 'Empower',
    subtitle: 'Create Real Work, Real Impact',
    color: '#FCB900',
    icon: faBolt as IconDefinition,
    body: 'Empower is where skills become visible. Young people produce original creative work, build professional portfolios, and present to real audiences — industry professionals, community stakeholders, and potential employers.',
    experiences: [
      { name: 'Get Creative!', desc: 'A creative technology education experience where participants develop original projects across design, media, and digital arts. Work produced here feeds directly into professional portfolios.' },
      { name: 'Portfolio Building', desc: 'Structured support to compile, refine, and present a body of creative work that demonstrates professional readiness.' },
      { name: 'Public Presentations', desc: 'Opportunities to present work in professional settings, building communication skills and visibility with industry partners and community leaders.' },
    ],
    outcomes: 'Professional portfolio, presentation experience, industry visibility, creative confidence, employer-ready work samples.',
    story: {
      name: 'Sofia Garza-Klein',
      pathway: 'WOW attendee → DSP → Empower presenter → E4 Level Up → employer-funded project manager',
      quote: 'My DSP story got me my first interview. My portfolio from Get Creative! got me the offer.',
    },
  },
  {
    label: 'Elevate',
    subtitle: 'Lead, Earn, Transform',
    color: '#7BDCB5',
    icon: faRocket as IconDefinition,
    isElevate: true,
    body: 'Elevate is where the ecosystem delivers on its promise. This stage is open-access but advanced — designed for participants who have built skills, produced work, and demonstrated readiness across earlier stages.\n\nElevate isn\'t a finish line. It\'s a launchpad into real careers, paid leadership, and lasting community impact. And it\'s where the circle completes: Elevate participants return to the ecosystem as mentors, facilitators, and leaders who power the next generation of Engage experiences.',
    experiences: [
      { name: 'Heritage Innovation Program (HIP)', desc: 'Youth-driven heritage research and creative production that preserves community stories through technology. HIP participants lead original projects with real community impact.' },
      { name: 'E4 Level Up', desc: 'A career advancement experience connecting experienced participants to employer-funded professional opportunities and leadership roles.' },
      { name: 'Stipend-Supported Cohorts', desc: 'Structured cohort experiences with stipend support, providing financial stability while participants develop advanced professional skills.' },
      { name: 'Paid Pilot Placements', desc: 'Real-world work placements with partner organizations, bridging the gap between training and employment.' },
      { name: 'Employer-Funded Roles (Expanding)', desc: 'Full professional positions funded by industry partners across Austin\'s creative technology sector. This pathway is actively growing.' },
    ],
    outcomes: 'Paid career pathways, visible leadership roles, return-to-ecosystem mentorship, employer relationships, financial stability, professional identity.',
    spotlight: {
      name: 'Kwame Asante',
      pathway: 'E4 Live volunteer → DSP participant → Get Creative! videographer → HIP documentary lead → stipend-supported media director',
      fullStory: 'Kwame first encountered E4Youth as a volunteer at an E4 Live event, helping set up equipment and run cables. That single afternoon connected him to DSP, where he learned to shoot and edit documentary video. Through Get Creative!, he developed a portfolio of short films about Austin\'s East Side. His HIP project — a feature-length documentary on heritage preservation — earned community recognition and led to his current role as a stipend-supported media director producing E4Youth\'s public content.',
      quote: 'I went from holding a camera at an event to directing the whole production. This ecosystem keeps opening doors.',
    },
  },
]

export default function EcosystemClient() {
  return (
    <>
      <HeroSection
        headline="The 4E Ecosystem — Engage, Educate, Empower, Elevate"
        subheadline="The 4E Ecosystem is E4Youth's circular youth development model. It's not a pipeline with a start and an end — it's a living system where each stage feeds the next, and the final stage feeds the first."
        primaryCTA={{ text: 'See Our Experiences', href: '/experiences' }}
        secondaryCTA={{ text: 'Partner With Us', href: '/partner' }}
        gradient="from-purple via-primary-dark to-mint"
      />

      {/* Ecosystem Intro */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-lg text-body leading-relaxed">
              Young people enter through <strong>Engage</strong>: community experiences that spark curiosity and connection. They build skills through <strong>Educate</strong>: structured digital media training and creative technology workshops. They produce real work through <strong>Empower</strong>: portfolio building, public presentations, and creative projects with community impact. And they step into leadership and paid opportunity through <strong>Elevate</strong>: stipend-supported cohorts, paid pilot placements, and employer-funded roles that are expanding across Austin.
            </p>
            <p className="mt-6 text-body leading-relaxed">
              Here&apos;s what makes the model circular: Elevate feeds Engage. Alumni who reach Elevate return as mentors, facilitators, and community leaders — becoming the people who spark the next young person&apos;s entry into the ecosystem. The circle never stops turning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Circle Visual */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="flex justify-center">
            <EcosystemCircle />
          </AnimatedSection>
        </div>
      </section>

      {/* Stage Sections — Two-Column Layout */}
      {stages.map((stage, i) => {
        const storyData = stage.spotlight || stage.story!
        return (
          <section key={stage.label} className={`section-padding ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                  {/* Left Column: Title, Description, Quote */}
                  <div>
                    {/* Stage badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${stage.color}15` }}>
                        <FontAwesomeIcon icon={stage.icon} className="w-5 h-5" style={{ color: stage.color }} />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: stage.color }}>{stage.label}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">
                      {stage.subtitle}
                    </h2>
                    <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: stage.color }} />

                    {/* Description */}
                    {stage.body.split('\n\n').map((p, pi) => (
                      <p key={pi} className="text-body leading-relaxed mb-4">{p}</p>
                    ))}

                    {/* Outcomes */}
                    <p className="text-sm text-body mt-2 mb-8"><strong className="text-secondary">Outcomes:</strong> {stage.outcomes}</p>

                    {/* Quote */}
                    <div className="border-l-4 pl-5 py-2" style={{ borderColor: stage.color }}>
                      <blockquote className="text-lg italic text-secondary leading-relaxed mb-3">
                        &ldquo;{storyData.quote}&rdquo;
                      </blockquote>
                      <div>
                        <p className="font-display font-bold text-secondary text-sm">{storyData.name}</p>
                        <p className="text-xs text-body italic">{storyData.pathway}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Experiences in this stage */}
                  <div>
                    <h3 className="text-lg font-display font-bold text-secondary mb-6">Experiences in this stage</h3>
                    <div className="space-y-4">
                      {stage.experiences.map((exp, ei) => (
                        <div
                          key={exp.name}
                          className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 text-white font-bold text-xs" style={{ backgroundColor: stage.color }}>
                              {ei + 1}
                            </div>
                            <div>
                              <h4 className="font-display font-bold text-secondary mb-1">{exp.name}</h4>
                              <p className="text-sm text-body leading-relaxed">{exp.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation indicators removed per request */}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        )
      })}

      {/* The Circle Continues */}
      <section className="section-padding bg-gradient-to-br from-primary-dark to-purple text-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Circle Continues</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              When Elevate participants return as mentors, facilitators, and community leaders, they become the engine of Engage. They&apos;re the faces young people see first. They&apos;re the proof that the pathway is real. And they&apos;re the reason the 4E Ecosystem isn&apos;t a program — it&apos;s a living, self-sustaining system.
            </p>
            {/* Visual indicator */}
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full mt-8">
              <span className="text-sm font-semibold" style={{ color: '#7BDCB5' }}>Elevate</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-white/60" />
              <span className="text-sm font-semibold" style={{ color: '#4DB8FF' }}>Engage</span>
              <span className="text-xs text-white/60 ml-2">The circle continues</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/experiences" className="btn-gold">See Our Experiences</Link>
              <Link href="/impact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">View Our Impact</Link>
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
