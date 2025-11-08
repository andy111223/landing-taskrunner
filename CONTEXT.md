# landing-taskrunner Project

## Permissions
- Default: read-only (plan mode). Ask before any edit.
- Do not run shell commands unless I explicitly approve a specific command.
- Prefer small, reviewable patches (unified diffs first).

## Development Workflow
- Keep costs low: short, focused turns.
- Always propose a plan, then show a unified diff; ask before editing.
- Commit after each accepted diff.
- Add/update tests when behavior changes.

## Project Conventions
- HTML must pass `npm test` (html-validate).
- Styles live in `sass/` and are compiled to `css/` by the task runner.
- Use Bootstrap **grid only** from `vendor/bootstrap-grid.min.css` (no full Bootstrap).

## Project Overview
This is a new Git repository for a landing-taskrunner project. The repository is currently empty with no commits yet.

## Development Environment
- **Working Directory**: `/home/andrzej/Desktop/landing-taskrunner`
- **Platform**: Linux 6.9.1-060901-generic
- **Git Status**: Clean repository on master branch (no commits yet)

## Scripts (npm)
- `init-project` → scaffold via `init:*`
- `watch` → BrowserSync + SCSS watcher (build-dev first)
- `build` / `build-dev` → compile SCSS + autoprefixer (prod/dev)
- `test` → html-validate

## Common Commands
```bash
# Git operations
git status
git add .
git commit -m "message"

# Development
npm run watch    # Development with live reload
npm run build    # Production build
npm test        # Validate HTML
```

## Project Structure
```
landing-taskrunner/
├── .git/           # Git repository metadata
└── CLAUDE.md       # This file
```

## Notes
- This is a fresh repository with no initial commits
- Project structure and build system need to be established
- Common development commands will be added as the project evolves

## Claude Code Context
- Repository type: Git
- Main branch: master
- Current status: Clean (no uncommitted changes)