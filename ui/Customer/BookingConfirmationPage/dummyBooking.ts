import { ConfirmedBooking } from "@/types/Booking.types";

// ─── Dummy confirmed booking ───────────────────────────────────────────────────
export const DUMMY_BOOKING: ConfirmedBooking = {
  booking_id: "SL-20260415-B7K2",
  service_name: "Wedding DJ Package",
  event_type: "Wedding",
  event_date: "2026-05-15",
  event_start_time: "18:00",
  duration_hours: 8,
  event_address: "12, Rose Garden Banquet Hall, Sector 29",
  event_city: "Gurugram",
  base_price: 15000,
  extra_hours_charge: 4000,
  travel_charge: 500,
  subtotal: 19500,
  token_paid: 2925,
  remaining_amount: 16575,
  provider: {
    business_name: "Rahul Sound Systems",
    owner_name: "Rahul Sharma",
    mobile: "+91 98765 43210",
    city: "Gurugram",
  },
  booked_at: new Date().toISOString(),
};
