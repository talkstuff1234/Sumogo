// src/app/(admin)/layout.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    if (role !== "admin") {
      router.push("/login");
    }
  }, [router]);

  return <>{children}</>;
}
