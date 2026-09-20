// ─── Page ─────────────────────────────────────────────────────────────────────
export const pageStyles = {
  root: {
    minHeight: "calc(100vh - 64px)",
    bgcolor: "#F9F7F4",
  },

  content: {
    maxWidth: "80%",
    mx: "auto",
    px: { xs: "1rem", md: "2.5rem" },
    py: { xs: "1.5rem", md: "2.5rem" },
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  // ── Page header ─────────────────────────────────────────────────────────────
  pageHeader: {
    display: "flex",
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: "1rem",
    flexDirection: { xs: "column", sm: "row" },
  },

  pageHeaderLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  pageLabel: {
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
  },

  pageTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.4rem, 3vw, 2rem)",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1.1,
  },

  pageSub: {
    fontSize: "0.82rem",
    color: "#7A756F",
  },

  addBtn: {
    bgcolor: "#18181B",
    color: "#fff",
    fontSize: "0.77rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    px: "1.2rem",
    py: "0.65rem",
    borderRadius: "6px",
    flexShrink: 0,
    "&:hover": { bgcolor: "#2a2a2f" },
  },

  // ── Empty state ──────────────────────────────────────────────────────────────
  emptyState: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    py: "5rem",
    px: "2rem",
    textAlign: "center",
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "12px",
  },

  emptyIconWrap: {
    width: 64,
    height: 64,
    borderRadius: "14px",
    bgcolor: "rgba(196,137,58,0.08)",
    border: "1px solid rgba(196,137,58,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: "1.25rem",
    fontSize: "1.6rem",
  },

  emptyTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.4rem",
  },

  emptySub: {
    fontSize: "0.85rem",
    color: "#B0AAA3",
    lineHeight: 1.7,
    maxWidth: 340,
    mb: "1.75rem",
  },

  // ── Service cards grid ───────────────────────────────────────────────────────
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "repeat(2, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    gap: "1rem",
  },

  // ── Service card ─────────────────────────────────────────────────────────────
  serviceCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "12px",
    overflow: "hidden",
    transition: "box-shadow 0.2s, transform 0.2s",
    "&:hover": {
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      transform: "translateY(-1px)",
    },
  },

  cardImage: {
    width: "100%",
    height: 160,
    objectFit: "cover",
    bgcolor: "#F0EDE8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    color: "#B0AAA3",
    position: "relative",
  },

  cardImagePlaceholder: {
    width: "100%",
    height: 160,
    bgcolor: "#F0EDE8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.5rem",
  },

  cardBody: {
    p: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  cardName: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.01em",
  },

  cardDesc: {
    fontSize: "0.78rem",
    color: "#7A756F",
    lineHeight: 1.6,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },

  cardPriceRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "0.3rem",
  },

  cardPrice: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  cardPriceSub: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
  },

  cardTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
    mb: "0.85rem",
  },

  cardTag: {
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    bgcolor: "#F0EDE8",
    color: "#7A756F",
    px: "0.5rem",
    py: "0.18rem",
    borderRadius: "10px",
  },

  cardActions: {
    display: "flex",
    gap: "0.5rem",
    pt: "0.75rem",
    borderTop: "1px solid #F0EDE8",
  },

  cardEditBtn: {
    flex: 1,
    fontSize: "0.75rem",
    fontWeight: 500,
    textTransform: "none",
    color: "#18181B",
    border: "1px solid #E8E4DE",
    borderRadius: "6px",
    py: "0.45rem",
    "&:hover": { bgcolor: "#F0EDE8", borderColor: "#C4893A", color: "#C4893A" },
  },

  cardDeleteBtn: {
    fontSize: "0.75rem",
    fontWeight: 500,
    textTransform: "none",
    color: "#B91C1C",
    border: "1px solid #FECACA",
    borderRadius: "6px",
    py: "0.45rem",
    px: "0.75rem",
    "&:hover": { bgcolor: "#FEF2F2" },
  },

  cardStatusChip: (active: boolean) => ({
    position: "absolute",
    top: "0.6rem",
    right: "0.6rem",
    fontSize: "0.62rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    bgcolor: active ? "#F0FDF4" : "#F5F5F4",
    color: active ? "#15803D" : "#78716C",
    height: 20,
    borderRadius: "10px",
    "& .MuiChip-label": { px: "0.6rem" },
  }),
};
