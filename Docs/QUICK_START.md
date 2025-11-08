# Quick Start Guide

Get the Web3 Skills Tracker up and running in minutes.

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Basic familiarity with React

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/mirmohmmadluqman/web3skills.git
cd web3skills
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- React 18.2.0
- Lucide React 0.263.1
- Tailwind CSS 3.4.18
- Other development dependencies

### 3. Add the Favicon

Place your `RiWoT.png` logo file in the `public/` directory. This will be used as the favicon.

### 4. Start Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build/` directory.

## Project Structure

```
web3skills/
├── public/
│   ├── index.html          # HTML template with favicon reference
│   ├── manifest.json       # PWA manifest
│   └── RiWoT.png          # Favicon/logo (add this)
├── src/
│   ├── App.js             # Main application component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles with Tailwind
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── README.md              # Project documentation
├── SETUP.md               # Detailed setup guide
├── DESIGN.md              # Design system documentation
├── DEPLOYMENT.md          # Deployment guide
├── CONTRIBUTING.md        # Contribution guidelines
└── LICENSE                # License information
```

## File Checklist

Make sure you have all these files:

- [ ] `public/index.html`
- [ ] `public/manifest.json`
- [ ] `public/RiWoT.png` (your logo)
- [ ] `src/App.js`
- [ ] `src/index.js`
- [ ] `src/index.css`
- [ ] `package.json`
- [ ] `tailwind.config.js`
- [ ] `postcss.config.js`
- [ ] `.gitignore`

## Quick Feature Test

After starting the development server, test these features:

1. **Skills Tracking**
   - Navigate to "Skills" tab
   - Check a few skills
   - Verify they save automatically
   - Refresh the page - skills should persist

2. **Career Paths**
   - Click "Careers" tab
   - View different career paths
   - Check the match percentages
   - Click "View Roadmap" on any career

3. **Import/Export**
   - On the home page, click "Export"
   - Save the JSON file
   - Check some more skills
   - Click "Import" and select your saved file
   - Verify your previous state is restored

4. **RiWoT Community Links**
   - On the home page, find the community section
   - Verify Discord and GitHub links work

## Common Issues

### Tailwind Styles Not Working

**Solution**: Make sure these files are properly configured:

1. `tailwind.config.js`:
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

2. `src/index.css` starts with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### LocalStorage Not Persisting

**Solution**: 
- Check browser settings (ensure cookies/storage enabled)
- Try a different browser
- Open browser console and look for errors

### Build Fails

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

## Development Tips

### Hot Reload

Changes to `src/App.js` will automatically reload the page. If you don't see changes:
1. Check the terminal for errors
2. Try stopping and restarting the server
3. Clear browser cache

### Browser DevTools

Open browser console (F12) to:
- Check for errors
- Inspect localStorage data
- Debug React components

### Testing on Mobile

1. Find your local IP address
2. Start the dev server
3. Access from mobile: `http://YOUR_IP:3000`

Or use:
```bash
npm start -- --host 0.0.0.0
```

## Next Steps

1. **Customize Skills**: Edit the `initialSkills` object in `src/App.js`
2. **Add Career Paths**: Add entries to the `careerPaths` object
3. **Modify Design**: Update Tailwind classes or `src/index.css`
4. **Deploy**: Follow `DEPLOYMENT.md` for deployment options

## Useful Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests (if configured)
npm test

# Analyze bundle size
npm install -D source-map-explorer
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

## Getting Help

- Check `SETUP.md` for detailed setup instructions
- Read `DESIGN.md` for design system documentation
- See `CONTRIBUTING.md` to contribute
- Join [RiWoT Discord](https://discord.gg/epWxxeWC) for community support
- Open an issue on [GitHub](https://github.com/mirmohmmadluqman/web3skills/issues)

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Create React App Documentation](https://create-react-app.dev)

## Success!

You should now have a fully functional Web3 Skills Tracker running locally. Start checking off skills and exploring career paths!

**Built with by Mir Mohammad Luqman**
- [GitHub](https://github.com/mirmohmmadluqman)
- [Portfolio](https://mirmohmmadluqman.github.io/portfolio/)