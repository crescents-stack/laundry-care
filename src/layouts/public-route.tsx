"use client";
import { useTokenProvider } from "@/context/token-provider";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useTokenProvider();
  const router = useRouter();
  useEffect(() => {
    if (token) {
      let toRoute = window.location.href.replace("/auth/login", "");
      router.push(toRoute + "/dashboard");
    }
  }, [token]);
  return !token ? <div>{children}</div> : <div></div>;
};

export default PublicRoute;
