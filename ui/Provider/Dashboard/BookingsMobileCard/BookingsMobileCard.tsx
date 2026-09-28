import { STATUS_CFG } from "@/lib/utils";
import { Booking } from "@/types/ProviderDashboardType";
import {
  CalendarMonth,
  CheckCircle,
  LocationOn,
  Phone,
  VisibilityOutlined,
} from "@mui/icons-material";
import { Box, Button, Chip, Divider, Paper, Typography } from "@mui/material";
import { styles } from "./BookingMobileCard.styles";

interface MobileCardProps {
  b: Booking;
  onConfirmCall?: (id: string) => void;
  onViewDetails?: (b: Booking) => void;
}

export function MobileCard({
  b,
  onConfirmCall,
  onViewDetails,
}: MobileCardProps) {
  const cfg = STATUS_CFG[b.booking_status];

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  const canCall =
    !b.call_confirmed &&
    b.booking_status !== "cancelled" &&
    b.booking_status !== "completed";

  return (
    <Paper elevation={0} sx={styles.container}>
      {/* Header Section with Customer Avatar */}
      <Box sx={styles.headerBox}>
        <Box sx={styles.clientGroup}>
          <Box sx={styles.avatar}>{getInitials(b.customer_name)}</Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography sx={styles.eventType}>{b.event_type}</Typography>
            <Typography sx={styles.customerName}>{b.customer_name}</Typography>
            <Typography sx={styles.eventMeta}>
              <CalendarMonth sx={{ fontSize: 13, color: "#C4893A" }} />
              {fmt(b.event_date)} · {b.event_time}
            </Typography>
            <Typography sx={styles.location}>
              <LocationOn sx={{ fontSize: 13, color: "#A8A29E" }} />
              {b.location}
            </Typography>
          </Box>
        </Box>
        <Chip
          label={cfg?.label ?? b.booking_status}
          size="small"
          sx={styles.statusChip(cfg)}
        />
      </Box>

      <Divider sx={styles.divider} />

      {/* Footer Section */}
      <Box sx={styles.footerBox}>
        <Box sx={styles.statsGroup}>
          <Box>
            <Typography sx={styles.statLabel}>Total</Typography>
            <Typography sx={styles.totalValue}>
              ₹{b.total_amount.toLocaleString("en-IN")}
            </Typography>
          </Box>
          <Box>
            <Typography sx={styles.statLabel}>You earn</Typography>
            <Typography sx={styles.earnValue}>
              ₹{(b.total_amount * 0.9).toLocaleString("en-IN")}
            </Typography>
          </Box>
        </Box>

        <Box sx={styles.actionsGroup}>
          {onViewDetails && (
            <Button
              size="small"
              startIcon={<VisibilityOutlined sx={{ fontSize: 13 }} />}
              onClick={() => onViewDetails(b)}
              sx={styles.detailsBtn}
            >
              Details
            </Button>
          )}

          {canCall ? (
            <Button
              size="small"
              startIcon={<Phone sx={{ fontSize: 12 }} />}
              onClick={() => onConfirmCall?.(b.id)}
              sx={styles.callButton}
            >
              Confirm Call
            </Button>
          ) : b.call_confirmed ? (
            <Box sx={styles.callDoneBox}>
              <CheckCircle sx={{ fontSize: 13, color: "#16a34a" }} />
              <Typography sx={styles.callDoneText}>Call done</Typography>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Paper>
  );
}
