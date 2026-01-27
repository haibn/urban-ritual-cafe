import Image from 'next/image';
import Button from '../../components/ui/Button';
import HomeSignatureDrinks from '../../components/sections/HomeSignatureDrinks';

export default function Home() {
  return (
    <div>
      <section className="relative h-[890px] w-full">
        <Image
          src={'/banners/home-page-hero-large.jpg'}
          alt="Home Page"
          fill
          className="object-cover object-[center_40%]"
          priority
        />

        <div className="relative z-10 h-full">
          <div className="absolute top-[14%] left-1/2 w-max -translate-x-1/2 flex-col justify-end justify-items-end">
            <div>
              <Button
                bgColor="FF9500"
                color="FFFFFF"
                bgColorHovered="1E1E1E"
                colorHovered="FFFFFF"
                text="VISIT US NOW!"
                path="/locations"
              />
            </div>
            <h1 className="font-urbanist text-[66.4px] tracking-widest text-white">
              CRAFTING UNFORGETTABLE
            </h1>
            <div className="-mt-9 flex items-center">
              <h1 className="font-petit mr-6 text-[62px] text-[#FFC787]">boba</h1>
              <h1 className="font-urbanist text-[62px] tracking-widest text-white">
                EXPERIENCES EVERYDAY
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center gap-3 py-12 md:gap-8 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 px-4 text-center">
          <h2 className="font-urbanist text-[61px] font-semibold tracking-wide text-gray-900 uppercase">
            Our Signature Drinks
          </h2>
          <p className="font-urbanist text-[21px] leading-relaxed text-gray-600">
            Explore our carefully crafted selection of boba teas that blend tradition with
            innovation.
          </p>
        </div>

        {/* Drinks Carousel */}
        <HomeSignatureDrinks />

        {/* CTA Buttons - Centered with spacing */}
        <div className="flex items-center gap-3 px-4">
          <Button
            bgColor="1E1E1E"
            color="FFFFFF"
            bgColorHovered="FF9500"
            colorHovered="FFFFFF"
            text="Order Now!"
            path="/locations"
          />
          <Button
            bgColor="1E1E1E"
            color="FFFFFF"
            bgColorHovered="FF9500"
            colorHovered="FFFFFF"
            text="View Full Menu"
            path="/menu"
          />
        </div>
      </section>
    </div>
  );
}
