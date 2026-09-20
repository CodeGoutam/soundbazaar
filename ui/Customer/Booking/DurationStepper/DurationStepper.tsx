import { Box, Typography } from "@mui/material";
import { styles as s } from "./DurationStepper.styles";

// ─── Duration stepper ──────────────────────────────────────────────────────────
export function DurationStepper({
  value,
  min,
  max,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <Box sx={s.durationRow}>
      <Box
        component="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        sx={[
          s.durationBtn(false),
          {
            opacity: value <= min ? 0.35 : 1,
            cursor: value <= min ? "not-allowed" : "pointer",
          },
        ]}
      >
        −
      </Box>
      <Box sx={s.durationDisplay}>
        <Typography sx={s.durationVal}>{value}</Typography>
        <Typography sx={s.durationUnit}>hrs</Typography>
      </Box>
      <Box
        component="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        sx={[
          s.durationBtn(false),
          {
            opacity: value >= max ? 0.35 : 1,
            cursor: value >= max ? "not-allowed" : "pointer",
          },
        ]}
      >
        +
      </Box>
    </Box>
  );
}
