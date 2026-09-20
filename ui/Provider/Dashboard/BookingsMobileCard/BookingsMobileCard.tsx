import { STATUS_CFG } from "@/lib/utils";
import { Booking } from "@/types/ProviderDashboardType";
import { CheckCircle, Phone } from "@mui/icons-material";
import { Box, Button, Chip, Divider, Paper, Typography } from "@mui/material";
import { styles } from "./BookingMobileCard.styles";

export function MobileCard({ b }: { b: Booking }) {
  const cfg = STATUS_CFG[b.booking_status];

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const canCall =
    !b.call_confirmed &&
    b.booking_status !== "cancelled" &&
    b.booking_status !== "completed";

  return (
    <Paper elevation={0} sx={styles.container}>
      {/* Header Section */}
      <Box sx={styles.headerBox}>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={styles.eventType}>{b.event_type}</Typography>
          <Typography sx={styles.eventMeta}>
            {fmt(b.event_date)} · {b.event_time}
          </Typography>
          <Typography sx={styles.location}>{b.location}</Typography>
        </Box>
        <Chip label={cfg?.label} size="small" sx={styles.statusChip(cfg)} />
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

        {canCall ? (
          <Button
            size="small"
            startIcon={<Phone sx={{ fontSize: 12 }} />}
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
    </Paper>
  );
}
