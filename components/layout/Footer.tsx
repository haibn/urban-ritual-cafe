import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full flex justify-center px-4 md:px-12 pb-10 mt-10 relative">
      <div className="w-full rounded-[2.5rem] border-2 border-gray-100 bg-white px-12 py-10 shadow-sm relative">
        <div className="flex flex-col lg:flex-row justify-between w-[1560px] max-w-full mx-auto gap-50">
          
          {/* Logo Section */}
          <div className="flex w-1/4 shrink-0 justify-center lg:justify-start items-start pt-1">
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
          <div className="flex flex-col w-3/4 justify-between pl-8">
            <div className="flex flex-row justify-between w-full pr-16">
              
              {/* Our Company */}
            <div className="flex flex-col items-start space-y-4">
              <h4 className="font-urbanist text-[20px] font-bold tracking-widest text-black uppercase">
                Our Company
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/story" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Story</Link>
                <Link href="/menu" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Menu</Link>
                <Link href="/locations" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Locations</Link>
                <Link href="/gift-cards" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Gift Cards</Link>
                <Link href="/privacy" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors uppercase tracking-wider">Privacy Policy</Link>
              </nav>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col items-start space-y-4">
              <h4 className="font-urbanist text-[20px] font-bold tracking-widest text-black uppercase">
                Get In Touch
              </h4>
              <nav className="flex flex-col space-y-2">
                <Link href="/contact" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Contact Us!</Link>
                <Link href="/hiring" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Hiring</Link>
                <Link href="/catering" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Catering</Link>
                <Link href="/catering-form" className="font-nunito text-[15px] text-black font-bold hover:text-[#FF9500] transition-colors capitalize tracking-wider">Catering Form</Link>
              </nav>
            </div>

            {/* Connect With Us */}
            <div className="flex flex-col items-start space-y-4">
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

            <div className="mt-12 flex items-center justify-end gap-4 w-full pr-16">
              <Link href="/locations" className="bg-[#FF9500] hover:bg-black transition-colors text-white font-nunito font-bold text-[20px] uppercase px-7 py-3 rounded-full tracking-wider shadow-md">
                Visit Us Now!
              </Link>
              <Link href="/menu" className="bg-[#FF9500] hover:bg-black transition-colors text-white font-nunito font-bold text-[20px] uppercase px-7 py-3 rounded-full tracking-wider shadow-md">
                Order Now!
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
