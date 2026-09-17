# TaskPilot — Skills Programme Planner

A React + TypeScript prototype for the C06 hackathon workflow: turn an employer task into an evidence-backed learning intervention, then let a human approve or correct it.

## What is included

- Employer task card
- Synthetic evidence view
- Evidence-backed intervention proposal
- Simulated incoming employer event
- Human approval or correction step
- Approved pilot state
- Uncertainty/failure case
- Clear real-versus-simulated boundary labels

## Requirements

- Node.js 20 or newer
- pnpm 10 or newer

Check your versions:

```bash
node --version
pnpm --version
```

## Run locally

1. Extract the ZIP file.
2. Open a terminal in the extracted `skills-task-pilot` folder.
3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

5. Open the URL shown by Vite, usually:

```text
http://localhost:3000
```

The app is frontend-only, so it does not require an API key, database, login, or external service.

## Three-minute demo path

1. Start at the employer task: **Reconcile a weekly stock variance**.
2. Point to the inspectable evidence and synthetic-record label.
3. Click **Generate intervention**.
4. Explain that the incoming event is labelled **SIMULATION**.
5. Click **Review proposal**.
6. Optionally enter a correction such as `Add a 15-minute supervisor debrief`.
7. Click **Approve pilot**.
8. Open **What if the evidence is not enough?** to show the responsible failure state.
9. Use **Reset demo** to return to the repeatable start state.

## Validation commands

```bash
pnpm check
pnpm build
```

## Scope and limitations

The records are synthetic. The incoming employer event is simulated. The official Skills Bank is context only and is not connected as an API. The prototype does not rank learners, make hiring decisions, certify competence, or claim that attending a module proves a learner can perform the task.

## Project structure

- `client/src/pages/Home.tsx` — interactive prototype workflow
- `client/src/index.css` — visual design and responsive layout
- `client/src/App.tsx` — application shell and route
- `client/index.html` — page metadata and font loading

## Stack note

The available WebDev scaffold is Vite + React + TypeScript rather than literal Next.js. The UI is still written as component-based TSX and can be migrated to Next.js later by moving the page component into `app/page.tsx` and adapting the build configuration.
