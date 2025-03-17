"use client";
import React, { useEffect, useRef, useState } from 'react';

// Define an interface for the cell highlight objects
interface CellHighlight {
  col: number;
  row: number;
  duration: number;
}

export const OutreachShowcase = () => {
  // Generate deterministic data points for visualization
  const generateDataPoints = (count: number) => {
    return Array.from({ length: count }).map((_, i) => {
      // Use modulo and index-based calculations for deterministic values
      const x = 40 + ((i * 37) % 320); 
      const y = 40 + ((i * 23) % 320); 
      const size = 3 + (i % 4);
      const delay = (i % 3).toFixed(1);
      const isHighlighted = i % 5 === 0;
      
      return { id: `point-${i}`, x, y, size, delay, isHighlighted };
    });
  };

  const dataPoints = generateDataPoints(20);
  
  // Add state for occasional cell highlights in the Excel grid - fix type
  const [highlightedCells, setHighlightedCells] = useState<CellHighlight[]>([]);
  
  // Occasionally highlight random cells in the grid
  useEffect(() => {
    // Generate some random cell positions to highlight
    const generateRandomHighlights = () => {
      const newHighlights: CellHighlight[] = [];
      const count = Math.floor(Math.random() * 5) + 3; // 3-7 highlights
      
      for (let i = 0; i < count; i++) {
        newHighlights.push({
          col: Math.floor(Math.random() * 12), // Fewer columns now
          row: Math.floor(Math.random() * 60), // More rows
          duration: Math.floor(Math.random() * 4) + 2, // 2-5 seconds
        });
      }
      
      setHighlightedCells(newHighlights);
    };
    
    // Initial highlights
    generateRandomHighlights();
    
    // Change highlights every 3-7 seconds
    const interval = setInterval(() => {
      generateRandomHighlights();
    }, Math.floor(Math.random() * 4000) + 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Refs for scroll animations
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const comparisonRef = useRef(null);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (comparisonRef.current) observer.observe(comparisonRef.current);
    
    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (comparisonRef.current) observer.unobserve(comparisonRef.current);
    };
  }, []);

  return (
    <section id="outreach-showcase" className="pt-0 pb-24 bg-gradient-to-b from-[#F0F4FF] to-[#FAFBFF] relative overflow-hidden">
      {/* Excel-like grid background - adjusted for more visibility and horizontal rectangles */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        {/* Vertical grid lines - fewer and more widely spaced */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute top-0 bottom-0 w-[2px] bg-indigo-200"
              style={{ left: `${(i + 1) * 8.33}%` }} // 12 columns (100/12 = 8.33%)
            />
          ))}
        </div>
        
        {/* Horizontal grid lines - more and closer together */}
        <div className="absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute left-0 right-0 h-[2px] bg-indigo-200"
              style={{ top: `${(i + 1) * 1.667}%` }} // 60 rows (100/60 = 1.667%)
            />
          ))}
        </div>
        
        {/* Highlighted cells - adjusted for new grid dimensions */}
        {highlightedCells.map((cell, index) => (
          <div 
            key={`highlight-${index}`}
            className="absolute bg-indigo-100 opacity-60 transition-opacity"
            style={{ 
              left: `${cell.col * 8.33}%`, 
              top: `${cell.row * 1.667}%`,
              width: '8.33%',
              height: '1.667%',
              animationName: 'cellHighlight',
              animationDuration: `${cell.duration}s`,
              animationFillMode: 'both'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Updated Introduction Header with the line but normal text color */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-[42px] md:leading-[48px] font-bold tracking-tighter text-gray-900">
            Sell your accounting services effortlessly
          </h2>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-full"></div>
          <p className="text-xl text-gray-700 mt-5 text-center max-w-4xl">
            Our three-step process transforms how accounting firms find and connect with new clients
          </p>
        </div>
        
        {/* Timeline indicators */}
        <div className="max-w-4xl mx-auto relative mb-12 px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
        </div>
        
        {/* Step 1: AI Data Mining */}
        <div ref={section1Ref} className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 opacity-0 transition-all duration-1000 translate-y-8">
          {/* Content for Step 1 */}
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">1</span>
                Intelligent Prospecting
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                Our AI scans through thousands of businesses and freelancers daily, identifying companies 
                that match your ideal client profile based on real-time signals.
              </p>
              <div className="bg-indigo-50 p-5 rounded-xl border-l-4 border-indigo-500">
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-indigo-900 font-medium">
                    Identifies businesses showing signs they need accounting services
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center pt-4">
              <div className="relative w-full max-w-md aspect-square">
                {/* Data Mining Visualization with deterministic points */}
                <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Background Grid */}
                  <g stroke="#e5e7eb" strokeWidth="1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line key={`h-${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                      <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />
                    ))}
                  </g>
                  
                  {/* Central Scanner */}
                  <circle cx="200" cy="200" r="80" fill="url(#gradientFlow1)" opacity="0.2" />
                  <circle cx="200" cy="200" r="60" fill="url(#gradientFlow2)" opacity="0.3" />
                  <circle cx="200" cy="200" r="40" fill="url(#gradientFlow3)" opacity="0.4" />
                  
                  {/* Scanner Pulse Animation */}
                  <circle cx="200" cy="200" r="100" fill="none" stroke="#4f46e5" strokeWidth="4" opacity="0.6">
                    <animate attributeName="r" from="20" to="180" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Data Points - using deterministic values */}
                  {dataPoints.map(point => (
                    <g key={point.id}>
                      <circle 
                        cx={point.x} 
                        cy={point.y} 
                        r={point.size} 
                        fill={point.isHighlighted ? "#10b981" : "#6366f1"} 
                        opacity="0.7"
                      >
                        <animate 
                          attributeName="opacity" 
                          values="0.2;0.8;0.2" 
                          dur="3s" 
                          begin={`${point.delay}s`}
                          repeatCount="indefinite" 
                        />
                      </circle>
                      {point.isHighlighted && (
                        <circle 
                          cx={point.x} 
                          cy={point.y} 
                          r={point.size * 2} 
                          fill="none" 
                          stroke="#10b981" 
                          strokeWidth="2" 
                          filter="url(#glow)"
                        >
                          <animate 
                            attributeName="r" 
                            values={`${point.size};${point.size * 3};${point.size}`} 
                            dur="3s" 
                            begin={`${point.delay}s`}
                            repeatCount="indefinite" 
                          />
                          <animate 
                            attributeName="opacity" 
                            values="0.6;0;0.6" 
                            dur="3s" 
                            begin={`${point.delay}s`}
                            repeatCount="indefinite" 
                          />
                        </circle>
                      )}
                    </g>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline connector */}
        <div className="max-w-4xl mx-auto relative mb-12 px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
        </div>
        
        {/* Step 2: Smart Engagement */}
        <div ref={section2Ref} className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 opacity-0 transition-all duration-1000 translate-y-8">
          {/* Content for Step 2 */}
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">2</span>
                Smart Engagement
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                Our AI and human outreach builds relationships with potential clients, understanding their needs and 
                positioning your firm as the ideal solution when they're ready.
              </p>
              <div className="bg-purple-50 p-5 rounded-xl border-l-4 border-purple-500">
                <div className="flex items-start">
                  <div className="text-purple-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-purple-900 font-medium">
                    Conversations feel natural and human, building trust over time
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Chat Visualization */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-xl p-4 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold text-lg">AI</div>
                  <div className="ml-3 text-white">
                    <div className="font-medium">Boff AI Assistant</div>
                    <div className="text-xs opacity-80">Online now</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-b-xl shadow-md max-h-[400px] overflow-y-auto space-y-6">
                  <div className="chat-messages space-y-4">
                    <div className="message-left">
                      <div className="flex items-center mb-1">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">AI</div>
                        <span className="text-sm text-gray-500 ml-2">Boff AI</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-sm">
                        <p className="text-lg text-gray-800">
                          It's mind-blowing that the dental diagnostic tool can predict bone loss at that accuracy on a radiograph - as far as I've read it's never been anywhere near this level. Look's like it meets the criteria for R&D Tax Credits, have you applied?
                        </p>
                      </div>
                    </div>
                    
                    <div className="message-right">
                      <div className="bg-indigo-100 p-4 rounded-2xl rounded-tr-none shadow-sm max-w-sm ml-auto">
                        <p className="text-lg text-gray-800">
                          Thank you, I'm more surprised you know what that it is than anything else! Very niche field. No, what is it?
                        </p>
                      </div>
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-sm text-gray-500 mr-2">Kostas</span>
                        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm">K</div>
                      </div>
                    </div>
                    
                    <div className="message-left">
                      <div className="flex items-center mb-1">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">AI</div>
                        <span className="text-sm text-gray-500 ml-2">Boff AI</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-sm">
                        <p className="text-lg text-gray-800">
                          It's a government incentive to keep innovation like this going that you can apply for with your end of year accounts, but does need a specilaist accountant who knows their stuff otherwise could just get rejected. You either get a sizeable tax discount or cash back?
                        </p>
                      </div>
                    </div>
                    
                    <div className="message-right">
                      <div className="bg-indigo-100 p-4 rounded-2xl rounded-tr-none shadow-sm max-w-sm ml-auto">
                        <p className="text-lg text-gray-800">
                          Sounds very interesting. I want more details. Do you do this?
                        </p>
                      </div>
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-sm text-gray-500 mr-2">Kostas</span>
                        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm">K</div>
                      </div>
                    </div>
                    
                    <div className="message-left">
                      <div className="flex items-center mb-1">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-sm">AI</div>
                        <span className="text-sm text-gray-500 ml-2">Boff AI</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-sm">
                        <p className="text-lg text-gray-800">
                          Let me connect you to Jeff, he's a specilaist and is around 10 minutes from your offices I think. Are you at based in the Stratford East building?
                        </p>
                      </div>
                    </div>
                    
                    <div className="message-right">
                      <div className="bg-indigo-100 p-4 rounded-2xl rounded-tr-none shadow-sm max-w-sm ml-auto">
                        <p className="text-lg text-gray-800">
                          We are, I'm not there full time. But if he's local to there would be really useful.
                        </p>
                      </div>
                      <div className="flex items-center justify-end mt-2">
                        <span className="text-sm text-gray-500 mr-2">Kostas</span>
                        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold text-sm">K</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline connector */}
        <div className="max-w-4xl mx-auto relative mb-12 px-4">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-200 transform -translate-x-1/2"></div>
        </div>
        
        {/* Step 3: Warm Introduction */}
        <div ref={section3Ref} className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 opacity-0 transition-all duration-1000 translate-y-8">
          {/* Content for Step 3 */}
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">3</span>
                Seamless Introductions
              </h3>
              <p className="text-xl text-gray-700 mb-8">
                When a potential client is ready, we make a direct introduction via email. 
                They're already familiar with your services and eager to connect.
              </p>
              <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="text-green-600 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-green-900 font-medium">
                    15% conversion rate from introduction to paying client
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center pt-4">
              <div className="relative w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
                {/* Email Introduction Visualization */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-12 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-white font-medium ml-4">New Message</div>
                </div>
                <div className="p-6">
                  <div className="border-b border-gray-200 pb-4 mb-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>From: Alex at Boff AI</span>
                      <span>11:42 AM</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mb-3">
                      <span>To: Jeff</span>
                      <span>CC: Kostas</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Introduction: Kostas from D2 Dental Imaging
                    </h4>
                  </div>
                  <div className="text-gray-700 space-y-4">
                    <p className="text-lg">Hey Jeff,</p>
                    <p className="text-lg">
                      Introudcing you to Kostas who is pushing the boundaries in dental imaging in his startup D2. He's made a number of breakthroughs that have significantly imporved the accuracy of detecting issues like cavities and bone loss. I thought it may be a good fit for RD assessments and perhaps a full application.
                    </p>
                    <p className="text-lg">Cheers,<br/>Alex</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/3">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Comparison section */}
        <div ref={comparisonRef} className="opacity-0 transition-all duration-1000 translate-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* Changed from "Traditional Marketing" to "Accounting Ads" */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl flex flex-col">
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 border-b border-red-100">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                  <span className="bg-red-100 text-red-700 w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  Accounting Ads
                </h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-5 flex-grow">
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-red-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Wastes £19 out of every £20 spent on online ads</p>
                  </li>
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-red-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Only 1-2% conversion rate even in best-case scenarios</p>
                  </li>
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-red-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Typical budgets of £1,000+ per month with poor ROI</p>
                  </li>
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-red-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">No time for meaningful relationship building</p>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-red-100 rounded-xl h-[160px] flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-lg text-red-700 font-medium mb-2">OUTCOME</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">High Cost, Low Return</div>
                    <div className="text-xl text-gray-700">Spending more for fewer quality clients</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Boff AI */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl flex flex-col">
              <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 border-b border-indigo-100">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                  <span className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Boff AI
                </h3>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <ul className="space-y-5 flex-grow">
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-indigo-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Highly targeted and refined to your specific accounting services</p>
                  </li>
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-indigo-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Discovers hidden local SMBs, freelancers, and sole traders</p>
                  </li>
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-indigo-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Highly personalized to each client, building genuine relationships</p>
                  </li>
                  <li className="flex items-start min-h-[80px]">
                    <div className="mr-3 mt-1 text-indigo-500 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-xl text-gray-700">Active all year round with 5x more genuine leads</p>
                  </li>
                </ul>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl h-[160px] flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-lg text-indigo-700 font-medium mb-2">OUTCOME</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">30% Higher Conversion</div>
                    <div className="text-xl text-gray-700">Quality clients that match your expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Metrics section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5x</div>
              <div className="text-xl text-gray-700">More genuine leads</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">30%</div>
              <div className="text-xl text-gray-700">Higher conversion rate</div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">365</div>
              <div className="text-xl text-gray-700">Days of active outreach</div>
            </div>
          </div>
        </div>
        
        {/* Call To Action */}
        <div className="max-w-4xl mx-auto text-center mt-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to transform your client acquisition?
          </h3>
          <div className="flex justify-center gap-4">
            <a href="https://calendly.com/hussain-softbase/30min" target="_blank" rel="noopener noreferrer">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-xl font-medium shadow-lg transition-colors">
                Book a free consultation
              </button>
            </a>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes cellHighlight {
          0% { opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}; 