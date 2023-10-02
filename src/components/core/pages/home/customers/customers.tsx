"use client";

import Customer from "./customer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

export type ReviewType = {
  id: number;
  name: string;
  review: string;
  rating: number;
  image: string;
};

const Customers = ({ dictionary }: { dictionary: any }) => {
  const CustomerReviewList = [
    {
      id: 0,
      name: "John Doe",
      review:
        "Excepteur minim voluptate elit labore laborum deserunt culpa cupidatat laboris Lorem tempor. Aliquip cupidatat amet qui mollit ex laborum tempor qui laboris ex irure. Anim qui anim consequat duis sint aliquip.",
      rating: 4,
      image: "user.svg",
    },
    {
      id: 1,
      name: "John Doe",
      review:
        "Excepteur minim voluptate elit labore laborum deserunt culpa cupidatat laboris Lorem tempor. Aliquip cupidatat amet qui mollit ex laborum tempor qui laboris ex irure. Anim qui anim consequat duis sint aliquip.",
      rating: 4,
      image: "user2.svg",
    },
    {
      id: 2,
      name: "John Doe",
      review:
        "Excepteur minim voluptate elit labore laborum deserunt culpa cupidatat laboris Lorem tempor. Aliquip cupidatat amet qui mollit ex laborum tempor qui laboris ex irure. Anim qui anim consequat duis sint aliquip.",
      rating: 4,
      image: "user3.svg",
    },
    {
      id: 3,
      name: "John Doe",
      review:
        "Excepteur minim voluptate elit labore laborum deserunt culpa cupidatat laboris Lorem tempor. Aliquip cupidatat amet qui mollit ex laborum tempor qui laboris ex irure. Anim qui anim consequat duis sint aliquip.",
      rating: 4,
      image: "user4.svg",
    },
    {
      id: 4,
      name: "John Doe",
      review:
        "Excepteur minim voluptate elit labore laborum deserunt culpa cupidatat laboris Lorem tempor. Aliquip cupidatat amet qui mollit ex laborum tempor qui laboris ex irure. Anim qui anim consequat duis sint aliquip.",
      rating: 4,
      image: "user4.svg",
    },
  ];
  return (
    <div className="section-padding section-margin bg-[hsl(var(--primary-50))]">
      <div className="container">
        <h2 className="text-[hsl(var(--primary-800))] text-center pb-10">
          Our happy <span className="text-[hsl(var(--primary-400))]">Customers</span>
        </h2>
        <Swiper
        modules={[Navigation, Pagination, A11y,Autoplay]} // Add Autoplay module here
        spaceBetween={50}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1536: {
            width: 1536,
            slidesPerView: 4,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }} // Add autoplay configuration here (5 seconds delay)
        speed={1200}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
      >
          {CustomerReviewList.map((item: ReviewType) => {
            return (
              <SwiperSlide key={item.id} className="pb-20 cursor-default">
                <Customer details={item} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide className="w-full min-h-[250px]"></SwiperSlide>
        </Swiper>
        <div className="container flex justify-end">
          <Link
            href="/"
            className="text-[hsl(var(--primary-500))] hover:underline hover:text-[hsl(var(--primary-300))] font-semibold"
          >
            All reviews...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Customers;
