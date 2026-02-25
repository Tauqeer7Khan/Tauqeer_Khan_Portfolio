# CarePulse – Smart Preventive Health Monitoring Dashboard

A production-level, frontend-only web application for preventive health monitoring. Built with **HTML5**, **CSS3**, and **vanilla JavaScript (ES6+ modules)**—no React, Tailwind, Bootstrap, or external UI libraries.

![CarePulse](assets/images/screenshot-placeholder.png)

## Overview

CarePulse is a modern SaaS-style healthcare dashboard that helps users track vitals, calculate BMI, detect health risks, visualize trends, and maintain a simple medical records timeline. All data is stored locally in the browser (LocalStorage), with a clean architecture and polished UI suitable for 2026-era health-tech products.

## Features

- **Dashboard** – Heart rate, blood pressure, blood sugar, BMI, and an overall **Health Score** with animated metric cards and SVG progress ring
- **BMI Calculator** – Height (cm) and weight (kg) inputs with auto calculation and color-coded category (Underweight / Normal / Overweight / Obese)
- **Risk detection** – Logic-based alerts for:
  - BP &gt; 140 → Hypertension risk  
  - Blood sugar &gt; 180 → Diabetes risk  
  - BMI &gt; 30 → Obesity risk  
  - Heart rate &gt; 100 → Tachycardia risk  
- **Data visualization** – Weekly health trend line chart (SVG), animated draw effect, no external chart libraries
- **Medical records** – Add records with title, description, and date; timeline UI; delete; persisted in LocalStorage
- **Health score algorithm** – Starts at 100; deducts points for abnormal vitals; displayed as animated circular progress (SVG)
- **Dark mode** – Toggle with preference persisted in LocalStorage
- **Export to JSON** – Download vitals, records, and settings as a single JSON file
- **Onboarding** – Intro overlay on first visit (session-based)
- **Health summary modal** – Quick view of current health score
- **Responsive** – Desktop-first; tablet and mobile layouts; collapsible sidebar; touch-friendly controls
- **Performance** – Deferred scripts, modular JS, debounced inputs, lazy-loaded chart, `requestAnimationFrame`-friendly animations, minimal CSS nesting, system fonts

## Folder structure

```
carepulse/
├── index.html
├── assets/
│   ├── icons/
│   ├── images/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   ├── responsive.css
├── js/
│   ├── main.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── storage.js
│   │   ├── calculator.js
│   ├── components/
│   │   ├── dashboard.js
│   │   ├── charts.js
│   │   ├── alerts.js
│   │   ├── records.js
│   └── data/
│       └── mockData.js
└── README.md
```

## How to run

1. Clone or download the `carepulse` folder.
2. Serve the project over HTTP (ES modules require a same-origin context). Examples:
   - **Node:** `npx serve carepulse` or `npx http-server carepulse -p 8080`
   - **Python 3:** `python -m http.server 8080` (run from inside `carepulse` or point to it)
   - **VS Code:** Use the “Live Server” extension and open `index.html`.
3. Open the URL in a modern browser (e.g. Chrome, Firefox, Edge, Safari).

No build step or backend is required.

## Screenshots

| Dashboard | BMI Calculator | Records |
|-----------|----------------|---------|
| *(Add screenshot of dashboard)* | *(Add screenshot of BMI)* | *(Add screenshot of records)* |

## Tech stack

- **HTML5** – Semantic structure, accessibility hints
- **CSS3** – Custom properties (variables), Grid/Flexbox, no framework
- **JavaScript** – ES6+ modules, `defer`, no globals; pure functions and separation of concerns

## Resume-ready description

*CarePulse is a preventive health monitoring dashboard built from scratch with HTML5, CSS3, and vanilla JavaScript (ES6 modules). It features a modular frontend architecture, LocalStorage persistence, BMI calculation, rule-based risk detection, SVG-based charts and health score ring, dark mode, JSON export, and a fully responsive layout with animations and micro-interactions—demonstrating strong frontend architecture and product-level execution without frameworks or UI libraries.*

## License

MIT (or your preferred license).
