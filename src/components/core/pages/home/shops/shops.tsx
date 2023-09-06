import Link from "next/link";
import Shop from "./shop";
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
    <div className="section-padding section-margin grid grid-cols-1 gap-10">
      <h2 className="text-user-800 text-center">
        We are <span className="text-user-400">Partner</span> with
      </h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {ShopList.map((details) => {
          return <Shop key={details.id} details={details} />;
        })}
      </div>
      <Link
        href="/"
        className="text-user-500 hover:underline hover:text-user-300 text-right container font-semibold"
      >
        All shop partners...
      </Link>
    </div>
  );
};

export default Shops;

const ShopList: [detailsType, detailsType, detailsType, detailsType] = [
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
];
