# Ucha Sephiskveradze | Developer Portfolio 🚀

![Angular](https://img.shields.io/badge/Angular-v21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Performance](https://img.shields.io/badge/Lighthouse-90%2B-00CC66?style=for-the-badge)

A modern, high-performance developer portfolio built from the ground up to showcase my expertise in frontend engineering, scalable architecture, and enterprise-ready web applications.

🔗 **[View Live Demo Here](https://uchaportfolio.netlify.app)** _(<- Replace with your actual live link)_

## ✨ Key Features & Architecture

This application was engineered with a strict focus on modern Angular best practices and web performance:

- **Modern Angular (v21):** Fully utilizes Standalone Components, the new `@for`/`@if` control flow, and strictly typed Reactive Forms.
- **Signal-Based State Management:** Uses Angular Signals natively for highly optimized, glitch-free UI state updates (e.g., Toast notifications, loading states).
- **Lighthouse Optimized:** Achieves elite Lighthouse scores through strategic use of `NgOptimizedImage` (WebP formats, explicit priority loading) and strict payload budgeting.
- **Functional Integrations:** Features a fully working Contact Form integrated with the EmailJS API, complete with custom Toast UI notifications and load-state handling.
- **Responsive & Accessible:** Fully responsive design built with Tailwind CSS, ensuring WCAG AA contrast compliance and semantic HTML structure.

## 🛠️ Tech Stack

- **Framework:** Angular v21
- **Styling:** Tailwind CSS
- **Icons:** Lucide Angular & Custom SVG Data Models
- **API Integration:** EmailJS (Browser SDK)
- **Deployment:** [Where you deploy it, e.g., Firebase Hosting / Vercel]

## 📂 Project Structure Highlights

The project follows a modular, feature-based architecture suitable for enterprise scaling:

```text
src/app/
├── core/             # Singleton services (Email, Toast)
├── features/         # Feature components (Hero, Skills, Projects, Contact)
└── shared/           # Reusable UI components (Toast Notifications)
```
