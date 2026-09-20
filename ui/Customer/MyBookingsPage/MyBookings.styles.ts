import { Theme } from "@mui/material";

export const bookingsStyles = {
  root: {
    minHeight: "calc(100vh - 64px)",
    bgcolor: "#F9F7F4",
    display: "flex",
    flexDirection: "column",
  },

  // ── Header Banner ───────────────────────────────────────────────────────────
  banner: {
    bgcolor: "#0F1117",
    px: { xs: "1.5rem", md: "2.5rem" },
    py: { xs: "3rem", md: "4rem" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
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

  bannerEyebrow: {
    position: "relative",
    zIndex: 2,
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
    mb: "0.6rem",
  },

  bannerTitle: {
    position: "relative",
    zIndex: 2,
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
    mb: "1rem",
  },

  bannerTitleAccent: { fontStyle: "italic", color: "#C4893A", fontWeight: 400 },

  // ── Content Area ────────────────────────────────────────────────────────────
  contentWrap: {
    maxWidth: "1000px",
    mx: "auto",
    px: { xs: "1rem", md: "2rem" },
    py: { xs: "2rem", md: "3rem" },
    width: "100%",
  },

  // ── Filter Tabs ─────────────────────────────────────────────────────────────
  filterTabs: {
    display: "flex",
    gap: "0.75rem",
    mb: "2rem",
    overflowX: "auto",
    pb: "0.5rem",
    "&::-webkit-scrollbar": { display: "none" },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },

  filterTab: (active: boolean) => ({
    px: "1.25rem",
    py: "0.6rem",
    borderRadius: "30px",
    fontSize: "0.82rem",
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.2s",
    bgcolor: active ? "#18181B" : "#fff",
    color: active ? "#fff" : "#7A756F",
    border: "1px solid",
    borderColor: active ? "#18181B" : "#E8E4DE",
    whiteSpace: "nowrap",
    "&:hover": {
      borderColor: active ? "#18181B" : "#C4893A",
      color: active ? "#fff" : "#18181B",
    },
  }),

  // ── Booking Grid ────────────────────────────────────────────────────────────
  bookingGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1.5rem",
  },

  // ── Booking Card ────────────────────────────────────────────────────────────
  bookingCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      boxShadow: "0 12px 30px -10px rgba(0,0,0,0.06)",
      borderColor: "#C4893A",
      transform: "translateY(-2px)",
    },
  },

  cardMain: {
    p: "1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  cardSide: {
    width: { xs: "100%", sm: "240px" },
    bgcolor: "#F5F3EF",
    borderLeft: { sm: "1px solid #E8E4DE" },
    borderTop: { xs: "1px solid #E8E4DE", sm: "none" },
    p: "1.25rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "1rem",
  },

  // ── Card Header ─────────────────────────────────────────────────────────────
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
  },

  serviceName: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.25rem",
  },

  bookingId: {
    fontSize: "0.65rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#B0AAA3",
    fontFamily: "'Courier New', monospace",
  },

  statusBadge: (status: string) => {
    let colors = { bg: "#F4F4F5", text: "#71717A", border: "#E4E4E7" };
    if (status === "confirmed") colors = { bg: "#F0FDF4", text: "#15803D", border: "#BBF7D0" };
    if (status === "pending") colors = { bg: "#FFFBEB", text: "#B45309", border: "#FEF3C7" };
    if (status === "completed") colors = { bg: "#EFF6FF", text: "#1D4ED8", border: "#DBEAFE" };
    if (status === "cancelled") colors = { bg: "#FEF2F2", text: "#B91C1C", border: "#FEE2E2" };

    return {
      display: "inline-flex",
      alignItems: "center",
      px: "0.6rem",
      py: "0.2rem",
      borderRadius: "6px",
      fontSize: "0.68rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      bgcolor: colors.bg,
      color: colors.text,
      border: "1px solid",
      borderColor: colors.border,
    };
  },

  // ── Info Grid ───────────────────────────────────────────────────────────────
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "1rem",
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },

  infoIcon: {
    fontSize: 18,
    color: "#C4893A",
    opacity: 0.8,
  },

  infoLabel: {
    fontSize: "0.65rem",
    color: "#B0AAA3",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    mb: "1px",
  },

  infoValue: {
    fontSize: "0.85rem",
    fontWeight: 500,
    color: "#4A4540",
  },

  // ── Provider Mini ──────────────────────────────────────────────────────────
  providerMini: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    mt: "auto",
    pt: "1rem",
    borderTop: "1px solid #F0EDE8",
  },

  providerAvatar: {
    width: 32,
    height: 32,
    borderRadius: "8px",
    bgcolor: "rgba(196,137,58,0.1)",
    color: "#C4893A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    fontWeight: 700,
    fontFamily: "Fraunces, serif",
  },

  providerName: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#18181B",
  },

  // ── Price Section ───────────────────────────────────────────────────────────
  priceBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },

  priceLabel: {
    fontSize: "0.72rem",
    color: "#7A756F",
  },

  priceValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#18181B",
  },

  viewDetailsBtn: {
    width: "100%",
    bgcolor: "#18181B",
    color: "#fff",
    fontSize: "0.78rem",
    fontWeight: 500,
    textTransform: "none",
    borderRadius: "7px",
    py: "0.6rem",
    "&:hover": { bgcolor: "#2a2a2f" },
  },

  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    py: "5rem",
    textAlign: "center",
  },

  emptyIcon: {
    fontSize: 64,
    color: "#E8E4DE",
    mb: "1.5rem",
  },

  emptyTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.5rem",
  },

  emptySub: {
    fontSize: "0.9rem",
    color: "#7A756F",
    maxWidth: 320,
    mb: "1.5rem",
  },

  browseBtn: {
    bgcolor: "#C4893A",
    color: "#fff",
    px: "2rem",
    py: "0.75rem",
    borderRadius: "8px",
    textTransform: "none",
    fontWeight: 600,
    "&:hover": { bgcolor: "#b37c35" },
  },
};
