"use client";
import { useTokenProvider } from "@/context/token-provider";
import { ReactElement, useEffect } from "react";

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { token } = useTokenProvider();
  useEffect(() => {
    if (token) {
      history.back();
    }
  }, [token]);
  return !token ? <div>{children}</div> : <div></div>;
};

export default PublicRoute;
