# Ota Pilgrimage — Day 1 Starter

This repository skeleton helps you complete **Day 1: Environment Setup**.
Use it with Netlify (hosting + Functions), Firebase (Auth/Firestore/Storage), and Google Maps.

## Structure
```
public/                 # static files (index/auth/submit will be added next days)
netlify/functions/      # Netlify Functions (TypeScript)
firebase/               # rules drafts
netlify.toml            # Netlify config (functions + redirects)
.env.example            # environment variable placeholders
package.json            # optional (pin Node version)
```

## Quick Start
1) Create a new GitHub repo and push these files.
2) Connect repo to Netlify → set env vars from `.env.example` → Deploy.
3) Open `/.netlify/functions/hello` to verify Functions work.

## Notes
- All rules in `firebase/` are **locked by default**. You'll deploy real rules later.
- Replace all `YOUR_...` placeholders with your actual values.
