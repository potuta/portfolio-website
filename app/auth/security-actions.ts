"use server" 

import { verifyReCAPTCHA } from "@/lib/services/recaptcha";

export async function validateHumanRequest(captchaToken: string | null) {
  const isValidHuman = await verifyReCAPTCHA(captchaToken);
  
  if (!isValidHuman) {
    return { error: "Bot activity detected or verification expired." };
  }
  
  return { success: true };
}