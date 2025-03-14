"use client";
import React, { useState } from 'react';

export const SaveMillions = () => {
  const [budget, setBudget] = useState<string>('');
  const [calculatedSavings, setCalculatedSavings] = useState<string>('');
  const [activePhase, setActivePhase] = useState<string>('phase3');

  const handleCalculate = () => {
    const budgetValue = parseFloat(budget.replace(/,/g, ''));
    if (isNaN(budgetValue)) return;
    
    // Assuming 25% savings on the total budget, as mentioned in the content
    const savings = budgetValue * 0.25;
    setCalculatedSavings(savings.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }));
  };

  const selectPhase = (phase: string) => {
    setActivePhase(phase);
    setCalculatedSavings('');
    setBudget('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-[800px] mx-auto mb-12">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-[42px] md:leading-[48px] font-bold tracking-tighter text-center">
              Industry Standard vs. Boff AI
            </h2>
            <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
          </div>
          <p className="text-xl text-center text-black font-normal">
            Why settle for slow? Here's how traditional recruitment compares with Boff AI.
          </p>
        </div>
        
        {/* Comparison Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Recruitment Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Traditional Recruitment</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Time to Recruit:</p>
                    <p className="text-gray-700">6-12 months (Phase III)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-red-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Cost per Patient:</p>
                    <p className="text-gray-700">$10,000+</p>
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
                    <p className="text-gray-700">Relies on manual outreach, heavy labor costs, and unpredictable delays</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Boff AI Card */}
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Boff AI Recruitment</h3>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Time to Recruit:</p>
                    <p className="text-gray-700">3-6 months (Phase III)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Cost Savings:</p>
                    <p className="text-gray-700">Reduced labor and operational expenses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-blue-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Process:</p>
                    <p className="text-gray-700">AI-driven, scalable outreach with human oversight—faster and more efficient</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator - Enhanced with modern design */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:shadow-xl">
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-6 py-5 relative">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-36 h-36 bg-purple-500 rounded-full opacity-10"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white relative z-10 flex items-center">
                <svg className="w-8 h-8 mr-3 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                ROI Calculator: Estimate Your Savings
              </h3>
            </div>
            
            <div className="p-6 md:p-8">
              <p className="text-gray-700 mb-8 text-lg">
                Discover how much Boff AI can save on your trial's recruitment costs. Choose a trial phase or input your own budget for a custom estimate.
              </p>
              
              {/* Phase Selection - Enhanced cards */}
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-sm font-bold">1</span>
                Select Your Trial Phase:
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Phase I - Enhanced card */}
                <div 
                  className={`rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                    activePhase === 'phase1' 
                      ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-md' 
                      : 'bg-white border border-gray-200 hover:border-blue-200'
                  }`}
                  onClick={() => selectPhase('phase1')}
                >
                  <div className="p-5">
                    <h5 className="font-bold text-gray-900 flex items-center text-lg">
                      <span className={`w-6 h-6 mr-2 rounded-full flex items-center justify-center ${
                        activePhase === 'phase1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {activePhase === 'phase1' ? '✓' : 'I'}
                      </span>
                      Phase I
                    </h5>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Patients:</span>
                        <span className="font-medium bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">50</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">$300,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 bg-gradient-to-r from-teal-50 to-blue-50 p-4 border-t border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Potential Savings:</span>
                      <span className="text-lg font-bold text-green-600">$75,000</span>
                    </div>
                  </div>
                </div>
                
                {/* Phase II - Enhanced card */}
                <div 
                  className={`rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                    activePhase === 'phase2' 
                      ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-md' 
                      : 'bg-white border border-gray-200 hover:border-blue-200'
                  }`}
                  onClick={() => selectPhase('phase2')}
                >
                  <div className="p-5">
                    <h5 className="font-bold text-gray-900 flex items-center text-lg">
                      <span className={`w-6 h-6 mr-2 rounded-full flex items-center justify-center ${
                        activePhase === 'phase2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {activePhase === 'phase2' ? '✓' : 'II'}
                      </span>
                      Phase II
                    </h5>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Patients:</span>
                        <span className="font-medium bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">200</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">$2,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 bg-gradient-to-r from-teal-50 to-blue-50 p-4 border-t border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Potential Savings:</span>
                      <span className="text-lg font-bold text-green-600">$500,000</span>
                    </div>
                  </div>
                </div>
                
                {/* Phase III - Enhanced card */}
                <div 
                  className={`rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-102 ${
                    activePhase === 'phase3' 
                      ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-md' 
                      : 'bg-white border border-gray-200 hover:border-blue-200'
                  }`}
                  onClick={() => selectPhase('phase3')}
                >
                  <div className="p-5">
                    <h5 className="font-bold text-gray-900 flex items-center text-lg">
                      <span className={`w-6 h-6 mr-2 rounded-full flex items-center justify-center ${
                        activePhase === 'phase3' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {activePhase === 'phase3' ? '✓' : 'III'}
                      </span>
                      Phase III
                    </h5>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Patients:</span>
                        <span className="font-medium bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">1,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Budget:</span>
                        <span className="font-medium bg-gray-100 px-2.5 py-0.5 rounded-full text-gray-700">$10,000,000</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 bg-gradient-to-r from-teal-50 to-blue-50 p-4 border-t border-blue-100">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Potential Savings:</span>
                      <span className="text-lg font-bold text-green-600">$2,500,000</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Custom Calculator - Enhanced design */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-5 flex items-center">
                  <span className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-2 text-sm font-bold">2</span>
                  Or Calculate Your Own Savings:
                </h4>
                
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-inner">
                  <div className="flex flex-col md:flex-row md:items-end gap-4 mb-4">
                    <div className="flex-grow">
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Your Recruitment Budget</label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <span className="text-gray-500 text-xl font-medium">$</span>
                        </div>
                        <input 
                          type="text" 
                          id="budget" 
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-4 py-3 border-gray-300 rounded-lg text-lg" 
                          placeholder="e.g., 5,000,000"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <button 
                      onClick={handleCalculate}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 
                               text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg 
                               transition-all transform hover:scale-105 flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Calculate Savings
                    </button>
                  </div>
                  
                  {calculatedSavings && (
                    <div className="mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5 rounded-xl shadow-lg animate-fade-in-up relative overflow-hidden">
                      <div className="absolute top-0 right-0 -mt-4 -mr-8 w-24 h-24 bg-white rounded-full opacity-10"></div>
                      <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-20 h-20 bg-white rounded-full opacity-10"></div>
                      
                      <div className="flex items-center justify-between relative z-10">
                        <div>
                          <h3 className="text-sm font-medium text-green-100 mb-1">Your Estimated Savings</h3>
                          <div className="text-3xl md:text-4xl font-bold">
                            {calculatedSavings}
                          </div>
                        </div>
                        <div className="hidden md:flex h-16 w-16 bg-white bg-opacity-20 rounded-full items-center justify-center">
                          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* How It Works - Enhanced with visual elements */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-4">
                  <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  How It Works
                </h4>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                  <p className="text-gray-700 mb-4">
                    Boff AI cuts recruitment time by up to 50%, reducing time-dependent costs like staffing and site fees. 
                    We assume 50% of your recruitment budget is time-dependent, so halving that portion typically saves 25% of the total recruitment cost.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-900">$10 million budget</span>
                        <span className="block text-green-600 font-bold">saves $2.5 million</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-200 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-gray-900">$2 million budget</span>
                        <span className="block text-green-600 font-bold">saves $500,000</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-500 italic">
                    Note: Actual savings may vary depending on your trial's specifics.
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