"use client";
import "./globals.css";
import "@/styles/tailwind.css";
import "@/styles/custom.css";
import Footer from "@/components/public/layout/Footer";
import Navbar from "@/components/public/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
