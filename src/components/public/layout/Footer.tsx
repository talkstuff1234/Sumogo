import React from "react";
import Image from "next/image";
import instagram from "@/assets/icons/instagram.svg";
import facebook from "@/assets/icons/facebook-02.svg";
import twitter from "@/assets/icons/new-twitter.svg";
import linkedin from "@/assets/icons/linkedin-02.svg";
import logo from "@/assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-white text-center py-10 px-5" id="contact">
      <div className="flex justify-center mb-4">
        <Image
          src={logo} 
          alt="DeSumogo Logo"
          width={180}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Tagline */}
      <p className="text-foundation-secondary-s100 mb-8 text-sm">
        Stay connected. Stay nourished.
      </p>

      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-8 text-foundation-secondary-200 text-sm font-medium">
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
      <div className="flex justify-center gap-6 mb-6  text-xl">
        <a href="#" className=" bg-background-link p-1 rounded-lg transition">
          <Image src={instagram} height={20} width={20} alt="duhh" />
        </a>
        <a href="#" className=" bg-background-link p-1 rounded-lg  transition">
          <Image src={facebook} height={20} width={20} alt="duhh" />
        </a>
        <a href="#" className=" bg-background-link p-1 rounded-lg  transition">
          <Image src={twitter} height={20} width={20} alt="duhh" />
        </a>
        <a href="#" className=" bg-background-link p-1 rounded-lg transition">
          <Image src={linkedin} height={20} width={20} alt="duhh" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-2 mb-6 text-foundation-secondary-s200 text-sm">
        <div className="flex items-center gap-2">
          <i className="bx bx-envelope"></i>
          <span>info@sumogolimited.com</span>
        </div>
        <div className="flex items-center gap-2 text-center justify-center">
          <i className="bx bx-map"></i>
          <span>
            No. 4 Sefadu Close, Off Adetokunbo Ademola Crescent, Wuse 2, Abuja,
            Nigeria
          </span>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-foundation-secondary-s100 text-xs">
        © {new Date().getFullYear()} Sumogo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
