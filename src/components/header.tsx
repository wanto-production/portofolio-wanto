'use client'
import icon from "@/assets/favicon.png";
import { FaBars, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image"

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl flex flex-col items-center z-50">
      {/* Floating Bar */}
      <div className="w-full h-[60px] flex items-center justify-between px-6 
                  bg-[#0c0c0c]/80 backdrop-blur-md border border-gray-700 
                  rounded-2xl shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={icon} alt="icon" className="h-[36px] w-auto" />
          <span className="hidden sm:inline font-poppins font-semibold text-white">
            Ikhwan Satrio
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-inter text-gray-300 text-sm">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Github Button (Desktop) */}
        <a
          href="https://github.com/wanto-production"
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl 
                 bg-gradient-to-r from-blue-600 to-purple-600 text-white 
                 font-medium hover:opacity-90 transition"
        >
          <FaGithub />
          Github
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-center text-gray-300 hover:text-white"
          onClick={() => setOpen(prev => !prev)}
        >
          {isOpen ? (
            <FaXmark />
          ) : (
            <FaBars />
          )}
        </button>
      </div>


      {/* Mobile Nav (Dropdown card style) */}
      <div
        className={`md:hidden absolute top-[72px] left-1/2 -translate-x-1/2 w-[90%] 
          bg-[#0c0c0c]/95 backdrop-blur-md border border-gray-700 
          rounded-2xl shadow-lg flex flex-col items-center gap-4 py-6 
          transition-all duration-300 z-40
          ${isOpen
            ? "opacity-100 scale-100 visible pointer-events-auto"
            : "opacity-0 scale-95 invisible pointer-events-none"
          }`}
      >
        <Link href="/" className="text-gray-300 hover:text-white font-medium">Home</Link>
        <Link href="/about" className="text-gray-300 hover:text-white font-medium">About</Link>
        <Link href="/projects" className="text-gray-300 hover:text-white font-medium">Projects</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white font-medium">Contact</Link>
        <Link
          href="https://github.com/wanto-production"
          target="_blank"
          className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r 
           from-blue-600 to-purple-600 text-white font-medium 
           hover:opacity-90 transition"
        >
          <FaGithub />
          Github
        </Link>
      </div>
    </header>
  );
};
