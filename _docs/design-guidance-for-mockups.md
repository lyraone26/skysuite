# SkySuite — Design Guidance for Mockups

Use this document when briefing Claude (or any AI) to build UI mockups, wireframes, or design explorations for SkySuite. It distills the design system and UX rules from the codebase into a single reference.

---

## 1. Product Context

**SkySuite** is an aviation scheduling and club management platform. It serves flight schools, flight clubs, and aircraft partnerships. Users: club members/students, instructors (CFI), dispatchers, admins, and maintenance (A&P).

**Design north star:** Every screen should feel like it belongs in a premium SaaS product — modern, mobile-first, glassmorphism (“liquid glass”), Apple-level UX. Not a legacy FBO app with a new skin.

---

## 2. Brand Identity

**Tagline:** "Your Co-Pilot for Smarter Operations"

**Values:** Professionalism, Innovation, Community & Connection, Clarity & Simplicity.

---

## 3. Color Palette

**Primary (use as single source of truth):**

| Name        | Hex       | Usage |
|------------|-----------|--------|
| Sky Blue   | `#07BCE7` | Primary brand, CTAs, highlights, links |
| Navy Blue  | `#022C55` | Headers, primary text, dark accents |
| Bright Blue| `#0941C4` | Interactive elements, accents |
| Sage       | `#C2C1A5` | Backgrounds, subtle borders |
| Cream      | `#F5F9E9` | Light backgrounds, cards, surfaces |

**Semantic UI colors:**

| Purpose              | Color / token      | Example use |
|----------------------|-------------------|-------------|
| Success / Available  | Green-500         | Available status, complete |
| Warning / Due Soon   | Yellow-500 / Amber-500 | Squawks, maintenance due |
| Danger / Grounding   | Red-500           | Grounding, conflicts, cancel |
| Neutral / Muted     | Slate-500 or Sage | Secondary text, borders |
| Instructors         | Purple-500 / Indigo-500 | Instructor badges |

**Reservation type colors (schedule blocks, badges):**

- Lesson: green-100 / green-50, text green-800  
- Rental: blue-100 / blue-50, text blue-800  
- Checkride: purple-100 / purple-50, text purple-800  
- Maintenance: orange-100 / orange-50, text orange-800  
- Inspection: yellow-100 / yellow-50, text yellow-800  
- Personal: indigo-100 / indigo-50, text indigo-800  

**Gradient (CTAs, hero):** Sky Blue → Bright Blue, 135deg: `#07BCE7` to `#0941C4`.

---

## 4. Typography

- **Headings:** Montserrat, SemiBold. Navy (`#022C55`) or slate-900.  
  Scale: H1 35px, H2 30px, H3 25px, H4 20px, H5 15px.
- **Body:** Inter, Regular, 14px. Slate-700 for body text.
- **Small / labels:** Inter, 12px. Muted (slate-500 or navy/40).
- **Monospace:** Only for raw METAR/TAF or technical codes.

---

## 5. Visual Language: Liquid Glass

Surfaces should feel like **frosted glass** over a clean background: subtle blur, transparency, soft borders, clear hierarchy — not a muddy blur.

**Card styles:**

- **Default glass card:** White ~72% opacity, backdrop blur, soft white border, rounded-xl (e.g. 1.25rem), light shadow.
- **Elevated glass:** Slightly more opaque, stronger blur and shadow for emphasis.
- **Brand glass:** Cream/sage tint, soft sage border.
- **Stat / inner cells:** Very subtle navy tint (e.g. navy 3% gradient), thin border, rounded-lg.

Avoid flat solid panels unless for deliberate contrast (e.g. destructive actions).

---

## 6. Layout & Spacing

- **Section cards:** Padding p-4 or p-6, border-radius rounded-xl.
- **Inner blocks:** p-3, rounded-lg.
- **Gaps between sections:** space-y-6 (24px).
- **Minimum touch target:** 44×44px (WCAG).
- **Resource/sidebar column:** 200px (sticky when applicable).
- **Side panel / sheet:** 400px desktop; full-width or near full-height on mobile.

**Breakpoints (mobile-first):**

- &lt; 768px: stacked layout, bottom sheets, list/card views.
- ≥ 768px: grid layouts, side panels from the right.
- ≥ 1024px: grid + side panel visible together.
- ≥ 1280px: max-width content, generous spacing.

---

## 7. Components & Patterns

- **Buttons:** Primary = brand gradient (Sky Blue → Bright Blue) or solid Sky Blue. Secondary = outline or muted fill. Destructive = red.
- **Badges:** Small pills for status (e.g. available, in MX, grounded), reservation type, severity (info, minor, major, grounding). Use semantic colors.
- **Cards:** Prefer glass cards (see §5). Section header: icon + title + optional count + optional action (e.g. “View all”).
- **Side panels:** Use for detail views and forms — not modals. Desktop: slide from right, 400px. Mobile: bottom sheet.
- **Popovers / tooltips:** For quick info or single action (e.g. aircraft squawk summary + “Book”). Don’t hide critical actions behind multiple clicks.
- **Empty states:** Icon + short title + one-line description. Muted text, optional CTA.

**Progressive disclosure:**

- **Layer 1 (glanceable):** Status dots, badges, next flight — zero clicks.
- **Layer 2 (one click):** Popover, expandable row, or side panel.
- **Layer 3 (intentional):** “More”, “Settings”, or “Advanced” for power users.

---

## 8. UX Rules (Mockup-Relevant)

- **Prefer inline and panels over modals.** Modals only for destructive confirmations or blocking alerts (e.g. “Aircraft grounded — choose another”).
- **80/20:** Design the path that 80% of users take first; advanced options discoverable but not in the way.
- **Interaction budget:** Common actions in ≤3 taps (e.g. book flight: drag slot → confirm inline).
- **Schedule in view:** If the user should still see the schedule while acting, use a panel or inline card, not a full-screen modal.
- **Role-aware:** Five roles (member/student, instructor, admin, maintenance, dispatcher). Mockups can show one role’s view but note which role it is; dashboards and schedule vary by role.

---

## 9. Aviation Terminology (Copy & Labels)

Use consistently in mockups:

- Tail number (not “plane ID”)
- Hobbs / Tach time (not “engine time”)
- Squawk (not “defect” or “bug”)
- CFI, CFII, MEI for instructor levels
- VFR / MVFR / IFR / LIFR for weather
- METAR / TAF for weather data
- Wet / Dry rate (fuel included or not)
- Pre-flight, post-flight, currency

---

## 10. Z-Index (for Overlays)

- Content: 1  
- Time cursor / indicators: 5  
- Reservation blocks: 10  
- Sticky headers / resource labels: 20–30  
- Ghost/drag preview: 50  
- Drag tooltip: 100  
- Side panels / sheets: 200  
- Popovers / dropdowns: 300  
- Alert/destructive modal: 9999  

---

## 11. Prompt Snippet for Claude

You can paste this when asking for mockups:

```
Design UI mockups for SkySuite, an aviation scheduling and club management platform.

- **Visual style:** Premium SaaS, mobile-first, glassmorphism (“liquid glass”): frosted cards, soft borders, blur. Brand colors: Sky Blue #07BCE7, Navy #022C55, Bright Blue #0941C4, Cream #F5F9E9, Sage #C2C1A5. Use the design doc at docs/design-guidance-for-mockups.md for full palette, typography (Montserrat headings, Inter body), spacing, and components.
- **UX:** Prefer side panels and inline edits over modals. 80/20: common path in ≤3 interactions. Status visible at a glance (dots, badges); details one click away (popover or panel).
- **Audience:** Flight clubs, flight schools, aircraft partnerships — roles: pilot, instructor, dispatcher, admin, maintenance. Use correct aviation terms (tail number, squawk, Hobbs, VFR/IFR, etc.).
```

---

## 12. Where This Comes From in the Repo

- **Full rules and patterns:** `.cursor/rules/claude.md` (design philosophy, component patterns, role-based views, Roger AI placement, performance, a11y).
- **Design tokens and CSS:** `app/globals.css` (variables, glass classes, gradients, z-index).
- **Brand assets:** `public/brand/README.md` and `/brand/` (logo, icon, usage).
- **This doc:** `docs/design-guidance-for-mockups.md` — distilled for mockup/wireframe briefs.

Update this doc when you add or change design tokens or brand rules so mockups stay in sync with the app.
