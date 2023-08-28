/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import Logo from "../assets/logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [navStyle, setNavStyle] = useState(true);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        console.log(window.scrollY)
        if (window.scrollY < 300) {
          setNavStyle(false);
        } else {
          setNavStyle(true);
        }
      });
    }
  }, []);
  return (
    <nav
      className={`sticky top-0 transition ease-in-out duration-500 ${
        !navStyle ? "bg-user-500" : "bg-lighter-50"
      }`}
    >
      <div
        className={`flex items-center justify-between gap-10 px-10 container ${
          !navStyle ? "py-8" : "py-5"
        }`}
      >
        <div
          className={`text-2xl font-bold flex items-center gap-2 ${
            !navStyle ? "text-lighter-50" : "text-user-500"
          }`}
        >
          <Logo />
          Laundry Care
        </div>
        <div>
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
