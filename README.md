# TechMind Website

A modern tech-focused website built with React and Vite, featuring responsive design, accessibility features, and optimized performance.

## Features

- Modern and responsive design
- Interactive components with micro-animations
- SEO-friendly structure with meta tags
- Fast loading performance
- Accessibility compliance
- Dark mode support
- Cross-browser compatibility

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion for animations
- React Router Dom for navigation
- Lucide React for icons
- React Helmet Async for SEO

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
techmind-website/
├── public/             # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   │   ├── ErrorBoundary.jsx     # Error handling
│   │   ├── Footer.jsx           # Site footer
│   │   ├── LazyImage.jsx        # Image lazy loading
│   │   ├── LoadingSpinner.jsx   # Loading indicator
│   │   ├── OptimizedImage.jsx   # Image optimization
│   │   ├── ScrollToTop.jsx      # Navigation helper
│   │   ├── SEOHead.jsx          # SEO meta tags
│   │   ├── SkipToContent.jsx    # Accessibility feature
│   │   └── ThemeToggle.jsx      # Dark mode toggle
│   ├── hooks/          # Custom React hooks
│   │   ├── useDarkMode.js       # Dark mode state
│   │   └── useMediaQuery.js     # Responsive design helper
│   ├── pages/          # Page components
│   │   ├── About.jsx           # About page
│   │   ├── Careers.jsx         # Careers page
│   │   ├── Contact.jsx         # Contact page
│   │   ├── HomePage.jsx        # Home page
│   │   ├── Industries.jsx      # Industries page
│   │   ├── NotFound.jsx        # 404 page
│   │   ├── Services.jsx        # Services page
│   │   └── Solutions.jsx       # Solutions page
│   ├── utils/          # Utility functions
│   │   ├── a11y.js             # Accessibility helpers
│   │   └── webVitals.js        # Performance monitoring
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Accessibility Features

- Semantic HTML structure
- ARIA attributes for interactive elements
- Keyboard navigation support
- Skip to content link
- Color contrast compliance
- Screen reader announcements
- Focus management
- Responsive design for all devices

## Performance Optimizations

- Image lazy loading
- Code splitting with React.lazy
- Web vitals monitoring
- Lighthouse score optimization
- Bundle size minimization
- Asset compression

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Version History

- v2.1.0 (Current)
  - Added all internal pages (About, Services, Solutions, Industries, Careers, Contact)
  - Implemented accessibility features
  - Optimized performance and SEO
  - Added dark mode support
  - Improved responsive design

- v2.0.0 (Initial major release)
  - Initial setup of TechMind website
  - Basic React/Vite structure
  - Core components implemented
  - Responsive design
