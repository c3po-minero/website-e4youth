import { Metadata } from 'next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Public Experiences — Open to Everyone | E4Youth',
  description: 'Explore E4Youth public experiences: AR Heritage Tours, Community Showcases, and WOW Public Events. No application required.',
}

const experiences = [
  {
    title: 'AR Heritage Tours',
    description: 'Youth-created augmented reality walking tours that bring Austin\'s cultural history to life. Experience community stories through immersive AR technology — designed and led by young people.',
    href: '/experiences/ar-heritage-tours',
    color: '#4DB8FF',
  },
  {
    title: 'Community Showcases',
    description: 'Public exhibitions where E4Youth participants present original creative work to their communities. A celebration of what young people build when given real tools and real support.',
    href: '/experiences',
    color: '#4DB8FF',
  },
  {
    title: 'WOW Public Events',
    description: 'Workforce-focused exhibitions and public storytelling events that connect audiences to the creative technology work happening inside the E4Youth ecosystem.',
    href: '/experiences/wow',
    color: '#4DB8FF',
  },
]

export default function PublicExperiencesPage() {
  return (
    <main className="pt-24">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#4DB8FF]/10 text-[#4DB8FF] font-semibold text-sm rounded-full mb-4">Engage Stage</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary">Public Experiences</h1>
            <p className="mt-4 text-body max-w-2xl mx-auto">Open to everyone. No application required. Show up, experience something powerful, and see where it leads.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <AnimatedSection key={exp.title} delay={i * 0.1}>
                <Link href={exp.href} className="block group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full relative overflow-hidden hover:shadow-md transition-shadow" style={{ borderTopColor: exp.color, borderTopWidth: '3px' }}>
                    <h2 className="text-lg font-display font-bold text-secondary mb-3 group-hover:text-primary-dark transition-colors">{exp.title}</h2>
                    <p className="text-sm text-body leading-relaxed mb-4">{exp.description}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-dark group-hover:gap-3 gap-2 transition-all">
                      Learn More <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
