'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVrCardboard, faMicrophone, faPalette, faMagicWandSparkles, faVideo, faPeopleGroup, faRocket, faBullseye, faStar } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const elevateProof = [
  {
    title: 'The Circle Completes',
    desc: 'One of E4Youth\'s earliest participants — who started in DSP as a high schooler — now works part-time on staff, co-designs curriculum for new cohorts, and mentors youth who remind him of where he started.',
    tag: 'Elevate · Full Circle',
    color: '#7BDCB5',
    icon: faRocket,
  },
  {
    title: 'Heritage Tour Guide to Creative Professional',
    desc: 'Began facilitating AR Heritage Tours as a college student. The public speaking, storytelling, and technical skills she built led to a full-time role at a creative agency.',
    tag: 'Elevate · Workforce',
    color: '#FCB900',
    icon: faBullseye,
  },
  {
    title: 'Mentor, Then Manager',
    desc: 'An early E4Youth participant returned as a program mentor during college, then transitioned into a part-time staff role helping shape the next generation of programming.',
    tag: 'Elevate · Leadership',
    color: '#9B51E0',
    icon: faStar,
  },
]

const engageStories = [
  { title: 'Walking Through History', desc: 'Youth participants created an augmented reality experience that brings Black Austin history to life in public spaces, connecting past and present through technology and storytelling.', tag: 'AR Heritage Tours · Engage', color: '#9B51E0', icon: faVrCardboard },
  { title: 'Community Connection', desc: 'An E4 Live networking event brought together over 100 creatives, professionals, and community members for an evening of connection and collaboration.', tag: 'E4 Live · Engage', color: '#9B51E0', icon: faPeopleGroup },
]

const educateStories = [
  { title: 'Digital Storytellers', desc: 'Youth learned video production, audio editing, and digital publishing to tell stories about their neighborhoods, schools, and communities.', tag: 'Digital Storytelling · Educate', color: '#0072CE', icon: faVideo },
  { title: 'Creative Futures', desc: 'High school participants developed professional portfolios and presented their work at a public showcase, gaining confidence and visibility as emerging creatives.', tag: 'Get Creative · Educate', color: '#4DB8FF', icon: faPalette },
]

const empowerStories = [
  { title: 'Voices of the Community', desc: 'An oral history project that captured stories from three generations of Austin families, preserving memories and perspectives that might otherwise be lost.', tag: 'Heritage Innovation · Empower', color: '#FCB900', icon: faMicrophone },
  { title: 'Heritage Remix', desc: 'College-aged participants combined traditional cultural practices with emerging technology to create interactive installations for community spaces.', tag: 'WOW · Empower', color: '#7BDCB5', icon: faMagicWandSparkles },
]

const elevateStories = [
  { title: 'First Portfolio, First Job', desc: 'A Get Creative participant used his E4Youth portfolio to land his first paid freelance project before finishing high school. He\'s now studying design in college.', tag: 'Elevate · Career Launch', color: '#FCB900', icon: faRocket },
  { title: 'From Workshop to Heritage Guide', desc: 'A DSP participant who started as a 10th grader documenting family stories now leads AR Heritage Tours as a stipend-supported facilitator.', tag: 'Elevate · AR Heritage Tours', color: '#7BDCB5', icon: faVrCardboard },
]

function StoryCard({ story }: { story: { title: string; desc: string; tag: string; color: string; icon: typeof faVrCardboard } }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 card-hover h-full flex flex-col">
      <div className="h-48 bg-gradient-to-br relative overflow-hidden" style={{ backgroundImage: `linear-gradient(135deg, ${story.color}33, ${story.color}11)` }}>
        <div className="absolute -right-4 -bottom-4 opacity-10">
          <FontAwesomeIcon icon={story.icon} className="w-32 h-32" style={{ color: story.color }} />
        </div>
        <div className="h-full flex items-center justify-center relative z-10">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${story.color}20` }}>
            <FontAwesomeIcon icon={story.icon} className="w-10 h-10" style={{ color: story.color }} />
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 w-fit" style={{ backgroundColor: `${story.color}15`, color: story.color }}>
          {story.tag}
        </span>
        <h3 className="text-lg font-display font-bold text-secondary mb-2">{story.title}</h3>
        <p className="text-sm text-body leading-relaxed flex-1">{story.desc}</p>
      </div>
    </div>
  )
}

function StorySection({ tag, title, stories, color }: { tag: string; title: string; stories: typeof engageStories; color: string }) {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: `${color}15`, color }}>{tag}</span>
          <h3 className="text-2xl font-display font-bold text-secondary">{title}</h3>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <AnimatedSection key={story.title} delay={i * 0.08}>
              <StoryCard story={story} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function StoriesClient() {
  return (
    <>
      <HeroSection
        headline="Youth Stories — Voices of the E4 Ecosystem"
        subheadline="Stories & Showcases highlight youth voices, project outcomes, and public storytelling experiences across E4Youth programs. Every story here is proof that the ecosystem works."
        primaryCTA={{ text: 'Explore Stories', href: '#elevate-proof' }}
        secondaryCTA={{ text: 'Attend a Showcase', href: '/contact' }}
        gradient="from-mint via-primary-dark to-purple"
      />

      {/* Elevate Proof — Featured */}
      <section id="elevate-proof" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-mint/10 text-mint font-semibold text-sm rounded-full mb-4">Elevate Proof</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Elevate Proof</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">These are the stories that show where the E4 Ecosystem leads. Real participants, real outcomes, real careers.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elevateProof.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 0.08}>
                <StoryCard story={story} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <StorySection tag="Engage" title="Engage Stories" stories={engageStories} color="#4DB8FF" />
      <div className="border-t border-gray-100" />
      <StorySection tag="Educate" title="Educate Stories" stories={educateStories} color="#9B51E0" />
      <div className="border-t border-gray-100" />
      <StorySection tag="Empower" title="Empower Stories" stories={empowerStories} color="#FCB900" />
      <div className="border-t border-gray-100" />
      <StorySection tag="Elevate" title="Elevate Stories" stories={elevateStories} color="#7BDCB5" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-purple to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Share Your Story</h2>
            <p className="text-lg text-white/90 mb-8">Every E4Youth participant has a story worth sharing. Join us and let your voice be heard.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Attend a Showcase</Link>
              <Link href="/programs" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">Explore Experiences</Link>
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
            '@type': 'CollectionPage',
            name: 'Youth Stories',
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: [
                ...elevateProof.map((s, i) => ({ '@type': 'Article', position: i + 1, name: s.title })),
              ],
            },
          }),
        }}
      />
    </>
  )
}
