
import React, { useState, useEffect } from 'react';
import { Download, Upload, CheckCircle, Circle, TrendingUp, BookOpen, Target, Award, Home, Users, Github, MessageCircle, ExternalLink, Code, Shield, Layers } from 'lucide-react';

// Skills Data
const skillsData = {
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

// Career Paths Data
const careerPathsData = {
  'Smart Contract Developer': {
    description: 'Build secure, efficient smart contracts for decentralized applications',
    icon: Code,
    requiredSkills: ['Solidity', 'Rust', 'Smart Contract Development', 'Production EVM Smart Contracts', 'Foundry', 'Hardhat', 'EVM Mechanics'],
    roadmap: [
      { phase: 'Foundation', skills: ['Blockchain Fundamentals', 'Solidity', 'JavaScript/TypeScript', 'Git'], duration: '2-3 months' },
      { phase: 'Core Development', skills: ['Smart Contract Development', 'Foundry', 'Hardhat', 'Testing', 'EVM Mechanics'], duration: '3-4 months' },
      { phase: 'Advanced Concepts', skills: ['Gas Optimization', 'Security Patterns', 'Upgradeable Contracts', 'Production EVM Smart Contracts'], duration: '3-4 months' },
      { phase: 'Specialization', skills: ['DeFi Protocols', 'High-TVL Contracts', 'Auditing', 'Open-source Contributions'], duration: '4-6 months' }
    ],
    resources: ['CryptoZombies', 'Solidity Documentation', 'OpenZeppelin', 'Ethernaut', 'Foundry Book']
  },
  'Security Auditor': {
    description: 'Identify vulnerabilities and ensure smart contract security',
    icon: Shield,
    requiredSkills: ['Solidity', 'Security Tools Experience', 'Smart Contract Development', 'Slither', 'Echidna', 'Certora', 'EVM Mechanics', 'DeFi Understanding'],
    roadmap: [
      { phase: 'Foundation', skills: ['Solidity', 'Smart Contract Development', 'EVM Mechanics'], duration: '3-4 months' },
      { phase: 'Security Fundamentals', skills: ['Common Vulnerabilities', 'Security Patterns', 'Slither', 'Static Analysis'], duration: '2-3 months' },
      { phase: 'Advanced Security', skills: ['Formal Verification', 'Echidna', 'Certora', 'Manual Code Review'], duration: '3-4 months' },
      { phase: 'Practical Experience', skills: ['Bug Bounties', 'Audit Reports', 'DeFi Security', 'Real-world Audits'], duration: '4-6 months' }
    ],
    resources: ['Damn Vulnerable DeFi', 'Ethernaut', 'Code4rena', 'Immunefi', 'Secureum Bootcamp']
  },
  'DeFi Developer': {
    description: 'Create decentralized finance protocols and applications',
    icon: TrendingUp,
    requiredSkills: ['Solidity', 'DeFi Understanding', 'DeFi Products', 'AMMs (Automated Market Makers)', 'Oracles', 'Smart Contract Development', 'TypeScript', 'React'],
    roadmap: [
      { phase: 'DeFi Basics', skills: ['Blockchain Fundamentals', 'DeFi Understanding', 'Smart Contract Development'], duration: '2-3 months' },
      { phase: 'Core Protocols', skills: ['AMMs (Automated Market Makers)', 'Lending Protocols', 'Oracles', 'Yield Farming'], duration: '3-4 months' },
      { phase: 'Advanced DeFi', skills: ['Flash Loans', 'Liquidity Provision', 'Price Feeds', 'Cross-chain'], duration: '3-4 months' },
      { phase: 'Production', skills: ['High-TVL Contracts', 'Security', 'Gas Optimization', 'Frontend Integration'], duration: '4-5 months' }
    ],
    resources: ['Uniswap Docs', 'Aave Docs', 'DeFi MOOC', 'Chainlink Documentation', 'Curve Finance Docs']
  },
  'Frontend Web3 Developer': {
    description: 'Build user interfaces for decentralized applications',
    icon: Layers,
    requiredSkills: ['React', 'Next.js', 'TypeScript', 'Blockchain Fundamentals', 'dApps'],
    roadmap: [
      { phase: 'Frontend Foundation', skills: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript'], duration: '2-3 months' },
      { phase: 'Web3 Integration', skills: ['Web3.js/Ethers.js', 'Wallet Connections', 'Blockchain Fundamentals'], duration: '2-3 months' },
      { phase: 'dApp Development', skills: ['Smart Contract Interaction', 'Transaction Handling', 'IPFS', 'The Graph'], duration: '3-4 months' },
      { phase: 'Advanced UI/UX', skills: ['Next.js', 'State Management', 'Real-time Updates', 'Mobile Responsive'], duration: '2-3 months' }
    ],
    resources: ['Scaffold-ETH', 'RainbowKit', 'Wagmi', 'Web3Modal', 'Viem Documentation']
  },
  'Backend Infrastructure Engineer': {
    description: 'Build scalable backend systems for Web3 applications',
    icon: Target,
    requiredSkills: ['Go', 'Rust', 'Python', 'Distributed Systems', 'API Building & Scaling', 'Database Design', 'High-Throughput Systems', 'Cloud Architecture'],
    roadmap: [
      { phase: 'Backend Basics', skills: ['Python/Go/Rust', 'REST API', 'Database Design', 'Git'], duration: '3-4 months' },
      { phase: 'Distributed Systems', skills: ['Microservices', 'Message Queues', 'Caching', 'Load Balancing'], duration: '3-4 months' },
      { phase: 'Blockchain Integration', skills: ['Node Infrastructure', 'RPC Services', 'Indexing', 'Event Listening'], duration: '3-4 months' },
      { phase: 'Scale & Performance', skills: ['High-Throughput Systems', 'Database Optimization', 'Cloud Architecture'], duration: '4-5 months' }
    ],
    resources: ['System Design Primer', 'AWS/GCP Docs', 'Alchemy/Infura Docs', 'Redis Documentation']
  },
  'Blockchain Architect': {
    description: 'Design and architect blockchain systems and infrastructure',
    icon: Award,
    requiredSkills: ['System Architecture', 'Blockchain Fundamentals', 'L2s (Layer 2)', 'Bridges', 'Distributed Systems', 'High-Throughput Systems', 'EVM Mechanics', 'Solidity'],
    roadmap: [
      { phase: 'Deep Blockchain Knowledge', skills: ['Blockchain Fundamentals', 'Consensus Mechanisms', 'EVM Mechanics', 'Network Architecture'], duration: '4-5 months' },
      { phase: 'System Design', skills: ['System Architecture', 'Distributed Systems', 'Scalability', 'Security'], duration: '3-4 months' },
      { phase: 'Layer 2 & Scaling', skills: ['L2s (Layer 2)', 'Rollups', 'Bridges', 'Sidechains'], duration: '4-5 months' },
      { phase: 'Advanced Architecture', skills: ['Cross-chain', 'Interoperability', 'Performance Optimization', 'Production Systems'], duration: '5-6 months' }
    ],
    resources: ['Ethereum.org', 'Layer 2 Docs', 'Optimism Docs', 'Arbitrum Docs', 'Polygon Docs']
  }
};

const App = () => {
  const initialSkills = Object.values(skillsData).flat().reduce((acc, skill) => ({ ...acc, [skill]: false }), {});
  
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
    const categorySkills = skillsData[categoryName];
    const checked = categorySkills.filter(skill => skills[skill]).length;
    return { checked, total: categorySkills.length, percentage: (checked / categorySkills.length) * 100 };
  };

  const getCareerMatch = (careerName) => {
    const career = careerPathsData[careerName];
    const matchedSkills = career.requiredSkills.filter(skill => skills[skill]);
    return { matched: matchedSkills.length, total: career.requiredSkills.length, percentage: (matchedSkills.length / career.requiredSkills.length) * 100 };
  };

  const totalSkills = Object.keys(skills).length;
  const checkedSkills = Object.values(skills).filter(Boolean).length;
  const overallProgress = (checkedSkills / totalSkills) * 100;

  const Navigation = () => (
    <nav className="bg-white shadow-sm mb-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">W3</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Web3 Skills Tracker
            </span>
          </div>
          <div className="flex space-x-1">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentView === 'home'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home className="inline mr-2" size={18} />
              Home
            </button>
            <button
              onClick={() => setCurrentView('all-skills')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentView === 'all-skills'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="inline mr-2" size={18} />
              Skills
            </button>
            <button
              onClick={() => setCurrentView('careers')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentView === 'careers'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Target className="inline mr-2" size={18} />
              Careers
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const RiWoTSection = () => (
    <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Users size={40} className="text-yellow-300" />
          <h2 className="text-3xl font-bold">Join RiWoT Community</h2>
        </div>
        <div className="hidden md:block text-yellow-300 text-xl font-bold animate-pulse">
          Free to Join!
        </div>
      </div>
      
      <p className="text-lg mb-6 leading-relaxed opacity-95">
        If you're serious about becoming a skilled Web3 and blockchain developer, join <span className="font-bold text-yellow-300">RiWoT</span>, 
        a focused learning community built for growth and real skills.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
          <h3 className="font-bold text-xl mb-3 flex items-center">
            <BookOpen className="mr-2 text-yellow-300" size={24} />
            Learn & Master
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Blockchain fundamentals</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Smart contracts and on-chain logic</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Solana, Ethereum, and Web3 development</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Rust for blockchain & smart contracts</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Web3 security and auditing</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Hands-on project building and code reviews</li>
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
          <h3 className="font-bold text-xl mb-3 flex items-center">
            <Award className="mr-2 text-yellow-300" size={24} />
            Community Benefits
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Structured learning paths (beginner to advanced)</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Developer chats and discussion channels</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Tools, guides, and curated learning resources</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Help, feedback, and support from learners and builders</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Real-world project collaboration</li>
            <li className="flex items-start"><CheckCircle className="mr-2 mt-0.5 flex-shrink-0 text-green-300" size={16} />Step-by-step guidance to become job-ready</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://discord.gg/epWxxeWC"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-indigo-500 hover:bg-indigo-400 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          <MessageCircle size={24} />
          <span>Join Discord</span>
          <ExternalLink size={18} />
        </a>
        <a
          href="https://github.com/RiWoT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-gray-900 hover:bg-gray-800 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
        >
          <Github size={24} />
          <span>View GitHub</span>
          <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );

  const HomePage = () => (
    <div>
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white p-10 rounded-2xl mb-8 shadow-xl">
        <h1 className="text-5xl font-bold mb-3">Web3 Career Skills Tracker</h1>
        <p className="text-xl opacity-95">Track your progress and plan your Web3 career journey</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-700">Overall Progress</h3>
            <TrendingUp className="text-blue-600" size={28} />
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {checkedSkills}/{totalSkills}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all shadow-inner" style={{ width: `${overallProgress}%` }} />
          </div>
          <p className="text-sm text-gray-600 mt-2 font-semibold">{overallProgress.toFixed(1)}% Complete</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-700">Categories Mastered</h3>
            <Award className="text-green-600" size={28} />
          </div>
          <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {Object.keys(skillsData).filter(cat => getCategoryProgress(cat).percentage === 100).length}/{Object.keys(skillsData).length}
          </div>
          <p className="text-sm text-gray-600 mt-2 font-semibold">Complete skill categories</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-700">Best Career Match</h3>
            <Target className="text-purple-600" size={28} />
          </div>
          <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {Object.keys(careerPathsData).reduce((best, career) => {
              const match = getCareerMatch(career);
              const bestMatch = getCareerMatch(best);
              return match.percentage > bestMatch.percentage ? career : best;
            })}
          </div>
          <p className="text-sm text-gray-600 mt-2 font-semibold">
            {getCareerMatch(Object.keys(careerPathsData).reduce((best, career) => {
              const match = getCareerMatch(career);
              const bestMatch = getCareerMatch(best);
              return match.percentage > bestMatch.percentage ? career : best;
            })).percentage.toFixed(0)}% match
          </p>
        </div>
      </div>

      <RiWoTSection />

      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Manage Your Data</h2>
          <div className="flex gap-3">
            <button onClick={exportData} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-medium">
              <Download size={20} />
              Export Progress
            </button>
            <label className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer font-medium">
              <Upload size={20} />
              Import Progress
              <input type="file" accept=".json" onChange={importData} className="hidden" />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          onClick={() => setCurrentView('all-skills')}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-left border-2 border-transparent hover:border-blue-300 transform hover:scale-105"
        >
          <BookOpen className="text-blue-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">All Skills</h3>
          <p className="text-gray-600 text-lg">Browse and track all {totalSkills} Web3 skills organized by category</p>
        </button>

        <button
          onClick={() => setCurrentView('careers')}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-left border-2 border-transparent hover:border-purple-300 transform hover:scale-105"
        >
          <Target className="text-purple-600 mb-4" size={40} />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Career Paths</h3>
          <p className="text-gray-600 text-lg">Explore different Web3 roles and get personalized roadmaps</p>
        </button>
      </div>
    </div>
  );

  const AllSkillsView = () => (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">All Skills</h1>
        <p className="text-gray-600 text-lg">Track your progress across all {totalSkills} Web3 skills</p>
      </div>

      {Object.entries(skillsData).map(([categoryName, categorySkills]) => {
        const progress = getCategoryProgress(categoryName);
        return (
          <div key={categoryName} className="bg-white p-6 rounded-xl shadow-lg mb-5 border-2 border-gray-100 hover:border-blue-200 transition-all">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
              <h2 className="text-2xl font-bold text-gray-800">{categoryName}</h2>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold text-gray-600">{progress.checked}/{progress.total} skills</span>
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all" style={{ width: `${progress.percentage}%` }} />
                </div>
                <span className="text-sm font-bold text-blue-600">{progress.percentage.toFixed(0)}%</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {categorySkills.map(skill => (
                <label key={skill} className="flex items-center gap-3 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 cursor-pointer transition-all border border-gray-200 hover:border-blue-300 hover:shadow-md">
                  <input
                    type="checkbox"
                    checked={skills[skill] || false}
                    onChange={() => toggleSkill(skill)}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
                  />
                  <span className={`text-base font-medium ${skills[skill] ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                    {skill}
                  </span>
                </label>
