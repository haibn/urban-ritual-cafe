import Image from 'next/image';
import Button from '../../components/ui/Button';
import HomeSignatureDrinks from '../../components/sections/HomeSignatureDrinks';
import Testimonial from '../../components/ui/Testimonial';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[890px] w-full">
        <Image
          src={'/banners/home-page-hero-large.jpg'}
          alt="Home Page"
          fill
          sizes="100vw"
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

      {/* Our Signature Drinks */}
      <section className="relative flex flex-col items-center gap-3 py-12 md:gap-8 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 px-4 text-center">
          <h2 className="font-urbanist text-[61px] font-medium tracking-wide text-gray-900 uppercase">
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

      {/* Our Story */}
      <section className="flex w-full flex-col items-center justify-center bg-[#4B4B4B] py-20">
        <h2 className="font-urbanist text-[61px] font-medium tracking-wide text-white uppercase">
          Our Story
        </h2>

        <br></br>

        <p className="font-urbanist text-center text-[21px] leading-relaxed whitespace-pre-line text-white">
          {
            'Founded in 2018 in the heart of the San Francisco Bay Area, Urban Ritual was born from a \n simple idea: boba should be more than just a drink—it should be an experience.'
          }
        </p>

        <br></br>

        <p className="font-urbanist text-center text-[21px] leading-relaxed whitespace-pre-line text-white">
          {
            'Inspired by childhood favorites, world travels, and a drive for constant innovation, we set out to \n reimagine what boba could be. Every sip at Urban Ritual tells a story of nostalgia, adventure, \n and creativity.'
          }
        </p>

        <br></br>

        <p className="font-urbanist text-center text-[21px] leading-relaxed whitespace-pre-line text-white">
          {
            'At Urban Ritual, we believe that great boba brings people together. Every ingredient, every \n flavor, every drink is crafted with care, quality, and community at heart—making each visit to our \n cafés in San Francisco and San Mateo a memorable experience.'
          }
        </p>
      </section>

      {/* Collage */}
      <section className="w-full bg-[linear-gradient(to_bottom,#4B4B4B_50%,#FFFFFF_50%)]">
        <Image
          src={'/banners/home-collage.png'}
          alt="Urban Ritual's Community"
          width={2880}
          height={2780}
          sizes="100vw"
          className="h-auto w-full"
          priority
        />
      </section>

      {/* Customer testimonials */}
      <section className="flex justify-center py-20">
        <div className="w-[1160px]">
          <h2 className="font-urbanist text-[51px] font-normal tracking-wide">
            What our customers are saying ...
          </h2>
          <div className="flex flex-col items-center justify-center gap-15">
            <div className="flex flex-row items-center justify-center gap-15">
              <Testimonial
                text="I've been here about four times already, and it's hands-down my favorite bubble tea spot in San Francisco. The Honey Boba topping is an absolute must--seriously, don't skip it! Their pearls are perfectly chewy and, in my opinion, the best in town ..."
                customerImage="/banners/customer-reik.png"
                bgColor="black"
                textColor="white"
                width="w-[700px]"
                height="h-54"
              />
              <Testimonial
                text="Urban Ritual is probably one of the best boba shops in the area! I've never had a bad drink there...”"
                customerImage="/banners/customer-nathan.png"
                bgColor="black"
                textColor="white"
                width="w-[400px]"
                height="h-54"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-15">
              <Testimonial
                text="My favorite boba in SF! All their drinks are so unique and well balanced.”"
                customerImage="/banners/customer-jenny.png"
                bgColor="black"
                textColor="white"
                width="w-[400px]"
                height="h-54"
              />
              <Testimonial
                text="Really enjoy their drinks and variety! I ordered the toffee matcha latte with macadamia nut milk (yum)! Macadamia milk isn't a typical milk substitution offered at many places so I'm glad this is an option here ..."
                customerImage="/banners/customer-judy.png"
                bgColor="black"
                textColor="white"
                width="w-[700px]"
                height="h-54"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
