'use client';

import { useState } from 'react';

export default function HomeContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@urbanritualcafe.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="w-full py-16 md:py-20">
      {/* Header text - two column */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 md:flex-row md:items-start md:gap-10 md:px-10 lg:px-16">
        <div className="flex-1">
          <h2 className="font-nunito text-3xl font-medium leading-tight text-black md:text-[50px] md:leading-[1.2] md:tracking-[-0.5px]">
            Have questions, feedback, or ideas? We&apos;d love to hear from you!
          </h2>
        </div>
        <div className="flex-1">
          <p className="font-nunito text-lg leading-relaxed text-black md:text-[32px] md:leading-[1.5] md:tracking-[-0.32px]">
            Fill out the form below and our team will get back to you as soon as possible.
            Let&apos;s stay connected—because at Urban Ritual, community is everything.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mx-auto mt-12 max-w-[1060px] px-6 md:mt-16 md:px-10 lg:px-0">
        <div className="relative overflow-hidden rounded-[40px] bg-black px-8 py-12 md:rounded-[70px] md:px-16 md:py-16">
          <h3 className="font-urbanist text-3xl text-white md:text-[47px] md:leading-[1.5]">
            Contact Form
          </h3>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="font-nunito mb-2 block text-lg text-white md:text-[21px] md:tracking-[-0.21px]">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="h-[47px] w-full max-w-[440px] rounded-[15px] border border-[#4B4B4B] bg-white px-4 shadow-[0_0_18px_rgba(0,0,0,0.25)] outline-none"
                required
              />
            </div>

            <div>
              <label className="font-nunito mb-2 block text-lg text-white md:text-[21px] md:tracking-[-0.21px]">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="h-[47px] w-full max-w-[440px] rounded-[15px] border border-[#4B4B4B] bg-white px-4 shadow-[0_0_18px_rgba(0,0,0,0.25)] outline-none"
                required
              />
            </div>

            <div>
              <label className="font-nunito mb-2 block text-lg text-white md:text-[21px] md:tracking-[-0.21px]">
                Subject:
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-[47px] w-full max-w-[440px] rounded-[15px] border border-[#4B4B4B] bg-white px-4 shadow-[0_0_18px_rgba(0,0,0,0.25)] outline-none"
                required
              />
            </div>

            <div>
              <label className="font-nunito mb-2 block text-lg text-white md:text-[21px] md:tracking-[-0.21px]">
                Message:
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="h-[203px] w-full max-w-[440px] resize-none rounded-[20px] border border-[#4B4B4B] bg-white px-4 py-3 shadow-[0_0_18px_rgba(0,0,0,0.25)] outline-none"
                required
              />
            </div>

            <div className="flex justify-end" style={{ maxWidth: '440px' }}>
              <button
                type="submit"
                className="font-nunito rounded-[15px] bg-[#FF9500] px-6 py-2.5 text-lg font-medium tracking-widest text-white shadow-[3px_3px_7px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#1E1E1E] md:text-[23px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
