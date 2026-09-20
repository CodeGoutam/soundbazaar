import { SxProps, Theme } from "@mui/material";

// ─── Filter panel ─────────────────────────────────────────────────────────────
export const filterStyles = {
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },

  sectionLabel: {
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#B0AAA3",
    mb: "0.15rem",
    display: "block",
  },

  divider: {
    borderColor: "#F0EDE8",
  },

  // Type buttons
  typeBtn: (active: boolean): SxProps<Theme> => ({
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    width: "100%",
    justifyContent: "flex-start",
    px: "0.7rem",
    py: "0.55rem",
    borderRadius: "8px",
    border: active ? "1px solid #C4893A" : "1px solid transparent",
    bgcolor: active ? "rgba(196,137,58,0.08)" : "transparent",
    color: active ? "#C4893A" : "#7A756F",
    fontSize: "0.82rem",
    fontWeight: active ? 600 : 400,
    textTransform: "none",
    transition: "all 0.15s",
    boxShadow: active ? "0 1px 4px rgba(196,137,58,0.12)" : "none",
    "&:hover": active
      ? {
          bgcolor: "rgba(196,137,58,0.14)",
          borderColor: "#B37930",
          color: "#B37930",
        }
      : { bgcolor: "#F5F3EF", color: "#18181B" },
  }),

  typeBtnIcon: {
    fontSize: "1rem",
    width: 28,
    height: 28,
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.15s",
  },

  // Price slider
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    mb: "0.4rem",
  },

  priceValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  sliderSx: {
    color: "#C4893A",
    "& .MuiSlider-thumb": {
      width: 16,
      height: 16,
      bgcolor: "#FDFCFB",
      border: "2px solid #C4893A",
      "&:hover": { boxShadow: "0 0 0 6px rgba(196,137,58,0.12)" },
    },
    "& .MuiSlider-track": { bgcolor: "#C4893A", border: "none", height: 3 },
    "& .MuiSlider-rail": { bgcolor: "#E8E4DE", height: 3 },
  },

  // Rating chips
  ratingChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },

  ratingChip: (active: boolean): SxProps<Theme> => ({
    fontSize: "0.72rem",
    fontWeight: active ? 600 : 400,
    borderRadius: "20px",
    px: "0.75rem",
    py: "0.32rem",
    border: active ? "1px solid #C4893A" : "1px solid #E8E4DE",
    bgcolor: active ? "rgba(196,137,58,0.08)" : "#FDFCFB",
    color: active ? "#C4893A" : "#7A756F",
    boxShadow: active ? "0 1px 4px rgba(196,137,58,0.12)" : "none",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.15s",
    "&:hover": active
      ? {
          bgcolor: "rgba(196,137,58,0.14)",
          borderColor: "#B37930",
          color: "#B37930",
        }
      : { borderColor: "#C4893A", color: "#C4893A" },
  }),

  // City chips
  cityChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },

  cityChip: (active: boolean): SxProps<Theme> => ({
    fontSize: "0.72rem",
    fontWeight: active ? 600 : 400,
    borderRadius: "20px",
    px: "0.75rem",
    py: "0.32rem",
    border: active ? "1px solid #C4893A" : "1px solid #E8E4DE",
    bgcolor: active ? "rgba(196,137,58,0.08)" : "#FDFCFB",
    color: active ? "#C4893A" : "#7A756F",
    boxShadow: active ? "0 1px 4px rgba(196,137,58,0.12)" : "none",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.15s",
    "&:hover": active
      ? {
          bgcolor: "rgba(196,137,58,0.14)",
          borderColor: "#B37930",
          color: "#B37930",
        }
      : { borderColor: "#C4893A", color: "#C4893A" },
  }),

  // Reset button
  resetBtn: {
    fontSize: "0.72rem",
    color: "#B91C1C",
    textTransform: "none",
    fontWeight: 500,
    p: 0,
    minWidth: 0,
    "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
  },

  // Mobile apply btn
  applyBtn: {
    width: "100%",
    bgcolor: "#C4893A",
    color: "#FFFFFF",
    fontSize: "0.82rem",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "none",
    borderRadius: "8px",
    py: "0.75rem",
    mt: "0.5rem",
    "&:hover": { bgcolor: "#B37930" },
  },
};

// ─── Mobile filter bottom sheet ────────────────────────────────────────────────
export const sheetStyles = {
  backdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1200,
    bgcolor: "rgba(0,0,0,0.4)",
  },

  sheet: {
    position: "fixed",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1300,
    bgcolor: "#FDFCFB",
    borderRadius: "20px 20px 0 0",
    maxHeight: "88dvh",
    display: "flex",
    flexDirection: "column",
  },

  handle: {
    width: 36,
    height: 4,
    borderRadius: 2,
    bgcolor: "#E8E4DE",
    mx: "auto",
    mt: "0.75rem",
    mb: "0.5rem",
    flexShrink: 0,
  },

  sheetHeader: {
    px: "1.25rem",
    py: "0.75rem",
    borderBottom: "1px solid #F0EDE8",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
  },

  sheetTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#18181B",
  },

  sheetCloseBtn: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    bgcolor: "#F0EDE8",
    color: "#7A756F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": { bgcolor: "#E8E4DE" },
  },

  sheetBody: {
    overflowY: "auto",
    px: "1.25rem",
    py: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    flex: 1,
  },
};
