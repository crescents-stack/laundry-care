"use client";

import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { toast } from "@/components/ui/use-toast";
import { useTokenProvider } from "@/context/token-provider";
import PrivateRoute from "@/layouts/private-route";
import axios from "axios";
import { useState } from "react";

const Settings = () => {
  const { token } = useTokenProvider();
  const [spinner, setSpinner] = useState(false);
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
      <div className="mt-10">
        <h3>Settings</h3>

        <div className="flex flex-col max-w-[200px] gap-10 mt-10">
          {spinner ? (
            <ButtonLoading className="" />
          ) : (
            <Button variant="secondary" className="" onClick={DeleteAccount}>
              Delete Account
            </Button>
          )}
          {spinner ? (
            <ButtonLoading className="" />
          ) : (
            <Button className="" onClick={GetUserData}>
              Get Shop Data
            </Button>
          )}
          {spinner ? (
            <ButtonLoading className="" />
          ) : (
            <Button className="" onClick={UpdateUserData}>
              Update Shop Data
            </Button>
          )}
          {/* <Button variant="destructive" onClick={Logout}>
          Logout
        </Button> */}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Settings;
