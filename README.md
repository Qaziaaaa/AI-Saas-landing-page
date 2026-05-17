# 🌌 Aether AI — Premium Celestial Modernism AI SaaS Landing Page

[![Framework](https://img.shields.io/badge/Framework-Next.js%2016-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![Style](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Animation](https://img.shields.io/badge/Animations-GSAP%20&%20Framer%20Motion-88CE02?style=flat-square&logo=greensock)](https://greensock.com/)
[![Aesthetic](https://img.shields.io/badge/Aesthetic-Celestial%20Modernism-7C3AED?style=flat-square)](#)

Aether AI is a next-generation SaaS landing page designed with **Celestial Modernism** aesthetics. Engineered using Next.js (App Router), Tailwind CSS, GSAP, and Framer Motion, this page boasts responsive interactive 3D layout modules, triple-layered shadow offsets, and performance-isolated transitions.

---

## ✨ Outstanding Features & Design Systems

### 💎 The 3-Shadow Contact Stack
To preserve crisp layout boundaries and realistic separation depth on deeply dark interfaces, elements use a custom-coded **3-Shadow Stack** instead of standard single-blur shadows:
1.  **Proximity Shadow**: A tight, dark, high-opacity directional offset (`0 4px 10px rgba(0,0,0,0.3)`) representing physical surface contact.
2.  **Ambient Shadow**: A broad, highly diffused environmental backdrop offset (`0 20px 40px -5px rgba(0,0,0,0.5)`) giving space separation.
3.  **Colored Glow Backlight**: A tailored backdrop glow corresponding to each section's color palette (Purple, Cyan, or Pink) producing an ambient neon refraction.

### ⚡ High-Performance GSAP Animation Orchestration
Rather than heavy scroll handlers, animations are powered by custom **GSAP ScrollTrigger staggered timelines**:
*   **Scoped Contexts**: Bound to react `gsap.context` and `gsap.matchMedia` blocks to avoid memory leaks, thread locks, or unmount ghosting.
*   **3D Assembly Sequence**: Landing mockups slide into view, followed by floating telemetry data chips sliding *out* from behind the primary card container before entering a smooth vertical sine-wave float loop.

### 📱 Responsive Native App Mobile UX
To make the page feel like a high-end **native mobile application** on handheld viewports:
*   **Instant Render (MatchMedia)**: Animations are completely bypassed on viewports smaller than `1024px`, avoiding slow column transitions or scroll staggers.
*   **Spring Side-Drawer Sheet**: The mobile nav dropdown is replaced with a premium right-side drawer panel that slides out with precise spring dynamics (`damping: 26, stiffness: 220`), complete with a blurred background backdrop dimmer.
*   **Tactile Active Press**: Interactive cards and buttons scale down instantly to `scale(0.96)` on tap (`:active`), providing an immediate tactile snap with zero sticky hover state delays.

---

## 🛠️ Technology Stack & Libraries

*   **Core**: Next.js 16 (React 19, Turbopack, App Router)
*   **Fonts**: Plus Jakarta Sans, Inter, Geist, and Geist Mono
*   **Styling**: Tailwind CSS, Vanilla CSS custom utility sheets
*   **Animations**: GreenSock (GSAP) ScrollTrigger & Custom Easing, Framer Motion
*   **Icons**: Lucide React

---

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
npm install
```

Then, launch the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) inside your browser to inspect the application.

---

## 📂 Architecture Overview

```
aether-ai/
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Default backup favicon
│   │   ├── icon.svg        # Custom animated Favicon SVG
│   │   ├── globals.css     # 3-Shadow configurations & interactive classes
│   │   ├── layout.tsx      # Font loaders & global metadata
│   │   └── page.tsx        # Structured single-page router container
│   └── components/
│       ├── Navbar.tsx      # Sticky translucent nav & spring side drawer
│       ├── Hero.tsx        # High-performance 3D display & floating meters
│       ├── SocialProof.tsx # Brand staggers & stats columns
│       ├── Features.tsx    # Interactive 3D cards & feature grids
│       ├── DashboardShowcase.tsx # Assembly panels & telemetry cards
│       ├── Benefits.tsx    # Responsive side sections & inertia translations
│       ├── Testimonials.tsx # Staggered grid cards with primary backglows
│       ├── Pricing.tsx     # Animated pricing matrices
│       ├── FAQ.tsx         # Snappy hybrid accordions
│       └── Footer.tsx      # Section navigations & brand columns
```

---

## 🔗 Section Navigation Routes

Anchor links inside the Header, Mobile Drawer, and Footer connect smoothly to their corresponding page targets, utilizing customized scroll heights:

*   **Platform** &rarr; `#features` ([Features.tsx](src/components/Features.tsx))
*   **Solutions** &rarr; `#benefits` ([Benefits.tsx](src/components/Benefits.tsx))
*   **Showcase** &rarr; `#showcase` ([DashboardShowcase.tsx](src/components/DashboardShowcase.tsx))
*   **Pricing** &rarr; `#pricing` ([Pricing.tsx](src/components/Pricing.tsx))

---

Designed with 🌌 **Celestial Modernism** for Aether AI. Engineered for absolute elite visual premium standards.
