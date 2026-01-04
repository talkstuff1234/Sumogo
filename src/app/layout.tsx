"use client";

import "./globals.css";
import "@/styles/tailwind.css";
import "@/styles/custom.css";

// ===============================
// ORIGINAL LAYOUT (COMMENTED)
// ===============================

// import Footer from "@/components/public/layout/Footer";
// import Navbar from "@/components/public/layout/Navbar";
// import CommunityForm from "@/components/public/CommunityForm";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        {/* ===============================
            GENERIC ACCESS ERROR
            =============================== */}
        <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-10 text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">
            401 — Page Not Accessible
          </h1>

          <p className="text-gray-600 mb-6">
            The requested page could not be loaded due to an authorization or
            configuration issue.
          </p>

          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            This may be caused by temporary access restrictions, expired
            credentials, or a server configuration change. Please try again
            later.
          </p>

          <div className="text-xs text-gray-400">
            If you are the site administrator, verify access permissions or
            contact support.
          </div>

          {/* ===============================
              ORIGINAL STRUCTURE (REFERENCE)
              ===============================

              <Navbar />
              <main className="pt-20">
                {children}
              </main>
              <CommunityForm />
              <Footer />

          */}
        </div>
      </body>
    </html>
  );
}
