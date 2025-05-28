"use client";
import React, { useState } from 'react';

export const HowItWorksAccounting = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  const steps = [
    {
      number: "1",
      title: "Share your firm's details",
      description: "Tell us about your accounting practice, specialties, and the types of clients you serve best.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "We find potential clients",
      description: "Our AI constantly mines data to find businesses that match your ideal client profile.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Smart outreach begins",
      description: "We initiate personalized communications with potential clients through email.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Direct client introductions",
      description: "When a prospect shows interest, we introduce them directly to you via email.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#f8fbff,_#f2fff7_80%)]">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Section heading */}
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-black text-center">
              How It Works
            </h2>
            <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
            <p className="text-lg sm:text-xl text-[#3E3232] tracking-tight mt-6 mx-auto max-w-[900px] text-center">
              Focus on serving your clients while we handle the prospecting. No complicated software to learn—just new client introductions directly to your email.
            </p>
          </div>
          
          {/* Interactive step indicator */}
          <div className="max-w-5xl mx-auto relative mb-16">
            {/* Progress line */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-gray-200 z-0">
              <div className="h-full bg-gradient-to-r from-[#22C55E] to-[#10B981] rounded-full" 
                   style={{ 
                      width: activeStep !== null 
                        ? activeStep < 3 
                          ? `${(activeStep) * 33.33 + 16.665}%`
                          : '100%'
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
                                   ${activeStep === index ? 'bg-gradient-to-r from-[#22C55E] to-[#10B981] text-white' : 'bg-gray-50 text-gray-500'}`}>
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
          
          {/* Steps cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group h-full"
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className={`
                  relative bg-gradient-to-r p-0.5 rounded-xl h-full
                  from-[#22C55E] to-[#10B981] shadow-sm transition-all duration-300
                  ${activeStep === index ? 'scale-[1.02] shadow-lg' : ''}
                `}>
                  <div className="bg-white rounded-[10px] p-6 h-full flex flex-col relative overflow-hidden">
                    {/* Number badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center
                        bg-gradient-to-r from-[#22C55E] to-[#10B981] shadow-md
                      `}>
                        <span className="font-mono text-lg font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className={`
                      w-12 h-12 rounded-full mb-4 flex items-center justify-center
                      bg-[#EEFDF5] text-[#22C55E] transition-transform duration-300
                      ${activeStep === index ? 'scale-110' : ''}
                    `}>
                      {step.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#111827] mb-2">{step.title}</h3>
                      <p className="text-[#3E3232]">{step.description}</p>
                    </div>
                    
                    {/* Animated bar */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div 
                        className={`
                          h-1 bg-gradient-to-r from-[#22C55E] to-[#10B981] rounded-full
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

          {/* Integration metrics card */}
          <div className="mt-16 max-w-5xl mx-auto rounded-xl overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-[#22C55E]/10 to-[#10B981]/10 p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    No disruption to your workflow
                  </h3>
                  <p className="text-[#3E3232] text-lg max-w-xl">
                    Effortless integration through your existing email. No new logins, no software to learn, no installation required.
                  </p>
                </div>
                
                <div className="flex gap-10 md:gap-16">
                  {/* Stats boxes */}
                  <div className="text-center relative group cursor-pointer">
                    <div className="text-4xl font-bold mb-1 relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#10B981] transition-all duration-300 group-hover:scale-110 inline-block">24h</span>
                    </div>
                    <p className="text-[#3E3232]">Setup time</p>
                  </div>
                  <div className="text-center relative group cursor-pointer">
                    <div className="text-4xl font-bold mb-1 relative inline-block">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22C55E] to-[#10B981] transition-all duration-300 group-hover:scale-110 inline-block">12x</span>
                    </div>
                    <p className="text-[#3E3232]">Conversion increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Value proposition callout */}
          <div className="mt-20 max-w-5xl mx-auto bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Focus on what you do best
                </h3>
                <p className="text-gray-700 mb-4">
                  Your expertise is in accounting and financial advisory, not in lead generation and marketing. Let us handle the client acquisition process so you can focus on providing exceptional service.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No monthly retainer fees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Pay only for qualified introductions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Scale up or down based on your capacity</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Average ROI</h4>
                    <p className="text-gray-700">£5 in revenue for every £1 spent</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Time Savings</h4>
                    <p className="text-gray-700">5-10 hours per week on business development</p>
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