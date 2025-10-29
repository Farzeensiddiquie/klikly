"use client";

import BackgroundEffects from '@/components/BackgroundEffects';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const whatsappNumber = "+923096726374";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <>
      <div className="flex flex-col min-h-screen mb-10 relative text-white">
        <BackgroundEffects />

        {/* NavBar */}
        <div className="flex justify-center">
          <NavBar />
        </div>

        {/* Main Section */}
        <div className="flex justify-center items-center md:mt-20 px-4 md:px-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl w-full">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col justify-center items-center bg-gradient-to-b border border-[#1f3a29]/50 from-black/10 via-[#051d13]/60 to-black/10 rounded-2xl w-full md:w-1/2 p-6 md:p-10"
            >
              <p className="text-3xl font-bold font-mono text-center mb-8">Contact Us</p>

              <input
                type="text"
                placeholder="Your Name"
                className="w-full md:w-4/5 mb-5 p-3 rounded-lg bg-black/20 border border-[#1f3a29]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#01ff83]/50 transition-all duration-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-4/5 mb-5 p-3 rounded-lg bg-black/20 border border-[#1f3a29]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#01ff83]/50 transition-all duration-300"
              />

              <textarea
                placeholder="Your Message"
                className="w-full md:w-4/5 mb-5 p-3 rounded-lg bg-black/20 border border-[#1f3a29]/50 text-white focus:outline-none focus:ring-2 focus:ring-[#01ff83]/50 transition-all duration-300 h-32 resize-none"
              />

              <button className="cursor-pointer hover:bg-[#01ff83]/40 text-white font-semibold py-2 px-6 rounded-lg border border-[#1f3a29]/50 hover:border-[#01ff83]/70 transition-all duration-300">
                Send Message
              </button>

              {/* OR Divider */}
              <div className="flex items-center w-full md:w-4/5 my-5">
                <hr className="flex-grow border border-[#1f3a29]/50" />
                <span className="mx-3 text-[#01ff83]/80 font-semibold">OR</span>
                <hr className="flex-grow border border-[#1f3a29]/50" />
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer flex gap-3 bg-[#20974c] hover:bg-[#1ebe57] text-white font-semibold py-2 px-6 rounded-lg border border-[#1f3a29]/50 transition-all duration-300"
              >
                Contact via WhatsApp
                <Image src={'/images/whatsapp.png'} width={30} alt='whatsapp' height={30}/>
              </a>
            </motion.div>

            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/contact.png"
                width={500}
                height={500}
                priority
                className="h-auto object-cover z-[1000] object-right"
                alt="contact"
              />
            </div>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
    </>
  );
}
