"use client";

import ErrorMessage from "@/components/core/shared/error-message";
import { H3 } from "@/components/core/typegraphy/headings";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Verification = () => {
  const [code, setCode] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ code: string } | {}>({});

  return (
    <div className="container section-padding">
      <div className="max-w-[500px] mx-auto grid grid-cols-1">
      <H3 className="text-center" text="Verify your account!" />
        <form className="grid grid-col-1 gap-4 my-10">
          <div className="grid grid-cols-1 gap-2">
            <input
              name="code"
              onChange={(e: any) => {
                const value = e.target.value;
                if (value.length === 4) {
                  setCode(e.target.value);
                  setErrors({});
                } else {
                  setErrors({ code: "Code length must be 4" });
                }
              }}
              placeholder="Paste your code here"
              className="border border-lighter-400 hover:border-admin-400 p-2 rounded-lg focus:outline-none"
            />
            <ErrorMessage errors={errors} name="code" />
          </div>
        </form>
        <Button className="mt-5 btn-admin">Recover your Account</Button>
      </div>
    </div>
  );
};

export default Verification;
