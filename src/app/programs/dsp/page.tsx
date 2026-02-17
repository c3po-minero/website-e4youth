import type { Metadata } from 'next'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Section from '@/components/Section'

export const metadata: Metadata = { title: 'Digital Storytelling Program' }

export default function DSPPage() {
  return (
    <>
      <Hero title="Your Story, Your Voice, Your Future Starts Here" lead="DSP creates a welcoming space where children and families explore storytelling together, building digital literacy, creative confidence, and communication skills that serve as the foundation for lifelong learning and growth." bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop" buttons={[{ label: 'Join DSP Today', href: '#getting-started', variant: 'primary' }, { label: 'Visit a Workshop', href: '#program-structure', variant: 'secondary' }]} />

      <Section icon="fa-solid fa-house" title="Building Foundations Through Story" lead="Digital Storytelling Program (DSP) recognizes that every child has valuable experiences and perspectives worth sharing. Rather than focusing on technology for its own sake, DSP uses age-appropriate digital tools to help young people discover and develop their authentic voice.">
        <div className="grid grid-2">
          <div>
            <h3>Core Beliefs:</h3>
            <ul className="check-list">
              <li><strong>Every story matters:</strong> Children&apos;s experiences and perspectives are valuable and worth documenting</li>
              <li><strong>Families learn together:</strong> When whole families engage in creative learning, everyone benefits</li>
              <li><strong>Technology serves story:</strong> Digital tools are powerful when they help us share what matters most</li>
              <li><strong>Community strengthens individuals:</strong> Supportive peer groups build confidence and creativity</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="card-title">Who This Serves:</h3>
            <p><strong>Primary Participants:</strong> Children ages 8-14</p>
            <p><strong>Family Members:</strong> Parents, caregivers, and siblings encouraged to participate</p>
            <p><strong>Schools &amp; Organizations:</strong> Educators seeking innovative approaches to digital literacy</p>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-tools" title="Skills That Serve You Everywhere">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Creative &amp; Technical Skills</h3>
            <h4>Basic Digital Literacy:</h4>
            <ul><li>Computer navigation and file management</li><li>Age-appropriate introduction to creative software</li><li>Digital photography and basic image editing</li><li>Simple video recording and editing techniques</li><li>Online safety and digital citizenship</li></ul>
            <h4>Storytelling Fundamentals:</h4>
            <ul><li>Finding and developing personal stories worth telling</li><li>Understanding audience and purpose in communication</li><li>Basic narrative structure</li><li>Interview skills and listening techniques</li><li>Presentation skills and public speaking confidence</li></ul>
          </div>
          <div className="card">
            <h3 className="card-title">Life Skills Development</h3>
            <h4>Communication &amp; Confidence:</h4>
            <ul><li>Clear verbal expression and active listening</li><li>Comfort with public speaking and presentation</li><li>Ability to ask questions and seek help</li><li>Respectful collaboration and peer feedback</li></ul>
            <h4>Critical Thinking:</h4>
            <ul><li>Analyzing what makes stories compelling and effective</li><li>Problem-solving when technology doesn&apos;t work as expected</li><li>Planning projects from concept through completion</li><li>Reflecting on work and identifying areas for improvement</li></ul>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-calendar-days" title="Flexible Learning That Fits Your Life" id="program-structure">
        <div className="grid grid-3">
          <div className="card"><span className="card-icon"><i className="fa-solid fa-calendar-week"></i></span><h3 className="card-title">Workshop Series Format</h3><p style={{ fontSize: '0.9rem', color: 'var(--accent)' }}>(Most Common)</p><ul style={{ fontSize: '0.9rem' }}><li><strong>Duration:</strong> 6-8 weeks, 2 hours per session</li><li><strong>Group Size:</strong> 12-15 participants plus family members</li><li><strong>Schedule:</strong> Saturdays 10AM-12PM or weekday after-school options</li><li><strong>Cost:</strong> Sliding scale $50-150 per family (scholarships available)</li></ul></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-clock"></i></span><h3 className="card-title">Family Workshop Days</h3><ul style={{ fontSize: '0.9rem' }}><li><strong>Duration:</strong> Single-day events, 4-6 hours with breaks</li><li><strong>Format:</strong> Drop-in style with multiple activity stations</li><li><strong>Focus:</strong> Accessible introduction for whole families</li><li><strong>Cost:</strong> Free or low-cost ($10-25 per family)</li></ul></div>
          <div className="card"><span className="card-icon"><i className="fa-solid fa-school"></i></span><h3 className="card-title">School &amp; Organization Partnerships</h3><ul style={{ fontSize: '0.9rem' }}><li><strong>Duration:</strong> Customized to fit academic calendar</li><li><strong>Format:</strong> In-school residencies, after-school programs, or summer camps</li><li><strong>Support:</strong> E4 Youth provides curriculum, training, and consultation</li><li><strong>Cost:</strong> Varies based on partnership scope</li></ul></div>
        </div>
      </Section>

      <Section icon="fa-solid fa-star" title="Amazing Stories from Amazing Kids">
        <div className="grid grid-3">
          {[
            { img: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&h=600&fit=crop', title: 'Community History Projects', desc: 'Students interview family members and community elders to document important local stories.', example: '"My Grandmother\'s Journey" - A 4th grader\'s interview project about immigration and family resilience.' },
            { img: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800&h=600&fit=crop', title: 'Creative Fiction & Personal Narrative', desc: 'Participants develop original stories that blend imagination with personal experience.', example: '"The Superhero Next Door" - A group collaboration imagining local community helpers as superheroes.' },
            { img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop', title: 'Community Problem-Solving Stories', desc: 'Young people identify issues they care about and create stories exploring solutions.', example: '"Making Our Playground Better" - A student-led project that led to actual community action.' },
          ].map(c => (
            <div className="card" key={c.title}>
              <img src={c.img} alt={c.title} className="card-image" width={800} height={600} loading="lazy" />
              <h3 className="card-title">{c.title}</h3>
              <p className="card-description">{c.desc}</p>
              <div className="example-box"><p style={{ margin: 0, fontSize: '0.9rem' }}><strong>Example:</strong> {c.example}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section icon="fa-solid fa-rocket" title="Ready to Discover Your Story?" id="getting-started">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Application Process</h3>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li><strong>Family Interest Form:</strong> Complete simple online form</li>
              <li><strong>Brief Phone Conversation:</strong> 10-15 minute call to discuss fit</li>
              <li><strong>Orientation Session:</strong> Group meeting to learn about expectations</li>
              <li><strong>Program Begins:</strong> Start your storytelling journey</li>
            </ol>
          </div>
          <div className="card">
            <h3 className="card-title">Program Investment</h3>
            <ul><li><strong>Workshop Series:</strong> $50-150 sliding scale per family (full scholarships available)</li><li><strong>Family Workshop Days:</strong> Free-$25 per family</li><li><strong>School Partnerships:</strong> Costs covered by partner organization</li></ul>
            <div className="highlight-box" style={{ marginTop: '1rem' }}>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '1.1rem' }}>No family is ever turned away due to financial circumstances.</p>
              <p style={{ margin: '0.5rem 0 0 0' }}>We work with every family to ensure program accessibility.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section icon="fa-solid fa-envelope" title="Let's Start the Conversation">
        <div className="grid grid-2">
          <div className="card">
            <h3 className="card-title">Contact Information</h3>
            <p><strong>Program Coordinator:</strong> Sarah Johnson<br /><strong>Direct Line:</strong> (512) 555-0127<br /><strong>Email:</strong> dsp@e4youth.org</p>
          </div>
          <div className="card">
            <h3 className="card-title">Information Sessions</h3>
            <ul className="check-list">
              <li>Open to all interested families</li>
              <li>No commitment required</li>
              <li>Refreshments provided</li>
            </ul>
            <div className="btn-group mt-lg"><Link href="/contact" className="btn btn-primary">Register for DSP</Link></div>
          </div>
        </div>
      </Section>
    </>
  )
}
