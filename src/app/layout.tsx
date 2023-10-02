"use client";

import "@/app/globals.scss";
import "@/components/core/assets/backgrounds/wave/wave.scss";

import { Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/core/shared/navbar";
import Footer from "@/components/core/assets/footer";
import ContextWrapper from "@/context/context-wrapper";
import { useEffect } from "react";
import { setTheme } from "@/lib/themes/theme-setter";
import { usePathname, useRouter } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (localStorage) {
        const themeLS = localStorage.getItem("theme");
        themeLS && setTheme(themeLS, undefined, undefined);
        const lang = localStorage.getItem("lang");
        if (lang) {
          let tempPathname = window.location.href;
          tempPathname = tempPathname.replace("/en/", lang!);
          tempPathname = tempPathname.replace("/bn/", lang!);
          router.push(tempPathname);
        }
      }
    }, 0);
  }, []);
  return (
    <html lang="en" id="customThemes">
      <body className={hindSiliguri.className}>
        <ContextWrapper>
          <>
            {pathname === "/" ||
            pathname.includes("/register") ||
            pathname.includes("/login") ||
            pathname.includes("/reset-password") ||
            pathname.includes("/forget-password") ||
            pathname.includes("/verification") ? null : (
              <Navbar />
            )}
            {children}
            <Toaster />
            {pathname === "/" ||
            pathname.includes("/register") ||
            pathname.includes("/login") ||
            pathname.includes("/reset-password") ||
            pathname.includes("/forget-password") ||
            pathname.includes("/verification") ? null : (
              <Footer />
            )}
          </>
        </ContextWrapper>
      </body>
    </html>
  );
}
