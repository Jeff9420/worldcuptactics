# WorldCupTactics — Project TODO

## ✅ Completed
- [x] Domain: worldcuptactics.com (Namecheap, A record → 216.198.79.1)
- [x] Next.js 16 project with TypeScript + Tailwind CSS
- [x] Vercel deployment (auto-deploy from GitHub main branch)
- [x] DNS configured (Namecheap → Vercel)
- [x] Google AdSense setup — meta tag verification (ca-pub-7585038406357402)
- [x] Design system: dark green theme, Barlow Condensed / JetBrains Mono fonts
- [x] Home page: hero SVG pitch, featured match, live grid, AI features section
- [x] Matches list page: filter by round, match cards with xG / live status
- [x] Match detail page: Formation/Stats/Timeline/AI Report tabs, SVG pitch diagram, sidebar

---

## 🔴 In Progress / Next Sprint

### Phase 1 — AdSense Approval Content (Priority: NOW)
- [x] 10 historical match pages with real tactical analysis (5-10 needed for AdSense review)
- [x] Privacy Policy page (required for AdSense)
- [x] About page (improves AdSense approval rate)
- [x] Dynamic routing: generateStaticParams for all 10 match IDs
- [x] Formation parser: auto-position players from formation string + lineup array

### Phase 2 — Data & API (Priority: HIGH)
- [ ] Integrate football-data.org or API-Football for real match data
  - Decide: football-data.org (free tier, 10 calls/min) vs API-Football (paid, more data)
  - Fetch 2026 World Cup schedule when available
  - Historical match stats for 900+ archive
- [ ] Database: Supabase (Postgres) — store cached match data + user emails
- [ ] Email capture: connect "Notify Me" form to Supabase or Resend

### Phase 3 — AI Analysis Pipeline (Priority: HIGH)
- [ ] Set up Google Cloud Run service for GPT-4o tactical analysis
  - Reason: Vercel has 90s timeout, GPT-4o calls can take 2-3 min for full match analysis
  - Architecture: webhook trigger → Cloud Run → OpenAI API → store result in Supabase
- [ ] GPT-4o prompt engineering for tactical match analysis
  - Input: match stats + lineup + event timeline
  - Output: structured JSON (formation read, key battles, xG commentary, AI insights)
- [ ] Auto-publish pipeline: no human gate needed, stats-only fallback if GPT fails
- [ ] Animated SVG tactical diagrams
  - Animation JSON schema: { players: [{id, t, x, y}], events: [{t, type, player}] }
  - Use normalized (0-1) coordinates, t in seconds
  - Render using requestAnimationFrame in React

### Phase 4 — Monetization (Priority: MEDIUM)
- [ ] AdSense ad placements
  - Between match cards on /matches page
  - Below tactical analysis on match detail page
  - Right sidebar (desktop only)
- [ ] Membership system
  - Supabase Auth (email + Google OAuth)
  - Stripe subscription (~$4.99/mo, ad-free + all historical matches)
  - Free tier: current World Cup matches only, with ads
  - Pro tier: full 900+ match archive, no ads, PDF exports
- [ ] Stripe webhook handler (payment confirmation → upgrade Supabase user role)

### Phase 5 — SEO & Growth (Priority: MEDIUM)
- [ ] XML sitemap (next-sitemap package)
- [ ] robots.txt
- [ ] Structured data (JSON-LD) for match pages — SportsEvent schema
- [ ] Open Graph images for each match (dynamic og:image with match score)
- [ ] Twitter/X card meta tags
- [ ] Internal linking: related matches, "Next match" navigation

### Phase 6 — Live 2026 Coverage (Priority: FUTURE — June 2026)
- [ ] Real-time match updates via API-Football webhook
- [ ] Live formation tracker (WebSocket or polling every 30s)
- [ ] Push notifications for formation changes (PWA or Knock.app)
- [ ] Live xG updates during match
- [ ] Match preview pages (pre-match AI analysis, head-to-head stats)

### Phase 7 — Historical Archive (Priority: FUTURE)
- [ ] 900+ match archive: all World Cups 1930–2022
  - Pipeline: GPT-4o batch processing historical data
  - ~50 priority matches first (iconic/popular), rest on demand
- [ ] Tournament bracket pages (1930–2022 + 2026)
- [ ] Team profile pages (historical stats, formations over time)
- [ ] Player profile pages (career World Cup stats)
- [ ] Formations database (evolution of tactics over decades)

---

## 🏗️ Architecture Decisions Made
- Frontend: Next.js 16 App Router on Vercel
- AI Pipeline: Cloud Run (not Vercel — timeout issue with GPT-4o)
- Database: Supabase (Postgres + Auth + Storage)
- Payments: Stripe
- Fonts: Barlow Condensed (headings), Barlow (body), JetBrains Mono (stats)
- Color system: bg #040C06, accent green #2DFF7C, gold #F5C518

## 💰 Monetization Model
- Free: 2026 live matches + ads (YouTube-style)
- Pro ($4.99/mo): full archive + ad-free + PDF tactical reports
- Target: AdSense approval first, then Pro membership launch with 2026 WC start

---

_Last updated: 2026-04-28_
