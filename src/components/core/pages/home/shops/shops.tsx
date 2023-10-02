"use client";
import Link from "next/link";
import Shop from "./shop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export type ratingType = { id: number; given: number };
export type detailsType = {
  id: number;
  title: string;
  description: string;
  detailsLink: string;
  location: string;
  image: string;
  rating: [ratingType, ratingType, ratingType, ratingType, ratingType];
};
const Shops = ({ dictionary }: { dictionary: any }) => {
  return (
    <div className="section-padding section-margin">
      <div className="container">
        <h2 className="text-[hsl(var(--primary-800))] text-center pb-10">
          We are <span className="text-[hsl(var(--primary-400))]">Partner</span> with
        </h2>
        <Swiper
  modules={[Navigation, Pagination, A11y, Autoplay]} // Add Autoplay module here
  spaceBetween={50}
  speed={1200}
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
  onSwiper={(swiper) => {}}
  onSlideChange={() => {}}
>
          {ShopList.map((item: detailsType) => {
            return (
              <SwiperSlide key={item.id} className="pb-20 cursor-default">
                <Shop details={item} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide className="w-full min-h-[250px]"></SwiperSlide>
        </Swiper>
        <div className="flex justify-start items-start">
          <Link
            href="/"
            className="text-[hsl(var(--primary-500))] hover:underline hover:text-[hsl(var(--primary-300))] container font-semibold text-right"
          >
            All shop partners...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shops;

const ShopList: [
  detailsType,
  detailsType,
  detailsType,
  detailsType,
  detailsType
] = [
  {
    id: 0,
    title: "Best Clean Ltd.",
    location: "Bashundhara R/A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    rating: [
      {
        id: 1,
        given: 4,
      },
      {
        id: 2,
        given: 4,
      },
      {
        id: 3,
        given: 4,
      },
      {
        id: 4,
        given: 4,
      },
      {
        id: 5,
        given: 0,
      },
    ],
    detailsLink: "/",
    image: "shop_image.svg",
  },
  {
    id: 1,
    title: "Best Clean Ltd.",
    location: "Bashundhara R/A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    rating: [
      {
        id: 1,
        given: 4,
      },
      {
        id: 2,
        given: 4,
      },
      {
        id: 3,
        given: 4,
      },
      {
        id: 4,
        given: 4,
      },
      {
        id: 5,
        given: 0,
      },
    ],
    detailsLink: "/",
    image: "shop_image.svg",
  },
  {
    id: 2,
    title: "Best Clean Ltd.",
    location: "Bashundhara R/A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    rating: [
      {
        id: 1,
        given: 4,
      },
      {
        id: 2,
        given: 4,
      },
      {
        id: 3,
        given: 4,
      },
      {
        id: 4,
        given: 4,
      },
      {
        id: 5,
        given: 0,
      },
    ],
    detailsLink: "/",
    image: "shop_image.svg",
  },
  {
    id: 3,
    title: "Best Clean Ltd.",
    location: "Bashundhara R/A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    rating: [
      {
        id: 1,
        given: 4,
      },
      {
        id: 2,
        given: 4,
      },
      {
        id: 3,
        given: 4,
      },
      {
        id: 4,
        given: 4,
      },
      {
        id: 5,
        given: 0,
      },
    ],
    detailsLink: "/",
    image: "shop_image.svg",
  },
  {
    id: 4,
    title: "Best Clean Ltd.",
    location: "Bashundhara R/A",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    rating: [
      {
        id: 1,
        given: 4,
      },
      {
        id: 2,
        given: 4,
      },
      {
        id: 3,
        given: 4,
      },
      {
        id: 4,
        given: 4,
      },
      {
        id: 5,
        given: 0,
      },
    ],
    detailsLink: "/",
    image: "shop_image.svg",
  },
];
