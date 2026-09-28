import { Column } from "@/components/GenericTable/GenericTable";
import {
  Booking,
  FilterKey,
  ProviderStats,
} from "@/types/ProviderDashboardType";
import {
  CalendarMonth,
  Star,
  AccountBalanceWallet,
  TrendingUp,
  Phone,
  CheckCircle,
  VisibilityOutlined,
  LocationOn,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { styles } from "./Dashboard.styles";
import { formateDate, STATUS_CFG } from "@/lib/utils";

// ─── Stats config ──────────────────────────────────────────────────────────────
export const STATS_CONFIG = [
  {
    key: "total_bookings",
    label: "Total bookings",
    sub: "All-time events handled",
    accent: "#C4893A",
    badge: "+8 this month",
    icon: <CalendarMonth sx={{ fontSize: 18, color: "#C4893A" }} />,
    getValue: (s: ProviderStats) => `${s.total_bookings}`,
  },
  {
    key: "avg_rating",
    label: "Customer Rating",
    sub: "Based on 42 client reviews",
    accent: "#EAB308",
    badge: "Top Rated ★",
    icon: <Star sx={{ fontSize: 18, color: "#EAB308" }} />,
    getValue: (s: ProviderStats) => `${s.average_rating.toFixed(1)} ★`,
  },
  {
    key: "total_earned",
    label: "Total Net Revenue",
    sub: "After 10% platform fee",
    accent: "#16a34a",
    badge: "+18% MoM",
    icon: <AccountBalanceWallet sx={{ fontSize: 18, color: "#16a34a" }} />,
    getValue: (s: ProviderStats) => `₹${(s.total_earnings / 1000).toFixed(0)}k`,
  },
  {
    key: "pending_payout",
    label: "Pending Escrow",
    sub: "Releases 24h post-event",
    accent: "#2563EB",
    badge: "Secured Deposit",
    icon: <TrendingUp sx={{ fontSize: 18, color: "#2563EB" }} />,
    getValue: (s: ProviderStats) => `₹${(s.pending_amount / 1000).toFixed(1)}k`,
  },
];

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All Bookings" },
  { key: "token_paid", label: "Token Paid" },
  { key: "confirmed", label: "Confirmed" },
  { key: "in_progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

export interface BusinessHubItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  route: string;
  cta: string;
}

export const BUSINESS_HUBS: BusinessHubItem[] = [
  {
    id: "services",
    title: "My Services",
    desc: "Update audio equipment, distance slabs & pricing packages",
    icon: "🔊",
    route: "/services",
    cta: "Manage services →",
  },
  {
    id: "profile",
    title: "Business Profile",
    desc: "Edit brand bio, operating areas, photos & contact info",
    icon: "✨",
    route: "/onboard",
    cta: "Edit profile →",
  },
  {
    id: "earnings",
    title: "Payouts & Escrow",
    desc: "Monitor token deposits, fee deductions & bank settlements",
    icon: "💳",
    route: "#stats-section",
    cta: "View settlements ↓",
  },
];

export const QUICK_ACTIONS = [
  "📋 View Profile",
  "🎵 My Services",
  "📅 Availability",
  "📊 Analytics",
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

// Factory for columns with interactive callbacks
export const getColumns = (
  onConfirmCall: (id: string) => void,
  onViewDetails: (b: Booking) => void,
): Column<Booking>[] => [
  // 1. Event & Customer
  {
    id: "event",
    label: "Event & Customer",
    width: "28%",
    align: "left",
    render: (b) => (
      <Box sx={styles.clientCell}>
        <Box sx={styles.clientAvatar}>{getInitials(b.customer_name)}</Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={styles.eventName}>{b.event_type}</Typography>
          <Typography sx={styles.eventCustomer}>{b.customer_name}</Typography>
          <Typography sx={styles.eventId}>Ref #{b.id}</Typography>
        </Box>
      </Box>
    ),
  },

  // 2. Date, Time & Venue
  {
    id: "date",
    label: "Date & Venue",
    width: "22%",
    align: "left",
    render: (b) => (
      <Box>
        <Typography sx={styles.dateValue}>
          {formateDate(b.event_date)}
        </Typography>
        <Typography sx={styles.timeValue}>{b.event_time}</Typography>
        <Typography sx={styles.locationValue}>
          <LocationOn sx={{ fontSize: 13, color: "#A8A29E" }} />
          {b.location}
        </Typography>
      </Box>
    ),
  },

  // 3. Total amount
  {
    id: "total",
    label: "Total Booking",
    width: "14%",
    align: "right",
    render: (b) => (
      <Box sx={{ textAlign: "right" }}>
        <Typography sx={styles.totalAmount}>
          ₹{b.total_amount.toLocaleString("en-IN")}
        </Typography>
        <Typography sx={styles.tokenPaidNote}>
          Token ₹{(b.total_amount * 0.2).toLocaleString("en-IN")}
        </Typography>
      </Box>
    ),
  },

  // 4. Provider earnings
  {
    id: "earnings",
    label: "Net Earnings",
    width: "14%",
    align: "right",
    render: (b) => (
      <Box sx={{ textAlign: "right" }}>
        <Typography sx={styles.earningAmount}>
          ₹{(b.total_amount * 0.9).toLocaleString("en-IN")}
        </Typography>
        <Typography sx={{ fontSize: "0.68rem", color: "#A8A29E" }}>
          (90% post fee)
        </Typography>
      </Box>
    ),
  },

  // 5. Status
  {
    id: "status",
    label: "Status",
    width: "12%",
    align: "center",
    render: (b) => {
      const cfg = STATUS_CFG[b.booking_status];
      return (
        <Chip
          label={cfg?.label ?? b.booking_status}
          size="small"
          sx={styles.statusChip(cfg?.bg ?? "#eee", cfg?.color ?? "#333")}
        />
      );
    },
  },

  // 6. Action
  {
    id: "action",
    label: "Actions",
    width: "10%",
    align: "center",
    render: (b) => {
      const canCall =
        !b.call_confirmed &&
        b.booking_status !== "cancelled" &&
        b.booking_status !== "completed";

      return (
        <Box sx={styles.actionGroup}>
          {canCall ? (
            <Button
              size="small"
              startIcon={<Phone sx={{ fontSize: 12 }} />}
              onClick={() => onConfirmCall(b.id)}
              sx={styles.confirmCallBtn}
            >
              Confirm Call
            </Button>
          ) : b.call_confirmed ? (
            <Box sx={styles.callDoneBox}>
              <CheckCircle sx={{ fontSize: 13, color: "#16a34a" }} />
              <Typography sx={styles.callDoneText}>Call done</Typography>
            </Box>
          ) : (
            <Typography sx={{ color: "#A8A29E", fontSize: "0.8rem" }}>
              —
            </Typography>
          )}

          <Tooltip title="View Booking Details">
            <IconButton
              size="small"
              onClick={() => onViewDetails(b)}
              sx={styles.detailsIconBtn}
            >
              <VisibilityOutlined sx={{ fontSize: 15 }} />
            </IconButton>
          </Tooltip>
        </Box>
      );
    },
  },
];

// Fallback static columns for default GenericTable use
export const columns: Column<Booking>[] = getColumns(
  () => {},
  () => {},
);
