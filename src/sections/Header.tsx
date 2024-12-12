import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/Neogulf-brown.png';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';

export const HeaderComponent = () => {
   return (
      <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className='text-[#FFE0B5] hidden md:block'>Expand your sales to the arab world instantly</p>
            <div className="inline-flex gap-1 items-center"> 
            <p>Now accepting healthtech, medtech and fintech companies</p>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
            </div>
          </div>
          <div className='py-5 px-10'>
            <div className="container">
              <div className='flex items-center justify-between'>
              <Image src={Logo} alt="expansion ai logo" height={100} width={100} />
              <MenuIcon className= "h-5 w-5 md:hidden"/>
              <nav className="hidden md:flex gap-6 text-black/60 items-center">
                <a href="#">About</a>
                <a href="#">Growth</a>
                <a href="#">Product</a>
                <a href="#">Who we are</a>
                <a href="#">Contact</a>
                <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>Book a call</button>


              </nav>
              </div>
            </div>
          </div>
      </header>
   );
};

export default function Home() {
  return <HeaderComponent />;
}
