"use client";

import { H3 } from "@/components/core/typegraphy/headings";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Verification = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const token = params.get("token");

  const verifyAccount = async () => {
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/admin/verification`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        toast({
          title: "Email verification",
          description: "Successful!",
        });
        router.push(pathname.replace("/verification", "/login"));
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.response?.data?.message,
      });
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
