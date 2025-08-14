import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const LogoIcon: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2C13.6213 4.1323 14.4754 6.54124 14.5 9C14.5 11.4588 13.6213 13.8677 12 16C10.3787 13.8677 9.52461 11.4588 9.5 9C9.52461 6.54124 10.3787 4.1323 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C10.2019 19.6053 9.03451 16.892 8.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C13.7981 19.6053 14.9655 16.892 15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const HeroGraphic: React.FC<IconProps> = (props) => (
    <svg {...props} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#10B981', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#34D399', stopOpacity: 1}} />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
        <path d="M100 20C122.091 20 140 37.9086 140 60C140 82.0914 122.091 100 100 100C77.9086 100 60 82.0914 60 60C60 37.9086 77.9086 20 100 20Z" stroke="url(#grad1)" strokeWidth="2" filter="url(#glow)"/>
        <path d="M100 100V180" stroke="#334155" strokeWidth="2"/>
        
        {/* Branches */}
        <path d="M100 100L70 70" stroke="#334155" strokeWidth="2"/>
        <path d="M70 70L50 90" stroke="#334155" strokeWidth="2"/>
        <path d="M70 70L80 50" stroke="#334155" strokeWidth="2"/>

        <path d="M100 100L130 70" stroke="#334155" strokeWidth="2"/>
        <path d="M130 70L150 90" stroke="#334155" strokeWidth="2"/>
        <path d="M130 70L120 50" stroke="#334155" strokeWidth="2"/>
        
        <path d="M100 140L120 120" stroke="#334155" strokeWidth="2"/>
        <path d="M120 120L110 100" stroke="#334155" strokeWidth="2"/>
        <path d="M120 120L140 130" stroke="#334155" strokeWidth="2"/>

        <path d="M100 140L80 120" stroke="#334155" strokeWidth="2"/>
        <path d="M80 120L90 100" stroke="#334155" strokeWidth="2"/>
        <path d="M80 120L60 130" stroke="#334155" strokeWidth="2"/>

        {/* Leaves / Nodes */}
        <circle cx="80" cy="50" r="5" fill="#10B981"/>
        <circle cx="50" cy="90" r="5" fill="#10B981"/>
        <circle cx="120" cy="50" r="5" fill="#10B981"/>
        <circle cx="150" cy="90" r="5" fill="#10B981"/>
        <circle cx="110" cy="100" r="5" fill="#10B981"/>
        <circle cx="140" cy="130" r="5" fill="#10B981"/>
        <circle cx="90" cy="100" r="5" fill="#10B981"/>
        <circle cx="60" cy="130" r="5" fill="#10B981"/>
        <circle cx="100" cy="180" r="5" fill="#10B981"/>
    </svg>
);

export const ForestIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-8"/>
    <path d="M12 14l-4-4-4 4"/>
    <path d="M12 14l4-4 4 4"/>
    <path d="M12 14l-4 4h8l-4-4z"/>
    <path d="m14 10-2-2-2 2"/>
    <path d="M12 5a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z"/>
  </svg>
);

export const SolarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
);
export const MethaneIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-3.5-6V2"/>
    <path d="M12 22a7 7 0 0 1-7-7c0-2 1-3.9 3-5.5s3.5-4 3.5-6V2"/>
    <path d="M14 15h-4"/>
    <path d="M12 13v4"/>
    <path d="M10 11s.5-1 2-1 2 1 2 1"/>
  </svg>
);
export const FactoryIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22h20"/>
    <path d="M17 22V10l-5-3-5 3v12"/>
    <path d="M12 9v13"/>
    <path d="M12 22V9"/>
    <path d="M7 12h-0.01"/>
    <path d="M17 12h-0.01"/>
    <path d="M7 16h-0.01"/>
    <path d="M17 16h-0.01"/>
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const TrendingUpIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

export const ZapIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const BarChartIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

export const DollarSignIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

export const BrainCircuitIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5a3 3 0 1 0-5.993.142"/>
        <path d="M18.668 12.5A3 3 0 1 0 16 15.42"/>
        <path d="M12 19a3 3 0 1 0-1.876-5.417"/>
        <path d="M9.417 10.352A3 3 0 1 0 7.54 7.668"/>
        <path d="M13.41 10.72a3 3 0 1 0 1.932-1.932"/>
        <path d="M15.42 16A3 3 0 1 0 18.332 18.668"/>
        <path d="M10.876 13.583A3 3 0 1 0 8.13 10.72"/>
        <path d="M12 5v-2"/>
        <path d="M12 19v2"/>
        <path d="m4.929 4.929-.707-.707"/>
        <path d="m19.778 19.778-.707-.707"/>
        <path d="m19.071 4.929.707-.707"/>
        <path d="m4.222 19.778.707-.707"/>
        <path d="M2 12h2"/>
        <path d="M20 12h2"/>
    </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);