import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ExperienceDetailLayout from '@/components/ExperienceDetailLayout'

const experiences: Record<string, {
  meta: { title: string; description: string }
  props: React.ComponentProps<typeof ExperienceDetailLayout>
}> = {
  'ar-heritage-tours': {
    meta: {
      title: 'AR Heritage Tours — Augmented Reality Cultural Experiences | E4Youth Austin',
      description: 'Youth-created augmented reality heritage tours bringing Austin\'s cultural history to life. Experience community storytelling through immersive AR technology.',
    },
    props: {
      title: 'AR Heritage Tours',
      subtitle: 'Youth-created augmented reality walking tours that bring Austin\'s cultural history to life through immersive community storytelling.',
      primaryCTA: { text: 'Experience a Tour', href: '/contact' },
      secondaryCTA: { text: 'Bring a Tour to Your Site', href: '/partner' },
      gradient: 'from-primary via-primary-dark to-purple',
      accentColor: '#4DB8FF',
      whoFor: 'AR Heritage Tours are open to everyone — families, students, educators, tourists, and community members. The tours are designed and led by young people, making them a powerful entry point into the 4E Ecosystem for both participants and audiences. If you\'re curious about Austin\'s cultural heritage and want to experience it through the eyes of the people who live it, this is for you.',
      whatHappens: [
        'Each AR Heritage Tour is a guided, location-based walking experience through Austin neighborhoods rich in cultural history. Using augmented reality technology on mobile devices, participants see historical imagery, hear community voices, and interact with layered digital stories anchored to real places.',
        'Every tour is researched, scripted, designed, and produced by E4Youth participants — young people trained in digital storytelling, AR development, and community-based research. Tours typically run 60–90 minutes and cover 4–8 heritage sites within a walkable area.',
        'Tours are available as scheduled public events, private group bookings, and school/organization field experiences.',
      ],
      skills: [
        'AR development and spatial storytelling',
        'Community-based research and oral history methods',
        'Digital media production (audio, video, photography)',
        'Public presentation and facilitation',
        'Cultural heritage preservation through technology',
      ],
      story: {
        name: 'Marcus Reyes',
        pathway: 'AR Heritage Tours volunteer → DSP → Get Creative! → HIP researcher → paid content producer',
        fullStory: 'Marcus first came to an AR Heritage Tour with his grandmother, who wanted to see her old East Austin neighborhood through the augmented reality experience. That afternoon changed his trajectory. He joined DSP to learn digital storytelling, moved through Get Creative! to build his portfolio, and led a HIP research project documenting heritage sites across the city. Today, Marcus is a paid content producer creating heritage media for a local Austin nonprofit.',
        quote: 'I showed up to an AR tour because my grandmother wanted to see her old neighborhood. Two years later, I\'m producing stories for a living.',
      },
      storyImage: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80',
      storyImageAlt: 'Young person using augmented reality technology outdoors in Austin — E4Youth AR Heritage Tours',
      storyImage2: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
      storyImage2Alt: 'Multigenerational group exploring a historic Austin neighborhood together',
      howToEngage: [
        { title: 'Experience a Tour', description: 'Check our schedule for upcoming public AR Heritage Tours across Austin.' },
        { title: 'Bring a Tour to Your Site', description: 'Schools, organizations, and community groups can request a tour experience at your location. Our youth-led team brings the technology and the stories.' },
        { title: 'Partner With Us', description: 'Heritage organizations, cultural institutions, and businesses can partner with E4Youth to co-develop AR Heritage Tour content in your neighborhood.' },
      ],
    },
  },
  'digital-storytelling': {
    meta: {
      title: 'Digital Storytelling Program — Youth Media Training | E4Youth Austin',
      description: 'Youth-led digital storytelling that builds media skills and amplifies community voices. Stipend-supported creative technology experience in Austin, TX.',
    },
    props: {
      title: 'Digital Storytelling Program (DSP)',
      subtitle: 'The foundational youth media training experience — learn to research, produce, and share digital stories rooted in your community.',
      primaryCTA: { text: 'Apply to DSP', href: '/contact' },
      secondaryCTA: { text: 'Learn More', href: '/ecosystem' },
      gradient: 'from-primary via-primary-dark to-purple',
      accentColor: '#4DB8FF',
      whoFor: 'DSP is for young people in Austin who want to learn digital media skills through community storytelling. No prior experience required. If you have a story to tell — about your neighborhood, your family, your culture, or your community — DSP gives you the tools and training to tell it professionally. DSP is also a natural entry point into the broader 4E Ecosystem for youth ready to build real skills.',
      whatHappens: [
        'DSP is a structured, cohort-based experience in digital storytelling. Participants learn the full arc of media production: research, scripting, interviewing, audio recording, video production, photography, and post-production editing. Every project is rooted in community — participants tell stories about the people, places, and histories that matter to them.',
        'The program runs in cohorts with regular sessions over multiple weeks. Participants work individually and in teams, receiving mentorship from experienced facilitators and E4Youth alumni. Final stories are shared at public showcases and community events.',
      ],
      skills: [
        'Digital media production (audio, video, photography)',
        'Research and interviewing techniques',
        'Narrative design and scripting',
        'Editing and post-production workflows',
        'Community-based storytelling methodology',
        'Professional communication and collaboration',
        'Portfolio-ready work samples',
      ],
      story: {
        name: 'James "JT" Thompson',
        pathway: 'DSP participant → Get Creative! audio producer → E4 Live production lead → E4 Level Up → employer-funded audio engineer',
        fullStory: 'JT joined DSP with no technical background — he didn\'t know what a digital audio workstation was. Through DSP, he discovered a talent for audio production and storytelling. He moved into Get Creative! where he produced original audio content, then led production for E4 Live events. Through E4 Level Up, he connected with an Austin music production studio that offered him an employer-funded audio engineering position.',
        quote: 'I walked into DSP not knowing what a DAW was. Now I\'m engineering sessions for artists I grew up listening to.',
      },
      storyImage: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
      storyImageAlt: 'Young person recording digital audio in a studio — E4Youth Digital Storytelling Program',
      storyImage2: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80',
      storyImage2Alt: 'Youth collaborating on a digital storytelling project',
      howToEngage: [
        { title: 'Apply', description: 'Applications for DSP cohorts open on a rolling basis. No prior experience needed.' },
        { title: 'Refer a Young Person', description: 'Educators, parents, and community leaders can connect youth to DSP.' },
        { title: 'Partner With Us', description: 'Organizations and media companies can support DSP through mentorship, resources, or showcase hosting.' },
      ],
    },
  },
  'get-creative': {
    meta: {
      title: 'Get Creative — Youth Creative Technology Education | E4Youth Austin',
      description: 'Hands-on creative technology education for young people. Build skills in design, media, and digital arts through E4Youth\'s stipend-supported Get Creative experience.',
    },
    props: {
      title: 'Get Creative!',
      subtitle: 'Hands-on creative technology education where you develop original projects, build a professional portfolio, and prepare for real creative careers.',
      primaryCTA: { text: 'Apply to Get Creative!', href: '/contact' },
      secondaryCTA: { text: 'See Student Work', href: '/stories' },
      gradient: 'from-purple via-primary-dark to-gold',
      accentColor: '#FCB900',
      whoFor: 'Get Creative! is for young people ready to move beyond foundational skills into original creative production. Most participants have completed DSP or have equivalent experience in digital media. If you\'re ready to create your own work — not just learn techniques — Get Creative! is your studio.',
      whatHappens: [
        'Get Creative! is a project-based creative technology education experience. Participants choose focus areas — graphic design, video production, photography, audio, AR development, or mixed media — and develop original projects from concept to completion.',
        'Each participant builds a professional portfolio throughout the experience. Work is reviewed by mentors, peers, and industry professionals. The experience culminates in public presentations and portfolio showcases where participants present their work to community members, potential employers, and industry partners.',
      ],
      skills: [
        'Advanced creative technology skills in chosen discipline',
        'Professional portfolio development',
        'Project management and creative direction',
        'Public presentation to professional audiences',
        'Industry-standard tools and workflows',
        'Creative problem-solving and critical thinking',
        'Employer-ready work samples and professional identity',
      ],
      story: {
        name: 'Destiny Okafor',
        pathway: 'WOW exhibition attendee → DSP → Get Creative! designer → E4 Level Up → employer-funded UX designer',
        fullStory: 'Destiny first encountered E4Youth at a WOW exhibition and was drawn to the creative technology on display. She moved through DSP and into Get Creative!, where she focused on user experience design. Her portfolio from Get Creative! — including community-centered design projects — caught the attention of an Austin creative agency during a showcase. Through E4 Level Up, she transitioned into an employer-funded UX design role.',
        quote: 'E4Youth didn\'t hand me a job — they helped me build a career I didn\'t know existed.',
      },
      storyImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
      storyImageAlt: 'Young creative professional working on design project — E4Youth Get Creative program',
      storyImage2: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
      storyImage2Alt: 'Student presenting creative portfolio at a professional showcase',
      howToEngage: [
        { title: 'Apply', description: 'Get Creative! accepts participants on a rolling basis. Prior experience in digital media (DSP or equivalent) is recommended.' },
        { title: 'Attend a Showcase', description: 'Community members and industry professionals are invited to portfolio showcases.' },
        { title: 'Partner With Us', description: 'Creative agencies, design firms, and tech companies can mentor participants or host portfolio reviews.' },
      ],
    },
  },
  'hip': {
    meta: {
      title: 'Heritage Innovation Program — Cultural Preservation by Youth | E4Youth Austin',
      description: 'Youth-driven heritage innovation preserving community stories through creative technology. Stipend-supported cultural program in Austin, TX.',
    },
    props: {
      title: 'Heritage Innovation Program (HIP)',
      subtitle: 'Youth-driven heritage research and creative production preserving community stories through technology — with real impact and real leadership.',
      primaryCTA: { text: 'Apply to HIP', href: '/contact' },
      secondaryCTA: { text: 'View Heritage Projects', href: '/stories' },
      gradient: 'from-gold via-purple to-primary-dark',
      accentColor: '#FCB900',
      whoFor: 'HIP is for participants who are ready to lead. It\'s designed for young people and community members with experience in digital media and community-based work who want to take on original heritage research and creative production projects. HIP sits in the Elevate stage of the 4E Ecosystem — it\'s advanced, leadership-oriented, and connected to stipend-supported pathways.',
      whatHappens: [
        'HIP participants lead original research and creative production projects focused on Austin\'s cultural heritage. Projects might include documentary films, AR experiences, oral history archives, community installations, or digital publications. Each project is community-centered — developed in partnership with heritage organizations, neighborhood leaders, and cultural institutions.',
        'Participants work in small teams with structured mentorship from experienced researchers, media professionals, and E4Youth alumni. Projects are designed to have lasting community value and professional-quality output.',
      ],
      skills: [
        'Community-based research and heritage documentation',
        'Advanced creative production across multiple media',
        'Project leadership and team management',
        'Partnership development with community organizations',
        'Professional presentation and public speaking',
        'Published, portfolio-quality heritage projects',
        'Pathways to stipend-supported and employer-funded roles',
      ],
      story: {
        name: 'Kwame Asante',
        pathway: 'E4 Live volunteer → DSP → Get Creative! videographer → HIP documentary lead → stipend-supported media director',
        fullStory: 'Kwame\'s HIP project — a feature-length documentary exploring heritage preservation in East Austin — earned community recognition and professional attention. The research skills, production leadership, and community relationships he built through HIP led directly to his current role as a stipend-supported media director, where he produces E4Youth\'s public content and mentors new participants entering the ecosystem.',
        quote: 'I went from holding a camera at an event to directing the whole production. This ecosystem keeps opening doors.',
      },
      storyImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      storyImageAlt: 'Documentary filmmaker with camera — E4Youth Heritage Innovation Program',
      storyImage2: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
      storyImage2Alt: 'Community heritage interview and oral history recording session',
      howToEngage: [
        { title: 'Apply', description: 'HIP accepts experienced participants ready for leadership-level projects. Prior E4Youth experience or equivalent community-based work is expected.' },
        { title: 'Propose a Heritage Project', description: 'Community organizations and cultural institutions can propose heritage projects for HIP teams to develop.' },
        { title: 'Partner With Us', description: 'Heritage organizations, archives, libraries, and cultural centers can partner on research and production.' },
      ],
    },
  },
  'wow': {
    meta: {
      title: 'WOW — Youth Workforce Opportunity | E4Youth Austin',
      description: 'Stipend-supported and employer-funded workforce opportunities for young people. Real-world professional experience through E4Youth\'s WOW program in Austin, TX.',
    },
    props: {
      title: 'WOW — Workforce Opportunity',
      subtitle: 'Real-world professional experience connecting young people to stipend-supported and employer-funded opportunities in creative technology.',
      primaryCTA: { text: 'Explore Opportunities', href: '/contact' },
      secondaryCTA: { text: 'Partner as an Employer', href: '/partner' },
      gradient: 'from-primary-dark via-gold to-purple',
      accentColor: '#FCB900',
      whoFor: 'WOW is for young people across multiple stages of the 4E Ecosystem — from public-facing workforce events that are open to everyone, to professional placements that connect experienced participants with real employers. Whether you\'re attending your first WOW exhibition or stepping into a paid placement, WOW meets you where you are.',
      whatHappens: [
        'WOW operates across the ecosystem as both public experience and professional pathway:',
        'WOW Exhibitions & Public Events — Open-access events showcasing creative technology work, connecting attendees to the broader E4Youth ecosystem and workforce opportunities.',
        'Workforce Readiness — Structured preparation including resume building, interview skills, professional communication, and workplace navigation.',
        'Stipend-Supported Positions — Paid work experiences within the E4Youth ecosystem and partner organizations, providing financial stability while building professional skills.',
        'Employer-Funded Roles (Expanding) — Full professional positions funded by industry partners, placing experienced E4Youth participants in real creative technology careers across Austin.',
      ],
      skills: [
        'Professional workplace skills and communication',
        'Industry-specific creative technology competencies',
        'Resume, portfolio, and interview readiness',
        'Real-world work experience with professional references',
        'Employer relationships and networking',
        'Pathways from stipend-supported to employer-funded positions',
      ],
      story: {
        name: 'Sofia Garza-Klein',
        pathway: 'WOW attendee → DSP → Empower presenter → E4 Level Up → employer-funded project manager',
        fullStory: 'Sofia attended her first WOW exhibition out of curiosity — she was drawn to the creative technology on display but didn\'t see herself in tech. Through DSP, she discovered a talent for storytelling and organization. Her Empower-stage presentations demonstrated natural project leadership. Through E4 Level Up, she connected with a creative technology firm that recognized her skills and offered her an employer-funded project management role.',
        quote: 'My DSP story got me my first interview. My portfolio from Get Creative! got me the offer.',
      },
      storyImage: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&q=80',
      storyImageAlt: 'Young professionals at a creative technology showcase event — E4Youth WOW',
      storyImage2: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=600&q=80',
      storyImage2Alt: 'Professional networking at a creative industry event',
      howToEngage: [
        { title: 'Attend a WOW Event', description: 'WOW exhibitions and public events are open to everyone. Check our schedule for upcoming events.' },
        { title: 'Apply for a Position', description: 'Stipend-supported and employer-funded positions are available for experienced E4Youth participants.' },
        { title: 'Partner as an Employer', description: 'Businesses and organizations across Austin can create employer-funded roles and host WOW participants.' },
      ],
    },
  },
  'wow-heritage-center': {
    meta: {
      title: 'WOW Heritage Center — Youth Workforce at the Heritage Center | E4Youth Austin',
      description: 'Youth workforce development at Austin\'s Heritage Center. Stipend-supported and employer-funded positions connecting culture, community, and career readiness.',
    },
    props: {
      title: 'WOW Heritage Center',
      subtitle: 'The physical hub of the 4E Ecosystem — where heritage, creative technology, and workforce development come together under one roof.',
      primaryCTA: { text: 'Visit the Center', href: '/contact' },
      secondaryCTA: { text: 'Partner With the Heritage Center', href: '/partner' },
      gradient: 'from-primary via-primary-dark to-mint',
      accentColor: '#0072CE',
      whoFor: 'The WOW Heritage Center serves everyone in the E4Youth ecosystem and the broader Austin community. It\'s a place for young people to learn, create, and work. It\'s a place for community members to experience heritage programming. It\'s a place for partners and employers to connect with emerging creative technology talent. If you\'re part of the 4E Ecosystem — or want to be — the Heritage Center is where it all comes together.',
      whatHappens: [
        'The WOW Heritage Center is a physical space that supports every stage of the 4E Ecosystem:',
        'Engage in Place — Public heritage exhibitions, AR Heritage Tour launch points, community events, and open-access creative technology demonstrations bring people into the ecosystem through the Center\'s doors.',
        'Educate in Place — DSP cohorts, workshops, and creative technology labs run on-site, giving participants access to professional equipment, studio space, and dedicated learning environments.',
        'Empower in Place — Portfolio showcases, public presentations, and creative exhibitions happen at the Center, giving participants a professional venue to present work to community and industry audiences.',
        'Elevate in Place — Stipend-supported and employer-funded positions at the Heritage Center itself provide real professional experience in heritage programming, creative production, event management, and community engagement.',
      ],
      skills: [
        'Heritage programming and cultural event management',
        'Creative technology production in a professional facility',
        'Community engagement and public-facing communication',
        'Professional workplace experience in a real cultural institution',
        'Pathways from stipend-supported to employer-funded heritage roles',
      ],
      story: {
        name: 'Linh Tran',
        pathway: 'AR Heritage Tours participant → Educate labs → Get Creative! photographer → WOW Heritage Center guide → paid heritage programming lead',
        fullStory: 'Linh\'s journey through the ecosystem took shape largely inside the Heritage Center walls. She started as an AR Heritage Tour participant, took Educate workshops on-site, built her photography portfolio through Get Creative!, and became a Heritage Center guide. Today, she leads heritage programming at the Center — designing exhibitions, coordinating events, and mentoring the next generation of Heritage Center staff.',
        quote: 'The Heritage Center became my classroom, my portfolio, and then my workplace.',
      },
      storyImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      storyImageAlt: 'Cultural heritage center interior with exhibition space — E4Youth WOW Heritage Center',
      storyImage2: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
      storyImage2Alt: 'Young person guiding visitors through a heritage exhibition',
      howToEngage: [
        { title: 'Visit', description: 'The WOW Heritage Center is open to the public. Come experience heritage exhibitions, attend community events, or simply explore the space.' },
        { title: 'Partner', description: 'Cultural organizations, businesses, and educational institutions can partner with the Heritage Center to co-develop programming, host events, or create workforce opportunities.' },
        { title: 'Support', description: 'Funders and community supporters can invest in the Heritage Center\'s capacity to serve as the physical home of the 4E Ecosystem.' },
      ],
    },
  },
  'e4-level-up': {
    meta: {
      title: 'E4 Level Up — Youth Career Advancement | E4Youth Austin',
      description: 'Elevate your career path. E4 Level Up connects experienced youth to employer-funded professional opportunities and leadership roles in Austin, TX.',
    },
    props: {
      title: 'E4 Level Up',
      subtitle: 'Career advancement connecting experienced E4Youth participants to employer-funded professional opportunities and visible leadership roles.',
      primaryCTA: { text: 'Apply to Level Up', href: '/contact' },
      secondaryCTA: { text: 'Partner as an Employer', href: '/partner' },
      gradient: 'from-mint via-primary-dark to-purple',
      accentColor: '#7BDCB5',
      whoFor: 'E4 Level Up is for E4Youth participants who have moved through earlier ecosystem stages and are ready for the next step: real careers. If you\'ve built skills through Educate experiences, produced professional work through Empower, and demonstrated leadership readiness, Level Up connects you to employer-funded positions and career advancement opportunities across Austin\'s creative technology sector.',
      whatHappens: [
        'E4 Level Up is a structured career advancement experience within the Elevate stage of the 4E Ecosystem:',
        'Stipend-Supported Cohorts — Participants enter structured cohorts with stipend support, focusing on advanced professional development, industry networking, and career readiness.',
        'Employer Matching — Level Up connects participants with employer partners across Austin — creative agencies, tech companies, media organizations, heritage institutions, and more.',
        'Paid Pilot Placements — Real-world work placements with partner organizations, designed to demonstrate capability and build employer relationships.',
        'Employer-Funded Roles (Expanding) — Full professional positions funded by industry partners. This pathway is actively growing as more Austin employers connect with the E4Youth talent pipeline.',
        'Return-to-Ecosystem Mentorship — Level Up participants are encouraged to return as mentors and facilitators, strengthening the Engage stage for the next generation.',
      ],
      skills: [
        'Advanced professional skills in creative technology',
        'Industry networking and employer relationships',
        'Career navigation and professional development',
        'Leadership and mentorship capability',
        'Financial stability through stipend-supported and employer-funded pathways',
        'Long-term career trajectory in Austin\'s creative economy',
      ],
      story: {
        name: 'Destiny Okafor',
        pathway: 'WOW attendee → DSP → Get Creative! → E4 Level Up cohort → employer-funded UX designer',
        fullStory: 'Destiny entered E4 Level Up with a strong portfolio and clear direction. The Level Up cohort connected her with industry mentors who refined her UX design approach. A paid pilot placement at an Austin creative agency turned into a full employer-funded position. She now returns to E4Youth quarterly to review portfolios and mentor Get Creative! participants.',
        quote: 'E4Youth didn\'t hand me a job — they helped me build a career I didn\'t know existed.',
      },
      storyImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80',
      storyImageAlt: 'Young professionals collaborating in a modern workspace — E4Youth Level Up career advancement',
      storyImage2: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
      storyImage2Alt: 'Young professional in a creative technology leadership role',
      howToEngage: [
        { title: 'Apply', description: 'E4 Level Up accepts experienced E4Youth participants with demonstrated skills and portfolio work.' },
        { title: 'Partner as an Employer', description: 'Austin businesses and organizations can join the Level Up employer network, creating paid pilot placements and employer-funded roles.' },
        { title: 'Mentor', description: 'Industry professionals can serve as Level Up mentors, offering career guidance and professional networking.' },
      ],
    },
  },
  'e4-live': {
    meta: {
      title: 'E4 Live — Youth Live Production Experience | E4Youth Austin',
      description: 'Youth-led live event production building professional media skills. Stipend-supported creative technology experience with E4Youth in Austin, TX.',
    },
    props: {
      title: 'E4 Live',
      subtitle: 'Youth-led live event production — building professional media and production skills through real events with real audiences.',
      primaryCTA: { text: 'Join E4 Live', href: '/contact' },
      secondaryCTA: { text: 'Book E4 Live for Your Event', href: '/partner' },
      gradient: 'from-purple via-primary-dark to-gold',
      accentColor: '#9B51E0',
      whoFor: 'E4 Live is for young people interested in live event production — audio, video, lighting, stage management, live streaming, and event coordination. Whether you\'re technically inclined or creatively driven, E4 Live gives you hands-on experience producing real events for real audiences across Austin.',
      whatHappens: [
        'E4 Live participants produce live events from start to finish. This includes community showcases, public exhibitions, heritage events, partner events, and E4Youth\'s own programming. Participants learn every aspect of live production:',
        'Audio engineering and live sound. Video production and live streaming. Lighting design and stage setup. Event coordination and stage management. Live graphics and visual media. Audience engagement and front-of-house operations.',
        'E4 Live operates as a working production team — participants take on real roles with real responsibilities. Events range from intimate community gatherings to large public showcases.',
      ],
      skills: [
        'Live audio, video, and lighting production',
        'Event management and coordination',
        'Professional teamwork under real-time pressure',
        'Technical troubleshooting and problem-solving',
        'Client-facing communication and professionalism',
        'Portfolio of produced live events',
        'Pathways to stipend-supported and employer-funded production roles',
      ],
      story: {
        name: 'James "JT" Thompson',
        pathway: 'DSP participant → Get Creative! audio producer → E4 Live production lead → E4 Level Up → employer-funded audio engineer',
        fullStory: 'JT found his stride in E4 Live, where his audio production skills from DSP and Get Creative! translated directly to live sound engineering. Leading E4 Live productions gave him the professional experience and industry connections that made his transition through E4 Level Up into a full-time employer-funded audio engineering role feel natural.',
        quote: 'I walked into DSP not knowing what a DAW was. Now I\'m engineering sessions for artists I grew up listening to.',
      },
      storyImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      storyImageAlt: 'Live event production with audio equipment and stage lighting — E4Youth E4 Live',
      storyImage2: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&q=80',
      storyImage2Alt: 'Sound engineer working at a professional audio mixing board',
      howToEngage: [
        { title: 'Join E4 Live', description: 'Young people interested in live production can apply to join the E4 Live team.' },
        { title: 'Book E4 Live for Your Event', description: 'Organizations, venues, and community groups can hire the E4 Live team to produce events — supporting youth development while getting professional-quality production.' },
        { title: 'Partner With Us', description: 'Production companies, venues, and event organizations can partner with E4 Live for mentorship, equipment, or co-production opportunities.' },
      ],
    },
  },
}

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(experiences).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const exp = experiences[slug]
  if (!exp) return {}
  return { title: exp.meta.title, description: exp.meta.description }
}

export default async function ExperienceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const exp = experiences[slug]
  if (!exp) notFound()

  return <ExperienceDetailLayout {...exp.props} />
}
