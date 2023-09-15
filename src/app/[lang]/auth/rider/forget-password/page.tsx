"use client";

import ErrorMessage from "@/components/core/shared/error-message";
import PhoneNumberInput from "@/components/core/shared/phone-input";
import { Button } from "@/components/ui/button";
import { ChangeEvent, MouseEvent, useState } from "react";

type FormDataType = {
  phone: String;
};

const FormDataDefaultValues: FormDataType = {
  phone: "",
};

const ForgetPassword = () => {
  const [formData, setFormData] = useState<FormDataType>(FormDataDefaultValues);
  const [errors, setErrors] = useState<FormDataType | {}>(formData);

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
      console.log(formData);
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
    return obj;
  };

  return (
    <div className="container section-padding">
      <div className="max-w-[500px] mx-auto">
        <h3 className="text-center">Recover your account!</h3>
        <form className="grid grid-col-1 gap-4 my-10">
          <div className="grid grid-cols-1 gap-2">
            <PhoneNumberInput onChange={handleOnChange} />
            <ErrorMessage errors={errors} name="phone" />
          </div>
          <Button className="mt-5" onClick={handleOnClick}>
            Get verification code
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
