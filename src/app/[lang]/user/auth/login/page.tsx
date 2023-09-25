"use client";

import ErrorMessage from "@/components/core/shared/error-message";
import PhoneNumberInput from "@/components/core/shared/phone-input";
import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const handleOnChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | { target: { name: String; value: String } }
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [`${name}`]: value });
  };

  const FetchLoginAPI = async (data: any) => {
    try {
      const response = await axios.post(`${process.env.BACKEND_URL}/users/login`, data);
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const catchedErrors = validation(formData);

    if (Object.keys(catchedErrors).length === 0) {
      setErrors({});
      const data = {...formData, clientUrl: window.location.href}
      FetchLoginAPI(data);
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
          <Button className="mt-5" onClick={handleOnClick}>
            Login
          </Button>
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
  );
};

export default Login;
