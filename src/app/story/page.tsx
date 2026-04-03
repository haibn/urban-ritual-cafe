import Image from 'next/image';
import type { Metadata } from 'next';
import FadeIn from '../../../components/motion/FadeIn';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Our Story | Urban Ritual Cafe',
  description:
    'Learn about Urban Ritual Cafe — redefining boba and coffee in the Bay Area since 2018.',
};

export default function Story() {
  return (
    <div>
      {/* Hero */}
      <section className="flex justify-center px-10 pt-16 pb-10 lg:px-20 lg:pt-[140px] lg:pb-20">
        <FadeIn
          delay={0.2}
          stagger={0.15}
          className="flex w-full max-w-[1280px] flex-col-reverse items-center gap-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div data-animate className="text-center lg:text-left">
            <h1 className="font-urbanist text-[36px] leading-[1.1] font-medium tracking-widest text-black uppercase sm:text-[50px] lg:text-[90px]">
              Redefining
            </h1>
            <h1 className="font-urbanist text-[36px] leading-[1.1] font-medium tracking-widest text-black uppercase sm:text-[50px] lg:text-[90px]">
              Boba &amp; Coffee
            </h1>
            <div className="flex items-baseline justify-center gap-2 lg:justify-start lg:gap-4">
              <h1 className="font-urbanist text-[36px] leading-[1.1] font-medium tracking-widest text-black uppercase sm:text-[50px] lg:text-[90px]">
                in the
              </h1>
              <span className="font-petit text-[32px] text-[#FF9500] lowercase sm:text-[46px] lg:text-[90px]">
                bay area
              </span>
            </div>
          </div>
          <div
            data-animate
            className="relative h-[240px] w-full max-w-[440px] shrink-0 overflow-hidden rounded-[30px] sm:h-[300px] lg:h-[358px] lg:w-[440px] lg:rounded-[50px]"
          >
            <Image
              src="/story/hero-team.png"
              alt="Urban Ritual team"
              fill
              sizes="(max-width: 1024px) 100vw, 440px"
              className="object-cover object-bottom"
              priority
              quality={80}
            />
          </div>
        </FadeIn>
      </section>

      {/* Tagline */}
      <section className="flex justify-center px-10 pb-16 lg:px-20 lg:pb-24">
        <ScrollReveal className="max-w-[1280px]">
          <p className="font-nunito text-center text-sm leading-relaxed tracking-tight text-black uppercase lg:text-[21px]">
            Urban Ritual is more than a boba shop. With locations in San Francisco and San Mateo,
            we&apos;ve been crafting signature milk teas, coffee drinks, and innovative flavors
            since 2018 — blending creativity, culture, and community into every sip.
          </p>
        </ScrollReveal>
      </section>

      {/* Our Story */}
      <section className="flex justify-center px-10 py-10 lg:px-20 lg:py-20">
        <ScrollReveal
          stagger={0.12}
          className="flex w-full max-w-[1160px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-20"
        >
          <div data-animate className="order-2 lg:order-1 lg:flex-1">
            <h2 className="font-urbanist mb-8 text-3xl leading-[1.5] font-medium tracking-wide text-black uppercase lg:text-[61px]">
              OUR STORY
            </h2>
            <div className="font-nunito space-y-6 text-base leading-relaxed tracking-tight text-black lg:text-[27px] lg:leading-[1.5]">
              <p>
                Founded in 2018 in the heart of the San Francisco Bay Area, Urban Ritual began as a
                small idea with a big mission: to push the boundaries of what boba could be. We
                wanted to create drinks that weren&apos;t just refreshing, but memorable — each cup
                telling a story of nostalgia, adventure, and discovery.
              </p>
              <p>
                Our inspiration comes from childhood favorites, global travel experiences, and a
                love for experimenting with bold, unexpected flavors. From San Francisco to San
                Mateo, Urban Ritual continues to grow as a place where tradition meets innovation.
              </p>
            </div>
          </div>
          <div
            data-animate
            className="relative order-1 h-[400px] w-full max-w-[481px] shrink-0 overflow-hidden rounded-[30px] lg:order-2 lg:h-[601px] lg:w-[481px] lg:rounded-[50px]"
          >
            <Image
              src="/pictures/story-artisanal-matcha.png"
              alt="Artisanal matcha drinks"
              fill
              sizes="(max-width: 1024px) 100vw, 481px"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* What Makes Urban Ritual Different? */}
      <section className="flex flex-col items-center px-10 py-10 lg:px-20 lg:py-20">
        <ScrollReveal stagger={0.12}>
          <h2
            data-animate
            className="font-urbanist mb-6 text-center text-2xl font-medium capitalize lg:mb-8 lg:text-[47px]"
          >
            What Makes Urban Ritual Different?
          </h2>
          <p
            data-animate
            className="font-nunito mb-8 max-w-[1030px] text-base leading-relaxed tracking-tight text-black lg:mb-12 lg:text-right lg:text-[27px] lg:leading-[1.5]"
          >
            At Urban Ritual, we take a thoughtful approach to every drink we create. Each recipe is
            inspired by flavors we love, experiences we&apos;ve had, and the joy of sharing
            something special with the community.
          </p>
        </ScrollReveal>
        <ScrollReveal
          stagger={0.12}
          className="flex w-full max-w-[1160px] flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-16"
        >
          <div
            data-animate
            className="relative h-[400px] w-full max-w-[439px] shrink-0 overflow-hidden rounded-[30px] lg:h-[548px] lg:w-[439px] lg:rounded-[50px]"
          >
            <Image
              src="/pictures/story-cinnamon-crunch.png"
              alt="Cinnamon crunch boba"
              fill
              sizes="(max-width: 1024px) 100vw, 439px"
              className="object-cover"
            />
          </div>
          <ul
            data-animate
            className="font-nunito max-w-[660px] list-disc space-y-4 pl-5 text-base leading-relaxed tracking-tight text-black lg:text-right lg:text-[27px] lg:leading-[1.5]"
          >
            <li>
              <strong>Creative Recipes:</strong> From our fan-favorite Matcha Toffee to our
              Strawberry Milk Bar, every drink has a story behind it.
            </li>
            <li>
              <strong>High-Quality Ingredients:</strong> Housemade syrups, fresh toffee brittle, and
              signature cream blends bring out unforgettable flavors.
            </li>
            <li>
              <strong>Community Roots:</strong> With cafes in San Francisco and San Mateo,
              we&apos;re proud to be part of the Bay Area&apos;s diverse and vibrant culture.
            </li>
            <li>
              <strong>Beyond the Cup:</strong> Bring Urban Ritual anywhere — convenient, shareable,
              and just as delicious.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Our Mission & Values */}
      <section className="flex w-full justify-center bg-[#4B4B4B] px-10 py-16 shadow-[3px_3px_8px_0px_rgba(0,0,0,0.25)] lg:px-20 lg:py-24">
        <ScrollReveal stagger={0.1} className="w-full max-w-[1160px] text-center">
          <h2
            data-animate
            className="font-urbanist mb-10 text-2xl font-medium text-white capitalize lg:text-[47px]"
          >
            Our Mission &amp; Values
          </h2>
          <p
            data-animate
            className="font-nunito mx-auto mb-10 max-w-[1136px] text-base leading-relaxed tracking-tight text-white lg:text-[27px] lg:leading-[1.5]"
          >
            At Urban Ritual, our mission is simple: to make great boba and coffee accessible to
            everyone, everywhere. We believe that drinks should bring people together, spark
            curiosity, and connect us to our roots.
          </p>
          <ul
            data-animate
            className="font-nunito mx-auto inline-block max-w-[1060px] list-disc space-y-2 text-center text-base leading-relaxed tracking-tight text-white lg:text-[27px] lg:leading-[1.5]"
          >
            <li>
              <strong>Quality you can taste</strong> – only the best ingredients, carefully sourced.
            </li>
            <li>
              <strong>Creativity in every sip</strong> – blending tradition with bold, new ideas.
            </li>
            <li>
              <strong>Community first</strong> – because boba is about sharing moments, not just
              drinks.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* Urban Ritual Today */}
      <section className="flex justify-center px-10 py-12 lg:px-20 lg:py-20">
        <ScrollReveal stagger={0.12} className="w-full max-w-[1160px]">
          <h2
            data-animate
            className="font-urbanist mb-8 text-2xl font-medium capitalize lg:text-[47px]"
          >
            Urban Ritual Today
          </h2>
          <div
            data-animate
            className="font-nunito mb-12 space-y-6 text-base leading-relaxed tracking-tight text-black lg:text-[27px] lg:leading-[1.5]"
          >
            <p>
              Today, Urban Ritual serves thousands of boba and coffee lovers across the Bay Area.
              From our San Francisco location on Fell Street to our San Mateo shop on B Street,
              we&apos;re proud to be known as one of the best boba spots in Northern California.
            </p>
            <p>
              Whether you&apos;re here for a creamy House Milk Tea or a bold Vietnamese Coffee with
              Boba, you&apos;ll always get the same Urban Ritual experience — thoughtful, flavorful,
              and unforgettable.
            </p>
          </div>
          <div
            data-animate
            className="relative h-[250px] w-full overflow-hidden rounded-[30px] sm:h-[400px] lg:h-[618px] lg:rounded-[50px]"
          >
            <Image
              src="/pictures/story-team-sf.png"
              alt="Urban Ritual team at Golden Gate Bridge"
              fill
              sizes="(max-width: 1024px) 100vw, 1140px"
              className="object-cover"
            />
          </div>
          <p className="font-nunito mt-10 text-center text-xs leading-relaxed tracking-tight text-black lg:text-[16px] lg:leading-[1.5]">
            Urban Ritual is a boba tea and coffee shop with locations in San Francisco and San
            Mateo, CA. Since 2018, we&apos;ve specialized in handcrafted milk teas, matcha drinks,
            specialty coffee, and innovative boba creations. Our menu features favorites like House
            Milk Tea, Matcha Toffee, and Strawberry Milk Bar. If you&apos;re searching for the best
            boba in the Bay Area, Urban Ritual delivers a modern take on tradition, blending
            high-quality ingredients with creative recipes. Visit us in San Francisco or San Mateo
            and experience why Urban Ritual is one of the most loved boba cafes in Northern
            California.
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
