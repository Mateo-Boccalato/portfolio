# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server at http://localhost:5173
npm run build    # tsc -b (type-check) then vite build -> dist/
npm run lint     # ESLint (flat config, TS + react-hooks + react-refresh)
npm run preview  # serve the production build
```

There is no test suite. `npm run build` is the type-check gate; run it plus `npm run lint` to validate changes.

## Architecture

Personal portfolio (React 19 + TypeScript + Vite + Framer Motion) with a surf-report theme: one section is shown at a time, and navigation is a tide chart drawn on a fixed ocean band at the bottom of the screen. There is no router: only one **zone** is rendered at a time.

- **Content is data-driven.** All portfolio text (about, skills, projects/"missions", timeline, contact channels) and the zone list live in [src/content/portfolioContent.ts](src/content/portfolioContent.ts) along with their types. Edit content there, not in components.
- **Zones.** `zoneOrder` in `portfolioContent.ts` defines the zone IDs (`ZoneId` union), labels, and navigation order. Each zone is a component in [src/components/world/zones/](src/components/world/zones/), lazy-loaded and switched by `renderActiveZone()` in [WorldShell.tsx](src/components/world/WorldShell.tsx). Adding a zone requires updating the `ZoneId` type, `zoneOrder`, and the lazy import + switch in `WorldShell`.
- **Navigation state** comes from [useZoneState](src/hooks/useZoneState.ts), which persists the active zone in `localStorage` (`portfolio-active-zone`). The same `setActiveZone` is fed to the header previous/next buttons, arrow keys, horizontal touch swipes (in `WorldShell`), the [TideChart](src/components/navigation/TideChart.tsx), and the Cmd/Ctrl+K [CommandPalette](src/components/ui/CommandPalette.tsx).
- **Swipe opt-out.** Any element inside a zone that scrolls/swipes horizontally on its own must carry `data-prevent-zone-swipe="true"`, otherwise a touch swipe on it will change zones.
- **Motion.** Shared Framer Motion variants are in [src/animations/motionPresets.ts](src/animations/motionPresets.ts). Respect `useReducedMotion()` — `WorldShell` disables transitions and adds a `reduced-motion` class when the user prefers reduced motion.
- **Ocean band.** [OceanSwell](src/components/world/OceanSwell.tsx) draws the drifting wave layers; the band is `position: fixed`, so `.world-shell` reserves `--ocean-height` of bottom padding. Keep that in sync if the band height changes.
- **Styling** is plain global CSS (no CSS modules/Tailwind): design tokens (palette, the Archivo variable font with `--wide`/`--narrow` widths via `font-stretch`, ocean height) in [src/styles/tokens.css](src/styles/tokens.css), all component styles in [src/styles/base.css](src/styles/base.css). Use the CSS variables rather than hard-coded colors.
- `public/` holds static assets served at the root, including the resume PDF linked from the site.
