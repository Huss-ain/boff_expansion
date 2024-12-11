import ArrowIcon from '@/assets/arrow-right.svg';
import Stikan from '@/assets/gold stikaan.png';
import Dates from '@/assets/Dates.png';
import Globe from '@/assets/gold earth.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_70%)] overflow-x-clip'>
      <div className="container">
        <div className='md:flex items-center'>
        <div className='md:w-[478px]'>
          <div className="text-sm inline-flex border border-[#6D2932]/10 px-4 py-1 rounded-lg tracking-tight ml-4 mt-8">Now live</div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-tr from-[#3c2a06] to-[#D8AE7E] text-transparent bg-clip-text ml-4 mt-6">Enter the middle east tech market in days</h1>
          <p className="text-xl text-[#3E3232] tracking-tight mt-6 ml-4">
            Neogulf lets every tech company launch in the middle east market without spending months and millions.
          </p>
          <div className="flex gap-1 items-center mt-[30px] ml-4">
            <button className="btn btn-primary">Book a call</button>
            <button className="btn btn-text gap-1">
              <span>Learn more</span>
              <ArrowIcon className="h-5 w-5"/>
            </button>
          </div>
        </div>
        <div className='mt-16 md:mt-0 h-[648px] md:flex-1 relative'>
          <Image src={Stikan} 
          alt='stikaan with gold in it' 
          className='md:absolute md:h-full md:w-auto md:max-w-none md:-r lg:left-0' 
          />
          <Image src={Dates} 
          width={220} height={220} 
          alt='a single nakhla' 
          className='hidden md:block -top-1 -left-20 md:absolute'
          />
          <Image src={Globe}
          width={220}
          alt='Globe image'
          className='hidden lg:block absolute top-[560px] left-[600px] '
          />
        </div>
        </div>
      </div>
    </section>
  );
};
