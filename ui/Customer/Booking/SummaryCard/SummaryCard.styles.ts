export const styles = {
  summaryCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "12px",
    overflow: "hidden",
    position: { lg: "sticky" },
    top: { lg: "80px" },
  },

  summaryHead: {
    px: "1.25rem",
    py: "1.1rem",
    background: "linear-gradient(135deg, #C4893A 0%, #B37930 100%)",
    boxShadow: "0 2px 8px rgba(196,137,58,0.2)",
  },

  summaryTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#fff",
  },

  summaryServiceName: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.9)",
    mt: "0.2rem",
  },

  summaryBody: {
    px: "1.25rem",
    py: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  summaryLabel: { fontSize: "0.82rem", color: "#7A756F" },
  summaryValue: { fontSize: "0.82rem", fontWeight: 500, color: "#18181B" },

  summaryDivider: { borderColor: "#F0EDE8" },

  summaryTotal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "#F5F3EF",
    borderRadius: "8px",
    px: "0.9rem",
    py: "0.75rem",
  },

  summaryTotalLabel: {
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#18181B",
  },

  summaryTotalValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.025em",
  },

  tokenBox: {
    bgcolor: "rgba(196,137,58,0.08)",
    border: "1px solid rgba(196,137,58,0.2)",
    borderRadius: "8px",
    px: "0.9rem",
    py: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  tokenLabel: { fontSize: "0.78rem", color: "#7A756F" },
  tokenSub: { fontSize: "0.68rem", color: "#B0AAA3", mt: "0.1rem" },

  tokenVal: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#C4893A",
    letterSpacing: "-0.02em",
  },

  submitBtn: {
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
    "&:disabled": { opacity: 0.5 },
    boxShadow: "0 4px 20px rgba(196,137,58,0.25)",
  },

  termsText: {
    fontSize: "0.7rem",
    color: "#B0AAA3",
    textAlign: "center",
    lineHeight: 1.6,
  },

  // Mobile bottom CTA
  mobileSummaryBar: {
    display: { xs: "flex", lg: "none" },
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    bgcolor: "#FDFCFB",
    borderTop: "1px solid #E8E4DE",
    px: "1rem",
    py: "0.85rem",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },

  mobileTotal: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },

  mobileSub: { fontSize: "0.7rem", color: "#B0AAA3", mt: "0.1rem" },

  mobileSubmitBtn: {
    bgcolor: "#C4893A",
    color: "#fff",
    fontSize: "0.82rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "8px",
    px: "1.75rem",
    py: "0.75rem",
    flexShrink: 0,
    "&:hover": { bgcolor: "#D9A85C" },
  },
};
