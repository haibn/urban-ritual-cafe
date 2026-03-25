import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-10 flex w-full justify-center px-10 pb-10 lg:px-12">
      <div className="relative w-full rounded-[2.5rem] border-2 border-gray-100 bg-white px-6 py-10 shadow-sm lg:px-12">
        <div className="mx-auto flex w-full max-w-[1560px] flex-col gap-8 lg:flex-row lg:justify-between lg:gap-50">

          {/* Logo Section */}
          <div className="flex w-full shrink-0 items-start justify-center pt-1 lg:w-1/4 lg:justify-start">
            <Link href="/" className="flex items-start">
              <Image
                src="/logos/urban-ritual-logo.png"
                alt="Urban Ritual Logo"
                width={320}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="flex w-full flex-col justify-between lg:w-3/4 lg:pl-8">
            <div className="flex w-full flex-col flex-wrap gap-8 sm:flex-row sm:justify-between lg:gap-0 lg:pr-16">

              {/* Our Company */}
              <div className="flex flex-col items-center space-y-4 sm:items-start">
                <h4 className="font-urbanist text-[20px] font-bold tracking-widest text-black uppercase">
                  Our Company
                </h4>
                <nav className="flex flex-col items-center space-y-2 sm:items-start">
                  <Link href="/story" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Story</Link>
                  <Link href="/menu" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Menu</Link>
                  <Link href="/locations" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Locations</Link>
                  <Link href="/gift-cards" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Gift Cards</Link>
                  <Link href="/privacy" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Privacy Policy</Link>
                </nav>
              </div>

              {/* Get In Touch */}
              <div className="flex flex-col items-center space-y-4 sm:items-start">
                <h4 className="font-urbanist text-[20px] font-bold tracking-widest text-black uppercase">
                  Get In Touch
                </h4>
                <nav className="flex flex-col items-center space-y-2 sm:items-start">
                  <Link href="/contact" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Contact Us!</Link>
                  <Link href="/hiring" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Hiring</Link>
                  <Link href="/catering" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Catering</Link>
                  <Link href="/catering-form" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Catering Form</Link>
                </nav>
              </div>

              {/* Connect With Us */}
              <div className="flex flex-col items-center space-y-4 sm:items-start">
                <h4 className="font-urbanist text-[20px] font-bold tracking-widest text-black uppercase">
                  Connect With Us!
                </h4>
                <div className="flex items-center gap-3">
                  <Link href="#" className="hover:opacity-75 transition-opacity">
                    <Image src="/logos/ig.svg" alt="Instagram" width={32} height={32} />
                  </Link>
                  <Link href="#" className="hover:opacity-75 transition-opacity">
                    <Image src="/logos/facebook.svg" alt="Facebook" width={32} height={32} />
                  </Link>
                  <Link href="#" className="hover:opacity-75 transition-opacity">
                    <Image src="/logos/yelp.svg" alt="Yelp" width={32} height={32} />
                  </Link>
                  <Link href="#" className="hover:opacity-75 transition-opacity">
                    <Image src="/logos/ubereats.svg" alt="UberEats" width={32} height={32} className="object-contain" />
                  </Link>
                  <Link href="#" className="hover:opacity-75 transition-opacity">
                    <Image src="/logos/doordash.svg" alt="DoorDash" width={32} height={32} className="object-contain" />
                  </Link>
                </div>
              </div>

            </div>

            <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-12 lg:justify-end lg:pr-16">
              <Link href="/locations" className="bg-[#FF9500] hover:bg-black transition-colors text-white font-nunito font-bold text-base uppercase px-5 py-2.5 rounded-full tracking-wider shadow-md lg:text-[20px] lg:px-7 lg:py-3">
                Visit Us Now!
              </Link>
              <Link href="/menu" className="bg-[#FF9500] hover:bg-black transition-colors text-white font-nunito font-bold text-base uppercase px-5 py-2.5 rounded-full tracking-wider shadow-md lg:text-[20px] lg:px-7 lg:py-3">
                Order Now!
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
