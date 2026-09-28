export const styles = {
  root: (isMobile: boolean) => ({
    minHeight: `calc(100vh - ${isMobile ? "56px" : "64px"})`,
    background: "linear-gradient(180deg, #FAF8F5 0%, #F5F1EA 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: { xs: "1.5rem 1rem", md: "2.5rem 2rem" },
    boxSizing: "border-box",
  }),

  container: {
    width: "100%",
    maxWidth: "1160px",
    mx: "auto",
  },

  // ── Header ──────────────────────────────────────────────────────────────────
  pageHeader: {
    mb: { xs: "1.5rem", md: "2.25rem" },
    textAlign: { xs: "left", md: "left" },
  },

  eyebrowWrap: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    mb: "0.6rem",
  },

  eyebrow: {
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#C4893A",
    background: "rgba(196,137,58,0.1)",
    border: "1px solid rgba(196,137,58,0.25)",
    padding: "0.25rem 0.75rem",
    borderRadius: "20px",
  },

  progressText: {
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#7A756F",
  },

  pageTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.75rem, 3.5vw, 2.3rem)",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
    mb: "0.35rem",
  },

  pageSub: {
    fontSize: { xs: "0.85rem", sm: "0.92rem" },
    color: "#6B655F",
    lineHeight: 1.6,
    maxWidth: "600px",
  },

  // ── Grid Layout ─────────────────────────────────────────────────────────────
  gridWrap: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", lg: "1fr 400px" },
    gap: { xs: "1.75rem", lg: "2.5rem" },
    alignItems: "flex-start",
  },

  // ── Card ────────────────────────────────────────────────────────────────────
  card: {
    background: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #EBE7E0",
    padding: { xs: "1.25rem", sm: "2rem" },
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    boxShadow: "0 4px 20px rgba(24, 24, 27, 0.04)",
  },

  cardTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.2rem",
  },

  cardSub: {
    fontSize: "0.82rem",
    color: "#78716C",
    lineHeight: 1.55,
  },

  divider: {
    height: "1px",
    background: "#F0EDE8",
  },

  // ── Error alert ─────────────────────────────────────────────────────────────
  error: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    background: "#FEF2F2",
    border: "1px solid #FCA5A5",
    borderRadius: "8px",
    padding: "0.75rem 1rem",
    color: "#991B1B",
  },

  errorIcon: {
    width: 18,
    height: 18,
    color: "#DC2626",
  },

  errorText: {
    fontSize: "0.82rem",
    fontWeight: 500,
  },

  // ── Category Selector Pills ──────────────────────────────────────────────────
  categoryLabel: {
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#3F3C38",
    mb: "0.5rem",
  },

  categoryGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(3, 1fr)" },
    gap: "0.5rem",
  },

  categoryChip: (active: boolean) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.3rem",
    p: "0.65rem 0.5rem",
    borderRadius: "10px",
    border: `1.5px solid ${active ? "#C4893A" : "#E8E4DE"}`,
    bgcolor: active ? "rgba(196, 137, 58, 0.06)" : "#FDFCFB",
    cursor: "pointer",
    transition: "all 0.18s ease",
    "&:hover": {
      borderColor: "#C4893A",
      bgcolor: "rgba(196, 137, 58, 0.04)",
    },
  }),

  categoryIcon: {
    fontSize: "1.25rem",
  },

  categoryText: (active: boolean) => ({
    fontSize: "0.72rem",
    fontWeight: 600,
    color: active ? "#C4893A" : "#57534E",
    whiteSpace: "nowrap",
  }),

  // ── Form fields ─────────────────────────────────────────────────────────────
  fieldStack: {
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",
  },

  suggestionRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    flexWrap: "wrap",
    mt: "0.4rem",
  },

  suggestionLabel: {
    fontSize: "0.7rem",
    color: "#99938C",
    fontWeight: 500,
  },

  suggestionChip: {
    fontSize: "0.68rem",
    fontWeight: 500,
    color: "#C4893A",
    bgcolor: "rgba(196, 137, 58, 0.06)",
    border: "1px solid rgba(196, 137, 58, 0.2)",
    px: "0.5rem",
    py: "0.2rem",
    borderRadius: "14px",
    cursor: "pointer",
    transition: "all 0.15s ease",
    "&:hover": {
      bgcolor: "rgba(196, 137, 58, 0.15)",
    },
  },

  charCount: {
    fontSize: "0.72rem",
    color: "#99938C",
    textAlign: "right",
    mt: "0.3rem",
  },

  // ── Photos step ────────────────────────────────────────────────────────────
  photoSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },

  photoBlock: {
    bgcolor: "#FDFCFB",
    border: "1px solid #F0EDE8",
    borderRadius: "12px",
    p: "1rem 1.25rem",
  },

  photoLabel: {
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#18181B",
    mb: "0.15rem",
  },

  photoLabelSuffix: {
    fontWeight: 500,
    color: "#C4893A",
    ml: "0.4rem",
    fontSize: "0.75rem",
    bgcolor: "rgba(196, 137, 58, 0.08)",
    px: "0.45rem",
    py: "0.15rem",
    borderRadius: "10px",
  },

  photoHint: {
    fontSize: "0.75rem",
    color: "#78716C",
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
    color: uploaded ? "#16a34a" : "#78716C",
    lineHeight: 1.6,
    fontWeight: uploaded ? 600 : 400,
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
    gap: "0.6rem",
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
    borderRadius: "8px",
    color: "#57534E",
    fontSize: "0.8rem",
    fontWeight: 600,
    textTransform: "none",
    bgcolor: "#FFFFFF",
    "&:hover": { background: "#F4F1EC", borderColor: "#D5D0C8" },
  },

  submitBtn: {
    padding: "0.85rem",
    background: "#C4893A",
    color: "#FFFFFF",
    fontSize: "0.82rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(196,137,58,0.25)",
    transition: "all 0.2s ease",
    "&:hover:not(:disabled)": {
      background: "#B37930",
      boxShadow: "0 4px 14px rgba(196,137,58,0.35)",
    },
    "&:disabled": { opacity: 0.5 },
  },

  skipBtn: {
    color: "#7A756F",
    fontSize: "0.78rem",
    fontWeight: 500,
    textTransform: "none",
    textAlign: "center",
    "&:hover": { color: "#18181B" },
  },

  // ── Right Column / Live Preview Card ───────────────────────────────────────
  previewCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },

  previewBox: {
    background: "#FFFFFF",
    borderRadius: "16px",
    border: "1px solid #EBE7E0",
    p: "1.25rem",
    boxShadow: "0 4px 20px rgba(24, 24, 27, 0.04)",
  },

  previewHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "1rem",
  },

  previewBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    fontSize: "0.68rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#16a34a",
    bgcolor: "#F0FDF4",
    border: "1px solid #BBF7D0",
    px: "0.6rem",
    py: "0.2rem",
    borderRadius: "12px",
  },

  previewLiveDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    bgcolor: "#16a34a",
  },

  previewTitle: {
    fontSize: "0.78rem",
    fontWeight: 600,
    color: "#78716C",
  },

  // Card inside live preview
  previewCardMock: {
    bgcolor: "#FDFCFB",
    border: "1.5px solid #E8E4DE",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
  },

  previewCardHead: {
    background:
      "linear-gradient(135deg, #1C1208 0%, #3D2000 50%, #C4893A 100%)",
    color: "#FFFFFF",
    p: "1rem",
    position: "relative",
  },

  previewCategoryBadge: {
    display: "inline-block",
    fontSize: "0.65rem",
    fontWeight: 600,
    color: "#C4893A",
    bgcolor: "rgba(196,137,58,0.15)",
    border: "1px solid rgba(196,137,58,0.3)",
    px: "0.55rem",
    py: "0.15rem",
    borderRadius: "10px",
    mb: "0.4rem",
  },

  previewBusinessName: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.05rem",
    fontWeight: 700,
    color: "#FFFFFF",
    lineHeight: 1.25,
  },

  previewOwnerName: {
    fontSize: "0.75rem",
    color: "#A1A1AA",
    mt: "0.15rem",
  },

  previewCardBody: {
    p: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  previewDesc: {
    fontSize: "0.78rem",
    color: "#57534E",
    lineHeight: 1.5,
  },

  previewLocation: {
    fontSize: "0.72rem",
    color: "#78716C",
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  },

  // Trust Benefits Panel
  trustCard: {
    background: "#FDFCFB",
    borderRadius: "16px",
    border: "1px solid #EBE7E0",
    p: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  trustTitle: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#18181B",
  },

  trustList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },

  trustItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.6rem",
  },

  trustIcon: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    bgcolor: "rgba(196, 137, 58, 0.1)",
    color: "#C4893A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    flexShrink: 0,
    fontWeight: 700,
  },

  trustItemTitle: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#18181B",
  },

  trustItemSub: {
    fontSize: "0.72rem",
    color: "#78716C",
    lineHeight: 1.45,
  },

  footerNote: {
    fontSize: "0.75rem",
    color: "#99938C",
    textAlign: "center",
    mt: "1.5rem",
  },
};
