import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { MOCK_PROJECTS, MARKET_GROWTH_DATA, CREDIT_PRICE_DATA, SCORING_DATA } from './constants';
import { CarbonCreditProject, ScoreItem } from './types';
import { LogoIcon, ShieldCheckIcon, TrendingUpIcon, ZapIcon, BarChartIcon, DollarSignIcon, GlobeIcon, BrainCircuitIcon, HeroGraphic, ForestIcon, SolarIcon, MethaneIcon, FactoryIcon, XIcon, CheckCircleIcon } from './components/Icons';

const getProjectIcon = (type: CarbonCreditProject['type']) => {
    switch (type) {
        case 'Forestry':
            return <ForestIcon className="w-8 h-8 text-brand-green" />;
        case 'Renewable Energy':
            return <SolarIcon className="w-8 h-8 text-yellow-400" />;
        case 'Methane Capture':
            return <MethaneIcon className="w-8 h-8 text-blue-400" />;
        case 'Industrial Efficiency':
            return <FactoryIcon className="w-8 h-8 text-slate-400" />;
        default:
            return <GlobeIcon className="w-8 h-8 text-brand-green" />;
    }
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CarbonCreditProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPurchaseModal = (project: CarbonCreditProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleClosePurchaseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };


  return (
    <div className="bg-base-100 min-h-screen font-sans text-text-primary">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        <KeyFeaturesSection />
        <MarketplacePreview projects={MOCK_PROJECTS} onBuyClick={handleOpenPurchaseModal} />
        <AnalyticsDashboard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          <InvestmentPotential />
          <RiskAndScoring />
        </div>
      </main>
      <Footer />
      <PurchaseModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleClosePurchaseModal}
      />
    </div>
  );
};

const Header: React.FC = () => (
  <header className="bg-base-200/50 backdrop-blur-lg sticky top-0 z-40 border-b border-base-300">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
      <div className="flex items-center space-x-2">
        <LogoIcon className="h-8 w-8 text-brand-green" />
        <span className="text-2xl font-bold text-text-primary">carbon.ai</span>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-text-secondary hover:text-text-primary transition">Features</a>
        <a href="#marketplace" className="text-text-secondary hover:text-text-primary transition">Marketplace</a>
        <a href="#analytics" className="text-text-secondary hover:text-text-primary transition">Analytics</a>
        <a href="#invest" className="text-text-secondary hover:text-text-primary transition">Invest</a>
      </div>
      <button className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
        Launch App
      </button>
    </nav>
  </header>
);

const HeroSection: React.FC = () => (
  <section className="text-center lg:text-left py-20 relative">
     <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-base-200/80 to-base-100" />
    <div className="grid lg:grid-cols-2 items-center gap-16">
        <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary mb-4 leading-tight">
              Transforming Environmental Trading
            </h1>
            <p className="max-w-xl text-lg text-text-secondary mb-8 mx-auto lg:mx-0">
              A digital marketplace leveraging technology to democratize environmental investment. Our platform enables seamless carbon credit transactions, creating liquidity and accessibility for all.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button className="bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105">
                Explore Marketplace
              </button>
              <button className="bg-base-300 hover:bg-base-200 text-text-primary font-bold py-3 px-8 rounded-full transition">
                Learn More
              </button>
            </div>
        </div>
        <div className="hidden lg:block">
            <HeroGraphic className="w-full h-auto max-w-lg mx-auto" />
        </div>
    </div>
  </section>
);

const KeyFeaturesSection: React.FC = () => {
    const features = [
        { icon: <TrendingUpIcon />, title: "Real-time Analytics", description: "Access live market data and pricing insights to make informed trading decisions." },
        { icon: <ShieldCheckIcon />, title: "Verified Credits", description: "All credits are verified using AI and blockchain for maximum transparency and trust." },
        { icon: <ZapIcon />, title: "Low-Friction Trading", description: "Buy and sell credits seamlessly with our intuitive and user-friendly interface." },
        { icon: <GlobeIcon />, title: "Global Access", description: "Participate in both voluntary and compliance carbon markets from around the world." },
    ];
    return (
        <section id="features" className="my-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose carbon.ai?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <Card key={index} className="text-center p-8">
                        <div className="mx-auto bg-base-300 h-16 w-16 rounded-full flex items-center justify-center mb-4 text-brand-green">
                            {React.cloneElement(feature.icon, { className: 'h-8 w-8' })}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-text-secondary">{feature.description}</p>
                    </Card>
                ))}
            </div>
        </section>
    );
};

interface MarketplacePreviewProps {
  projects: CarbonCreditProject[];
  onBuyClick: (project: CarbonCreditProject) => void;
}
const MarketplacePreview: React.FC<MarketplacePreviewProps> = ({ projects, onBuyClick }) => (
  <section id="marketplace" className="my-16">
    <h2 className="text-3xl font-bold text-center mb-4">Live Carbon Credit Marketplace</h2>
    <p className="text-center text-text-secondary max-w-2xl mx-auto mb-12">
        Browse and invest in a curated selection of high-impact, verified carbon credit projects from around the globe.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onBuyClick={onBuyClick} />
        ))}
    </div>
  </section>
);


interface ProjectCardProps {
    project: CarbonCreditProject;
    onBuyClick: (project: CarbonCreditProject) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onBuyClick }) => {
    return (
        <Card className="flex flex-col h-full hover:border-brand-green/50 hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-start space-x-4 mb-4">
                <div className="bg-base-300 p-3 rounded-lg mt-1">
                    {getProjectIcon(project.type)}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                    <p className="text-sm text-text-secondary">{project.type}</p>
                </div>
            </div>
            
            <div className="flex-grow space-y-3 text-sm my-4 border-t border-base-300 pt-4">
                <div className="flex justify-between">
                    <span className="text-text-secondary">Source:</span>
                    <span className="font-medium text-text-primary">{project.source}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-text-secondary">Vintage:</span>
                    <span className="font-medium text-text-primary">{project.vintage}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-text-secondary">Available:</span>
                    <span className="font-medium text-text-primary">{project.availableTonnes.toLocaleString()} Tonnes</span>
                </div>
            </div>

            <div className="mt-auto border-t border-base-300 pt-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-text-secondary">Price/Tonne</p>
                        <p className="text-2xl font-bold text-brand-green">${project.pricePerTonne.toFixed(2)}</p>
                    </div>
                    <button 
                        onClick={() => onBuyClick(project)}
                        className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold py-2 px-6 rounded-full transition-transform transform hover:scale-105">
                        Buy Credits
                    </button>
                </div>
            </div>
        </Card>
    );
};


const AnalyticsDashboard: React.FC = () => (
    <section id="analytics" className="my-16">
        <h2 className="text-3xl font-bold text-center mb-12">Market Analytics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <h3 className="text-xl font-semibold mb-4">Market Growth Projection (USD Billions)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={MARKET_GROWTH_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                        <XAxis dataKey="year" stroke="#94A3B8" />
                        <YAxis stroke="#94A3B8" />
                        <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #334155' }} />
                        <Legend />
                        <Bar dataKey="value" fill="#10B981" name="Market Size" />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
            <Card>
                <h3 className="text-xl font-semibold mb-4">Average Carbon Credit Price (tCO₂e)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={CREDIT_PRICE_DATA}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                        <XAxis dataKey="month" stroke="#94A3B8" />
                        <YAxis stroke="#94A3B8" />
                        <Tooltip contentStyle={{ backgroundColor: '#1E293B', border: '1px solid #334155' }} />
                        <Legend />
                        <Line type="monotone" dataKey="price" stroke="#10B981" strokeWidth={2} name="Price" />
                    </LineChart>
                </ResponsiveContainer>
            </Card>
        </div>
    </section>
);

const InvestmentPotential: React.FC = () => (
    <section id="invest">
        <h2 className="text-3xl font-bold mb-6">Investment Potential</h2>
        <Card>
            <ul className="space-y-4">
                <li className="flex items-start">
                    <DollarSignIcon className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">Revenue Streams</h4>
                        <p className="text-text-secondary text-sm">Transaction fees, premium marketplace features, and B2B data analytics services.</p>
                    </div>
                </li>
                 <li className="flex items-start">
                    <BarChartIcon className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">Market Growth</h4>
                        <p className="text-text-secondary text-sm">Tap into a global market projected to reach $483.7 billion by 2027, driven by corporate sustainability mandates.</p>
                    </div>
                </li>
                 <li className="flex items-start">
                    <BrainCircuitIcon className="h-6 w-6 text-brand-green mt-1 mr-4 flex-shrink-0" />
                    <div>
                        <h4 className="font-semibold">Growth Opportunities</h4>
                        <p className="text-text-secondary text-sm">Expand into new carbon markets, develop AI-driven prediction tools, and form international trading partnerships.</p>
                    </div>
                </li>
            </ul>
        </Card>
    </section>
);


const RiskAndScoring: React.FC = () => (
  <section>
    <h2 className="text-3xl font-bold mb-6">Risk & Scoring</h2>
    <Card>
        <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
                 <ResponsiveContainer width="100%" height={250}>
                     <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SCORING_DATA}>
                        <PolarGrid stroke="#475569" />
                        <PolarAngleAxis dataKey="category" tick={{ fill: '#94A3B8', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                        <Radar name="Score" dataKey="score" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                    </RadarChart>
                 </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-4">
                <h4 className="font-semibold text-lg mb-2">Composite Score: 7.2/10</h4>
                <p className="text-text-secondary mb-4 text-sm">A promising opportunity balancing high market potential with manageable technical and competitive risks.</p>
                <h5 className="font-semibold mb-2">Potential Challenges:</h5>
                <ul className="list-disc list-inside text-text-secondary space-y-1 text-sm">
                    <li>Regulatory complexity</li>
                    <li>Market volatility</li>
                    <li>Technical implementation</li>
                    <li>Established competition</li>
                </ul>
            </div>
        </div>
    </Card>
  </section>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`bg-base-200 border border-base-300 rounded-xl shadow-lg p-6 ${className}`}>
    {children}
  </div>
);


const Footer: React.FC = () => (
  <footer className="bg-base-200 border-t border-base-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-text-secondary">
      <p>&copy; {new Date().getFullYear()} carbon.ai. All rights reserved.</p>
      <p className="text-sm mt-2">A conceptual platform for a more sustainable future.</p>
    </div>
  </footer>
);

interface PurchaseModalProps {
  project: CarbonCreditProject | null;
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ project, isOpen, onClose }) => {
  const [tonnes, setTonnes] = useState(1);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTonnes(1);
      setIsPurchasing(false);
      setPurchaseSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const totalCost = tonnes * project.pricePerTonne;
  const isInvalid = tonnes <= 0 || tonnes > project.availableTonnes;

  const handlePurchase = () => {
    if (isInvalid) return;
    setIsPurchasing(true);
    setTimeout(() => {
      setIsPurchasing(false);
      setPurchaseSuccess(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };
  
  const handleTonnesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) {
      value = 1;
    }
    if (value > project.availableTonnes) {
      value = project.availableTonnes;
    }
    setTonnes(value);
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-base-200 border border-base-300 rounded-xl shadow-2xl w-full max-w-md relative transition-transform duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
        style={isOpen ? { transform: 'scale(1)', opacity: 1 } : { transform: 'scale(0.95)', opacity: 0 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-text-primary">
          <XIcon className="w-6 h-6" />
        </button>

        {purchaseSuccess ? (
          <div className="p-8 text-center">
              <CheckCircleIcon className="w-16 h-16 text-brand-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Purchase Successful!</h2>
              <p className="text-text-secondary">You have successfully purchased {tonnes} tonnes of carbon credits.</p>
          </div>
        ) : (
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2 text-text-primary">Buy Carbon Credits</h2>
            <p className="text-text-secondary mb-6">{project.name}</p>

            <div className="space-y-4">
              <div>
                <label htmlFor="tonnes" className="block text-sm font-medium text-text-secondary mb-1">Quantity (in tonnes)</label>
                <input
                  type="number"
                  id="tonnes"
                  value={tonnes}
                  onChange={handleTonnesChange}
                  min="1"
                  max={project.availableTonnes}
                  className="w-full bg-base-300 border border-base-300 text-text-primary rounded-lg p-3 focus:ring-2 focus:ring-brand-green focus:outline-none"
                  aria-describedby="price-per-tonne"
                />
                <p id="price-per-tonne" className="text-xs text-text-secondary mt-1">
                  Price: ${project.pricePerTonne.toFixed(2)} per tonne
                </p>
              </div>

              <div className="bg-base-300 rounded-lg p-4 text-center">
                <p className="text-sm text-text-secondary">Total Cost</p>
                <p className="text-3xl font-bold text-brand-green">${totalCost.toFixed(2)}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row-reverse gap-3">
              <button 
                onClick={handlePurchase}
                disabled={isInvalid || isPurchasing}
                className="w-full bg-brand-green hover:bg-brand-green-dark text-white font-bold py-3 px-6 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isPurchasing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : `Confirm Purchase`}
              </button>
              <button 
                onClick={onClose}
                className="w-full bg-base-300 hover:bg-base-100 text-text-primary font-bold py-3 px-6 rounded-full transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default App;