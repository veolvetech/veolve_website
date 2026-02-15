# Design & Engineering Notes — Veolve Website

## Purpose

This document defines the **design system, engineering standards, and deployment practices** for the Veolve production website.

The site is no longer a temporary or placeholder experience. It represents a **live, production-ready digital presence** focused on:

* Engineering credibility
* Enterprise-grade visual discipline
* Performance, accessibility, and scalability

This document exists to ensure **consistency, maintainability, and professional quality** as the product evolves.

---

## Project Status

* ✅ Core design finalized
* ✅ All major sections implemented
* ✅ Mobile & desktop responsive behavior defined
* ✅ Animations standardized
* 🔄 Ongoing refinements and feature additions

---

## Design Philosophy

Veolve’s website follows a **minimal, engineering-first design language**:

* No decorative noise
* Intentional motion only
* Strong typography hierarchy
* Clear information flow

### Key Principles

* **Stability over flash** — UI should never jump or shift unexpectedly
* **Motion with purpose** — animations guide attention, not distract
* **Consistency everywhere** — spacing, typography, and behavior must feel unified

---

## Typography

### Primary Font

* **Glot Black**

  * Used for all primary headings (`h1`, `h2`, `h3`)
  * Conveys authority, confidence, and modern enterprise tone

### Body Font

* **Inter**

  * Used for paragraphs, labels, metadata, and UI text
  * Optimized for readability across devices

Typography rules are applied **globally** via Tailwind configuration and base styles — not per component.

---

## Color System

All colors are defined centrally and reused consistently.

### Brand Accent

* Primary accent: `#6e76f0`

### Base Colors

* Primary background: white / light neutral
* Dark sections: near-black (`#0E1130` / black variants)
* Text hierarchy:

  * Headings: near-black
  * Body: gray-600 / gray-700
  * Meta text: gray-500

No additional colors should be introduced without design review.

---

## Layout & Spacing System

### Section Spacing

* Mobile: `py-20`
* Desktop: `py-28`

### Internal Rhythm

* Headings → body spacing is consistent across sections
* Cards use uniform padding
* Vertical gaps are intentional and predictable

All spacing is controlled via shared utility patterns to avoid visual drift.

---

## Motion & Animation Standards

Animations are implemented using **Framer Motion** with strict rules.

### Entry Animations

* Triggered **on scroll**, not on page load
* Run **once** per session
* Standard pattern:

```js
initial={{ opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.6, ease: 'easeOut' }}
```

### Hover Interactions

* Allowed:

  * Shadow changes
  * Color changes
  * Opacity changes
* Not allowed:

  * Layout shifts
  * Translate / scale that affects surrounding layout

Motion must always feel **controlled and deliberate**.

---

## Component Discipline

Each component:

* Has a single responsibility
* Uses shared spacing and typography rules
* Avoids inline overrides unless absolutely necessary

Desktop and mobile behaviors are:

* Clearly defined
* Purposefully different when needed
* Never inconsistent by accident

---

## Accessibility

Accessibility is treated as a **baseline requirement**, not an enhancement.

* Semantic HTML used wherever possible
* Interactive elements are keyboard accessible
* Proper contrast maintained across all states
* Motion does not block content or usability

Future improvements may include:

* ARIA live regions where needed
* Reduced-motion fallbacks

---

## Performance Guidelines

* Minimal JavaScript per page
* Framer Motion used sparingly
* Images optimized and sized correctly
* No unnecessary re-renders

Target:

* Fast first paint
* Smooth scroll
* Stable layout on all devices

---

## Deployment Notes

The site is built as a modern React application and can be deployed to:

* Hostinger
* Vercel
* Netlify
* Any static or Node-compatible host

### Key Rules

* Environment variables must not be hardcoded
* Assets should be optimized before deployment
* Build artifacts should be clean and reproducible

---

## Future Roadmap (Non-Blocking)

* SEO enhancements and metadata tuning
* Analytics integration
* Content iteration and case studies
* Performance audits
* Internationalization if required

---

## Ownership & Maintenance

This document should be updated whenever:

* Design language changes
* Motion rules evolve
* New global patterns are introduced

It acts as the **single source of truth** for Veolve’s web presence.

---

**Status:** Production-ready
