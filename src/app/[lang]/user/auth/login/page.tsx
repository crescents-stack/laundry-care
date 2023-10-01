"use client";

import ErrorMessage from "@/components/core/shared/error-message";
// import PhoneNumberInput from "@/components/core/shared/phone-input";
import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { useTokenProvider } from "@/context/token-provider";
import PublicRoute from "@/layouts/public-route";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";

type FormDataType = {
  email: String;
  password: String;
};

const FormDataDefaultValues: FormDataType = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPass, setShowPass] = useState<Boolean>(false);
  const [formData, setFormData] = useState<FormDataType>(FormDataDefaultValues);
  const [errors, setErrors] = useState<FormDataType | {}>(formData);
  const [spinner, setSpinner] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setToken } = useTokenProvider();

  const handleOnChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | { target: { name: String; value: String } }
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [`${name}`]: value });
  };

  const EmailVerify = async () => {
    setSpinner(true);
    try {
      const verifyResponse = await axios.post(
        `${process.env.BACKEND_URL}/users/verification-latter`,
        {
          email: formData.email,
          clientUrl: window.location.href.replace("login", "verification"),
        }
      );
      if (verifyResponse.status === 201) {
        toast({
          title: "Registration",
          description: "Check you email inbox to verify your account!",
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

  const FetchLoginAPI = async () => {
    setSpinner(true);
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/users/login`,
        { ...formData, clientUrl: window.location.href }
      );

      if (response.status === 200) {
        toast({
          title: "Login",
          description: "Successful!",
        });
        let token = response.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        let newPath = pathname.replace("/auth/login", "/dashboard");
        router.push(newPath);
      }
    } catch (error: any) {
      if (error.response.status === 401) {
        let errMsg = error?.response?.data?.message;
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: errMsg,
          action: errMsg.includes("Email is not verified") ? (
            <div
              onClick={EmailVerify}
              className="bg-green-400 text-white rounded-md px-2 py-1 cursor-pointer"
            >
              Verify email!
            </div>
          ) : (
            <div></div>
          ),
        });
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error?.response?.data?.message,
        });
      }

      setSpinner(false);
    }
  };
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const catchedErrors = validation(formData);

    if (Object.keys(catchedErrors).length === 0) {
      setErrors({});
      FetchLoginAPI();
    } else {
      setErrors(catchedErrors);
    }
  };

  const validation = (data: FormDataType) => {
    let obj: any = {};
    if (!data.email.trim()) {
      obj.email = "Email is required!";
    }
    if (data.password.length < 8) {
      obj.password = "Password should have 8 characters!";
    }
    return obj;
  };

  return (
    <PublicRoute>
      <div className="container section-padding">
        <div className="max-w-[500px] mx-auto">
          <H3 className="text-center" text="Welcome to Laundrycare!" />

          <form className="grid grid-col-1 gap-4 my-10">
            <div className="grid grid-cols-1 gap-2">
              <label>Email</label>
              <input
                name="email"
                onChange={handleOnChange}
                type="email"
                className="border border-lighter-400 hover:border-[hsl(var(--primary-400))] p-2 rounded-lg focus:outline-none"
              />
              <ErrorMessage errors={errors} name="email" />
            </div>

            <div className="grid grid-cols-1 gap-2 relative">
              <label>Password</label>
              <input
                name="password"
                onChange={handleOnChange}
                type={showPass ? "text" : "password"}
                className="border border-lighter-400 hover:border-[hsl(var(--primary-400))] p-2 rounded-lg focus:outline-none"
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
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberme" />
                <label
                  htmlFor="rememberme"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Link
                href={`${
                  pathname.includes("/bn") ? "/bn" : "/en"
                }/user/auth/forget-password`}
                className="hover:text-[hsl(var(--primary-400))]"
              >
                Forget password?
              </Link>
            </div>
            {spinner ? (
              <ButtonLoading className="mt-5" />
            ) : (
              <Button className="mt-5" onClick={handleOnClick}>
                Login
              </Button>
            )}
          </form>
          <div>
            Already have an account?
            <Link
              href={`${
                pathname.includes("/bn") ? "/bn" : "/en"
              }/user/auth/register`}
              className="pl-1 hover:text-[hsl(var(--primary-600))]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </PublicRoute>
  );
};

export default Login;
