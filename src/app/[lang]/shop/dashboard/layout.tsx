"use client";

import { Button } from "@/components/ui/button";
import { useTokenProvider } from "@/context/token-provider";
import PrivateRoute from "@/layouts/private-route";
import { Calendar, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
      <div className="flex gap-10 min-h-[100vh] max-h-[100vh]">
        <div className="flex flex-col justify-between border-r bg-[hsl(var(--primary-600))]  w-[250px] pl-10 pr-5 py-10">
          <div className="flex flex-col gap-3">
            <Link
              href={
                window.location.origin +
                localStorage.getItem("lang") +
                localStorage.getItem("theme")
              }
            >
              <h3 className="text-white mb-5 pl-2">Shopboard</h3>
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
          <Button variant="destructive" onClick={Logout}>
            Logout <LogOut className="w-4 h-4 stroke-white ml-2" />
          </Button>
        </div>
        <div>{children}</div>
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
