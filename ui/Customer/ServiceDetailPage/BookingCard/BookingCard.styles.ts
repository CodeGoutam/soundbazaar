export const styles = {
  // ── Right sticky column (booking card) ────────────────────────────────────────

  bookingCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "12px",
    overflow: "hidden",
  },

  bookingCardHead: {
    px: "1.25rem",
    py: "1.1rem",
    background: "linear-gradient(135deg, #C4893A 0%, #B37930 100%)",
    color: "#FFFFFF",
    boxShadow: "0 2px 8px rgba(196,137,58,0.2)",
  },

  bookingCardTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#FFFFFF",
    mb: "0.2rem",
  },

  bookingCardSub: { fontSize: "0.78rem", color: "rgba(255,255,255,0.9)" },

  bookingCardBody: {
    px: "1.25rem",
    py: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  priceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "0.4rem",
    mb: "0.25rem",
  },

  priceMain: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "2rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.03em",
    lineHeight: 1,
  },

  priceSub: { fontSize: "0.78rem", color: "#B0AAA3" },

  priceBreakdown: {
    bgcolor: "#F5F3EF",
    borderRadius: "8px",
    p: "0.85rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },

  breakdownRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  breakdownLabel: { fontSize: "0.78rem", color: "#7A756F" },
  breakdownValue: { fontSize: "0.78rem", fontWeight: 500, color: "#18181B" },

  breakdownTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    pt: "0.5rem",
    mt: "0.1rem",
    borderTop: "1px solid #E8E4DE",
  },

  breakdownTotalLabel: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#18181B",
  },

  breakdownTotalValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  tokenHighlight: {
    bgcolor: "rgba(196,137,58,0.08)",
    border: "1px solid rgba(196,137,58,0.2)",
    borderRadius: "8px",
    px: "0.9rem",
    py: "0.7rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tokenLabel: { fontSize: "0.78rem", color: "#7A756F" },

  tokenValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#C4893A",
    letterSpacing: "-0.02em",
  },

  bookNowBtn: {
    width: "100%",
    bgcolor: "#C4893A",
    color: "#fff",
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    borderRadius: "8px",
    py: "0.9rem",
    "&:hover": { bgcolor: "#D9A85C" },
    boxShadow: "0 4px 20px rgba(196,137,58,0.25)",
  },

  noticeText: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
    textAlign: "center",
    lineHeight: 1.6,
  },
};
