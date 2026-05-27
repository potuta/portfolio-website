"use client";

import { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReCAPTCHAFieldProps {
  onChange: (token: string | null) => void;
}

// We use forwardRef so the parent form can call .reset() on the widget when needed
export const ReCAPTCHAField = forwardRef<ReCAPTCHA, ReCAPTCHAFieldProps>(
  ({ onChange }, ref) => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
      console.error("reCAPTCHA Site Key is missing from environment variables.");
      return null;
    }

    return (
      <div className="my-4 flex justify-center md:justify-start">
        <ReCAPTCHA
          ref={ref}
          sitekey={siteKey}
          onChange={onChange}
        />
      </div>
    );
  }
);

ReCAPTCHAField.displayName = "ReCAPTCHAField";