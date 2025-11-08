# Web3 Career Skills Tracker

A clean, minimal, and comprehensive skills tracking tool for Web3 professionals. Track your progress, explore career paths, and connect with the RiWoT community.

## Features

- **Comprehensive Skills Database**: 97+ skills across 16 categories
- **Career Path Guidance**: 6 curated career paths with detailed roadmaps
- **Progress Tracking**: Clean visual progress indicators for categories and overall completion
- **Persistent Storage**: Your progress is automatically saved in localStorage
- **Import/Export**: Backup and restore your progress via JSON files
- **Career Matching**: See which career paths match your current skill set
- **RiWoT Community Integration**: Connect with Web3 developers and mentors
- **Clean Minimal Design**: Modern, whitespace-focused UI with smooth interactions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

## Career Paths Included

- **Smart Contract Developer** - Build secure, efficient smart contracts
- **Security Auditor** - Identify vulnerabilities and ensure contract security
- **DeFi Developer** - Create decentralized finance protocols
- **Frontend Web3 Developer** - Build user interfaces for dApps
- **Backend Infrastructure Engineer** - Build scalable backend systems
- **Blockchain Architect** - Design blockchain systems and infrastructure

## RiWoT Community

This project is part of the RiWoT Community - a network of Web3 developers helping each other grow.

- **Discord**: [Join our community](https://discord.gg/epWxxeWC)
- **GitHub**: [RiWoT Organization](https://github.com/RiWoT)

Learn smart contract development, DeFi protocols, dApp development, and more with experienced mentors and peers.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mirmohmmadluqman/web3skills.git

# Navigate to the project directory
cd web3skills

# Install dependencies
npm install

# Start the development server
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## Usage

### Tracking Skills

1. Navigate to "All Skills" to see the complete list
2. Check off skills as you acquire them
3. Your progress is automatically saved
4. View your overall progress and category-specific completion rates

### Exploring Career Paths

1. Go to "Career Paths" to see available roles
2. Select a career path to view required skills
3. See step-by-step learning roadmaps
4. Track your progress toward specific career goals

### Import/Export Data

- **Export**: Click "Export Progress" to download your data as JSON
- **Import**: Click "Import Progress" to restore from a previously exported file

## Technology Stack

- React 18
- Tailwind CSS (utility classes only)
- Lucide React (minimal icon usage)
- Local Storage API

## Design Philosophy

- **Minimal & Clean**: Lots of whitespace, simple layouts, no clutter
- **Modern & Professional**: Subtle borders, soft shadows, gentle interactions
- **Monochromatic with Accents**: Gray base with blue and purple accents
- **Typography-focused**: Clear hierarchy, readable fonts
- **Mobile-first**: Fully responsive, touch-friendly design
- **Performance**: Fast, smooth transitions, lightweight

## Color Palette

- Background: Light gray (#F9FAFB, #F3F4F6)
- Cards: Pure white with subtle borders
- Primary: Blue (#3B82F6, #2563EB)
- Secondary: Purple (#8B5CF6, #7C3AED)
- Success: Green (#10B981)
- Text: Dark gray (#111827, #374151, #6B7280)

## Project Structure

```
web3skills/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SkillsChecklist.jsx
│   │   ├── CareerPaths.jsx
│   │   ├── CareerPathDetail.jsx
│   │   └── Navigation.jsx
│   ├── data/
│   │   ├── skills.js
│   │   └── careerPaths.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Roadmap

- [ ] Add more career paths
- [ ] Resource links for each skill
- [ ] Learning time estimates
- [ ] Skill dependencies and prerequisites
- [ ] Community-contributed career paths
- [ ] Integration with job boards
- [ ] Certification tracking
- [ ] Mentor matching

## Contact & Credits

**Built by Mir Mohammad Luqman**

- GitHub: [@mirmohmmadluqman](https://github.com/mirmohmmadluqman)
- Portfolio: [mirmohmmadluqman.github.io/portfolio](https://mirmohmmadluqman.github.io/portfolio/)
- Project: [github.com/mirmohmmadluqman/web3skills](https://github.com/mirmohmmadluqman/web3skills)

## Acknowledgments

- Built with modern React best practices
- Data sourced from real Web3 job descriptions
- Part of the RiWoT Community initiative
- Inspired by the growing Web3 developer ecosystem