import { Metadata } from 'next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Learning Experiences — Build Real Skills | E4Youth',
  description: 'E4Youth learning experiences: Digital Storytelling Program (DSP) and Workshops & Labs. Structured skill-building in digital media and creative technology.',
}

const experiences = [
  {
    title: 'Digital Storytelling Program (DSP)',
    description: 'The foundational youth media training experience. Learn to research, produce, and share digital stories rooted in community — building skills in audio, video, photography, and narrative design.',
    href: '/experiences/digital-storytelling',
    color: '#9B51E0',
  },
  {
    title: 'Workshops & Labs',
    description: 'Focused sessions in creative technology: graphic design, audio production, photography, video editing, AR development, and more. Hands-on, skill-specific, and project-based.',
    href: '/experiences',
    color: '#9B51E0',
  },
]

export default function LearningExperiencesPage() {
  return (
    <main className="pt-24">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#9B51E0]/10 text-[#9B51E0] font-semibold text-sm rounded-full mb-4">Educate Stage</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary">Learning Experiences</h1>
            <p className="mt-4 text-body max-w-2xl mx-auto">Structured skill-building in digital media, creative technology, and community storytelling.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
