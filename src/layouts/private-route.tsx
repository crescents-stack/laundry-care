"use client";
import { useTokenProvider } from "@/context/token-provider";
import { useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useTokenProvider();
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      if (!token) {
        router.push(
          window.location.origin +
            localStorage.getItem("lang") +
            localStorage.getItem("theme") +
            "/auth/login"
        );
      }
    }, 100);
  }, [token]);
  return token ? <div>{children}</div> : <div></div>;
};

export default PrivateRoute;
