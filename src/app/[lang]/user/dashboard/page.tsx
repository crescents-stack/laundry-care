"use client"

import { Button } from "@/components/ui/button";
import { useTokenProvider } from "@/context/token-provider";
import PrivateRoute from "@/layouts/private-route";
import { usePathname, useRouter } from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {setToken} = useTokenProvider();
  const Logout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      let tempPath = pathname;
      tempPath = tempPath.replace("/dashboard", "");
      setToken(null)
      router.push(tempPath);
    }, 0);
  };
  return (
    <PrivateRoute>
      <div className="container section-padding">
        <h3>Dashboard</h3>
        <Button variant="destructive" onClick={Logout}>
          Logout
        </Button>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
