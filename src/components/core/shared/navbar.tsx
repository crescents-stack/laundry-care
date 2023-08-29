/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Logo from "../assets/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const [navStyle, setNavStyle] = useState<Boolean>(false);

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

  const NavItems = [
    {
      id: 0,
      text: "How it works",
      link: "#howitworks",
    },
    {
      id: 1,
      text: "Services & Prices",
      link: "#services&prices",
    },
    {
      id: 2,
      text: "About",
      link: "#about",
    },
  ];
  return (
    <nav
      className={`sticky top-0 z-50 transition ease-in-out duration-500  ${
        !navStyle ? "bg-user-500 shadow" : "bg-lighter-50 shadow-lg"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-10 px-10 container py-4`}
      >
        <div
          className={`text-2xl font-bold flex items-center gap-2 ${
            !navStyle ? "text-lighter-50" : "text-user-500"
          }`}
        >
          <Logo
            color={`${!navStyle ? "fill-yellow-300" : "fill-user-500"}`}
            height="50"
            width="50"
          />
          Laundry Care
        </div>
        <div className="flex items-center justify-end gap-10">
          {NavItems.map((item) => {
            const { text, link, id } = item;
            return (
              <Link
                key={id}
                href={link}
                className={`${
                  !navStyle ? "text-lighter-50" : "text-user-500"
                } hidden lg:block`}
              >
                {text}
              </Link>
            );
          })}
          <Button
            className={`${
              navStyle
                ? "text-lighter-50 bg-user-500"
                : "text-user-500 bg-lighter-50 hover:bg-lighter-200"
            }`}
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
