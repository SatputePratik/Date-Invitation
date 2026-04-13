# 🖤 Date Proposal — For Sammy

A cinematic, dark & luxurious date proposal web app built with Next.js 14.

## ✨ Features
- Elegant dark/moody/cinematic design
- Animated starfield background
- Falling rose petals
- Romantic letter reveal with scroll animations
- Full day timeline with staggered animations
- Interactive "Will You?" section with a runaway "No" button
- Confetti explosion on "Yes"
- Fully responsive (mobile-first)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Deploy to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub → Vercel (Recommended)
1. Push this folder to a new GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Click Deploy — that's it!

## 🛠 Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Google Fonts** — Playfair Display, Cormorant Garamond, Dancing Script

## 📁 Project Structure
```
src/
  app/
    layout.tsx       # Root layout + font imports
    page.tsx         # Main page (assembles all sections)
    globals.css      # Global styles + animations
  components/
    StarField.tsx    # Canvas starfield background
    RosePetals.tsx   # Falling rose petals
    HeroSection.tsx  # Opening cinematic hero
    LetterSection.tsx # Romantic letter card
    TimelineSection.tsx # Day timeline
    PromiseSection.tsx  # What I promise you
    ProposalSection.tsx # The final "Will you?" CTA
```

---

*Good luck, Dani. She's going to say yes.* 🌹
