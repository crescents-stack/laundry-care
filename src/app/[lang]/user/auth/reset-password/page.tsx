"use client";

import ErrorMessage from "@/components/core/shared/error-message";
import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

type FormDataType = {
  password: String;
};

const FormDataDefaultValues: FormDataType = {
  password: "",
};

const ResetPassword = () => {
  const [showPass, setShowPass] = useState<Boolean>(false);
  const [formData, setFormData] = useState<FormDataType>(FormDataDefaultValues);
  const [errors, setErrors] = useState<FormDataType | {}>(formData);
  const [spinner, setSpinner] = useState<boolean>(false);
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const ResetPassword = async () => {
    setSpinner(true);
    try {
      const token = params.get("token");
      const verifyResponse = await axios.post(
        `${process.env.BACKEND_URL}/users/reset-password`,
        {
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (verifyResponse.status === 200) {
        toast({
          title: "Password Recover",
          description: "Password reset succesful.",
        });
        setSpinner(false);
        setTimeout(() => {
          let tempPath = pathname;
          tempPath = tempPath.replace("/reset-password", "/login");
          router.push(tempPath);
        }, 0);
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

  const handleOnChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | { target: { name: String; value: String } }
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [`${name}`]: value });
  };
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const catchedErrors = validation(formData);

    if (Object.keys(catchedErrors).length === 0) {
      setErrors({});
      ResetPassword();
    } else {
      setErrors(catchedErrors);
    }
  };

  const validation = (data: FormDataType) => {
    let obj: any = {};
    if (data.password.length < 8) {
      obj.password = "Password should have 8 characters!";
    }
    return obj;
  };

  return (
    <div className="container section-padding">
      <div className="max-w-[500px] mx-auto">
        <H3 className="text-center" text="Reset your password!" />
        <form className="grid grid-col-1 gap-4 my-10">
          <div className="grid grid-cols-1 gap-2 relative">
            <label>New password</label>
            <input
              name="password"
              onChange={handleOnChange}
              type={showPass ? "text" : "password"}
              className="border border-lighter-400 hover:border-user-400 p-2 rounded-lg focus:outline-none"
            />
            <ErrorMessage errors={errors} name="password" />
            <div className="absolute top-[40px] right-[10px]">
              {!showPass ? (
                <Eye
                  className="stroke-lighter-600 hover:stroke-lighter-900"
                  onClick={() => setShowPass(!showPass)}
                />
              ) : (
                <EyeOff
                  className="stroke-lighter-600 hover:stroke-lighter-900"
                  onClick={() => setShowPass(!showPass)}
                />
              )}
            </div>
          </div>
          {spinner ? (
            <ButtonLoading className="mt-5" />
          ) : (
            <Button className="mt-5" onClick={handleOnClick}>
              Reset password
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
