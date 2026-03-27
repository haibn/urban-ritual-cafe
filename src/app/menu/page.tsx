import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Button from '../../../components/ui/Button';
import FadeIn from '../../../components/motion/FadeIn';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Menu | Urban Ritual Cafe',
  description:
    "Explore Urban Ritual's full menu of handcrafted boba teas, specialty coffee, seasonal drinks, and desserts. Bay Area's most creative boba & coffee drinks.",
};

type DrinkItem = {
  name: string;
  image: string;
  description?: string;
};

const SPECIALITIES: DrinkItem[] = [
  {
    name: 'House Milk Tea',
    image: '/menu/house-milk-tea.png',
    description:
      'House blend of black teas with house cream. Creamy, malty and roasted flavor notes.',
  },
  {
    name: 'Creme Brulee',
    image: '/menu/creme-brulee.png',
    description:
      'Housemade creme brûlée, honey boba, classic milk topped with crackling torched raw sugar.',
  },
  {
    name: 'Creme Brulee Milk Tea',
    image: '/menu/creme-brulee-milk-tea.png',
    description:
      "A combination of our famous Creme Brulee with our House Milk Tea--it's the best of both worlds.",
  },
  {
    name: 'Matcha Toffee',
    image: '/menu/matcha-toffee.png',
    description: 'Matcha green tea with classic milk and bite-sized housemade toffee brittle.',
  },
  {
    name: 'Strawberry Milk Bar',
    image: '/menu/strawberry-milk-bar.png',
    description: 'Classic milk with housemade strawberry syrup.',
  },
  {
    name: 'Mango Sticky Rice',
    image: '/menu/mango-sticky-rice.png',
    description: 'Mango with rice milk & coconut milk.',
  },
  {
    name: 'Bae-Sil',
    image: '/menu/bae-sil.png',
    description: 'Strawberry basil lemonade with housemade strawberry syrup, basil, and lemon.',
  },
  {
    name: 'White Grape Yuzu',
    image: '/menu/white-grape-yuzu.png',
    description: 'White grape oolong with yuzu honey.',
  },
  {
    name: 'Lychee IPA',
    image: '/menu/lychee-ipa.png',
    description: 'Housemade NON-ALCOHOLIC version with lychee & citrus hops.',
  },
  {
    name: 'Classic Brew',
    image: '/menu/classic-brew.png',
    description: 'Our house milk tea with a shot of cold brew coffee and our special house cream.',
  },
  {
    name: 'The Cloud',
    image: '/menu/the-cloud.png',
    description:
      'Dark roasted cold brew coffee locally roasted from Cat & Cloud in Santa Cruz. Creamy, sweet with notes of dark chocolate.',
  },
  {
    name: 'Feed Me Ube!',
    image: '/drinks/signature/feed-me-ube.png',
    description:
      'Ube Creme brulee, taro chunks, coconut milk, and a choice of rice milk or whole milk.',
  },
  {
    name: 'Hong Kong Milk Tea',
    image: '/menu/hong-kong-milk-tea.png',
    description:
      'Our take on the Classic Hong Kong Milk Tea. Ours is made with a housemade blend of black teas with evaporated milk. Our tea is steeped and then chilled for maximum strength and flavor.',
  },
  {
    name: 'Black Sesame Rice Ball',
    image: '/menu/black-sesame-rice-ball.png',
    description: 'Drinkable mochi, black sesame, & rice milk.',
  },
];

const EVERYDAY_CLASSICS: DrinkItem[] = [
  { name: 'Matcha Green Tea', image: '/menu/matcha-green-tea.png' },
  { name: 'White Grape Oolong', image: '/menu/white-grape-oolong.png' },
  { name: 'Chrysanthemum Tea', image: '/menu/chrysanthemum-tea.png' },
  { name: 'Thai Tea', image: '/menu/thai-tea.png' },
  { name: 'Hibiscus Tea', image: '/menu/hibiscus-tea.png' },
  { name: 'Jasmine Green Tea', image: '/menu/jasmine-green-tea.png' },
  {
    name: 'Honey Oolong (Tie Guan Yin)',
    image: '/menu/honey-oolong.png',
  },
];

const SEASONAL_SPECIALS: DrinkItem[] = [
  {
    name: 'Lemon Tea',
    image: '/menu/lemon-tea.png',
    description:
      'Tieguanyin oolong tea with lemon and golden cane sugar. Reminiscent of a lemon tea from an HK cafe',
  },
  {
    name: 'Strawberry Pandan Corn Milk',
    image: '/menu/strawberry-pandan-corn-milk.png',
    description: 'Strawberry with fresh pandan & corn milk',
  },
  {
    name: 'Mango Osmanthus',
    image: '/menu/mango-osmanthus.png',
    description: 'Osmanthus floral tea with mango',
  },
  {
    name: 'Lychee Grapefruit',
    image: '/menu/lychee-grapefruit.png',
    description: 'Lychee with grapefruit, garnished with a sprig of rosemary',
  },
  {
    name: 'Kiwi Mojito',
    image: '/menu/kiwi-mojito.png',
    description: 'Kiwi with lime, golden cane sugar, and mint',
  },
];

function DrinkGrid({
  drinks,
  showDescription = true,
}: {
  drinks: DrinkItem[];
  showDescription?: boolean;
}) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4 lg:gap-7">
      {drinks.map((drink) => (
        <div key={drink.name} className="flex flex-col">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.12)] lg:rounded-3xl">
            <Image
              src={drink.image}
              alt={drink.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 45vw, 267px"
              className="object-cover"
            />
          </div>
          <h3 className="font-urbanist mt-3 text-center text-xs font-medium tracking-[0.15em] uppercase sm:text-sm lg:text-base">
            {drink.name}
          </h3>
          {showDescription && drink.description && (
            <p className="font-urbanist mt-1 text-center text-xs leading-relaxed text-gray-600 lg:text-sm">
              {drink.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function CtaBanner({ heading }: { heading: string }) {
  return (
    <section className="flex w-full justify-center bg-[#4B4B4B] px-6 py-12 sm:px-10 lg:px-20 lg:py-16">
      <div className="flex w-full max-w-[1160px] flex-col items-center gap-6 text-center">
        <h2 className="font-urbanist text-2xl font-medium text-white italic sm:text-3xl lg:text-[47px] lg:leading-tight">
          {heading}
        </h2>
        <div className="flex flex-row gap-3 sm:gap-4">
          <Button
            bgColor="#FF9500"
            color="#FFFFFF"
            bgColorHovered="#1E1E1E"
            colorHovered="#FFFFFF"
            text="Order Now!"
            path="https://www.urbanritual.co/"
          />
          <Button
            bgColor="#FF9500"
            color="#FFFFFF"
            bgColorHovered="#1E1E1E"
            colorHovered="#FFFFFF"
            text="VISIT US NOW!"
            path="/locations"
          />
        </div>
      </div>
    </section>
  );
}

export default function Menu() {
  return (
    <div>
      {/* Hero */}
      <section className="flex justify-center px-6 pt-10 pb-8 sm:px-10 lg:px-20 lg:pt-[80px] lg:pb-10">
        <FadeIn delay={0.2} stagger={0.15} className="w-full max-w-[1280px]">
          {/* Row 1: "BAY AREA'S MOST" + small image + Order Now button */}
          <div data-animate className="flex items-end gap-4 lg:gap-6">
            <h1 className="font-urbanist text-[32px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[50px] lg:text-[80px]">
              Bay Area&apos;s Most
            </h1>
            <div className="relative hidden h-[120px] w-[100px] shrink-0 overflow-hidden rounded-2xl shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:block lg:h-[173px] lg:w-[135px]">
              <Image
                src="/menu/hero-boba-cup.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100px, 135px"
                className="object-cover"
              />
            </div>
            <div className="ml-auto">
              <Button
                bgColor="#FF9500"
                color="#FFFFFF"
                bgColorHovered="#1E1E1E"
                colorHovered="#FFFFFF"
                text="Order Now!"
                path="https://www.urbanritual.co/"
              />
            </div>
          </div>

          {/* Row 2: "CREATIVE BOBA" */}
          <div data-animate className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 lg:gap-x-6">
            <span className="font-petit text-[36px] leading-[1.2] tracking-[3px] text-[#FF9500] uppercase sm:text-[54px] lg:ml-[180px] lg:text-[90px]">
              Creative
            </span>
            <span className="font-urbanist text-[32px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[50px] lg:text-[80px]">
              Boba
            </span>
          </div>

          {/* Row 3: Blackberry image left + ("& COFFEE DRINKS" + 3-drinks image right) */}
          <div data-animate className="flex items-start gap-4 lg:gap-6">
            <div className="relative mt-2 hidden h-[150px] w-[140px] shrink-0 overflow-hidden rounded-2xl shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:block lg:h-[205px] lg:w-[164px]">
              <Image
                src="/menu/hero-blackberry-drink.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 140px, 164px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-end">
              <h1 className="font-urbanist self-stretch text-right text-[32px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[50px] lg:text-[80px]">
                &amp; coffee drinks
              </h1>
              <div className="relative mt-3 h-[180px] w-full max-w-[440px] overflow-hidden rounded-2xl shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:mt-4 lg:h-[224px]">
                <Image
                  src="/menu/hero-three-drinks.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p data-animate className="font-urbanist mt-10 text-center text-sm leading-relaxed tracking-wide text-black uppercase sm:text-base lg:mt-16 lg:text-lg">
            At Urban Ritual, every drink is crafted with care, creativity, and premium ingredients.
            Explore our menu of signature boba teas, handcrafted coffee, and refreshing pouches
            designed for every craving.
          </p>
        </FadeIn>
      </section>

      {/* Specialities */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <ScrollReveal stagger={0.12} className="w-full max-w-[1160px]">
          <h2 data-animate className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Specialities
          </h2>
          <div data-animate>
            <DrinkGrid drinks={SPECIALITIES} />
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Banner 1 */}
      <CtaBanner heading="Experience Urban Ritual Today!" />

      {/* Everyday Classics */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <ScrollReveal stagger={0.12} className="w-full max-w-[1160px]">
          <h2 data-animate className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Everyday Classics
          </h2>
          <div data-animate>
            <DrinkGrid drinks={EVERYDAY_CLASSICS} showDescription={false} />
          </div>
        </ScrollReveal>
      </section>

      {/* Delivery CTA */}
      <section className="flex w-full justify-center bg-black px-6 py-10 sm:px-10 lg:px-20 lg:py-12">
        <div className="flex w-full max-w-[1160px] flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 lg:gap-12">
          <h2 className="font-urbanist text-2xl font-medium text-white sm:text-3xl lg:text-[36px]">
            We Are Also At
          </h2>
          <div className="flex items-center gap-6 lg:gap-10">
            <Link href="#" className="hover:scale-110 transition-transform duration-200">
              <Image
                src="/logos/ubereats.svg"
                alt="Uber Eats"
                width={95}
                height={95}
                className="h-[60px] w-auto sm:h-[75px] lg:h-[95px]"
              />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform duration-200">
              <Image
                src="/logos/doordash.svg"
                alt="DoorDash"
                width={95}
                height={95}
                className="h-[60px] w-auto sm:h-[75px] lg:h-[95px]"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <ScrollReveal stagger={0.12} className="w-full max-w-[1160px]">
          <h2 data-animate className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Seasonal Specials
          </h2>
          <div data-animate>
            <DrinkGrid drinks={SEASONAL_SPECIALS} />
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Banner 2 */}
      <CtaBanner heading="Skip the Line, Order Ahead!" />

      {/* Desserts */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Desserts
          </h2>
          <div className="max-w-[267px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.12)] lg:rounded-3xl">
              <Image
                src="/menu/baby-brulee.png"
                alt="Baby Brulee"
                fill
                sizes="267px"
                className="object-cover"
              />
            </div>
            <h3 className="font-urbanist mt-3 text-center text-xs font-medium tracking-[0.15em] uppercase sm:text-sm lg:text-base">
              Baby Brulee
            </h3>
            <p className="font-urbanist mt-1 text-center text-xs leading-relaxed text-gray-600 lg:text-sm">
              Creme brulee with boba and torched brulee top all in a dessert form
            </p>
          </div>
        </div>
      </section>

      {/* Merch */}
      <section className="flex justify-center px-6 pb-16 sm:px-10 lg:px-20 lg:pb-24">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Merch
          </h2>
          <div className="max-w-[267px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-[2px_2px_6px_0px_rgba(0,0,0,0.12)] lg:rounded-3xl">
              <Image
                src="/menu/owala-bottle-rose-quartz.png"
                alt="Owala x Urban Ritual Bottle"
                fill
                sizes="267px"
                className="object-cover"
              />
            </div>
            <h3 className="font-urbanist mt-3 text-center text-xs font-medium tracking-[0.15em] uppercase sm:text-sm lg:text-base">
              Owala x Urban Ritual Bottle (Rose Quartz)
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
