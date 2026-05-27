/**
 * Verifies a reCAPTCHA v2 token with Google's API.
 * @param token The client-side gRecaptchaToken
 * @returns boolean indicating if the token is valid
 */
export async function verifyReCAPTCHA(token: string | null): Promise<boolean> {
  if (!token) return false;

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  console.log("secret key: ", secretKey)
  if (!secretKey) {
    console.error("reCAPTCHA Secret Key is missing from environment variables.");
    return false;
  }

  try {
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    const response = await fetch(verificationUrl, { method: "POST" });
    const data = await response.json();

    return !!data.success;
  } catch (error) {
    console.error("reCAPTCHA validation network error:", error);
    return false;
  }
}