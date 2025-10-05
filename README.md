# Markdown Preview Application with React

This is a comprehensive Markdown Preview application that demonstrates modern frontend engineering practices including real-time rendering, accessible UI components, and responsive design.


## Features
Real-time Markdown input and preview
Side-by-side editor and preview panels (desktop)
Stacked layout for mobile devices
Support for all common Markdown elements:
  - Headings (H1-H6)
  - Paragraphs and line breaks
  - Bold and italic text
  - Lists
  - Links and images
  - Code blocks with syntax highlighting
  - Blockquotes
  - Horizontal rules


### Special Features
Copy rendered HTML to clipboard
Download rendered HTML as file
Reset to default markdown
Loading states for large markdown files
Error boundary for handling runtime errors
Custom 404 page



## Technology Stack
React 19+ - Functional components with hooks
Vanilla CSS - BEM methodology for styling
marked.js - Markdown parsing
React Icons - Icon library
Vite - Build tool and dev server
React Router DOM - Client-side routing



### Architecture Decisions

#### Markdown Parsing
The application uses marked.js for Markdown parsing due to:
Performance: Fast parsing with minimal overhead
Standards Compliance: Full CommonMark and GFM (GitHub Flavored Markdown) support
Reliability: Battle-tested library with extensive community use
Configuration: Flexible options for breaks, GFM tables, and more
Security: Built-in sanitization options (though we use `dangerouslySetInnerHTML` for preview)


```

## Installation

```bash
npm install
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder

### Preview
```bash
npm run preview
```
Preview the production build locally

### Lint
```bash
npm run lint
```
Run ESLint to check code quality

## Routes

- `/` - Main markdown editor
- `/error-test` - Test error boundary functionality
- `*` - Custom 404 page for undefined routes


[Watch Demo video of download feature](./video/demo.mp4)

## Known Issues and Limitations
Large markdown files (>5000 characters) have a slight delay due to debouncing
No syntax highlighting in code blocks (uses browser default monospace)
HTML in markdown is rendered as-is (potential XSS if using untrusted content)
No markdown file import functionality
Preview scrolling is not synchronized with editor

## Future Improvements
Add dark mode support
Export to PDF functionality
Implement synchronized scrolling between editor and preview
Add syntax highlighting for code blocks (e.g., Prism.js or highlight.js)
Real-time collaboration features
Add keyboard shortcuts (e.g., Ctrl+B for bold)







