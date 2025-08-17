# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Chun-Wei Hsu (Woody), featuring:
- Static HTML/CSS/JavaScript implementation
- Bilingual support (English/Chinese) using data attributes
- Background music functionality
- Bootstrap 5.3.0 for responsive design
- Font Awesome icons
- Google Fonts integration

## Architecture

The project uses a simple client-side architecture with no build tools:

- **index.html**: Single-page application with all content sections (About, Education, Work Experience, Projects, Contact)
- **main.js**: Main JavaScript module handling language switching and music controls
- **lib.js**: Utility functions exported as ES6 modules (math operations)
- **style.css**: Custom CSS overrides and component styling
- **figures/**: Icon assets (circular and square variants with transparent/background versions)
- **music/**: Background music audio file

## Key Features

### Language System
- Uses data attributes `data-en` and `data-zh` for bilingual content
- JavaScript toggles between languages by updating `textContent` based on `currentLang` variable
- Language button position: fixed at top-right (60px from top)

### Music Player
- Auto-play functionality triggered by first user interaction (click/keydown/scroll)
- Play/pause toggle with Font Awesome icons (fa-play/fa-pause)
- Music button position: fixed at top-right (110px from top)

### Styling Architecture
- Bootstrap 5.3.0 for grid system and components
- Custom CSS in style.css for:
  - Button hover effects with scale transforms
  - Portfolio card animations
  - Color scheme overrides

## Development Notes

- No package.json or build process - direct file serving
- Uses ES6 modules (main.js imports from lib.js via commented code)
- Bootstrap and external libraries loaded via CDN
- All content is inline in index.html (no separate page routing)

## File Structure
```
/
├── index.html          # Main HTML file with all page content
├── main.js            # Language switching and music controls
├── lib.js             # Utility functions (sum, multiply)
├── style.css          # Custom styling and overrides
├── figures/           # Icon assets
│   ├── Icon_bg_circle.png
│   ├── Icon_bg_square.png
│   ├── Icon_trans_circle.png
│   └── Icon_trans_square.png
└── music/             # Audio files
    └── The Girl from Saint-Anne-des-Plaines - The Mini Vandals.mp3
```

## Content Structure

The portfolio includes placeholder sections for:
- Personal introduction (bilingual)
- Education background (NTU Physics → Economics)
- Teaching experience in programming languages
- Project showcase (currently with placeholder content)
- Contact information with social links