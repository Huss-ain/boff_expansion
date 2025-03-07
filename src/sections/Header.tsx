"use client";

import ArrowRight from '@/assets/arrow-right.svg';
import MenuIcon from '@/assets/menu.svg';

export const HeaderComponent = () => {
   return (
      <header className='sticky top-0 backdrop-blur-sm z-50'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-[#FFE0B5] hidden md:block'>Expand your sales to the arab world instantly</p>
            <div className="inline-flex gap-1 items-center"> 
            <p>Now accepting healthtech, medtech and fintech companies</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </div>
          </div>
          <div className='py-5 px-10'>
            <div className="container">
              <div className='flex items-center justify-between'>
              {/* Custom Boff AI Logo */}
              <div className="flex items-center">
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
                      <circle cx="20" cy="4" r="0.5" fill="white" />
                      <circle cx="4" cy="4" r="0.5" fill="white" />
                      <circle cx="20" cy="20" r="0.5" fill="white" />
                      <circle cx="4" cy="20" r="0.5" fill="white" />
                    </svg>
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute top-0 left-0 w-full h-full rounded-full bg-purple-500 opacity-30 animate-pulse-gentle"></div>
                </div>
                
                {/* Logo text with gradient */}
                <div className="flex flex-col">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-none bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent tracking-tight">
                    Boff AI
                  </h1>
                  <span className="text-xs sm:text-sm text-purple-700/90 font-medium leading-tight tracking-wide">
                    Empathetic outreach
                  </span>
                </div>
              </div>
              
              <MenuIcon className= "h-5 w-5 md:hidden"/>
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a href="#product">Product</a>
                <a href="#features">Features</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#team">Team</a>
                <a href="https://calendly.com/hussain-softbase/30min" target='_blank' rel='noopener noreferrer'>
                  <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>Book a call</button>
                </a>

              </nav>
              </div>
            </div>
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
          `}</style>
      </header>
   );
};

export default function Home() {
  return <HeaderComponent />;
}
