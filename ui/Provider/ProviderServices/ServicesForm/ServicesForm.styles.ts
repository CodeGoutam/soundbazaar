// ─── Form ─────────────────────────────────────────────────────────────────────
export const formStyles = {
  // ── Drawer / modal shell ─────────────────────────────────────────────────────
  drawerInner: {
    width: { xs: "100vw", sm: 520 },
    maxWidth: "100vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    bgcolor: "#F9F7F4",
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    px: "1.25rem",
    py: "1rem",
    bgcolor: "#0F1117",
    flexShrink: 0,
  },

  drawerTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.01em",
  },

  drawerCloseBtn: {
    color: "rgba(255,255,255,0.6)",
    "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.08)" },
  },

  drawerScroll: {
    flex: 1,
    overflowY: "auto",
    px: "1.25rem",
    py: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  drawerFooter: {
    px: "1.25rem",
    py: "1rem",
    bgcolor: "#FDFCFB",
    borderTop: "1px solid #E8E4DE",
    display: "flex",
    gap: "0.75rem",
    flexShrink: 0,
  },

  cancelBtn: {
    flex: 1,
    fontSize: "0.77rem",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "#3F3C38",
    border: "1px solid #E8E4DE",
    borderRadius: "6px",
    "&:hover": { bgcolor: "#F0EDE8" },
  },

  saveBtn: {
    flex: 2,
    fontSize: "0.77rem",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    bgcolor: "#C4893A",
    color: "#fff",
    borderRadius: "6px",
    "&:hover": { bgcolor: "#D9A85C" },
    "&:disabled": { opacity: 0.5 },
  },

  // ── Section block ────────────────────────────────────────────────────────────
  section: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
  },

  sectionHead: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    px: "1rem",
    py: "0.75rem",
    bgcolor: "#F5F3EF",
    borderBottom: "1px solid #E8E4DE",
  },

  sectionNumber: {
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
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#18181B",
    letterSpacing: "0.01em",
  },

  sectionBody: {
    px: "1rem",
    py: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  },

  // ── Field pair (two fields side by side) ─────────────────────────────────────
  fieldRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
  },

  // ── Pricing preview box ──────────────────────────────────────────────────────
  pricingPreview: {
    bgcolor: "#F0EDE8",
    borderRadius: "8px",
    px: "0.9rem",
    py: "0.75rem",
    fontSize: "0.78rem",
    color: "#3F3C38",
    lineHeight: 1.8,
  },

  // ── Day chips ────────────────────────────────────────────────────────────────
  dayChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },

  dayChip: (active: boolean) => ({
    fontSize: "0.72rem",
    fontWeight: 500,
    borderRadius: "6px",
    px: "0.7rem",
    py: "0.3rem",
    border: "1px solid",
    borderColor: active ? "#18181B" : "#E8E4DE",
    bgcolor: active ? "#18181B" : "#FDFCFB",
    color: active ? "#fff" : "#7A756F",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.15s",
    "&:hover": active ? {} : { borderColor: "#C4893A", color: "#C4893A" },
  }),

  // ── Event type chips ─────────────────────────────────────────────────────────
  eventChips: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },

  eventChip: (active: boolean) => ({
    fontSize: "0.72rem",
    fontWeight: 500,
    borderRadius: "20px",
    px: "0.75rem",
    py: "0.28rem",
    border: "1px solid",
    borderColor: active ? "#C4893A" : "#E8E4DE",
    bgcolor: active ? "rgba(196,137,58,0.08)" : "#FDFCFB",
    color: active ? "#C4893A" : "#7A756F",
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.15s",
  }),

  // ── Distance slab row ────────────────────────────────────────────────────────
  slabRow: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", sm: "80px 80px 1fr auto" },
    gap: "0.5rem",
    alignItems: "center",
    bgcolor: "#F5F3EF",
    border: "1px solid #E8E4DE",
    borderRadius: "8px",
    p: "0.6rem 0.75rem",
  },

  slabLabel: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  addSlabBtn: {
    fontSize: "0.75rem",
    fontWeight: 500,
    color: "#C4893A",
    border: "1px solid rgba(196,137,58,0.3)",
    borderRadius: "6px",
    py: "0.4rem",
    textTransform: "none",
    bgcolor: "rgba(196,137,58,0.04)",
    "&:hover": { bgcolor: "rgba(196,137,58,0.1)" },
    mt: "0.25rem",
  },

  // ── Helper text below fields ──────────────────────────────────────────────────
  helperText: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
    mt: "-0.4rem",
  },

  fieldLabel: {
    fontSize: "0.72rem",
    fontWeight: 500,
    color: "#3F3C38",
    mb: "0.3rem",
    display: "block",
    letterSpacing: "0.01em",
  },
};
