import { ConfirmedBooking } from "@/types/Booking.types";

export type BookingStatus = "confirmed" | "completed" | "pending" | "cancelled";

export interface EnhancedBooking extends ConfirmedBooking {
  status: BookingStatus;
}

export const DUMMY_BOOKINGS: EnhancedBooking[] = [
  {
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
    status: "confirmed",
  },
  {
    booking_id: "SL-20260410-A1Z8",
    service_name: "Live Accoustic Band",
    event_type: "Corporate Event",
    event_date: "2026-04-25",
    event_start_time: "19:00",
    duration_hours: 4,
    event_address: "Grand Hyatt, MG Road",
    event_city: "Bengaluru",
    base_price: 25000,
    extra_hours_charge: 0,
    travel_charge: 0,
    subtotal: 25000,
    token_paid: 5000,
    remaining_amount: 20000,
    provider: {
      business_name: "The Melodic Vibes",
      owner_name: "Anita Singh",
      mobile: "+91 91234 56789",
      city: "Bengaluru",
    },
    booked_at: new Date(Date.now() - 86400000 * 5).toISOString(),
    status: "pending",
  },
  {
    booking_id: "SL-20260320-C3M4",
    service_name: "Premium Lighting Setup",
    event_type: "Birthday Party",
    event_date: "2026-03-20",
    event_start_time: "17:00",
    duration_hours: 6,
    event_address: "Prestige Shantiniketan",
    event_city: "Bengaluru",
    base_price: 8000,
    extra_hours_charge: 2000,
    travel_charge: 300,
    subtotal: 10300,
    token_paid: 10300,
    remaining_amount: 0,
    provider: {
      business_name: "Glow Events",
      owner_name: "Suresh Kumar",
      mobile: "+91 99887 76655",
      city: "Bengaluru",
    },
    booked_at: new Date(Date.now() - 86400000 * 30).toISOString(),
    status: "completed",
  },
];
