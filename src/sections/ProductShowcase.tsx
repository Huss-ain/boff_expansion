import Productimage from '@/assets/product-image-neogulf.png'
import Dalla from '@/assets/Dalla.png'
import Image from 'next/image';


export const ProductShowcase = () => {
  return (
  <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip">
    <div className="container mx-auto px-4">
      <div className="mx-w-[540px] mx-auto">
        <div className="flex justify-center">
          <div  className="tag "> Boost your revenue</div>
        </div>
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#D8AE7E] text-transparent bg-clip-text  mt-7"> Capitalise on the GCC tech boom</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight mt-7 "> 
          Start selling in the rapidly growing arab market instantly by letting Neogulf AI take care of leads, compliance and sales support
        </p>
        <div className="mt-10 mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[90%]">
        <Image src={Productimage} 
          alt="product image"
          className='w-full mt-6' 
        />
        <Image 
          src={Dalla} 
          alt="Dalla gold"
          height={362}
          width={362}
          className='hidden md:block absolute -left-7 -bottom-60 md:h-[250px] md:w-[250px] md:-bottom-40 lg:h-[362px] lg:w-[362px] lg:-bottom-62' 
        />
        
        </div>
      </div>
    </div>




  </section>
  );
};
