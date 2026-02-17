'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVrCardboard, faMicrophone, faPalette, faMagicWandSparkles, faVideo, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const stories = [
  { title: 'Walking Through History', desc: 'Youth participants created an augmented reality experience that brings Black Austin history to life in public spaces, connecting past and present through technology and storytelling.', tag: 'AR Experience', color: '#9B51E0', icon: faVrCardboard },
  { title: 'Voices of the Community', desc: 'An oral history project that captured stories from three generations of Austin families, preserving memories and perspectives that might otherwise be lost.', tag: 'Oral History', color: '#FCB900', icon: faMicrophone },
  { title: 'Creative Futures', desc: 'High school participants developed professional portfolios and presented their work at a public showcase, gaining confidence and visibility as emerging creatives.', tag: 'Student Showcase', color: '#4DB8FF', icon: faPalette },
  { title: 'Heritage Remix', desc: 'College-aged participants combined traditional cultural practices with emerging technology to create interactive installations for community spaces.', tag: 'Innovation', color: '#7BDCB5', icon: faMagicWandSparkles },
  { title: 'Digital Storytellers', desc: 'Youth learned video production, audio editing, and digital publishing to tell stories about their neighborhoods, schools, and communities.', tag: 'Digital Media', color: '#0072CE', icon: faVideo },
  { title: 'Community Connection', desc: 'An E4 Live networking event brought together over 100 creatives, professionals, and community members for an evening of connection and collaboration.', tag: 'E4 Live', color: '#9B51E0', icon: faPeopleGroup },
]

export default function StoriesClient() {
  return (
    <>
      <HeroSection
        headline="Stories & Showcases"
        subheadline="Stories & Showcases highlight youth voices, project outcomes, and public storytelling experiences across E4 Youth programs."
        primaryCTA={{ text: 'Explore Stories', href: '#stories' }}
        secondaryCTA={{ text: 'Attend a Showcase', href: '/contact' }}
        gradient="from-mint via-primary-dark to-purple"
      />

      <section id="stories" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Featured Stories</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Explore the work, voices, and impact of E4 Youth participants across our programs and platforms.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 0.08}>
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-purple to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Share Your Story</h2>
            <p className="text-lg text-white/90 mb-8">Every E4 Youth participant has a story worth sharing. Join us and let your voice be heard.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-gold">Attend a Showcase</Link>
              <Link href="/programs" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">Explore Programs</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
