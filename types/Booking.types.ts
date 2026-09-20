export interface ConfirmedBooking {
  booking_id: string;
  service_name: string;
  event_type: string;
  event_date: string; // "2026-05-15"
  event_start_time: string; // "18:00"
  duration_hours: number;
  event_address: string;
  event_city: string;
  base_price: number;
  extra_hours_charge: number;
  travel_charge: number;
  subtotal: number;
  token_paid: number;
  remaining_amount: number;
  provider: {
    business_name: string;
    owner_name: string;
    mobile: string;
    city: string;
  };
  booked_at: string; // ISO
}
