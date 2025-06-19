# Emelie Boss - Web Developer Portfolio

A modern, responsive portfolio website built with React and TypeScript, showcasing my journey as a web developer and my latest projects. Features full internationalization support with English and Swedish languages.


## Features

- **Responsive Hero Section** - Dynamic introduction with background image
- **Technical Skills Showcase** - Organized display of frontend, backend, and additional competencies
- **Project Portfolio** - Filterable gallery of my latest work with dual-language support
- **Design Projects** - Showcase of UX/UI design work with Figma prototypes
- **Interactive Contact Form** - Integrated with EmailJS for direct communication
- **Modern UI/UX** - Clean design with smooth animations and transitions
- **Internationalization** - Full English and Swedish language support with persistent preferences

## Tech Stack

### Frontend
- React.js with TypeScript
- CSS Modules for styling
- Vite for build tooling
- EmailJS for contact form functionality

### Internationalization
- **react-i18next** - React internationalization framework
- **i18next** - Core internationalization library
- **localStorage** - Language preference persistence

### Design & Styling
- Custom CSS animations
- Responsive design
- Google Fonts (Poppins & Stalemate)
- SVG icons for visual elements

## Internationalization Features

### Language Support
- **English** - Primary language with complete translations
- **Swedish** - Full Swedish translations for all content
- **Language Toggle** - Easy switching between languages via floating button
- **Persistent Preferences** - Language choice saved in localStorage

### Translated Content
- **Hero Section** - Titles and descriptions
- **About Me** - Main text and highlight points
- **Technical Skills** - All categories and skill items
- **Projects** - Titles, descriptions, and filter buttons
- **Design Projects** - Project titles and descriptions
- **Contact Form** - Labels, placeholders, and messages

### User Experience
- **Visual Language Indicator** - Button shows target language (EN/SV)
- **Smooth Transitions** - Instant language switching
- **Accessibility** - Proper ARIA labels and keyboard navigation
- **Error Handling** - Graceful fallback if localStorage is unavailable

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ProjectCard
│   └── LanguageToggle
├── sections/         # Main page sections
│   ├── HeroSection
│   ├── AboutMe
│   ├── TechStack
│   ├── Projects
│   ├── DesignShowcase
│   └── Footer
├── locales/          # Translation files
│   ├── en/
│   │   └── translation.json
│   └── sv/
│       └── translation.json
├── styles/          # Global styles and variables
├── data/           # Static data and content
├── config/         # Configuration files
└── i18n.ts         # Internationalization configuration
```

## Translation Structure

### Translation Keys Organization
```json
{
  "heroh2": "Frontend Developer",
  "aboutmaintext": "...",
  "projects": {
    "packingList": {
      "title": "The packing list - Frontend",
      "description": "..."
    }
  },
  "techStack": {
    "frontend": ["React.js", "Vue.js", ...],
    "backend": ["Node.js", "Express", ...]
  }
}
```

### Adding New Languages
1. Create new translation file in `src/locales/[language-code]/translation.json`
2. Add language to resources in `src/i18n.ts`
3. Update language toggle component if needed

## Design Decisions

- **Color Palette**: Warm, professional tones with mauve accents
- **Typography**: Clean, modern fonts with decorative elements
- **Layout**: Modular sections with consistent spacing
- **Animations**: Subtle transitions for enhanced user experience
- **Language Toggle**: Floating circular button for easy access

## Responsive Design

- Desktop-first approach
- Breakpoints for various device sizes
- Optimized images and assets
- Flexible grid layouts
- Mobile-optimized language toggle

## Development

### Running the Project
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
```

### Adding New Translations
1. Add new keys to both `en/translation.json` and `sv/translation.json`
2. Use the `useTranslation()` hook in components
3. Access translations with `t('key.path')`

### Language Persistence
- Language preferences are automatically saved to localStorage
- App remembers user's choice across browser sessions
- Graceful fallback to English if localStorage is unavailable

## Contact

- Email: emelie.boss@outlook.com
- LinkedIn: [Emelie Boss](https://www.linkedin.com/in/emelie-boss-31b36930b/)
- GitHub: [EmelieSonjaBoss](https://github.com/EmelieSonjaBoss)
