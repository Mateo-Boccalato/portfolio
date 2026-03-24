# Neon Cartographer Portfolio

An experimental, game-like personal portfolio built with React + Vite + TypeScript.  
Instead of a linear page, this project presents content as a nonlinear city-grid exploration experience.

## Design Concept

The experience is structured as five districts:

- `North District`: identity beacon (about + objective)
- `Forge District`: skill infrastructure mapping
- `Mission Arcs`: transit-style project exploration (non-grid showcase)
- `Subway Archive`: traversable experience / education / coursework stations
- `Dispatch Port`: interactive contact uplink and channel transmission

Navigation is intentionally nonlinear:

- Mini-map zone jumping
- Keyboard controls (`Arrow keys`)
- Touch swipe navigation on mobile
- Command palette (`Cmd/Ctrl + K`)

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion

## Project Structure

```txt
src/
  animations/
  components/
    navigation/
    ui/
    world/
      zones/
  content/
  hooks/
  styles/
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## Content Coverage

The site preserves meaningful portfolio data from the current public site and resume, including:

- About / objective
- Featured and resume-backed project work
- Experience timeline (including `Software Engineer Intern @ Quneu.com`, `Feb 2026 - Current`)
- Education and relevant coursework
- Contact channels
