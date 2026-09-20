import { calcPriceBreakdown, ServiceDetail } from "@/types/ServiceDetail.types";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { styles as s } from "./SummaryCard.styles";

// ─── Price summary card ────────────────────────────────────────────────────────
export function SummaryCard({
  service,
  hours,
  distanceKm,
  onSubmit,
  loading,
}: {
  service: ServiceDetail;
  hours: number;
  distanceKm: number;
  onSubmit: () => void;
  loading: boolean;
}) {
  const bd = calcPriceBreakdown(service, hours, distanceKm);

  return (
    <Box sx={s.summaryCard}>
      <Box sx={s.summaryHead}>
        <Typography sx={s.summaryTitle}>Booking Summary</Typography>
        <Typography sx={s.summaryServiceName}>
          {service.service_name}
        </Typography>
      </Box>

      <Box sx={s.summaryBody}>
        {/* Line items */}
        <Box sx={s.summaryRow}>
          <Typography sx={s.summaryLabel}>
            Base ({service.min_hours} hrs)
          </Typography>
          <Typography sx={s.summaryValue}>
            ₹{bd.base_price.toLocaleString("en-IN")}
          </Typography>
        </Box>

        {bd.extra_hours > 0 && (
          <Box sx={s.summaryRow}>
            <Typography sx={s.summaryLabel}>
              Extra {bd.extra_hours} hr{bd.extra_hours > 1 ? "s" : ""} × ₹
              {service.extra_hour_rate.toLocaleString("en-IN")}
            </Typography>
            <Typography sx={s.summaryValue}>
              ₹{bd.extra_hours_charge.toLocaleString("en-IN")}
            </Typography>
          </Box>
        )}

        <Box sx={s.summaryRow}>
          <Typography sx={s.summaryLabel}>
            Travel charge
            {distanceKm > 0 ? ` (~${distanceKm} km)` : " (≤ 10 km)"}
          </Typography>
          <Typography
            sx={[
              s.summaryValue,
              { color: bd.travel_charge === 0 ? "#16a34a" : "#18181B" },
            ]}
          >
            {bd.travel_charge === 0
              ? "Free"
              : `₹${bd.travel_charge.toLocaleString("en-IN")}`}
          </Typography>
        </Box>

        <Divider sx={s.summaryDivider} />

        <Box sx={s.summaryTotal}>
          <Typography sx={s.summaryTotalLabel}>Total</Typography>
          <Typography sx={s.summaryTotalValue}>
            ₹{bd.subtotal.toLocaleString("en-IN")}
          </Typography>
        </Box>

        {/* Token */}
        <Box sx={s.tokenBox}>
          <Box>
            <Typography sx={s.tokenLabel}>Pay now (token)</Typography>
            <Typography sx={s.tokenSub}>15% · rest paid after event</Typography>
          </Box>
          <Typography sx={s.tokenVal}>
            ₹{bd.token_amount.toLocaleString("en-IN")}
          </Typography>
        </Box>

        {/* Submit */}
        <Button onClick={onSubmit} disabled={loading} sx={s.submitBtn}>
          {loading ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            "Confirm & Pay Token ↗"
          )}
        </Button>

        <Typography sx={s.termsText}>
          Your token is held securely. Full amount paid directly to the provider
          after your event.
        </Typography>
      </Box>
    </Box>
  );
}
