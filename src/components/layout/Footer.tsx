import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#f8fbf8] text-center py-10 px-6 border-t border-gray-100">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/logo-sumogo.png" // 🟢 replace with your logo file path
          alt="DeSumogo Logo"
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Tagline */}
      <p className="text-gray-700 mb-8 text-sm">
        Stay connected. Stay nourished.
      </p>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-8 text-gray-800 text-sm font-medium">
        <a href="#" className="hover:text-green-700 transition">
          Home
        </a>
        <a href="#" className="hover:text-green-700 transition">
          About Us
        </a>
        <a href="#" className="hover:text-green-700 transition">
          Shop
        </a>
        <a href="#" className="hover:text-green-700 transition">
          Blog
        </a>
        <a href="#" className="hover:text-green-700 transition">
          Contact Us
        </a>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6 text-gray-600 text-xl">
        <a href="#" className="hover:text-green-700 transition">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" className="hover:text-green-700 transition">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" className="hover:text-green-700 transition">
          <i className="bx bxl-xing"></i>
        </a>
        <a href="#" className="hover:text-green-700 transition">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2 mb-6 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <i className="bx bx-envelope text-green-700"></i>
          <span>info@sumogolimited.com</span>
        </div>
        <div className="flex items-center gap-2 max-w-[320px] text-center justify-center">
          <i className="bx bx-map text-green-700"></i>
          <span>
            No. 4 Sefadu Close, Off Adetokunbo Ademola Crescent, Wuse 2, Abuja,
            Nigeria
          </span>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Sumogo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
