import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering | Urban Ritual Cafe',
  description:
    'Bring Urban Ritual boba to your next event. Catering options for small parties, grab & go, and full-service boba bars in the Bay Area.',
};

export default function Catering() {
  return (
    <div>
      {/* Hero */}
      <section className="flex justify-center px-6 pt-12 pb-10 sm:px-10 lg:px-20 lg:pt-[120px] lg:pb-16">
        <div className="w-full max-w-[1280px] text-center">
          {/* BRING + Image row */}
          <div className="mx-auto flex flex-col items-end justify-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
            <h1 className="font-urbanist text-[40px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[56px] lg:text-[90px]">
              BRING
            </h1>
            <div className="relative h-[220px] w-[240px] shrink-0 overflow-hidden rounded-[30px] shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:h-[260px] sm:w-[280px] lg:h-[311px] lg:w-[329px] lg:rounded-[40px]">
              <Image
                src="/catering/hero-drinks-celebration.png"
                alt="Urban Ritual drinks being held up"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 329px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* urban ritual */}
          <p className="font-petit text-[36px] leading-[1.2] tracking-[3px] text-[#FF9500] lowercase sm:text-[50px] lg:text-[90px]">
            urban ritual
          </p>

          {/* TO YOUR NEXT EVENT */}
          <h1 className="font-urbanist text-[36px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[50px] lg:text-[90px]">
            to your next event
          </h1>
        </div>
      </section>

      {/* Sub Heading - Urban Ritual Catering */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-6 text-2xl leading-[1.5] font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-8 lg:text-[61px]">
            Urban Ritual Catering
          </h2>
          <p className="font-urbanist text-lg leading-[1.5] text-black lg:text-[36px]">
            Looking for unforgettable boba catering in the Bay Area? Urban Ritual brings handcrafted
            bubble tea to your parties, corporate events, weddings, and celebrations. Whether
            you&apos;re planning a small gathering or a large-scale event, our catering services are
            designed to make every sip memorable.
          </p>
        </div>
      </section>

      {/* Why Choose Urban Ritual */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="flex w-full max-w-[1160px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20">
          <div className="order-2 lg:order-1 lg:flex-1">
            <h2 className="font-urbanist mb-6 text-xl font-medium text-black capitalize sm:text-2xl lg:mb-8 lg:text-[47px] lg:leading-[1.5]">
              Why Choose Urban Ritual for Boba Catering?
            </h2>
            <ul className="font-nunito list-disc space-y-4 pl-5 text-base leading-[1.5] tracking-tight text-black lg:text-[27px]">
              <li>
                <strong>Fresh, High-Quality Drinks</strong> &ndash; Made with housemade syrups,
                premium teas, and signature toppings.
              </li>
              <li>
                <strong>Flexible Options</strong> &ndash; From small parties to full-service events,
                we tailor our catering to fit your needs.
              </li>
              <li>
                <strong>Trusted Bay Area Brand</strong> &ndash; With locations in San Francisco and
                San Mateo, Urban Ritual is proud to serve the community with innovative,
                craft-focused boba
              </li>
            </ul>
          </div>
          <div className="relative order-1 h-[300px] w-full max-w-[392px] shrink-0 overflow-hidden rounded-[30px] shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] lg:order-2 lg:h-[398px] lg:w-[392px] lg:rounded-[50px]">
            <Image
              src="/catering/catering-setup.png"
              alt="Urban Ritual catering setup"
              fill
              sizes="(max-width: 1024px) 100vw, 392px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* How to Book Catering */}
      <section className="flex w-full justify-center bg-[#4B4B4B] px-6 py-12 shadow-[3px_3px_8px_0px_rgba(0,0,0,0.25)] sm:px-10 lg:px-20 lg:py-24">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-2xl font-medium text-white uppercase sm:text-3xl lg:mb-10 lg:text-[47px] lg:leading-[1.5]">
            How to Book Catering
          </h2>
          <ol className="font-nunito list-decimal space-y-3 pl-6 text-base leading-[1.5] tracking-tight text-white lg:pl-10 lg:text-[27px]">
            <li>
              Download and complete our{' '}
              <Link
                href="/catering-form"
                className="font-medium text-[#FF9500] underline decoration-solid"
              >
                Catering Request Form
              </Link>
            </li>
            <li>
              Send the form to{' '}
              <a href="mailto:hello@urbanritualcafe.com" className="font-medium text-[#FF9500]">
                hello@urbanritualcafe.com
              </a>
            </li>
            <li>
              <strong>Please note:</strong> Due to high demand, we cannot respond to large requests
              without the completed form.
            </li>
          </ol>
        </div>
      </section>

      {/* Catering Options - Small Parties */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-20">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-4 text-2xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-6 lg:text-[61px] lg:leading-[1.5]">
            Catering Options
          </h2>
          <h3 className="font-urbanist mb-6 text-xl font-medium text-black capitalize sm:text-2xl lg:mb-8 lg:text-[47px] lg:leading-[1.5]">
            Small Parties (1&ndash;50 Drinks)
          </h3>
          <div className="font-nunito text-base leading-[1.5] tracking-tight text-black lg:text-[27px]">
            <p className="mb-4">Perfect for birthdays, office lunches, or casual get-togethers.</p>
            <ol className="list-decimal space-y-3 pl-6 lg:pl-10">
              <li>
                Order directly from our{' '}
                <a
                  href="https://www.urbanritual.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#FF9500] underline decoration-solid"
                >
                  online ordering site
                </a>
              </li>
              <li>Select Delivery &amp; enter your address</li>
              <li>Choose your drinks (please order in multiples of 5 or 10)</li>
            </ol>
            <p className="mt-4 font-bold">
              For orders of 20&ndash;50 drinks, please give 24 hours&apos; notice so our team can
              prepare your order with care.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex w-full justify-center bg-[#4B4B4B] px-6 py-12 shadow-[3px_3px_8px_0px_rgba(0,0,0,0.25)] sm:px-10 lg:px-20 lg:py-24">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-2xl font-medium text-white uppercase sm:text-3xl lg:mb-10 lg:text-[47px] lg:leading-[1.5]">
            Pricing
          </h2>
          <ol className="font-nunito list-decimal space-y-3 pl-6 text-base leading-[1.5] tracking-tight text-white lg:pl-10 lg:text-[27px]">
            <li>Drinks &amp; toppings at standard menu pricing</li>
            <li>
              <strong>Delivery Fee</strong> &ndash; $2/mile from store to event location (minimum
              $30)
            </li>
            <li>
              <strong>Full-Service Catering Fee</strong> &ndash; $300 (includes setup, cleanup,
              ingredient prep, mileage, and baristas). Extra baristas will be necessary for larger
              catering events.
            </li>
          </ol>
        </div>
      </section>

      {/* Catering Options 2 & 3 */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-20">
        <div className="w-full max-w-[1160px] space-y-16 lg:space-y-20">
          {/* Grab & Go Catering */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20">
            <div className="order-2 lg:order-1 lg:flex-1">
              <h3 className="font-urbanist mb-4 text-xl font-medium text-black capitalize sm:text-2xl lg:mb-6 lg:text-[47px] lg:leading-[1.5]">
                Grab &amp; Go Catering
                <br />
                (50 Drink Minimum)
              </h3>
              <div className="font-nunito text-base leading-[1.5] tracking-tight text-black lg:text-[27px]">
                <p className="mb-4">
                  Best for company meetings, community gatherings, or school events.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Drinks are freshly prepared in-house</li>
                  <li>Delivered to your location</li>
                  <li>Set up for guests to grab and enjoy instantly</li>
                </ul>
              </div>
            </div>
            <div className="relative order-1 h-[280px] w-full max-w-[344px] shrink-0 overflow-hidden rounded-[30px] shadow-[3px_3px_10px_0px_rgba(0,0,0,0.25)] lg:order-2 lg:h-[346px] lg:w-[344px] lg:rounded-[50px]">
              <Image
                src="/catering/grab-and-go-crate.png"
                alt="Grab and go boba drinks in crate"
                fill
                sizes="(max-width: 1024px) 100vw, 344px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Full-Service Boba Bar */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20">
            <div className="order-2 lg:order-1 lg:flex-1">
              <h3 className="font-urbanist mb-4 text-xl font-medium text-black capitalize sm:text-2xl lg:mb-6 lg:text-[47px] lg:leading-[1.5]">
                Full-Service Boba Bar
                <br />
                (100 Drink Minimum)
              </h3>
              <div className="font-nunito text-base leading-[1.5] tracking-tight text-black lg:text-[27px]">
                <p className="mb-4">
                  Turn your event into an experience with our barista team. Perfect for weddings,
                  large corporate events, or festivals.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    Ingredients prepped in advance (tea base, sugar levels, milk options, toppings)
                  </li>
                  <li>On-site baristas to assemble and serve custom drinks</li>
                  <li>
                    Includes{' '}
                    <strong>1 hour setup &amp; cleanup + 1&ndash;2 hours of service</strong>
                  </li>
                  <li>
                    This service includes <strong>2 baristas.</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative order-1 h-[300px] w-full max-w-[346px] shrink-0 overflow-hidden rounded-[30px] shadow-[3px_3px_10px_0px_rgba(0,0,0,0.25)] lg:order-2 lg:h-[371px] lg:w-[346px] lg:rounded-[50px]">
              <Image
                src="/catering/full-service-bar.png"
                alt="Full-service boba bar menu"
                fill
                sizes="(max-width: 1024px) 100vw, 346px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Staffing */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20">
            <div className="order-2 lg:order-1 lg:flex-1">
              <div className="font-nunito text-base leading-[1.5] tracking-tight text-black lg:text-[27px]">
                <p className="mb-4 font-bold">Staffing:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>100&ndash;200 drinks &rarr; 2 baristas included</li>
                  <li>
                    200&ndash;300 drinks &rarr; +1 barista (<strong>$150</strong>)
                  </li>
                  <li>
                    300&ndash;400 drinks &rarr; +2 baristas (<strong>$300</strong>)
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative order-1 h-[280px] w-full max-w-[346px] shrink-0 overflow-hidden rounded-[30px] shadow-[3px_3px_10px_0px_rgba(0,0,0,0.25)] lg:order-2 lg:h-[346px] lg:w-[346px] lg:rounded-[50px]">
              <Image
                src="/catering/drinks-lined-up.png"
                alt="Boba drinks lined up for event"
                fill
                sizes="(max-width: 1024px) 100vw, 346px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
