// ─── Re-use ServiceWithProvider from search, extend with reviews ─────────────
export interface Review {
  id: string;
  customer_name: string;
  avatar_initial: string;
  rating: number;
  comment: string;
  event_type: string;
  created_at: string; // ISO string
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnailUrl?: string;
  title?: string;
}

export interface ServiceDetail {
  id: string;
  service_name: string;
  description: string;
  equipment_type: "sound" | "dj" | "lighting" | "combo";
  base_price: number;
  min_hours: number;
  extra_hour_rate: number;
  max_hours: number;
  max_capacity: string;
  event_types: string[];
  image_url: string | null;
  media?: MediaItem[];
  advance_notice_days: number;
  available_days: string[];
  special_notes: string;
  distance_slabs: DistanceSlab[];
  is_active: boolean;
  provider: ProviderPublic;
  reviews: Review[];
  average_rating: number;
  total_bookings: number;
}

export interface ProviderPublic {
  id: string;
  business_name: string;
  owner_name: string;
  city: string;
  area: string;
  average_rating: number;
  total_bookings: number;
  total_services: number;
  member_since: string; // "Jan 2025"
}

export interface DistanceSlab {
  id: string;
  from_km: number;
  to_km: number | null;
  charge: number;
  not_available: boolean;
}

// ─── Booking form ──────────────────────────────────────────────────────────────
export interface BookingFormData {
  event_date: string; // "YYYY-MM-DD"
  event_start_time: string; // "HH:MM"
  duration_hours: number;
  event_address: string;
  event_city: string;
  event_type: string;
  special_requests: string;
}

// ─── Pricing calculation ───────────────────────────────────────────────────────
export interface PriceBreakdown {
  base_price: number;
  extra_hours: number;
  extra_hours_charge: number;
  travel_charge: number;
  subtotal: number;
  platform_fee: number; // 10% — charged to provider, not customer
  token_amount: number; // 15% of subtotal — paid now
  remaining_amount: number; // paid after event
}

export function calcPriceBreakdown(
  service: ServiceDetail,
  hours: number,
  distanceKm: number,
): PriceBreakdown {
  const extraHours = Math.max(0, hours - service.min_hours);
  const extraCharge = extraHours * service.extra_hour_rate;
  const baseTotal = service.base_price + extraCharge;

  // Find matching distance slab
  const slab = service.distance_slabs.find(
    (s) =>
      distanceKm >= s.from_km && (s.to_km === null || distanceKm <= s.to_km),
  );
  const travelCharge = slab && !slab.not_available ? slab.charge : 0;

  const subtotal = baseTotal + travelCharge;
  const platformFee = Math.round(subtotal * 0.1);
  const tokenAmount = Math.round(subtotal * 0.15);
  const remaining = subtotal - tokenAmount;

  return {
    base_price: service.base_price,
    extra_hours: extraHours,
    extra_hours_charge: extraCharge,
    travel_charge: travelCharge,
    subtotal,
    platform_fee: platformFee,
    token_amount: tokenAmount,
    remaining_amount: remaining,
  };
}

// ─── Dummy data ────────────────────────────────────────────────────────────────
export const DUMMY_SERVICE_DETAIL: ServiceDetail = {
  id: "svc1",
  service_name: "Wedding DJ Package",
  description:
    "Full professional DJ setup for weddings and sangeet nights. Our package includes two JBL SRX835P 2000W powered speakers delivering crystal-clear sound for up to 300 guests, Pioneer CDJ-2000 NXS2 media players, a 32-channel Behringer X32 digital mixer, and a full LED light show with 4 moving heads, 2 LED wash bars, and a fog machine.\n\nOur experienced DJ has performed at 120+ weddings across Delhi NCR. We handle the complete setup and sound check 2 hours before your event begins. All cables, stands, and accessories are included — you just enjoy the night.",
  equipment_type: "dj",
  base_price: 15000,
  min_hours: 6,
  extra_hour_rate: 2000,
  max_hours: 12,
  max_capacity: "300",
  event_types: [
    "Wedding",
    "Sangeet / Mehendi",
    "Anniversary",
    "Birthday Party",
  ],
  image_url:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  media: [
    {
      id: "m1",
      type: "image",
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
      title: "DJ Console & Setup",
    },
    {
      id: "m2",
      type: "image",
      url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
      title: "Stage Sound System",
    },
    {
      id: "m3",
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
      title: "Live Event Demo Video",
    },
    {
      id: "m4",
      type: "image",
      url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80",
      title: "LED Lighting Show",
    },
  ],
  advance_notice_days: 3,
  available_days: ["Thu", "Fri", "Sat", "Sun"],
  special_notes:
    "Setup requires 2 hrs before event. Outdoor events need a covered area or generator arrangement. LED lights not available for daytime events.",
  is_active: true,
  distance_slabs: [
    { id: "d1", from_km: 0, to_km: 10, charge: 0, not_available: false },
    { id: "d2", from_km: 11, to_km: 25, charge: 500, not_available: false },
    { id: "d3", from_km: 26, to_km: 50, charge: 1200, not_available: false },
    { id: "d4", from_km: 51, to_km: 100, charge: 2500, not_available: false },
    { id: "d5", from_km: 101, to_km: null, charge: 0, not_available: true },
  ],
  provider: {
    id: "p1",
    business_name: "Rahul Sound Systems",
    owner_name: "Rahul Sharma",
    city: "Gurugram",
    area: "Sector 14",
    average_rating: 4.8,
    total_bookings: 127,
    total_services: 3,
    member_since: "Jan 2025",
  },
  average_rating: 4.8,
  total_bookings: 127,
  reviews: [
    {
      id: "r1",
      customer_name: "Priya Mehta",
      avatar_initial: "P",
      rating: 5,
      comment:
        "Absolutely amazing! The sound quality was perfect and the light show made our sangeet night unforgettable. Rahul and his team were professional and arrived on time for setup.",
      event_type: "Sangeet / Mehendi",
      created_at: "2026-03-15T10:00:00Z",
    },
    {
      id: "r2",
      customer_name: "Vikram Singh",
      avatar_initial: "V",
      rating: 5,
      comment:
        "Best DJ service in Gurugram without a doubt. Booked for my wedding reception — crowd was dancing all night. Very responsive on calls during booking process.",
      event_type: "Wedding",
      created_at: "2026-02-20T10:00:00Z",
    },
    {
      id: "r3",
      customer_name: "Ananya Kapoor",
      avatar_initial: "A",
      rating: 4,
      comment:
        "Great service overall. Sound was excellent, team was professional. Only minor issue was a 30-minute delay in setup but they made up for it. Would book again.",
      event_type: "Birthday Party",
      created_at: "2026-01-10T10:00:00Z",
    },
  ],
};
