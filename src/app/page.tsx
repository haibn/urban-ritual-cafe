import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import HomeSignatureDrinks from '../../components/sections/HomeSignatureDrinks';
import Testimonial from '../../components/ui/Testimonial';
import LocationCard from '../../components/ui/LocationCard';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100vh] lg:h-[890px] w-full min-h-[600px]">
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
                bgColor="#FF9500"
                color="#FFFFFF"
                bgColorHovered="#1E1E1E"
                colorHovered="#FFFFFF"
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
            bgColor="#1E1E1E"
            color="#FFFFFF"
            bgColorHovered="#FF9500"
            colorHovered="#FFFFFF"
            text="Order Now!"
            path="/locations"
          />
          <Button
            bgColor="#1E1E1E"
            color="#FFFFFF"
            bgColorHovered="#FF9500"
            colorHovered="#FFFFFF"
            text="View Full Menu"
            path="/menu"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="flex w-full flex-col items-center justify-center bg-[#4B4B4B] pt-20 pb-15">
        <h2 className="font-urbanist text-[61px] font-medium tracking-wide text-white uppercase">
          Our Story
        </h2>
        <div className="w-[1160px]">
          <br />

          <p className="font-urbanist text-center text-[21px] leading-relaxed whitespace-pre-line text-white">
            {
              'Founded in 2018 in the heart of the San Francisco Bay Area, Urban Ritual was born from a \n simple idea: boba should be more than just a drink—it should be an experience.'
            }
          </p>

          <br />

          <p className="font-urbanist text-center text-[21px] leading-relaxed whitespace-pre-line text-white">
            {
              'Inspired by childhood favorites, world travels, and a drive for constant innovation, we set out to \n reimagine what boba could be. Every sip at Urban Ritual tells a story of nostalgia, adventure, \n and creativity.'
            }
          </p>

          <br />
          <p className="font-urbanist text-center text-[21px] leading-relaxed whitespace-pre-line text-white">
            {
              'At Urban Ritual, we believe that great boba brings people together. Every ingredient, every \n flavor, every drink is crafted with care, quality, and community at heart—making each visit to our \n cafés in San Francisco and San Mateo a memorable experience.'
            }
          </p>

          <br />
          <br />

          <div className="flex justify-end pr-[200px]">
            <Button
              bgColor="white"
              color="black"
              bgColorHovered="#FF9500"
              colorHovered="black"
              text="Read Our Story"
              path="/story"
            />
          </div>
        </div>
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
          <br />
          <div className="grid auto-rows-[1fr] justify-center gap-15">
            <div className="grid grid-cols-[43.75rem_25rem] gap-15 h-full">
              <Testimonial
                text="I've been here about four times already, and it's hands-down my favorite bubble tea spot in San Francisco. The Honey Boba topping is an absolute must--seriously, don't skip it! Their pearls are perfectly chewy and, in my opinion, the best in town ..."
                customerImage="/banners/customer-reik.png"
                bgColor="black"
                textColor="white"
                width="w-[43.75rem]"
              />
              <Testimonial
                text="Urban Ritual is probably one of the best boba shops in the area! I've never had a bad drink there...”"
                customerImage="/banners/customer-nathan.png"
                bgColor="black"
                textColor="white"
                width="w-[25rem]"
              />
            </div>
            <div className="grid grid-cols-[25rem_43.75rem] gap-15 h-full">
              <Testimonial
                text="My favorite boba in SF! All their drinks are so unique and well balanced.”"
                customerImage="/banners/customer-jenny.png"
                bgColor="black"
                textColor="white"
                width="w-[25rem]"
              />
              <Testimonial
                text="Really enjoy their drinks and variety! I ordered the toffee matcha latte with macadamia nut milk (yum)! Macadamia milk isn't a typical milk substitution offered at many places so I'm glad this is an option here ..."
                customerImage="/banners/customer-judy.png"
                bgColor="black"
                textColor="white"
                width="w-[43.75rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="flex flex-col items-center justify-center py-20">
        <h2 className="font-urbanist text-[61px] font-medium tracking-wide uppercase">
          Our Locations
        </h2>

        <br />

        <div className="flex w-full flex-col items-center justify-center gap-15">
          <LocationCard
            locationName="San Francisco Cafe"
            address="488 Fell St, San Francisco, CA 94102"
            phone="415-374-7181"
            bgColor="black"
            textColor="white"
            imageSrc="/pictures/sf-location.png"
            width="72.5rem"
            height="13.5rem"
            buttonText="Order for Pickup"
          />

          <LocationCard
            locationName="San Mateo Cafe"
            address="140 S B St, San Mateo, CA 94401"
            phone="650-458-3298"
            bgColor="black"
            textColor="white"
            imageSrc="/pictures/san-mateo-location.png"
            width="72.5rem"
            height="13.5rem"
            buttonText="Order for Pickup"
          />
        </div>
      </section>

      {/* Catering */}
      <section className="relative mt-32 mb-40 flex w-full flex-col items-center bg-[#4B4B4B]">
        <div className="relative z-10 flex w-[1160px]">
          {/* Left Column */}
          <div className="-mt-16 flex w-1/2 flex-col pr-12 pb-20">
            {/* Top-left image overlapping upwards */}
            <div className="relative mb-10 h-[450px] w-full overflow-hidden rounded-[3rem] shadow-2xl">
              <Image src="/pictures/catering.png" alt="Catering" fill className="object-cover" />
            </div>

            {/* How it works Text */}
            <div className="flex flex-col items-end font-nunito w-full px-4 text-[21px] leading-relaxed text-white">
              <div>
                <p className="font-urbanist mb-4 text-[24px]">How it works:</p>
                <ol className="list-decimal space-y-2 pl-6 text-white">
                  <li>Check out our catering menu.</li>
                  <li>Fill out our catering request form.</li>
                  <li>Send the completed form to hello@urbanritualcafe.com.</li>
                  <li>Please note: we cannot confirm large requests without a completed form.</li>
                </ol>
              </div>

              <div className="mt-8 flex justify-start">
                <Button
                  bgColor="#FF9500"
                  color="#FFFFFF"
                  bgColorHovered="white"
                  colorHovered="black"
                  text="Learn More"
                  path="/catering"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-1/2 flex-col items-end pt-20">
            {/* Text Content */}
            <div className="mb-8 flex w-[460px] flex-col items-end pr-2 text-right text-white">
              <h2 className="font-urbanist text-[61px] leading-none font-medium tracking-wide text-white uppercase">
                CATERING
              </h2>
              <p className="font-nunito mt-6 pl-4 text-right text-[21px] leading-relaxed font-light text-white">
                Bring the best boba in San Francisco to your next event! Urban Ritual offers
                catering for parties, offices, and celebrations
              </p>
            </div>

            {/* Bottom-right overlapping image downwards */}
            <div className="relative ml-8 aspect-square w-[560px] overflow-hidden rounded-[3rem] translate-y-20">
              <Image
                src="/pictures/catering-wedding.png"
                alt="Wedding Catering"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative flex w-full flex-col items-center pt-10 pb-20">
        <div className="flex w-[1160px] flex-col items-center">
          {/* Two column top text */}
          <div className="mb-12 flex w-full gap-12">
            <div className="flex w-1/2 items-start justify-end pr-4">
              <h2 className="font-urbanist text-right text-[53px] leading-[1.1] tracking-wide text-black">
                Have questions,
                <br />
                feedback, or ideas?
                <br />
                We'd love to hear
                <br />
                from you!
              </h2>
            </div>
            <div className="flex w-1/2 items-center pl-4">
              <p className="font-nunito max-w-[440px] text-[29px] leading-relaxed text-black">
                Fill out the form below and our team will get back to you as soon as possible. Let's
                stay connected—because at Urban Ritual, community is everything.
              </p>
            </div>
          </div>

          <div className="flex h-[800px] w-full overflow-hidden rounded-[3rem] border border-gray-100 shadow-2xl">
            {/* Left Image */}
            <div className="relative h-full w-1/2 bg-white">
              <Image
                src="/pictures/diana-contact-form.png"
                alt="Contact Us"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right Form */}
            <div className="flex w-1/2 flex-col justify-center bg-black p-16 text-white">
              <h3 className="font-urbanist mb-10 text-[42px] font-light tracking-wide">
                Contact Form
              </h3>
              <form className="flex w-full flex-col gap-8">
                <div>
                  <label className="font-nunito mb-2 block text-sm text-gray-200">Name:</label>
                  <input
                    type="text"
                    className="h-[48px] w-full rounded-full bg-white px-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-nunito mb-2 block text-sm text-gray-200">Email:</label>
                  <input
                    type="email"
                    className="h-[48px] w-full rounded-full bg-white px-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-nunito mb-2 block text-sm text-gray-200">Subject:</label>
                  <input
                    type="text"
                    className="h-[48px] w-full rounded-full bg-white px-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-nunito mb-2 block text-sm text-gray-200">Message:</label>
                  <textarea className="h-[160px] w-full resize-none rounded-2xl bg-white p-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"></textarea>
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    bgColor="#FF9500"
                    color="#FFFFFF"
                    bgColorHovered="white"
                    colorHovered="black"
                    text="Submit"
                    path="#"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
