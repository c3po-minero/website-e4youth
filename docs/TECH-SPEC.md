# E4 Youth — Technical Specifications

## Architecture Overview

### Technology Stack
- **Framework:** Next.js 14+ (App Router)
- **Runtime:** Node.js 18+
- **Deployment:** Vercel
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** FontAwesome (React components)
- **Analytics:** Vercel Analytics + Google Analytics (optional)

### Project Structure
```
src/
├── app/                    # App Router directory
│   ├── (public)/          # Public route group
│   │   ├── layout.tsx     # Public layout
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── stories/       # Stories & Showcases
│   │   ├── impact/        # Impact & Evaluation
│   │   └── programs/      # Programs section
│   │       ├── page.tsx   # Programs landing
│   │       ├── dsp/       # Digital Storytelling Program
│   │       ├── get-creative/ # Get Creative!
│   │       └── hip/       # Heritage & Innovation Pathways
│   ├── experiences/       # Experiences section
│   │   ├── wow/           # What Once Was
│   │   ├── heritage-center/ # WOW Heritage Center
│   │   ├── live/          # E4 Live
│   │   └── level-up/      # E4 Level Up
│   ├── funders/           # Funder/institutional home
│   ├── partner/           # Partner With Us
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/                # Basic UI components
│   ├── sections/          # Page sections
│   ├── forms/             # Form components
│   └── layout/            # Layout components
├── lib/                   # Utility functions
├── types/                 # TypeScript definitions
└── data/                  # Static data/content
```

## Next.js App Router Implementation

### Route Groups & Layouts
```typescript
// app/layout.tsx - Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

// app/(public)/layout.tsx - Public Pages Layout
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="public-layout">
      <Breadcrumbs />
      {children}
    </div>
  )
}
```

### Static Generation Strategy
```typescript
// For most pages - Static Generation
export default function ProgramPage() {
  return <ProgramContent />
}

// For contact forms - Server Components with form handling
export default function ContactPage() {
  return <ContactForm />
}

// Metadata generation per page
export function generateMetadata(): Metadata {
  return {
    title: 'Digital Storytelling Program | E4 Youth',
    description: 'DSP introduces young people to storytelling and digital literacy...',
    openGraph: {
      title: 'Digital Storytelling Program | E4 Youth',
      description: '...',
      images: ['/images/dsp-hero.jpg'],
    },
  }
}
```

## Component Architecture

### Design System Components
```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'accent' | 'outline'
  size: 'sm' | 'md' | 'lg'
  icon?: React.ComponentType
  children: React.ReactNode
}

// components/ui/Card.tsx
interface CardProps {
  title: string
  description: string
  image?: string
  cta?: {
    text: string
    href: string
  }
}
```

### Layout Components
```typescript
// components/layout/Header.tsx
- Logo
- Navigation (desktop/mobile)
- CTA buttons

// components/layout/Footer.tsx
- Navigation links
- Contact info
- Social media
- Copyright

// components/layout/Navigation.tsx
- Desktop dropdown menus
- Mobile hamburger menu
- Accessibility features
```

### Page Section Components
```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string
  subtitle: string
  primaryCTA: CTAProps
  secondaryCTA?: CTAProps
  backgroundImage?: string
  variant: 'public' | 'funder'
}

// components/sections/ProgramOverview.tsx
// components/sections/ImpactMetrics.tsx
// components/sections/StoriesShowcase.tsx
// components/sections/ContactCTA.tsx
```

### Form Components
```typescript
// components/forms/ContactForm.tsx
interface ContactFormData {
  name: string
  email: string
  organization?: string
  message: string
  interest: 'program' | 'partnership' | 'support' | 'other'
}

// Server Action for form handling
async function submitContact(formData: ContactFormData) {
  // Form validation
  // Email sending (Vercel Email or similar)
  // Database logging (future)
}
```

## Responsive Design System

### Breakpoints (Tailwind CSS)
```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small desktops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Layout Grid
```typescript
// Mobile (default): Single column, stacked
// Tablet (md:): 2-column grid where appropriate
// Desktop (lg:): 3-column grid, sidebar layouts
// Large (xl:): Max-width container, enhanced spacing

const containerClasses = "container mx-auto px-4 sm:px-6 lg:px-8"
const gridClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
```

### Typography Scale
```css
/* Responsive Typography */
.heading-xl: text-4xl md:text-5xl lg:text-6xl
.heading-lg: text-3xl md:text-4xl lg:text-5xl
.heading-md: text-2xl md:text-3xl lg:text-4xl
.heading-sm: text-xl md:text-2xl lg:text-3xl
.body-lg: text-lg md:text-xl
.body: text-base md:text-lg
.body-sm: text-sm md:text-base
```

### Touch Targets & Accessibility
- Minimum 44px touch targets on mobile
- 8px spacing between interactive elements
- Focus rings with 2px outline offset
- High contrast hover states

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** <2.5s
- **FID (First Input Delay):** <100ms
- **CLS (Cumulative Layout Shift):** <0.1

### Image Optimization Strategy
```typescript
// Next.js Image component with optimization
import Image from 'next/image'

// Hero images: 1920x1080, WebP format
// Program cards: 800x600, WebP format
// Story thumbnails: 400x300, WebP format
// Icons: SVG or optimized PNG

const HeroImage = () => (
  <Image
    src="/images/hero-youth.webp"
    alt="Youth engaged in storytelling workshop"
    width={1920}
    height={1080}
    priority
    className="object-cover"
  />
)
```

### Code Splitting & Loading
```typescript
// Dynamic imports for non-critical components
const ContactForm = dynamic(() => import('@/components/forms/ContactForm'), {
  loading: () => <FormSkeleton />,
})

// Lazy loading for below-fold content
const StoriesSection = lazy(() => import('@/components/sections/Stories'))
```

### Caching Strategy
- Static pages: Cache-Control: public, max-age=31536000, immutable
- Dynamic content: ISR with revalidation
- Images: CDN caching with WebP/AVIF support
- Fonts: Preload critical fonts, self-host Google Fonts

## SEO Implementation

### Metadata Strategy
```typescript
// app/layout.tsx - Global metadata
export const metadata: Metadata = {
  title: {
    template: '%s | E4 Youth',
    default: 'E4 Youth | Storytelling for Equity & Opportunity',
  },
  description: 'E4 Youth uses storytelling to unlock equity and opportunity...',
  keywords: ['youth development', 'storytelling', 'digital literacy', 'workforce development'],
  authors: [{ name: 'E4 Youth' }],
  openGraph: {
    type: 'website',
    siteName: 'E4 Youth',
    images: ['/images/og-default.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@e4youth',
  },
}

// Per-page metadata
export function generateMetadata({ params }): Metadata {
  return {
    title: 'Digital Storytelling Program',
    description: 'DSP introduces young people to storytelling, digital literacy...',
    openGraph: {
      title: 'Digital Storytelling Program | E4 Youth',
      description: '...',
      url: '/programs/dsp',
      images: ['/images/dsp-og.jpg'],
    },
  }
}
```

### Structured Data
```typescript
// JSON-LD for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  "name": "E4 Youth",
  "description": "Using storytelling to unlock equity and opportunity",
  "url": "https://e4youth.vercel.app",
  "logo": "/images/e4-logo.png",
  "sameAs": [
    // Social media URLs
  ]
}

// Program schema for each program page
const programSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Digital Storytelling Program",
  "provider": {
    "@type": "Organization",
    "name": "E4 Youth"
  }
}
```

### Sitemap Generation
```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://e4youth.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://e4youth.vercel.app/programs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // ... other pages
  ]
}
```

## FontAwesome Integration

### Installation & Setup
```bash
npm install @fortawesome/fontawesome-svg-core @fortawesome/pro-regular-svg-icons @fortawesome/react-fontawesome
```

### Icon Component System
```typescript
// lib/icons.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUsers, 
  faGraduationCap, 
  faPalette,
  faHandshake,
  faEnvelope,
  faPhone 
} from '@fortawesome/pro-regular-svg-icons'

export const IconLibrary = {
  users: faUsers,
  education: faGraduationCap,
  creative: faPalette,
  partnership: faHandshake,
  email: faEnvelope,
  phone: faPhone,
}

// Usage in components
<FontAwesomeIcon 
  icon={IconLibrary.users} 
  className="w-6 h-6 text-primary" 
/>
```

### Performance Optimization
```typescript
// Tree shaking - only import used icons
// Font loading optimization
// SVG sprite generation for commonly used icons
```

## Form Handling & Contact System

### Server Actions Implementation
```typescript
// app/actions/contact.ts
'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().optional(),
  interest: z.enum(['program', 'partnership', 'support', 'other']),
  message: z.string().min(10),
})

export async function submitContactForm(formData: FormData) {
  const data = contactSchema.parse({
    name: formData.get('name'),
    email: formData.get('email'),
    organization: formData.get('organization'),
    interest: formData.get('interest'),
    message: formData.get('message'),
  })

  // Send email using Vercel's email service or similar
  // Log to analytics
  // Return success response
}
```

### Form Validation & UX
```typescript
// Client-side validation with react-hook-form
// Real-time validation feedback
// Loading states and success messages
// Spam protection with rate limiting
```

## Development Workflow

### Environment Setup
```bash
# Development
npm run dev
# Build
npm run build
# Type checking
npm run type-check
# Linting
npm run lint
# Testing
npm run test
```

### Code Quality Tools
- **ESLint:** Next.js recommended config + accessibility rules
- **Prettier:** Code formatting
- **TypeScript:** Strict mode enabled
- **Husky:** Pre-commit hooks for linting/testing

### Testing Strategy
```typescript
// Unit tests for components with Jest/React Testing Library
// E2E tests with Playwright for critical user flows
// Visual regression testing with Chromatic (optional)
// Accessibility testing with @axe-core/playwright
```

## Security Considerations

### Content Security Policy
```typescript
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-analytics.com;
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: blob: *.unsplash.com *.pexels.com;
      font-src 'self' data:;
      connect-src 'self' *.vercel-analytics.com;
    `
  }
]
```

### Form Security
- CSRF protection via Server Actions
- Rate limiting for form submissions
- Input sanitization and validation
- Email verification for sensitive forms

## Deployment & Monitoring

### Vercel Configuration
```typescript
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 10
    }
  }
}
```

### Analytics & Monitoring
- Vercel Analytics for performance metrics
- Google Analytics for user behavior (optional)
- Error tracking with Sentry (optional)
- Uptime monitoring

### Progressive Enhancement
- Base functionality without JavaScript
- Enhanced experience with JavaScript enabled
- Service Worker for offline functionality (future phase)
- Progressive Web App features (future phase)

This technical specification provides a comprehensive foundation for building a performant, accessible, and maintainable Next.js application that meets all the project requirements while allowing for future growth and enhancement.