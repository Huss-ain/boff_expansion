"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import Stikan from '@/assets/gold stikaan.png';
import Dates from '@/assets/Dates.png';
import Globe from '@/assets/gold earth.png';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  useMotionValueEvent(translateY, 'change', (latestValue) => 
    console.log(latestValue)
  );
  return (
    <section ref={heroRef} className='pt-8 pb-2 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_70%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
          <div className='md:w-[600px] lg:ml-[calc(50%-630px+10px)] xl:ml-[calc(50%-600px+10px)'>
            <div className="tag ml-10 mt-8">Now live</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-tr from-[#3c2a06] to-[#D8AE7E] text-transparent bg-clip-text ml-10 mt-10 max-w-[600px]  leading-tight">Start selling your technology in the Middle East in days</h1>
            <p className="text-xl text-[#3E3232] tracking-tight mt-6 ml-10">
              Neogulf lets every tech company launch in the middle east market without spending months and millions.
            </p>
            <div className="flex gap-1 items-center mt-[30px] ml-10">
              <button className="btn btn-primary">Book a call</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowIcon className="h-5 w-5"/>
              </button>
            </div>
          </div>
        <div className='mt-16 md:mt-0 h-[648px] md:flex-1 relative'>
          <motion.img src={Stikan.src} 
          alt='stikaan with gold in it' 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:right-[-300px] lg:right-[50px] xl:right-[50px]'
          animate= {{
            translateY: [-30, 30]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: 'easeInOut'
          }}
          />
          <motion.img src={Dates.src} 
          width={220} height={220} 
          alt='a single nakhla' 
          className='hidden md:block -top-100 -left-20 md:absolute'
          style= {{
            translateY: translateY,
          }}
          />
          <motion.img src={Globe.src}
          width={220}
          alt='Globe image'
          className='hidden lg:block absolute bottom-0 right-[-100px] lg:mb-[-50px] xl:right-[-100px] xl:mb-[-400px]' 
          style= {{
            translateY: translateY,
          }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};
