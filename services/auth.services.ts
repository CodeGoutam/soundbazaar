import { http } from "@/lib/api";

export const authService = {
  sendOtp: (mobile: string) => http.post("/auth/send-otp", { mobile }),

  verifyOtp: (mobile: string, otp: string) =>
    http.post("/auth/verify-otp", { mobile, otp }),

  providerSignup: (data: {
    mobile: string;
    password: string;
    ownerName: string;
    businessName: string;
    alternateMobile?: string;
    address: string;
    city: string;
  }) => http.post("/auth/provider/signup", data),

  customerSignup: (data: {
    mobile: string;
    password: string;
    fullName: string;
  }) => http.post("/auth/customer/signup", data),

  signin: (mobile: string, password: string) =>
    http.post("/auth/signin", { mobile, password }),
};
