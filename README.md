# 🚀 Personal Portfolio

A modern, minimalist professional portfolio built from the ground up to showcase identity, engineering craft, and flagship full-stack projects.

---

## Overview

This repository is the foundation for a sleek, content-first portfolio experience. The visual language prioritizes clarity, whitespace, and intentional typography — letting project work and technical depth speak for themselves.

🌐 **Live Production Deployment:** [portfolio-nine-dun-58.vercel.app](https://portfolio-nine-dun-58.vercel.app/)

**Featured systems:**

| Project | Focus |
| --- | --- |
| **Restaurant Menu System** | Multi-interface platform with distinct experiences for customers, staff, and administrators |
| **Learning Management System (LMS)** | Course delivery, student database architecture, enrollment, and progress tracking |

---

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Markup** | Semantic HTML5 | Accessible structure, SEO-friendly foundation with Google Search Console verification |
| **Logic** | JavaScript (ES6+) / TypeScript | Type-safe interactivity and maintainable application code |
| **Styling** | Modular SASS (SCSS) | Scalable, component-oriented stylesheet architecture (Architecture completed) |
| **Hosting** | Vercel | Production-ready continuous cloud hosting and automated deployments |

---

## 📂 Current Architecture

We have fully structured the source files using modern web practices, keeping styles modular and logic clean:

```text
Portfolio/
├── dist/                      # Compiled output files (Production ready)
│   ├── scripts/
│   │   └── main.js            # Compiled JavaScript output
│   └── styles/
│       ├── main.css           # Compiled production CSS
│       └── main.css.map       # CSS source map for debugging
├── node_modules/              # Project dependencies and packages
├── src/                       # Source files development directory
│   ├── assets/                # Static media assets
│   │   └── images/
│   │       └── my-photo.webp  # Profile identity image
│   ├── scripts/
│   │   └── main.ts            # Application logic entry point (TypeScript)
│   └── styles/
│       ├── main.scss          # Main SASS compiler — imports all partials
│       ├── abstracts/         # SASS global helpers and configurations
│       │   ├── _functions.scss
│       │   ├── _mixins.scss
│       │   ├── _themes.scss
│       │   └── _variables.scss
│       ├── base/              # Ground-level global styles
│       │   ├── _reset.scss     # CSS reset rules
│       │   ├── _typography.scss# Typography tokens and scales
│       │   └── _utilities.scss # Helper utility classes
│       ├── components/        # Isolated reusable UI blocks
│       │   ├── _buttons.scss
│       │   ├── _cards.scss
│       │   ├── _chatbot.scss
│       │   ├── _contact.scss
│       │   ├── _navigation.scss
│       │   ├── _skills.scss
│       │   └── _theme-toggle.scss
│       └── layout/            # Structural layouts and macro containers
│           ├── _footer.scss
│           ├── _grid.scss
│           ├── _header.scss
│           └── _sections.scss
├── .gitignore                 # Files and folders ignored by Git
├── index.html                 # Entry point — semantic page structure & SEO config
├── package-lock.json          # Dependency tree lockfile
├── package.json               # Scripts and project dependencies manifest
├── tsconfig.json              # TypeScript compilation configuration
└── README.md                  # Project documentation
```

---

## Page Structure

| Section | ID | Description |
| --- | --- | --- |
| **Identity** | `#identity` | Professional introduction and primary call-to-action |
| **Projects** | `#projects` | Featured case studies — Restaurant Menu System & LMS |
| **Contact** | `#contact` | Direct outreach and collaboration entry point |

---

## Design & Engineering Principles

- **Minimalist aesthetic** — Restrained palette, generous spacing, no visual noise
- **Semantic HTML** — Landmarks, headings hierarchy, and ARIA where it adds clarity
- **Modular styling** — Architecture fully split into granular SCSS partials (abstracts, base, components, layout)
- **SEO & Discoverability** — Verified ownership via Google Search Console using metadata injection for production indexing
- **Continuous Deployment** — Integrated with Vercel for instant builds directly synchronized with GitHub commits

---

## Getting Started

The production environment is live! To run and preview the project locally, you can serve it via a local development server:

# Clone the repository
git clone [https://github.com/mahmoud-zakaria1/Portfolio.git](https://github.com/mahmoud-zakaria1/Portfolio.git)

# Navigate into the project directory
cd Portfolio

# Compile SASS locally (ensure SASS compiler is active)
# Open index.html using Live Server or your preferred browser

---

## 🗺️ Roadmap

- [x] Initialize repository and semantic HTML scaffold
- [x] Configure modular SCSS directory and compilation pipeline
- [x] Build component-driven architecture (Theme-toggle, buttons, and layout grids)
- [x] Connect continuous deployment pipeline via Vercel
- [x] Implement Google Search Console verification for global search indexing
- [ ] Publish detailed backend functionality for Restaurant Menu System and LMS

---

## 👤 Author

**Mahmoud Zakaria** — Full-Stack Developer

- **GitHub:** [@mahmoud-zakaria1](https://github.com/mahmoud-zakaria1)
- **LinkedIn:** [Mahmoud Zakaria](https://www.linkedin.com/in/mahmoud-zakaria-0b3297292/)
- **Email:** [mz2862001@gmail.com](mailto:mz2862001@gmail.com)

---

## 📄 License

This project is for personal portfolio use. All rights reserved unless otherwise noted.