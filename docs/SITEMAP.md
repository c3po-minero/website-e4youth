# E4 Youth — Website Sitemap & Navigation Architecture

## URL Structure & Routing Plan

### Root Level Pages
```
/                           → Home (Public Landing)
/funders                    → Funder & Institutional Home
/about                      → About E4 Youth
/contact                    → Contact & Get Involved
/partner                    → Partner With Us
/stories                    → Stories & Showcases
/impact                     → Impact & Evaluation
```

### Programs Section
```
/programs                   → Programs Landing (Overview)
/programs/dsp              → Digital Storytelling Program
/programs/get-creative     → Get Creative!
/programs/hip              → Heritage & Innovation Pathways
```

### Experiences & Platforms Section
```
/experiences               → Experiences Landing (Optional)
/experiences/wow           → What Once Was (WOW)
/experiences/heritage-center → WOW Heritage Center
/experiences/live          → E4 Live
/experiences/level-up      → E4 Level Up
```

## Site Hierarchy

```
E4 Youth Website
├── Home (/)
├── Funder Home (/funders)
├── Programs (/programs)
│   ├── Programs Overview (/programs)
│   ├── Digital Storytelling Program (/programs/dsp)
│   ├── Get Creative! (/programs/get-creative)
│   └── Heritage & Innovation Pathways (/programs/hip)
├── Experiences (/experiences)
│   ├── What Once Was (/experiences/wow)
│   ├── WOW Heritage Center (/experiences/heritage-center)
│   ├── E4 Live (/experiences/live)
│   └── E4 Level Up (/experiences/level-up)
├── Stories & Showcases (/stories)
├── Impact & Evaluation (/impact)
├── About E4 Youth (/about)
├── Partner With Us (/partner)
└── Contact & Get Involved (/contact)
```

## Navigation Structure

### Primary Navigation (Header)
```
- Home
- Programs ▼
  - All Programs
  - Digital Storytelling Program (DSP)
  - Get Creative!
  - Heritage & Innovation Pathways (HIP)
- Experiences ▼
  - What Once Was (WOW)
  - WOW Heritage Center
  - E4 Live
  - E4 Level Up
- About ▼
  - About E4 Youth
  - Stories & Showcases
  - Impact & Evaluation
- Partner With Us
- Contact
```

### Mobile Navigation
```
☰ Menu
├── Home
├── Programs
│   ├── All Programs
│   ├── DSP
│   ├── Get Creative!
│   └── HIP
├── Experiences
│   ├── What Once Was
│   ├── Heritage Center
│   ├── E4 Live
│   └── E4 Level Up
├── About
│   ├── About E4 Youth
│   ├── Stories & Showcases
│   └── Impact & Evaluation
├── Partner With Us
└── Contact
```

### Footer Navigation
```
Programs
├── Digital Storytelling Program
├── Get Creative!
└── Heritage & Innovation Pathways

Experiences
├── What Once Was
├── WOW Heritage Center
├── E4 Live
└── E4 Level Up

About
├── About E4 Youth
├── Stories & Showcases
├── Impact & Evaluation
└── Contact

Connect
├── Partner With Us
├── Contact Us
└── [Social Media Links]

Quick Links
├── Join an Experience
├── Explore Programs
└── Support the Work
```

## Page Relationships & User Flows

### Primary User Journeys

#### 1. Youth/Family Discovery Flow
```
Home → Programs → Specific Program (DSP/Get Creative/HIP) → Contact
                                                          → Stories (Social Proof)
```

#### 2. Educator/Partner Flow
```
Home → Partner With Us → Programs → Contact
     → About → Impact → Partner With Us → Contact
```

#### 3. Funder/Institutional Flow
```
/funders → Impact → Programs → Partner With Us → Contact
         → About → Stories → Contact
```

#### 4. General Community Flow
```
Home → About → Stories → Experiences → Contact
     → Programs → Stories → Contact
```

## Cross-Page Navigation Elements

### Contextual Navigation
- **Breadcrumbs:** Implement on all non-home pages
  - Format: Home > Programs > Digital Storytelling Program
- **Related Programs:** Show on program detail pages
- **Related Experiences:** Cross-link between experiences and programs
- **Success Stories:** Link from programs to relevant stories

### Call-to-Action Flow
Primary CTAs throughout the site should funnel to these key actions:
1. **"Join an Experience"** → Contact form with program interest
2. **"Partner With Us"** → Partner contact form
3. **"Support the Work"** → General contact with support interest
4. **"Explore Programs"** → Programs landing page

## SEO & URL Strategy

### URL Naming Conventions
- Use lowercase, hyphen-separated slugs
- Keep URLs short and descriptive
- Include primary keywords where natural
- Maintain consistency across similar page types

### Page Title Strategy
```
Home: "E4 Youth | Storytelling for Equity & Opportunity"
Funder: "Partner With E4 Youth | Storytelling as Infrastructure"
Programs: "Programs | E4 Youth"
DSP: "Digital Storytelling Program | E4 Youth"
Get Creative: "Get Creative! | E4 Youth Programs"
HIP: "Heritage & Innovation Pathways | E4 Youth"
WOW: "What Once Was | E4 Youth Experiences"
Heritage Center: "WOW Heritage Center | E4 Youth"
E4 Live: "E4 Live Events | E4 Youth"
Level Up: "E4 Level Up Workshops | E4 Youth"
Stories: "Stories & Showcases | E4 Youth"
Impact: "Impact & Evaluation | E4 Youth"
About: "About E4 Youth | Mission & Vision"
Partner: "Partner With Us | E4 Youth"
Contact: "Contact & Get Involved | E4 Youth"
```

## Responsive Navigation Considerations

### Desktop (≥1024px)
- Full horizontal navigation bar
- Dropdown menus on hover/click
- Search functionality (if implemented later)

### Tablet (768px-1023px)
- Condensed horizontal navigation
- Simplified dropdown menus
- Touch-friendly interaction areas

### Mobile (≤767px)
- Hamburger menu icon
- Full-screen overlay menu
- Thumb-friendly touch targets (44px minimum)
- Swipe gestures for menu closure

## Navigation Accessibility Features

### Keyboard Navigation
- Tab order follows logical page flow
- Skip links to main content
- Arrow key navigation for dropdown menus
- Escape key closes open menus

### Screen Reader Support
- ARIA labels for navigation landmarks
- Menu state indicators (expanded/collapsed)
- Current page indicators in navigation
- Descriptive link text (no "click here")

### Visual Indicators
- Focus rings for keyboard users
- Active/current page highlighting
- Hover states for interactive elements
- Loading states for form submissions

## Content Discovery Features

### Search (Future Phase)
- Site-wide search functionality
- Program-specific search
- Story/showcase filtering

### Related Content
- "You might also be interested in" sections
- Tag-based content relationships
- Program prerequisite/progression indicators

### Engagement Tracking
- Popular pages highlighting
- Recent stories/updates
- Upcoming events/experiences (when available)

This sitemap provides a clear, navigable structure that supports both casual exploration and goal-oriented user journeys while maintaining flexibility for future content expansion.