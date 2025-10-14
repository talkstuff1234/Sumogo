"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/public/Home" },
    { name: "About", href: "/public/About" },
    { name: "Properties", href: "/public/Properties" },
    { name: "Services", href: "/public/Services" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Desktop Navbar */}
      <div className="flex justify-between items-center mx-auto max-w-[1200px] px-5 py-5">
        {/* Logo */}
        <div className="text-white font-bold text-lg">
          <Link href="/public/Home">Logo</Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition px-3 py-2 rounded-lg ${
                  pathname === link.href
                    ? "bg-green-500 text-white"
                    : "hover:outline hover:outline-green-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block px-5 py-2 rounded-lg bg-green-500 text-white">
          Contact Us
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <i
            className={`bx text-3xl transition-all duration-200 ${
              isOpen ? "bx-x" : "bx-menu"
            }`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)} // closes on click
                className={`block px-3 py-2 rounded-lg ${
                  pathname === link.href
                    ? "bg-green-500"
                    : "hover:outline hover:outline-green-500"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <button className="w-full text-white py-2 rounded-lg bg-green-500">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
