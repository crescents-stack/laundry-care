"use client";

import ErrorMessage from "@/components/core/shared/error-message";
import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { ChangeEvent, MouseEvent, useState } from "react";

type FormDataType = {
  email: string;
};

const FormDataDefaultValues: FormDataType = {
  email: "",
};

const ForgetPassword = () => {
  const [formData, setFormData] = useState<FormDataType>(FormDataDefaultValues);
  const [errors, setErrors] = useState<FormDataType | {}>(formData);
  const [spinner, setSpinner] = useState<boolean>(false);

  const GetPasswordResetLink = async () => {
    setSpinner(true);
    try {
      const verifyResponse = await axios.post(
        `${process.env.BACKEND_URL}/shops/forget-password`,
        {
          email: formData.email,
          clientUrl: window.location.href.replace("forget", "reset"),
        }
      );
      if (verifyResponse.status === 201) {
        toast({
          title: "Password Recover",
          description: "Check you email inbox to get password reset link!",
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

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement> // Only handle input changes
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const catchedErrors = validation(formData);

    if (Object.keys(catchedErrors).length === 0) {
      setErrors({});
      GetPasswordResetLink();
    } else {
      setErrors(catchedErrors);
    }
  };

  const validation = (data: FormDataType) => {
    let obj: any = {};
    if (!data.email.trim()) {
      obj.email = "Email is required!";
    } else if (!isValidEmail(data.email)) {
      obj.email = "Invalid email address!";
    }
    return obj;
  };

  const isValidEmail = (email: string) => {
    // You can implement a regex-based email validation function here
    // For example, you can use a regex like /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // to validate email addresses.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="container section-padding">
      <div className="max-w-[500px] mx-auto">
        <H3 className="text-center" text="Recover your account!" />
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
          {spinner ? (
            <ButtonLoading className="mt-5" />
          ) : (
            <Button className="mt-5" onClick={handleOnClick}>
              Get verification code
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
