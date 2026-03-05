# SkySuite — Website Development Brief

> **For:** External web developer partner  
> **Purpose:** Build and deploy the SkySuite marketing/landing website on Vercel  
> **Date:** March 2026

---

## 1. Product Overview

**SkySuite** is a full-featured aviation operations platform for flight schools, flight clubs, and aircraft partnerships. It covers scheduling, dispatch, fleet management, maintenance tracking, billing, instructor (CFI) management, and administration — all in one modern SaaS product.

**Tagline:** "Your Co-Pilot for Smarter Operations"

**Target audience:** Flight school owners, club managers, chief flight instructors, dispatchers, A&P mechanics, and student/member pilots.

**Brand values:** Professionalism, Innovation, Community & Connection, Clarity & Simplicity.

---

## 2. Tech Stack

The marketing site should use the same stack as the main application:

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| Runtime | React | 19.x |
| Language | TypeScript (strict) | 5.x |
| CSS | Tailwind CSS v4 | 4.x |
| UI Components | shadcn/ui (New York style) + Radix | latest |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | latest |
| Utilities | clsx, tailwind-merge, class-variance-authority | latest |
| Deployment | Vercel | — |

### Key Configuration Notes

- **Tailwind v4** — uses `@tailwindcss/postcss` in PostCSS config (not the legacy plugin approach)
- **shadcn/ui** — style: `new-york`, base color: `neutral`, CSS variables enabled, icon library: `lucide`
- **Fonts loaded via `next/font`:**
  - **Body:** Inter (`--font-inter`)
  - **Headings:** Montserrat (`--font-heading`) — weights 400, 500, 600, 700, 800, 900
- **Path aliases:** `@/components`, `@/lib/utils`, `@/components/ui`, `@/lib`, `@/hooks`

---

## 3. Design System

### Design North Star

> Every screen should feel like it belongs in a premium SaaS product — modern, mobile-first, glassmorphism ("liquid glass"), Apple-level UX. Not a legacy FBO app with a new skin.

### 3.1 Color Palette

**Primary brand colors (single source of truth):**

| Name | Hex | CSS Variable | Usage |
|---|---|---|---|
| Sky Blue | `#07BCE7` | `--sky-blue` | Primary brand, CTAs, highlights, links |
| Navy Blue | `#022C55` | `--navy-blue` | Headers, primary text, dark accents |
| Bright Blue | `#0941C4` | `--bright-blue` | Interactive elements, accents |
| Sage | `#C2C1A5` | `--sage` | Backgrounds, subtle borders |
| Cream | `#F5F9E9` | `--cream` | Light backgrounds, cards, surfaces |

**Semantic colors:**

| Purpose | Color |
|---|---|
| Success / Available | `#16a34a` (green-600) |
| Warning / Due Soon | `#d97706` (amber-600) |
| Danger / Grounding | `#dc2626` (red-600) |
| Info | `#07BCE7` (sky blue) |
| Instructor accent | `#7c3aed` (violet-600) |

**Brand gradient (hero sections, CTAs, feature highlights):**

```css
background: linear-gradient(135deg, #07BCE7 0%, #0941C4 100%);
```

**Page background:**

```css
background-color: #F5F7F0;
```

### 3.2 Typography

| Element | Font | Weight | Size | Color |
|---|---|---|---|---|
| H1 | Montserrat | 700–800 | 35px (2.2rem) | Navy `#022C55` |
| H2 | Montserrat | 600–700 | 30px (1.875rem) | Navy `#022C55` |
| H3 | Montserrat | 600 | 25px (1.5rem) | Navy or slate-900 |
| H4 | Montserrat | 600 | 20px (1.25rem) | Navy or slate-800 |
| Body | Inter | 400 | 14–16px | Slate-700 |
| Small / Labels | Inter | 400–500 | 12px | Slate-500 or navy/40 |

### 3.3 Visual Language: Liquid Glass

Surfaces should feel like **frosted glass** over a clean background — subtle blur, transparency, soft borders, clear hierarchy.

**Glass card styles to replicate:**

```css
/* Default glass card */
.glass-card {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem; /* rounded-xl */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

/* Elevated glass (hero cards, featured sections) */
.glass-elevated {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 1rem;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.08);
}

/* Brand glass (testimonials, feature highlights) */
.glass-brand {
  background: linear-gradient(135deg, rgba(245, 249, 233, 0.6), rgba(194, 193, 165, 0.15));
  backdrop-filter: blur(16px);
  border: 1px solid rgba(194, 193, 165, 0.3);
  border-radius: 1rem;
}

/* Brand gradient with shimmer (CTA buttons) */
.brand-gradient {
  background: linear-gradient(135deg, #07BCE7 0%, #0941C4 100%);
  color: white;
  border-radius: 0.75rem;
}
```

### 3.4 Spacing & Layout

- Section padding: `py-16` to `py-24` (responsive)
- Max content width: `max-w-7xl` (1280px) centered
- Card padding: `p-6` or `p-8`
- Section gaps: `space-y-6` (24px) or `gap-8`
- Border radius: `rounded-xl` (1rem) for cards, `rounded-lg` (0.75rem) for buttons/inputs
- Minimum touch target: 44×44px

**Breakpoints (mobile-first):**

| Breakpoint | Behavior |
|---|---|
| < 768px | Stacked layout, single column, mobile nav |
| ≥ 768px | Two-column grids, side-by-side sections |
| ≥ 1024px | Full layouts, larger hero sections |
| ≥ 1280px | Max-width content, generous whitespace |

### 3.5 Components & Patterns

- **Buttons:** Primary = brand gradient or solid Sky Blue with white text. Secondary = outline navy or muted fill. Use `rounded-lg` (0.75rem).
- **Cards:** Prefer glass cards (see §3.3). Include icon + title + description pattern.
- **Badges:** Small pills with semantic colors for feature tags, status indicators.
- **Animations:** Framer Motion for scroll-triggered reveals, hover effects, page transitions. Keep animations subtle and purposeful — no gratuitous motion.

---

## 4. Brand Assets

### Logo Files

Located in `public/brand/`:

| File | Dimensions | Use For |
|---|---|---|
| `logo-full.png` | 2048×616 px | Header, hero, marketing banners (horizontal) |
| `icon.png` | 1892×1784 px | Favicon, social images, square placements |

```tsx
// Full logo usage
import Image from 'next/image';
<Image src="/brand/logo-full.png" alt="SkySuite" width={400} height={120} />

// Icon only
<Image src="/brand/icon.png" alt="SkySuite" width={48} height={48} />
```

### Favicon

Use `/brand/icon.png` as the favicon source.

### Open Graph / Social

- OG image: `/brand/logo-full.png`
- Site title: "SkySuite - Your Co-Pilot for Smarter Operations"
- Description: "Aviation scheduling and club management platform. Built for flight schools, flight clubs, and aircraft partnerships. Simplify scheduling, billing, and maintenance management."

---

## 5. Suggested Site Structure

### Pages

| Page | Route | Purpose |
|---|---|---|
| Home / Landing | `/` | Hero, value proposition, feature overview, CTA |
| Features | `/features` | Detailed feature breakdown by module |
| Pricing | `/pricing` | Plan tiers, comparison table |
| About | `/about` | Team, mission, story |
| Contact | `/contact` | Contact form, demo request |

### Home Page Sections (Suggested)

1. **Hero** — Tagline, subheadline, gradient CTA button, optional hero visual/screenshot
2. **Social proof** — "Trusted by X flight schools" or partner logos
3. **Features overview** — 3–6 top-level feature cards (glass cards with icons)
4. **Feature deep-dive** — Alternating left/right sections with screenshots
5. **Testimonials** — Glass brand cards with quotes
6. **Pricing teaser** — Summary of plans with link to full pricing page
7. **CTA banner** — Gradient background, "Get Started" / "Request a Demo"
8. **Footer** — Logo, nav links, social links, legal

### Key Features to Highlight

These are the core modules of the platform:

| Feature | Description |
|---|---|
| **Smart Scheduling** | Drag-and-drop scheduling for aircraft, instructors, and students. Real-time availability with conflict detection. |
| **Fleet Management** | Track aircraft status, Hobbs/Tach time, squawks, and availability at a glance. |
| **Maintenance Tracking** | Work orders, compliance tracking, inspection schedules, and A&P mechanic workflows. |
| **CFI Portal** | Instructor dashboard with student rosters, endorsements, syllabus management, stage checks, and logbooks. |
| **Billing & Payments** | Automated billing with Stripe integration. Wet/dry rates, instructor fees, account balances. |
| **Role-Based Dashboards** | Tailored views for pilots, instructors, dispatchers, admins, and maintenance personnel. |
| **Live Weather** | Integrated METAR/TAF display with VFR/IFR flight category indicators. |
| **Resource Management** | Manage aircraft, classrooms, simulators, and other bookable resources. |
| **Admin Control Center** | Member management, role/permission configuration, onboarding workflows, and organizational settings. |

---

## 6. Copy & Tone Guidelines

### Voice

- **Professional but approachable** — not stiff corporate, not casual startup slang
- **Aviation-literate** — use correct terminology (see below), the audience knows their domain
- **Confident and clear** — short sentences, active voice, benefit-driven

### Aviation Terminology (Use Correctly)

| Term | Not This |
|---|---|
| Tail number | Plane ID, aircraft number |
| Hobbs / Tach time | Engine time, flight time (generic) |
| Squawk | Defect, bug, issue |
| CFI, CFII, MEI | Instructor (generic) |
| VFR / MVFR / IFR / LIFR | Good/bad weather |
| METAR / TAF | Weather report (generic) |
| Wet / Dry rate | With fuel / without fuel |
| Pre-flight, post-flight | Before/after checks |
| Currency | Certification status |

### Example Hero Copy

> **Your Co-Pilot for Smarter Operations**  
> SkySuite brings scheduling, fleet management, maintenance tracking, and billing into one modern platform — built specifically for flight schools and flying clubs.  
> [Get Started] [Request a Demo]

---

## 7. Vercel Deployment Notes

### Setup

1. Create a new Next.js 16 project with App Router and TypeScript
2. Deploy to Vercel via Git integration (GitHub recommended)
3. Use `vercel.json` only if custom config is needed (rewrites, headers, etc.)

### Environment

- No backend/database required for the marketing site
- If a contact form is included, use Vercel serverless functions or a third-party form service
- Set up a custom domain when ready (Vercel dashboard → Domains)

### Performance Targets

- Lighthouse score: 90+ across all categories
- Use `next/image` for all images (automatic optimization)
- Use `next/font` for Inter and Montserrat (no layout shift)
- Lazy-load below-fold sections with Framer Motion scroll triggers

### SEO

- Unique `<title>` and `<meta description>` per page
- Proper heading hierarchy (single H1 per page)
- Structured data (Organization schema) on the home page
- `sitemap.xml` and `robots.txt` via Next.js metadata API

---

## 8. Dark Mode

The main application supports dark mode, but **the marketing site should default to the light/cream theme** as the primary presentation. Dark mode support is optional for the marketing site — prioritize the light premium aesthetic.

---

## 9. Accessibility

- All images must have meaningful `alt` text
- Color contrast must meet WCAG AA (4.5:1 for body text, 3:1 for large text)
- Interactive elements must be keyboard-navigable
- Focus indicators must be visible
- Minimum touch targets: 44×44px

---

## 10. Reference

For deeper context on the design system and UX patterns used in the application:

- **Design guidance:** `docs/design-guidance-for-mockups.md`
- **Brand assets:** `public/brand/README.md`
- **Application globals:** `app/globals.css` (CSS variables, glass classes, gradients)

---

*This document provides everything needed to build a marketing website that feels cohesive with the SkySuite application. When in doubt, lean toward the premium, glassmorphic aesthetic with the Sky Blue / Navy / Cream palette.*
