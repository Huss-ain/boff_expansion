"use client";
import React from 'react';
import Image from 'next/image';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Brief 30-minute call with your dedicated account manager to understand your product, target audience, and sales goals.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "AI Research & Strategy",
      description: "Our AI analyzes your target prospects through multiple dimensions: company context, career trajectory, and individual motivations.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Human-Reviewed Outreach",
      description: "AI drafts personalized, empathetic outreach messages that our human experts review to ensure quality, authenticity, and brand alignment.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Ongoing Engagement",
      description: "We handle all follow-ups and nurture the relationship, using our empathy-based approach to maintain meaningful conversations.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      number: 5,
      title: "Qualified Lead Handoff",
      description: "Once a prospect shows genuine interest, we seamlessly introduce you into the conversation at the perfect moment to close the deal.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      )
    }
  ];

  // Performance metrics
  const metrics = [
    { label: "Average Response Rate", value: "32%", suffix: "", baseline: "vs. industry avg. 3-5%" },
    { label: "Sales Cycle Reduction", value: "40%", suffix: "", baseline: "average across clients" },
    { label: "Meeting Booking Rate", value: "15%", suffix: "", baseline: "vs. industry avg. 1-3%" },
    { label: "Time Saved Per SDR", value: "28", suffix: "hrs/mo", baseline: "on outreach activities" }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-[#f7edf9] to-white">
      <div className="container mx-auto px-4">
        {/* Section heading with styled underline */}
        <div className="flex flex-col items-center mb-14">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-black">
            How It Works
          </h3>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"></div>
        </div>
        
        {/* Larger, black subheading */}
        <div className="max-w-[800px] mx-auto mb-16">
          <p className="text-xl md:text-2xl text-center text-black font-normal">
            We combine artificial intelligence with human expertise to deliver
            empathetic outreach that converts prospects into customers
          </p> 
        </div>

        {/* Process steps */}
        <div className="max-w-[1200px] mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 to-blue-200 hidden sm:block" style={{ transform: 'translateX(-50%)' }}></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col sm:flex-row items-center mb-16 relative ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Step number with icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg z-10 mb-6 sm:mb-0">
                  {step.icon}
                </div>
                
                {/* Step content */}
                <div className={`sm:w-5/12 ${index % 2 !== 0 ? 'sm:pr-16 text-right' : 'sm:pl-16 text-left'} text-center sm:text-left`}>
                  <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-lg text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results & Implementation Details */}
        <div className="mt-24 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Performance Metrics Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-50 to-blue-50 rounded-bl-3xl -z-10"></div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-7 h-7 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Performance Metrics
              </h4>
              
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p className="text-3xl font-bold text-purple-700">{metric.value}<span className="text-lg">{metric.suffix}</span></p>
                    <p className="text-sm text-gray-500 mt-1">{metric.baseline}</p>
                    <p className="font-medium text-gray-900 mt-2">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Implementation Details Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-3xl -z-10"></div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="w-7 h-7 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Implementation Details
              </h4>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Rapid Onboarding:</span> First campaign ready within 7 business days of your initial consultation
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Data Security:</span> SOC 2 compliance, GDPR adherence, and enterprise-grade encryption for all communications
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">CRM Integration:</span> Direct integration with major CRMs available for Enterprise plans; data exports for all plans
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 mt-0.5 mr-3 flex items-center justify-center rounded-full bg-blue-100 text-blue-800">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Dedicated Support:</span> Regular performance reviews with your account manager to optimize campaigns
                  </div>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-medium text-gray-900">Next Onboarding Cohort:</p>
                <div className="flex items-center mt-2">
                  <svg className="w-5 h-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-700">Starting <span className="font-semibold">March/April 2025</span> – Limited spots available</p>
                </div>
                <a href="https://calendly.com/hussain-softbase/30min" className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Reserve Your Spot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 