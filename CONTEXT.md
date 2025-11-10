# Cats of İzmir — landing-taskrunner

## Permissions (for all AI tools)
- Default: read-only / plan mode. Ask before any edit or command.
- Never run shell commands unless I explicitly approve the exact command.
- Propose small, reviewable patches as unified diffs first.

## Development Workflow
- Keep costs low: short prompts, minimal diffs.
- After I approve a diff, I will apply/commit locally.
- Add/update tests when behavior changes.

## Project Conventions
- HTML must pass `npm test` (html-validate).
- Use only Bootstrap **grid** from `vendor/bootstrap-grid.min.css` (no full Bootstrap).
- Styles live in `sass/style.scss` → compiled to `css/style.css`.
- JS lives in `js/script.js`.

## Repository Status
- Path: `~/Dev-Projects/landing-taskrunner`
- Git: active repo with commits; not empty.

## NPM Scripts
- `init-project` — one-time scaffold (do **not** run again without approval).
- `watch` — dev server + SCSS watch.
- `build` / `build-dev` — production/dev builds.
- `test` — html-validate.

## Feature Brief (theme)
- Top nav with hamburger on small screens.
- Hero carousel: dark overlay, centered captions, CTA. Autoplay ~5s, pause on hover, prev/next buttons.
- Services: 3 cards (Photo Stories, Care & Tips, Community Map) with simple inline SVG icons.
- Portfolio: 6 cards (first 3 visible <768px; all 6 ≥768px).
- Footer: © 2025 Cats of İzmir + social icons.

## Tool Conventions
- Claude/Gemini/Codex: read this file (symlinked as CLAUDE.md, GEMINI.md, CODEX.md).
- Don’t create separate tool-specific context files; update **this** file only.
- Allowed read-only actions: list files, read specific files, propose diffs.
- Disallowed without approval: `npm run init-project`, mass rewrites, adding frameworks.
