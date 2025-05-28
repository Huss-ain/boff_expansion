"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import { useRef } from 'react';

export const HeroPharma = () => {
  const heroRef = useRef(null);
  
  return (
    <section ref={heroRef} className='pt-8 pb-2 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#B5E8F7,_#FFE0E0_80%)] overflow-x-clip'>
      <div className="w-full flex justify-center">
        <div className='text-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 pt-12 pb-12 md:pt-20 md:pb-20'>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold tracking-tighter text-shine mt-6 leading-tight w-full">
            Cut patient recruitment time with active clinical outreach
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#3E3232] tracking-tight mt-6 md:mt-8 mx-auto max-w-[900px]">
            Patient recruitment outreach to physicians, consultants, PIs, community groups, and hospitals to accelerate your clinical trial recruitment while maintaining the highest professional standards.
          </p>
          <div className="flex flex-wrap gap-4 items-center mt-8 md:mt-10 justify-center">
            <a href="https://calendly.com/hussain-softbase/30min" target='_blank' rel="noopener noreferrer">
              <button className="btn btn-primary text-base md:text-lg">Book a consultation</button>
            </a>
            <a href="#recruitment-showcase">
              <button className="btn btn-text gap-1 text-base md:text-lg">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5"/>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Add the shining animation CSS - using the same colors as the main Hero */}
      <style jsx>{`
        .text-shine {
          background-image: linear-gradient(
            to right,
            #3c2a06,
            #422301 20%,
            #3c2a06 40%,
            #a0a0a0 48%,
            #c0c0c0 50%,
            #a0a0a0 52%,
            #3c2a06 60%,
            #422301 80%,
            #3c2a06
          );
          background-size: 300% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: text-shine 6s linear infinite;
        }

        @keyframes text-shine {
          0%, 100% {
            background-position: 100% center;
          }
          90%, 99.9% {
            background-position: 0% center;
          }
        }
      `}</style>
    </section>
  );
};