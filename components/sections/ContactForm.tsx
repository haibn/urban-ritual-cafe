'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@urbanritualcafe.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex w-full flex-col justify-center bg-black p-8 text-white lg:w-1/2 lg:p-16">
      <h3 className="font-urbanist mb-8 text-2xl font-light tracking-wide lg:mb-10 lg:text-[42px]">
        Contact Form
      </h3>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 lg:gap-8">
        <div>
          <label className="font-nunito mb-2 block text-sm text-gray-200">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="h-[48px] w-full rounded-full bg-white px-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="font-nunito mb-2 block text-sm text-gray-200">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="h-[48px] w-full rounded-full bg-white px-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="font-nunito mb-2 block text-sm text-gray-200">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="h-[48px] w-full rounded-full bg-white px-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
            required
          />
        </div>
        <div className="flex-1">
          <label className="font-nunito mb-2 block text-sm text-gray-200">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="h-[160px] w-full resize-none rounded-2xl bg-white p-5 text-lg text-black focus:ring-2 focus:ring-[#FF9500] focus:outline-none"
            required
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="font-urbanist inline-block rounded-xl px-6 py-3 font-semibold tracking-widest drop-shadow-2xl transition-colors duration-300"
            style={{
              backgroundColor: isHovered ? 'white' : '#FF9500',
              color: isHovered ? 'black' : '#FFFFFF',
              fontSize: 'clamp(14px, 1.5vw, 20px)',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
