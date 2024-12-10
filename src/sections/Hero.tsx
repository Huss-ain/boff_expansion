import ArrowIcon from '@/assets/arrow-right.svg';
import Stikan from '@/assets/gold stikaan.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className='pt-8 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_66%)]'>
      <div className="container">
        <div className='md:flex'>
        <div>
          <div className="text-sm inline-flex border border-[#6D2932]/10 px-4 py-1 rounded-lg tracking-tight ml-4 mt-8">Now live</div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-tr from-[#3c2a06] to-[#D8AE7E] text-transparent bg-clip-text ml-4 mt-6">Enter the middle east tech market in days</h1>
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
        <div className='mt-16'>
          <Image src={Stikan} alt='stikaan with gold in it' />
        </div>
        </div>
      </div>
    </section>
  );
};
