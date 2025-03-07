'use client';
import React from 'react';
import Zilch from '@/assets/Zilch-web.png';
import Thirdfort from '@/assets/Thirdford-web.png';
import Payhawk from '@/assets/Payhawk-web.png';
import Clearbank from '@/assets/clearbank-web.png';
import Achillies from '@/assets/Achillies-web.png';
import Tatum from '@/assets/Tatum-web.png';
import Immersive from '@/assets/Immersive-web.png';
import Image from 'next/image';

export const LogoTicker = () => {
  const logos = [
    { src: Zilch, alt: 'Zilch Logo', className: 'h-6 sm:h-8 md:h-10' },
    { src: Payhawk, alt: 'Payhawk', className: 'h-5 sm:h-6 md:h-8' },
    { src: Clearbank, alt: 'Clearbank', className: 'h-8 sm:h-12 md:h-16' },
    { src: Achillies, alt: 'Achillies', className: 'h-8 sm:h-12 md:h-16' },
    { src: Tatum, alt: 'Tatum', className: 'h-8 sm:h-12 md:h-16' },
    { src: Immersive, alt: 'Immersive', className: 'h-8 sm:h-12 md:h-16' },
    { src: Thirdfort, alt: 'Thirdfort', className: 'h-5 sm:h-6 md:h-8' },
  ];

  return (
    <div className="py-1 md:py-2 bg-white overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]">
          <div className="flex gap-4 sm:gap-8 md:gap-14 items-center justify-between flex-nowrap animate-ticker">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-auto ${logo.className} object-contain`}
                />
              </div>
            ))}
            
            {/* Duplicate logos for seamless scrolling */}
            {logos.map((logo, index) => (
              <div
                key={`logo-dup-${index}`}
                className="flex items-center justify-center min-w-[80px] sm:min-w-[100px] md:min-w-[120px]"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-auto ${logo.className} object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for smooth animation */}
      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-ticker {
          animation: ticker 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
