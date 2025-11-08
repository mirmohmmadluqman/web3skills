import React, { useState, useEffect } from 'react';
import { Download, Upload, CheckCircle, Circle, TrendingUp, Award, Target, BookOpen, Code, Shield, DollarSign, Layout, Server, Network, Users, MessageCircle, Github, ArrowRight } from 'lucide-react';

const App = () => {
  const initialSkills = {
    'Python': false, 'Rust': false, 'Go': false, 'TypeScript': false, 'Solidity': false, 'Huff': false, 'Yul': false,
    'React': false, 'Next.js': false, 'REST API': false, 'GraphQL': false, 'Foundry': false, 'Hardhat': false,
    'Figma': false, 'Adobe Creative Suite': false, 'AI Design Tools': false, 'Slither': false, 'Echidna': false,
    'Certora': false, 'AWS': false, 'CI/CD': false, 'DevOps Principles': false, 'Cloud Architecture': false,
    'Git': false, 'Linux': false, 'Database Design': false, 'Database Optimization': false, 'Distributed Systems': false,
    'Time-Series Observability': false, 'Blockchain Fundamentals': false, 'EVM Mechanics': false,
    'Smart Contract Development': false, 'Production EVM Smart Contracts': false, 'High-TVL Contracts': false,
    'AMMs (Automated Market Makers)': false, 'Oracles': false, 'DeFi Understanding': false, 'DeFi Products': false,
    'dApps': false, 'Solana Development': false, 'Developer Infrastructure': false, 'L2s (Layer 2)': false,
    'Bridges': false, 'ERC-4337': false, 'ZK Proofs': false, 'EIPs Contributions': false, 'System Design': false,
    'System Architecture': false, 'API Building & Scaling': false, 'High-Throughput Systems': false,
    'Low-Latency Systems': false, 'Production Systems': false, 'Large-Scale Cloud Systems': false,
    'Brand Design': false, 'Marketing Design': false, 'Interactive Design': false, 'Visual Design': false,
    'Typography': false, 'Composition': false, 'Motion Design': false, 'Storytelling': false,
    'Visual Systems': false, 'Creative Strategy': false, 'Programmatic Statistical Analysis': false,
    'Quantitative Skills': false, 'Analytic Skills': false, 'High-Frequency Market Making': false,
    'Protocol Microstructure': false, 'Excellent Coding': false, 'Debugging': false, 'Algorithms': false,
    'Production Monitoring': false, 'High-Quality Code Delivery': false, 'End-to-End Project Management': false,
    'Handle Multiple Projects': false, 'Communication': false, 'Collaboration': false, 'Mentoring': false,
    'Leadership': false, 'Guiding Technical Teams': false, 'Autonomy': false, 'Adapt to Feedback': false,
    'Align with Business Goals': false, 'Billing/Monetization Systems': false, 'Security Tools Experience': false,
    'Startup Experience': false, 'Web3 Experience': false, 'Passion for Web3': false, 'Crypto Experience': false,
    'Open-source Contributions': false,
  };

  const [skills, setSkills] = useState(initialSkills);
  const [currentView, setCurrentView] = useState('home');
  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('web3skills');
    if (saved) {
      setSkills(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('web3skills', JSON.stringify(skills));
  }, [skills]);

  const categories = {
    'Programming Languages': ['Python', 'Rust', 'Go', 'TypeScript', 'Solidity', 'Huff', 'Yul'],
    'Frontend Technologies': ['React', 'Next.js'],
    'Backend & API': ['REST API', 'GraphQL'],
    'Development Tools': ['Foundry', 'Hardhat', 'Figma', 'Adobe Creative Suite', 'AI Design Tools'],
    'Security Tools': ['Slither', 'Echidna', 'Certora'],
    'Cloud & DevOps': ['AWS', 'CI/CD', 'DevOps Principles', 'Cloud Architecture'],
    'Version Control & OS': ['Git', 'Linux'],
    'Database & Systems': ['Database Design', 'Database Optimization', 'Distributed Systems', 'Time-Series Observability'],
    'Blockchain & Web3': [
      'Blockchain Fundamentals', 'EVM Mechanics', 'Smart Contract Development', 'Production EVM Smart Contracts',
      'High-TVL Contracts', 'AMMs (Automated Market Makers)', 'Oracles', 'DeFi Understanding', 'DeFi Products',
      'dApps', 'Solana Development', 'Developer Infrastructure', 'L2s (Layer 2)', 'Bridges', 'ERC-4337',
      'ZK Proofs', 'EIPs Contributions'
    ],
    'Architecture & Design Patterns': [
      'System Design', 'System Architecture', 'API Building & Scaling', 'High-Throughput Systems',
      'Low-Latency Systems', 'Production Systems', 'Large-Scale Cloud Systems'
    ],
    'Design Skills': [
      'Brand Design', 'Marketing Design', 'Interactive Design', 'Visual Design', 'Typography',
      'Composition', 'Motion Design', 'Storytelling', 'Visual Systems', 'Creative Strategy'
    ],
    'Trading & Quantitative': [
      'Programmatic Statistical Analysis', 'Quantitative Skills', 'Analytic Skills',
      'High-Frequency Market Making', 'Protocol Microstructure'
    ],
    'Technical Coding': [
      'Excellent Coding', 'Debugging', 'Algorithms', 'Production Monitoring', 'High-Quality Code Delivery'
    ],
    'Project Management': ['End-to-End Project Management', 'Handle Multiple Projects'],
    'Soft Skills': [
      'Communication', 'Collaboration', 'Mentoring', 'Leadership', 'Guiding Technical Teams',
      'Autonomy', 'Adapt to Feedback', 'Align with Business Goals'
    ],
    'Specialized Experience': [
      'Billing/Monetization Systems', 'Security Tools Experience', 'Startup Experience',
      'Web3 Experience', 'Passion for Web3', 'Crypto Experience', 'Open-source Contributions'
    ]
  };

  const careerPaths = {
    'Smart Contract Developer': {
      icon: Code,
      description: 'Build secure, efficient smart contracts for decentralized applications',
      requiredSkills: ['Solidity', 'Rust', 'Smart Contract Development', 'Production EVM Smart Contracts', 'Foundry', 'Hardhat', 'EVM Mechanics'],
      roadmap: [
        { phase: 'Foundation', skills: ['Blockchain Fundamentals', 'Solidity', 'JavaScript/TypeScript', 'Git'], duration: '2-3 months' },
        { phase: 'Core Development', skills: ['Smart Contract Development', 'Foundry', 'Hardhat', 'Testing', 'EVM Mechanics'], duration: '3-4 months' },
        { phase: 'Advanced Concepts', skills: ['Gas Optimization', 'Security Patterns', 'Upgradeable Contracts', 'Production EVM Smart Contracts'], duration: '3-4 months' },
        { phase: 'Specialization', skills: ['DeFi Protocols', 'High-TVL Contracts', 'Auditing', 'Open-source Contributions'], duration: '4-6 months' }
      ],
      resources: ['CryptoZombies', 'Solidity Documentation', 'OpenZeppelin', 'Ethernaut', 'Hardhat Docs']
    },
    'Security Auditor': {
      icon: Shield,
      description: 'Identify vulnerabilities and ensure smart contract security',
      requiredSkills: ['Solidity', 'Security Tools Experience', 'Smart Contract Development', 'Slither', 'Echidna', 'Certora', 'EVM Mechanics'],
      roadmap: [
        { phase: 'Foundation', skills: ['Solidity', 'Smart Contract Development', 'EVM Mechanics'], duration: '3-4 months' },
        { phase: 'Security Fundamentals', skills: ['Common Vulnerabilities', 'Security Patterns', 'Slither', 'Static Analysis'], duration: '2-3 months' },
        { phase: 'Advanced Security', skills: ['Formal Verification', 'Echidna', 'Certora', 'Manual Code Review'], duration: '3-4 months' },
        { phase: 'Practical Experience', skills: ['Bug Bounties', 'Audit Reports', 'DeFi Security', 'Real-world Audits'], duration: '4-6 months' }
      ],
      resources: ['Damn Vulnerable DeFi', 'Ethernaut', 'Code4rena', 'Immunefi', 'Secureum']
    },
    'DeFi Developer': {
      icon: DollarSign,
      description: 'Create decentralized finance protocols and applications',
      requiredSkills: ['Solidity', 'DeFi Understanding', 'DeFi Products', 'AMMs (Automated Market Makers)', 'Oracles', 'Smart Contract Development', 'TypeScript'],
      roadmap: [
        { phase: 'DeFi Basics', skills: ['Blockchain Fundamentals', 'DeFi Understanding', 'Smart Contract Development'], duration: '2-3 months' },
        { phase: 'Core Protocols', skills: ['AMMs (Automated Market Makers)', 'Lending Protocols', 'Oracles', 'Yield Farming'], duration: '3-4 months' },
        { phase: 'Advanced DeFi', skills: ['Flash Loans', 'Liquidity Provision', 'Price Feeds', 'Cross-chain'], duration: '3-4 months' },
        { phase: 'Production', skills: ['High-TVL Contracts', 'Security', 'Gas Optimization', 'Frontend Integration'], duration: '4-5 months' }
      ],
      resources: ['Uniswap Docs', 'Aave Docs', 'DeFi MOOC', 'Chainlink Documentation', 'Curve Finance']
    },
    'Frontend Web3 Developer': {
      icon: Layout,
      description: 'Build user interfaces for decentralized applications',
      requiredSkills: ['React', 'Next.js', 'TypeScript', 'Blockchain Fundamentals', 'dApps'],
      roadmap: [
        { phase: 'Frontend Foundation', skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'], duration: '2-3 months' },
        { phase: 'Web3 Integration', skills: ['Web3.js/Ethers.js', 'Wallet Connections', 'Blockchain Fundamentals'], duration: '2-3 months' },
        { phase: 'dApp Development', skills: ['Smart Contract Interaction', 'Transaction Handling', 'IPFS', 'The Graph'], duration: '3-4 months' },
        { phase: 'Advanced UI/UX', skills: ['Next.js', 'State Management', 'Real-time Updates', 'Mobile Responsive'], duration: '2-3 months' }
      ],
      resources: ['Scaffold-ETH', 'RainbowKit', 'Wagmi', 'Web3Modal', 'Viem']
    },
    'Backend Infrastructure Engineer': {
      icon: Server,
      description: 'Build scalable backend systems for Web3 applications',
      requiredSkills: ['Go', 'Rust', 'Python', 'Distributed Systems', 'API Building & Scaling', 'Database Design', 'High-Throughput Systems'],
      roadmap: [
        { phase: 'Backend Basics', skills: ['Python/Go/Rust', 'REST API', 'Database Design', 'Git'], duration: '3-4 months' },
        { phase: 'Distributed Systems', skills: ['Microservices', 'Message Queues', 'Caching', 'Load Balancing'], duration: '3-4 months' },
        { phase: 'Blockchain Integration', skills: ['Node Infrastructure', 'RPC Services', 'Indexing', 'Event Listening'], duration: '3-4 months' },
        { phase: 'Scale & Performance', skills: ['High-Throughput Systems', 'Database Optimization', 'Cloud Architecture'], duration: '4-5 months' }
      ],
      resources: ['System Design Primer', 'AWS/GCP Docs', 'Alchemy Docs', 'Infura Docs', 'The Graph']
    },
    'Blockchain Architect': {
      icon: Network,
      description: 'Design and architect blockchain systems and infrastructure',
      requiredSkills: ['System Architecture', 'Blockchain Fundamentals', 'L2s (Layer 2)', 'Bridges', 'Distributed Systems', 'High-Throughput Systems', 'EVM Mechanics'],
      roadmap: [
        { phase: 'Deep Blockchain Knowledge', skills: ['Blockchain Fundamentals', 'Consensus Mechanisms', 'EVM Mechanics', 'Network Architecture'], duration: '4-5 months' },
        { phase: 'System Design', skills: ['System Architecture', 'Distributed Systems', 'Scalability', 'Security'], duration: '3-4 months' },
        { phase: 'Layer 2 & Scaling', skills: ['L2s (Layer 2)', 'Rollups', 'Bridges', 'Sidechains'], duration: '4-5 months' },
        { phase: 'Advanced Architecture', skills: ['Cross-chain', 'Interoperability', 'Performance Optimization', 'Production Systems'], duration: '5-6 months' }
      ],
      resources: ['Ethereum.org', 'Optimism Docs', 'Arbitrum Docs', 'zkSync Docs', 'Polygon Docs']
    }
  };

  const toggleSkill = (skill) => {
    setSkills(prev => ({ ...prev, [skill]: !prev[skill] }));
  };

  const exportData = () => {
    const dataStr = JSON.stringify(skills, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `web3skills-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target.result);
          setSkills(imported);
        } catch (error) {
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  const getCategoryProgress = (categoryName) => {
    const categorySkills = categories[categoryName];
    const checked = categorySkills.filter(skill => skills[skill]).length;
    return { checked, total: categorySkills.length, percentage: (checked / categorySkills.length) * 100 };
  };

  const getCareerMatch = (careerName) => {
    const career = careerPaths[careerName];
    const allSkillsNeeded = career.requiredSkills;
    const matchedSkills = allSkillsNeeded.filter(skill => skills[skill]);
    return { matched: matchedSkills.length, total: allSkillsNeeded.length, percentage: (matchedSkills.length / allSkillsNeeded.length) * 100 };
  };

  const totalSkills = Object.keys(skills).length;
  const checkedSkills = Object.values(skills).filter(Boolean).length;
  const overallProgress = (checkedSkills / totalSkills) * 100;

  const Navigation = () => (
    <nav className="bg-white border-b border-gray-200 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Target className="text-blue-600" size={24} />
            <span className="text-xl font-bold text-gray-800">Web3 Skills Tracker</span>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView('all-skills')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'all-skills'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setCurrentView('careers')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'careers' || currentView === 'career-detail'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              Careers
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Track Your Web3 Journey</h1>
        <p className="text-lg text-gray-600">Build skills, explore careers, and plan your path in Web3</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Overall Progress</h3>
            <TrendingUp className="text-blue-600" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-3">{checkedSkills}<span className="text-lg text-gray-500">/{totalSkills}</span></div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" style={{ width: `${overallProgress}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-2">{overallProgress.toFixed(1)}% Complete</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Categories Mastered</h3>
            <Award className="text-green-600" size={20} />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-3">
            {Object.keys(categories).filter(cat => getCategoryProgress(cat).percentage === 100).length}<span className="text-lg text-gray-500">/{Object.keys(categories).length}</span>
          </div>
          <p className="text-xs text-gray-500">Complete skill categories</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-600">Best Career Match</h3>
            <Target className="text-purple-600" size={20} />
          </div>
          <div className="text-lg font-bold text-gray-900 mb-2">
            {Object.keys(careerPaths).reduce((best, career) => {
              const match = getCareerMatch(career);
              const bestMatch = getCareerMatch(best);
              return match.percentage > bestMatch.percentage ? career : best;
            })}
          </div>
          <p className="text-xs text-gray-500">
            {getCareerMatch(Object.keys(careerPaths).reduce((best, career) => {
              const match = getCareerMatch(career);
              const bestMatch = getCareerMatch(best);
              return match.percentage > bestMatch.percentage ? career : best;
            })).percentage.toFixed(0)}% match
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-blue-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Join RiWoT Community</h2>
          <p className="text-gray-600">Connect with Web3 developers and enhance your skills together</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Learn</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Smart contract development and security best practices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">DeFi protocols and blockchain architecture patterns</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Frontend dApp development with modern frameworks</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Web3 infrastructure and backend development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Career guidance from experienced Web3 professionals</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Latest trends and technologies in blockchain space</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You Get</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Users className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Access to active community of Web3 developers</span>
              </li>
              <li className="flex items-start">
                <Users className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Weekly learning sessions and technical discussions</span>
              </li>
              <li className="flex items-start">
                <Users className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Project collaboration opportunities and networking</span>
              </li>
              <li className="flex items-start">
                <Users className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Code reviews and mentorship from senior developers</span>
              </li>
              <li className="flex items-start">
                <Users className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Job opportunities and career advancement resources</span>
              </li>
              <li className="flex items-start">
                <Users className="text-purple-600 mr-2 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">Open-source contribution guidance and support</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://discord.gg/epWxxeWC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle size={20} />
            Join Discord
            <ArrowRight size={18} />
          </a>
          <a
            href="https://github.com/RiWoT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Github size={20} />
            View GitHub
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <button
          onClick={() => setCurrentView('all-skills')}
          className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all text-left group"
        >
          <BookOpen className="text-blue-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">View All Skills</h3>
          <p className="text-gray-600 mb-4">Browse and track all {totalSkills} Web3 skills organized by category</p>
          <span className="text-blue-600 text-sm font-medium">Explore Skills →</span>
        </button>

        <button
          onClick={() => setCurrentView('careers')}
          className="bg-white p-8 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all text-left group"
        >
          <Target className="text-purple-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Explore Careers</h3>
          <p className="text-gray-600 mb-4">Discover Web3 roles and get personalized learning roadmaps</p>
          <span className="text-purple-600 text-sm font-medium">View Careers →</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Manage Your Progress</h3>
          <div className="flex gap-3">
            <button onClick={exportData} className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">
              <Download size={16} />
              Export
            </button>
            <label className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer text-sm">
              <Upload size={16} />
              Import
              <input type="file" accept=".json" onChange={importData} className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const AllSkillsView = () => (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">All Skills</h1>
        <p className="text-gray-600">Track your progress across all {totalSkills} Web3 skills</p>
      </div>

      {Object.entries(categories).map(([categoryName, categorySkills]) => {
        const progress = getCategoryProgress(categoryName);
        return (
          <div key={categoryName} className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
            <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
              <h2 className="text-xl font-bold text-gray-900">{categoryName}</h2>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">{progress.checked}/{progress.total}</span>
                <div className="w-24 bg-gray-100 rounded-full h-1.5">
                  <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${progress.percentage}%` }} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {categorySkills.map(skill => (
                <label key={skill} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group">
                  <input
                    type="checkbox"
                    checked={skills[skill] || false}
                    onChange={() => toggleSkill(skill)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className={`text-sm transition-colors ${skills[skill] ? 'text-gray-400 line-through' : 'text-gray-700 group-hover:text-gray-900'}`}>
                    {skill}
                  </span>
                </label>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const CareersView = () => (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Paths</h1>
        <p className="text-gray-600">Explore different Web3 careers and see how you match</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(careerPaths).map(([careerName, careerData]) => {
          const match = getCareerMatch(careerName);
          const IconComponent = careerData.icon;
          return (
            <div key={careerName} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <IconComponent className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{careerName}</h3>
                  <p className="text-sm text-gray-600">{careerData.description}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600">Your Match</span>
                  <span className="text-xs text-gray-500">{match.matched}/{match.total} skills</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${match.percentage >= 70 ? 'bg-green-500' : match.percentage >= 40 ? 'bg-yellow-500' : 'bg-red-400'}`}
                    style={{ width: `${match.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{match.percentage.toFixed(0)}% Complete</p>
              </div>

              <button
                onClick={() => { setSelectedCareer(careerName); setCurrentView('career-detail'); }}
                className="w-full bg-gray-900 text-white py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                View Roadmap
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  const CareerDetailView = () => {
    if (!selectedCareer) return null;
    const career = careerPaths[selectedCareer];
    const match = getCareerMatch(selectedCareer);
    const IconComponent = career.icon;

    return (
      <div>
        <div className="mb-8">
          <button onClick={() => setCurrentView('careers')} className="text-blue-600 hover:text-blue-700 mb-4 text-sm font-medium">
            ← Back to Careers
          </button>
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <IconComponent className="text-blue-600" size={28} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{selectedCareer}</h1>
              <p className="text-gray-600">{career.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-gray-900">Your Progress</span>
            <span className="text-sm text-gray-600">{match.matched}/{match.total} skills</span>
          </div>
          <div className="w-full bg-white rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${match.percentage}%` }} />
          </div>
          <p className="text-sm text-gray-600 mt-2">{match.percentage.toFixed(1)}% Complete</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {career.requiredSkills.map(skill => (
              <div key={skill} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                {skills[skill] ? (
                  <CheckCircle className="text-green-600 flex-shrink-0" size={18} />
                ) : (
                  <Circle className="text-gray-300 flex-shrink-0" size={18} />
                )}
                <span className={`text-sm ${skills[skill] ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Roadmap</h2>
          <div className="space-y-6">
            {career.roadmap.map((phase, index) => (
              <div key={index} className="border-l-2 border-blue-600 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{phase.phase}</h3>
                  <span className="text-xs text-gray-500 ml-auto">{phase.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {phase.skills.map(skill => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        skills[skill]
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recommended Resources</h2>
          <div className="space-y-2">
            {career.resources.map((resource, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                <BookOpen className="text-blue-600 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-700">{resource}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const Footer = () => (
    <footer className="mt-16 pt-8 border-t border-gray-200">
      <div className="text-center text-sm text-gray-600">
        <p>
          Built by{' '}
          <a
            href="https://mirmohmmadluqman.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Mir Mohammad Luqman
          </a>
        </p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pb-8">
        {currentView === 'home' && <HomePage />}
        {currentView === 'all-skills' && <AllSkillsView />}
        {currentView === 'careers' && <CareersView />}
        {currentView === 'career-detail' && <CareerDetailView />}
        <Footer />
      </div>
    </div>
  );
};

export default App;