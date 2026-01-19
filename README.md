# Cats of Izmir - Landing Page

A responsive landing page for a fictional cat shelter organization, built with modern front-end development practices and an automated NPM-based build system.

## Project Overview

This project demonstrates proficiency in:

- **Semantic HTML5** with accessibility considerations
- **Sass/SCSS** for maintainable, modular styling
- **CSS-only interactions** (hamburger menu, hover effects) - no JavaScript dependencies
- **Responsive Web Design** with mobile-first approach
- **Automated build pipeline** using NPM scripts

## Live Demo

Run `npm run watch` to start a local development server with live reload at `http://localhost:3000`.

## Technologies Used

| Category | Technology |
|----------|------------|
| Markup | HTML5, Semantic elements |
| Styling | Sass (SCSS), CSS3 |
| Layout | Bootstrap Grid (grid-only, no components) |
| Build Tools | NPM Scripts, Sass CLI, PostCSS, Autoprefixer |
| Validation | html-validate |
| Dev Server | BrowserSync (live reload) |

## Features

- **Responsive Navigation** - CSS-only hamburger menu with smooth animations
- **Hero Section** - Full-viewport background with overlay and call-to-action
- **Services Section** - Icon circles with hover effects
- **Portfolio Gallery** - Image grid with hover overlay revealing project details
- **Contact Section** - Organization contact information
- **Footer** - Social media links with hover animations

## Requirements

- **Node.js** >= 18.0.0
- **npm** (comes with Node.js)

## Quick Start

```bash
# 1. Clone the repository
git clone <repository-url>
cd landing-taskrunner

# 2. Initialize project (installs dependencies + creates folder structure)
npm run init-project

# 3. Start development server with live reload
npm run watch
```

The development server will be available at:
- **Local:** http://localhost:3000
- **UI:** http://localhost:3001 (BrowserSync control panel)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run init-project` | **First run:** Install dependencies and create project structure |
| `npm run watch` | Start dev server with live reload and Sass watching |
| `npm run build` | Production build: compile Sass (minified), autoprefix, validate HTML |
| `npm run build-dev` | Development build with expanded CSS and source maps |
| `npm test` | Validate HTML files |

### What `init-project` does:

1. Installs all npm dependencies
2. Creates directories: `sass/`, `css/`, `vendor/`, `images/`, `js/`
3. Creates starter files: `index.html`, `sass/style.scss`, `js/script.js`, `README.md`
4. Downloads `.gitignore` for Node.js projects

## Project Structure

```
landing-taskrunner/
├── css/                        # Compiled CSS output
│   ├── style.css               # Production/development stylesheet
│   └── style.css.map           # Source map for debugging
├── sass/
│   └── style.scss              # Main Sass source file
├── js/
│   └── script.js               # JavaScript (minimal - CSS-only approach)
├── vendor/
│   └── bootstrap-grid.min.css  # Bootstrap grid system only
├── images/                     # Image assets
├── index.html                  # Main HTML file
├── package.json                # NPM configuration and scripts
└── README.md
```

## Design Decisions

### CSS-Only Interactions
The hamburger menu and all hover effects are implemented using pure CSS (checkbox hack for menu toggle), demonstrating that many common UI patterns don't require JavaScript.

### Bootstrap Grid Only
Instead of the full Bootstrap framework, only the grid system is used. All components (buttons, cards, navigation) are custom-built, showcasing CSS skills.

### Sass Architecture
Styles are organized with:
- Design tokens (colors, fonts, breakpoints)
- Component-based sections
- Mobile-first media queries
- BEM-inspired naming conventions

## Browser Support

Configured via Browserslist in `package.json`:
- Last 2 versions of major browsers
- No dead browsers
- \> 0.2% market share

## Author

Built as part of a front-end development course module focusing on NPM task runners and build automation.

## License

ISC
