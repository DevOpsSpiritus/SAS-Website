# Spiritus Agentic Solutions — Frontend (Next.js + Tailwind)

This repository is a Next.js (App Router) TypeScript frontend scaffold for Spiritus Agentic Solutions (SAS).

## Quick start (developer)

Requirements
- Node.js 18+ (LTS recommended)
- npm (comes with Node.js) or pnpm/yarn if you prefer — this README uses npm commands

Local install

```powershell
# from repository root
npm install
```

Run development server

```powershell
npm run dev

# open http://localhost:3000
```

Type check

```powershell
npm run typecheck
```

Build for production

```powershell
npm run build
npm run start
```

Linting and formatting

- ESLint and Prettier may not be fully configured in this scaffold depending on installed dev dependencies. If you re-enable them, run your chosen lint/format commands, for example:

```powershell
npm run lint
npm run format
```

Project structure
- `app/` — Next.js App Router pages and layout
- `components/` — React UI components (Header, Footer, Hero, ServiceCard, ProcessStep, etc.)
- `lib/` — small utilities (SEO helpers)
- `public/` — static assets (OG image)
- `styles/` or `app/globals.css` — global styles and Tailwind imports
- `tailwind.config.ts` — Tailwind configuration

Notes and developer tips
- A `.gitignore` was added and large build artifacts (like `.next/`) were accidentally committed and then removed — this is cleaned up in the latest commits.
- If you see editor warnings about Tailwind `@` rules, install the Tailwind CSS IntelliSense extension for VS Code or enable stylelint configuration.
- If you plan to use `shadcn/ui`, the CLI was attempted and may need running locally to complete the interactive setup. The following commands are what was attempted:

```powershell
npx shadcn@latest init -y
npx shadcn@latest add button card sheet
```

Commit and contribution
- The repository has been pushed to GitHub (owner: `Adonis278`). If you clone this repo elsewhere, set your git user name and email:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Troubleshooting
- If `npm install` fails with ETARGET or version errors, edit `package.json` to relax exact version pins and re-run install. This project has been through some iterative fixes to get dependencies to install across different environments.
- If the dev server fails with errors about `next.config.mjs`, ensure it's exporting a default config object (no named `defineConfig` import) and that unsupported experimental flags are not set for your Next.js version.

Contact
- For help with this repo, reply here or open an issue in the GitHub repository.
# Spiritus Agentic Solutions (SAS) — MVP

Next.js + TypeScript + Tailwind + shadcn-style scaffold with a futuristic agentic-AI aesthetic.

Quickstart

1. Install dependencies (I prefer pnpm):

```powershell
npm install
npm run dev
```

The app uses the App Router. Pages: `/` (landing), `/services`, `/process`.

Notes

- This is an initial scaffold with accessibility, tokens, and components. Run `npm run typecheck` and `npm run lint` after installing dependencies.
# Spiritus-Agentic-Solutions
Spiritus Agentic Solutions Website
