"use client";
import React, { useState } from 'react';

export const RecruitmentShowcase = () => {
  // Simplified tabs - just one option for the conversation example
  const [activeTab, setActiveTab] = useState('conversation');
  
  return (
    <section id="recruitment-showcase" className="py-20 bg-gradient-to-b from-[#F9FCFF] via-[#F9EDF8] to-[#EBF7FF] relative overflow-hidden">
      {/* Enhanced futuristic global network background with EVEN MORE connectivity and mobile responsiveness */}
      <div className="absolute inset-0 opacity-25 md:opacity-30 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="nodePulse" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
            </radialGradient>
            
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
            
            {/* Updated animated pulse effect for connection lines */}
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0">
                <animate attributeName="offset" values="0;1" dur="5s" repeatCount="indefinite"/>
              </stop>
              <stop offset="0.5%" stopColor="#3B82F6" stopOpacity="0.8">
                <animate attributeName="offset" values="0;1" dur="5s" repeatCount="indefinite"/>
              </stop>
              <stop offset="1%" stopColor="#3B82F6" stopOpacity="0">
                <animate attributeName="offset" values="0;1" dur="5s" repeatCount="indefinite"/>
              </stop>
            </linearGradient>
            
            {/* Updated particle effects for data flow - lighter colors */}
            <circle id="dataParticle" r="3" fill="#67E8F9" opacity="0.9" filter="url(#glow)"/>
            <circle id="dataParticleAlt" r="3" fill="#D8B4FE" opacity="0.9" filter="url(#glow)"/>
            <circle id="dataParticleThird" r="3" fill="#FCD34D" opacity="0.9" filter="url(#glow)"/>
            
            {/* Pattern for dense background grid */}
            <pattern id="smallGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="0.2"/>
            </pattern>
            
            {/* Mobile-optimized pattern with fewer grid lines */}
            <pattern id="mobileGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#E2E8F0" strokeWidth="0.3"/>
            </pattern>
          </defs>
          
          {/* Responsive grid background - denser grid with more connections */}
          <rect className="hidden md:block" width="100%" height="100%" fill="url(#smallGrid)" opacity="0.3"/>
          <rect className="md:hidden" width="100%" height="100%" fill="url(#mobileGrid)" opacity="0.3"/>
          
          {/* Network nodes and connections - ULTRA CONNECTED */}
          <g className="network-grid">
            {/* Main hexagonal grid pattern - extended */}
            <path d="M50,100 L150,150 L250,100 L350,150 L450,100 L550,150 L650,100 L750,150 L850,100 L950,150 L1050,100 L1150,150" 
              stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
            <path d="M50,200 L150,250 L250,200 L350,250 L450,200 L550,250 L650,200 L750,250 L850,200 L950,250 L1050,200 L1150,250" 
              stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
            <path d="M50,300 L150,350 L250,300 L350,350 L450,300 L550,350 L650,300 L750,350 L850,300 L950,350 L1050,300 L1150,350" 
              stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
            <path d="M50,400 L150,450 L250,400 L350,450 L450,400 L550,450 L650,400 L750,450 L850,400 L950,450 L1050,400 L1150,450" 
              stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
            <path d="M50,500 L150,550 L250,500 L350,550 L450,500 L550,550 L650,500 L750,550 L850,500 L950,550 L1050,500 L1150,550" 
              stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
            <path d="M50,600 L150,650 L250,600 L350,650 L450,600 L550,650 L650,600 L750,650 L850,600 L950,650 L1050,600 L1150,650" 
              className="hidden md:block" stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.4" fill="none"/>
            
            {/* Additional diagonal grid connections - even more of them */}
            <path d="M50,100 L150,250 M150,150 L250,300 M250,200 L350,350 M350,250 L450,400 
                    M450,300 L550,450 M550,350 L650,500 M650,400 L750,550 M750,450 L850,600" 
              stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
            <path d="M150,150 L250,100 M250,200 L350,150 M350,250 L450,200 M450,300 L550,250 
                    M550,350 L650,300 M650,400 L750,350 M750,450 L850,400 M850,500 L950,450" 
              stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
            <path d="M100,200 L200,300 M200,300 L300,400 M300,400 L400,500 M400,500 L500,600
                    M600,200 L700,300 M700,300 L800,400 M800,400 L900,500 M900,500 L1000,600"
              className="hidden md:block" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
            
            {/* MORE node points - now 32 total */}
            <circle cx="150" cy="150" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="250" cy="300" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="300" cy="200" r="5" fill="#3B82F6" filter="url(#glow)" opacity="0.9"/>
            <circle cx="350" cy="450" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="400" cy="350" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="450" cy="250" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="500" cy="400" r="5" fill="#3B82F6" filter="url(#glow)" opacity="0.9"/>
            <circle cx="550" cy="150" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="600" cy="450" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="650" cy="200" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="700" cy="300" r="5" fill="#3B82F6" filter="url(#glow)" opacity="0.9"/>
            <circle cx="750" cy="400" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="800" cy="250" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="850" cy="500" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="900" cy="150" r="5" fill="#3B82F6" filter="url(#glow)" opacity="0.9"/>
            <circle cx="950" cy="350" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="1000" cy="300" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="1050" cy="400" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="200" cy="450" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="350" cy="100" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="600" cy="200" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="750" cy="150" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="850" cy="350" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="950" cy="500" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            {/* New additional nodes */}
            <circle cx="100" cy="300" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="200" cy="100" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="400" cy="200" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="500" cy="300" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="800" cy="400" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="1000" cy="200" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="1100" cy="300" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            <circle cx="300" cy="500" r="4" fill="#3B82F6" filter="url(#glow)" opacity="0.8"/>
            
            {/* Enhanced data pulse effects - optimized for mobile */}
            <circle cx="300" cy="200" r="25" fill="url(#nodePulse)" className="hidden md:block">
              <animate attributeName="r" values="20;30;20" dur="7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="300" cy="200" r="20" fill="url(#nodePulse)" className="md:hidden">
              <animate attributeName="r" values="15;25;15" dur="7s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="500" cy="400" r="25" fill="url(#nodePulse)" className="hidden md:block">
              <animate attributeName="r" values="20;28;20" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="500" cy="400" r="20" fill="url(#nodePulse)" className="md:hidden">
              <animate attributeName="r" values="15;23;15" dur="8s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="700" cy="300" r="25" fill="url(#nodePulse)" className="hidden md:block">
              <animate attributeName="r" values="20;32;20" dur="9s" repeatCount="indefinite"/>
            </circle>
            <circle cx="700" cy="300" r="20" fill="url(#nodePulse)" className="md:hidden">
              <animate attributeName="r" values="15;27;15" dur="9s" repeatCount="indefinite"/>
            </circle>
            
            <circle cx="900" cy="150" r="25" fill="url(#nodePulse)" className="hidden md:block">
              <animate attributeName="r" values="20;27;20" dur="6.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="900" cy="150" r="20" fill="url(#nodePulse)" className="md:hidden">
              <animate attributeName="r" values="15;22;15" dur="6.5s" repeatCount="indefinite"/>
            </circle>
            
            {/* Additional pulse effects - smaller and more distributed */}
            <circle cx="150" cy="150" r="18" fill="url(#nodePulse)">
              <animate attributeName="r" values="15;22;15" dur="7.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="450" cy="250" r="18" fill="url(#nodePulse)">
              <animate attributeName="r" values="15;20;15" dur="8.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="650" cy="200" r="18" fill="url(#nodePulse)">
              <animate attributeName="r" values="15;24;15" dur="6s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1000" cy="300" r="18" fill="url(#nodePulse)">
              <animate attributeName="r" values="15;21;15" dur="7.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="100" r="15" fill="url(#nodePulse)">
              <animate attributeName="r" values="12;18;12" dur="8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="800" cy="400" r="15" fill="url(#nodePulse)">
              <animate attributeName="r" values="12;19;12" dur="9s" repeatCount="indefinite"/>
            </circle>
            
            {/* Primary connections with SLOWER animated pulse effects */}
            <path d="M300,200 L500,400" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite"/>
            </path>
            <path d="M500,400 L700,300" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7s" repeatCount="indefinite"/>
            </path>
            <path d="M700,300 L900,150" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="8s" repeatCount="indefinite"/>
            </path>
            <path d="M900,150 L650,200" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7.5s" repeatCount="indefinite"/>
            </path>
            <path d="M650,200 L300,200" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="6.5s" repeatCount="indefinite"/>
            </path>
            
            {/* NEW animated connections */}
            <path d="M200,100 L400,200" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7s" repeatCount="indefinite"/>
            </path>
            <path d="M400,200 L500,300" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="8.5s" repeatCount="indefinite"/>
            </path>
            <path d="M800,400 L1000,300" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7.8s" repeatCount="indefinite"/>
            </path>
            
            {/* More primary connections - ULTRA CONNECTIVITY */}
            <path d="M150,150 L300,200" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M450,250 L700,300" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M500,400 L400,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M1000,300 L900,150" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M200,450 L400,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M350,100 L550,150" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M600,200 L700,300" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M750,150 L900,150" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M850,350 L700,300" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M950,500 L850,500" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            
            {/* Additional primary connections for ultra connectivity */}
            <path d="M100,300 L250,300" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M200,100 L350,100" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M400,200 L450,250" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M500,300 L550,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M800,400 L750,400" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M1000,200 L900,150" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M1100,300 L950,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M300,500 L200,450" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="5,5"/>
            
            {/* Secondary connections */}
            <path d="M300,200 L400,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M400,350 L500,400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M500,400 L600,450" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M700,300 L800,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M800,250 L900,150" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M300,200 L250,300" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M150,150 L250,300" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M450,250 L550,150" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M700,300 L750,400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M900,150 L950,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M650,200 L550,150" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M1000,300 L1050,400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M400,350 L450,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M800,250 L850,500" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M200,450 L350,450" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M350,100 L300,200" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M600,200 L650,200" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M750,150 L800,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M850,350 L950,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M950,500 L850,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            
            {/* Additional secondary connections */}
            <path d="M100,300 L200,450" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M200,100 L300,200" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M400,200 L500,400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M500,300 L400,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M800,400 L600,450" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M1000,200 L900,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M1100,300 L950,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            <path d="M300,500 L200,450" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
            
            {/* Moving particles along paths with SLOWER animations for data flow visualization */}
            <g className="hidden md:block">
              {/* Path 1: Data flow from node 300,200 to 500,400 - UPDATED COLORS */}
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M300,200 L500,400" 
                  dur="4s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleAlt" opacity="0.8">
                <animateMotion 
                  path="M300,200 L500,400" 
                  dur="4s" 
                  begin="1.3s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleThird" opacity="0.7">
                <animateMotion 
                  path="M300,200 L500,400" 
                  dur="4s" 
                  begin="2.6s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* Path 2: Data flow from node 500,400 to 700,300 - UPDATED COLORS */}
              <use href="#dataParticleThird" opacity="0.9">
                <animateMotion 
                  path="M500,400 L700,300" 
                  dur="3.5s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticle" opacity="0.8">
                <animateMotion 
                  path="M500,400 L700,300" 
                  dur="3.5s" 
                  begin="1.2s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleAlt" opacity="0.7">
                <animateMotion 
                  path="M500,400 L700,300" 
                  dur="3.5s" 
                  begin="2.3s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* Path 3: Data flow from node 700,300 to 900,150 - UPDATED COLORS */}
              <use href="#dataParticleAlt" opacity="0.9">
                <animateMotion 
                  path="M700,300 L900,150" 
                  dur="3.8s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleThird" opacity="0.8">
                <animateMotion 
                  path="M700,300 L900,150" 
                  dur="3.8s" 
                  begin="1.3s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticle" opacity="0.7">
                <animateMotion 
                  path="M700,300 L900,150" 
                  dur="3.8s" 
                  begin="2.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* Path 4: Complete the circuit - UPDATED COLORS */}
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M900,150 L650,200 L300,200" 
                  dur="6s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleAlt" opacity="0.8">
                <animateMotion 
                  path="M900,150 L650,200 L300,200" 
                  dur="6s" 
                  begin="2s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleThird" opacity="0.7">
                <animateMotion 
                  path="M900,150 L650,200 L300,200" 
                  dur="6s" 
                  begin="4s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>

              {/* NEW PATHS with data flow particles */}
              {/* New Path 5: Connecting 150,150 to 300,200 */}
              <use href="#dataParticleThird" opacity="0.9">
                <animateMotion 
                  path="M150,150 L300,200" 
                  dur="3s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticle" opacity="0.8">
                <animateMotion 
                  path="M150,150 L300,200" 
                  dur="3s" 
                  begin="1.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 6: Connecting 450,250 to 700,300 */}
              <use href="#dataParticleAlt" opacity="0.9">
                <animateMotion 
                  path="M450,250 L700,300" 
                  dur="3.2s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleThird" opacity="0.8">
                <animateMotion 
                  path="M450,250 L700,300" 
                  dur="3.2s" 
                  begin="1.6s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 7: Connecting 900,150 to 1000,300 */}
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M900,150 L1000,300" 
                  dur="2.8s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleAlt" opacity="0.8">
                <animateMotion 
                  path="M900,150 L1000,300" 
                  dur="2.8s" 
                  begin="1.4s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 8: Crossing paths - 200,100 to 400,200 to 500,300 */}
              <use href="#dataParticleThird" opacity="0.9">
                <animateMotion 
                  path="M200,100 L400,200 L500,300" 
                  dur="5s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticle" opacity="0.8">
                <animateMotion 
                  path="M200,100 L400,200 L500,300" 
                  dur="5s" 
                  begin="1.7s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleAlt" opacity="0.7">
                <animateMotion 
                  path="M200,100 L400,200 L500,300" 
                  dur="5s" 
                  begin="3.4s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 9: Connecting lower nodes - 800,400 to 1000,300 to 1100,300 */}
              <use href="#dataParticleAlt" opacity="0.9">
                <animateMotion 
                  path="M800,400 L1000,300 L1100,300" 
                  dur="4.5s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleThird" opacity="0.8">
                <animateMotion 
                  path="M800,400 L1000,300 L1100,300" 
                  dur="4.5s" 
                  begin="1.5s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticle" opacity="0.7">
                <animateMotion 
                  path="M800,400 L1000,300 L1100,300" 
                  dur="4.5s" 
                  begin="3s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 10: Connecting vertical section - 500,400 to 500,300 to 600,200 */}
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M500,400 L500,300 L600,200" 
                  dur="3.7s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleThird" opacity="0.8">
                <animateMotion 
                  path="M500,400 L500,300 L600,200" 
                  dur="3.7s" 
                  begin="1.8s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 11: Bottom connection - 350,450 to 200,450 */}
              <use href="#dataParticleAlt" opacity="0.9">
                <animateMotion 
                  path="M350,450 L200,450" 
                  dur="2.5s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticle" opacity="0.8">
                <animateMotion 
                  path="M350,450 L200,450" 
                  dur="2.5s" 
                  begin="1.2s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              {/* New Path 12: Top right section - 750,150 to 800,250 */}
              <use href="#dataParticleThird" opacity="0.9">
                <animateMotion 
                  path="M750,150 L800,250" 
                  dur="2.2s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              <use href="#dataParticleAlt" opacity="0.8">
                <animateMotion 
                  path="M750,150 L800,250" 
                  dur="2.2s" 
                  begin="1.1s"
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
            </g>
            
            {/* Mobile-optimized particle animations - fewer particles, simpler paths */}
            <g className="md:hidden">
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M300,200 L500,400" 
                  dur="5s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M700,300 L900,150" 
                  dur="4.5s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
              
              <use href="#dataParticle" opacity="0.9">
                <animateMotion 
                  path="M900,150 L650,200 L300,200" 
                  dur="7s" 
                  repeatCount="indefinite"
                  rotate="auto"
                />
              </use>
            </g>
            
            {/* Abstract globe suggestion at one corner - hidden on mobile */}
            <g className="hidden md:block">
              <circle cx="150" cy="650" r="100" fill="none" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.2"/>
              <circle cx="150" cy="650" r="70" fill="none" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.2"/>
              <path d="M50,650 L250,650" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
              <path d="M150,550 L150,750" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
              <path d="M79,579 L221,721" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
              <path d="M79,721 L221,579" stroke="#94A3B8" strokeWidth="0.5" strokeOpacity="0.2" fill="none"/>
            </g>
            
            {/* NEW: Additional animated pulse connections for more network complexity */}
            <path d="M300,200 L200,450" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="8.2s" repeatCount="indefinite"/>
            </path>
            <path d="M400,350 L600,450" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7.3s" repeatCount="indefinite"/>
            </path>
            <path d="M150,150 L450,250" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="6.7s" repeatCount="indefinite"/>
            </path>
            <path d="M650,200 L850,350" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="9.1s" repeatCount="indefinite"/>
            </path>
            <path d="M950,350 L1050,400" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="6.9s" repeatCount="indefinite"/>
            </path>
            <path d="M350,100 L300,200" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7.7s" repeatCount="indefinite"/>
            </path>
            <path d="M100,300 L150,150" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="8.3s" repeatCount="indefinite"/>
            </path>
            <path d="M300,500 L400,350" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="6.3s" repeatCount="indefinite"/>
            </path>
            <path d="M750,400 L800,250" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="7.9s" repeatCount="indefinite"/>
            </path>
            <path d="M850,500 L1000,300" stroke="url(#pulseGradient)" strokeWidth="2" fill="none">
              <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="8.7s" repeatCount="indefinite"/>
            </path>
            
            {/* NEW: Additional static connections for more density */}
            <path d="M200,100 L100,300" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M400,200 L450,250" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M600,450 L800,400" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M300,500 L350,450" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M1100,300 L1000,200" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M250,300 L350,250" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M550,150 L650,200" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M750,150 L800,250" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M950,350 L850,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            <path d="M500,300 L600,450" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none"/>
            
            {/* 20 ADDITIONAL VERY SUBTLE connections - super light and thin */}
            <g className="subtle-connections">
              <path d="M120,180 L220,220" stroke="#E2E8F0" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M220,220 L320,280" stroke="#E2E8F0" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M320,280 L420,320" stroke="#EFF6FF" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M420,320 L520,280" stroke="#EFF6FF" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M520,280 L620,320" stroke="#EDF2F7" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M620,320 L720,280" stroke="#EDF2F7" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M720,280 L820,320" stroke="#F0F9FF" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M820,320 L920,280" stroke="#F0F9FF" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M180,130 L280,170" stroke="#E2E8F0" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M280,170 L380,130" stroke="#E2E8F0" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M380,130 L480,170" stroke="#F5F3FF" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M480,170 L580,130" stroke="#F5F3FF" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M580,130 L680,170" stroke="#F0FDFA" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M680,170 L780,130" stroke="#F0FDFA" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M780,130 L880,170" stroke="#F0F9FF" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M120,380 L220,420" stroke="#F8FAFC" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M220,420 L320,380" stroke="#F8FAFC" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M320,380 L420,420" stroke="#F5F3FF" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
              <path d="M420,420 L520,380" stroke="#F5F3FF" strokeWidth="0.5" strokeOpacity="0.25" fill="none"/>
              <path d="M520,380 L620,420" stroke="#F1F5F9" strokeWidth="0.6" strokeOpacity="0.3" fill="none"/>
            </g>
            
            {/* 10 ADDITIONAL DASHED connections with varying patterns */}
            <g className="dashed-connections">
              <path d="M150,250 L250,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="4,6"/>
              <path d="M250,350 L350,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
              <path d="M350,250 L450,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="3,7"/>
              <path d="M450,350 L550,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
              <path d="M550,250 L650,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="4,6"/>
              <path d="M650,350 L750,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
              <path d="M750,250 L850,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="3,7"/>
              <path d="M850,350 L950,250" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,5"/>
              <path d="M950,250 L1050,350" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="4,6"/>
              <path d="M200,200 L400,400" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="2,8"/>
            </g>

            {/* HIGHLY VISIBLE Light Connections - Increased opacity */}
            <path d="M150,150 L250,300" stroke="#94A3B8" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M250,300 L400,350" stroke="#94A3B8" strokeWidth="1.3" strokeOpacity="0.5" fill="none"/>
            <path d="M400,350 L550,350" stroke="#A5B4FC" strokeWidth="1.2" strokeOpacity="0.55" fill="none"/>
            <path d="M550,350 L650,200" stroke="#A5B4FC" strokeWidth="1.3" strokeOpacity="0.5" fill="none"/>
            <path d="M650,200 L750,150" stroke="#A5B4FC" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M750,150 L850,350" stroke="#BAE6FD" strokeWidth="1.1" strokeOpacity="0.6" fill="none"/>
            <path d="M850,350 L950,350" stroke="#BAE6FD" strokeWidth="1.2" strokeOpacity="0.55" fill="none"/>
            <path d="M950,350 L1050,400" stroke="#BAE6FD" strokeWidth="1.3" strokeOpacity="0.5" fill="none"/>
            <path d="M200,450 L300,500" stroke="#C7D2FE" strokeWidth="1.2" strokeOpacity="0.55" fill="none"/>
            <path d="M300,500 L450,250" stroke="#C7D2FE" strokeWidth="1.1" strokeOpacity="0.6" fill="none"/>
            <path d="M450,250 L550,150" stroke="#C7D2FE" strokeWidth="1.3" strokeOpacity="0.5" fill="none"/>
            <path d="M550,150 L750,400" stroke="#A5F3FC" strokeWidth="1.2" strokeOpacity="0.5" fill="none"/>
            <path d="M750,400 L900,150" stroke="#A5F3FC" strokeWidth="1.1" strokeOpacity="0.55" fill="none"/>
            <path d="M200,100 L300,200" stroke="#DBEAFE" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M300,200 L450,250" stroke="#DBEAFE" strokeWidth="1.3" strokeOpacity="0.5" fill="none"/>

            {/* PROMINENT Dashed Connections - Thicker with better visibility */}
            <path d="M150,250 L250,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="4,6"/>
            <path d="M250,350 L350,250" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="5,5"/>
            <path d="M350,250 L450,350" stroke="#3B82F6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="3,7"/>
            <path d="M450,350 L550,250" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="5,5"/>
            <path d="M550,250 L650,350" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="4,6"/>
            <path d="M650,350 L750,250" stroke="#8B5CF6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="5,5"/>
            <path d="M750,250 L850,350" stroke="#2DD4BF" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="3,7"/>
            <path d="M850,350 L950,250" stroke="#2DD4BF" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="5,5"/>
            <path d="M950,250 L1050,350" stroke="#2DD4BF" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="4,6"/>
            <path d="M200,200 L400,400" stroke="#F472B6" strokeWidth="1.5" strokeOpacity="0.7" fill="none" strokeDasharray="2,8"/>

            {/* ADDITIONAL SMALL NODES for increased network density */}
            <circle cx="175" cy="125" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="225" cy="275" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="325" cy="225" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="375" cy="425" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="425" cy="175" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="475" cy="325" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="525" cy="275" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="575" cy="175" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="625" cy="325" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>
            <circle cx="675" cy="225" r="2.5" fill="#3B82F6" filter="url(#glow)" opacity="0.7"/>

            {/* MICRO NODES for ultra-density */}
            <circle cx="150" cy="200" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="250" cy="150" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="350" cy="300" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="450" cy="150" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="550" cy="300" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="650" cy="250" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="750" cy="200" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="850" cy="250" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="950" cy="200" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>
            <circle cx="175" cy="275" r="1.5" fill="#3B82F6" filter="url(#glow)" opacity="0.6"/>

            {/* STANDARD CONNECTIONS */}
            <path d="M175,125 L225,275" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M225,275 L325,225" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M325,225 L375,425" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M375,425 L425,175" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M425,175 L475,325" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M475,325 L525,275" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M525,275 L575,175" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>
            <path d="M575,175 L625,325" stroke="#3B82F6" strokeWidth="1.2" strokeOpacity="0.6" fill="none"/>

            {/* DASHED CONNECTIONS */}
            <path d="M175,125 L275,225" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="4,3"/>
            <path d="M275,225 L375,175" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,4"/>
            <path d="M375,175 L475,225" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="3,5"/>
            <path d="M475,225 L575,275" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="6,3"/>
            <path d="M575,275 L675,175" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="4,4"/>
            <path d="M675,175 L775,225" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="3,6"/>
            <path d="M775,225 L875,175" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="5,3"/>
            <path d="M175,275 L275,225" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" fill="none" strokeDasharray="4,5"/>

            {/* CROSS-CONNECTIONS */}
            <path d="M175,125 L675,225" stroke="#3B82F6" strokeWidth="0.9" strokeOpacity="0.4" fill="none"/>
            <path d="M225,275 L825,325" stroke="#3B82F6" strokeWidth="0.9" strokeOpacity="0.4" fill="none"/>
            <path d="M325,225 L925,275" stroke="#3B82F6" strokeWidth="0.9" strokeOpacity="0.4" fill="none"/>
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading with styled underline */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-black text-center">
            Active Outreach That Accelerates Recruitment
          </h2>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
        </div>
        
        {/* Key message about 50% reduction */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-gray-800">
            We proactively engage physicians worldwide in their native languages, based on precise protocol matching, cutting recruitment timelines by up to <span className="font-bold text-blue-700">50%</span>.
          </p>
        </div>
        
        {/* Simplified tabs - just one option */}
        <div className="flex justify-center mb-10">
          <button
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white border border-blue-600 rounded-lg shadow-sm"
            onClick={() => setActiveTab('conversation')}
          >
            Physician Conversation Example
          </button>
        </div>
        
        {/* Main content with improved layout balance */}
        <div className="grid md:grid-cols-7 gap-8 max-w-6xl mx-auto">
          {/* Left side cards - 2 columns with aligned position */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-6 md:pr-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-3 flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                Protocol-Based Outreach
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We actively identify and contact physicians with relevant patient populations based on precise protocol matching, not just passively waiting for inquiries.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-3 flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></div>
                Clinical Expertise
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our communications demonstrate deep understanding of medical conditions, treatment options, and protocol nuances while maintaining an empathetic, patient-focused approach.
              </p>
            </div>
          </div>
          
          {/* Phone display - LARGER premium device with enhanced visual presence */}
          <div className="md:col-span-3 flex justify-center items-center py-8">
            <div className="relative w-full max-w-[380px] mx-auto transform hover:scale-[1.02] transition-transform duration-700">
              {/* Premium outer glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[48px] blur-md opacity-70"></div>
              
              {/* Modern device frame - enlarged with premium details */}
              <div className="relative bg-gradient-to-b from-[#1A1A1C] to-[#2A2A2C] rounded-[44px] p-3 shadow-xl border border-gray-800">
                {/* Minimal notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-7 bg-[#1A1A1C] rounded-b-xl z-20"></div>
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-24 h-[5px] bg-[#333] rounded-full z-30"></div>
                <div className="absolute top-2 right-12 w-2 h-2 rounded-full bg-[#333] opacity-80"></div>
                
                {/* Phone screen - larger for better readability */}
                <div className="bg-white rounded-[40px] overflow-hidden relative">
                  {/* Email header with subtle design */}
                  <div className="bg-gradient-to-r from-blue-50 to-white px-5 py-3 border-b border-gray-200">
                    <div className="flex justify-between items-center mb-1">
                      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                      <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800">NCT04866563 Trial - Potential Match</h3>
                  </div>
                  
                  {/* Email conversation - larger container with improved spacing */}
                  <div className="bg-gray-50 px-5 py-4 overflow-y-auto h-[550px] text-sm">
                    {/* First outreach message with improved research connection */}
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm text-blue-600">Claire Wilson</div>
                        <div className="text-xs text-gray-600">Jun 15, 9:23 AM</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">claire@boff.ai</div>
                      <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700 shadow-sm border border-blue-100">
                        <p className="mb-2">Hi Sara,</p>
                        <p className="mb-2">I recently read your paper on "Cognitive Fluctuations as Early Predictors of Amyloid Accumulation in Pre-symptomatic Alzheimer's" and was particularly interested in your findings about the correlation between episodic memory fluctuations and subsequent amyloid positivity.</p>
                        <p className="mb-2">This connects directly with the NCT04866563 trial we're recruiting for. Their mechanism targets the specific tau-amyloid interaction pathways you highlighted in your discussion section, and they're seeing promising early results in modulating those precise cognitive fluctuation patterns you identified as predictive biomarkers.</p>
                        <p className="mb-2">For reference, they're looking for patients with:</p>
                        <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
                          <li>Early-stage Alzheimer's (MMSE 20-26)</li>
                          <li>Age 55-85</li>
                          <li>Positive amyloid PET or CSF biomarkers</li>
                        </ul>
                        <p>Given your research focus on early intervention at the precise stage when these cognitive fluctuations become clinically significant, I thought some of your patients might be ideal candidates. Would you be open to discussing how this trial aligns with your current research interests?</p>
                      </div>
                    </div>
                    
                    {/* Dr. Hazramti response - UPDATED text */}
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm text-gray-900">Dr. Sara Hazramti</div>
                        <div className="text-xs text-gray-600">Jun 18, 10:32 AM</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">s.hazramti@nih.gov</div>
                      <div className="bg-white rounded-lg p-3 text-sm text-gray-700 shadow-sm border border-gray-200">
                        <p className="mb-2">Hi Claire,</p>
                        <p className="mb-2">Thank you for reaching out. I do have a 72-year-old patient with early-stage Alzheimer's disease (MMSE score of 22) who might be eligible. Their amyloid PET scan showed significant plaque buildup, and they're currently on Donepezil 10mg/day.</p>
                        <p>Do you know if the trial allows concurrent use of cholinesterase inhibitors? Also, they've shown some mild cerebral microbleeds on their recent MRI. Would this exclude them from the trial?</p>
                      </div>
                    </div>
                    
                    {/* Claire's response */}
                    <div className="mb-4">
                      <div className="flex justify-between">
                        <div className="font-medium text-sm text-blue-600">Claire Wilson</div>
                        <div className="text-xs text-gray-600">Jun 18, 11:05 AM</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">claire@boff.ai</div>
                      <div className="bg-blue-50 rounded-lg p-3 text-sm text-gray-700 shadow-sm border border-blue-100">
                        <p className="mb-2">Hey Sara,</p>
                        <p className="mb-2">Thank you for your quick response and for considering the trial for your patient.</p>
                        <p className="mb-2">Yes, the protocol does allow concurrent use of cholinesterase inhibitors like Donepezil, provided the dosage has been stable for at least 3 months prior to screening. This is specifically mentioned in the inclusion criteria.</p>
                        <p className="mb-2">Regarding the cerebral microbleeds (CMBs), it depends on their number and location. The exclusion criteria specify:</p>
                        <ul className="list-disc pl-5 mb-2 text-sm text-gray-700">
                          <li>More than 4 microbleeds (≤10 mm) would be exclusionary</li>
                          <li>Any microbleed >10 mm would exclude participation</li>
                          <li>Location in the brainstem would also be exclusionary</li>
                        </ul>
                        <p className="mb-2">Would you be able to provide more details about the number and location of the microbleeds from the MRI report?</p>
                        <p>I'd be happy to connect you with Dr. Alexandra Chen, the principal investigator at the Georgetown site, for further discussion about your patient.</p>
                      </div>
                    </div>
                    
                    {/* Sara's response */}
                    <div>
                      <div className="flex justify-between">
                        <div className="font-medium text-sm text-gray-900">Dr. Sara Hazramti</div>
                        <div className="text-xs text-gray-600">Jun 18, 2:47 PM</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">s.hazramti@nih.gov</div>
                      <div className="bg-white rounded-lg p-3 text-sm text-gray-700 shadow-sm border border-gray-200">
                        <p className="mb-2">Claire,</p>
                        <p className="mb-2">Thanks for the quick and detailed response. The patient has been on a stable dose of Donepezil for 8 months, so that shouldn't be an issue.</p>
                        <p className="mb-2">I've reviewed the MRI report again, and there are only 2 microbleeds, both located in the right parietal lobe and both under 5mm in diameter. Based on what you've shared, it seems they would still be eligible.</p>
                        <p>I'd appreciate a connection with Dr. Chen. The patient is quite functional but showing increasing word-finding difficulties and spatial disorientation. Their family is very motivated to explore all treatment options.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fixed position bounce indicator - adjusted to lower position */}
                  <div className="absolute bottom-6 left-[38%] transform -translate-x-1/2 flex justify-center animate-bounce z-20 pointer-events-none">
                    <span className="text-xs font-medium text-white bg-blue-600 px-3 py-1 rounded-full shadow-sm">
                      Scroll for more
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced device shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-5/6 h-6 bg-black opacity-15 blur-md rounded-full"></div>
            </div>
          </div>
          
          {/* Right side cards - 2 columns with aligned position */}
          <div className="md:col-span-2 flex flex-col justify-center space-y-6 md:pl-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-3 flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                Eligibility Assessment
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Unlike standard recruitment methods, we can immediately evaluate patient eligibility details, addressing clinical questions and reducing screening failures.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
              <h3 className="text-base font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-3 flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                50% Faster Recruitment
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our targeted approach consistently cuts recruitment timelines in half, saving millions in development costs and accelerating time-to-market.
              </p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Global Recruitment Network - Always visible, replaces the tab */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="flex flex-col items-start mb-16">
            <div className="bg-blue-600/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-blue-600 font-medium text-sm tracking-wide">GLOBAL REACH</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Global Recruitment</span> Network
            </h3>
            <p className="text-xl text-gray-700 max-w-2xl">
              AI-powered outreach across borders, languages, and healthcare systems—maintaining perfect protocol accuracy worldwide.
            </p>
          </div>
          
          {/* Redesigned stats with modern, asymmetrical layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
            <div className="md:col-span-5 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/5 rounded-full"></div>
              <div className="absolute right-12 top-12 w-16 h-16 bg-blue-500/5 rounded-full"></div>
              
              <span className="inline-block text-blue-600 font-medium mb-2">Network Scale</span>
              <div className="text-6xl font-bold text-gray-900 mb-6 flex items-baseline">
                220,000<span className="text-blue-600"></span><span className="text-blue-500 text-xl ml-1"></span>
              </div>
              <p className="text-gray-600 text-lg">Physicians & Principal Investigators across the globe connected to our AI system</p>
            </div>
            
            <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between">
                <span className="text-indigo-600 font-medium text-sm">COMMUNICATION</span>
                <div className="mt-3">
                  <div className="text-5xl font-bold text-gray-900 flex items-baseline">
                    30<span className="text-indigo-500 text-xl ml-1">+</span>
                  </div>
                  <p className="text-gray-600 mt-2">Languages processed in real-time</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="h-1.5 w-16 bg-indigo-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col justify-between">
                <span className="text-purple-600 font-medium text-sm">COVERAGE</span>
                <div className="mt-3">
                  <div className="text-5xl font-bold text-gray-900 flex items-baseline">
                    65<span className="text-purple-500 text-xl ml-1">+</span>
                  </div>
                  <p className="text-gray-600 mt-2">Countries with active recruitment</p>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="h-1.5 w-16 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg text-white flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h4 className="text-xl font-semibold mb-2">Unmatched scalability</h4>
                  <p className="text-gray-300">Our AI processes thousands of clinical conversations every minute</p>
                </div>
                <div className="flex space-x-1">
                  <div className="w-3 h-10 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
                  <div className="w-3 h-16 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-8 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  <div className="w-3 h-12 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                  <div className="w-3 h-8 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.8s' }}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature columns - redesigned with modern tech aesthetic */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group h-full">
              <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all group-hover:shadow-md h-full flex flex-col">
                <div className="h-28 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center p-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <svg className="w-7 h-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Multilingual Precision</h4>
                  <p className="text-gray-600 text-sm">
                    Our AI maintains clinical accuracy across all languages while adapting to cultural communication styles and regional healthcare protocols.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group h-full">
              <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all group-hover:shadow-md h-full flex flex-col">
                <div className="h-28 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center p-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <svg className="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Regulatory Adaptive</h4>
                  <p className="text-gray-600 text-sm">
                    Automatically conforms to local regulatory requirements across all regions while maintaining consistent trial protocol interpretation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="group h-full">
              <div className="bg-white p-1 rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all group-hover:shadow-md h-full flex flex-col">
                <div className="h-28 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center p-6 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#d946ef_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform z-10">
                    <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Real-time Insights</h4>
                  <p className="text-gray-600 text-sm">
                    Global recruitment dashboard showing live engagement metrics across all regions with predictive recruitment timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

{/* ExpandableCard component - REFINED ENTERPRISE STYLE */}
const ExpandableCard = ({ title, color, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Map color string to actual color classes - REFINED SUBTLER PALETTE
  const colorMap = {
    blue: {
      bg: "bg-gray-50",
      border: "border-l-3 border-blue-500",
      title: "text-gray-800",
    },
    purple: {
      bg: "bg-gray-50",
      border: "border-l-3 border-purple-500",
      title: "text-gray-800",
    },
    green: {
      bg: "bg-gray-50",
      border: "border-l-3 border-green-500",
      title: "text-gray-800",
    },
    orange: {
      bg: "bg-gray-50",
      border: "border-l-3 border-blue-500",
      title: "text-gray-800",
    },
  };
  
  const { bg, border, title: titleColor } = colorMap[color];
  
  return (
    <div 
      className={`${bg} ${border} rounded-lg shadow-sm cursor-pointer transition-all duration-300 ${isExpanded ? 'p-4' : 'py-3 px-4'} border border-gray-200`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <h3 className={`text-sm font-semibold ${titleColor} flex justify-between items-center`}>
        {title}
        <svg 
          className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''} text-gray-500`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </h3>
      
      {isExpanded && (
        <p className="text-sm text-gray-600 mt-3 transition-all leading-relaxed">
          {content}
        </p>
      )}
    </div>
  );
};