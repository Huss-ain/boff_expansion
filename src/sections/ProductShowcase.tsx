"use client";
import Image from 'next/image';
import Jodi from '@/assets/Jodi Almeida.png';
import { useState } from 'react';

export const ProductShowcase = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cardContents = {
    company: {
      title: "Company",
      description: "MediTech Solutions has been affected by a significant cyber breach",
      color: "#D8B6FF",
      content: (
        <>
          <h4 className="text-xl font-semibold mb-3">
            <span className="blur-text">MediTech</span> <span className="blur-text">Solutions</span>
          </h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Industry</p>
              <p className="text-black">Healthcare Technology</p>
            </div>
            <div>
              <p className="font-medium">Current Situation</p>
              <p className="text-black">Recovering from a major ransomware attack 4 months ago that compromised their treasury management systems and led to approximately $1.7M in fraud losses.</p>
            </div>
            <div>
              <p className="font-medium">Financial Status</p>
              <p className="text-black">Pre-IPO stage with last valuation of $830M. The security breach has delayed their planned public offering by at least 6 months.</p>
            </div>
            <div>
              <p className="font-medium">Other Details</p>
              <p className="text-black">Recently launched a new patient management platform. Strong board of directors with healthcare executives. Annual company retreat scheduled for January 2025.</p>
            </div>
          </div>
        </>
      )
    },
    career: {
      title: "Career",
      description: "Highly accomplished finance executive at a critical career juncture",
      color: "#FFD485",
      content: (
        <>
          <h4 className="text-xl font-semibold mb-3">Professional Background</h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Current Role</p>
              <p className="text-black">
                VP of Finance at <span className="blur-text">MediTech Solutions</span> (3 years). 
                Leading the treasury reconstruction efforts after the security breach.
              </p>
            </div>
            <div>
              <p className="font-medium">Previous Experience</p>
              <p className="text-black">
                Director of Finance at <span className="blur-text">BioGen Pharmaceuticals</span> (5 years), 
                Financial Analyst at <span className="blur-text">Goldman Sachs</span> (4 years)
              </p>
            </div>
            <div>
              <p className="font-medium">Professional Concerns</p>
              <p className="text-black">The treasury hack has put her under intense scrutiny from the board. Her handling of the recovery will likely determine her career trajectory within the company.</p>
            </div>
            <div>
              <p className="font-medium">Other Career Details</p>
              <p className="text-black">MBA from Wharton. Published an article on healthcare finance in 2022. Speaks at regional finance conferences. Excellent at Excel macros. Former tennis player in college.</p>
            </div>
          </div>
        </>
      )
    },
    individual: {
      title: "Individual",
      description: "Under significant pressure but values genuine professional connections",
      color: "#8EEAFF",
      content: (
        <>
          <h4 className="text-xl font-semibold mb-3">Personal Context</h4>
          <div className="space-y-4">
            <div>
              <p className="font-medium">Current Mindset</p>
              <p className="text-black">Overwhelmed by the aftermath of the hack. Working 70+ hour weeks to rebuild treasury systems and restore investor confidence.</p>
            </div>
            <div>
              <p className="font-medium">Professional Values</p>
              <p className="text-black">Values expertise and experience. Appreciates straightforward communication and practical solutions. Distrusts flattery and sales pitches.</p>
            </div>
            <div>
              <p className="font-medium">Response to Crisis</p>
              <p className="text-black">Takes a methodical approach to problem-solving. Currently seeking expert advice but has limited time for meetings that don't provide immediate value.</p>
            </div>
            <div>
              <p className="font-medium">Personal Details</p>
              <p className="text-black">Lives in Boston. Married with two children. Enjoys hiking on weekends. Recently started a book club. Allergic to shellfish. Planning a family vacation to Italy next summer.</p>
            </div>
          </div>
        </>
      )
    }
  };

  return (
  <section id="product" className="bg-gradient-to-b from-[#f9f7ff] to-[#eef5ff] py-24 overflow-x-clip">
    <div className="container mx-auto px-4">
      <div className="mx-w-[740px] mx-auto">
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-r from-[#3c2a06] to-[#422301] text-transparent bg-clip-text mt-7">Prospects are human</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight mt-7 max-w-[1000px] mx-auto mb-12 text-black"> 
          Connect with people on a human level by developing outreach that takes human needs and motivations into account.
        </p>
        
        {/* Two-column layout container */}
        <div className="flex flex-col lg:flex-row gap-12 mt-16 max-w-[1200px] mx-auto">
          {/* Left column - Jodi's image and name */}
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="multi-color-glow relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] mx-auto">
              <div className="absolute inset-[8px] rounded-full overflow-hidden z-10">
                <Image 
                  src={Jodi}
                  alt="Jodi Almeida"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Name and Title precisely centered under image */}
            <div className="mt-6 mb-12 lg:mb-0 text-center w-[280px] md:w-[320px]">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3c2a06] to-[#422301] text-transparent bg-clip-text">
                Jodi Almeida
              </h3>
              <p className="text-xl text-[#3E3232] mt-1">VP of Finance</p>
            </div>
          </div>
          
          {/* Right column - Cards stacked vertically */}
          <div className="lg:w-2/3">
            <div className="flex flex-col gap-8">
              {Object.entries(cardContents).map(([key, card]) => (
                <div key={key} className="card-container">
                  <div 
                    onClick={() => setActiveCard(activeCard === key ? null : key)}
                    className={`
                      rounded-2xl p-8 transition-all duration-300 cursor-pointer
                      relative overflow-hidden group border border-gray-100
                      shadow-lg
                      ${activeCard === key ? 'shadow-lg' : 'shadow-lg hover:shadow-xl'}
                    `}
                    style={{
                      background: card.color + '30' // Using the color with 30% opacity
                    }}
                  >
                    {/* Color accent */}
                    <div 
                      className="absolute top-0 left-0 w-full h-2 transition-transform duration-300 group-hover:scale-x-100 origin-left"
                      style={{ 
                        background: card.color,
                        transform: activeCard === key ? 'scaleX(1)' : 'scaleX(0.3)'
                      }}
                    ></div>
                    
                    <div className="flex flex-col relative z-10">
                      <div className="flex items-start justify-between mb-5">
                        {/* White heading box with more rounded corners */}
                        <div className="bg-white rounded-3xl shadow-sm py-2 px-5 inline-block">
                          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3c2a06] to-[#422301] text-transparent bg-clip-text text-left">
                            {card.title}
                          </h3>
                        </div>
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeCard === key ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                          style={{ backgroundColor: card.color }}
                        >
                          <svg 
                            className={`w-4 h-4 transition-transform duration-300 ${activeCard === key ? 'rotate-180' : 'rotate-0'}`}
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="white"
                            strokeWidth="3" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </div>
                      
                      <p className="text-black text-lg md:text-xl text-left pr-6">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Individual dynamic content for each card - keeping white */}
                  {activeCard === key && (
                    <div 
                      className="mt-4 p-8 mb-10 rounded-3xl shadow-md transition-all duration-300 animate-fadeIn bg-white"
                      style={{
                        boxShadow: `0 10px 30px -15px rgba(0,0,0,0.1), 0 4px 6px -2px ${card.color}30`
                      }}
                    >
                      <div className="border-l-[3px] pl-6" style={{ borderColor: card.color }}>
                        {card.content}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CSS for flame-like glow animation */}
    <style jsx>{`
      .multi-color-glow {
        position: relative;
        border-radius: 50%;
      }
      
      .multi-color-glow::before {
        content: '';
        position: absolute;
        inset: -10px;
        background: conic-gradient(
          from 0deg,
          #8EEAFF,  /* Teal */
          #D8B6FF,  /* Purple */
          #FFD485,  /* Gold */
          #8EEAFF   /* Back to teal for smooth transition */
        );
        border-radius: 50%;
        z-index: 0;
        filter: blur(10px);
        opacity: 0.7;
        animation: flameMove 4s ease-in-out infinite alternate, 
                   colorRotate 10s linear infinite;
      }
      
      /* More pronounced flame movement effect */
      @keyframes flameMove {
        0% {
          filter: blur(8px);
          inset: -7px -10px -13px -10px;
          opacity: 0.5;
          transform: scale(0.96);
        }
        25% {
          filter: blur(12px);
          inset: -14px -11px -7px -12px;
          opacity: 0.8;
          transform: scale(1.02);
        }
        50% {
          filter: blur(14px);
          inset: -13px -7px -12px -9px;
          opacity: 0.7;
          transform: scale(1);
        }
        75% {
          filter: blur(11px);
          inset: -9px -14px -10px -7px;
          opacity: 0.85;
          transform: scale(1.03);
        }
        100% {
          filter: blur(9px);
          inset: -11px -8px -8px -12px;
          opacity: 0.65;
          transform: scale(0.98);
        }
      }
      
      /* Rotating colors - more gentle */
      @keyframes colorRotate {
        0% {
          background: conic-gradient(
            from 0deg,
            #8EEAFF,  /* Teal */
            #D8B6FF,  /* Purple */
            #FFD485,  /* Gold */
            #8EEAFF   /* Back to teal */
          );
        }
        100% {
          background: conic-gradient(
            from 360deg,
            #8EEAFF,  /* Teal */
            #D8B6FF,  /* Purple */
            #FFD485,  /* Gold */
            #8EEAFF   /* Back to teal */
          );
        }
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
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }

      .blur-text {
        display: inline-block;
        filter: blur(4px);
        user-select: none;
      }
    `}</style>

    {/* Recommendation Section with improved large screen layout */}
    <div className="mt-20 max-w-[1300px] mx-auto">
      <div className="relative">
        {/* Section heading with gradient underline */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            AI Outreach Recommendation
          </h3>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></div>
        </div>
        
        {/* Recommendation card with two-column layout on large screens */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10 lg:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-50 to-amber-100 rounded-bl-3xl rounded-tr-2xl -z-10 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-amber-50 to-amber-100 rounded-br-2xl rounded-tl-3xl -z-10 opacity-70"></div>
          
          {/* AI Assistant Icon */}
          <div className="flex items-center mb-10">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-amber-600 to-yellow-500 flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-black text-xl">Boff AI Assistant</h4>
              <p className="text-base text-black">Personalized outreach strategy</p>
            </div>
          </div>
          
          {/* Two-column layout for large screens */}
          <div className="lg:flex lg:gap-10 xl:gap-14">
            {/* Left column - Synthesis */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="p-7 bg-gray-50 rounded-xl h-full border border-gray-200">
                <h5 className="text-xl font-medium mb-5 text-black flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Synthesis
                </h5>
                <p className="text-black leading-relaxed text-lg">
                  Jodi Almeida appears to be at a career-defining moment handling a treasury hack recovery. 
                  She's professionally ambitious but currently under significant pressure. The best approach 
                  is to position yourself as a supportive resource rather than making a direct sales pitch.
                </p>
                
                {/* Example message template */}
                <div className="mt-8 pt-7 border-t border-gray-200">
                  <h5 className="text-base font-medium text-black mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Suggested initial message
                  </h5>
                  <p className="text-black text-base italic">
                    "Hi Jodi, I noticed your team is working through the aftermath of the recent security incident. 
                    Having helped organizations rebuild after similar situations, I understand the pressure you're under. 
                    If you'd like to discuss approaches that have worked well for others or just need a sounding board,
                    I'm happy to share what I've learned without any obligation."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right column - Recommended Approach */}
            <div className="lg:w-1/2">
              <div className="p-7 bg-gradient-to-br from-white to-amber-50 rounded-xl h-full border border-amber-100">
                <h5 className="text-xl font-medium mb-5 text-black flex items-center">
                  <svg className="w-6 h-6 mr-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Recommended Approach
                </h5>
                <div className="space-y-6">
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-black text-lg">Lead with empathy</p>
                      <p className="text-black text-base">Acknowledge the difficult situation without being presumptuous about details.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-black text-lg">Offer value first</p>
                      <p className="text-black text-base">Position yourself as someone who has relevant experience rather than a vendor.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                    <div className="h-7 w-7 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-black text-lg">Career angle</p>
                      <p className="text-black text-base">Subtly highlight how this challenge could become a career advantage when resolved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle "Powered by" footer */}
        <div className="flex justify-center mt-5 text-sm text-black">
          Powered by Boff AI natural language understanding
        </div>
      </div>
    </div>
  </section>
  );
};
