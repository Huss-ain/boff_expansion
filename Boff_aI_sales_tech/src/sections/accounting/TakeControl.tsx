"use client";
import React, { useState } from 'react';

export const TakeControl = () => {
  const [marketingBudget, setMarketingBudget] = useState<string>('');
  const [calculatedSavings, setCalculatedSavings] = useState<string>('');
  const [showComparison, setShowComparison] = useState<boolean>(false);

  const handleCalculate = () => {
    const budgetValue = parseFloat(marketingBudget.replace(/,/g, ''));
    if (isNaN(budgetValue)) return;
    
    // Calculate savings based on the 95% waste in traditional marketing
    const savings = budgetValue * 0.85; // 85% more efficient
    setCalculatedSavings(savings.toLocaleString('en-US', {
      style: 'currency',
      currency: 'GBP',
      maximumFractionDigits: 0
    }));
    setShowComparison(true);
  };

  return (
    <section id="take-control" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto mb-12">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-[42px] md:leading-[48px] font-bold tracking-tighter text-center">
              Take Control of Your Client Acquisition
            </h2>
            <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></div>
          </div>
          <p className="text-xl text-center text-black font-normal">
            Stop wasting money on ineffective marketing. Start building relationships with clients who need your services.
          </p>
        </div>
        
        {/* Comparison Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Marketing Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Marketing</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Average Conversion Rate:</p>
                    <p className="text-gray-700">Less than 2% on Google Ads</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Average Cost:</p>
                    <p className="text-gray-700">£900/month with £19 of every £20 wasted</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Process:</p>
                    <p className="text-gray-700">Passive waiting for leads to come to you</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Control:</p>
                    <p className="text-gray-700">Unpredictable flow of inquiries, many unqualified</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Boff AI Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Boff AI Approach</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-green-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Average Conversion Rate:</p>
                    <p className="text-gray-700">12-15% on targeted introductions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-green-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Average Cost:</p>
                    <p className="text-gray-700">Pay only for qualified introductions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-green-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Process:</p>
                    <p className="text-gray-700">Proactive outreach to ideal clients who need your services</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-green-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Control:</p>
                    <p className="text-gray-700">Scalable system - increase or decrease lead flow as needed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Marketing Budget Calculator */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
              <h3 className="text-2xl font-bold">Calculate Your Marketing Savings</h3>
              <p className="mt-2 text-green-50">See how much you could save by switching to targeted outreach</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="marketingBudget" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Current Monthly Marketing Budget
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 sm:text-sm">£</span>
                      </div>
                      <input
                        type="text"
                        name="marketingBudget"
                        id="marketingBudget"
                        className="block w-full rounded-md border-gray-300 pl-8 pr-12 focus:border-green-500 focus:ring-green-500 sm:text-sm py-3"
                        placeholder="900"
                        value={marketingBudget}
                        onChange={(e) => setMarketingBudget(e.target.value)}
                      />
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-500 sm:text-sm">/month</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleCalculate}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                             text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg 
                             transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Calculate Savings
                  </button>
                </div>
                
                <div>
                  {calculatedSavings && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5 rounded-xl shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 -mt-4 -mr-8 w-24 h-24 bg-white rounded-full opacity-10"></div>
                      <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-20 h-20 bg-white rounded-full opacity-10"></div>
                      
                      <div className="relative z-10">
                        <h3 className="text-sm font-medium text-green-100 mb-1">Potential Annual Savings</h3>
                        <div className="text-3xl md:text-4xl font-bold">
                          {calculatedSavings}
                        </div>
                        <p className="mt-2 text-green-100 text-sm">
                          By eliminating wasted ad spend and focusing on targeted outreach
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {showComparison && (
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Where Your Money Goes</h4>
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">Traditional Marketing</span>
                            <span className="text-gray-700">5% effective spend</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '5%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700">Targeted Outreach</span>
                            <span className="text-gray-700">90% effective spend</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 