import { SxProps, Theme } from "@mui/material";

export const styles = {
  // ── Page root ────────────────────────────────────────────────────────────
  root: {
    minHeight: "calc(100vh - 64px)",
    bgcolor: "#FAF8F5",
  },

  // ── Content wrapper ───────────────────────────────────────────────────────
  content: {
    maxWidth: "1280px",
    mx: "auto",
    px: { xs: "1rem", sm: "1.5rem", md: "2.5rem" },
    py: { xs: "1.25rem", md: "2.25rem" },
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
  },

  // ── Welcome Banner / Header Card ──────────────────────────────────────────
  welcomeCard: {
    bgcolor: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #EBE7E0",
    p: { xs: "1.25rem", md: "1.75rem" },
    boxShadow: "0 2px 10px rgba(24, 24, 27, 0.03)",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: { xs: "flex-start", md: "center" },
    justifyContent: "space-between",
    gap: "1.25rem",
  },

  welcomeProfileGroup: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  providerAvatar: {
    width: { xs: 50, md: 58 },
    height: { xs: 50, md: 58 },
    borderRadius: "14px",
    background:
      "linear-gradient(135deg, #1C1208 0%, #3D2000 50%, #C4893A 100%)",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: { xs: "1.25rem", md: "1.45rem" },
    fontWeight: 700,
    fontFamily: "Fraunces, Georgia, serif",
    boxShadow: "0 4px 12px rgba(196, 137, 58, 0.2)",
    flexShrink: 0,
  },

  welcomeTextGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  welcomeTopPills: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
    mb: "0.15rem",
  },

  verifiedBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    fontSize: "0.68rem",
    fontWeight: 600,
    color: "#16a34a",
    bgcolor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    px: "0.55rem",
    py: "0.15rem",
    borderRadius: "20px",
  },

  statusToggleBadge: (active: boolean) => ({
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    fontSize: "0.68rem",
    fontWeight: 600,
    color: active ? "#15803d" : "#78716C",
    bgcolor: active ? "rgba(22, 163, 74, 0.08)" : "#F5F3EF",
    border: `1px solid ${active ? "rgba(22, 163, 74, 0.2)" : "#E8E4DE"}`,
    px: "0.55rem",
    py: "0.15rem",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    "&:hover": {
      bgcolor: active ? "rgba(22, 163, 74, 0.14)" : "#EAE6E0",
    },
  }),

  statusDot: (active: boolean) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    bgcolor: active ? "#16a34a" : "#A8A29E",
  }),

  welcomeTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.35rem, 2.8vw, 1.85rem)",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
  },

  welcomeSub: {
    fontSize: "0.8rem",
    color: "#78716C",
    fontWeight: 500,
  },

  welcomeActions: {
    display: "flex",
    alignItems: "center",
    gap: "0.65rem",
    flexWrap: "wrap",
    width: { xs: "100%", md: "auto" },
  },

  addServiceBtn: {
    bgcolor: "#C4893A",
    color: "#FFFFFF",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.04em",
    textTransform: "none",
    px: "1.1rem",
    py: "0.55rem",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(196, 137, 58, 0.25)",
    transition: "all 0.2s ease",
    "&:hover": {
      bgcolor: "#B37930",
      boxShadow: "0 4px 12px rgba(196, 137, 58, 0.35)",
    },
  },

  secondaryActionBtn: {
    bgcolor: "#FDFCFB",
    color: "#3F3C38",
    fontSize: "0.78rem",
    fontWeight: 600,
    textTransform: "none",
    px: "1rem",
    py: "0.55rem",
    borderRadius: "8px",
    border: "1px solid #E8E4DE",
    transition: "all 0.15s ease",
    "&:hover": {
      bgcolor: "#F5F2EC",
      borderColor: "#D9D4CD",
      color: "#18181B",
    },
  },

  // ── Stats grid ────────────────────────────────────────────────────────────
  statsGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" },
    gap: "1rem",
  },

  // ── Business Hub / Shortcuts ──────────────────────────────────────────────
  hubSection: {
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  },

  hubHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  hubTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#18181B",
  },

  hubGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
    gap: "0.85rem",
  },

  hubCard: {
    bgcolor: "#FFFFFF",
    border: "1px solid #EBE7E0",
    borderRadius: "14px",
    p: "1.15rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "0.75rem",
    textDecoration: "none",
    color: "inherit",
    boxShadow: "0 2px 6px rgba(24, 24, 27, 0.02)",
    transition: "all 0.2s ease",
    "&:hover": {
      transform: "translateY(-2px)",
      borderColor: "#C4893A",
      boxShadow: "0 6px 16px rgba(196, 137, 58, 0.1)",
    },
  },

  hubCardIcon: {
    fontSize: "1.5rem",
    width: 38,
    height: 38,
    borderRadius: "10px",
    bgcolor: "#FAF8F5",
    border: "1px solid #EBE7E0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  hubCardTitle: {
    fontSize: "0.86rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.15rem",
  },

  hubCardDesc: {
    fontSize: "0.74rem",
    color: "#78716C",
    lineHeight: 1.4,
  },

  hubCardCta: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#C4893A",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
    mt: "0.25rem",
  },

  // ── Bookings Section ──────────────────────────────────────────────────────
  bookingsSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    bgcolor: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #EBE7E0",
    p: { xs: "1.1rem", sm: "1.5rem" },
    boxShadow: "0 2px 10px rgba(24, 24, 27, 0.03)",
    maxWidth: "100%",
    overflow: "hidden",
  },

  bookingsSectionHead: {
    display: "flex",
    alignItems: { xs: "flex-start", lg: "center" },
    justifyContent: "space-between",
    gap: "1rem",
    flexDirection: { xs: "column", lg: "row" },
    pb: "0.85rem",
    borderBottom: "1px solid #F0EDE8",
    width: "100%",
    minWidth: 0,
  },

  bookingsHeadLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
    minWidth: 0,
  },

  bookingsSectionTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#18181B",
  },

  bookingsSectionSub: {
    fontSize: "0.78rem",
    color: "#78716C",
  },

  // ── Toolbar: Search & Filters ─────────────────────────────────────────────
  toolbar: {
    display: "flex",
    alignItems: { xs: "stretch", sm: "center" },
    justifyContent: "space-between",
    gap: "0.75rem",
    flexDirection: { xs: "column", sm: "row" },
  },

  searchInput: {
    width: { xs: "100%", sm: "280px" },
    "& .MuiOutlinedInput-root": {
      fontSize: "0.82rem",
      bgcolor: "#FAF8F5",
      borderRadius: "8px",
      "& fieldset": { borderColor: "#E8E4DE" },
      "&:hover fieldset": { borderColor: "#C4893A" },
      "&.Mui-focused fieldset": { borderColor: "#C4893A" },
    },
    "& .MuiInputBase-input": {
      py: "0.45rem",
    },
  },

  filterStrip: {
    display: "flex",
    gap: "0.45rem",
    flexWrap: "wrap",
    maxWidth: "100%",
    width: { xs: "100%", lg: "auto" },
    minWidth: 0,
  },

  filterChip: (isActive: boolean): SxProps<Theme> => ({
    fontSize: "0.74rem",
    fontWeight: 600,
    textTransform: "none",
    borderRadius: "20px",
    px: "0.85rem",
    py: "0.32rem",
    border: "1px solid",
    borderColor: isActive ? "#C4893A" : "#E8E4DE",
    bgcolor: isActive ? "#C4893A" : "#FAF8F5",
    color: isActive ? "#FFFFFF" : "#57534E",
    whiteSpace: "nowrap",
    flexShrink: 0,
    minWidth: "unset",
    gap: "0.4rem",
    boxShadow: isActive ? "0 2px 8px rgba(196, 137, 58, 0.25)" : "none",
    transition: "all 0.15s ease",
    "&:hover": isActive
      ? { bgcolor: "#B37930" }
      : {
          bgcolor: "rgba(196, 137, 58, 0.08)",
          borderColor: "#C4893A",
          color: "#C4893A",
        },
  }),

  filterCount: (isActive: boolean): SxProps<Theme> => ({
    bgcolor: isActive ? "rgba(255,255,255,0.25)" : "#E8E4DE",
    borderRadius: "10px",
    px: "0.42rem",
    fontSize: "0.62rem",
    fontWeight: 700,
    color: isActive ? "#FFFFFF" : "#78716C",
    lineHeight: 1.4,
  }),

  // ── Table Column Cell Renderers ───────────────────────────────────────────
  clientCell: {
    display: "flex",
    alignItems: "center",
    gap: "0.65rem",
  },

  clientAvatar: {
    width: 34,
    height: 34,
    borderRadius: "8px",
    bgcolor: "rgba(196, 137, 58, 0.1)",
    color: "#C4893A",
    fontWeight: 700,
    fontSize: "0.78rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    border: "1px solid rgba(196, 137, 58, 0.2)",
  },

  eventName: {
    fontSize: "0.86rem",
    fontWeight: 700,
    color: "#18181B",
    fontFamily: "Fraunces, Georgia, serif",
    lineHeight: 1.2,
  },

  eventCustomer: {
    fontSize: "0.74rem",
    color: "#57534E",
    fontWeight: 500,
  },

  eventId: {
    fontSize: "0.66rem",
    color: "#A8A29E",
    fontFamily: "monospace",
  },

  dateValue: {
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#18181B",
  },

  timeValue: {
    fontSize: "0.72rem",
    color: "#78716C",
  },

  locationValue: {
    fontSize: "0.72rem",
    color: "#A8A29E",
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
    mt: "0.15rem",
  },

  totalAmount: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  tokenPaidNote: {
    fontSize: "0.68rem",
    color: "#16a34a",
    fontWeight: 500,
  },

  earningAmount: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#16a34a",
    letterSpacing: "-0.02em",
  },

  statusChip: (bg: string, color: string) => ({
    bgcolor: bg,
    color: color,
    fontWeight: 600,
    fontSize: "0.68rem",
    letterSpacing: "0.02em",
    height: 24,
    borderRadius: "20px",
    border: `1px solid ${color}30`,
  }),

  confirmCallBtn: {
    fontSize: "0.72rem",
    fontWeight: 600,
    color: "#FFFFFF",
    bgcolor: "#C4893A",
    borderRadius: "6px",
    px: "0.75rem",
    py: "0.32rem",
    textTransform: "none",
    boxShadow: "0 2px 6px rgba(196, 137, 58, 0.25)",
    whiteSpace: "nowrap",
    "&:hover": {
      bgcolor: "#B37930",
    },
  },

  callDoneBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.25rem",
    bgcolor: "rgba(22, 163, 74, 0.08)",
    border: "1px solid rgba(22, 163, 74, 0.2)",
    borderRadius: "6px",
    px: "0.55rem",
    py: "0.25rem",
  },

  callDoneText: {
    fontSize: "0.7rem",
    color: "#16a34a",
    fontWeight: 600,
  },

  actionGroup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
  },

  detailsIconBtn: {
    color: "#78716C",
    borderRadius: "6px",
    border: "1px solid #E8E4DE",
    p: "0.3rem",
    "&:hover": {
      bgcolor: "#F5F3EF",
      color: "#18181B",
      borderColor: "#D9D4CD",
    },
  },

  // ── Empty State ───────────────────────────────────────────────────────────
  emptyState: {
    textAlign: "center",
    py: "3.5rem",
    px: "1rem",
  },

  emptyIconBox: {
    width: 48,
    height: 48,
    borderRadius: "50%",
    bgcolor: "#F5F3EF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mx: "auto",
    mb: "0.75rem",
    color: "#A8A29E",
  },

  emptyTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#18181B",
  },

  emptySub: {
    fontSize: "0.82rem",
    color: "#A8A29E",
    mt: "0.25rem",
    maxWidth: "340px",
    mx: "auto",
  },

  // ── Pagination ────────────────────────────────────────────────────────────
  paginationRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "0.75rem",
    pt: "1.1rem",
    borderTop: "1px solid #F0EDE8",
    mt: "0.5rem",
  },

  paginationInfo: {
    fontSize: "0.78rem",
    color: "#78716C",
    fontWeight: 500,
  },

  paginationControls: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
  },

  paginationBtn: (active: boolean) => ({
    minWidth: 32,
    height: 32,
    p: 0,
    borderRadius: "8px",
    fontSize: "0.76rem",
    fontWeight: 600,
    border: "1px solid",
    borderColor: active ? "#C4893A" : "#E8E4DE",
    bgcolor: active ? "#C4893A" : "#FAF8F5",
    color: active ? "#FFFFFF" : "#57534E",
    transition: "all 0.15s ease",
    "&:hover": active
      ? { bgcolor: "#B37930" }
      : {
          bgcolor: "rgba(196, 137, 58, 0.08)",
          borderColor: "#C4893A",
          color: "#C4893A",
        },
  }),

  paginationNavBtn: {
    fontSize: "0.76rem",
    fontWeight: 600,
    textTransform: "none",
    color: "#57534E",
    border: "1px solid #E8E4DE",
    borderRadius: "8px",
    px: "0.75rem",
    py: "0.28rem",
    bgcolor: "#FAF8F5",
    "&:hover:not(:disabled)": {
      bgcolor: "rgba(196, 137, 58, 0.08)",
      borderColor: "#C4893A",
      color: "#C4893A",
    },
    "&:disabled": {
      opacity: 0.4,
      borderColor: "#E8E4DE",
    },
  },

  rowsPerPageSelect: {
    fontSize: "0.76rem",
    color: "#78716C",
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
  },

  // ── Mobile Skeleton Card ──────────────────────────────────────────────────
  mobileSkeletonCard: {
    border: "1px solid #EBE7E0",
    borderRadius: "14px",
    p: "1.1rem",
    mb: "0.85rem",
    bgcolor: "#FFFFFF",
  },

  mobileSkeletonDivider: {
    my: "0.75rem",
    borderColor: "#F0EDE8",
  },

  mobileSkeletonFooter: {
    display: "flex",
    justifyContent: "space-between",
  },

  // ── Details Drawer ────────────────────────────────────────────────────────
  drawerPaper: {
    width: { xs: "100%", sm: 460 },
    bgcolor: "#FAF8F5",
    p: { xs: "1.25rem", sm: "1.75rem" },
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    pb: "1rem",
    borderBottom: "1px solid #EBE7E0",
  },

  drawerTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#18181B",
  },

  drawerBody: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    mt: "1.25rem",
  },

  drawerSectionCard: {
    bgcolor: "#FFFFFF",
    borderRadius: "12px",
    border: "1px solid #EBE7E0",
    p: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.65rem",
  },

  drawerSectionTitle: {
    fontSize: "0.74rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#78716C",
  },

  drawerCustomerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  drawerCallCustomerBtn: {
    bgcolor: "#16a34a",
    color: "#FFFFFF",
    fontSize: "0.75rem",
    fontWeight: 600,
    textTransform: "none",
    px: "0.85rem",
    py: "0.35rem",
    borderRadius: "6px",
    "&:hover": { bgcolor: "#15803d" },
  },
};
