import Image from 'next/image';
import arabWomanImage from '@/assets/arabwoman 2.jpg';  // Direct import from assets

export const CTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-[#FFF8F0] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-[900px] mx-auto bg-gradient-to-r from-amber-50 to-purple-50 rounded-xl border border-amber-100 shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center space-y-4 order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
                Ready to expand into the Middle East?
              </h2>
              <p className="text-gray-700 md:pr-6">
                Schedule a strategy call to discuss your specific market entry needs. Our Arabic AI + human relationship approach can accelerate your expansion without the overhead of local offices.
              </p>
              <div className="pt-2">
                <a href="https://calendly.com/hussain-softbase/30min" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary text-base">
                    Schedule Strategy Session
                  </button>
                </a>
              </div>
            </div>
            <div className="md:w-2/5 relative order-1 md:order-2">
              <div className="aspect-[4/3] md:aspect-auto md:h-full w-full overflow-hidden">
                <div className="relative h-full w-full">
                  <Image 
                    src={arabWomanImage}
                    alt="Arab business professional" 
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    style={{ 
                      objectFit: 'cover', 
                      objectPosition: 'center 15%'  // Adjusted to show more of the top of the image
                    }}
                    priority
                    className="rounded-tl-xl rounded-tr-xl md:rounded-tl-none md:rounded-tr-xl md:rounded-br-xl" 
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 mix-blend-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 