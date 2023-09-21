import Image from "next/image";
import { ReviewType } from "./customers";
import { Star } from "lucide-react";

const Customer = ({ details }: { details: ReviewType }) => {
  const { review, rating, name, image } = details;
  return (
    <div className="grid grid-cols-1 gap-5 min-w-[250px] w-full">
      <p>{review}</p>
      <div className="flex items-center justify-start gap-3 ">
        <div className="border-[2px] border-[hsl(var(--primary-700))] rounded-full">
          <Image
            src={`/avatars/${image}`}
            alt="customer image"
            height={500}
            width={500}
            className="w-10 h-10 rounded-full border-[2px]"
          />
        </div>
        <div className="grid grid-cols-1">
          <p className="font-bold text-[hsl(var(--primary-700))]">{name}</p>
          <p className="flex items-center justify-start gap-1 text-[hsl(var(--primary-700))]">
            {rating}
            <Star className="stroke-[hsl(var(--primary-700))] h-4 w-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
