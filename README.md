# Grid Randomizer PWA

A progressive web app for creating random permutations of selected spaces in a 5x5 grid.

**Live Demo**: https://offbyone.github.io/ouisiboard/

## Features

- **5x5 Interactive Grid**: Tap to select/deselect squares
- **Random Permutation**: Generate random numbered sequences from selected squares
- **State Persistence**: Grid state persists using localStorage (no page reload changes)
- **Touch Optimized**: Designed for smartphone and tablet touch interactions
- **Accessible Design**: WCAG-compliant color contrast and keyboard navigation
- **Progressive Web App**: Installable, works offline
- **Privacy First**: No cookies, no tracking, no server components

## Usage

1. **Select Squares**: Tap empty squares to select them (they turn green)
2. **Randomize**: Press the "Randomize" button to assign random numbers to selected squares
3. **Toggle Numbers**: Tap numbered squares to remove their numbers
4. **Persistent State**: Your grid persists across page reloads

## Deployment

This application is automatically deployed to GitHub Pages at https://offbyone.github.io/ouisiboard/

### Automated Deployment (GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup Steps**:
1. Ensure GitHub Pages is enabled in repository settings
2. Go to Settings > Pages
3. Set Source to "GitHub Actions"
4. The workflow at `.github/workflows/deploy.yml` will handle deployment

**Workflow triggers**:
- Automatic: Every push to `main` branch
- Manual: Use "workflow_dispatch" in GitHub Actions tab

### Manual Deployment

This is a static web application. Deploy the following files to any static hosting service:

- `index.html` - Main application file
- `manifest.json` - PWA manifest
- `sw.js` - Service worker for offline support

### Alternative Hosting Options

- **Netlify**: Drag and drop the files to Netlify
- **Vercel**: Deploy from a git repository or CLI
- **Any static host**: Apache, Nginx, S3, etc.

## Technical Details

### Architecture

- Pure vanilla JavaScript (ES6+)
- CSS Grid for responsive layout
- localStorage API for state management
- Service Worker API for offline support
- Web App Manifest for installability

### Browser Support

- Modern browsers with ES6+ support
- Service Worker support for PWA features
- localStorage for state persistence

### Accessibility

- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Reduced motion support
- Touch target size: 48x48px minimum
- WCAG AA color contrast ratios

### Color Scheme

- Primary Background: #2c3e50
- Secondary Background: #34495e
- Accent (Selected): #27ae60
- Text: #ecf0f1
- All colors meet WCAG AA contrast requirements

## License

Feel free to use and modify as needed.
