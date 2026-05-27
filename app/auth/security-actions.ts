"use server" 

import { verifyReCAPTCHA } from "@/lib/services/recaptcha";

export async function validateHumanRequest(captchaToken: string | null) {
  // If you log this here, it will show up perfectly in your terminal log,
  // because "use server" guarantees this function only runs on your backend.
  console.log("Secret Key check on server:", process.env.RECAPTCHA_SECRET_KEY);

  const isValidHuman = await verifyReCAPTCHA(captchaToken);
  
  if (!isValidHuman) {
    return { error: "Bot activity detected or verification expired." };
  }
  
  return { success: true };
}