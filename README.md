# 🎬 Movie Search

![React](https://img.shields.io/badge/React-18-blue)
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-black)

A **Single-Page Application (SPA)** built with **React + React Router** that allows users to search for movies and TV shows, browse genres, view details, and save favorites locally.

This project integrates **OMDb** and **TMDB** APIs via **Netlify serverless functions**, keeping API keys secure.

## 🚀 Tech Stack

- ⚡ Vite
- ⚛️ React + React Router
- 🎚️ Context API (Theme support)
- 🧠 LocalStorage persistence
- 💤 Lazy Loading + Suspense
- 🎥 OMDb + TMDB API Integration
- 🔔 Toast notifications
- 📐 Media queries
- 🔐 Netlify Functions

## 📌 Features

- 🔍 Live search with suggestions, debounce + AbortController
- 🎬 Movie/TV details (OMDb)
- 🧩 Genres, cast information, top movies/series, latest releases (TMDB)
- ⭐ Add/Remove favorites stored locally with toast feedback
- 🔄 Pagination support
- 🌓 Dark / Light mode with persistence
- ⚡ Optimized routing with lazy-loaded pages
- 🛡️ Loading, error, and empty states handled
- 💻 Works on mobile and desktop devices

## 📱 Live Demo
You can access the live version of the Movie Search project here: [https://cinedb-project.netlify.app](https://cinedb-project.netlify.app)

### 💻 Desktop
<img src="https://github.com/user-attachments/assets/1699641e-38d1-4a60-86c4-630aacfb79ad" width="600" alt="Movie Search Desktop" />

### 📱 Mobile
<img src="https://github.com/user-attachments/assets/37ed2d25-6f91-43f9-97f9-40073698f252" width="350" alt="Movie Search Mobile" />

## 🗂️ Project Structure

```bash
src/
 ┣ assets/            # Static content
 ┣ components/        # Reusable UI elements
 ┣ context/
 ┃ ┣ ThemeContext.jsx
 ┃ ┗ ThemeProvider.jsx
 ┣ hooks/
 ┃ ┣ useApi.jsx
 ┃ ┗ useMovies.jsx
 ┣ pages/             # Route pages
 ┣ utils/
 ┃ ┗ helpers.js
 ┣ App.jsx
 ┣ main.jsx
 ┣ App.css / index.css
netlify/
 ┗ functions/         # Secure API proxy to OMDb & TMDB
```

 ## 🗂️ Run locally
 ```
 # Clone the repository
git clone https://github.com/priscillahaibara/movie-search.git
cd movie-search

# Install dependencies
npm install

# Run dev server (with Netlify)
npm install -g netlify-cli
netlify dev
```

## Environment Variables
Inside netlify/functions/.env :
```
OMDB_API_KEY=your_key_here
TMDB_API_KEY=your_key_here
```
**Important**: Keep API Keys private and do not commit .env files.
