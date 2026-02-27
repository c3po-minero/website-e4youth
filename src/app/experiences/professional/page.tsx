import { Metadata } from 'next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Professional Experiences — Career Pathways | E4Youth',
  description: 'E4Youth professional experiences: Get Creative!, Heritage Innovation Program (HIP), and E4 Level Up. Create real work and step into paid career pathways.',
}

const experiences = [
  {
    title: 'Get Creative!',
    description: 'Hands-on creative technology education where participants develop original projects across design, media, and digital arts. Work produced here becomes your professional portfolio.',
    href: '/experiences/get-creative',
    color: '#FCB900',
  },
  {
    title: 'Heritage Innovation Program (HIP)',
    description: 'Youth-driven heritage research and creative production preserving community stories through technology. Lead original projects with real community impact.',
    href: '/experiences/hip',
    color: '#FCB900',
  },
  {
    title: 'E4 Level Up',
    description: 'Career advancement connecting experienced participants to employer-funded professional opportunities and leadership roles across Austin\'s creative technology sector.',
    href: '/experiences/e4-level-up',
    color: '#7BDCB5',
  },
]

export default function ProfessionalExperiencesPage() {
  return (
    <main className="pt-24">
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#FCB900]/10 text-[#FCB900] font-semibold text-sm rounded-full mb-4">Empower &amp; Elevate Stages</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary">Professional Experiences</h1>
            <p className="mt-4 text-body max-w-2xl mx-auto">Create real work, build professional portfolios, and step into paid career pathways. Stipend-supported + employer-funded (expanding).</p>
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
