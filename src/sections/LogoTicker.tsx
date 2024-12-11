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
    <div>
      <div className='container'>
        <div>
          <Image src={Zilch} alt="Zilch Logo" className=''/>
          <Image src={Payhawk} alt="Payhawk" className=''/>
          <Image src={Clearbank} alt="Clearbank" className='logo-ticker-image'/>
          <Image src={Achillies} alt="Achillies" className='logo-ticker-image'/>
          <Image src={Tatum} alt="Tatum" className='logo-ticker-image'/>
          <Image src={Immersive} alt="Immersive" className='logo-ticker-image'/>
          <Image src={Thirdfort} alt="Thirdfort" className='logo-ticker-image' />

        </div>
      </div>
   </div>
  );
};
