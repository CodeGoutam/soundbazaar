export const detailStyles = {
  root: { minHeight: "calc(100vh - 64px)", bgcolor: "#F9F7F4" },

  // ── Back bar ────────────────────────────────────────────────────────────────
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

  // ── Content wrapper ──────────────────────────────────────────────────────────
  contentWrap: {
    maxWidth: "1400px",
    mx: "auto",
    px: { xs: "1rem", md: "2.5rem" },
    py: { xs: "1.5rem", md: "2.5rem" },
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1fr 360px" },
    gap: { xs: "2rem", lg: "3rem" },
    alignItems: "flex-start",
  },

  // ── Left column ──────────────────────────────────────────────────────────────
  leftCol: { display: "flex", flexDirection: "column", gap: "2rem" },

  // ── Image ────────────────────────────────────────────────────────────────────
  imageWrap: {
    width: "100%",
    height: { xs: 220, md: 380 },
    borderRadius: "12px",
    overflow: "hidden",
    bgcolor: "#F0EDE8",
    position: "relative",
    flexShrink: 0,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  typeBadge: {
    position: "absolute",
    top: "0.75rem",
    left: "0.75rem",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    bgcolor: "rgba(253,252,251,0.92)",
    color: "#3F3C38",
    px: "0.75rem",
    py: "0.28rem",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.6)",
    backdropFilter: "blur(4px)",
  },

  // ── Media Overlay Header ──────────────────────────────────────────────────
  overlayContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    color: "#FFFFFF",
  },

  overlayBadgeRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  },

  overlayTypeBadge: {
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    bgcolor: "#C4893A",
    color: "#FFFFFF",
    px: "0.75rem",
    py: "0.28rem",
    borderRadius: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },

  overlayCityBadge: {
    fontSize: "0.7rem",
    fontWeight: 500,
    color: "rgba(255,255,255,0.95)",
    bgcolor: "rgba(255,255,255,0.18)",
    backdropFilter: "blur(6px)",
    px: "0.65rem",
    py: "0.25rem",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.25)",
  },

  overlayTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: { xs: "1.35rem", sm: "1.8rem", md: "2.2rem" },
    fontWeight: 800,
    color: "#FFFFFF",
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
    textShadow: "0 2px 10px rgba(0,0,0,0.6)",
  },

  overlayProviderRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    flexWrap: "wrap",
  },

  overlayProviderName: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#FFFFFF",
    textShadow: "0 1px 4px rgba(0,0,0,0.5)",
  },

  overlayRatingRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.35rem",
    bgcolor: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(6px)",
    px: "0.6rem",
    py: "0.2rem",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.2)",
  },

  overlayRatingStar: { fontSize: "0.85rem", color: "#EAB308" },

  overlayRatingVal: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#FFFFFF",
  },

  overlayRatingCount: { fontSize: "0.75rem", color: "rgba(255,255,255,0.8)" },

  overlayEventTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.35rem",
    mt: "0.15rem",
  },

  overlayEventTag: {
    fontSize: "0.68rem",
    fontWeight: 500,
    bgcolor: "rgba(255,255,255,0.15)",
    color: "#FFFFFF",
    backdropFilter: "blur(6px)",
    px: "0.6rem",
    py: "0.2rem",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.22)",
  },

  // ── Section card ──────────────────────────────────────────────────────────────
  sectionCard: {
    bgcolor: "#FDFCFB",
    border: "1px solid #E8E4DE",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 1px 4px rgba(0,0,0,0.02)",
  },

  sectionHead: {
    px: "1.25rem",
    py: "0.85rem",
    bgcolor: "#F5F3EF",
    borderBottom: "1px solid #E8E4DE",
  },

  sectionTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.01em",
  },

  sectionBody: { px: "1.25rem", py: "1.1rem" },

  // ── Description ───────────────────────────────────────────────────────────────
  descText: {
    fontSize: "0.88rem",
    color: "#3F3C38",
    lineHeight: 1.85,
    whiteSpace: "pre-line",
  },

  // ── Info grid ─────────────────────────────────────────────────────────────────
  infoGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
    gap: "1px",
    bgcolor: "#E8E4DE",
    border: "1px solid #E8E4DE",
    borderRadius: "8px",
    overflow: "hidden",
  },

  infoItem: {
    bgcolor: "#FDFCFB",
    px: "1rem",
    py: "0.85rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.2rem",
  },

  infoLabel: {
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#B0AAA3",
  },

  infoValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
  },

  infoSub: { fontSize: "0.72rem", color: "#B0AAA3" },

  // ── Distance slabs table ─────────────────────────────────────────────────────
  slabRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    px: "1.25rem",
    py: "0.75rem",
    borderBottom: "1px solid #F0EDE8",
    "&:last-child": { borderBottom: "none" },
    alignItems: "center",
  },

  slabRange: { fontSize: "0.83rem", color: "#3F3C38", fontWeight: 500 },

  slabCharge: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.9rem",
    fontWeight: 700,
    textAlign: "right",
  },

  // ── Available days ────────────────────────────────────────────────────────────
  dayChips: { display: "flex", gap: "0.4rem", flexWrap: "wrap" },

  dayChip: (avail: boolean) => ({
    fontSize: "0.72rem",
    fontWeight: 500,
    px: "0.65rem",
    py: "0.28rem",
    borderRadius: "6px",
    border: "1px solid",
    borderColor: avail ? "#C4893A" : "#E8E4DE",
    bgcolor: avail ? "rgba(196,137,58,0.08)" : "#F5F3EF",
    color: avail ? "#C4893A" : "#B0AAA3",
  }),

  // ── Special notes ─────────────────────────────────────────────────────────────
  notesText: {
    fontSize: "0.85rem",
    color: "#7A756F",
    lineHeight: 1.75,
    display: "flex",
    gap: "0.6rem",
  },

  notesIcon: { fontSize: "1rem", flexShrink: 0, mt: "0.1rem" },

  // ── Provider card ─────────────────────────────────────────────────────────────
  providerCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    pb: "1rem",
    mb: "1rem",
    borderBottom: "1px solid #F0EDE8",
  },

  providerAvatar: {
    width: 52,
    height: 52,
    borderRadius: "10px",
    bgcolor: "rgba(196,137,58,0.1)",
    border: "1.5px solid rgba(196,137,58,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#C4893A",
    flexShrink: 0,
  },

  providerStatGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    mt: "0.5rem",
  },

  providerStat: {
    display: "flex",
    flexDirection: "column",
    gap: "0.1rem",
  },

  providerStatVal: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },

  providerStatLbl: {
    fontSize: "0.68rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#B0AAA3",
    mt: "0.1rem",
  },

  rightCol: {
    display: { xs: "none", lg: "flex" },
    flexDirection: "column",
    gap: "2rem",
    position: { lg: "sticky" },
    top: { lg: "80px" },
  },
  // Mobile sticky bottom CTA
  mobileCta: {
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

  mobilePriceWrap: { display: "flex", flexDirection: "column" },
  mobilePriceMain: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.3rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.02em",
    lineHeight: 1,
  },
  mobilePriceSub: { fontSize: "0.7rem", color: "#B0AAA3", mt: "0.1rem" },
  mobileBookBtn: {
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
