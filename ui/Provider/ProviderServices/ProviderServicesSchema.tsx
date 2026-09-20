import { z } from "zod";

export const serviceSchema = z
  .object({
    service_name: z
      .string()
      .min(3, "Service name must be at least 3 characters")
      .max(80, "Service name is too long"),

    description: z
      .string()
      .min(20, "Please describe your equipment in at least 20 characters")
      .max(1000, "Description is too long"),

    event_types: z.array(z.string()).min(1, "Select at least one event type"),

    max_capacity: z.string().min(1, "Select a capacity"),

    base_price: z
      .number({ error: "Enter a valid price" })
      .min(500, "Base price must be at least ₹500")
      .max(500000, "Base price seems too high"),

    min_hours: z
      .number({ error: "Enter minimum hours" })
      .min(1, "Minimum 1 hour")
      .max(24, "Cannot exceed 24 hours"),

    extra_hour_rate: z
      .number({ error: "Enter a valid rate" })
      .min(0, "Rate cannot be negative")
      .max(50000, "Rate seems too high"),

    max_hours: z
      .number({ error: "Enter maximum hours" })
      .min(1, "Minimum 1 hour")
      .max(24, "Cannot exceed 24 hours"),

    advance_notice_days: z
      .number()
      .min(0, "Cannot be negative")
      .max(30, "Maximum 30 days"),

    available_days: z.array(z.string()).min(1, "Select at least one day"),

    special_notes: z.string().max(500, "Notes are too long").optional(),
  })
  .refine((d) => d.max_hours >= d.min_hours, {
    message: "Max hours must be ≥ minimum hours",
    path: ["max_hours"],
  });

export type ServiceSchemaData = z.infer<typeof serviceSchema>;
