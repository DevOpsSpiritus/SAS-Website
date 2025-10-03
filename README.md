````markdown
# Spiritus Agentic Solutions — Frontend (Next.js + Tailwind)

Next.js (App Router) + TypeScript frontend for **Spiritus Agentic Solutions (SAS)** with Tailwind and shadcn-style conventions.

## What’s new (Oct 2025)
- **Process page revamp**
  - **InfiniteScroll** (GSAP) vertical card rail.
  - **Subtle, static Particles background** (OGL) — non-interactive by default.
- Consolidated process steps, client-only dynamic imports, spacing/copy tweaks.

## Requirements
- Node.js 18+
- npm (or pnpm/yarn)

## Quick start
```bash
npm install
npm run dev   # http://localhost:3000
````

### Type check

```bash
npm run typecheck
```

### Production

```bash
npm run build
npm run start
```

## Project structure

```
app/                 # App Router pages/layouts
  process/           # Process page (revamped)
components/
  InfiniteScroll.tsx # GSAP scroller (client)
  particles.tsx      # OGL particles background (client, lowercase filename)
public/
app/globals.css
tailwind.config.ts
```

## Process page components

### Infinite Scroll (example)

```tsx
<InfiniteScroll
  width="clamp(22rem, 92vw, 56rem)"
  maxHeight="78vh"
  negativeMargin="0.75rem"
  itemMinHeight={220}
  isTilted
  tiltDirection="left"
  autoplay
  autoplayDirection="down"
  autoplaySpeed={0.18}
  pauseOnHover
  items={processSteps.map(s => ({
    content: (
      <div className="w-full text-left p-6 md:p-8">
        <div className="text-sm md:text-base uppercase tracking-wide text-primary/80">
          Step {s.step}
        </div>
        <div className="text-2xl md:text-3xl font-semibold mt-1">{s.title}</div>
        <div className="text-base md:text-lg leading-relaxed opacity-90 mt-3">
          {s.description}
        </div>
      </div>
    )
  }))}
/>
```

### Particles background (subtle + static)

```tsx
<div className="fixed inset-0 -z-10 pointer-events-none">
  <Particles
    className="opacity-10"
    particleColors={["#9FD6FF"]}   // light blue
    particleCount={120}
    particleBaseSize={60}
    particleSpread={10}
    speed={0}                      // static
    disableRotation={true}         // static
    moveParticlesOnHover={false}   // non-interactive
    alphaParticles={true}
  />
</div>
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run typecheck
# if configured:
npm run lint
npm run format
```

## Troubleshooting

* **ogl not found** → `npm i ogl`
* **Particles not visible** → ensure wrapper `fixed inset-0 -z-10 pointer-events-none`; temporarily bump `particleCount`, `particleBaseSize`, or `opacity`.
* **SSR/window errors** → `InfiniteScroll` and `particles` are client components, dynamically imported with `{ ssr: false }`.
* **Case issues on Vercel/Linux** → file is `components/particles.tsx` (lowercase) and import is `@/components/particles`.

## Contributing

* Branch → commit → PR (protect `main`, require 1+ review). Enable preview deployments if using Vercel/Netlify.

## License

TBD

```
::contentReference[oaicite:0]{index=0}
```
