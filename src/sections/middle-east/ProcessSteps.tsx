import React from 'react';

export const ProcessSteps = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f7edf9] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto mb-12">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-[42px] md:leading-[48px] font-bold tracking-tighter bg-gradient-to-r from-[#3c2a06] to-[#422301] text-transparent bg-clip-text">
              Your Market Entry Journey
            </h2>
            <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-xl text-center text-black font-normal">
            Our structured approach combines AI technology with human expertise to accelerate your Middle East expansion while minimizing risk and overhead.
          </p>
        </div>
        
        <div className="max-w-[1000px] mx-auto">
          <div className="relative">
            {/* Timeline connector - FIXED: Added a specific height to stop before the investment section */}
            <div className="absolute left-[24px] md:left-1/2 top-0 h-[calc(100%-180px)] w-1 bg-gradient-to-b from-purple-300 to-blue-300 transform md:-translate-x-1/2 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-start mb-12 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0 pl-14 md:pl-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Planning <span className="text-sm font-normal text-gray-500">(2-3 weeks)</span></h3>
                <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100 inline-block md:text-left">
                  <p className="text-gray-700 text-sm mb-3">
                    We develop a customized market entry strategy based on your specific goals, product, and target markets within the Middle East.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Market opportunity analysis</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Regulatory pathway mapping</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Localization requirements analysis</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-purple-50 rounded-lg text-sm">
                    <p className="font-medium text-purple-800">Deliverables:</p>
                    <p className="text-gray-700">Comprehensive market entry strategy document and regulatory roadmap</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-md text-white font-bold z-10 transform md:-translate-x-1/2 order-1 md:order-2">
                1
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3">
                {/* Empty for alternating pattern */}
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-start mb-12 relative">
              <div className="md:w-1/2 md:pr-12 order-2">
                {/* Empty for alternating pattern */}
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-md text-white font-bold z-10 transform md:-translate-x-1/2 order-1">
                2
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0 pl-14 md:pl-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2"> Technology Deployment <span className="text-sm font-normal text-gray-500">(2 weeks)</span></h3>
                <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100 inline-block text-left">
                  <p className="text-gray-700 text-sm mb-3">
                    We set up and configure our Arabic AI technology stack and integrate with your existing systems while training our human team on your specific offering.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Arabic AI customization for your product</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">CRM/system integration</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Human team briefing and training</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-blue-50 rounded-lg text-sm">
                    <p className="font-medium text-blue-800">Deliverables:</p>
                    <p className="text-gray-700">Fully configured tech stack, integration documentation, and dashboard access</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-start mb-12 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0 pl-14 md:pl-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2"> Initial Market Outreach <span className="text-sm font-normal text-gray-500">(4-8 weeks)</span></h3>
                <div className="bg-white p-4 rounded-xl shadow-md border border-blue-100 inline-block md:text-left">
                  <p className="text-gray-700 text-sm mb-3">
                    We launch culturally-tailored outreach campaigns, leveraging our existing networks to secure meetings with key decision-makers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">AI-powered Arabic outreach</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Relationship-based introductions</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Initial meeting coordination</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-blue-50 rounded-lg text-sm">
                    <p className="font-medium text-blue-800">Expected Outcomes:</p>
                    <p className="text-gray-700">8-12 qualified meetings with decision-makers</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md text-white font-bold z-10 transform md:-translate-x-1/2 order-1 md:order-2">
                3
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3">
                {/* Empty for alternating pattern */}
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-start mb-12 relative">
              <div className="md:w-1/2 md:pr-12 order-2">
                {/* Empty for alternating pattern */}
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-amber-500 flex items-center justify-center shadow-md text-white font-bold z-10 transform md:-translate-x-1/2 order-1">
                4
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3 mt-4 md:mt-0 pl-14 md:pl-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Deal Facilitation <span className="text-sm font-normal text-gray-500">(2-4 months)</span></h3>
                <div className="bg-white p-4 rounded-xl shadow-md border border-amber-100 inline-block text-left">
                  <p className="text-gray-700 text-sm mb-3">
                    We actively support negotiations, manage documentation, navigate regulatory requirements, and help close your first deals in the region.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Contract negotiations support</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Regulatory compliance guidance</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-amber-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Initial implementation support</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-amber-50 rounded-lg text-sm">
                    <p className="font-medium text-amber-800">Expected Outcomes:</p>
                    <p className="text-gray-700">First paying customers within 3-4 months from project start</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-start mb-12 relative">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 mt-4 md:mt-0 pl-14 md:pl-0">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustained Growth <span className="text-sm font-normal text-gray-500">(Ongoing)</span></h3>
                <div className="bg-white p-4 rounded-xl shadow-md border border-green-100 inline-block md:text-left">
                  <p className="text-gray-700 text-sm mb-3">
                    We continue to expand your market presence, establish additional partnerships, and build your reputation across the Middle East region.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Account expansion and management</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Multi-country expansion</span>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">Strategic ecosystem development</span>
                    </div>
                  </div>
                  <div className="mt-3 p-2 bg-green-50 rounded-lg text-sm">
                    <p className="font-medium text-green-800">Long-term Results:</p>
                    <p className="text-gray-700">Average client expansion to 3+ Middle Eastern countries within 18 months</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute left-0 md:left-1/2 top-0 h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-green-500 flex items-center justify-center shadow-md text-white font-bold z-10 transform md:-translate-x-1/2 order-1 md:order-2">
                5
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-3">
                {/* Empty for alternating pattern */}
              </div>
            </div>
            
            {/* Business Value Summary - clearly separated from the timeline */}
            <div className="mt-16 bg-white p-6 rounded-xl shadow-md border border-purple-100 relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Your Investment & Expected Returns</h3>
              <p className="text-center text-gray-700 mb-6">
                Our monthly retainer model eliminates upfront investment in local offices while accelerating your revenue timeline.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-purple-50 to-white p-4 rounded-lg border border-purple-100">
                  <div className="flex justify-center mb-2">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-center text-gray-900 mb-1">Cost Efficiency</h4>
                  <p className="text-sm text-center text-gray-700">
                    <span className="font-bold">75-80% lower cost</span> compared to establishing local office & hiring staff
                  </p>
                </div>
                
                <div className="bg-gradient-to-b from-amber-50 to-white p-4 rounded-lg border border-amber-100">
                  <div className="flex justify-center mb-2">
                    <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-center text-gray-900 mb-1">Time to Revenue</h4>
                  <p className="text-sm text-center text-gray-700">
                    <span className="font-bold">60-90 days</span> to first deal vs. industry average of 12+ months
                  </p>
                </div>
                
                <div className="bg-gradient-to-b from-green-50 to-white p-4 rounded-lg border border-green-100">
                  <div className="flex justify-center mb-2">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-base font-bold text-center text-gray-900 mb-1">ROI Timeline</h4>
                  <p className="text-sm text-center text-gray-700">
                    <span className="font-bold">3-6 month</span> typical break-even on retainer investment
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="https://calendly.com/hussain-softbase/30min" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary inline-flex items-center">
                    Discuss Your Custom Process
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}; 