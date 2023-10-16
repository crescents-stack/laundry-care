"use client";

import { Button } from "@/components/ui/button";
import { useTokenProvider } from "@/context/token-provider";
import PrivateRoute from "@/layouts/private-route";
import { Calendar, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

const DashboardLayout = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  const { setToken } = useTokenProvider();
  const Logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  return (
    <PrivateRoute>
      <div className="grid grid-cols-12 gap-10 h-[100vh]">
        <div className="col-span-4 lg:col-span-3 xl:col-span-2 flex flex-col items-center justify-between border-r bg-[hsl(var(--primary-600))] p-10">
          <div className="flex flex-col gap-3">
            <Link
              href={
                window.location.origin +
                localStorage.getItem("lang") +
                localStorage.getItem("theme")
              }
            >
              <h3 className="text-white pb-5">Shopboard</h3>
            </Link>
            {Links.map((link: any) => {
              return (
                <Link
                  key={link.id}
                  href={
                    window.location.origin +
                    localStorage.getItem("lang") +
                    localStorage.getItem("theme") +
                    link.link
                  }
                >
                  <div
                    className={`flex items-center gap-3 group border-l-2 pl-2 ${
                      pathname.includes(link.link)
                        ? "border-[#ffffff]"
                        : "border-[#ffffff00]"
                    }`}
                  >
                    {link.icon}
                    <span className="text-white group-hover:text-[hsl(var(--primary-100))]">
                      {link.text}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <Button variant="destructive" onClick={Logout} className="w-full">
            Logout <LogOut className="w-4 h-4 stroke-white ml-2" />
          </Button>
        </div>
        <div className="col-span-8 lg:col-span-9 xl:col-span-10 pr-10 py-10">{children}</div>
      </div>
    </PrivateRoute>
  );
};

export default DashboardLayout;

const Links = [
  {
    id: 0,
    text: "Schedules",
    link: "/dashboard/schedules",
    icon: (
      <Calendar className="w-5 h-5 stroke-white group-hover:stroke-[hsl(var(--primary-100))]" />
    ),
  },
  {
    id: 1,
    text: "Settings",
    link: "/dashboard/settings",
    icon: (
      <Settings className="w-5 h-5 stroke-white group-hover:stroke-[hsl(var(--primary-100))]" />
    ),
  },
];
