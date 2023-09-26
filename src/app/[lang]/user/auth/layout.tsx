"use client"

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const UserAuthLayout = ({ children }: { children: ReactElement }) => {
    const pathname = usePathname();
    let tempPath = pathname.split("/");
    tempPath.pop();
    tempPath.pop();
  return (
    <div>
      <div className="container pt-10">
        <Link href={`${tempPath.join("/")}`} className="text-[hsl(var(--primary-600))] flex items-center justify-start gap-1">
          {" "}
          <ArrowLeft className="w-[16px] h-[16px] stroke-[hsl(var(--primary-600))]"/> Back
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default UserAuthLayout;
