"use client";
import { useTokenProvider } from "@/context/token-provider";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useTokenProvider();
  const router = useRouter();
  useEffect(() => {
    const fromLocation = localStorage.getItem("from");
    if (token) {
      const path =
        window.location.origin +
        localStorage.getItem("lang") +
        localStorage.getItem("theme");
      if (fromLocation) {
        router.push(path + fromLocation);
      } else {
        router.push(path + "/dashboard");
      }
    }
  }, [token]);
  return !token ? <div>{children}</div> : <div></div>;
};

export default PublicRoute;
