"use client";
import Productimage from '@/assets/product-image-neogulf.png'
import Dalla from '@/assets/Dalla.png'
import Image from 'next/image';
import { motion } from 'framer-motion';


export const ProductShowcase = () => {
  return (
  <section id="product" className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
    <div className="container mx-auto px-4">
      <div className="mx-w-[740px] mx-auto">
        <div className="flex justify-center">
          <div  className="tag "> Boost your revenue</div>
        </div>
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#D8AE7E] text-transparent bg-clip-text  mt-7"> Direct to the decision makers and power brokers</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight mt-7 max-w-[540px] mx-auto"> 
          We facilitate conversations with officials, executives, leaders and people who are actively looking for world class tech solutions in the region.
        </p>
        <div className="mt-10 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[90%] relative ">
        <Image src={Productimage} 
          alt="product image"
          className='w-full mt-6' 
        />
        <motion.img 
          src={Dalla.src} 
          alt="Dalla gold"
          height={362}
          width={362}
          className='hidden md:block md:h-[180px] md:w-[180px] md:left-16 absolute left-0 md:-bottom-40 lg:h-[292px] lg:w-[292px] lg:left-0 transform -translate-x-48 -translate-y-40 ' 
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
        
        </div>
      </div>
    </div>




  </section>
  );
};
