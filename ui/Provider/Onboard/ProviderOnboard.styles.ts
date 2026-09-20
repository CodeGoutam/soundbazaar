export const styles = {
  // ── Page wrapper ───────────────────────────────────────────────────────────
  root: (isMobile: boolean) => ({
    minHeight: `calc(100dvh - ${isMobile ? "60px" : "64px"})`,
    background: "#F9F7F4",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: { xs: "2rem 1rem", sm: "3.5rem 1.5rem" },
  }),

  inner: {
    width: "100%",
    maxWidth: 560,
  },

  // ── Page header ────────────────────────────────────────────────────────────
  pageHeader: {
    mb: "2.25rem",
  },

  eyebrow: {
    display: "inline-flex",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
    background: "rgba(196,137,58,0.08)",
    border: "1px solid rgba(196,137,58,0.2)",
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    mb: "0.75rem",
  },

  pageTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.6rem, 4vw, 2.1rem)",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
    mb: "0.4rem",
  },

  pageSub: {
    fontSize: "0.875rem",
    color: "#7A756F",
    lineHeight: 1.7,
  },

  // ── Card ───────────────────────────────────────────────────────────────────
  card: {
    background: "#fff",
    borderRadius: "14px",
    border: "1px solid #EAE6E0",
    padding: { xs: "1.5rem", sm: "2rem" },
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  },

  cardTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.25rem",
  },

  cardSub: {
    fontSize: "0.82rem",
    color: "#7A756F",
    lineHeight: 1.6,
  },

  divider: {
    height: "1px",
    background: "#F0EDE8",
  },

  // ── Error ──────────────────────────────────────────────────────────────────
  error: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    borderRadius: "6px",
    padding: "0.7rem 0.9rem",
    color: "#B91C1C",
  },

  errorIcon: {
    width: 15,
    height: 15,
    flexShrink: 0,
    mt: "1px",
  },

  errorText: {
    fontSize: "0.82rem",
  },

  // ── Step forms ─────────────────────────────────────────────────────────────
  fieldStack: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  charCount: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
    textAlign: "right",
    mt: "0.3rem",
  },

  // ── Photos step ────────────────────────────────────────────────────────────
  photoSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  photoLabel: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#3F3C38",
    mb: "0.15rem",
  },

  photoLabelSuffix: {
    fontWeight: 400,
    color: "#B0AAA3",
    ml: "0.4rem",
    fontSize: "0.8rem",
  },

  photoHint: {
    fontSize: "0.75rem",
    color: "#B0AAA3",
    mb: "0.85rem",
    lineHeight: 1.5,
  },

  profilePhotoRow: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
  },

  profilePhotoStatus: (uploaded: boolean) => ({
    fontSize: "0.78rem",
    color: uploaded ? "#22c55e" : "#7A756F",
    lineHeight: 1.7,
    fontWeight: uploaded ? 500 : 400,
  }),

  portfolioGrid: {
    display: "flex",
    gap: "0.65rem",
    flexWrap: "wrap",
  },

  // ── Actions ────────────────────────────────────────────────────────────────
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    pt: "0.25rem",
  },

  actionRow: {
    display: "flex",
    gap: "0.75rem",
  },

  backBtn: {
    flexShrink: 0,
    padding: "0.75rem 1.25rem",
    border: "1px solid #E8E4DE",
    borderRadius: "6px",
    color: "#7A756F",
    fontSize: "0.8rem",
    textTransform: "none",
    "&:hover": { background: "#F0EDE8", borderColor: "#D5D0C8" },
  },

  submitBtn: {
    padding: "0.85rem",
    background: "#C4893A",
    color: "#fff",
    fontSize: "0.79rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "6px",
    "&:hover:not(:disabled)": { background: "#D9A85C" },
    "&:disabled": { opacity: 0.5 },
  },

  skipBtn: {
    color: "#B0AAA3",
    fontSize: "0.75rem",
    textTransform: "none",
  },

  // ── Footer note ────────────────────────────────────────────────────────────
  footerNote: {
    fontSize: "0.75rem",
    color: "#B0AAA3",
    textAlign: "center",
    mt: "1.5rem",
  },
};
