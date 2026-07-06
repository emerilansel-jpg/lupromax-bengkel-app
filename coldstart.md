# Coldstart — Lupromax Bengkel Rewards

## 2025-07-05 12:00 — Initial Setup

- **Type:** SETUP
- **Status:** COMPLETED
- **Files touched:** All project files (Vite + React 19 + TypeScript + Tailwind)
- **Key decisions:** 2-page architecture (client page React build + landing page standalone HTML)
- **Blockers:** none
- **Next step:** Deploy v1
- **Inspector:** PASSED
- **Backup location:** /mnt/agents/output/lupromax-source-backup.tar.gz
- **coldstart.md location:** /home/kimi/lupromax-v8/

## 2025-07-06 18:00 — v20 Deploy + Feedback Round

- **Type:** CODING
- **Status:** COMPLETED
- **Files touched:**
  - src/components/Navbar.tsx → H1 title "Proposal Lupromax Bengkel Rewards"
  - src/sections/ComparisonSection.tsx → removed Generic Apps column
  - src/sections/LimitationsSection.tsx → added feasibility note (R&D, survey, stress test)
  - src/sections/RiskScenarioSection.tsx → removed Perfect/Crazy deal tab
  - src/sections/FinalCTASection.tsx → link to landing-page/
- **Key decisions:**
  - Navbar simplified: no menu links, just centered H1 title
  - Comparison: 3 columns (Manual, Internal, Pesat.AI)
  - Limitations: expanded feasibility explanation
  - Risk: 3 scenarios only (Worst, Mediocre, Best)
  - Crazy deal text removed
- **Blockers:** none
- **Next step:** User feedback or new features
- **Inspector:** PASSED
- **Backup location:**
  - VPS: /var/www/client/lupromax/bengkel-app/
  - GitHub: https://github.com/emerilansel-jpg/lupromax-bengkel-app
  - Local tar: /mnt/agents/output/lupromax-source-backup.tar.gz
- **coldstart.md stored at:** /home/kimi/lupromax-v8/ + GitHub repo
- **Browser used:** Edge — verified both URLs

## Deploy URLs

| Page | URL |
|------|-----|
| Client Page | https://apps.pesat.ai/client/lupromax/bengkel-app/ |
| Landing Page | https://apps.pesat.ai/client/lupromax/bengkel-app/landing-page/ |
| GitHub Backup | https://github.com/emerilansel-jpg/lupromax-bengkel-app |

## Project Structure

```
lupromax-v8/
├── src/
│   ├── App.tsx (16 sections, no Footer)
│   ├── main.tsx
│   ├── index.css
│   ├── sections/ (16 section components)
│   └── components/
│       ├── Navbar.tsx (H1 title only)
│       └── Footer.tsx (removed from App)
├── dist/
│   ├── index.html (client page build)
│   └── landing-page/
│       └── index.html (standalone bengkel page)
├── public/
│   └── screenshots/ (6 MVP screenshots with -v2 suffix)
├── vite.config.ts (base: '/client/lupromax/bengkel-app/')
└── tailwind.config.js (Lupromax color tokens)
```

## Color Tokens

| Token | Hex |
|-------|-----|
| lm-blue | #1258B0 |
| lm-bright | #0095EB |
| lm-navy | #111118 |
| lm-yellow | #FFE600 |
| lm-red | #C90000 |
| lm-green | #16A34A |

## Kurs IDR

1 USD = Rp 17,500

## Important Notes

- Landing page MUST be recreated in dist/landing-page/ after every npm run build
- Workspace resets frequently — always recover from /mnt/agents/output/lupromax-source-backup.tar.gz
- 16 sections in client page: Hero, Problem, Solusi, Demo, Features, Visi, Benefit, FOMO, Comparison, FutureDev, Limitations, Pricing, RiskScenario, CaraKerja, FAQ, FinalCTA
- No Footer (removed per user request)
- Navbar = centered H1 title only (no menu links)
