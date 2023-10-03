"use client";

import ErrorMessage from "@/components/core/shared/error-message";
import PhoneNumberInput from "@/components/core/shared/phone-input";
import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, MouseEvent, useState } from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { ButtonLoading } from "@/components/ui/button-loading";

type FormDataType = {
  nid: String;
  email: String;
  name: String;
  phone: String;
  password: String;
};

const FormDataDefaultValues: FormDataType = {
  nid: "",
  email: "",
  name: "",
  phone: "",
  password: "",
};

const Register = () => {
  const [showPass, setShowPass] = useState<Boolean>(false);
  const [formData, setFormData] = useState<FormDataType>(FormDataDefaultValues);
  const [errors, setErrors] = useState<FormDataType | {}>(formData);
  const [spinner, setSpinner] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const FetchRegisterAPI = async (data: any) => {
    setSpinner(true);
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/admin/register`,
        data
      );
      if (response.status === 201) {
        toast({
          title: "Registration",
          description: "Check you email inbox to verify your account!",
        });
        setTimeout(() => {
          let tempPath = pathname;
          tempPath = tempPath.replace("/register", "/login");
          router.push(tempPath);
        }, 0);
      }
      setSpinner(false);
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
      const Data = {
        ...formData,
        clientUrl: window.location.href.replace("/register", "/verification"),
      };
      FetchRegisterAPI(Data);
    } else {
      setErrors(catchedErrors);
    }
  };

  const validation = (data: FormDataType) => {
    let obj: any = {};
    if (!data.phone.trim()) {
      obj.phone = "Phone number is required!";
    } else if (data.phone.length < 7) {
      obj.phone = "Phone number is invalid!";
    }
    if (!data.name.trim()) {
      obj.name = "Name is required!";
    }
    if (!data.nid.trim()) {
      obj.nid = "NID is required!";
    }
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
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              className="border border-lighter-400 hover:border-[hsl(var(--primary-400))] p-2 rounded-lg focus:outline-none"
            />
            <ErrorMessage errors={errors} name="name" />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>NID</label>
            <input
              type="text"
              name="nid"
              onChange={handleOnChange}
              className="border border-lighter-400 hover:border-[hsl(var(--primary-400))] p-2 rounded-lg focus:outline-none"
            />
            <ErrorMessage errors={errors} name="nid" />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <PhoneNumberInput onChange={handleOnChange} />
            <ErrorMessage errors={errors} name="phone" />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
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
          <div className="text-gray-400">
            By registering you agree to our{" "}
            <span className="text-[hsl(var(--primary-400))]">
              Terms of Service
            </span>{" "}
            &{" "}
            <span className="text-[hsl(var(--primary-400))]">
              Privacy Policy
            </span>{" "}
            .
          </div>
          {spinner ? (
            <ButtonLoading className="mt-5" />
          ) : (
            <Button className="mt-5" onClick={handleOnClick}>
              Register
            </Button>
          )}
        </form>
        <div>
          Already have an account?
          <Link
            href={`${pathname.includes("/bn") ? "/bn" : "/en"}/shop/auth/login`}
            className="pl-1 hover:text-[hsl(var(--primary-600))]"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
