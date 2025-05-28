'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Updated testimonial interface with position and industry instead of names
interface Testimonial {
  quote: string;
  position: string;
  industry: string;
  image: string;
}

export const PharmaTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      quote: "Boff AI transformed our recruitment strategy. We reached our patient enrollment targets 42% faster than our previous Phase II trial.",
      position: "Clinical Trial Director",
      industry: "Pharma",
      image: "/images/testimonials/testimonial-1.jpg"
    },
    {
      quote: "The personalized outreach to physicians yielded engagement rates we've never seen before. Our study filled in record time with qualified patients.",
      position: "VP of Clinical Operations",
      industry: "Biotech",
      image: "/images/testimonials/testimonial-2.jpg"
    },
    {
      quote: "As a principal investigator, I've seen many recruitment solutions. Boff AI stands out by connecting us with genuinely interested physicians who have eligible patients.",
      position: "Principal Investigator",
      industry: "CRO",
      image: "/images/testimonials/testimonial-3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-cyan-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Decorative elements to tie in with SaveMillions colors */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 opacity-20"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-black text-center">
            What Industry Leaders Say
          </h2>
          <div className="h-1.5 w-40 mt-3 bg-gradient-to-r from-blue-500 to-purple-400 rounded-full"></div>
        </div>
        
        {/* Enhanced testimonial cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-500 hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-blue-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              {/* Testimonial content */}
              <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">"{testimonial.quote}"</p>
              
              {/* Industry tag and position - no personal or company names */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-gray-900">{testimonial.position}</p>
                <span className={`
                  px-3 py-1.5 rounded-full text-sm font-medium
                  ${testimonial.industry === 'Pharma' ? 'bg-blue-100 text-blue-800' : 
                    testimonial.industry === 'Biotech' ? 'bg-green-100 text-green-800' : 
                    'bg-purple-100 text-purple-800'}
                `}>
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};