'use client';
import React from 'react';
import Image from 'next/image';

// We would need to add these logos to the assets folder
export const PharmaTicker = () => {
  // These would be placeholder paths - you'll need to add actual pharma company logos
  const logos = [
    { src: '/pharma-logos/pfizer.png', alt: 'Pfizer Logo', className: 'h-6 sm:h-8 md:h-10' },
    { src: '/pharma-logos/novartis.png', alt: 'Novartis', className: 'h-5 sm:h-6 md:h-8' },
    { src: '/pharma-logos/roche.png', alt: 'Roche', className: 'h-8 sm:h-12 md:h-16' },
    { src: '/pharma-logos/merck.png', alt: 'Merck', className: 'h-8 sm:h-12 md:h-16' },
    { src: '/pharma-logos/gsk.png', alt: 'GSK', className: 'h-8 sm:h-12 md:h-16' },
    { src: '/pharma-logos/astrazeneca.png', alt: 'AstraZeneca', className: 'h-8 sm:h-12 md:h-16' },
    { src: '/pharma-logos/bms.png', alt: 'Bristol Myers Squibb', className: 'h-5 sm:h-6 md:h-8' },
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
                  width={200}
                  height={80}
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
                  width={200}
                  height={80}
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