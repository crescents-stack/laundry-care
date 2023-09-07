"use client";
import Link from "next/link";
import Shop from "./shop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

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
const Shops = () => {
  return (
    <div className="section-padding section-margin">
      <div className="container">
        <h2 className="text-user-800 text-center pb-10">
          We are <span className="text-user-400">Partner</span> with
        </h2>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
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
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {ShopList.map((item: detailsType) => {
            return (
              <SwiperSlide key={item.id} className="pb-20 cursor-default">
                <Shop details={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex justify-end">
        <Link
          href="/"
          className="text-user-500 hover:underline hover:text-user-300 container font-semibold text-right"
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
