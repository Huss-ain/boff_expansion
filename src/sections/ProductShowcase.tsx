import Productimage from '@/assets/product-image-neogulf.png'
import Image from 'next/image';


export const ProductShowcase = () => {
  return (
  <section className="bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 ">
    <div className="container">
      <div className="mx-w-[540px] mx-auto">
        <div className="flex justify-center">
          <div  className="tag "> Boost your revenue</div>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#D8AE7E] text-transparent bg-clip-text  mt-7"> Capitalise on the GCC tech boom</h2>
        <p className="text-center text-[22px] leading-[30px] tracking-tight mt-7 "> 
          Start selling in the rapidly growing arab market instantly by letting Neogulf AI take care of leads, compliance and sales support
        </p>
        <Image src={Productimage} alt="product image" className='  w-75 mt-10   ' />
        
      </div>
    </div>




  </section>
  );
};
