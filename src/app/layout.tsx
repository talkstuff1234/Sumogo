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
      <body
        style={{
          minHeight: "100vh",
          backgroundColor: "#f9fafb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        {/* ===============================
            TEMPORARY SERVICE NOTICE
            =============================== */}
        <div
          style={{
            maxWidth: "760px",
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "3.5rem",
            borderRadius: "16px",
            boxShadow: "0 14px 35px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.3rem",
              fontWeight: 600,
              marginBottom: "1.2rem",
            }}
          >
            Website Temporarily Unavailable
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#4b5563",
              marginBottom: "1.6rem",
            }}
          >
            This website is currently offline due to an unresolved contractual
            matter related to its development and deployment.
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              color: "#6b7280",
              marginBottom: "2.2rem",
              lineHeight: 1.6,
            }}
          >
            Access to the full platform will be restored once the outstanding
            obligations required for continued service are fulfilled.
          </p>

          <p
            style={{
              fontSize: "0.85rem",
              color: "#9ca3af",
            }}
          >
            If you are the site owner or an authorized representative, please
            contact the developer directly to resolve this matter.
          </p>

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
