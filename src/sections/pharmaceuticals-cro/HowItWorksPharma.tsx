"use client";
import React, { useState } from 'react';

export const HowItWorksPharma = () => {
  const [activeStep, setActiveStep] = useState(null);
  
  const steps = [
    {
      number: "1",
      title: "Share your trial details",
      description: "Simply share your protocol document and contact information via email. That's it.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "We build a targeted physician list",
      description: "Our AI identifies the perfect physicians most likely to have eligible patients.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Launch AI-driven outreach",
      description: "Our system begins personalized communication—all through their existing email.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Hand over interested leads",
      description: "We connect you directly with each interested physician through your regular email.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="process" className="py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#f8fbff,_#fdfaff_80%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Section heading matching RecruitmentShowcase style */}
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-black text-center">
              Onboarding in a day
            </h2>
            <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
            <p className="text-lg sm:text-xl text-[#3E3232] tracking-tight mt-6 mx-auto max-w-[900px] text-center">
              Integrate Boff AI into your workflow in days—not weeks. Our interface is your email—no complicated setups or learning curves.
            </p>
          </div>
          
          {/* Interactive step indicator - fixed for the last step */}
          <div className="max-w-5xl mx-auto relative mb-16">
            {/* Progress line - stopping at last step */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0">
              {/* Calculate percentage based on active step - making sure it doesn't go past the last step circle */}
              <div className="h-full bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] rounded-full" 
                   style={{ 
                      width: activeStep !== null 
                        ? activeStep < 3 
                          ? `${(activeStep) * 33.33 + 16.665}%` // Stops halfway to the next step
                          : '100%' // Full width for the last step
                        : '0%', 
                      transition: 'width 0.5s ease-in-out' 
                   }}></div>
            </div>
            
            {/* Step numbers */}
            <div className="hidden md:flex justify-between relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="text-center" 
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer 
                                 ${activeStep === index || activeStep === null ? 'bg-white shadow-md' : 'bg-gray-100'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                                   ${activeStep === index ? 'bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] text-white' : 'bg-gray-50 text-gray-500'}`}>
                      <span className="font-bold">{step.number}</span>
                    </div>
                  </div>
                  <p className={`mt-2 font-medium transition-colors duration-300 ${activeStep === index ? 'text-gray-900' : 'text-gray-500'}`}>
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Modern tech cards with grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group h-full"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Card with vibrant accent */}
                <div className={`
                  relative bg-gradient-to-r p-0.5 rounded-xl h-full
                  from-[#4A90E2] to-[#9B59B6] shadow-sm transition-all duration-300
                  ${activeStep === index ? 'scale-[1.02] shadow-lg' : ''}
                `}>
                  <div className="bg-white rounded-[10px] p-6 h-full flex flex-col relative overflow-hidden">
                    {/* Number badge - moved to top right */}
                    <div className="absolute top-4 right-4">
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] shadow-md
                      `}>
                        <span className="font-mono text-lg font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Icon with enhanced visibility */}
                    <div className={`
                      w-12 h-12 rounded-full mb-4 flex items-center justify-center
                      bg-[#EBF5FF] text-[#4A90E2] transition-transform duration-300
                      ${activeStep === index ? 'scale-110' : ''}
                    `}>
                      {step.icon}
                    </div>
                    
                    {/* Content with better spacing */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                      <p className="text-[#3E3232]">{step.description}</p>
                    </div>
                    
                    {/* Interactive tech element at bottom - only show on active cards */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div 
                        className={`
                          h-1 bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] rounded-full
                          transition-all duration-500 ease-out
                          ${activeStep === index ? 'w-full' : 'w-0'}
                        `}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integration metrics card with upgraded colors */}
          <div className="mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-[#4A90E2]/10 to-[#9B59B6]/10 p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    It's really that simple
                  </h3>
                  <p className="text-[#3E3232] text-lg max-w-xl">
                    Effortless integration through your existing email. No new logins, no software to learn, no installation required.
                  </p>
                </div>
                
                <div className="flex gap-10 md:gap-16">
                  {/* Enhanced stat boxes */}
                  <div className="text-center relative group cursor-pointer">
                    <div className="text-4xl font-bold mb-1 relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] transition-all duration-300 group-hover:scale-110 inline-block">24h</span>
                    </div>
                    <p className="text-[#3E3232]">Setup time</p>
                  </div>
                  <div className="text-center relative group cursor-pointer">
                    <div className="text-4xl font-bold mb-1 relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#9B59B6] transition-all duration-300 group-hover:scale-110 inline-block">50%</span>
                    </div>
                    <p className="text-[#3E3232]">Faster recruitment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};