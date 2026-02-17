# E4 Youth — Website Requirements

## Project Info
- **Client:** E4 Youth
- **Organization Type:** Nonprofit using storytelling for youth equity and workforce development
- **Project Type:** New site (not a redesign)
- **Domain:** Vercel subdomain (initial)
- **Stack:** Next.js (App Router) + Vercel + FontAwesome
- **Timeline:** No deadline

## Mission & Vision
**Mission:** E4 Youth uses the power of storytelling to unlock equity and opportunity across generations. They create spaces where communities and emerging creatives can explore identity, build digital literacy, and translate their stories into skills, portfolios, and career-connected opportunities.

**Vision:** Through the 4 E's—Engage, Educate, Empower, and Elevate—E4 Youth develops the next generation of changemakers, artists, technologists, and cultural visionaries.

## User Personas

### Primary Personas

#### 1. Youth Participants (Ages 12-25)
- **Demographics:** School-aged youth through emerging adults, diverse backgrounds
- **Goals:** Learn digital skills, explore creative expression, build portfolios, connect to career opportunities
- **Pain Points:** Limited access to creative technology, need for mentorship, unclear career pathways
- **Device Usage:** Primarily mobile, some tablet/desktop access
- **Digital Literacy:** Variable, from basic to intermediate

#### 2. Educators & Community Partners
- **Demographics:** Teachers, community organization staff, youth program coordinators
- **Goals:** Bring programs to their organizations, support youth development, access resources
- **Pain Points:** Limited budgets, need for turnkey solutions, measuring impact
- **Device Usage:** Desktop primary, mobile secondary
- **Digital Literacy:** Intermediate to advanced

#### 3. Funders & Institutional Partners
- **Demographics:** Foundation program officers, corporate partners, public agency staff
- **Goals:** Understand impact, explore partnerships, evaluate funding opportunities
- **Pain Points:** Need concrete outcomes data, clear partnership pathways
- **Device Usage:** Desktop primary
- **Digital Literacy:** Advanced

#### 4. Parents & Families
- **Demographics:** Caregivers of youth participants, diverse economic backgrounds
- **Goals:** Understand programs, support youth involvement, stay informed
- **Pain Points:** Time constraints, need clear communication about benefits
- **Device Usage:** Mobile primary
- **Digital Literacy:** Basic to intermediate

## Functional Requirements

### Content Management
- **FR-001:** Static site with content managed through code/markdown
- **FR-002:** Rich media support for images, videos, and embedded content
- **FR-003:** Responsive content display across all device types
- **FR-004:** SEO-optimized content structure and metadata

### Navigation & User Experience
- **FR-005:** Dual homepage approach (public vs funder/institutional)
- **FR-006:** Clear program hierarchy and pathways
- **FR-007:** Accessible navigation with keyboard support
- **FR-008:** Contact forms with validation and submission handling
- **FR-009:** Social sharing capabilities for stories and programs

### Program Information
- **FR-010:** Detailed program pages with clear eligibility and outcomes
- **FR-011:** Stories and showcases section with participant work
- **FR-012:** Impact and evaluation data presentation
- **FR-013:** Partnership information and contact pathways

### Performance & Technical
- **FR-014:** Fast loading times (<3s on mobile)
- **FR-015:** Progressive Web App features (optional enhancement)
- **FR-016:** Analytics integration for user behavior tracking
- **FR-017:** Search engine indexing optimization

## Non-Functional Requirements

### Performance
- **NFR-001:** Page load time under 3 seconds on 3G connection
- **NFR-002:** Core Web Vitals scores in "Good" range (LCP <2.5s, FID <100ms, CLS <0.1)
- **NFR-003:** Image optimization with WebP format and responsive sizing
- **NFR-004:** Caching strategy for static assets

### Accessibility (WCAG 2.1 AA Compliance)
- **NFR-005:** Keyboard navigation for all interactive elements
- **NFR-006:** Screen reader compatibility with semantic HTML
- **NFR-007:** Color contrast ratio minimum 4.5:1 for normal text, 3:1 for large text
- **NFR-008:** Alternative text for all meaningful images
- **NFR-009:** Captions or transcripts for video content
- **NFR-010:** Focus indicators for interactive elements
- **NFR-011:** Consistent navigation and layout patterns

### Browser Support
- **NFR-012:** Modern browsers (last 2 versions of Chrome, Firefox, Safari, Edge)
- **NFR-013:** Mobile browsers on iOS and Android
- **NFR-014:** Graceful degradation for older browsers

### Security
- **NFR-015:** HTTPS enforcement
- **NFR-016:** Content Security Policy implementation
- **NFR-017:** Form submission protection against spam/abuse

## Branding Guidelines

### Color Palette
- **Primary:** #4DB8FF (Bright Blue)
- **Secondary:** #54595F (Dark Gray)
- **Text:** #7A7A7A (Medium Gray)
- **Accent:** #0072CE (Deep Blue)
- **Background:** #FFFFFF (White)
- **Success:** #28A745 (Green)
- **Warning:** #FFC107 (Yellow)
- **Error:** #DC3545 (Red)

### Typography
- **Headings:** Modern, clean sans-serif (system fonts or web fonts TBD)
- **Body Text:** Highly readable, accessible font with proper line spacing
- **Minimum Size:** 16px for body text, 14px for secondary text

### Visual Elements
- **Logo:** https://e4youth.org/wp-content/uploads/2024/06/Copy-of-e4-full-white-logo.png
- **Icons:** FontAwesome (no emojis)
- **Images:** Free sources (Unsplash, Pexels), can reference current site images but DO NOT reuse content
- **Visual Style:** Clean, modern, professional yet approachable

## Content Strategy

### Approach
- **DO NOT:** Reuse current site content
- **DO:** Generate rich, complementary content aligned with mission
- **Reference:** Current site (https://e4youth.org/) for images/structure ONLY
- **Tone:** Professional, approachable, empowering, community-focused

### Content Types
- Program descriptions and outcomes
- Participant stories and showcases
- Impact data and evaluation results
- Partnership information
- About/mission content

## Phase 1 Pages (In Scope)

### Core Pages
1. **Home** - Public-facing landing page
2. **Funder & Institutional Home** - Specialized landing for partners
3. **Programs Landing** - Overview of all programs
4. **About E4 Youth** - Mission, vision, and organizational info
5. **Contact & Get Involved** - Contact forms and engagement options

### Program Pages
6. **Digital Storytelling Program (DSP)** - School-aged youth program
7. **Get Creative!** - High school career exploration program
8. **Heritage & Innovation Pathways (HIP)** - College-aged applied learning

### Experience/Platform Pages
9. **What Once Was (WOW)** - Public storytelling platform
10. **WOW Heritage Center** - Physical hub information
11. **E4 Live** - Networking events series
12. **E4 Level Up** - Professional development workshops

### Supporting Pages
13. **Impact & Evaluation** - Data and outcomes
14. **Stories & Showcases** - Participant work highlights
15. **Partner With Us** - Partnership opportunities and contact

## Phase 2 (Excluded from Current Scope)
- Secondary About pages (team, board, history)
- Events index and detail pages
- News/blog/press sections
- Donate/volunteer/sponsor subpages
- User accounts/login functionality
- E-commerce capabilities

## Technical Constraints
- Next.js App Router (not Pages Router)
- Deployment on Vercel
- No server-side database initially
- Static generation preferred where possible
- FontAwesome for icons (no custom SVG icons initially)

## Success Metrics
- Page load performance scores
- Accessibility audit compliance
- User engagement metrics via analytics
- Contact form conversion rates
- Mobile usability scores
- Search engine visibility and ranking