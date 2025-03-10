"use client";
import React, { useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Define expanded types to include market opportunity and stats
interface Country {
  id: string;
  name: string;
  highlights: string[];
  color: string;
  hoverColor: string;
  path: string;
  labelPosition: {x: number, y: number};
  marketOpportunity: string;
  stats: {
    digitalAdoption: string;
    b2bGrowth: string;
    aiReadiness: string;
    marketPotential: string;
  }
}

interface InteractiveMapContentProps {
  mapRef: React.RefObject<HTMLElement>;
  activeCountry: string | null;
  setActiveCountry: React.Dispatch<React.SetStateAction<string | null>>;
  countries: Country[];
}

// Dynamic import with no SSR to avoid hydration mismatch
const InteractiveMapContent = dynamic<InteractiveMapContentProps>(() => Promise.resolve(({ mapRef, activeCountry, setActiveCountry, countries }) => {
  return (
    <div className="w-full relative">
      <div className="rounded-xl relative overflow-hidden border border-gray-200 bg-[#0c1424]">
        {/* Tech-inspired grid overlay for entire container */}
        <div className="absolute inset-0 
                        bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(14,165,233,0.05)_1px,transparent_1px)] 
                        bg-[size:20px_20px]"></div>
        
        {/* Glowing background effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particles-container"></div>
        </div>
        
        {/* Map Area */}
        <div className="aspect-[16/9] relative">
          {/* Arabian Peninsula Map SVG - 1.5X BIGGER */}
          <svg className="w-full h-full relative z-10" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Highlighted Countries - 1.5X BIGGER */}
            <g className="countries-container">
              {countries.map(country => (
                <path 
                  key={country.id}
                  d={country.path}
                  fill={activeCountry === country.id ? country.hoverColor : country.color}
                  stroke={activeCountry === country.id ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.4)"}
                  strokeWidth={activeCountry === country.id ? "2.5" : "1.5"}
                  opacity={activeCountry && activeCountry !== country.id ? 0.7 : 1}
                  className={`country-path cursor-pointer transition-all duration-300 hover:opacity-100 ${activeCountry === country.id ? 'active-country' : ''}`}
                  onClick={() => setActiveCountry(country.id === activeCountry ? null : country.id)}
                  data-country={country.id}
                />
              ))}
            </g>
            
            {/* Connection lines between main technology hubs - adjusted for 1.5x bigger map */}
            <g className="connection-lines">
              {/* UAE to Saudi */}
              <path d="M530,255 Q460,270 380,290" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="4 2" className="connection-line" />
              {/* Saudi to Qatar */}
              <path d="M380,290 Q430,235 460,225" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="4 2" className="connection-line" />
              {/* Qatar to Bahrain */}
              <path d="M460,225 Q425,200 410,195" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="4 2" className="connection-line" />
              {/* Saudi to Kuwait */}
              <path d="M380,290 Q360,220 350,135" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="4 2" className="connection-line" />
              {/* Saudi to Yemen */}
              <path d="M380,290 Q400,330 415,370" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="4 2" className="connection-line" />
              {/* Kuwait to Iraq */}
              <path d="M350,135 Q290,140 240,160" stroke="rgba(56, 189, 248, 0.5)" strokeWidth="1.5" strokeDasharray="4 2" className="connection-line" />
            </g>
            
            {/* Data points/nodes at major cities - adjusted for 1.5x bigger map */}
            <g className="data-nodes">
              <circle cx="530" cy="255" r="5" fill="#38BDF8" className="data-node pulse-slow" /> {/* Dubai */}
              <circle cx="380" cy="290" r="5" fill="#38BDF8" className="data-node pulse-slow" /> {/* Riyadh */}
              <circle cx="460" cy="225" r="5" fill="#38BDF8" className="data-node pulse-slow" /> {/* Doha */}
              <circle cx="410" cy="195" r="4" fill="#38BDF8" className="data-node pulse-slow" /> {/* Manama */}
              <circle cx="350" cy="135" r="4" fill="#38BDF8" className="data-node pulse-slow" /> {/* Kuwait City */}
              <circle cx="240" cy="160" r="4" fill="#38BDF8" className="data-node pulse-slow" /> {/* Baghdad */}
              <circle cx="580" cy="330" r="4" fill="#38BDF8" className="data-node pulse-slow" /> {/* Muscat */}
              <circle cx="415" cy="370" r="4" fill="#38BDF8" className="data-node pulse-slow" /> {/* Sana'a */}
            </g>
            
            {/* Country Labels with modern tech styling - adjusted for 1.5x bigger map */}
            {countries.map(country => (
              <g 
                key={`label-${country.id}`} 
                className="country-label pointer-events-none"
                style={{
                  opacity: activeCountry === country.id ? 1 : 0.9,
                }}
              >
                <text
                  x={country.labelPosition.x}
                  y={country.labelPosition.y}
                  textAnchor="middle"
                  fill={activeCountry === country.id ? "#FFF" : "rgba(255, 255, 255, 0.9)"}
                  fontSize={activeCountry === country.id ? "16" : "14"}
                  fontWeight={activeCountry === country.id ? "600" : "500"}
                  fontFamily="'Inter', sans-serif"
                  className="text-shadow-sm"
                >
                  {country.name}
                </text>
              </g>
            ))}
          </svg>
          
          {/* Tech-inspired glowing border effect for map area */}
          <div className="absolute inset-0 pointer-events-none border-b border-sky-500/30"></div>
          
          {/* Zoom indicator for active region */}
          {activeCountry && (
            <div className="absolute inset-0 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 800 500">
                <circle 
                  cx={countries.find(c => c.id === activeCountry)?.labelPosition.x || 0} 
                  cy={countries.find(c => c.id === activeCountry)?.labelPosition.y || 0} 
                  r="45" 
                  fill="none" 
                  stroke="rgba(56, 189, 248, 0.7)" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                  className="focus-indicator"
                />
              </svg>
            </div>
          )}
          
          {/* Message for initial state when no country is selected */}
          {!activeCountry && (
            <div className="absolute bottom-3 md:bottom-6 left-0 right-0 text-center pointer-events-none z-50">
              <p className="text-white text-sm md:text-lg bg-black/70 mx-auto py-1 md:py-2 px-3 md:px-4 
              rounded-full backdrop-blur-md inline-block max-w-[90%] md:max-w-none border border-white/20 
              shadow-lg" style={{ animation: 'smooth-bounce 3s ease-in-out infinite' }}>
                Click on a country
              </p>
            </div>
          )}
        </div>
        
        {/* Country Information Panel - Modern glass effect with new layout */}
        <div className={`p-8 border-t border-sky-500/30 backdrop-blur-md bg-black/40 ${activeCountry ? 'animate-fadeIn' : 'hidden'}`}>
          {activeCountry && countries.filter(c => c.id === activeCountry).map(country => (
            <div key={country.id}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
                  {country.name}
                </h3>
                <button 
                  className="rounded-full bg-sky-500/20 p-1.5 hover:bg-sky-500/40 transition-colors backdrop-blur-md"
                  onClick={() => setActiveCountry(null)}
                >
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Side: Vertical Bullet Points */}
                <div className="w-full md:w-5/12">
                  <h4 className="text-sky-400 text-sm uppercase tracking-wider font-semibold mb-4">Market Highlights</h4>
                  <div className="space-y-3">
                    {country.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <div className="h-5 w-5 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-sky-500/20 text-sky-400 flex-shrink-0 border border-sky-500/30">
                          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-200">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Side: Market Opportunity */}
                <div className="w-full md:w-7/12">
                  <h4 className="text-sky-400 text-sm uppercase tracking-wider font-semibold mb-4">Current Market Opportunity</h4>
                  <div className="bg-sky-900/20 backdrop-blur-md p-4 rounded-lg border border-sky-500/20 mb-6">
                    <p className="text-gray-200 leading-relaxed">{country.marketOpportunity}</p>
                  </div>
                  
                  {/* Stats Row */}
                  <h4 className="text-sky-400 text-sm uppercase tracking-wider font-semibold mb-4">Market Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-sky-500/10">
                      <p className="text-xs text-sky-300 font-medium">Digital Adoption</p>
                      <p className="text-xl font-bold text-white mt-1">{country.stats.digitalAdoption}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-sky-500/10">
                      <p className="text-xs text-sky-300 font-medium">B2B Growth</p>
                      <p className="text-xl font-bold text-white mt-1">{country.stats.b2bGrowth}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-sky-500/10">
                      <p className="text-xs text-sky-300 font-medium">AI Readiness</p>
                      <p className="text-xl font-bold text-white mt-1">{country.stats.aiReadiness}</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-sky-500/10">
                      <p className="text-xs text-sky-300 font-medium">Market Potential</p>
                      <p className="text-xl font-bold text-white mt-1">{country.stats.marketPotential}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}), { ssr: false });

export const InteractiveMap = () => {
  const mapRef = useRef<HTMLElement>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  
  // Updated country data with more balanced and realistic market analyses
  const countries: Country[] = [
    { 
      id: "iraq", 
      name: "Iraq", 
      color: "rgba(233, 30, 99, 0.7)",
      hoverColor: "rgba(233, 30, 99, 0.9)",
      path: "M150,160 L270,110 L355,125 L375,170 L350,210 L335,235 L295,265 L250,250 L215,225 L150,160Z",
      labelPosition: {x: 270, y: 195},
      highlights: [
        "Oil & gas sector dominance", 
        "Public institution rebuilding", 
        "Telecom infrastructure growth"
      ],
      marketOpportunity: "Iraq's economy centers on its oil sector (90% of revenue), but public institutions are being systematically rebuilt with modern technology. Sales tech that addresses security concerns while respecting traditional business culture is seeing particular success in telecom, banking, and government procurement.",
      stats: {
        digitalAdoption: "63%",
        b2bGrowth: "+17%",
        aiReadiness: "Low-Medium",
        marketPotential: "$2.4B"
      }
    },
    { 
      id: "saudi", 
      name: "Saudi Arabia", 
      color: "rgba(103, 58, 183, 0.7)",
      hoverColor: "rgba(103, 58, 183, 0.9)",
      path: "M355,125 L390,125 L430,135 L440,160 L430,180 L425,190 L415,195 L400,195 L395,205 L430,235 L440,250 L435,280 L420,310 L385,335 L360,370 L330,380 L300,350 L320,240 L335,235 L350,210 L375,170 L355,125Z",
      labelPosition: {x: 370, y: 250},
      highlights: [
        "Vision 2030 economic diversification", 
        "Government digital transformation", 
        "Religious tourism technology"
      ],
      marketOpportunity: "Saudi's Vision 2030 is creating unprecedented demand for sales technology across multiple sectors. Financial services, government, and the emerging entertainment industry are rapidly adopting Arabic-native AI. Organizations serving Hajj and Umrah pilgrims (19M+ visitors annually) also seek advanced customer acquisition solutions.",
      stats: {
        digitalAdoption: "89%",
        b2bGrowth: "+31%",
        aiReadiness: "High",
        marketPotential: "$18.7B"
      }
    },
    { 
      id: "kuwait", 
      name: "Kuwait", 
      color: "rgba(76, 175, 80, 0.7)",
      hoverColor: "rgba(76, 175, 80, 0.9)",
      path: "M355,125 L390,125 L385,155 L375,170 L355,125Z",
      labelPosition: {x: 375, y: 145},
      highlights: [
        "Family business conglomerates", 
        "Financial sector transformation", 
        "Education modernization initiatives"
      ],
      marketOpportunity: "Kuwait's economy is dominated by influential family business conglomerates that are increasingly investing in sales technology to modernize operations. The financial sector leads adoption, while education and retail are emerging opportunities. Success requires navigating traditional decision-making hierarchies and relationship networks.",
      stats: {
        digitalAdoption: "78%",
        b2bGrowth: "+14%",
        aiReadiness: "Medium",
        marketPotential: "$3.8B"
      }
    },
    { 
      id: "bahrain", 
      name: "Bahrain", 
      color: "rgba(255, 87, 34, 0.7)",
      hoverColor: "rgba(255, 87, 34, 0.9)",
      path: "M400,180 L425,175 L440,190 L425,205 L400,195 L400,180Z",
      labelPosition: {x: 420, y: 190},
      highlights: [
        "FinTech regulatory sandbox", 
        "Aluminum industry digitalization", 
        "Regional testing ground for technology"
      ],
      marketOpportunity: "Bahrain serves as the region's FinTech regulatory sandbox, making it an ideal entry point for financial sales AI. The country's aluminum industry (10% of GDP) is digitizing operations, while its reputation as a testing ground for new technologies creates openings for innovative sales approaches before Gulf-wide rollout.",
      stats: {
        digitalAdoption: "91%",
        b2bGrowth: "+16%",
        aiReadiness: "High",
        marketPotential: "$1.9B"
      }
    },
    { 
      id: "qatar", 
      name: "Qatar", 
      color: "rgba(156, 39, 176, 0.7)",
      hoverColor: "rgba(156, 39, 176, 0.9)",
      path: "M440,160 L470,135 L485,165 L475,205 L455,225 L440,210 L430,180 L440,160Z",
      labelPosition: {x: 460, y: 180},
      highlights: [
        "LNG industry leadership", 
        "Qatar Foundation education network", 
        "World Cup infrastructure legacy"
      ],
      marketOpportunity: "Qatar's position as the world's largest LNG exporter drives its economy, but the Qatar Foundation's education and research institutions are equally important innovation hubs adopting AI sales tools. Post-World Cup infrastructure now focuses on business applications, while aviation (Qatar Airways) and hospitality sectors are digitizing customer acquisition.",
      stats: {
        digitalAdoption: "94%",
        b2bGrowth: "+22%",
        aiReadiness: "Very High",
        marketPotential: "$4.2B"
      }
    },
    { 
      id: "uae", 
      name: "UAE", 
      color: "rgba(33, 150, 243, 0.7)",
      hoverColor: "rgba(33, 150, 243, 0.9)",
      path: "M485,165 L550,140 L600,165 L590,220 L550,250 L510,260 L475,250 L475,205 L485,165Z",
      labelPosition: {x: 530, y: 195},
      highlights: [
        "Dubai technology hub status", 
        "Free zone business ecosystem", 
        "Tourism and real estate digitalization"
      ],
      marketOpportunity: "The UAE's diverse economy offers multiple AI sales opportunities, with Dubai focusing on tourism, real estate and startups, while Abu Dhabi emphasizes energy and financial services. The extensive free zone network creates unique B2B environments, while the appointment of an AI Minister reflects government prioritization of the sector.",
      stats: {
        digitalAdoption: "96%",
        b2bGrowth: "+29%",
        aiReadiness: "Very High",
        marketPotential: "$14.5B"
      }
    },
    { 
      id: "oman", 
      name: "Oman", 
      color: "rgba(0, 150, 136, 0.7)",
      hoverColor: "rgba(0, 150, 136, 0.9)",
      path: "M510,260 L550,250 L590,220 L620,250 L640,315 L625,380 L575,430 L520,445 L480,405 L465,350 L440,280 L435,280 L440,250 L475,250 L510,260Z",
      labelPosition: {x: 560, y: 330},
      highlights: [
        "Maritime and logistics focus", 
        "Traditional business approach", 
        "Unique tourism positioning"
      ],
      marketOpportunity: "Oman takes a more measured approach to technology adoption, valuing tradition alongside modernization. Port and logistics operations lead in AI sales adoption due to the country's strategic shipping position. The tourism sector seeks technology that enhances Oman's unique cultural positioning, while SMEs are gradually embracing digital transformation.",
      stats: {
        digitalAdoption: "72%",
        b2bGrowth: "+16%",
        aiReadiness: "Medium",
        marketPotential: "$2.8B"
      }
    },
    { 
      id: "yemen", 
      name: "Yemen", 
      color: "rgba(63, 81, 181, 0.7)",
      hoverColor: "rgba(63, 81, 181, 0.9)",
      path: "M300,350 L330,380 L360,370 L385,335 L420,310 L435,280 L440,280 L465,350 L480,405 L520,445 L485,470 L415,480 L355,460 L310,430 L300,350Z",
      labelPosition: {x: 415, y: 400},
      highlights: [
        "Mobile money adoption", 
        "International organization presence", 
        "Diaspora-led digital initiatives"
      ],
      marketOpportunity: "Despite ongoing conflict, Yemen's mobile money ecosystem has flourished out of necessity, creating niche opportunities for telecommunications and financial AI. International organizations form the main market for culturally-sensitive outreach technology, while Yemen's global diaspora is driving modest technology transfer initiatives in more stable regions.",
      stats: {
        digitalAdoption: "47%",
        b2bGrowth: "+9%",
        aiReadiness: "Emerging",
        marketPotential: "$0.7B"
      }
    }
  ];

  return (
    <section 
      id="map-section" 
      className="pt-0 pb-20 bg-gradient-to-b from-[#FFF4F9] to-[#FFF8F0] -mt-16 md:-mt-24" 
      ref={mapRef}
    >
      <div className="container mx-auto px-4">
        {/* Client-side only rendering of interactive map content */}
        <InteractiveMapContent 
          mapRef={mapRef}
          activeCountry={activeCountry}
          setActiveCountry={setActiveCountry}
          countries={countries}
        />
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        :global(.animate-slideUp) {
          animation: slideUp 0.3s ease-out forwards;
        }
        
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; r: 3; }
          50% { opacity: 1; r: 5; }
          100% { opacity: 0.3; r: 3; }
        }
        
        :global(.data-node) {
          animation: pulse-slow 3s infinite;
        }
        
        :global(.data-node:nth-child(odd)) {
          animation-delay: 1s;
        }
        
        :global(.data-node:nth-child(3n)) {
          animation-delay: 2s;
        }
        
        :global(.focus-indicator) {
          animation: focus-pulse 2s infinite;
        }
        
        @keyframes focus-pulse {
          0% { opacity: 0.7; r: 45; }
          50% { opacity: 0.3; r: 55; }
          100% { opacity: 0.7; r: 45; }
        }
        
        :global(.connection-line) {
          animation: line-dash 30s linear infinite;
        }
        
        @keyframes line-dash {
          to { stroke-dashoffset: 100; }
        }
        
        :global(.particles-container) {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        :global(.particles-container::before) {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
        }
        
        :global(.active-country) {
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
        }
        
        :global(.glass-effect) {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .text-shine {
          background-image: linear-gradient(
            to right,
            #3c2a06,
            #422301 20%,
            #3c2a06 40%,
            #a0a0a0 48%,
            #c0c0c0 50%,
            #a0a0a0 52%,
            #3c2a06 60%,
            #422301 80%,
            #3c2a06
          );
          background-size: 300% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: text-shine 6s linear infinite;
        }

        @keyframes text-shine {
          0%, 100% {
            background-position: 100% center;
          }
          90%, 99.9% {
            background-position: 0% center;
          }
        }

        @keyframes smooth-bounce {
          0%, 5%, 95%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-12px);
          }
          55% {
            transform: translateY(-2px);
          }
          70% {
            transform: translateY(-6px);
          }
          85% {
            transform: translateY(-1px);
          }
        }
      `}</style>
    </section>
  );
}; 