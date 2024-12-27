'use client';
import React, { useEffect, useState } from 'react';
import Zilch from '@/assets/Zilch-web.png';
import Thirdfort from '@/assets/Thirdford-web.png';
import Payhawk from '@/assets/Payhawk-web.png';
import Clearbank from '@/assets/clearbank-web.png';
import Achillies from '@/assets/Achillies-web.png';
import Tatum from '@/assets/Tatum-web.png';
import Immersive from '@/assets/Immersive-web.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <motion.div
            className="flex gap-4 sm:gap-8 md:gap-14 items-center justify-between flex-nowrap"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 25, // Adjust based on required speed
              repeat: Infinity,
              ease: 'linear',
              repeatType: "loop"
            }}
          >
            {/* Render logos twice for seamless looping */}
            {logos.concat(logos).map((logo, index) => (
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
