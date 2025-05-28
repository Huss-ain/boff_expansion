"use client";

import ArrowRight from '@/assets/arrow-right.svg';
import MenuIcon from '@/assets/menu.svg';
import { useState, useEffect, useRef, RefObject } from 'react';
import { usePathname } from 'next/navigation';

export const HeaderComponent = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [industriesOpen, setIndustriesOpen] = useState(false);
   const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
   const pathname = usePathname();
   const isMiddleEastPage = pathname === '/middle-east';
   
   const industriesRef = useRef<HTMLDivElement>(null);
   
   const toggleMobileMenu = () => {
     setMobileMenuOpen(!mobileMenuOpen);
   };

   const toggleIndustries = () => {
     setIndustriesOpen(!industriesOpen);
   };

   const toggleMobileIndustries = () => {
     setMobileIndustriesOpen(!mobileIndustriesOpen);
   };

   // Close dropdowns when clicking outside - MODIFY THIS
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       // Only close if clicking outside of the dropdown element
       if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
         setIndustriesOpen(false);
       }
     };
     
     document.addEventListener('click', handleClickOutside);
     return () => {
       document.removeEventListener('click', handleClickOutside);
     };
   }, []);

   // Prefix for navigation links - if on middle-east page, link back to home page
   const linkPrefix = isMiddleEastPage ? '/' : '';

   return (
      <header className='sticky top-0 backdrop-blur-sm z-50'>
      {/* Enhanced banner with urgency messaging */}
      <div className="flex md:justify-center md:items-center py-4 bg-gradient-to-r from-purple-800 to-blue-700 text-white md:gap-3 relative overflow-hidden">
        {/* Animated highlight effect */}
        <div className="absolute inset-0 bg-white/10 animate-pulse-slow"></div>
        
        {/* Mobile container - full width centering */}
        <div className="w-full text-center md:hidden">
          <div className="inline-flex gap-2 items-center justify-center">
            <p className="text-base font-medium">Next onboarding starts March/April 2025 - Reserve your spot now</p>
            <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold tracking-wide ml-1 animate-pulse-gentle">
              LIMITED
            </span>
            <ArrowRight className="h-5 w-5 inline-flex justify-center items-center ml-1" />
          </div>
        </div>
        
        {/* Desktop layout - unchanged */}
        <div className="hidden md:flex items-center">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
          <p className='text-[#FFE0B5] font-medium text-base'>Limited spots available!</p>
        </div>
        
        <div className="hidden md:inline-flex gap-2 items-center">
          <span className="font-semibold">🚀</span>
          <p className="text-lg font-medium">Next onboarding starts March/April 2025 - Reserve your spot now</p>
          <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold tracking-wide ml-1 animate-pulse-gentle">
            LIMITED
          </span>
          <ArrowRight className="h-5 w-5 inline-flex justify-center items-center ml-1" />
        </div>
      </div>
          
          <div className='py-5 px-10 bg-white/90 border-b border-purple-100 shadow-sm'>
            <div className="container">
              <div className='flex items-center justify-between'>
              {/* Custom Boff AI Logo */}
              <a href="/" className="flex items-center">
                {/* Logo icon with pulse effect - Emotional connection icon */}
                <div className="relative mr-2 md:mr-3">
                  <div className="h-11 w-11 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-md relative z-10">
                    <svg className="w-7 h-7 md:w-9 md:h-9 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Heart icon */}
                      <path 
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                        fill="none" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      
                      {/* Emotion wave lines emanating from heart */}
                      <path 
                        d="M17 8.5C17 7.12 16.38 6.5 15.5 6.5" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                      />
                      
                      {/* Emotion wave on left */}
                      <path 
                        d="M7 8.5C7 7.12 7.62 6.5 8.5 6.5" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round"
                      />
                      
                      {/* Happy smile in heart */}
                      <path 
                        d="M9.5 12.5C9.5 12.5 10.5 13.5 12 13.5C13.5 13.5 14.5 12.5 14.5 12.5" 
                        stroke="white" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      
                      {/* Connection dots around */}
                      <circle cx="6" cy="10" r="0.5" fill="white" />
                      <circle cx="18" cy="10" r="0.5" fill="white" />
                      <circle cx="12" cy="5" r="0.5" fill="white" />
                    </svg>
                  </div>
                  
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-blue-300 blur-md opacity-40 animate-pulse-gentle"></div>
                </div>
                
                <div className="flex flex-col">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent tracking-tight">
                    Boff AI
                  </h1>
                  <span className="text-xs sm:text-sm text-purple-700/90 font-medium leading-tight tracking-wide">
                    Specialist outreach
                  </span>
                </div>
              </a>
              
              {/* Mobile menu button */}
              <button 
                className="h-10 w-10 flex items-center justify-center md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <MenuIcon className="h-5 w-5"/>
              </button>
              
              {/* Desktop navigation */}
              <nav className="hidden md:flex gap-6 items-center">
                <a href="/" className="text-base md:text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors">Boff</a>
                
                {/* Industries dropdown */}
                <div className="relative" ref={industriesRef}>
                  <button 
                    className="text-base md:text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleIndustries();
                      console.log("Industries dropdown clicked, state:", !industriesOpen);
                    }}
                  >
                    Industries
                    <svg className={`w-4 h-4 ml-1 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  
                  <div className={`absolute z-10 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100 py-2 ${industriesOpen ? 'block' : 'hidden'}`}>
                    <a 
                      href={`${linkPrefix}/Industries/pharmaceuticals-cro`} 
                      className="block px-4 py-2 text-base text-gray-900 hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => {
                        console.log("Pharmaceuticals link clicked");
                        setIndustriesOpen(false);
                      }}
                    >
                      Pharmaceuticals & CRO's
                    </a>
                    <a 
                      href={`${linkPrefix}/Industries/accounting`} 
                      className="block px-4 py-2 text-base text-gray-900 hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => {
                        console.log("Accounting link clicked");
                        setIndustriesOpen(false);
                      }}
                    >
                      Accounting
                    </a>
                    {/* Additional industry items can be added here */}
                  </div>
                </div>
                
                <a href="/middle-east" className="text-base md:text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors">Middle East</a>
                <a href={`${linkPrefix}#pricing`} className="text-base md:text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors">Pricing</a>
                <a href="https://calendly.com/hussain-softbase/30min" target='_blank' rel='noopener noreferrer'>
                  <button className='bg-black text-white px-4 py-2 rounded-lg font-medium text-base md:text-lg tracking-tight inline-flex items-center justify-center'>
                    Coming Soon
                  </button>
                </a>
              </nav>
              </div>
            </div>
          </div>
          
          {/* Mobile Navigation Menu */}
          <div className={`md:hidden bg-white/95 shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="flex flex-col items-center gap-4 py-6">
              <a 
                href="/"
                className="text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Boff
              </a>
              
              {/* Mobile Industries dropdown */}
              <div className="w-full flex flex-col items-center">
                <button 
                  className="text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors py-2 flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMobileIndustries();
                    console.log("Mobile Industries dropdown clicked, state:", !mobileIndustriesOpen);
                  }}
                >
                  Industries
                  <svg className={`w-4 h-4 ml-1 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                
                {mobileIndustriesOpen && (
                  <div className="w-full bg-gray-50 mt-1 mb-2">
                    <a 
                      href={`${linkPrefix}/Industries/pharmaceuticals-cro`} 
                      className="block text-center py-3 text-base text-gray-900 hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => {
                        setMobileIndustriesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Pharmaceuticals & CRO's
                    </a>
                    <a 
                      href={`${linkPrefix}/Industries/accounting`} 
                      className="block text-center py-3 text-base text-gray-900 hover:bg-purple-50 hover:text-purple-700"
                      onClick={() => {
                        setMobileIndustriesOpen(false);
                        setMobileMenuOpen(false);
                      }}
                    >
                      Accounting
                    </a>
                    {/* Additional mobile industry items can be added here */}
                  </div>
                )}
              </div>
              
              <a 
                href="/middle-east" 
                className="text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Middle East
              </a>
              <a 
                href={`${linkPrefix}#pricing`}
                className="text-lg text-gray-900 font-medium tracking-tight hover:text-purple-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="https://calendly.com/" 
                target='_blank' 
                rel='noopener noreferrer'
                className="mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <button className='bg-black text-white px-6 py-3 rounded-lg font-medium text-lg tracking-tight inline-flex items-center justify-center'>
                  Coming Soon
                </button>
              </a>
            </nav>
          </div>
          
          {/* Add custom animation */}
          <style jsx global>{`
            @keyframes pulse-gentle {
              0% {
                transform: scale(1);
                opacity: 0.4;
              }
              50% {
                transform: scale(1.15);
                opacity: 0.2;
              }
              100% {
                transform: scale(1);
                opacity: 0.4;
              }
            }
            .animate-pulse-gentle {
              animation: pulse-gentle 4s ease-in-out infinite;
            }
            
            @keyframes pulse-slow {
              0%, 100% {
                opacity: 0;
              }
              50% {
                opacity: 0.15;
              }
            }
            .animate-pulse-slow {
              animation: pulse-slow 3s ease-in-out infinite;
            }
          `}</style>
      </header>
   );
};

export default function Home() {
  return <HeaderComponent />;
}
