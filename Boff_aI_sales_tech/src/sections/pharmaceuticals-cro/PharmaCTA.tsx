"use client";
import React from 'react';

export const PharmaCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to accelerate your clinical trial recruitment?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Book a consultation to discuss your specific trial needs and learn how our AI-powered outreach can cut your recruitment time in half.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://calendly.com/hussain-softbase/30min" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-md">
                    Book a free consultation
                  </button>
                </a>
                <a href="#how-it-works">
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium text-lg transition-colors">
                    Learn more about our process
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