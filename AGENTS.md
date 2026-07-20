# AGENTS.md — Agent guidance for this repository

Purpose: short, actionable instructions to help AI coding agents be productive working in this Laravel + React project.

## Quick commands

Run these before making changes or tests:

```
composer install
npm install
php artisan migrate
npm run dev      # Vite dev server (frontend)
npm run build    # frontend production build
php artisan serve
php artisan test
vendor/bin/sail up   # optional: Docker dev via Sail
```

## Key entrypoints (links)

- Backend: [routes/web.php](routes/web.php), [routes/api.php](routes/api.php)
- Frontend: [resources/js/app.jsx](resources/js/app.jsx), [resources/js/Pages](resources/js/Pages)
- Views: [resources/views/app.blade.php](resources/views/app.blade.php)
- Build: [vite.config.js](vite.config.js), [public/build/manifest.json](public/build/manifest.json)
- Tests & CI: [phpunit.xml](phpunit.xml), [tests](tests)
- Package manifests: [composer.json](composer.json), [package.json](package.json)
- Migrations: [database/migrations](database/migrations)

## Project conventions & gotchas

- Uses Inertia + React: Pages must live under `resources/js/Pages` and follow the resolver pattern in `resources/js/app.jsx`.
- Ziggy routes: Blade includes `@routes`; client-side code may depend on Ziggy-generated routes.
- PHP requirement: project expects PHP ^8.2 — use matching runtime.
- Prefer `php artisan test` on Windows to avoid binary/.bat issues.
- Be cautious: there are duplicate/conflicting `/product` routes in `routes/web.php`. Verify and resolve route conflicts before refactoring.

## How agents should work here

- Link, don't embed: prefer linking to existing docs/files rather than copying long sections.
- Minimal, reversible changes: make small focused patches; run tests locally before suggesting wide refactors.
- Run the quick commands above in the workspace root before applying code changes.
- For DB work: run migrations against a disposable local DB or use an in-memory sqlite when possible.
- When changing frontend assets, update `public/build/manifest.json` only via Vite builds (`npm run build`).

## Suggested next agent customizations

- Create a short `CONTRIBUTING.md` section with exact local dev steps and `.env` hints.
- Add a specialized skill for Inertia/Pages mapping to help locate page components.

---
If you want, I can: generate a short `CONTRIBUTING.md` with exact local steps, or open and fix the duplicate `/product` routes.
