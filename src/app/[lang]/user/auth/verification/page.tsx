"use client";

import { H3 } from "@/components/core/typegraphy/headings";
import axios from "axios";
import { useSearchParams } from "next/navigation";

const Verification = () => {
  const params = useSearchParams();

  const verifyAccount = async () => {
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/users/verification?token=${params.get("token")}`);
      console.log(response);
    } catch (error) {
      console.log(error)
    }
  };
  
  verifyAccount();

  return (
    <div className="container section-padding">
      <div className="max-w-[500px] mx-auto grid grid-cols-1">
        <H3 className="text-center" text="Verifying your account..." />
      </div>
    </div>
  );
};

export default Verification;
