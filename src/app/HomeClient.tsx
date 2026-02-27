'use client'

import Link from 'next/link'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'
import EcosystemCircle from '@/components/EcosystemCircle'
import StoryTile from '@/components/StoryTile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function HomeClient() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="We use storytelling to engage, empower, educate, and elevate across generations."
        subheadline="Through the E4 Ecosystem, we connect young creatives, community leaders, and industry partners in pathways that transform stories into skills, opportunity, and visible leadership."
        primaryCTA={{ text: 'Explore the E4 Ecosystem', href: '/ecosystem' }}
        secondaryCTA={{ text: 'Join an Experience', href: '/experiences' }}
        backgroundImage="/images/e4youth/_a4a2514.webp"
        backgroundImageAlt="E4Youth participants engaged in creative technology storytelling"
      >
        <div className="mt-4">
          <Link href="/partner" className="inline-flex items-center px-8 py-4 border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">
            Partner With Us
          </Link>
        </div>
      </HeroSection>

      {/* 4E Ecosystem Circle */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">The 4E Ecosystem</h2>
            <h3 className="text-lg md:text-xl text-body mt-2">Story &gt; Skill &gt; Opportunity &gt; Leadership</h3>
            <p className="mt-4 max-w-3xl mx-auto text-body leading-relaxed">
              We use the 4E&apos;s to build the E4 Ecosystem — a circular pathway that transforms storytelling into opportunity.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
            <AnimatedSection className="flex justify-center" delay={0.2}>
              <EcosystemCircle />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/e4youth/_a4a1906.webp"
                  alt="E4Youth mentorship and community connection"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center">
            <Link href="/ecosystem" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all">
              See How the Ecosystem Works <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Innovation & XR */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/e4youth/_a4a5419.webp"
                  alt="E4Youth innovation and XR creative technology experiences"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/e4youth/img_5137_1.webp"
                  alt="E4Youth story production and creative pathways"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Elevate In Action */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Elevate In Action</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StoryTile
              name="Marcus Reyes"
              pathway="AR Heritage Tours volunteer → DSP → Get Creative! → HIP researcher → paid content producer"
              quote="I showed up to an AR tour because my grandmother wanted to see her old neighborhood. Two years later, I'm producing stories for a living."
              color="#4DB8FF"
              delay={0}
            />
            <StoryTile
              name="Destiny Okafor"
              pathway="WOW attendee → DSP → Get Creative! → E4 Level Up → employer-funded UX designer"
              quote="E4Youth didn't hand me a job — they helped me build a career I didn't know existed."
              color="#9B51E0"
              delay={0.1}
            />
            <StoryTile
              name="Rosa Medina"
              pathway="Community volunteer → Educate workshops → HIP lead researcher → stipend-supported program coordinator"
              quote="I came back to mentor because someone did it for me. That's how the circle works."
              color="#7BDCB5"
              delay={0.2}
            />
          </div>
          <AnimatedSection className="text-center mt-10">
            <Link href="/stories" className="inline-flex items-center gap-2 text-primary-dark font-semibold hover:gap-3 transition-all">
              Meet More Leaders <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Youth Voice / Outcome */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">Built Across Generations</h2>
              <p className="text-lg text-body leading-relaxed">
                Youth build skills. Community members share knowledge. Industry partners open doors. Alumni return as leaders. The ecosystem strengthens when each generation contributes.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/images/e4youth/_a4a4672.webp"
                  alt="E4Youth intergenerational community impact and youth voice"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
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
