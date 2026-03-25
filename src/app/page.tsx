import Image from 'next/image';
import Link from 'next/link';
import Button from '../../components/ui/Button';
import HomeSignatureDrinks from '../../components/sections/HomeSignatureDrinks';
import ContactForm from '../../components/sections/ContactForm';
import Testimonial from '../../components/ui/Testimonial';
import LocationCard from '../../components/ui/LocationCard';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[100vh] min-h-[600px] w-full lg:h-[890px]">
        <Image
          src={'/banners/home-page-hero-large.jpg'}
          alt="Home Page"
          fill
          sizes="100vw"
          className="object-cover object-[center_40%]"
          priority
        />

        <div className="relative z-10 h-full">
          <div className="absolute inset-x-0 top-[14%] flex flex-col items-center px-10 text-center lg:right-auto lg:left-1/2 lg:w-max lg:-translate-x-1/2 lg:items-end lg:px-0 lg:text-right">
            <div className="order-last mt-6 lg:order-first lg:mt-0">
              <Button
                bgColor="#FF9500"
                color="#FFFFFF"
                bgColorHovered="#1E1E1E"
                colorHovered="#FFFFFF"
                text="VISIT US NOW!"
                path="/locations"
              />
            </div>
            <h1 className="font-urbanist text-[32px] tracking-widest text-white sm:text-[42px] lg:text-[66.4px]">
              CRAFTING UNFORGETTABLE
            </h1>
            <div className="-mt-3 flex items-center lg:-mt-9">
              <h1 className="font-petit mr-3 text-[30px] text-[#FFC787] sm:text-[40px] lg:mr-6 lg:text-[62px]">
                boba
              </h1>
              <h1 className="font-urbanist text-[30px] tracking-widest text-white sm:text-[40px] lg:text-[62px]">
                EXPERIENCES EVERYDAY
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Our Signature Drinks */}
      <section className="relative flex flex-col items-center gap-3 py-12 md:gap-8 md:py-16 lg:py-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 px-10 text-center lg:px-4">
          <h2 className="font-urbanist text-3xl font-medium tracking-wide text-gray-900 uppercase lg:text-[61px]">
            Our Signature Drinks
          </h2>
          <p className="font-urbanist text-base leading-relaxed text-gray-600 lg:text-[21px]">
            Explore our carefully crafted selection of boba teas that blend tradition with
            innovation.
          </p>
        </div>

        {/* Drinks Carousel */}
        <HomeSignatureDrinks />

        {/* CTA Buttons - Centered with spacing */}
        <div className="flex flex-col items-center gap-3 px-10 sm:flex-row lg:px-4">
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
      <section className="flex w-full flex-col items-center justify-center bg-[#4B4B4B] py-12 lg:pt-20 lg:pb-15">
        <h2 className="font-urbanist text-3xl font-medium tracking-wide text-white uppercase lg:text-[61px]">
          Our Story
        </h2>
        <div className="w-full max-w-[1160px] px-10 lg:px-0">
          <br />

          <p className="font-urbanist text-center text-base leading-relaxed text-white lg:text-[21px]">
            Founded in 2018 in the heart of the San Francisco Bay Area, Urban Ritual was born from a
            simple idea: boba should be more than just a drink—it should be an experience.
          </p>

          <br />

          <p className="font-urbanist text-center text-base leading-relaxed text-white lg:text-[21px]">
            Inspired by childhood favorites, world travels, and a drive for constant innovation, we
            set out to reimagine what boba could be. Every sip at Urban Ritual tells a story of
            nostalgia, adventure, and creativity.
          </p>

          <br />
          <p className="font-urbanist text-center text-base leading-relaxed text-white lg:text-[21px]">
            At Urban Ritual, we believe that great boba brings people together. Every ingredient,
            every flavor, every drink is crafted with care, quality, and community at heart—making
            each visit to our cafés in San Francisco and San Mateo a memorable experience.
          </p>

          <br />
          <br />

          <div className="flex justify-center lg:justify-end lg:pr-[200px]">
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
      <section className="flex justify-center py-10 lg:py-20">
        <div className="w-full max-w-[1160px] px-10 lg:px-0">
          <h2 className="font-urbanist text-2xl font-normal tracking-wide lg:text-[51px]">
            What our customers are saying ...
          </h2>
          <br />
          <div className="grid auto-rows-[1fr] justify-center gap-6 lg:gap-15">
            <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[43.75rem_25rem] lg:gap-15">
              <Testimonial
                text="I've been here about four times already, and it's hands-down my favorite bubble tea spot in San Francisco. The Honey Boba topping is an absolute must--seriously, don't skip it! Their pearls are perfectly chewy and, in my opinion, the best in town ..."
                customerImage="/banners/customer-reik.png"
                bgColor="black"
                textColor="white"
                width="w-full lg:w-[43.75rem]"
              />
              <Testimonial
                text="Urban Ritual is probably one of the best boba shops in the area! I've never had a bad drink there..."
                customerImage="/banners/customer-nathan.png"
                bgColor="black"
                textColor="white"
                width="w-full lg:w-[25rem]"
              />
            </div>
            <div className="grid h-full grid-cols-1 gap-6 lg:grid-cols-[25rem_43.75rem] lg:gap-15">
              <Testimonial
                text="My favorite boba in SF! All their drinks are so unique and well balanced."
                customerImage="/banners/customer-jenny.png"
                bgColor="black"
                textColor="white"
                width="w-full lg:w-[25rem]"
              />
              <Testimonial
                text="Really enjoy their drinks and variety! I ordered the toffee matcha latte with macadamia nut milk (yum)! Macadamia milk isn't a typical milk substitution offered at many places so I'm glad this is an option here ..."
                customerImage="/banners/customer-judy.png"
                bgColor="black"
                textColor="white"
                width="w-full lg:w-[43.75rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="flex flex-col items-center justify-center py-10 lg:py-20">
        <h2 className="font-urbanist text-3xl font-medium tracking-wide uppercase lg:text-[61px]">
          Our Locations
        </h2>

        <br />

        <div className="flex w-full flex-col items-center justify-center gap-8 px-10 lg:gap-15 lg:px-0">
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
      <section className="relative mt-10 mb-10 flex w-full flex-col items-center bg-[#4B4B4B] lg:mt-32 lg:mb-40">
        <div className="relative z-10 flex w-full max-w-[1160px] flex-col px-10 lg:flex-row lg:px-0">
          {/* Left Column */}
          <div className="flex w-full flex-col pb-10 lg:-mt-16 lg:w-1/2 lg:pr-12 lg:pb-20">
            {/* Top-left image overlapping upwards */}
            <div className="relative mb-8 h-[250px] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[350px] lg:mb-10 lg:h-[450px] lg:rounded-[3rem]">
              <Image
                src="/pictures/catering.png"
                alt="Catering"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* How it works Text */}
            <div className="font-nunito flex w-full flex-col items-center px-2 text-center text-base leading-relaxed text-white lg:items-end lg:px-4 lg:text-left lg:text-[21px]">
              <div>
                <p className="font-urbanist mb-4 text-lg lg:text-[24px]">How it works:</p>
                <ol className="list-decimal space-y-2 pl-6 text-left text-white">
                  <li>Check out our catering menu.</li>
                  <li>Fill out our catering request form.</li>
                  <li>Send the completed form to hello@urbanritualcafe.com.</li>
                  <li>Please note: we cannot confirm large requests without a completed form.</li>
                </ol>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
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
          <div className="order-first flex w-full flex-col items-center pt-10 lg:order-none lg:w-1/2 lg:items-end lg:pt-20">
            {/* Text Content */}
            <div className="mb-8 flex w-full max-w-[460px] flex-col items-center text-center text-white lg:items-end lg:pr-2 lg:text-right">
              <h2 className="font-urbanist text-3xl leading-none font-medium tracking-wide text-white uppercase lg:text-[61px]">
                CATERING
              </h2>
              <p className="font-nunito mt-4 text-base leading-relaxed font-light text-white lg:mt-6 lg:pl-4 lg:text-[21px]">
                Bring the best boba in San Francisco to your next event! Urban Ritual offers
                catering for parties, offices, and celebrations
              </p>
            </div>

            {/* Bottom-right overlapping image downwards — hidden on mobile */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] overflow-hidden rounded-2xl lg:mr-0 lg:ml-8 lg:block lg:w-[560px] lg:translate-y-20 lg:rounded-[3rem]">
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
      <section className="relative flex w-full flex-col items-center pt-10 pb-12 lg:pb-20">
        <div className="flex w-full max-w-[1160px] flex-col items-center px-10 lg:px-0">
          {/* Two column top text */}
          <div className="mb-8 flex w-full flex-col items-center gap-6 lg:mb-12 lg:flex-row lg:items-start lg:gap-12">
            <div className="flex w-full items-start justify-center lg:w-1/2 lg:justify-end lg:pr-4">
              <h2 className="font-urbanist text-center text-2xl leading-[1.1] tracking-wide text-black lg:text-right lg:text-[53px]">
                Have questions,
                <br className="hidden lg:inline" /> feedback, or ideas?
                <br className="hidden lg:inline" /> We&apos;d love to hear
                <br className="hidden lg:inline" /> from you!
              </h2>
            </div>
            <div className="flex w-full items-center justify-center lg:w-1/2 lg:justify-start lg:pl-4">
              <p className="font-nunito max-w-[440px] text-center text-lg leading-relaxed text-black lg:text-left lg:text-[29px]">
                Fill out the form below and our team will get back to you as soon as possible.
                Let&apos;s stay connected—because at Urban Ritual, community is everything.
              </p>
            </div>
          </div>

          <div className="flex h-auto w-full flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-2xl lg:h-[800px] lg:flex-row lg:rounded-[3rem]">
            {/* Left Image - hidden on mobile */}
            <div className="relative hidden h-full bg-white lg:block lg:w-1/2">
              <Image
                src="/contact/45dd10da41b52928b072548e6f3eb8ad15a3a0fc.png"
                alt="Urban Ritual customer enjoying a drink"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
