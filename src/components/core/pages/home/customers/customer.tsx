import Image from "next/image";
import { ReviewType } from "./customers";
import { Star } from "lucide-react";

const Customer = ({ details }: { details: ReviewType }) => {
  const { review, rating, name, image } = details;
  return (
    <div className="grid grid-cols-1 gap-5 min-w-[250px] w-full">
      <p>{review}</p>
      <div className="flex items-center justify-start gap-3 ">
        <div className="border-[2px] border-user-700 rounded-full">
          <Image
            src={`/avatars/${image}`}
            alt="customer image"
            height={500}
            width={500}
            className="w-10 h-10 rounded-full border-[2px]"
          />
        </div>
        <div className="grid grid-cols-1">
          <h6 className="font-bold text-user-700">{name}</h6>
          <p className="flex items-center justify-start gap-1 text-user-700">
            {rating}
            <Star className="stroke-user-700 h-4 w-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
