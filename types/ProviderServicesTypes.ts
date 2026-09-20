// ─── Distance slab ────────────────────────────────────────────────────────────
export interface DistanceSlab {
  id: string; // uuid for list key
  from_km: number;
  to_km: number | null; // null means "100+ km" (open-ended)
  charge: number; // extra charge in ₹ (0 = free)
  not_available: boolean; // provider won't go this far
}

// ─── Service form data ────────────────────────────────────────────────────────
export interface ServiceFormData {
  // Section 1 — Basic info
  service_name: string;
  description: string;
  event_types: string[];
  max_capacity: string; // stored as string for select

  // Section 2 — Duration pricing
  base_price: number;
  min_hours: number;
  extra_hour_rate: number;
  max_hours: number;

  // Section 3 — Distance slabs (managed separately)
  distance_slabs: DistanceSlab[];

  // Section 4 — Availability
  advance_notice_days: number;
  available_days: string[];
  special_notes: string;

  // Image
  image_url: string | null;
  image_file: File | null;
}

// ─── Saved service (from API) ─────────────────────────────────────────────────
export interface Service {
  id: string;
  provider_id: string;
  service_name: string;
  description: string;
  event_types: string[];
  max_capacity: string;
  base_price: number;
  min_hours: number;
  extra_hour_rate: number;
  max_hours: number;
  distance_slabs: DistanceSlab[];
  advance_notice_days: number;
  available_days: string[];
  special_notes: string;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────
export const EVENT_TYPES = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Sangeet / Mehendi",
  "Outdoor Concert",
  "DJ Night",
  "Anniversary",
  "Other",
] as const;

export const CAPACITY_OPTIONS = [
  { value: "50", label: "Up to 50 guests" },
  { value: "100", label: "Up to 100 guests" },
  { value: "200", label: "Up to 200 guests" },
  { value: "500", label: "Up to 500 guests" },
  { value: "1000", label: "Up to 1000 guests" },
  { value: "1000+", label: "1000+ guests" },
] as const;

export const DAYS_OF_WEEK = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;

export const DEFAULT_SLABS: DistanceSlab[] = [
  { id: "s1", from_km: 0, to_km: 10, charge: 0, not_available: false },
  { id: "s2", from_km: 11, to_km: 25, charge: 500, not_available: false },
  { id: "s3", from_km: 26, to_km: 50, charge: 1200, not_available: false },
  { id: "s4", from_km: 51, to_km: 100, charge: 2500, not_available: false },
  { id: "s5", from_km: 101, to_km: null, charge: 0, not_available: true },
];

export const DEFAULT_FORM: ServiceFormData = {
  service_name: "",
  description: "",
  event_types: [],
  max_capacity: "200",
  base_price: 0,
  min_hours: 4,
  extra_hour_rate: 0,
  max_hours: 12,
  distance_slabs: DEFAULT_SLABS,
  advance_notice_days: 2,
  available_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  special_notes: "",
  image_url: null,
  image_file: null,
};
