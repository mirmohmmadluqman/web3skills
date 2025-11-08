# Repository Setup Checklist

Complete guide to set up your Web3 Skills Tracker repository from scratch.

## Prerequisites

- [ ] Node.js 16+ installed
- [ ] Git installed
- [ ] GitHub account created
- [ ] Code editor (VS Code recommended)

## Repository Setup

### 1. Create Repository on GitHub

- [ ] Go to GitHub and create new repository
- [ ] Repository name: `web3skills`
- [ ] Add description: "A comprehensive skills tracking and career planning tool for Web3 professionals"
- [ ] Choose visibility (Public recommended)
- [ ] Do NOT initialize with README (we'll add it)
- [ ] Click "Create repository"

### 2. Clone and Initialize

```bash
# Clone your empty repository
git clone https://github.com/mirmohmmadluqman/web3skills.git
cd web3skills

# Create React App
npx create-react-app .

# Install additional dependencies
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## File Setup Checklist

### Root Directory Files

- [ ] `.gitignore` - Already created by Create React App
- [ ] `.gitattributes` - Copy from template
- [ ] `package.json` - Update with provided version
- [ ] `postcss.config.js` - Already created by Tailwind init
- [ ] `tailwind.config.js` - Update with provided configuration
- [ ] `README.md` - Replace with new version
- [ ] `LICENSE` - Add license file
- [ ] `SETUP.md` - Add setup guide
- [ ] `DEPLOYMENT.md` - Add deployment guide
- [ ] `CONTRIBUTING.md` - Add contribution guidelines
- [ ] `DESIGN.md` - Add design documentation
- [ ] `FEATURES.md` - Add features documentation
- [ ] `QUICKSTART.md` - Add quick start guide

### Public Directory

- [ ] `public/index.html` - Replace with version that includes favicon reference
- [ ] `public/manifest.json` - Update with project details
- [ ] `public/RiWoT.png` - **ADD YOUR LOGO FILE HERE**
- [ ] `public/favicon.ico` - Optional: Replace with custom icon
- [ ] `public/robots.txt` - Already exists

### Source Directory

- [ ] `src/App.js` - Replace with complete application code
- [ ] `src/index.js` - Update if needed
- [ ] `src/index.css` - Replace with Tailwind configuration
- [ ] Delete `src/App.css` - Not needed
- [ ] Delete `src/logo.svg` - Not needed
- [ ] Delete `src/App.test.js` - Optional
- [ ] Delete `src/reportWebVitals.js` - Optional
- [ ] Delete `src/setupTests.js` - Optional

## File Content Checklist

### Must Update These Files:

#### `tailwind.config.js`
```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
```

#### `src/index.css`
Should start with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `public/index.html`
Must include:
```html
<link rel="icon" href="%PUBLIC_URL%/RiWoT.png" />
<title>Web3 Skills Tracker - Plan Your Web3 Career</title>
```

#### `package.json`
Check these sections:
- `name`: "web3skills"
- `description`: Proper description
- `author`: "Mohammad Luqman"
- `repository`: Your GitHub URL
- `license`: "UNLICENSED"

## Logo Setup

### IMPORTANT: Add Your Logo

- [ ] Prepare your `RiWoT.png` logo file
- [ ] Recommended size: 192x192px or larger
- [ ] Format: PNG with transparency
- [ ] Place in: `public/RiWoT.png`
- [ ] Verify it displays in browser tab

## Testing Checklist

### Local Testing

- [ ] Run `npm install` - No errors
- [ ] Run `npm start` - Server starts successfully
- [ ] Open `http://localhost:3000` - Page loads
- [ ] Check browser console - No errors
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari (if on Mac)
- [ ] Test on mobile device or responsive mode

### Feature Testing

- [ ] Navigation works (Home, Skills, Careers tabs)
- [ ] Can check skills checkboxes
- [ ] Skills persist after page refresh
- [ ] Progress bars update correctly
- [ ] Can export data (downloads JSON)
- [ ] Can import data (restores checkmarks)
- [ ] Career cards show match percentages
- [ ] Roadmap pages display correctly
- [ ] RiWoT community links work
- [ ] Footer displays your name and link
- [ ] All responsive breakpoints work

### Build Testing

- [ ] Run `npm run build` - Builds successfully
- [ ] No build warnings or errors
- [ ] Build folder created
- [ ] Test built version locally:
  ```bash
  npm install -g serve
  serve -s build
  ```

## Git Commit Checklist

### Initial Commit

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit: Web3 Skills Tracker with clean minimal design"

# Push to GitHub
git push -u origin main
```

### Verify on GitHub

- [ ] All files visible on GitHub
- [ ] README displays correctly
- [ ] License file shows up
- [ ] Repository description is set
- [ ] Topics/tags added (web3, blockchain, skills, tracker, career)

## Documentation Checklist

### Verify All Documentation

- [ ] README.md is complete and accurate
- [ ] SETUP.md has clear instructions
- [ ] DEPLOYMENT.md covers multiple platforms
- [ ] CONTRIBUTING.md has clear guidelines
- [ ] DESIGN.md documents design system
- [ ] FEATURES.md lists all features
- [ ] QUICKSTART.md provides quick setup

### Update Links

- [ ] Replace all `mirmohmmadluqman` in files with your GitHub username (if different)
- [ ] Update portfolio link to your portfolio
- [ ] Verify all Discord/GitHub links work
- [ ] Test all documentation links

## Deployment Checklist

Choose one deployment method:

### Option 1: Vercel (Recommended)
- [ ] Install Vercel CLI: `npm i -g vercel`
- [ ] Run: `vercel`
- [ ] Follow prompts
- [ ] Verify deployment works

### Option 2: Netlify
- [ ] Sign up at netlify.com
- [ ] Connect GitHub repository
- [ ] Configure build settings
- [ ] Deploy and verify

### Option 3: GitHub Pages
- [ ] Install gh-pages: `npm i -D gh-pages`
- [ ] Add scripts to package.json
- [ ] Run: `npm run deploy`
- [ ] Enable Pages in repository settings

## Post-Deployment Checklist

- [ ] Site loads at production URL
- [ ] All features work in production
- [ ] localStorage persists
- [ ] Import/export works
- [ ] No console errors
- [ ] HTTPS enabled
- [ ] Favicon displays correctly
- [ ] Mobile responsive
- [ ] Test on different devices

## Repository Settings

### GitHub Settings to Configure

- [ ] Add repository description
- [ ] Add repository topics: web3, blockchain, career, skills, tracker, react, tailwindcss
- [ ] Add website URL (after deployment)
- [ ] Enable Issues
- [ ] Enable Discussions (optional)
- [ ] Add README sections
- [ ] Configure branch protection (optional)

## Community Setup

### RiWoT Integration

- [ ] Verify Discord link works: https://discord.gg/epWxxeWC
- [ ] Verify GitHub org link works: https://github.com/RiWoT
- [ ] Test both links open in new tabs
- [ ] Community section displays correctly

## Final Verification

### Complete Feature Test

Go through each page and feature:

1. **Home Page**
   - [ ] Hero section displays
   - [ ] 3 stat cards show correct data
   - [ ] RiWoT community section visible
   - [ ] Action cards (Skills, Careers) work
   - [ ] Import/Export buttons work
   - [ ] Footer displays correctly

2. **Skills Page**
   - [ ] All 16 categories visible
   - [ ] All 97 skills listed
   - [ ] Checkboxes work
   - [ ] Progress bars update
   - [ ] Line-through on checked items

3. **Careers Page**
   - [ ] 6 career paths displayed
   - [ ] Icons show correctly
   - [ ] Match percentages calculate
   - [ ] View Roadmap buttons work

4. **Career Detail Pages**
   - [ ] Back button works
   - [ ] Required skills section shows
   - [ ] Roadmap displays 4 phases
   - [ ] Resources section visible
   - [ ] Skill completion indicators work

## Maintenance Checklist

### Regular Tasks

- [ ] Check for dependency updates monthly
- [ ] Review and merge pull requests
- [ ] Respond to issues
- [ ] Update documentation as needed
- [ ] Add new skills/careers quarterly
- [ ] Monitor deployment status

## Success!

Once all items are checked:

- [ ] Repository is complete
- [ ] Application runs locally
- [ ] Deployed to production
- [ ] Documentation is accurate
- [ ] Ready for users

## Getting Help

If you encounter issues:

1. Check documentation files (SETUP.md, QUICKSTART.md)
2. Review error messages carefully
3. Search GitHub issues
4. Ask in RiWoT Discord: https://discord.gg/epWxxeWC
5. Create GitHub issue with details

---

**Congratulations!** Your Web3 Skills Tracker is ready.

Built by Mir Mohammad Luqman  
Part of the RiWoT Community