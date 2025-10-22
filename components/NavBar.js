"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import localFont from "next/font/local";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// Load your local font
const roboto = localFont({
  src: "../public/BruceForeverRegular-X3jd2.ttf",
  display: "swap",
  variable: "--font-roboto",
});

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#024f27]/60 md:border-t-2 md:border-[#00622b] backdrop-blur-sm shadow-2xl w-full h-14 md:rounded-3xl max-w-280 relative lg:top-5 flex items-center justify-between px-6 z-50">
      {/* Left Logo */}
      <div className={`flex items-center gap-3 ${roboto.className}`}>
        <div className="bg-[#0F2815] w-9 h-9 flex items-center justify-center rounded-full text-2xl">
          K
        </div>
        <div className="text-xl tracking-wide">KLIKLY</div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/" className="hover:text-[#58E877] transition">Home</Link>
          <Link href="/portfolio" className="hover:text-[#58E877] transition">Portfolio</Link>
          <Link href="/about" className="hover:text-[#58E877] transition">About</Link>
          <Link href="/services" className="hover:text-[#58E877] transition">Services</Link>
          
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden z-50 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop "Get Started" */}
        <Link href="/contact" className={`hidden md:block bg-[#01ff83] ${roboto.className} text-[#0f1a11] px-4 py-2 rounded-full hover:text-[#021205be] transition`}>
          Contact Us
        </Link>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-full sm:w-[70%] md:w-[50%] bg-black/70 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white z-40"
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-[#58E877] transition">
              Home
            </Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-[#58E877] transition">
              Portfolio
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-[#58E877] transition">
              About
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)} className="text-2xl hover:text-[#58E877] transition">
              Services
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              href="/contact"
              className={`bg-[#01ff83] ${roboto.className} text-[#002707] px-5 py-2 rounded-full text-lg transition`}
            >
              Contact us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
