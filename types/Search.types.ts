// ─── Service with provider ────────────────────────────────────────────────────
export interface ServiceWithProvider {
  id: string;
  service_name: string;
  description: string;
  equipment_type: "sound" | "dj" | "lighting" | "combo";
  base_price: number;
  min_hours: number;
  extra_hour_rate: number;
  max_capacity: string;
  event_types: string[];
  image_url: string | null;
  location: string;
  advance_notice_days: number;
  is_featured?: boolean;
  setup_included?: boolean;
  crew_members?: number;
  provider: {
    id: string;
    business_name: string;
    owner_name: string;
    average_rating: number;
    total_bookings: number;
    city: string;
    is_verified?: boolean;
    response_time?: string;
  };
}

// ─── Active filters ───────────────────────────────────────────────────────────
export interface SearchFilters {
  type: string;
  maxPrice: number;
  minRating: number;
  city: string;
  sortBy: "price_asc" | "price_desc" | "rating" | "bookings";
}

export const DEFAULT_FILTERS: SearchFilters = {
  type: "all",
  maxPrice: 100000,
  minRating: 0,
  city: "all",
  sortBy: "rating",
};

// ─── Filter options ───────────────────────────────────────────────────────────
export const SERVICE_TYPES = [
  { val: "all", label: "All Services", icon: "🎵" },
  { val: "sound", label: "Sound Systems", icon: "🔊" },
  { val: "dj", label: "DJ Setups", icon: "🎧" },
  { val: "lighting", label: "Stage Lighting", icon: "💡" },
  { val: "combo", label: "Combo Packs", icon: "✨" },
] as const;

export const RATING_OPTIONS = [
  { val: 0, label: "Any rating" },
  { val: 3, label: "3+ ★" },
  { val: 4, label: "4+ ★" },
  { val: 4.5, label: "4.5+ ★" },
] as const;

export const SORT_OPTIONS = [
  { val: "rating", label: "Top Rated" },
  { val: "price_asc", label: "Price: Low to High" },
  { val: "price_desc", label: "Price: High to Low" },
  { val: "bookings", label: "Most Booked" },
] as const;

export const CITIES = [
  "all",
  "Gurugram",
  "Delhi",
  "Noida",
  "Faridabad",
  "Ghaziabad",
] as const;

// ─── Dummy data ───────────────────────────────────────────────────────────────
export const DUMMY_SERVICES: ServiceWithProvider[] = [
  {
    id: "svc4",
    service_name: "Ultimate Wedding & Concert Combo",
    description:
      "The complete event audio-visual experience. Dual JBL SRX 2000W sound system, Pioneer CDJ-3000 DJ booth, computerized intelligent beam moving heads, haze/fog machines, and 3-person professional audio engineer crew.",
    equipment_type: "combo",
    base_price: 35000,
    min_hours: 6,
    extra_hour_rate: 4000,
    max_capacity: "500",
    event_types: ["Wedding", "Sangeet", "DJ Night"],
    image_url:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    location: "Gurugram",
    advance_notice_days: 3,
    is_featured: true,
    setup_included: true,
    crew_members: 3,
    provider: {
      id: "p4",
      business_name: "EventPro Sound & Stage",
      owner_name: "Ankit Mehta",
      average_rating: 4.9,
      total_bookings: 184,
      city: "Gurugram",
      is_verified: true,
      response_time: "under 15 mins",
    },
  },
  {
    id: "svc1",
    service_name: "Pro Wedding DJ & Sangeet Rig",
    description:
      "Full DJ setup with 2× JBL SRX835P 2000W speakers, Pioneer CDJ-2000 NXS2 decks, 32-channel Behringer mixer, 4× LED moving heads, fog machine. Perfect for wedding receptions and high-energy sangeet nights.",
    equipment_type: "dj",
    base_price: 15000,
    min_hours: 6,
    extra_hour_rate: 2000,
    max_capacity: "300",
    event_types: ["Wedding", "Sangeet / Mehendi"],
    image_url:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    location: "Gurugram",
    advance_notice_days: 2,
    is_featured: false,
    setup_included: true,
    crew_members: 2,
    provider: {
      id: "p1",
      business_name: "Rahul Sound & Beat Systems",
      owner_name: "Rahul Sharma",
      average_rating: 4.8,
      total_bookings: 127,
      city: "Gurugram",
      is_verified: true,
      response_time: "under 30 mins",
    },
  },
  {
    id: "svc3",
    service_name: "Concert Beam & LED Stage Lighting",
    description:
      "Professional intelligent LED lighting package — 8× moving heads, 4× LED par cans, 2× beam lights, 1× follow spot, DMX controller. Transforms banquets, lawns, and halls into an electrifying atmosphere.",
    equipment_type: "lighting",
    base_price: 10000,
    min_hours: 5,
    extra_hour_rate: 1200,
    max_capacity: "500",
    event_types: ["Wedding", "Birthday Party", "Live Stage"],
    image_url:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    location: "Noida",
    advance_notice_days: 2,
    is_featured: false,
    setup_included: true,
    crew_members: 2,
    provider: {
      id: "p3",
      business_name: "BrightEvents Illumination",
      owner_name: "Priya Gupta",
      average_rating: 4.7,
      total_bookings: 156,
      city: "Noida",
      is_verified: true,
      response_time: "under 1 hr",
    },
  },
  {
    id: "svc2",
    service_name: "Corporate Conference PA & Audio Rig",
    description:
      "High-fidelity acoustic speech setup for corporate events. 2× QSC K12.2 active speakers, Yamaha MG12XU mixer, 2× wireless lapel + handheld mics, auxiliary laptop inputs. Crystal clear vocals and zero feedback.",
    equipment_type: "sound",
    base_price: 8000,
    min_hours: 4,
    extra_hour_rate: 1500,
    max_capacity: "200",
    event_types: ["Corporate Event", "Seminar", "Keynote"],
    image_url:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    location: "Delhi",
    advance_notice_days: 1,
    is_featured: false,
    setup_included: true,
    crew_members: 1,
    provider: {
      id: "p2",
      business_name: "AudioMax Pro Solutions",
      owner_name: "Vikram Singh",
      average_rating: 4.6,
      total_bookings: 89,
      city: "Delhi",
      is_verified: true,
      response_time: "under 20 mins",
    },
  },
  {
    id: "svc5",
    service_name: "Private Party Sound & Ambient Lights",
    description:
      "Compact party package — 2× high-power floor speakers, wireless Bluetooth/AUX input, wireless mic, LED party wash strobe lights. Compact footprint, massive punch, hassle-free setup.",
    equipment_type: "combo",
    base_price: 6000,
    min_hours: 4,
    extra_hour_rate: 1000,
    max_capacity: "100",
    event_types: ["Birthday Party", "House Party", "Anniversary"],
    image_url:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    location: "Faridabad",
    advance_notice_days: 1,
    is_featured: false,
    setup_included: true,
    crew_members: 1,
    provider: {
      id: "p5",
      business_name: "Party Sound Hub",
      owner_name: "Meera Patel",
      average_rating: 4.4,
      total_bookings: 212,
      city: "Faridabad",
      is_verified: true,
      response_time: "under 15 mins",
    },
  },
  {
    id: "svc6",
    service_name: "Outdoor Festival Stage Line-Array Rig",
    description:
      "Heavy-duty outdoor concert system. 4× dual 10″ line-array cabinets, 2× dual 18″ subwoofers, 32-channel digital console with stage snake, 2 stage monitors. Full coverage for 500-1500 attendees.",
    equipment_type: "sound",
    base_price: 45000,
    min_hours: 8,
    extra_hour_rate: 3500,
    max_capacity: "1200",
    event_types: ["Outdoor Concert", "College Fest", "Festival"],
    image_url:
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=800&q=80",
    location: "Delhi",
    advance_notice_days: 4,
    is_featured: true,
    setup_included: true,
    crew_members: 4,
    provider: {
      id: "p6",
      business_name: "Stage Sound India Pro",
      owner_name: "Suresh Kumar",
      average_rating: 4.9,
      total_bookings: 95,
      city: "Delhi",
      is_verified: true,
      response_time: "under 1 hr",
    },
  },
];
