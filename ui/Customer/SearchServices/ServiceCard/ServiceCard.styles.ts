// ─── Service Card Styles ────────────────────────────────────────────────────
export const cardStyles = {
  card: {
    bgcolor: "#FFFFFF",
    border: "1px solid #EAE6DF",
    borderRadius: "6px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    boxShadow: "0 1px 3px rgba(24,24,27,0.04)",
    transition: "border-color 0.18s ease, box-shadow 0.18s ease",
    minWidth: 0,
    width: "100%",
    boxSizing: "border-box",
    "&:hover": {
      borderColor: "#C4893A",
      boxShadow: "0 4px 14px rgba(24,24,27,0.08)",
      "& .card-img": { transform: "scale(1.04)" },
    },
  },

  // ── Image ──────────────────────────────────────────────────────────────────
  imageWrap: {
    position: "relative",
    width: "100%",
    height: { xs: 110, sm: 135, md: 150 },
    bgcolor: "#F4F1EC",
    overflow: "hidden",
    flexShrink: 0,
    boxSizing: "border-box",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.35s ease-out",
  },

  imageGradient: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)",
    pointerEvents: "none",
  },

  topLeftBadges: {
    position: "absolute",
    top: { xs: "0.3rem", sm: "0.45rem" },
    left: { xs: "0.3rem", sm: "0.45rem" },
    display: "flex",
    alignItems: "center",
    gap: "0.2rem",
    zIndex: 2,
    maxWidth: "85%",
  },

  typeBadge: {
    fontSize: { xs: "0.52rem", sm: "0.6rem" },
    fontWeight: 700,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    bgcolor: "rgba(255,255,255,0.96)",
    color: "#18181B",
    px: { xs: "0.3rem", sm: "0.45rem" },
    py: "0.1rem",
    borderRadius: "14px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
    whiteSpace: "nowrap",
  },

  featuredBadge: {
    fontSize: { xs: "0.5rem", sm: "0.56rem" },
    fontWeight: 700,
    letterSpacing: "0.03em",
    textTransform: "uppercase",
    bgcolor: "#C4893A",
    color: "#FFFFFF",
    px: { xs: "0.3rem", sm: "0.4rem" },
    py: "0.1rem",
    borderRadius: "14px",
    whiteSpace: "nowrap",
  },

  ratingBadge: {
    position: "absolute",
    bottom: { xs: "0.3rem", sm: "0.45rem" },
    right: { xs: "0.3rem", sm: "0.45rem" },
    display: "flex",
    alignItems: "center",
    gap: "0.15rem",
    bgcolor: "rgba(15,17,23,0.85)",
    px: { xs: "0.32rem", sm: "0.45rem" },
    py: "0.1rem",
    borderRadius: "14px",
    backdropFilter: "blur(4px)",
    zIndex: 2,
  },

  ratingStar: { fontSize: { xs: "0.58rem", sm: "0.68rem" }, color: "#FBBF24" },
  ratingScore: {
    fontSize: { xs: "0.62rem", sm: "0.7rem" },
    fontWeight: 700,
    color: "#FFFFFF",
  },
  ratingCount: {
    fontSize: { xs: "0.52rem", sm: "0.62rem" },
    color: "rgba(255,255,255,0.7)",
  },

  verifiedChip: {
    position: "absolute",
    bottom: { xs: "0.3rem", sm: "0.45rem" },
    left: { xs: "0.3rem", sm: "0.45rem" },
    display: "flex",
    alignItems: "center",
    gap: "0.15rem",
    bgcolor: "rgba(16,185,129,0.92)",
    color: "#FFFFFF",
    fontSize: { xs: "0.52rem", sm: "0.6rem" },
    fontWeight: 700,
    px: { xs: "0.32rem", sm: "0.42rem" },
    py: "0.08rem",
    borderRadius: "14px",
    zIndex: 2,
  },

  // ── Body ───────────────────────────────────────────────────────────────────
  body: {
    p: { xs: "0.5rem 0.65rem", sm: "0.65rem 0.75rem" },
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "0.22rem",
    minWidth: 0,
    boxSizing: "border-box",
  },

  providerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.25rem",
    minWidth: 0,
    width: "100%",
  },

  providerName: {
    fontSize: { xs: "0.6rem", sm: "0.68rem" },
    fontWeight: 500,
    color: "#9E988F",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    minWidth: 0,
    flex: 1,
  },

  locationTag: {
    display: "flex",
    alignItems: "center",
    gap: "0.1rem",
    fontSize: { xs: "0.58rem", sm: "0.65rem" },
    color: "#B5AFA8",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },

  serviceTitle: {
    fontSize: { xs: "0.78rem", sm: "0.88rem" },
    fontWeight: 700,
    color: "#18181B",
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    minWidth: 0,
    width: "100%",
  },

  // ── Spec chips ─────────────────────────────────────────────────────────────
  specsRow: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "0.18rem", sm: "0.28rem" },
    flexWrap: "nowrap",
    overflow: "hidden",
    minWidth: 0,
    width: "100%",
    my: "0.03rem",
  },

  specItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.12rem",
    fontSize: { xs: "0.54rem", sm: "0.62rem" },
    fontWeight: 500,
    color: "#6B655E",
    bgcolor: "#F6F4EF",
    border: "1px solid #ECE7DE",
    px: { xs: "0.28rem", sm: "0.38rem" },
    py: "0.06rem",
    borderRadius: "3px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    lineHeight: 1.2,
  },

  divider: {
    height: "1px",
    bgcolor: "#F0ECE6",
    my: "0.15rem",
  },

  // ── Price + Book Button Row ───────────────────────────────────────────────
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.25rem",
    mt: "auto",
    pt: "0.08rem",
    minWidth: 0,
    width: "100%",
  },

  pricingWrap: {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    flex: 1,
    overflow: "hidden",
  },

  priceMain: {
    display: "flex",
    alignItems: "baseline",
    gap: "0.1rem",
    whiteSpace: "nowrap",
    minWidth: 0,
  },

  priceAmount: {
    fontSize: { xs: "0.78rem", sm: "0.9rem" },
    fontWeight: 700,
    color: "#18181B",
    lineHeight: 1.15,
  },

  priceDuration: {
    fontSize: { xs: "0.55rem", sm: "0.64rem" },
    color: "#78716C",
    fontWeight: 400,
  },

  priceExtra: {
    fontSize: { xs: "0.52rem", sm: "0.6rem" },
    color: "#A8A29E",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  bookButton: {
    bgcolor: "#C4893A",
    color: "#FFFFFF",
    border: "1px solid #C4893A",
    fontSize: { xs: "0.68rem", sm: "0.75rem" },
    fontWeight: 600,
    letterSpacing: "0.02em",
    textTransform: "none",
    borderRadius: "20px",
    px: { xs: "0.75rem", sm: "0.95rem" },
    py: { xs: "0.32rem", sm: "0.38rem" },
    boxShadow: "0 2px 6px rgba(196,137,58,0.25)",
    flexShrink: 0,
    minWidth: 0,
    lineHeight: 1.2,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    transition: "all 0.18s ease",
    "& .btn-icon": {
      fontSize: { xs: "0.75rem", sm: "0.85rem" },
      transition: "transform 0.18s ease",
    },
    "&:hover": {
      bgcolor: "#B37930",
      borderColor: "#B37930",
      color: "#FFFFFF",
      boxShadow: "0 4px 12px rgba(196,137,58,0.38)",
      "& .btn-icon": {
        transform: "translate(2px, -2px)",
      },
    },
    "&:active": {
      transform: "scale(0.96)",
    },
  },
};
