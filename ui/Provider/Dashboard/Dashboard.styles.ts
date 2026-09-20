import { SxProps, Theme } from "@mui/material";

export const styles = {
  // ── Page root ────────────────────────────────────────────────────────────
  root: {
    minHeight: "calc(100vh - 64px)",
    bgcolor: "#F9F7F4",
  },

  // ── Content wrapper ───────────────────────────────────────────────────────
  content: {
    maxWidth: "80%",
    mx: "auto",
    px: { xs: "1rem", md: "2.5rem" },
    py: { xs: "1.5rem", md: "2.5rem" },
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  // ── Welcome row ───────────────────────────────────────────────────────────
  welcomeRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },

  welcomeTextGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },

  welcomeLabel: {
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
  },

  welcomeTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },

  welcomeSub: {
    fontSize: "0.82rem",
    color: "#7A756F",
  },

  addServiceBtn: {
    bgcolor: "#18181B",
    color: "#fff",
    fontSize: { xs: "0.7rem", md: "0.77rem" },
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    px: { xs: "0.9rem", md: "1.2rem" },
    lineHeight: 1.5,
    borderRadius: "6px",
    flexShrink: 0,
    "&:hover": { bgcolor: "#2a2a2f" },
  },

  // ── Stats grid ────────────────────────────────────────────────────────────
  statsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
    gap: "1px",
    bgcolor: "#E8E4DE",
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    overflow: "hidden",
  },

  // ── Quick actions ─────────────────────────────────────────────────────────
  quickActionsRow: {
    display: "flex",
    gap: "0.6rem",
    flexWrap: "wrap",
  },

  quickActionBtn: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "8px",
    px: "1rem",
    py: "0.5rem",
    fontSize: "0.77rem",
    color: "#3F3C38",
    textTransform: "none",
    "&:hover": {
      bgcolor: "#F0EDE8",
      borderColor: "#C4893A",
      color: "#C4893A",
    },
  },

  // ── Bookings section header ────────────────────────────────────────────────
  bookingsSectionHead: {
    display: "flex",
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: "0.75rem",
    flexDirection: { xs: "column", sm: "row" },
  },

  bookingsSectionTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#18181B",
    flexShrink: 0,
  },

  // ── Filter strip ──────────────────────────────────────────────────────────
  filterStrip: {
    display: "flex",
    gap: "0.4rem",
    overflowX: "auto",
    width: { xs: "100%", sm: "auto" },
    pb: "2px",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" },
  },

  filterChip: (isActive: boolean): SxProps<Theme> => ({
    fontSize: "0.71rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    textTransform: "none",
    borderRadius: "20px",
    px: "0.8rem",
    py: "0.28rem",
    border: "1px solid",
    borderColor: isActive ? "#18181B" : "#E8E4DE",
    bgcolor: isActive ? "#18181B" : "#FDFCFB",
    color: isActive ? "#fff" : "#7A756F",
    whiteSpace: "nowrap",
    flexShrink: 0,
    minWidth: "unset",
    gap: "0.35rem",
    "&:hover": isActive
      ? { bgcolor: "#2a2a2f" }
      : { bgcolor: "#F0EDE8", borderColor: "#C4893A", color: "#C4893A" },
  }),

  filterCount: (isActive: boolean): SxProps<Theme> => ({
    bgcolor: isActive ? "rgba(255,255,255,0.2)" : "#E8E4DE",
    borderRadius: "10px",
    px: "0.38rem",
    fontSize: "0.6rem",
    fontWeight: 600,
    color: isActive ? "#fff" : "#7A756F",
    lineHeight: 1.5,
  }),

  // ── Mobile loading skeleton cards ──────────────────────────────────────────
  mobileSkeletonCard: {
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    p: "1.1rem",
    mb: "0.75rem",
    bgcolor: "#FDFCFB",
  },

  mobileSkeletonDivider: {
    my: "0.75rem",
    borderColor: "#F0EDE8",
  },

  mobileSkeletonFooter: {
    display: "flex",
    justifyContent: "space-between",
  },

  // ── Empty state ───────────────────────────────────────────────────────────
  emptyState: {
    textAlign: "center",
    py: "3rem",
  },

  emptyTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#18181B",
  },

  emptySub: {
    fontSize: "0.82rem",
    color: "#B0AAA3",
    mt: "0.3rem",
  },

  // ── Table column cell renderers ────────────────────────────────────────────
  // Event column
  eventName: {
    fontSize: "0.87rem",
    fontWeight: 600,
    color: "#18181B",
    fontFamily: "Fraunces, Georgia, serif",
    mb: "0.1rem",
  },

  eventCustomer: {
    fontSize: "0.74rem",
    color: "#7A756F",
  },

  eventId: {
    fontSize: "0.68rem",
    color: "#B0AAA3",
    fontFamily: "'Courier New', monospace",
    mt: "0.1rem",
  },

  // Date column
  dateValue: {
    fontSize: "0.84rem",
    fontWeight: 500,
    color: "#18181B",
  },

  timeValue: {
    fontSize: "0.74rem",
    color: "#7A756F",
  },

  // Amount columns
  totalAmount: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.98rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  earningAmount: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.98rem",
    fontWeight: 700,
    color: "#16a34a",
    letterSpacing: "-0.02em",
  },

  // Status chip
  statusChip: (bg: string, color: string) => ({
    bgcolor: bg,
    color: color,
    fontWeight: 600,
    fontSize: "0.66rem",
    letterSpacing: "0.04em",
    height: 22,
    borderRadius: "20px",
  }),

  // Action column
  confirmCallBtn: {
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "#C4893A",
    border: "1px solid rgba(196,137,58,0.35)",
    borderRadius: "6px",
    px: "0.65rem",
    py: "0.28rem",
    textTransform: "none",
    bgcolor: "rgba(196,137,58,0.06)",
    "&:hover": {
      bgcolor: "rgba(196,137,58,0.12)",
      borderColor: "#C4893A",
    },
  },

  callDoneBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.28rem",
  },

  callDoneText: {
    fontSize: "0.7rem",
    color: "#16a34a",
    fontWeight: 500,
  },

  callDashText: {
    fontSize: "0.7rem",
    color: "#B0AAA3",
  },
};
