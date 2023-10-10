"use client";

import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { setTheme } from "@/lib/themes/theme-setter";
import Image from "next/image";
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

      <div className="container">
        <div className="sm:flex sm:justify-between">
          {/* block1 left */}
          <div className="sm:max-w-[50%] w-[100%] my-[6rem]">

            <h1 className="">Reinventing the future of laundry and dry cleaning</h1>
            <h3 className="mt-5">
              Laundryheap delivers the quickest, easiest to use, and most reliable professional laundry and dry cleaning service that completely adjusts to your needs.
            </h3>
            <p className="mt-3 text-[1.3rem]">
              We collect, clean, and deliver your laundry to your doorstep. When and where you need us, we will be there. 98.7% of all standard laundry and dry cleaning is delivered the next day.
            </p>
          </div>

          {/* block1 right */}
          <div className="sm:flex sm:items-center mt-[-3rem]">
            {/* photo */}
            <div className="flex sm:justify-end justify-center" >
              {/* <img width="80" height="10" className='sm:w-[80%]' src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> */}
              {/* <Image 
              alt="sahith"
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              unoptimized
              width={10}
              height={10}
              /> */}

              <Image
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="sample image"
                loader={({ src, width, quality }) => {
                  const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
                  url.searchParams.append("src", src);
                  url.searchParams.append("w", width + "");
                  url.searchParams.append("q", quality + "");
                  return url.toString();
                }}
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* block2 */}

        <div className="flex justify-around gap-3 mt-8 flex-wrap">
          <div className="border-black border-2 py-10 px-[7rem]">Xyz</div>
          <div className="border-black border-2 py-10 px-[7rem]">Xyz</div>
          <div className="border-black border-2 py-10 px-[7rem]">Xyz</div>
          <div className="border-black border-2 py-10 px-[7rem]">Xyz</div>
        </div>

        {/* block3 */}
        <div className="sm:flex sm:justify-between mt-10">
          {/* block3 left*/}
          <div className="sm:min-w-[50%] flex items-center">
            <div className="sm:max-w-[80%]">
              {/* <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> */}
              <Image
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="sample image"
                loader={({ src, width, quality }) => {
                  const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
                  url.searchParams.append("src", src);
                  url.searchParams.append("w", width + "");
                  url.searchParams.append("q", quality + "");
                  return url.toString();
                }}
                width={600}
                height={400}
              />
            </div>

          </div>

          {/* block3 right */}
          <div className="sm:w-max-[45%] my-10">
            <h1 className="" >Who we are</h1>
            <h3 className="mt-5 text-[1.3rem] ">Founded in 2014 in London, Laundryheap is the next generation laundry & dry cleaning company. We offer professional laundry and dry cleaning delivered to your doorstep in as quick as 24 hours.</h3>

            <h2 className="mt-10">We are available globally</h2>
            <p className="mt-2">Since our beginnings in London, we have expanded globally to 12 countries. Our services are available in the following countries: Ireland, UAE, Bahrain, Qatar, Singapore, Kuwait, United Kingdom, Sweden, Netherlands, France, United States, and Denmark.</p>

            <Link href="/" className="mt-2 font-bold text-blue-900">See All The Locations (this is a link)</Link>

            <h3 className="mt-8 font-bold">We protect our environment </h3>
            <p className="mt-1">Social and environmental sustainability is at the heart of what we do. We are building the largest fleet of electric delivery vehicles and are committed to reducing water, electricity consumption and the amount of packaging.</p>

            <div className="mt-2 text-[1.14rem]">You can read more at our <span>
              <Link className="text-blue-800 font-bold" href="/">
                Sustainability page. (this is a link)
              </Link>
            </span>
            </div>
          </div>
        </div>
        {/* block3 end */}

        {/* Line */}
        <div className="my-[3rem] border-b-[.07rem] border-slate-400"></div>

        {/* block4 */}

        <div className="sm:w-[70%] mx-auto">
          <h2 className="">We're investing into one of the largest fleets of electric delivery vehicles.</h2>
          <div className="text-[4rem] text-center ">"</div>
          <h3 className="text-center text-xl">Amazing! That will become the single largest fleet of trikes/quadricycles in operation! So positive to witness a shift from token orders from companies (look good) to full commercial roll out.</h3>
          <h3 className="text-center text-[1.2rem] mt-5 text-blue-800 font-semibold">FOUNDER OF GREENAER</h3>
        </div>
      </div>

      {/* Block5  big picture */}
      <div className="">
        {/* <img className="sm:w-[100%] my-10" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> */}
        <Image
          className="w-[100%]"
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="sample image"
          loader={({ src, width, quality }) => {
            const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
            url.searchParams.append("src", src);
            url.searchParams.append("w", width + "");
            url.searchParams.append("q", quality + "");
            return url.toString();
          }}
          width={600}
          height={400}
        />
      </div>

      <div className="container mt-10">
        {/* block6 */}
        <div className="sm:flex sm:justify-between">
          {/* block6 left*/}
          <div className="sm:max-w-[50%]">
            <h1 className="  font-bold">Committed to making things easy for you</h1>
            <h3 className="  font-bold mt-6 text-[1.3rem]">Managing your laundry and dry cleaning in the 21st century should be simple and accessible from anywhere.</h3>
            <p className="mt-6 text-slate-500">We created the app that allows you to schedule an order in less than 2 minutes, whether at home, at the office or on the go. No need to speak to any representative, you can now manage all your orders with our easy-to-use website or mobile app.</p>

            <div className="mt-7 items-center flex justify-center">
              {/* <img className="sm:w-[80%]" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> */}
              <Image
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="sample image"
                loader={({ src, width, quality }) => {
                  const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
                  url.searchParams.append("src", src);
                  url.searchParams.append("w", width + "");
                  url.searchParams.append("q", quality + "");
                  return url.toString();
                }}
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* block6 right */}
          <div className="mt-7 flex items-center justify-center">
            {/* <img className="sm:w-[80%]" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> */}
            <Image
              src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt="sample image"
              loader={({ src, width, quality }) => {
                const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
                url.searchParams.append("src", src);
                url.searchParams.append("w", width + "");
                url.searchParams.append("q", quality + "");
                return url.toString();
              }}
              width={600}
              height={400}
            />
          </div>
        </div>



        {/* Line */}
        <div className="my-[3rem] border-b-[.07rem] border-slate-400"></div>

        {/* block7 */}
        <div className="flex flex-col-reverse sm:flex-row sm:align sm:justify-center">
          {/* block7 right */}
          <div className="">
            <div className="mt-7 flex items-center justify-center">
              {/* <img className="sm:w-[80%]" src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" /> */}

              <Image
                src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt="sample image"
                loader={({ src, width, quality }) => {
                  const url = new URL("https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80");
                  url.searchParams.append("src", src);
                  url.searchParams.append("w", width + "");
                  url.searchParams.append("q", quality + "");
                  return url.toString();
                }}
                width={600}
                height={400}
              />
            </div>



          </div>
          {/* block7 left */}
          <div className="flex sm:max-w-[50%] justify-center items-center">
            <div className="max-w-[100%] text-center">
              <h2 className=" ">Quality without compromise</h2>
              <h3 className="  font-bold mt-6 text-[1.3rem]">We partner with carefully-selected local cleaning and delivery partners to ensure your items are treated with the utmost care.</h3>
              <p className="mt-6 hidden sm:block">We never compromise when it comes to quality and speed. We compensate our partner drivers fairly and are proud to work with dozens of reliable local cleaning facilities to keep transport to a minimum.</p>
            </div>
          </div>

        </div>
        <p className="mt-6 sm:hidden">We never compromise when it comes to quality and speed. We compensate our partner drivers fairly and are proud to work with dozens of reliable local cleaning facilities to keep transport to a minimum.</p>
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
