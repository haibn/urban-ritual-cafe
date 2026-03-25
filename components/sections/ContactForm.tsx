'use client';

import { useState } from 'react';

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label className="font-nunito mb-2 block text-lg text-white lg:text-[21px] lg:tracking-[-0.21px]">
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
        <label className="font-nunito mb-2 block text-lg text-white lg:text-[21px] lg:tracking-[-0.21px]">
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
        <label className="font-nunito mb-2 block text-lg text-white lg:text-[21px] lg:tracking-[-0.21px]">
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
        <label className="font-nunito mb-2 block text-lg text-white lg:text-[21px] lg:tracking-[-0.21px]">
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
          className="font-nunito rounded-[15px] bg-[#FF9500] px-6 py-2.5 text-lg font-medium tracking-widest text-white shadow-[3px_3px_7px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-[#1E1E1E] lg:text-[23px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
