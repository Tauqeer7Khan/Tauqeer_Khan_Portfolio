# BlueGuard – Coastal Marine Pollution Monitoring Dashboard

A production-level, **vanilla front-end** web application that simulates real-time ocean sensor data, computes a **Marine Health Index**, and visualizes coastal risk zones and environmental trends. Built with **HTML5**, **CSS3**, and **ES6+ JavaScript modules**—no frameworks or UI libraries.

---

## Problem Statement

Coastal and marine health monitoring requires clear visualization of sensor data, risk zoning, and trend analysis. Government and research bodies need dashboards that feel authoritative and reliable while remaining accessible. BlueGuard addresses this by providing a **government-grade** monitoring experience: real-time simulation, threshold-based health scoring, interactive maps, and pollution awareness—all in a single, handcrafted front-end application.

---

## Features

- **Marine Health Index** – Algorithm that starts at 100 and deducts points for threshold breaches (temperature, pH, plastic density, oil, dissolved oxygen). Animated SVG circular progress ring with status: Healthy / Moderate / Critical.
- **Real-time data simulation** – Sensor values update every 5 seconds with smooth transitions via `requestAnimationFrame`. **LIVE** indicator and **Pause/Resume** controls.
- **Interactive coastal map** – SVG-based map with clickable zones, hover glow, risk heat overlay, and modal with region stats. Zone visits stored in LocalStorage.
- **Environmental trend charts** – Custom **Canvas API** line and area charts: 7-day marine health trend and pollution growth simulation. No chart libraries.
- **Alert system** – When thresholds are exceeded, animated alert cards with severity (warning/danger), flash border, and dismiss.
- **Pollution awareness panel** – Global stats (plastic waste, ocean warming, affected marine mammals, at-risk coastlines) with animated counters and infographic section.
- **Premium marine-tech UI** – Deep navy theme, cyan/aqua accents, glassmorphism cards, wave background, smooth transitions, responsive layout with collapsible sidebar.

---

## Folder Structure

```
blueguard/
├── index.html
├── assets/
│   ├── icons/
│   ├── images/
│   └── maps/
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── storage.js
│   │   ├── simulator.js
│   │   └── healthIndex.js
│   ├── components/
│   │   ├── dashboard.js
│   │   ├── map.js
│   │   ├── charts.js
│   │   └── alerts.js
│   └── data/
│       └── mockZones.js
└── README.md
```

---

## Architecture

- **Entry:** `index.html` loads CSS in order (reset → variables → layout → components → animations → responsive) and a single `<script type="module" src="js/main.js" defer>`.
- **Main (`main.js`):** Bootstraps the app: loads session from LocalStorage, initializes dashboard/map/charts/alerts, sets up navigation (section switching), starts the simulator, runs awareness counters, and hides the loading screen.
- **Utils:**  
  - `helpers.js` – `clamp`, `lerp`, `debounce`, `formatCompactNumber`, `ensureNumber`, `animateValue`.  
  - `storage.js` – `loadSession`, `saveSession`, `loadZoneHistory`, `saveZoneVisit` (LocalStorage, JSON).  
  - `simulator.js` – `startSimulator(onUpdate)`, `stopSimulator()`, `getCurrentSensors()`. Uses `setInterval` (5s) and `requestAnimationFrame` for smooth value transitions.  
  - `healthIndex.js` – Pure `computeHealthIndex(sensors)` (score 0–100, status, deductions) and `getStatusLabel(status)`.
- **Components:**  
  - **dashboard.js** – Renders health ring (SVG circle, dash offset, status class) and sensor grid; calls `saveSession` on update.  
  - **map.js** – Injects SVG map from `mockZones.js`, legend, zone click → modal + `saveZoneVisit`.  
  - **charts.js** – Canvas 7-day trend (line) and pollution growth (area); `initCharts()`, `resizeCharts()`, `updateTrendData(score)`.  
  - **alerts.js** – Builds alert cards from `computeHealthIndex(sensors).deductions`; threshold messages and dismiss.
- **Data:** `mockZones.js` – Coastal zone definitions (id, name, risk, healthIndex, sensors) and risk level metadata.

Performance: `defer` for script; single interval with cleanup on pause; debounced resize for charts; CSS transitions where possible; lazy chart init on first use.

---

## How to Run

1. **Local server (recommended)** – ES modules require a server. From the project root:
   ```bash
   npx serve blueguard
   ```
   or
   ```bash
   cd blueguard && python -m http.server 8080
   ```
2. Open `http://localhost:8080` (or the URL shown by `serve`).
3. No build step; no environment variables. Optional: add assets under `assets/icons`, `assets/images`, `assets/maps`.

---

## Resume-Ready Description

**BlueGuard** is a **production-style coastal marine pollution monitoring dashboard** built from scratch with **HTML5, CSS3, and vanilla JavaScript (ES6+ modules)**. It simulates real-time ocean sensor data (temperature, pH, plastic density, oil contamination, dissolved oxygen), computes a **Marine Health Index** via a configurable threshold algorithm, and presents it with an **animated SVG progress ring** and status labels. The app includes an **interactive SVG coastal map** with clickable risk zones and a detail modal, **Canvas-based trend charts** (7-day health and pollution growth) without external libraries, an **alert system** for threshold exceedances, and a **pollution awareness panel** with animated counters. The UI uses a **deep navy / cyan design system**, glassmorphism, wave background, and responsive layout; **LocalStorage** persists the last simulation session and zone visit history. Architecture is **modular** (utils, components, data), with **pure functions** for health calculation, **debounced resize**, and **requestAnimationFrame** for smooth value transitions—suitable for portfolio or environmental-tech roles.
