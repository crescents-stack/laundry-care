/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Logo from "../assets/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LangSwitch from "../assets/lang-switch";
import { usePathname } from "next/navigation";
import Bangla from "@/lib/dictionaries/bangla.json";
import English from "@/lib/dictionaries/english.json";

const Navbar = () => {
  const [navStyle, setNavStyle] = useState<Boolean>(false);
  const pathname = usePathname();

  const dictionary = pathname.includes("/bn") ? Bangla : English;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        console.log(navStyle);
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
        !navStyle ? "bg-user-600 shadow" : "bg-lighter-50 shadow-lg"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-10 px-4 md:px-10 container py-2 md:py-4`}
      >
        <Link
          href={pathname.includes("/bn") ? "/bn" : "/en"}
          className={`text-lg md:text-2xl font-bold flex items-center gap-2 ${
            !navStyle ? "text-white" : "text-user-600"
          }`}
        >
          <Logo
            color={`${!navStyle ? "fill-yellow-300" : "fill-user-500"}`}
            height="50"
            width="50"
          />
          {dictionary.navbar.brandName}
        </Link>
        <div className="flex items-center justify-end gap-10">
          {dictionary.navbar.links.map((item: any) => {
            const { text, link, id } = item;
            return (
              <Link
                key={id}
                href={link}
                className={`${
                  !navStyle ? "text-white" : "text-user-600"
                } hidden lg:block`}
              >
                {text}
              </Link>
            );
          })}
          <LangSwitch
            navStyle={navStyle}
            languages={dictionary.navbar.languageSwitch}
            pathname={pathname}
          />
          <Button
            className={`${
              navStyle
                ? "text-white bg-user-600"
                : "text-user-600 bg-lighter-50 hover:bg-lighter-200"
            }`}
          >
            {dictionary.navbar.login}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
