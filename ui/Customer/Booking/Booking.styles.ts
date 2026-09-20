export const bookingStyles = {
  root: { minHeight: "calc(100vh - 64px)", bgcolor: "#F9F7F4" },

  // ── Back bar ─────────────────────────────────────────────────────────────────
  backBar: {
    px: { xs: "1rem", md: "2.5rem" },
    py: "0.75rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    borderBottom: "1px solid #F0EDE8",
    bgcolor: "#FDFCFB",
  },

  backBtn: {
    fontSize: "0.78rem",
    color: "#7A756F",
    textTransform: "none",
    fontWeight: 400,
    gap: "0.3rem",
    p: 0,
    minWidth: 0,
    "&:hover": { bgcolor: "transparent", color: "#C4893A" },
  },

  backSep: { color: "#D3D1C7", fontSize: "0.75rem", mx: "0.25rem" },
  breadcrumbCurrent: { fontSize: "0.78rem", color: "#18181B", fontWeight: 500 },

  // ── Layout ───────────────────────────────────────────────────────────────────
  contentWrap: {
    maxWidth: "1400px",
    mx: "auto",
    px: { xs: "1rem", md: "2.5rem" },
    py: { xs: "1.5rem", md: "2.5rem" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1fr 340px" },
    gap: { xs: "2rem", lg: "2.5rem" },
    alignItems: "flex-start",
  },

  // ── Form side ────────────────────────────────────────────────────────────────
  formCol: { display: "flex", flexDirection: "column", gap: "1.5rem" },

  pageTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },

  pageLabel: {
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
    mb: "0.3rem",
    display: "block",
  },

  // ── Step indicator ────────────────────────────────────────────────────────────
  stepRow: {
    display: "flex",
    alignItems: "center",
    gap: "0",
    mb: "0.25rem",
  },

  stepItem: (active: boolean, done: boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  }),

  stepCircle: (active: boolean, done: boolean) => ({
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.72rem",
    fontWeight: 700,
    flexShrink: 0,
    bgcolor: done ? "#16a34a" : active ? "#18181B" : "#E8E4DE",
    color: done || active ? "#fff" : "#B0AAA3",
    transition: "all 0.2s",
  }),

  stepLabel: (active: boolean) => ({
    fontSize: "0.75rem",
    fontWeight: active ? 600 : 400,
    color: active ? "#18181B" : "#B0AAA3",
    whiteSpace: "nowrap",
  }),

  stepLine: (done: boolean) => ({
    flex: 1,
    height: "1px",
    bgcolor: done ? "#16a34a" : "#E8E4DE",
    mx: "0.5rem",
    transition: "bgcolor 0.2s",
  }),

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
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
  },

  sectionNum: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    bgcolor: "#C4893A",
    color: "#fff",
    fontSize: "0.65rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
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
    gap: "0.85rem",
  },

  fieldRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
  },

  fieldLabel: {
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "#3F3C38",
    mb: "0.3rem",
    display: "block",
    letterSpacing: "0.01em",
  },

  helperText: { fontSize: "0.72rem", color: "#B0AAA3", mt: "-0.3rem" },

  // ── Duration selector ─────────────────────────────────────────────────────────

  // ── Event type chips ──────────────────────────────────────────────────────────
  eventChips: { display: "flex", flexWrap: "wrap", gap: "0.4rem" },

  eventChip: (active: boolean) => ({
    fontSize: "0.75rem",
    fontWeight: active ? 600 : 400,
    borderRadius: "20px",
    px: "0.75rem",
    py: "0.3rem",
    border: "1px solid",
    borderColor: active ? "#C4893A" : "#E8E4DE",
    bgcolor: active ? "rgba(196,137,58,0.08)" : "#FDFCFB",
    color: active ? "#C4893A" : "#7A756F",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.15s",
  }),

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
