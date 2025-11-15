"use client";
import { assets } from "@/assets/assets";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div
        className="min-h-[500px] p-6 w-full bg-[#012D12] flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.images.map.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full px-3">
          <div className="text-center flex flex-col justify-center items-center ">
            <Button className="py-3 px-3 h-6 flex items-center justify-center">
              Partner with us
            </Button>
            <h1 className="font-bold text-white text-2xl md:text-4xl mt-3">
              Contact / Partner <span className="text-[#04AA42]">With Us</span>
            </h1>
            <p className="text-white max-w-[800px] mt-6">
              Let’s grow together. Whether you’re a distributor, importer,
              retailer, or investor, Sumogo is your trusted link to Africa’s
              thriving fresh and processed agro-export sector.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-3 justify-between w-full max-w-[1000px] mt-8 mx-auto px-3">
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0d3a26] bg-opacity-60 backdrop-blur-sm border border-white/30">
                <Image
                  width={30}
                  height={30}
                  src={assets.icons.mails.src}
                  alt="mails"
                />
              </div>
              <div className="text-center mt-1 text-white">
                <h1>Email address</h1>
                <p>info@sumogo.com</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0d3a26] bg-opacity-60 backdrop-blur-sm border border-white/30">
                <Image
                  width={30}
                  height={30}
                  src={assets.icons.call.src}
                  alt="mails"
                />
              </div>
              <div className="text-center mt-1 text-white ">
                <h1>Phone</h1>
                <p>+234-8130-4669-95</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#0d3a26] bg-opacity-60 backdrop-blur-sm border border-white/30">
                <Image
                  width={30}
                  height={30}
                  src={assets.icons.location.src}
                  alt="mails"
                />
              </div>
              <div className="text-center mt-1 text-white">
                <h1>Office Address</h1>
                <p>Idu Industrial Layout, Citec, Abuja</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full flex flex-col items-center py-16 px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#002E12] text-center">
          Send Us a Message
        </h2>
        <p className="text-[#474747] mt-2 text-center">
          We are going to get back to you within 24 hours
        </p>

        {/* Form container */}
        <div className="mt-10 w-full max-w-3xl bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#A4A4A4] outline-none focus:ring-2 focus:ring-green-600/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#A4A4A4] outline-none focus:ring-2 focus:ring-green-600/50"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#A4A4A4] outline-none focus:ring-2 focus:ring-green-600/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#414141]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#A4A4A4] outline-none focus:ring-2 focus:ring-green-600/50"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-[#414141]">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                className="mt-1 w-full rounded-full border border-gray-200 py-3 px-4 text-[#A4A4A4] outline-none focus:ring-2 focus:ring-green-600/50"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#414141]">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Enter message"
                className="mt-1 w-full rounded-xl border border-gray-200 py-3 px-4 text-[#A4A4A4] outline-none resize-none focus:ring-2 focus:ring-green-600/50"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-medium py-3 rounded-full hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
