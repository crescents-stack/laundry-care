/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Logo from "../assets/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LangSwitch from "../assets/lang-switch";
import { usePathname, useRouter } from "next/navigation";
import Bangla from "@/lib/dictionaries/bangla.json";
import English from "@/lib/dictionaries/english.json";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { useTokenProvider } from "@/context/token-provider";

const Navbar = () => {
  const [navStyle, setNavStyle] = useState<Boolean>(false);
  const pathname = usePathname();
  const router = useRouter();
  const { token } = useTokenProvider();

  const dictionary = pathname.includes("/bn") ? Bangla : English;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY < 50) {
          setNavStyle(false);
        } else {
          setNavStyle(true);
        }
      });
    }
  }, []);
  return (
    <nav
      className={`sticky top-0 z-50 transition ease-in-out duration-500  ${
        !navStyle
          ? "bg-[hsl(var(--primary-600))] shadow"
          : "bg-lighter-50 shadow-lg"
      }`}
    >
      <div className="py-1 text-center bg-[hsl(var(--primary-900))] text-white font-bold  animate-pulse">
        Under Maintenance
      </div>
      <div
        className={`flex items-center justify-between gap-10 px-4 md:px-10 container py-2 md:py-4`}
      >
        <Link
          href="/"
          className={`flex items-center gap-2 ${
            !navStyle ? "text-white" : "text-[hsl(var(--primary-600))]"
          }`}
        >
          <Logo
            color={`${
              !navStyle ? "fill-yellow-300" : "fill-[hsl(var(--primary-500))]"
            }`}
            height="50"
            width="50"
          />
          <span
            className={`text-sm sm:text-lg md:text-2xl font-bold ${
              !navStyle ? "text-white" : "text-[hsl(var(--primary-600))]"
            }`}
          >
            {dictionary.navbar.brandName}
          </span>
        </Link>
        <div className="flex items-center justify-end gap-10">
          {dictionary.navbar.links.map((item: any) => {
            const { text, link, id } = item;
            return (
              <div
                key={id}
                // href={`${pathname.includes("/bn") ? "/bn" : "/en"}/${link}`}
                className={`${
                  !navStyle ? "text-white" : "text-[hsl(var(--primary-600))]"
                } hidden lg:block cursor-pointer`}
                onClick={() => {
                  if (id === 0) {
                    localStorage.setItem("theme", "rider");
                  }
                  if (id === 1) {
                    localStorage.setItem("theme", "shop");
                  }
                  setTimeout(() => {
                    router.push(
                      `${pathname.includes("/bn") ? "/bn" : "/en"}/${link}`
                    );
                  }, 0);
                }}
              >
                {text}
              </div>
            );
          })}

          <div className="flex items-center gap-2">
            <LangSwitch
              navStyle={navStyle}
              languages={dictionary.navbar.languageSwitch}
              pathname={pathname}
            />
            {/* <ModeToggle /> */}
            <Link
              href={`${pathname.includes("/bn") ? "/bn" : "/en"}/${
                pathname.includes("/shop")
                  ? "/shop"
                  : pathname.includes("/rider")
                  ? "/rider"
                  : pathname.includes("/admin")
                  ? "/admin"
                  : "user"
              }/${token ? "dashboard" : "auth/login"}`}
            >
              <Button
                className={`${
                  navStyle
                    ? "text-white bg-[hsl(var(--primary-600))]"
                    : "text-[hsl(var(--primary-600))] bg-lighter-50 hover:bg-lighter-200"
                }`}
              >
                {token ? dictionary.navbar.loginT : dictionary.navbar.login}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
