"use client";

import { setTheme } from "@/lib/themes/theme-setter";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = () => {
  const [lang, setLang] = useState("/bn/");
  useEffect(() => {
    if (localStorage) {
      setLang(
        (localStorage.getItem("lang") ? localStorage.getItem("lang") : "/bn/")!
      );
    }
  }, []);

  return (
    <>
      <div className="min-h-[40vh]">
        <div className="p-10 container section-padding flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
          {Links.map((item: any) => {
            const { id, text, link, color } = item;
            return (
              <Link
                key={id}
                href={`${lang}${link}`}
                className={`px-20 py-10 rounded-md font-bold text-xl mg:text-2xl ${color} text-white hover:opacity-[90%]`}
                onClick={() => {
                  setTheme(link, undefined, undefined);
                  if (localStorage) {
                    localStorage.setItem("theme", link);
                  }
                }}
              >
                {text}
              </Link>
            );
          })}
        </div>
        <div className="container section-padding">
          Occaecat est ea esse officia cillum eiusmod voluptate ea proident sit.
          Incididunt nostrud pariatur veniam id veniam commodo est quis. Sit
          labore nulla dolor minim tempor et ad quis. Minim elit incididunt
          reprehenderit ullamco dolore velit occaecat tempor minim esse. Laborum
          tempor reprehenderit proident consequat nulla. Occaecat est ea esse
          officia cillum eiusmod voluptate ea proident sit. Incididunt nostrud
          pariatur veniam id veniam commodo est quis. Sit labore nulla dolor minim
          tempor et ad quis. Minim elit incididunt reprehenderit ullamco dolore
          velit occaecat tempor minim esse. Laborum tempor reprehenderit proident
          consequat nulla. Occaecat est ea esse officia cillum eiusmod voluptate
          ea proident sit. Incididunt nostrud pariatur veniam id veniam commodo
          est quis. Sit labore nulla dolor minim tempor et ad quis. Minim elit
          incididunt reprehenderit ullamco dolore velit occaecat tempor minim
          esse. Laborum tempor reprehenderit proident consequat nulla.
        </div>
      </div>
    </>

  );
};


export default Home;
const Links = [
  {
    id: 0,
    text: "User",
    link: "user",
    color: "bg-user-600",
  },
  {
    id: 1,
    text: "Rider",
    link: "rider",
    color: "bg-rider-600",
  },
  {
    id: 2,
    text: "Shop",
    link: "shop",
    color: "bg-shop-600",
  },
  {
    id: 3,
    text: "Admin",
    link: "admin",
    color: "bg-admin-600",
  },
];
