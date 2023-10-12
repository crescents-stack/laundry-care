"use client";

import BoxOfLinks from "@/components/core/pages/home/homepage/box-of-links";
import ImageDescCard from "@/components/core/pages/home/homepage/image-desc-card";
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
          {/* this is in mobile website to change the direction of flex */}
          <p className="mt-6 sm:hidden">We never compromise when it comes to quality and speed. We compensate our partner drivers fairly and are proud to work with dozens of reliable local cleaning facilities to keep transport to a minimum.</p>
          <div className="">

            {/* block7 left*/}
            <div className="mt-7 flex items-center justify-center">
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

          {/* block7 right*/}
          <div className="flex sm:max-w-[50%] justify-center items-center">
            <div className="max-w-[90%] text-center">
              <h2 className=" ">Quality without compromise</h2>
              <h3 className="  font-bold mt-6 text-[1.3rem]">We partner with carefully-selected local cleaning and delivery partners to ensure your items are treated with the utmost care.</h3>
              <p className="mt-6 hidden sm:block">We never compromise when it comes to quality and speed. We compensate our partner drivers fairly and are proud to work with dozens of reliable local cleaning facilities to keep transport to a minimum.</p>
            </div>

          </div>
        </div>
        {/* block7 end */}
      </div>

      {/* block8 */}
      <div className="bg-gray-100 pb-20  my-10 px-6 sm:px-14">
        <h2 className="sm:py-20 py-5 ">Want to work with us?</h2>

        <div className="flex flex-col sm:justify-evenly gap-9">
          <div className="">
            <h3>Careers</h3>
            <p>Check open positions</p>
          </div>

          <div className="">
            <h3>Cleaning partners</h3>
            <p>Want to grow your customer base completely hassle free?</p>
          </div>

          <div className="">
            <h3>Partner drivers</h3>
            <p>Get flexible slots and fair, competitive fees.</p>
          </div>

          <div className="">
            <h3>Hotel partnerships</h3>
            <p>Offer laundry, ironing & dry cleaning services to your guests.</p>
          </div>
        </div>
      </div>
      {/* block8 ends */}


      <div className="container">

        {/* block9 */}
        <div className="sm:flex sm:justify-between sm:min-h-[80vh] items-center">

          {/* block9 left */}
          <div className="sm:w-[50%]">
            <h3 className="py-5">Growth, sustainability and expansion are integral to strong customer relationships</h3>
            <h4>Deyan Dimitrov, CEO of Laundryheap</h4>
          </div>

          {/* block9 right */}
          <div className="sm:w-[50%]">
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
        {/* block9 ends */}

      </div>
      {/* block10  */}
      <div className="my-10">

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
      {/* block10 ends*/}

      <div className="container">
        {/* block11 */}
        <div className="my-20">
          <div className="mb-8 flex justify-between">
            <h3>Our blog</h3>
            <Link href="/" className="mt-2 font-bold text-blue-900">View all (this is a link)</Link>
          </div>

          <div className="flex gap-10 sm:flex-row flex-col">
            <ImageDescCard link={true} description="Things To Do In Paris With Your Kids (this is a link)" />
            <ImageDescCard link={true} description="What To Expect At The Independent Hotel Show This Year (this is a link)" />
            <ImageDescCard link={true} description="Mastering Laundry Day Top Tips for Organising Your Utility Room (this is a link)" />
          </div>
        </div>
        {/* block11 ends*/}


        {/* block 12 */}
        <div className="my-10">
          <h3 className="my-8">Get the most of the Laundryheap</h3>
          <div className="sm:flex gap-10 ">
            <ImageDescCard link={false} description="Satisfied with our service? Send a gift card to someone you love." />
            <ImageDescCard link={false} description="Want to get a discount code? Refer friends and earn." />
          </div>
        </div>
        {/* block12 ends */}

        {/* block13 */}
        <div className="sm:w-[50vw]">
          <h3>Our other offers</h3>
          <ImageDescCard description="Check our solutions for on-demand linen & towels rental for your short-let." />
        </div>
        {/* block13 ends */}

        {/* Line */}
        <div className="my-[3rem] border-b-[.07rem] border-slate-400"></div>

        {/* block14  */}
        <div className="">

          <h4>
            <Link href="/" className="inline-block mt-2 font-bold text-blue-900">Home (this is a link)</Link>
            <div className="inline-block mx-4">--</div>
            <p className="inline-block">About us</p>
          </h4>

          <div className="flex mb-10 flex-wrap justify-between">
            <BoxOfLinks {...obj1} />
            <BoxOfLinks {...obj2} />
            <BoxOfLinks {...obj2} />
            <BoxOfLinks {...obj2} />
          </div>
        </div>
        {/* block14 end */}

      </div>
    </>

  );
};


export default Home;

const obj1 = {
  heading: "heading",
  links: {
    "How it works": "/",
    "Prices & Services": "/",
    "Help Center": "/"
  }
}

const obj2 = {
  heading: "Our solutions",
  links: {
    "Xyx": "/",
    "Xyz": "/",
    "abc": "/",
    "abd": "/",
    "abm": "/",
    "mab": "/",
    "cat": "/",
  }
}

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
