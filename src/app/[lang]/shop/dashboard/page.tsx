"use client";

import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { toast } from "@/components/ui/use-toast";
import { useTokenProvider } from "@/context/token-provider";
import PrivateRoute from "@/layouts/private-route";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Dashboard = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { token, setToken } = useTokenProvider();
  const [spinner, setSpinner] = useState(false);

  const Logout = () => {
    setTimeout(() => {
      localStorage.removeItem("token");
      let tempPath = pathname;
      tempPath = tempPath.replace("/dashboard", "");
      setToken(null);
      router.push(tempPath);
    }, 0);
  };
  const DeleteAccount = async () => {
    setSpinner(true);
    try {
      const verifyResponse = await axios.delete(
        `${process.env.BACKEND_URL}/shops/delete`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (verifyResponse.status === 200) {
        toast({
          title: "Account deletion!",
          description: "Account Deleted Successfully",
        });
        setSpinner(false);
        Logout();
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.response?.data?.message,
      });
      setSpinner(false);
    }
  };

  const GetUserData = async () => {
    setSpinner(true);
    try {
      const verifyResponse = await axios.get(
        `${process.env.BACKEND_URL}/shops`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (verifyResponse.status === 200) {
        toast({
          title: "Shop Data Fetch!",
          description: "Data fetched Successfully",
        });
        setSpinner(false);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.response?.data?.message,
      });
      setSpinner(false);
    }
  };
  const UpdateUserData = async () => {
    setSpinner(true);
    try {
      const verifyResponse = await axios.put(
        `${process.env.BACKEND_URL}/shops`,
        { name: "Sultan Suleman", address: "Istanbul, Turkeye" },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (verifyResponse.status === 200) {
        toast({
          title: "Shop Data Update!",
          description: "Data updated Successfully",
        });
        setSpinner(false);
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error?.response?.data?.message,
      });
      setSpinner(false);
    }
  };
  return (
    <PrivateRoute>
      <div className="container section-padding">
        <h3>Dashboard</h3>

        {spinner ? (
          <ButtonLoading className="mt-5" />
        ) : (
          <Button variant="secondary" className="mt-5" onClick={DeleteAccount}>
            Delete Account
          </Button>
        )}
        {spinner ? (
          <ButtonLoading className="mt-5" />
        ) : (
          <Button className="mt-5" onClick={GetUserData}>
            Get Shop Data
          </Button>
        )}
        {spinner ? (
          <ButtonLoading className="mt-5" />
        ) : (
          <Button className="mt-5" onClick={UpdateUserData}>
            Update Shop Data
          </Button>
        )}
        <Button variant="destructive" onClick={Logout}>
          Logout
        </Button>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
