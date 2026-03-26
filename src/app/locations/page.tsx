import Image from 'next/image';
import type { Metadata } from 'next';
import Button from '../../../components/ui/Button';

export const metadata: Metadata = {
  title: 'Locations | Urban Ritual Cafe',
  description:
    'Visit Urban Ritual Cafe in San Francisco or San Mateo. Handcrafted boba tea, signature milk teas, and craft coffee at two convenient Bay Area locations.',
};

const locations = [
  {
    name: 'San Francisco Boba Tea Café',
    address: '488 Fell St, San Francisco, CA 94102',
    hours: 'Every Day 12PM-10PM',
    phone: '415-374-7181',
    image: '/locations/san-francisco-cafe.png',
    buttonText: 'VISIT SF!',
    mapsUrl: 'https://maps.google.com/?q=488+Fell+St+San+Francisco+CA+94102',
  },
  {
    name: 'San Mateo Boba Tea Café',
    address: '140 S B St, San Mateo, CA 94401',
    hours: 'Every Day 11AM-10PM',
    phone: '650-458-3298',
    image: '/locations/san-mateo-cafe.png',
    buttonText: 'VISIT SAN MATEO!',
    mapsUrl: 'https://maps.google.com/?q=140+S+B+St+San+Mateo+CA+94401',
  },
];

export default function Locations() {
  return (
    <div>
      {/* Hero */}
      <section className="flex justify-center px-5 pt-16 pb-8 lg:px-[74px] lg:pt-[60px] lg:pb-16">
        <div className="flex h-[300px] w-full max-w-[1294px] flex-col items-center justify-center rounded-[30px] bg-[#4B4B4B] sm:h-[400px] lg:h-[686px] lg:rounded-[50px]">
          <p className="font-petit text-[40px] tracking-[3px] text-[#FF9500] lowercase sm:text-[60px] lg:text-[90px]">
            urban ritual
          </p>
          <h1 className="font-urbanist text-[50px] leading-none font-medium tracking-[3px] text-white uppercase sm:text-[75px] lg:text-[115px]">
            LOCATIONS
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="flex justify-center px-6 py-8 lg:px-20 lg:py-12">
        <div className="w-full max-w-[1280px] lg:pl-[71px]">
          <p className="font-urbanist max-w-[1139px] text-lg leading-[1.5] text-black lg:text-[36px]">
            Looking for handcrafted boba tea in San Francisco or San Mateo? Urban Ritual brings
            modern, craft-focused bubble tea to two convenient Bay Area locations. Visit us in the
            city or the peninsula for signature favorites like our Matcha Toffee, Strawberry Milk
            Bar, and Creme Brulee Milk Tea.
          </p>
        </div>
      </section>

      {/* Our Locations */}
      <section className="flex flex-col items-center px-5 py-4 lg:px-20 lg:py-8">
        <div className="w-full max-w-[1280px]">
          <h2 className="font-urbanist mb-6 text-3xl leading-[1.5] font-medium text-black uppercase lg:mb-10 lg:pl-[71px] lg:text-[61px]">
            OUR LOCATIONS
          </h2>

          <div className="flex flex-col gap-8 lg:gap-12">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="flex flex-col overflow-hidden rounded-[30px] bg-[#4B4B4B] shadow-[3px_3px_8px_0px_rgba(0,0,0,0.25)] lg:h-[439px] lg:flex-row lg:items-center lg:gap-[72px] lg:overflow-visible lg:rounded-[50px] lg:px-[90px] lg:py-[63px]"
              >
                {/* Mobile image */}
                <div className="relative h-[200px] w-full lg:hidden">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-4 px-6 py-6 lg:gap-0 lg:p-0">
                  <h3 className="font-urbanist text-2xl font-medium text-[#FF9500] capitalize lg:text-[47px] lg:leading-[1.5]">
                    {loc.name}
                  </h3>

                  <div className="mt-2 flex flex-col gap-2 lg:mt-4 lg:gap-0">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <Image
                        src="/locations/icon-location.svg"
                        alt="Location"
                        width={24}
                        height={24}
                        className="mt-1 shrink-0"
                      />
                      <p className="font-nunito text-base leading-[1.5] tracking-[-0.27px] text-white lg:text-[27px]">
                        <span className="font-bold">Location: </span>
                        {loc.address}
                      </p>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Image
                        src="/locations/icon-hours.svg"
                        alt="Hours"
                        width={24}
                        height={24}
                        className="mt-1 shrink-0"
                      />
                      <p className="font-nunito text-base leading-[1.5] tracking-[-0.27px] text-white lg:text-[27px]">
                        <span className="font-bold">Hours: </span>
                        {loc.hours}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <Image
                        src="/locations/icon-phone.svg"
                        alt="Phone"
                        width={24}
                        height={24}
                        className="mt-1 shrink-0"
                      />
                      <p className="font-nunito text-base leading-[1.5] tracking-[-0.27px] text-white lg:text-[27px]">
                        <span className="font-bold">Phone: </span>
                        {loc.phone}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center lg:mt-4 lg:justify-end">
                    <Button
                      bgColor="#FF9500"
                      color="#FFFFFF"
                      bgColorHovered="white"
                      colorHovered="black"
                      text={loc.buttonText}
                      path={loc.mapsUrl}
                    />
                  </div>
                </div>

                {/* Desktop image */}
                <div className="relative hidden h-[307px] w-[408px] shrink-0 overflow-hidden rounded-[30px] shadow-[2px_2px_5px_0px_rgba(0,0,0,0.25)] lg:block">
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className="object-cover"
                    sizes="408px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom SEO Text */}
      <section className="flex justify-center px-6 py-12 lg:px-20 lg:py-16">
        <p className="font-nunito max-w-[1140px] text-center text-sm leading-[1.5] tracking-[-0.21px] text-black uppercase lg:text-[21px]">
          Urban Ritual is proud to be part of the Bay Area&apos;s vibrant boba culture. Whether
          you&apos;re searching for &ldquo;boba in San Francisco&rdquo; or &ldquo;boba in San
          Mateo,&rdquo; our caf&eacute;s are here to serve you refreshing drinks crafted with care.
        </p>
      </section>
    </div>
  );
}
