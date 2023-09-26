// "use client";

// import { useTokenProvider } from "@/context/token-provider";
// import { ReactElement, useEffect } from "react";

// const PrivateRoute = ({ children }: { children: ReactElement }) => {
//   const {token} = useTokenProvider();
//   useEffect(() => {
//     if (!token) {
//       let toRoute = window.location.href.replace("/dashboard", "/auth/login");
//       window.location.replace(toRoute);
//     }
//   }, [token]);

//   if (token) {
//     return <div>{children}</div>;
//   } else {
//     return <div></div>;
//   }
// };

// export default PrivateRoute;

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
        let toRoute = window.location.href.replace("/dashboard", "");
        router.push(toRoute + "/auth/login");
      }
    }, 0);
  }, [token]);
  return token ? <div>{children}</div> : <div></div>;
};

export default PrivateRoute;
