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
  Add,
  Phone,
  CheckCircle,
} from "@mui/icons-material";
import { Box, Button, Chip, Typography } from "@mui/material";
import { styles } from "./Dashboard.styles";
import { formateDate, STATUS_CFG } from "@/lib/utils";

// ─── Stats config ──────────────────────────────────────────────────────────────
export const STATS_CONFIG = [
  {
    key: "total_bookings",
    label: "Total bookings",
    sub: "All time",
    accent: "#C4893A",
    icon: <CalendarMonth sx={{ fontSize: 14, color: "#C4893A" }} />,
    getValue: (s: ProviderStats) => `${s.total_bookings}`,
  },
  {
    key: "avg_rating",
    label: "Avg. rating",
    sub: "From customers",
    accent: "#EAB308",
    icon: <Star sx={{ fontSize: 14, color: "#EAB308" }} />,
    getValue: (s: ProviderStats) => `${s.average_rating.toFixed(1)} ★`,
  },
  {
    key: "total_earned",
    label: "Total earned",
    sub: "After platform fee",
    accent: "#16a34a",
    icon: <AccountBalanceWallet sx={{ fontSize: 14, color: "#16a34a" }} />,
    getValue: (s: ProviderStats) => `₹${(s.total_earnings / 1000).toFixed(0)}k`,
  },
  {
    key: "pending_payout",
    label: "Pending payout",
    sub: "Clears in 2–3 days",
    accent: "#2563EB",
    icon: <TrendingUp sx={{ fontSize: 14, color: "#2563EB" }} />,
    getValue: (s: ProviderStats) => `₹${(s.pending_amount / 1000).toFixed(1)}k`,
  },
];

export const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "token_paid", label: "Token Paid" },
  { key: "confirmed", label: "Confirmed" },
  { key: "in_progress", label: "In Progress" },
  { key: "completed", label: "Completed" },
  { key: "cancelled", label: "Cancelled" },
];

export const QUICK_ACTIONS = [
  "📋 View Profile",
  "🎵 My Services",
  "📅 Availability",
  "📊 Analytics",
];

export const columns: Column<Booking>[] = [
  // 1. Event
  {
    id: "event",
    label: "Event",
    width: "26%",
    align: "left",
    render: (b) => (
      <Box>
        <Typography sx={styles.eventName}>{b.event_type}</Typography>
        <Typography sx={styles.eventCustomer}>{b.customer_name}</Typography>
        <Typography sx={styles.eventId}>#{b.id}</Typography>
      </Box>
    ),
  },

  // 2. Date & Time
  {
    id: "date",
    label: "Date & Time",
    width: "16%",
    align: "left",
    render: (b) => (
      <Box>
        <Typography sx={styles.dateValue}>
          {formateDate(b.event_date)}
        </Typography>
        <Typography sx={styles.timeValue}>{b.event_time}</Typography>
      </Box>
    ),
  },

  // 3. Total amount
  {
    id: "total",
    label: "Total",
    width: "14%",
    align: "right",
    render: (b) => (
      <Typography sx={styles.totalAmount}>
        ₹{b.total_amount.toLocaleString("en-IN")}
      </Typography>
    ),
  },

  // 4. Provider earnings
  {
    id: "earnings",
    label: "You Earn",
    width: "14%",
    align: "right",
    render: (b) => (
      <Typography sx={styles.earningAmount}>
        ₹{(b.total_amount * 0.9).toLocaleString("en-IN")}
      </Typography>
    ),
  },

  // 5. Status
  {
    id: "status",
    label: "Status",
    width: "15%",
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
    label: "Action",
    width: "15%",
    align: "center",
    render: (b) => {
      const canCall =
        !b.call_confirmed &&
        b.booking_status !== "cancelled" &&
        b.booking_status !== "completed";

      if (canCall) {
        return (
          <Button
            size="small"
            startIcon={<Phone sx={{ fontSize: 12 }} />}
            sx={styles.confirmCallBtn}
          >
            Confirm Call
          </Button>
        );
      }

      if (b.call_confirmed) {
        return (
          <Box sx={styles.callDoneBox}>
            <CheckCircle sx={{ fontSize: 13, color: "#16a34a" }} />
            <Typography sx={styles.callDoneText}>Call done</Typography>
          </Box>
        );
      }

      return <Typography sx={styles.callDashText}>—</Typography>;
    },
  },
];
