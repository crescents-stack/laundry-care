"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(
      window.location.origin +
        localStorage.getItem("lang") +
        localStorage.getItem("theme") +
        "/dashboard/settings"
    );
  }, []);
  return <div></div>;
};

export default Dashboard;
