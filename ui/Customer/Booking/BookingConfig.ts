import { z } from "zod";

// ─── Validation schema ─────────────────────────────────────────────────────────
export const bookingSchema = z.object({
  event_date: z
    .string()
    .min(1, "Select an event date")
    .refine((d) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return new Date(d) >= today;
    }, "Date cannot be in the past"),
  event_start_time: z.string().min(1, "Select a start time"),
  event_address: z.string().min(5, "Enter the full event address"),
  event_city: z.string().min(2, "Enter the city"),
  event_type: z.string().min(1, "Select an event type"),
  special_requests: z.string().max(500, "Too long").optional(),
});
