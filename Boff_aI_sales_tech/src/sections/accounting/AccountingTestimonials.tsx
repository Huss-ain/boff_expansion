'use client';
import React, { useEffect, useRef } from 'react';

// Testimonial interface with position and firm size
interface Testimonial {
  quote: string;
  position: string;
  firmSize: string;
}

export const AccountingTestimonials = () => {
  // References for scroll animations
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Reset testimonial refs array when testimonials change
  useEffect(() => {
    testimonialRefs.current = testimonialRefs.current.slice(0, 3);
  }, []);
  
  // Add intersection observer for fade-in animations
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    testimonialRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      quote: "Boff AI has transformed our client acquisition process. We've seen a 185% increase in qualified leads, all while spending less than we did on Google Ads.",
      position: "Managing Partner",
      firmSize: "Small Accounting Firm"
    },
    {
      quote: "As a sole practitioner, I struggled to find time for marketing. Now Boff AI handles client acquisition while I focus on providing quality service to my existing clients.",
      position: "Sole Practitioner",
      firmSize: "Independent Accountant"
    },
    {
      quote: "The quality of introductions has been exceptional. These are businesses that genuinely need our services, and the conversion rate is significantly higher than any marketing we've done before.",
      position: "Director of Business Development",
      firmSize: "Mid-size Accounting Practice"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#f5f7ff] to-[#eef6ff]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100 to-transparent rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-1/2 left-1/3 w-1/4 h-1/4 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={sectionRef} 
          className="max-w-3xl mx-auto text-center mb-16 opacity-0 transition-all duration-1000 translate-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What our accounting clients say
          </h2>
          <p className="text-xl text-gray-600">
            Hear directly from accounting professionals who have transformed their client acquisition with Boff AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              ref={(el: HTMLDivElement | null): void => {
                testimonialRefs.current[index] = el;
              }}
              key={index} 
              className={`bg-white rounded-2xl p-8 opacity-0 transition-all duration-700 translate-y-8
                        delay-${index * 150} shadow-[0_5px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                        border border-[rgba(255,255,255,0.8)] backdrop-blur-sm relative overflow-hidden`}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 opacity-10">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3333 14.6667C13.3333 12.4578 11.5422 10.6667 9.33333 10.6667C7.12444 10.6667 5.33333 12.4578 5.33333 14.6667C5.33333 16.8756 7.12444 18.6667 9.33333 18.6667C9.36978 18.6667 9.40578 18.664 9.44178 18.6631C9.15156 21.0667 8.05778 21.6489 6.66667 21.7778V24C10.032 23.8329 13.3333 22.0249 13.3333 14.6667ZM26.6667 14.6667C26.6667 12.4578 24.8756 10.6667 22.6667 10.6667C20.4578 10.6667 18.6667 12.4578 18.6667 14.6667C18.6667 16.8756 20.4578 18.6667 22.6667 18.6667C22.7031 18.6667 22.7391 18.664 22.7751 18.6631C22.4849 21.0667 21.3911 21.6489 20 21.7778V24C23.3653 23.8329 26.6667 22.0249 26.6667 14.6667Z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Animated accent line */}
              <div className={`w-12 h-1 rounded-full mb-6 
                             bg-gradient-to-r ${index === 0 ? 'from-indigo-500 to-blue-500' : 
                                               index === 1 ? 'from-purple-500 to-indigo-500' : 
                                                           'from-blue-500 to-indigo-500'}`}>
                <div className="w-0 h-full bg-white animate-pulse"></div>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
              
              <div className="mt-auto">
                <div className="text-gray-900 font-semibold">{testimonial.position}</div>
                <div className="text-gray-500 text-sm">{testimonial.firmSize}</div>
              </div>
              
              {/* Subtle decorative corner */}
              <div className={`absolute bottom-0 right-0 w-16 h-16 opacity-5 transform rotate-45
                              ${index === 0 ? 'bg-indigo-500' : 
                                index === 1 ? 'bg-purple-500' : 
                                            'bg-blue-500'}`}></div>
            </div>
          ))}
        </div>
        
        {/* Additional proof point */}
        <div className="mt-16 max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Proven Results for UK Accounting Firms</h3>
              <p className="text-gray-700">
                Our targeted approach has helped accounting firms across the UK reduce client acquisition costs while increasing the quality of leads. The result? More time focused on your clients, less time worrying about where the next client will come from.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                92%
              </div>
              <p className="text-gray-700 text-center mt-2">
                Client satisfaction rate with our service
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .delay-0 {
          transition-delay: 0ms;
        }
        .delay-150 {
          transition-delay: 150ms;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
      `}</style>
    </section>
  );
}; 