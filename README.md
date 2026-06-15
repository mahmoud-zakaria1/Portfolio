# Personal Portfolio

A modern, minimalist professional portfolio built from the ground up to showcase identity, engineering craft, and flagship full-stack projects.

---

## Overview

This repository is the foundation for a sleek, content-first portfolio experience. The visual language prioritizes clarity, whitespace, and intentional typography — letting project work and technical depth speak for themselves.

**Featured systems:**

| Project | Focus |
| --- | --- |
| **Restaurant Menu System** | Multi-interface platform with distinct experiences for customers, staff, and administrators |
| **Learning Management System (LMS)** | Course delivery, student database architecture, enrollment, and progress tracking |

---

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Markup** | Semantic HTML5 | Accessible structure, SEO-friendly foundation |
| **Logic** | TypeScript | Type-safe interactivity and maintainable application code |
| **Styling** | Modular SCSS | Scalable, component-oriented stylesheet architecture |

---

## Planned Architecture

```
Portfolio/
├── index.html                 # Entry point — semantic page structure
├── src/
│   ├── scripts/
│   │   └── main.ts            # Application entry (navigation, interactions)
│   └── styles/
│       ├── main.scss          # Style entry — imports partials
│       ├── abstracts/         # Variables, mixins, functions
│       ├── base/                # Reset, typography, global utilities
│       ├── components/          # Buttons, cards, navigation
│       └── layout/              # Header, footer, grid, sections
├── dist/                      # Compiled output (CSS & JS)
└── README.md
```

The HTML references compiled assets in `dist/` — keeping source (`src/`) separate from deliverables for a clean build pipeline.

---

## Page Structure

| Section | ID | Description |
| --- | --- | --- |
| **Identity** | `#identity` | Professional introduction and primary call-to-action |
| **Projects** | `#projects` | Featured case studies — Restaurant Menu System & LMS |
| **Contact** | `#contact` | Direct outreach and collaboration entry point |

---

## Design Principles

- **Minimalist aesthetic** — Restrained palette, generous spacing, no visual noise
- **Semantic HTML** — Landmarks, headings hierarchy, and ARIA where it adds clarity
- **Modular styling** — SCSS partials scoped by concern (abstracts → base → layout → components)
- **Progressive enhancement** — Core content is fully readable before JavaScript loads
- **Accessibility first** — Skip links, focus management, and screen-reader-friendly patterns

---

## Getting Started

> Build tooling (TypeScript compiler, SCSS compiler, and dev server) will be configured in a subsequent step.

For now, open `index.html` in a browser to preview the semantic structure. Styles and scripts will activate once the `src/` → `dist/` pipeline is in place.

```bash
# Future workflow (coming soon)
npm install
npm run dev      # Local development with live reload
npm run build    # Compile TypeScript & SCSS to dist/
```

---

## Roadmap

- [x] Initialize repository and semantic HTML scaffold
- [ ] Configure TypeScript and modular SCSS build pipeline
- [ ] Implement design system (tokens, typography, layout grid)
- [ ] Add interactive navigation and micro-interactions
- [ ] Publish detailed case studies for Restaurant Menu System and LMS
- [ ] Deploy to production hosting

---

## Author

**Mahmoud Zakaria** — Full-Stack Developer

- Email: [mz2862001@gmail.com](mailto:mz2862001@gmail.com)

---

## License

This project is for personal portfolio use. All rights reserved unless otherwise noted.
