"use client";

import { setTheme } from "@/lib/themes/theme-setter";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement, useEffect } from "react";

const UserAuthLayout = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  const router = useRouter();
  let tempPath = pathname.split("/");
  tempPath.pop();
  tempPath.pop();
  useEffect(() => {
    setTimeout(() => {
      if (localStorage) {
        const themeLS = localStorage.getItem("theme");
        themeLS && setTheme(themeLS, router, pathname);
      }
    }, 0);
  }, []);
  return (
    <div>
      <div className="container pt-10">
        <Link
          href={`${tempPath.join("/")}`}
          className="text-[hsl(var(--primary-600))] flex items-center justify-start gap-1"
        >
          {" "}
          <ArrowLeft className="w-[16px] h-[16px] stroke-[hsl(var(--primary-600))]" />{" "}
          Back
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default UserAuthLayout;
