import { calcPriceBreakdown, ServiceDetail } from "@/types/ServiceDetail.types";
import { Box, Button, Divider, Typography } from "@mui/material";
import { styles as s } from "./BookingCard.styles";

export function BookingCard({
  service,
  onBook,
}: {
  service: ServiceDetail;
  onBook: () => void;
}) {
  // Default preview: min hours, 0 km
  const breakdown = calcPriceBreakdown(service, service.min_hours, 0);

  return (
    <Box sx={s.bookingCard}>
      <Box sx={s.bookingCardHead}>
        <Typography sx={s.bookingCardTitle}>Book this service</Typography>
        <Typography sx={s.bookingCardSub}>
          Exact price calculated at checkout
        </Typography>
      </Box>

      <Box sx={s.bookingCardBody}>
        {/* Base price */}
        <Box>
          <Box sx={s.priceRow}>
            <Typography sx={s.priceMain}>
              ₹{service.base_price.toLocaleString("en-IN")}
            </Typography>
            <Typography sx={s.priceSub}>for {service.min_hours} hrs</Typography>
          </Box>
          {service.extra_hour_rate > 0 && (
            <Typography sx={{ fontSize: "0.75rem", color: "#B0AAA3" }}>
              + ₹{service.extra_hour_rate.toLocaleString("en-IN")}/hr after
            </Typography>
          )}
        </Box>

        <Divider sx={{ borderColor: "#F0EDE8" }} />

        {/* Price breakdown preview */}
        <Box sx={s.priceBreakdown}>
          <Typography
            sx={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#3F3C38",
              mb: "0.2rem",
            }}
          >
            Estimated for {service.min_hours} hrs · within 10 km
          </Typography>
          <Box sx={s.breakdownRow}>
            <Typography sx={s.breakdownLabel}>
              Base ({service.min_hours} hrs)
            </Typography>
            <Typography sx={s.breakdownValue}>
              ₹{service.base_price.toLocaleString("en-IN")}
            </Typography>
          </Box>
          <Box sx={s.breakdownRow}>
            <Typography sx={s.breakdownLabel}>Travel (0–10 km)</Typography>
            <Typography
              sx={[
                { fontSize: "0.78rem", fontWeight: 500, color: "#18181B" },
                { color: "#16a34a" },
              ]}
            >
              Free
            </Typography>
          </Box>
          <Box sx={s.breakdownTotal}>
            <Typography sx={s.breakdownTotalLabel}>Total</Typography>
            <Typography sx={s.breakdownTotalValue}>
              ₹{breakdown.subtotal.toLocaleString("en-IN")}
            </Typography>
          </Box>
        </Box>

        {/* Token highlight */}
        <Box sx={s.tokenHighlight}>
          <Box>
            <Typography sx={s.tokenLabel}>Pay now to confirm</Typography>
            <Typography sx={{ fontSize: "0.68rem", color: "#B0AAA3" }}>
              Remaining paid after event
            </Typography>
          </Box>
          <Typography sx={s.tokenValue}>
            ₹{breakdown.token_amount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        {/* Book button */}
        <Button onClick={onBook} sx={s.bookNowBtn}>
          Book Now ↗
        </Button>

        {/* Trust notes */}
        <Typography sx={s.noticeText}>
          Secure payment · {service.advance_notice_days} day advance booking
          required
        </Typography>
      </Box>
    </Box>
  );
}
