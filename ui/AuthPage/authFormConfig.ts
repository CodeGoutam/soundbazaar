import { z } from "zod";

// ─── Mobile schema (shared between signup + login) ────────────────────────────
export const mobileSchema = z.object({
  mobile: z
    .string()
    .min(10, "Mobile number must be 10 digits")
    .max(10, "Mobile number must be 10 digits"),
  // .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
});

export type MobileFormData = z.infer<typeof mobileSchema>;
