import { Star } from "lucide-react";
import Image from "next/image";
import { detailsType, ratingType } from "./shops";
import Link from "next/link";

const Shop = ({ details }: { details: detailsType }) => {
  const { title, description, location, rating, detailsLink, image } = details;
  return (
    <div>
      <div>
        <Image
          src={`/images/shop/${image}`}
          alt="shop_image"
          height={1000}
          width={1000}
          className="w-full h-full rounded-t-lg"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 pt-5">
        <div className="grid grid-cols-1 gap-5">
          <div className="flex items-end justify-between gap-5">
            <div>
              <h4 className="font-bold text-user-800 text-lg lg:text-xl">
                {title}
              </h4>
              <p className="text-body-200">{location}</p>
            </div>
            <div className="flex flex-col items-end justify-end gap-1">
              <div className="flex items-center justify-end gap-[3px]">
                {rating.map((starNum: ratingType) => {
                  return (
                    <div key={starNum.id}>
                      <Star
                        className={`w-5 h-5 ${
                          starNum.given > 0
                            ? "stroke-user-700"
                            : "stroke-user-200"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-body-200">
                {rating
                  .map((item) => item.given)
                  .reduce((sum, item) => sum + item, 0)}{" "}
                Ratings
              </p>
            </div>
          </div>
          <p className="text-body-300">{description}</p>
        </div>
        <div>
          <Link
            href={detailsLink}
            className="text-user-500 underline hover:text-user-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
