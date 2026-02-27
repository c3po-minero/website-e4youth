# E4Youth Website — Change Request (Feb 27, 2026)

## Overview
Major content + image update. Two sources of truth:
1. **Content changes** — restructured copy, new page (WOW Heritage Center), nav changes
2. **Image placement** — real photos replacing stock/Unsplash images

All images are already converted to WebP in `/public/images/e4youth/`.

---

## NAVIGATION CHANGES

Update Header.tsx nav to:
```
Home | 4E Ecosystem | Experiences | Impact | Partner | WOW Heritage Center | About | Contact
```

- Add "WOW Heritage Center" as a TOP-LEVEL nav item (not under Experiences dropdown)
- Keep Experiences dropdown but update children (see Experiences section below)
- Update Footer.tsx to match

---

## IMAGE MAP (source filename → webp path)

All paths relative to `/images/e4youth/`:

| Original | WebP filename |
|---|---|
| _A4A2514.jpg | _a4a2514.webp |
| _A4A1906.jpg | _a4a1906.webp |
| Copy of _A4A5419.jpg | _a4a5419.webp |
| IMG_5137 (1).JPG | img_5137_1.webp |
| _A4A4672.jpg | _a4a4672.webp |
| Copy of _A4A5235-Edit.jpg | _a4a5235-edit.webp |
| Copy of _A4A5473 (2).jpg | _a4a5473_2.webp |
| _A4A2559.jpg | _a4a2559.webp |
| Copy of _A4A2629.jpg | _a4a2629.webp |
| _A4A2527.jpg | _a4a2527.webp |
| _A4A5630.jpg | _a4a5630.webp |
| 229-_14A1421 (1).jpg | 229-_14a1421_1.webp |
| IMG_7186.jpg | img_7186.webp |
| _A4A9937.jpg | _a4a9937.webp |
| _A4A2225.jpg | _a4a2225.webp |
| _A4A2700.jpg | _a4a2700.webp |
| Copy of _A4A5507.jpg | _a4a5507.webp |
| _A4A1895.jpg | _a4a1895.webp |
| _A4A1891 (1).jpg | _a4a1891_1.webp |
| e4live.jpg | e4live.webp |
| e4levelup.jpg | e4levelup.webp |

### Per-Page Image Assignments

**HOME:**
- Hero → `_a4a2514.webp`
- Ecosystem/Mentorship section → `_a4a1906.webp`
- Innovation/XR section → `_a4a5419.webp`
- Pathways/Story Production section → `img_5137_1.webp`
- Youth Voice/Outcome section → `_a4a4672.webp`

**ABOUT:**
- Hero → `_a4a5235-edit.webp`
- Culture/Identity block → `_a4a5473_2.webp`
- Hands-on Learning block → `_a4a1906.webp`

**WOW HERITAGE CENTER (NEW PAGE at /wow-heritage-center):**
- Hero → `_a4a2559.webp`
- XR Experience block → `_a4a2629.webp`
- Community Dialogue block → `_a4a2527.webp`

**PARTNERS:**
- Hero → `_a4a5630.webp`
- Community Engagement block → `229-_14a1421_1.webp`

**IMPACT:**
- Hero → `img_7186.webp`
- Scale/Cohort image → `_a4a2514.webp`
- Community Visitors → `_a4a9937.webp` (optional)

**CONTACT:**
- Hero → `_a4a2225.webp`
- Secondary/Booth → `_a4a5630.webp`

**EXPERIENCES (individual pages):**
- AR Heritage Tours → `_a4a2700.webp`
- Digital Storytelling (DSP) → `_a4a5507.webp`
- Get Creative! → `_a4a1895.webp`
- Heritage Innovation (HIP) → `img_5137_1.webp`
- WOW — Workforce Opportunity → `_a4a1891_1.webp`
- WOW Heritage Center → `_a4a2559.webp`
- E4 Live → `e4live.webp`
- E4 Level Up → `e4levelup.webp`

---

## CONTENT CHANGES

### HOME

**Hero:**
- H1: "We use storytelling to engage, empower, educate, and elevate across generations."
- Subheadline: "Through the E4 Ecosystem, we connect young creatives, community leaders, and industry partners in pathways that transform stories into skills, opportunity, and visible leadership."
- Primary CTA: "Explore the E4 Ecosystem" → /ecosystem
- Secondary CTAs: "Join an Experience" → /experiences | "Partner With Us" → /partner

**4E Ecosystem Circle section:**
- Center text: "E4 Logo / Ecosystem / Story > Skill > Opportunity > Leadership"
- Supporting line: "We use the 4E's to build the E4 Ecosystem — a circular pathway that transforms storytelling into opportunity."

**Elevate In Action section (replaces "Elevate Proof — Where This Leads"):**
- Keep 2-3 individual spotlight tiles with: Name, Pathway Snapshot, Current Role, Short Quote
- CTA: "Meet More Leaders"

**Built Across Generations:**
- New copy: "Youth build skills. Community members share knowledge. Industry partners open doors. Alumni return as leaders. The ecosystem strengthens when each generation contributes."

### E4 ECOSYSTEM PAGE

**Hero:**
- New copy: "Built on four pillars — Engage, Educate, Empower, and Elevate — the E4 Ecosystem is a circular pathway that connects storytelling to skill, opportunity, and visible leadership."

**Intro:**
- "Participants enter at multiple points and grow over time. As individuals elevate into paid and visible leadership roles, they reinforce the next cycle of engagement."

**Stage descriptions (IMPORTANT — these are restructured):**

**ENGAGE:** Public storytelling and cultural connection.
- Includes: AR Heritage Tours | Community Showcases | WOW Experiences
- Outcomes: Cultural awareness | Identity exploration | Access to tools

**EDUCATE:** Structured learning and digital fluency.
- Includes: DSP | Workshops & Labs
- Outcomes: Digital literacy | Creative confidence | Communication skills

**EMPOWER:** Applied work and professional visibility.
- Includes: Get Creative! | Portfolio pathways | Public presentations
- Outcomes: Portfolio-ready work | Industry feedback | Public presentation

**ELEVATE (Emphasized):** Advanced, open-access pathways.
- Includes: HIP | Level Up | Stipend-supported cohorts | Employer-aligned placements (expanding)
- Outcomes: Paid pathways | Visible leadership | Workforce alignment | Alumni return as mentors

### EXPERIENCES PAGE

Reorganize into three categories:

**Public Experiences:** AR Heritage Tours | Community Showcases | WOW Public Events
**Learning Experiences:** DSP | Workshops & Labs
**Professional Experiences:** Get Creative! | HIP | Level Up

Note: "Community Showcases" and "Workshops & Labs" are new — create simple entries for them.
Remove or restructure: WOW and WOW Heritage Center are NOT in the experiences dropdown anymore (WOW Heritage Center is its own top-level page).

### WOW HERITAGE CENTER (NEW PAGE — /wow-heritage-center)

Create new page at `/app/wow-heritage-center/` with:

**Hero:** "The physical hub of the E4 Ecosystem." Image: `_a4a2559.webp`

**Activation sections (map to 4E):**
- Engage in place
- Educate in place
- Empower in place
- Elevate in place

**Positioning:** "Not a venue — infrastructure for long-term opportunity."

**Additional images:** XR Experience → `_a4a2629.webp`, Community Dialogue → `_a4a2527.webp`

### IMPACT

**Hero:** "Impact Across the E4 Ecosystem"

**Measured by stage:**
- Engage: Public participation
- Educate: Skill acquisition
- Empower: Portfolio + presentation outcomes
- Elevate: Stipend-supported pathways | Employer-funded placements (expanding) | Leadership activation

### PARTNER

**Hero:** "Partner in Building the E4 Ecosystem"

**The Model:** Four pillars forming a circular pathway from story to leadership.

**Investment Entry Points (replace current partner types):**
- Invest in Engage
- Invest in Educate
- Invest in Empower
- Invest in Elevate (paid pathways + visible leadership)

Note: "Partnerships may include co-designed programs, workforce pilots, evaluation collaboration, sponsorship, and infrastructure investment."

### ABOUT

**Who We Are:** "Community-rooted organization using storytelling as infrastructure to connect generations and expand opportunity."

**Approach:** "We use the 4E's to build the E4 Ecosystem — a circular model of progression and return."

**Differentiators:** Intergenerational | Workforce-aligned | Open-access, advanced pathways | Measurable progression | Partnership-driven

### CONTACT

**Connect Pathways (replace current form intro):**
- Participant → Join an Experience
- Educator → Bring E4 to Your Community
- Partner/Funder → Start a Conversation
- Supporter → Support the Ecosystem

General inquiries form below.

---

## TONE

"Confident. Declarative. Intergenerational. Infrastructure-forward. Assumes legitimacy."

---

## IMPORTANT RULES

1. Replace ALL Unsplash/external image URLs with local WebP images from `/images/e4youth/`
2. Use Next.js `<Image>` component for all images with proper alt text
3. Keep existing design system (Tailwind classes, animations, component patterns)
4. Do NOT change the 4E stage colors: Engage #4DB8FF, Educate #9B51E0, Empower #FCB900, Elevate #7BDCB5
5. Do NOT use emojis — use Font Awesome icons only
6. Maintain ADA compliance (alt text, heading hierarchy, contrast)
7. Deploy to `staging` branch — NOT main
8. Commit with detailed message describing all changes
