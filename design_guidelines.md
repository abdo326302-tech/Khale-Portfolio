# Design Guidelines for Full Stack Developer Portfolio

## Design Approach
**Reference-Based Approach**: Exact replica of the original portfolio website with a clean, professional developer portfolio aesthetic. The design emphasizes clarity, technical credibility, and service offerings through card-based layouts and structured information hierarchy.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (Default)**
- Background: 220 25% 10%
- Surface/Cards: 220 20% 15%
- Border: 220 15% 25%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%
- Accent Primary: 210 100% 60% (for CTAs and highlights)
- Badge Background: 210 80% 25%
- Success/Popular Badge: 142 76% 36%

**Light Mode** (if toggled)
- Background: 0 0% 98%
- Surface/Cards: 0 0% 100%
- Border: 220 15% 90%
- Text Primary: 220 25% 15%
- Text Secondary: 220 15% 40%

### B. Typography

**Font Families**
- Primary: 'Inter' or 'System UI' for body text and UI elements
- Headings: Same as primary for consistency

**Type Scale**
- Hero Name: text-4xl md:text-6xl, font-bold
- Hero Subtitle: text-xl md:text-2xl, text-secondary
- Section Headings: text-3xl md:text-4xl, font-bold
- Card Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base, line-height-relaxed
- Package Titles: text-2xl, font-bold
- Tech Badges: text-sm, font-medium

### C. Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-6xl mx-auto

**Grid System**
- Skills Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Pricing Tiers: grid-cols-1 md:grid-cols-3
- Projects: grid-cols-1 md:grid-cols-2

### D. Component Library

**Hero Section**
- Centered layout with circular profile image (w-40 h-40, rounded-full, border-4)
- Name and title stacked vertically
- Introductory paragraph (max-w-2xl)
- Two CTA buttons side-by-side (gap-4)
- Background: gradient or solid dark background

**Skill Cards**
- Rounded corners (rounded-lg)
- Dark surface background with border
- Category title at top
- Tech icons/names in grid or list format
- Hover effect: subtle lift (hover:shadow-lg transition)

**Service Packages**
- Three-column cards with equal height
- "Most Popular" badge positioned absolute top-right (rounded-full, success green)
- Package name and timeline at top
- "Core Features" and "Technology Stack" sections
- Bullet points with custom markers
- "Best for" italicized description
- Bottom CTA button (full-width within card)

**Project Cards**
- Image placeholder or icon at top
- Project title and description
- Tech stack badges (inline, rounded-full, small padding)
- Subtle border and shadow

**Contact Section**
- Two-column layout: Phone and Email
- Large icons above contact info
- Central CTA button

### E. Animations
Use sparingly:
- Smooth scroll behavior for anchor links
- Card hover transforms (scale-105 or translateY)
- Button hover states (built-in)
- No complex scroll-triggered animations

## Images

**Profile Image**
- Hero section: Circular professional headshot (320px × 320px recommended)
- Position: Centered above name in hero
- Style: Border with accent color, subtle shadow

**Project Thumbnails** (if available)
- Aspect ratio: 16:9 or 4:3
- Position: Top of project cards
- Fallback: Use colored gradient backgrounds with project initials

**Background Patterns** (optional)
- Subtle grid or dot pattern overlay on hero section
- Very low opacity (5-10%) for texture without distraction

## Section-Specific Guidelines

**Hero**: Full viewport height (min-h-screen), centered content, profile image → name → title → description → CTAs

**About Me**: Single column, centered text (max-w-3xl), concise paragraph

**Technical Skills**: Grid of cards, each card contains category title + list of technologies

**Soft Skills**: Similar card layout but simpler, just skill names

**Services**: Three equal-width cards, middle card has "Most Popular" badge, structured feature lists, pricing-style layout without actual prices

**Projects**: Two-column grid, featured project gets special treatment (larger or first position)

**Courses**: Simple list or grid of course titles, minimal styling

**Contact**: Centered layout, contact methods with icons, prominent CTA button

**Footer**: Simple text attribution "Made by" with links to "Explore More"

## Navigation
- Smooth scroll anchors to sections
- Hero CTA "View Projects" scrolls to projects section
- "Contact Me" scrolls to contact section
- "Get In Touch" is contact form/action trigger