import Image from 'next/image';
import type { Metadata } from 'next';
import Button from '../../../components/ui/Button';

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
    image: '/menu/1893a2c70bafdcbc01026213f48b80baed6c5cc1.png',
    description:
      'House blend of black teas with house cream. Creamy, malty and roasted flavor notes.',
  },
  {
    name: 'Creme Brulee',
    image: '/menu/e25043030b6ff7e06e4b242adfae942e40b61230.png',
    description:
      'Housemade creme brûlée, honey boba, classic milk topped with crackling torched raw sugar.',
  },
  {
    name: 'Creme Brulee Milk Tea',
    image: '/menu/3150737d88bbaf9fe84deff0574762ca9de27b70.png',
    description:
      "A combination of our famous Creme Brulee with our House Milk Tea--it's the best of both worlds.",
  },
  {
    name: 'Matcha Toffee',
    image: '/menu/2bf3f0d29e1b3bbc895b1abd616a29d91cd80a8e.png',
    description: 'Matcha green tea with classic milk and bite-sized housemade toffee brittle.',
  },
  {
    name: 'Strawberry Milk Bar',
    image: '/menu/de4a0a68763ae7697a33f2a3219d8c6afdb7379a.png',
    description: 'Classic milk with housemade strawberry syrup.',
  },
  {
    name: 'Mango Sticky Rice',
    image: '/menu/9fd68bac6864664a0a265adf21bbac6f8275531d.png',
    description: 'Mango with rice milk & coconut milk.',
  },
  {
    name: 'Bae-Sil',
    image: '/menu/664648a8e87fb2f275f2567cc74b26b0d2128361.png',
    description: 'Strawberry basil lemonade with housemade strawberry syrup, basil, and lemon.',
  },
  {
    name: 'White Grape Yuzu',
    image: '/menu/3e798379c7ec00dddac76e9b9afd5eed897cff53.png',
    description: 'White grape oolong with yuzu honey.',
  },
  {
    name: 'Lychee IPA',
    image: '/menu/772738332cdd68cbe7bec2e664fd82e9442de392.png',
    description: 'Housemade NON-ALCOHOLIC version with lychee & citrus hops.',
  },
  {
    name: 'Classic Brew',
    image: '/menu/ef33c3aa3e2c3de71a300f1cadc7f653119b6991.png',
    description: 'Our house milk tea with a shot of cold brew coffee and our special house cream.',
  },
  {
    name: 'The Cloud',
    image: '/menu/a8154e8912661a20ae0372044553fdbc9647ac48.png',
    description:
      'Dark roasted cold brew coffee locally roasted from Cat & Cloud in Santa Cruz. Creamy, sweet with notes of dark chocolate.',
  },
  {
    name: 'Feed Me Ube!',
    image: '/menu/31ca7b49e191ab75081ae41a4bfa75310423eeea.png',
    description:
      'Ube Creme brulee, taro chunks, coconut milk, and a choice of rice milk or whole milk.',
  },
  {
    name: 'Hong Kong Milk Tea',
    image: '/menu/cc1db155c0a2b44af4db165ea858e336ac2c550f.png',
    description:
      'Our take on the Classic Hong Kong Milk Tea. Ours is made with a housemade blend of black teas with evaporated milk. Our tea is steeped and then chilled for maximum strength and flavor.',
  },
  {
    name: 'Black Sesame Rice Ball',
    image: '/menu/efded0881a7ee347ba15e313ce88f15020e08958.png',
    description: 'Drinkable mochi, black sesame, & rice milk.',
  },
];

const EVERYDAY_CLASSICS: DrinkItem[] = [
  { name: 'Matcha Green Tea', image: '/menu/8cc72d86cee9100e41e991b17b41491e129a2949.png' },
  { name: 'White Grape Oolong', image: '/menu/5276559704865181beff1a69fa85045e11c11fb3.png' },
  { name: 'Chrysanthemum Tea', image: '/menu/338c5c8bab8e8aa253f8972b7b37fe822ec262df.png' },
  { name: 'Thai Tea', image: '/menu/7e4c56e78efe5f1d0425682d4c4a01c69cf32c83.png' },
  { name: 'Hibiscus Tea', image: '/menu/1cd3cf1ca2830678736df7d2f9b3802213ff226d.png' },
  { name: 'Jasmine Green Tea', image: '/menu/3c5a8f37ba49d95ed6ebb9a48d14fed677b6e7dc.png' },
  {
    name: 'Honey Oolong (Tie Guan Yin)',
    image: '/menu/f3242d5dfe78b4363eb5a6ead3b11e30cbf9dd13.png',
  },
];

const SEASONAL_SPECIALS: DrinkItem[] = [
  {
    name: 'Lemon Tea',
    image: '/menu/ea9fc81deb66a492ceca2ce1b4108edc070580e6.png',
    description:
      'Tieguanyin oolong tea with lemon and golden cane sugar. Reminiscent of a lemon tea from an HK cafe',
  },
  {
    name: 'Strawberry Pandan Corn Milk',
    image: '/menu/e6f48066fc9dd55f139b93babee46ed2b2605f63.png',
    description: 'Strawberry with fresh pandan & corn milk',
  },
  {
    name: 'Mango Osmanthus',
    image: '/menu/e147bfcacf44bb18b4b3893fdb5acc4735d3f37a.png',
    description: 'Osmanthus floral tea with mango',
  },
  {
    name: 'Lychee Grapefruit',
    image: '/menu/3b56dda3ba04f804e932e2ee0d3b80abee7f2efa.png',
    description: 'Lychee with grapefruit, garnished with a sprig of rosemary',
  },
  {
    name: 'Kiwi Mojito',
    image: '/menu/38deef736530777f6af44a1b1866f98bb6dc4f9e.png',
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
        <div className="w-full max-w-[1280px]">
          {/* Row 1: "BAY AREA'S MOST" + small image + Order Now button */}
          <div className="flex items-end gap-4 lg:gap-6">
            <h1 className="font-urbanist text-[32px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[50px] lg:text-[80px]">
              Bay Area&apos;s Most
            </h1>
            <div className="relative hidden h-[120px] w-[100px] shrink-0 overflow-hidden rounded-2xl shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:block lg:h-[173px] lg:w-[135px]">
              <Image
                src="/menu/bc8050cbfe494e19d63e8fd2fe9f4f0af1700723.png"
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
          <div className="flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 lg:gap-x-6">
            <span className="font-petit text-[36px] leading-[1.2] tracking-[3px] text-[#FF9500] uppercase sm:text-[54px] lg:ml-[180px] lg:text-[90px]">
              Creative
            </span>
            <span className="font-urbanist text-[32px] leading-[1.1] font-medium tracking-[3px] text-black uppercase sm:text-[50px] lg:text-[80px]">
              Boba
            </span>
          </div>

          {/* Row 3: Blackberry image left + ("& COFFEE DRINKS" + 3-drinks image right) */}
          <div className="flex items-start gap-4 lg:gap-6">
            <div className="relative mt-2 hidden h-[150px] w-[140px] shrink-0 overflow-hidden rounded-2xl shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:block lg:h-[205px] lg:w-[164px]">
              <Image
                src="/menu/5f548b9a3b86f78969fd5758e6921cfadd491675.png"
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
              <div className="relative mt-3 h-[140px] w-full max-w-[440px] overflow-hidden rounded-2xl shadow-[3px_3px_7px_0px_rgba(0,0,0,0.25)] sm:mt-4 lg:h-[224px]">
                <Image
                  src="/menu/bc37075af7ee004c20b73aa74d4b49b8426d0336.png"
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 440px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-urbanist mt-10 text-center text-sm leading-relaxed tracking-wide text-black uppercase sm:text-base lg:mt-16 lg:text-lg">
            At Urban Ritual, every drink is crafted with care, creativity, and premium ingredients.
            Explore our menu of signature boba teas, handcrafted coffee, and refreshing pouches
            designed for every craving.
          </p>
        </div>
      </section>

      {/* Specialities */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Specialities
          </h2>
          <DrinkGrid drinks={SPECIALITIES} />
        </div>
      </section>

      {/* CTA Banner 1 */}
      <CtaBanner heading="Experience Urban Ritual Today!" />

      {/* Everyday Classics */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Everyday Classics
          </h2>
          <DrinkGrid drinks={EVERYDAY_CLASSICS} showDescription={false} />
        </div>
      </section>

      {/* Delivery CTA */}
      <section className="flex w-full justify-center bg-black px-6 py-10 sm:px-10 lg:px-20 lg:py-12">
        <div className="flex w-full max-w-[1160px] flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 lg:gap-12">
          <h2 className="font-urbanist text-2xl font-medium text-white sm:text-3xl lg:text-[36px]">
            We Are Also At
          </h2>
          <div className="flex items-center gap-6 lg:gap-10">
            <Image
              src="/logos/ubereats.svg"
              alt="Uber Eats"
              width={95}
              height={95}
              className="h-[60px] w-auto sm:h-[75px] lg:h-[95px]"
            />
            <Image
              src="/logos/doordash.svg"
              alt="DoorDash"
              width={95}
              height={95}
              className="h-[60px] w-auto sm:h-[75px] lg:h-[95px]"
            />
          </div>
        </div>
      </section>

      {/* Seasonal Specials */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-8 text-3xl font-medium tracking-wide text-black uppercase sm:text-4xl lg:mb-10 lg:text-[61px] lg:leading-tight">
            Seasonal Specials
          </h2>
          <DrinkGrid drinks={SEASONAL_SPECIALS} />
        </div>
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
                src="/menu/44a2320f22eb9f37d1007e29812b2b8d0adba9eb.png"
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
                src="/menu/a613f0b7e2f782a5aa55d92bc71e778426647113.png"
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
