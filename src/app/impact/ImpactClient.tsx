'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCalendarDays, faHandshake, faGlobe, faGraduationCap, faEye, faRocket, faHeart, faBolt } from '@fortawesome/free-solid-svg-icons'
import HeroSection from '@/components/HeroSection'
import AnimatedSection from '@/components/AnimatedSection'

const engageMetrics = [
  { label: 'Youth & families reached', value: '500+' },
  { label: 'Public events held', value: '25+' },
  { label: 'Cities reached', value: '3' },
  { label: 'AR Heritage Tour visitors', value: 'Growing annually' },
]

const educateMetrics = [
  { label: 'Program completions', value: 'Growing year-over-year' },
  { label: 'Skills benchmarks met', value: 'Digital literacy, creative production, professional communication' },
  { label: 'Portfolio pieces produced', value: 'Multiple per participant' },
]

const empowerMetrics = [
  { label: 'Community partners', value: '40+' },
  { label: 'Public exhibitions & installations', value: 'Multiple annually' },
  { label: 'Media features and audience reach', value: 'Expanding' },
]

const elevateMetrics = [
  { label: 'Career placements & professional roles', value: 'Tracking and expanding' },
  { label: 'Alumni in mentorship/facilitation roles', value: 'Growing' },
  { label: 'Participants returning to strengthen the ecosystem', value: 'Active and ongoing' },
]

const elevateProofStories = [
  {
    title: 'From DSP to Staff',
    description: 'Started as a high school participant in the Digital Storytelling Program. Now works part-time on E4Youth staff, co-designing curriculum and mentoring the next cohort.',
    tag: 'Elevate · Full Circle',
    color: '#7BDCB5',
  },
  {
    title: 'Heritage Tour Guide to Creative Professional',
    description: 'Began facilitating AR Heritage Tours as a college student. The public speaking, storytelling, and technical skills she built led to a full-time role at a creative agency.',
    tag: 'Elevate · Workforce',
    color: '#FCB900',
  },
  {
    title: 'First Portfolio, First Job',
    description: 'A Get Creative participant used his E4Youth portfolio to land his first paid freelance project before finishing high school. He\'s now studying design in college.',
    tag: 'Elevate · Career Launch',
    color: '#9B51E0',
  },
]

function MetricSection({ tag, title, icon, color, metrics, body }: { tag: string; title: string; icon: typeof faHeart; color: string; metrics: { label: string; value: string }[]; body: string }) {
  return (
    <section className="section-padding bg-white" id={`${tag.toLowerCase()}-metrics`}>
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: `${color}15`, color }}>{tag}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-secondary">{title}</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((m, i) => (
            <AnimatedSection key={m.label} delay={i * 0.1}>
              <div className="bg-gray-50 rounded-2xl p-6 text-center h-full">
                <p className="text-2xl font-display font-bold text-secondary mb-1">{m.value}</p>
                <p className="text-sm text-body">{m.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <p className="text-body leading-relaxed max-w-3xl">{body}</p>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default function ImpactClient() {
  return (
    <>
      <HeroSection
        headline="Our Impact — Measured Across Four Stages"
        subheadline="E4Youth measures impact across learning, visibility, and opportunity — capturing growth over time through portfolios, applied work, and progression into next-step pathways. Our 4E Ecosystem gives us a framework to track where participants start and where they go."
        primaryCTA={{ text: 'View Impact Highlights', href: '#engage-metrics' }}
        secondaryCTA={{ text: 'Partner on Evaluation', href: '/partner' }}
        gradient="from-gold via-purple to-primary-dark"
      />

      <MetricSection
        tag="Engage"
        title="Engage — Reaching Communities"
        icon={faHeart}
        color="#4DB8FF"
        metrics={engageMetrics}
        body="Engage is about presence — being in communities, building trust, and creating accessible entry points. We measure reach, attendance, and the diversity of who shows up."
      />

      <div className="border-t border-gray-100" />

      <MetricSection
        tag="Educate"
        title="Educate — Building Skills"
        icon={faGraduationCap}
        color="#9B51E0"
        metrics={educateMetrics}
        body="Educate is about growth. We track skill development through portfolio assessments, benchmarks, and participant self-assessment. Every participant builds tangible, portfolio-ready work."
      />

      <div className="border-t border-gray-100" />

      <MetricSection
        tag="Empower"
        title="Empower — Creating Visible Work"
        icon={faBolt}
        color="#FCB900"
        metrics={empowerMetrics}
        body="Empower is about impact beyond the classroom. We measure the reach of participant work — exhibitions, digital publications, community installations, and media engagement. When participant work is seen and valued by real audiences, it changes what's possible."
      />

      <div className="border-t border-gray-100" />

      <MetricSection
        tag="Elevate"
        title="Elevate — Leading and Earning"
        icon={faRocket}
        color="#7BDCB5"
        metrics={elevateMetrics}
        body="Elevate is the proof. We track career outcomes, leadership transitions, and the number of participants who return to invest in the ecosystem. This is where the model validates itself — not in theory, but in real people building real careers and giving back."
      />

      {/* How We Measure */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">How We Measure Impact</h2>
            <p className="mt-4 text-body max-w-2xl mx-auto">Our evaluation framework captures both quantitative and qualitative growth across multiple dimensions.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Learning & Skill Development', desc: 'Tracking growth in digital literacy, creative production, communication, and professional readiness through portfolio assessment and skill benchmarks.', icon: faGraduationCap, color: '#4DB8FF' },
              { title: 'Visibility & Public Engagement', desc: 'Measuring the reach and impact of participant work through exhibitions, events, media features, and audience engagement metrics.', icon: faEye, color: '#9B51E0' },
              { title: 'Opportunity & Pathway Progression', desc: 'Following participants as they move into advanced programs, employment, higher education, and leadership roles in creative industries.', icon: faRocket, color: '#FCB900' },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden" style={{ borderTopColor: item.color, borderTopWidth: '3px' }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}15` }}>
                    <FontAwesomeIcon icon={item.icon} className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-secondary mb-3">{item.title}</h3>
                  <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Elevate Proof */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary">Elevate Proof — The Stories Behind the Numbers</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {elevateProofStories.map((story, i) => (
              <AnimatedSection key={story.title} delay={i * 0.1}>
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-dark to-purple text-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Invest in Measurable Impact</h2>
            <p className="text-lg text-white/90 mb-8">Partner with E4Youth to build and evaluate programs that create lasting change for emerging creatives and communities.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/partner" className="btn-gold">Partner on Evaluation</Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-secondary transition-all duration-300">Contact Us</Link>
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
            name: 'E4Youth Impact',
            mainEntity: {
              '@type': 'Report',
              name: 'E4Youth Impact Metrics',
              about: 'Youth workforce development outcomes',
            },
          }),
        }}
      />
    </>
  )
}
