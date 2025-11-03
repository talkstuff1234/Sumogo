"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Products", href: "#products" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
            <Image
              src={logo}
              alt="DeSumogo Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center justify-center gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-800 hover:text-green-700 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[250px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-800 hover:text-green-700 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-full transition-all duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
