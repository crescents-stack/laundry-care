"use client";

import Logo from "@/components/core/assets/logo";
import { setTheme } from "@/lib/themes/theme-setter";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Bangla from "@/lib/dictionaries/bangla.json";
import English from "@/lib/dictionaries/english.json";

const Home = () => {
  const [lang, setLang] = useState("/bn/");
  const pathname = usePathname();
  useEffect(() => {
    if (localStorage) {
      setLang(
        (localStorage.getItem("lang") ? localStorage.getItem("lang") : "/bn/")!
      );
    }
  }, []);

  const dictionary = pathname.includes("/bn") ? Bangla : English;

  return (
    <>
      <div className="bg-primary min-h-[100vh]">
        <div className="section-padding container text-center md:text-2xl flex flex-col items-center justify-center gap-10">
          <h1 className="text-white flex items-center gap-2">
            <Logo color={`fill-white`} height="50" width="50" />
            <span className="text-white text-2xl sm:text-3xl md:text-5xl font-bold">
              {dictionary.navbar.brandName}
            </span>
          </h1>
          <p className="text-white">
            We, Laundry Care, dedicated group of people working for goodness and
            make easier to manage laundry services in Bashundhara Residential
            Area. Any shop can join us to provide services and anybody can be a
            Rider Partner with us. We are making a HUB that will connect all the
            Laundry services provider around the Residential Area. Our rider
            patner wil collect and deliver the laundry from door to shop and
            vice versa. In terms of cost & benefit, each entity will be
            benefited consider monetery cost, time cost and overall effort cost.
            We are minimizing the hassle and ensuring top notch services from
            the perspective of individual user, service provider and rider
            partners. Let&apos;s make a better network.
          </p>
        </div>
        <div className="bg-white">
          <div className="p-10 container section-padding flex flex-col md:flex-row flex-wrap items-center justify-center gap-10">
            {Links.map((item: any) => {
              const { id, text, link, color } = item;
              return (
                <Link
                  key={id}
                  href={`${lang}${link}`}
                  className={`px-20 py-4 rounded-md font-bold text-xl mg:text-2xl ${color} text-white hover:opacity-[90%]`}
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
