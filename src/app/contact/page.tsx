import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../../../components/sections/ContactForm';
import FadeIn from '../../../components/motion/FadeIn';
import ScrollReveal from '../../../components/motion/ScrollReveal';

export const metadata: Metadata = {
  title: 'Contact | Urban Ritual Cafe',
  description:
    "Get in touch with Urban Ritual Cafe. Questions about drinks, catering, or locations? Fill out our contact form and we'll get back to you.",
};

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="flex justify-center px-6 pt-12 pb-10 sm:px-10 lg:px-20 lg:pt-[60px] lg:pb-16">
        <FadeIn delay={0.2} stagger={0.15} className="flex h-[300px] w-full max-w-[1294px] items-center justify-center rounded-[30px] bg-[#4B4B4B] sm:h-[400px] sm:rounded-[40px] lg:h-[686px] lg:rounded-[50px]">
          <div className="text-center">
            <h1 data-animate className="font-urbanist text-[48px] leading-[1.1] font-medium tracking-[3px] text-white uppercase sm:text-[80px] lg:text-[123px]">
              CONTACT
            </h1>
            <p data-animate className="font-petit mt-2 text-[36px] leading-[1.2] tracking-[3px] text-[#FF9500] lowercase sm:text-[56px] lg:text-[80px]">
              urban ritual
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Intro Text */}
      <section className="flex justify-center px-6 py-10 sm:px-10 lg:px-20 lg:py-16">
        <ScrollReveal className="w-full max-w-[1160px]">
          <p className="font-urbanist text-xl leading-[1.5] text-black sm:text-2xl lg:text-[36px]">
            Got questions about our drinks, catering services, or locations? We&apos;d love to hear
            from you.
          </p>
        </ScrollReveal>
      </section>

      {/* Contact Section */}
      <section className="flex justify-center px-6 sm:px-10 lg:px-20">
        <ScrollReveal stagger={0.12} className="w-full max-w-[1160px]">
          <h2 data-animate className="font-urbanist mb-4 text-3xl leading-[1.5] font-medium text-black uppercase sm:text-4xl lg:mb-6 lg:text-[61px]">
            CONTACT
          </h2>
          <p data-animate className="font-urbanist mb-12 max-w-[1060px] text-base leading-[1.5] text-black sm:text-lg lg:mb-16 lg:text-[27px]">
            Fill out the form below and our team will get back to you as soon as possible.
            Let&apos;s stay connected—because at Urban Ritual, community is everything.
          </p>

          {/* Contact Form */}
          <div data-animate className="flex h-auto w-full flex-col overflow-hidden rounded-2xl border border-gray-100 shadow-2xl lg:h-[800px] lg:flex-row lg:rounded-[3rem]">
            {/* Left Image - hidden on mobile */}
            <div className="relative hidden h-full bg-white lg:block lg:w-1/2">
              <Image
                src="/contact/customer-enjoying-drink.png"
                alt="Urban Ritual customer enjoying a drink"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Right Form */}
            <ContactForm />
          </div>
        </ScrollReveal>
      </section>

      {/* Work With Us */}
      <section className="flex justify-center px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <ScrollReveal stagger={0.12} className="w-full max-w-[1160px]">
          <h2 data-animate className="font-urbanist mb-6 text-3xl leading-[1.5] font-medium text-black uppercase sm:text-4xl lg:mb-8 lg:text-[61px]">
            Work With Us
          </h2>
          <p data-animate className="font-urbanist max-w-[1060px] text-base leading-[1.5] text-black sm:text-lg lg:text-[27px]">
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
        </ScrollReveal>
      </section>
    </div>
  );
}
