import { Theme } from "@mui/material";

export const confirmStyles = {
  root: {
    minHeight: "calc(100vh - 64px)",
    bgcolor: "#F9F7F4",
    display: "flex",
    flexDirection: "column",
  },

  // ── Top success banner ────────────────────────────────────────────────────────
  banner: (status?: string) => {
    let bgcolor = "#0F1117"; // Default dark
    if (status === "cancelled") bgcolor = "#1A0F0F"; // Dark red tint
    if (status === "pending") bgcolor = "#17140F"; // Dark amber tint

    return {
      bgcolor,
      px: { xs: "1rem", md: "2.5rem" },
      py: { xs: "2.5rem", md: "3.5rem" },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    };
  },

  bannerGlow: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    background:
      "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(196,137,58,0.12) 0%, transparent 65%)",
  },

  bannerGrid: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.25,
    backgroundImage:
      "radial-gradient(circle, rgba(196,137,58,0.3) 1px, transparent 1px)",
    backgroundSize: "28px 28px",
  },

  successRing: (status?: string) => {
    let color = "#C4893A"; // Default gold
    if (status === "cancelled") color = "#EF4444";
    if (status === "completed") color = "#3B82F6";

    return {
      position: "relative",
      zIndex: 2,
      width: 72,
      height: 72,
      borderRadius: "50%",
      bgcolor: `${color}1F`, // 12% opacity
      border: `1.5px solid ${color}4D`, // 30% opacity
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      mb: "1.25rem",
    };
  },

  successIcon: { fontSize: 34, color: "#C4893A" },

  bannerEyebrow: (status?: string) => {
    let color = "#C4893A";
    if (status === "cancelled") color = "#EF4444";
    if (status === "completed") color = "#3B82F6";

    return {
      position: "relative",
      zIndex: 2,
      fontSize: "0.68rem",
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color,
      mb: "0.6rem",
    };
  },

  bannerTitle: {
    position: "relative",
    zIndex: 2,
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    mb: "0.75rem",
  },

  bannerTitleAccent: { fontStyle: "italic", color: "#C4893A", fontWeight: 400 },

  bannerSub: {
    position: "relative",
    zIndex: 2,
    fontSize: "0.88rem",
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.7,
    maxWidth: 420,
  },

  // ── Booking ID chip ───────────────────────────────────────────────────────────
  bookingIdChip: {
    position: "relative",
    zIndex: 2,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    mt: "1.5rem",
    bgcolor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    px: "1rem",
    py: "0.6rem",
  },

  bookingIdLabel: {
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.35)",
  },

  bookingIdValue: {
    fontFamily: "'Courier New', monospace",
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#fff",
    letterSpacing: "0.06em",
  },

  copyBtn: {
    fontSize: "0.68rem",
    color: "rgba(255,255,255,0.4)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "4px",
    px: "0.5rem",
    py: "0.18rem",
    textTransform: "none",
    minWidth: 0,
    "&:hover": { color: "#C4893A", borderColor: "rgba(196,137,58,0.4)" },
  },

  // ── Content wrapper ───────────────────────────────────────────────────────────
  contentWrap: {
    maxWidth: "1000px",
    mx: "auto",
    px: { xs: "1rem", md: "2.5rem" },
    py: { xs: "1.75rem", md: "2.5rem" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1fr 340px" },
    gap: { xs: "1.5rem", lg: "2.5rem" },
    alignItems: "flex-start",
    width: "100%",
  },

  // ── Section card ──────────────────────────────────────────────────────────────
  sectionCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    overflow: "hidden",
  },

  sectionHead: {
    px: "1.25rem",
    py: "0.85rem",
    bgcolor: "#F5F3EF",
    borderBottom: "1px solid #E8E4DE",
  },

  sectionTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.92rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.01em",
  },

  sectionBody: {
    px: "1.25rem",
    py: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  leftCol: { display: "flex", flexDirection: "column", gap: "1.5rem" },

  // ── What happens next timeline ────────────────────────────────────────────────
  timeline: { display: "flex", flexDirection: "column", gap: 0 },

  timelineItem: {
    display: "flex",
    gap: "1rem",
    position: "relative",
  },

  timelineLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexShrink: 0,
    width: 32,
  },

  timelineDot: (done: boolean, active: boolean) => ({
    width: 32,
    height: 32,
    borderRadius: "50%",
    bgcolor: done ? "#16a34a" : active ? "#C4893A" : "#F0EDE8",
    border: "1.5px solid",
    borderColor: done ? "#16a34a" : active ? "#C4893A" : "#E8E4DE",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    zIndex: 1,
    transition: "all 0.2s",
  }),

  timelineLine: (done: boolean) => ({
    width: "1.5px",
    flex: 1,
    minHeight: 28,
    bgcolor: done ? "#16a34a" : "#E8E4DE",
    my: "4px",
    transition: "bgcolor 0.2s",
  }),

  timelineContent: {
    pb: "1.5rem",
    flex: 1,
    minWidth: 0,
  },

  timelineTitle: (active: boolean) => ({
    fontSize: "0.87rem",
    fontWeight: active ? 600 : 500,
    color: active ? "#18181B" : "#7A756F",
    mb: "0.15rem",
    letterSpacing: "-0.005em",
  }),

  timelineSub: {
    fontSize: "0.78rem",
    color: "#B0AAA3",
    lineHeight: 1.6,
  },

  timelineTag: {
    display: "inline-block",
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    bgcolor: "rgba(196,137,58,0.1)",
    color: "#C4893A",
    px: "0.5rem",
    py: "0.15rem",
    borderRadius: "10px",
    mt: "0.3rem",
  },

  // ── Detail rows ───────────────────────────────────────────────────────────────
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0.5rem",
    py: "0.6rem",
    borderBottom: "1px solid #F0EDE8",
    "&:last-child": { borderBottom: "none", pb: 0 },
    "&:first-of-type": { pt: 0 },
  },

  detailLabel: {
    fontSize: "0.78rem",
    color: "#7A756F",
    flexShrink: 0,
  },

  detailValue: {
    fontSize: "0.82rem",
    fontWeight: 500,
    color: "#18181B",
    textAlign: "right",
  },

  // ── Payment breakdown ─────────────────────────────────────────────────────────
  paymentBreakdown: {
    bgcolor: "#F5F3EF",
    borderRadius: "8px",
    p: "0.9rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.45rem",
  },

  breakdownRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  breakdownLabel: { fontSize: "0.8rem", color: "#7A756F" },
  breakdownValue: { fontSize: "0.8rem", fontWeight: 500, color: "#18181B" },

  breakdownDivider: { borderColor: "#E8E4DE", my: "0.2rem" },

  breakdownTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: "0.35rem",
    borderTop: "1px solid #E8E4DE",
  },

  breakdownTotalLabel: {
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#18181B",
  },

  breakdownTotalValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  // ── Token paid badge ──────────────────────────────────────────────────────────
  tokenPaidBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    borderRadius: "8px",
    px: "0.9rem",
    py: "0.75rem",
  },

  tokenPaidLeft: { display: "flex", alignItems: "center", gap: "0.5rem" },
  tokenPaidLabel: { fontSize: "0.8rem", fontWeight: 500, color: "#15803D" },
  tokenPaidSub: { fontSize: "0.7rem", color: "#86EFAC" },

  tokenPaidValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#15803D",
    letterSpacing: "-0.02em",
  },

  remainingBadge: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    bgcolor: "#FEF9EC",
    border: "1px solid rgba(196,137,58,0.25)",
    borderRadius: "8px",
    px: "0.9rem",
    py: "0.75rem",
  },

  remainingLabel: { fontSize: "0.8rem", fontWeight: 500, color: "#92400E" },
  remainingSub: { fontSize: "0.7rem", color: "#D97706" },

  remainingValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#92400E",
    letterSpacing: "-0.02em",
  },

  // ── Right sticky column ────────────────────────────────────────────────────────
  rightCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    position: { lg: "sticky" },
    top: { lg: "80px" },
  },

  // ── Provider contact card ─────────────────────────────────────────────────────
  providerContactCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    overflow: "hidden",
  },

  providerContactHead: {
    px: "1.25rem",
    py: "0.85rem",
    bgcolor: "#0F1117",
  },

  providerContactTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#fff",
  },

  providerContactSub: {
    fontSize: "0.72rem",
    color: "rgba(255,255,255,0.38)",
    mt: "0.15rem",
  },

  providerContactBody: {
    px: "1.25rem",
    py: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  providerRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.85rem",
  },

  providerAvatar: {
    width: 44,
    height: 44,
    borderRadius: "10px",
    bgcolor: "rgba(196,137,58,0.1)",
    border: "1.5px solid rgba(196,137,58,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#C4893A",
    flexShrink: 0,
  },

  providerName: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#18181B",
  },

  providerLocation: {
    fontSize: "0.75rem",
    color: "#B0AAA3",
    mt: "0.1rem",
  },

  callBtn: {
    width: "100%",
    bgcolor: "#18181B",
    color: "#fff",
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "7px",
    py: "0.8rem",
    gap: "0.4rem",
    "&:hover": { bgcolor: "#2a2a2f" },
  },

  whatsappBtn: {
    width: "100%",
    bgcolor: "#25D366",
    color: "#fff",
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "7px",
    py: "0.8rem",
    gap: "0.4rem",
    "&:hover": { bgcolor: "#1ebe5a" },
  },

  callNote: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
    textAlign: "center",
    lineHeight: 1.6,
  },

  // ── Action buttons ────────────────────────────────────────────────────────────
  actionsCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    p: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  myBookingsBtn: {
    width: "100%",
    bgcolor: "#F5F3EF",
    color: "#18181B",
    fontSize: "0.8rem",
    fontWeight: 500,
    textTransform: "none",
    borderRadius: "7px",
    py: "0.75rem",
    border: "1px solid #E8E4DE",
    "&:hover": { bgcolor: "#EDE9E3", borderColor: "#C4893A", color: "#C4893A" },
  },

  searchMoreBtn: {
    width: "100%",
    color: "#7A756F",
    fontSize: "0.78rem",
    fontWeight: 400,
    textTransform: "none",
    borderRadius: "7px",
    py: "0.6rem",
    "&:hover": { color: "#18181B", bgcolor: "#F5F3EF" },
  },
};
