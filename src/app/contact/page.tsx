import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../../../components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Urban Ritual Cafe',
  description:
    "Get in touch with Urban Ritual Cafe. Questions about drinks, catering, or locations? Fill out our contact form and we'll get back to you.",
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="flex justify-center px-6 pt-12 pb-10 sm:px-10 lg:px-20 lg:pt-[120px] lg:pb-16">
        <div className="flex w-full max-w-[1294px] items-center justify-center rounded-[30px] bg-[#4B4B4B] py-20 sm:rounded-[40px] lg:rounded-[50px] lg:py-28">
          <div className="text-center">
            <h1 className="font-urbanist text-[48px] font-medium leading-[1.1] tracking-[3px] text-white uppercase sm:text-[80px] lg:text-[123px]">
              CONTACT
            </h1>
            <p className="font-petit mt-2 text-[36px] leading-[1.2] tracking-[3px] text-[#FF9500] lowercase sm:text-[56px] lg:text-[80px]">
              urban ritual
            </p>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <div className="w-full max-w-[1160px]">
          <p className="font-urbanist text-xl leading-[1.5] text-black sm:text-2xl lg:text-[36px]">
            Got questions about our drinks, catering services, or locations? We&apos;d love to hear
            from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex justify-center px-6 sm:px-10 lg:px-20">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-4 text-3xl font-medium leading-[1.5] text-black uppercase sm:text-4xl lg:mb-6 lg:text-[61px]">
            CONTACT
          </h2>
          <p className="font-urbanist mb-12 max-w-[1060px] text-base leading-[1.5] text-black sm:text-lg lg:mb-16 lg:text-[27px]">
            Fill out the form below and our team will get back to you as soon as possible.
            Let&apos;s stay connected—because at Urban Ritual, community is everything.
          </p>

          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-[40px] bg-black lg:rounded-[70px]">
            <div className="flex flex-col lg:flex-row">
              {/* Image side */}
              <div className="relative h-[300px] w-full shrink-0 sm:h-[400px] lg:h-[808px] lg:w-[45%]">
                <Image
                  src="/contact/45dd10da41b52928b072548e6f3eb8ad15a3a0fc.png"
                  alt="Urban Ritual customer enjoying a drink"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              {/* Form side */}
              <div className="px-8 py-10 sm:px-12 lg:px-16 lg:py-14">
                <h3 className="font-urbanist text-3xl text-white lg:text-[47px] lg:leading-[1.5]">
                  Contact Form
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us */}
      <section className="flex justify-center px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <div className="w-full max-w-[1160px]">
          <h2 className="font-urbanist mb-6 text-3xl font-medium leading-[1.5] text-black uppercase sm:text-4xl lg:mb-8 lg:text-[61px]">
            Work With Us
          </h2>
          <p className="font-urbanist max-w-[1060px] text-base leading-[1.5] text-black sm:text-lg lg:text-[27px]">
            Want to join the Urban Ritual team? We&apos;re always looking for passionate people who
            love boba and community. Visit our{' '}
            <Link
              href="https://urbanritualcafe.betterteam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#FF9500] underline"
            >
              Hiring Page
            </Link>{' '}
            to learn more about open positions.
          </p>
        </div>
      </section>
    </div>
  );
}
