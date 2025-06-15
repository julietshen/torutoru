# System Architecture – Torutoru

Torutoru is a modern, mobile-first Gujarati language learning web app. It combines culturally relevant content with a clean, modular design built using modern web technologies. This document outlines the architectural plan for building and scaling the app.

---

## 🧱 Core Requirements

- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS and Daisy UI
- **Authentication**: NextAuth.js (Email + OAuth)
- **Database**: PostgreSQL (via Supabase or Prisma ORM)
- **Deployment**: Vercel (Frontend) + Supabase or Railway (Backend DB)
- **Data Source**: JSON-based content (vocab, phrases) to start; future support for CMS or DB ingestion
- **Mobile-First**: Fully responsive UI with app-like UX
- **Internationalization**: Support for Gujarati script + Romanized spelling

---

## 🔧 Application Layers

### 1. **Frontend**
- **Framework**: Next.js with App Router for pages and layouts
- **UI Components**:
  - `<WordCard />`, `<PhraseBlock />`, `<Flashcard />`, `<QuizQuestion />`
- **Styling**: Tailwind CSS with custom theme (muted warm palette)
- **State Management**: React state hooks + optional Zustand or Context API
- **Client-Side Routing**: `/`, `/learn/vocabulary`, `/learn/phrases`, `/quiz`, `/account`, `/progress`

### 2. **Authentication**
- **Library**: NextAuth.js
- **Providers**: Email and Google OAuth
- **Session Management**: JWT-based auth via NextAuth
- **Access Control**: Basic role-based routing (optional in v1)

### 3. **Backend & Database**
- **Platform**: Supabase or Node + Prisma + PostgreSQL
- **Data Models**:
  - `User` (id, name, email, created_at)
  - `Word` (id, gujarati, romanized, english, category, audio_url?)
  - `Phrase` (id, gujarati, romanized, english, category)
  - `UserProgress` (user_id, word_id, phrase_id, status)
- **APIs**:
  - `/api/progress/save`
  - `/api/progress/load`
  - (Optional) `/api/daily-word`

---

## 🧠 Design Constraints & Considerations

- **DRY + Modular**: Reusable UI blocks; minimize duplication
- **Token Efficiency**: Favor compact JSON structures and slim API responses
- **Accessibility**: Support screen readers, high contrast mode
- **Performance**: Lazy load media; limit bundle size
- **YAGNI**: Skip gamification/multiplayer until validated by users

---

## 🗂 File Structure Overview

