# Virtual VRI — Website Redesign Demo

A modern, accessible Next.js redesign of [virtualvri.com](https://virtualvri.com), built to demonstrate every fix identified in the audit.

## What's different from the live site

- Modern, mobile-responsive design with a real visual hierarchy
- Real homepage hero with a clear value proposition (the live site just rotates "Online Classes" / "Transcription Services" — not a value prop)
- "On-Demand" page that actually exists (the current `/on-demand/` returns a 404)
- Multi-step request form with a real time picker (no more "15:00 PM" bug)
- HIPAA spelled correctly
- Captioned video component with default-on captions and a visible toggle — for an accessibility-services company, every video must be captioned
- AI-powered "Plain Language" accessibility helper that rewrites any page in friendly, simple English
- Real accessibility statement, semantic HTML, keyboard navigation, focus indicators, skip-to-content
- No CAPTCHAs that fail accessibility tests
- Resend integration for transactional email (notification + confirmation)
- Brand color system extracted from the existing logo

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** with custom brand tokens
- **Resend** for transactional email
- **Anthropic API** powers the Plain Language helper
- Designed for **Vercel** deployment

## Getting started

```bash
# Install dependencies
npm install

# Copy environment variables and fill them in
cp .env.example .env.local
# Edit .env.local with your API keys

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push to a new GitHub repo.
2. In Vercel, click **New Project** and import the repo.
3. Add environment variables (`RESEND_API_KEY`, `QUOTE_RECIPIENT_EMAIL`, `RESEND_FROM_EMAIL`, `ANTHROPIC_API_KEY`).
4. Deploy.

For the demo URL, Vercel's `*.vercel.app` subdomain is fine.

## Routes

- `/` — Home
- `/services/asl` — ASL Interpretation
- `/services/transcription` — CART, TypeWell, captioning
- `/services/foreign-language` — Spoken & foreign sign languages
- `/services/on-demand` — On-demand interpreting (the page that's currently 404)
- `/about` — Story, mission, team
- `/request-quote` — Multi-step quote form
- `/accessibility` — Accessibility statement
- `/api/contact` — Quote form submission (Resend)
- `/api/plain-language` — Page-summary endpoint (Anthropic API)

## Notes for the pitch

- All copy is rewritten — none of it is copy-pasted from the live site.
- Team and interpreter listings use placeholder initial-avatars. Linda's real photos drop in once she shares them.
- The Resend integration sends two emails on form submit: an internal notification to the team and a confirmation to the requester.
- The Plain Language helper is wired to Claude Haiku for speed and cost. It costs roughly a fraction of a cent per page summary.
