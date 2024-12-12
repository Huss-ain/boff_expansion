import Zilch from '@/assets/Zilch-web.png';
import Thirdfort from '@/assets/Thirdford-web.png';
import Payhawk from '@/assets/Payhawk-web.png';
import Clearbank from '@/assets/clearbank-web.png';
import Achillies from '@/assets/Achillies-web.png';
import Tatum from '@/assets/Tatum-web.png';
import Immersive from '@/assets/Immersive-web.png';
import Image from 'next/image';

export const LogoTicker = () => {
  return (
    <div className='py-1 md:py-1 bg-white'>
      <div className="container mx-auto px-4 py-6" >
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'> 
          <div className="flex gap-14 flex-none items-center justify-between flex-nowrap">
            <Image src={Zilch} alt="Zilch Logo" className="h-10 w-auto mr-10" />
            <Image src={Payhawk} alt="Payhawk" className="h-8 w-auto mr-10" />
            <Image src={Clearbank} alt="Clearbank" className="h-16 w-auto mr-10" />
            <Image src={Achillies} alt="Achillies" className="h-16 w-auto mr-10" />
            <Image src={Tatum} alt="Tatum" className="h-16 w-auto mr-10" />
            <Image src={Immersive} alt="Immersive" className="h-16 w-auto mr-10" />
            <Image src={Thirdfort} alt="Thirdfort" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

