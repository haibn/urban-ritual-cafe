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

      <section>
        <HomeSignatureDrinks />
      </section>
    </div>
  );
}
