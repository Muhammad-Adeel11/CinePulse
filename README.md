# 🎬 CinePulse

A clean, modern, Netflix-inspired movie browsing app built with **React + Vite**, fetching live data from the **OMDb API**. Built as a Full Stack Web Development Internship project — simple, readable, and easy to explain in an interview.

![Status](https://img.shields.io/badge/status-complete-brightgreen)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-HTTP-5A29E4?logo=axios&logoColor=white)

### 🔗 Live Demo — *[(https://cine-pulse-ten.vercel.app/)]*
### 🔗 Video Walkthrough — *[]*

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Folder Structure](#-folder-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [API Configuration](#-api-configuration)
- [Running the Project](#️-running-the-project)
- [Build for Production](#-build-for-production)
- [Application States](#-application-states)
- [Design System](#-design-system)
- [Accessibility](#-accessibility)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Future Improvements](#-future-improvements)
- [License](#-license)

---

## 🌌 Overview

**CinePulse** lets users search and filter movies, TV series, and episodes in real time using the OMDb API. It's built to demonstrate solid, production-style React fundamentals without unnecessary complexity — a single custom hook manages all data-fetching state, one file owns all API calls, and every UI piece is a small, reusable component.

---

## ✨ Features

- 🔍 **Debounced search** — searches update as you type, without spamming the API on every keystroke
- 🎚️ **Filter by type** — Movies, Series, or Episodes
- 💀 **Skeleton loading state** — animated placeholder cards instead of a plain "Loading..." message
- ⚠️ **Friendly error handling** — a styled error card with a Retry button if the API call fails
- 📭 **Empty state** — clear "No Movies Found" message when a search returns nothing
- 🎴 **Movie cards** — poster, title, year, type badge, and IMDb rating (when available)
- 📱 **Fully responsive** — 2-column grid on mobile, up to 5-column on large desktop
- 🎨 **Consistent design system** — dark theme, reusable spacing/color tokens, soft shadows, smooth hover states
- ♿ **Accessible** — semantic HTML, alt text, visible focus states, ARIA labels on interactive elements

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18 + Vite |
| Styling | CSS Modules (no Tailwind / Bootstrap / MUI) |
| HTTP Client | Axios |
| Icons | React Icons |
| Data Source | [OMDb API](https://www.omdbapi.com/) |
| State Management | React hooks only (`useState`, `useEffect`) — no Redux, no Context |
| Language | JavaScript (no TypeScript) |

---

## 📁 Folder Structure

```
movie-explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── movieApi.js         # The ONLY file that talks to the network
│   ├── assets/                  # Static local images
│   ├── components/               # One folder per reusable UI piece
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── SearchBar/
│   │   ├── Filter/
│   │   ├── MovieCard/
│   │   ├── MovieGrid/
│   │   ├── SkeletonCard/
│   │   ├── ErrorCard/
│   │   ├── EmptyState/
│   │   └── Footer/
│   ├── hooks/
│   │   └── useMovies.js          # Owns fetch / loading / error state
│   ├── pages/
│   │   └── Home/                  # Composes all components together
│   ├── constants/
│   │   └── filters.js
│   ├── utils/
│   │   └── debounce.js
│   ├── styles/                     # Design tokens, reset, global styles
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

**Why this structure:**

| Folder | Purpose |
|---|---|
| `api/` | Centralizes every network request — components never call Axios directly, so if the API changes, only one file needs updating |
| `components/` | Each component is self-contained: its own `.jsx` and `.module.css`, no shared giant stylesheet |
| `hooks/` | Extracts data-fetching logic out of the UI layer — `useMovies` handles loading/error/data so pages stay simple and readable |
| `pages/` | The top-level screen that composes components together |
| `constants/` | Static values (like filter options) kept separate from logic |
| `utils/` | Small, pure helper functions like the search debounce |
| `styles/` | Global design tokens — the single source of truth for colors, spacing, and typography |

---

## ✅ Prerequisites

- **Node.js** v18 or higher ([download](https://nodejs.org/))
- **npm** v9 or higher (bundled with Node.js)
- A free **OMDb API key** (see [API Configuration](#-api-configuration))

---

## 📦 Installation

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
npm install
```

**Core dependencies:**
```bash
npm install axios react-icons
```

---

## 🔑 API Configuration

This project uses the free [OMDb API](https://www.omdbapi.com/). Your API key is kept out of the codebase entirely — it's loaded from an environment variable, never hardcoded in any component.

1. Get a free key at **[omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)** (check your email to activate it)
2. Copy `.env.example` and rename the copy to `.env`
3. Paste your key in:
   ```
   VITE_OMDB_API_KEY=your_real_key_here
   ```
4. Restart the dev server if it was already running — Vite only reads `.env` at startup

> ⚠️ `.env` is listed in `.gitignore` on purpose. Never commit your real API key to GitHub.

---

## ▶️ Running the Project

```bash
npm run dev
```

Open your browser at:
```
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

Production files are output to the `/dist` folder.

---

## 🧩 Application States

The app handles all four data states explicitly, each with its own dedicated component:

| State | Component | Behavior |
|---|---|---|
| **Loading** | `SkeletonCard` | Shimmering placeholder cards matching the real card layout — no layout shift when data arrives |
| **Error** | `ErrorCard` | Friendly message + Retry button if the API call fails |
| **Empty** | `EmptyState` | "No Movies Found — Try another search" when results are empty |
| **Success** | `MovieGrid` + `MovieCard` | Responsive grid of movie cards with poster, year, type, and rating |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0F172A` |
| Card Background | `#1E293B` |
| Accent (Primary) | `#EF4444` |
| Accent (Secondary) | `#F59E0B` |
| Text | White |
| Secondary Text | Light Gray (`#94A3B8`) |
| Font | Inter |
| Border Radius Scale | 8px / 12px / 16px |
| Spacing Scale | 8px base |

Design principles: dark theme, soft shadows, rounded corners, minimal hover animations (card lift + button scale), no flashy effects.

---

## ♿ Accessibility

- Semantic HTML (`<header>`, `<main>`, `<footer>`, `<article>`)
- Descriptive `alt` text on all movie posters
- `aria-label` on the search input and filter group
- Visible `:focus-visible` outlines on all interactive elements
- Sufficient color contrast against the dark background

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
When prompted, add your `VITE_OMDB_API_KEY` as an environment variable in the Vercel project settings — it won't read your local `.env` file automatically.

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```
Add `VITE_OMDB_API_KEY` under **Site settings → Environment variables**.

---

## 🐛 Troubleshooting

| Issue | Fix |
|---|---|
| "Invalid API key" error | Confirm `.env` exists (not just `.env.example`) and the key is correct, then restart `npm run dev` |
| Blank white page | Open browser DevTools (F12) → Console tab for the actual error — usually a missing export or bad import path |
| `Failed to resolve import` | Double-check the file exists at the exact path and casing used in the import |
| Deployed site can't fetch movies | Add the API key as an environment variable in your hosting provider's dashboard — `.env` files aren't deployed |
| No results ever show | Try a common search term like "batman" first to confirm the API key itself is working |

---

## 🔭 Future Improvements

- Add a dedicated movie detail modal/page using `getMovieDetails()` (already built in `api/movieApi.js`, just not wired to a UI yet)
- Add pagination for searches with more than 10 results (OMDb paginates at 10 per page)
- Add a "favorites" list using local storage
- Add sort options (by year, by rating)

---

## 📄 License

This project was built for educational purposes as part of a Full Stack Web Development Internship.

---

Built with ❤️ by **[Your Name]**
