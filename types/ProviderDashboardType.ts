export interface Booking {
  id: string;
  customer_name: string;
  event_type: string;
  event_date: string;
  event_time: string;
  location: string;
  total_amount: number;
  booking_status:
    | "confirmed"
    | "token_paid"
    | "in_progress"
    | "completed"
    | "cancelled";
  call_confirmed: boolean;
}

export interface ProviderStats {
  total_bookings: number;
  average_rating: number;
  total_earnings: number;
  pending_amount: number;
}

export type FilterKey =
  | "all"
  | "confirmed"
  | "token_paid"
  | "in_progress"
  | "completed"
  | "cancelled";
