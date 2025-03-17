"use client";
import React, { useState, useRef, useEffect } from 'react';

export const AccountingCTA = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);
  
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  // Intersection Observer for fade-in animation
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const faqs = [
    {
      question: "How much does Boff AI cost?",
      answer: "We charge on a monthly basis, with pricing tailored to the size of your accounting practice. Our flexible pricing ensures practices of all sizes can benefit from our AI-powered client acquisition service. We'll provide a custom quote based on your specific requirements during your consultation."
    },
    {
      question: "What information do I need to provide to get started?",
      answer: "Getting started is incredibly simple. All you need to provide is an email address. From there, we'll handle everything else, from setting up your account to configuring our AI to match your ideal client profile and accounting specialties."
    },
    {
      question: "How quickly will I start receiving qualified leads?",
      answer: "You'll begin receiving qualified leads within 7-21 days after onboarding. The exact timeline depends on your location and area of accounting expertise. Some specialties and areas may see results faster than others, but all clients typically see meaningful activity within the first three weeks."
    },
    {
      question: "Do I need any technical knowledge to use Boff AI?",
      answer: "Not at all. We've designed our service to be completely hands-off for you. Once you're set up, our AI handles all the technical aspects of finding and nurturing potential clients. You'll simply receive qualified introductions via email when prospects are ready to engage with your services."
    },
    {
      question: "How is Boff AI different from digital marketing or lead generation services?",
      answer: "Unlike traditional marketing that broadcasts to a wide audience hoping for responses, our AI specifically identifies businesses showing signals they need accounting services. We then build meaningful relationships through precise, personalized outreach. Instead of getting leads who clicked an ad, you receive warm introductions to businesses that have genuinely expressed interest in your specific services."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50" id="faq">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-6xl mx-auto rounded-2xl bg-white shadow-xl p-8 md:p-12 opacity-0 transition-all duration-1000 translate-y-8"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to transform your accounting practice?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a free consultation to discover how Boff AI can help you acquire your ideal accounting clients.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-indigo-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  How it works
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-1 text-indigo-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Book a free consultation</p>
                      <p className="text-gray-600">Schedule a call to discuss your goals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-1 text-indigo-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Quick setup</p>
                      <p className="text-gray-600">Provide just your email to get started</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-1 text-indigo-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">AI and humans combine to secure clients</p>
                      <p className="text-gray-600">Our AI and specialists find and nurtures your ideal clients</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-100 rounded-full p-1 text-indigo-600 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Receive qualified leads</p>
                      <p className="text-gray-600">Start getting leads within 7-21 days*</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-left">
                <a href="https://calendly.com/hussain-softbase/30min" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-xl font-medium shadow-lg transition-colors">
                    Book a free consultation
                  </button>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <button 
                      className="flex justify-between items-center w-full text-left" 
                      onClick={() => toggleFaq(index)}
                    >
                      {/* Increased font size for questions */}
                      <h4 className="font-semibold text-xl text-gray-900">{faq.question}</h4>
                      <span className="ml-4 flex-shrink-0">
                        <svg 
                          className={`w-5 h-5 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    <div 
                      className={`mt-3 overflow-hidden transition-all duration-300 ${
                        activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Added footnote explaining the asterisk */}
          <div className="mt-10 text-sm text-gray-500 max-w-4xl mx-auto">
            * Timeline is an estimate based on our experience with a wide range of accounting firms. Actual results may vary depending on your specific location, specialty, and market conditions.
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}; 