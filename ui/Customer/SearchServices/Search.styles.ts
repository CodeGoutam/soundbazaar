// ─── Search Page Layout Styles ──────────────────────────────────────────────
export const pageStyles = {
  root: {
    minHeight: "calc(100vh - 64px)",
    bgcolor: "#FAF8F5",
    width: "100%",
    maxWidth: "100%",
    overflowX: "hidden",
  },

  // ── Hero ────────────────────────────────────────────────────────────────────
  hero: {
    textAlign: "center",
    pt: { xs: "1.5rem", md: "2.5rem" },
    pb: { xs: "0.75rem", md: "1.25rem" },
    px: { xs: "1rem", md: "2.5rem" },
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  },

  heroEyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    fontSize: { xs: "0.62rem", sm: "0.68rem" },
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#C4893A",
    bgcolor: "rgba(196,137,58,0.08)",
    border: "1px solid rgba(196,137,58,0.22)",
    px: "0.75rem",
    py: "0.25rem",
    borderRadius: "20px",
    mb: "0.6rem",
  },

  heroTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: { xs: "1.45rem", sm: "2rem", md: "2.8rem" },
    fontWeight: 800,
    color: "#18181B",
    letterSpacing: "-0.03em",
    lineHeight: 1.18,
    mb: "0.4rem",
    wordBreak: "break-word",
  },

  heroTitleAccent: {
    fontStyle: "italic",
    color: "#C4893A",
    fontWeight: 400,
  },

  heroSub: {
    fontSize: { xs: "0.78rem", sm: "0.9rem" },
    color: "#78716C",
    fontWeight: 400,
    lineHeight: 1.45,
    maxWidth: "500px",
    mx: "auto",
  },

  // ── Category Chips Bar ──────────────────────────────────────────────────────
  categoryBar: {
    display: "flex",
    alignItems: "center",
    gap: "0.45rem",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    py: "0.35rem",
    px: { xs: "1rem", md: "2.5rem" },
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    mb: "1rem",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },

  categoryChip: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    px: "0.75rem",
    py: "0.38rem",
    borderRadius: "30px",
    fontSize: { xs: "0.72rem", sm: "0.78rem" },
    fontWeight: 600,
    color: "#57534E",
    bgcolor: "#FFFFFF",
    border: "1px solid #E7E2D9",
    whiteSpace: "nowrap",
    cursor: "pointer",
    flexShrink: 0,
    transition: "all 0.18s ease",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)",
    "&:hover": {
      borderColor: "#C4893A",
      bgcolor: "#FAF6EF",
      color: "#18181B",
    },
  },

  categoryChipActive: {
    bgcolor: "rgba(196,137,58,0.08)",
    color: "#C4893A",
    border: "1px solid #C4893A",
    boxShadow: "0 1px 4px rgba(196,137,58,0.12)",
    "&:hover": {
      bgcolor: "rgba(196,137,58,0.14)",
      color: "#B37930",
      borderColor: "#B37930",
    },
  },

  // ── Layout wrapper ───────────────────────────────────────────────────────────
  layoutWrap: {
    width: "100%",
    maxWidth: "1400px",
    mx: "auto",
    px: { xs: "1rem", md: "2.5rem" },
    pb: "4rem",
    display: "flex",
    gap: { xs: "0.75rem", lg: "1.75rem" },
    alignItems: "flex-start",
    boxSizing: "border-box",
  },

  // ── Sidebar (Visible on all screens >= 550px, hidden only on mobile < 550px) ──
  sidebar: {
    display: "block",
    "@media (max-width: 550px)": {
      display: "none",
    },
    width: { sm: 220, md: 240, lg: 250 },
    flexShrink: 0,
    position: "sticky",
    top: "84px",
  },

  sidebarCard: {
    bgcolor: "#FFFFFF",
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
  },

  sidebarHead: {
    px: "1.1rem",
    py: "0.85rem",
    bgcolor: "#F7F5F0",
    borderBottom: "1px solid #E8E4DE",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sidebarHeadTitle: {
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#57534E",
  },

  sidebarBody: {
    px: "1.1rem",
    py: "1.1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  // ── Main content area ────────────────────────────────────────────────────────
  mainContent: {
    flex: 1,
    minWidth: 0,
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
  },

  // ── Toolbar (mobile-friendly two-row split, no overflow) ────────────────────
  toolbar: {
    display: "flex",
    alignItems: { xs: "stretch", sm: "center" },
    justifyContent: "space-between",
    mb: "0.85rem",
    gap: "0.5rem",
    flexDirection: { xs: "column", sm: "row" },
    width: "100%",
    boxSizing: "border-box",
  },

  resultCount: {
    fontSize: { xs: "0.76rem", sm: "0.82rem" },
    color: "#78716C",
    fontWeight: 500,
  },

  resultCountBold: {
    fontWeight: 800,
    color: "#18181B",
  },

  toolbarRight: {
    display: "flex",
    alignItems: "center",
    gap: "0.45rem",
    width: { xs: "100%", sm: "auto" },
    justifyContent: { xs: "space-between", sm: "flex-end" },
  },

  // Mobile Filter Sheet button (only visible when screen < 550px)
  filterToggleBtn: {
    display: "none",
    "@media (max-width: 550px)": {
      display: "inline-flex",
    },
    alignItems: "center",
    gap: "0.35rem",
    bgcolor: "#FFFFFF",
    border: "1px solid #E2DDD5",
    borderRadius: "6px",
    px: "0.75rem",
    py: "0.4rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#27272A",
    textTransform: "none",
    boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
    flexShrink: 0,
    "&:hover": {
      bgcolor: "#F7F5F0",
      borderColor: "#C4893A",
    },
  },

  sortSelect: {
    bgcolor: "#FFFFFF",
    border: "1px solid #E2DDD5",
    borderRadius: "6px",
    fontSize: "0.76rem",
    fontWeight: 500,
    color: "#27272A",
    flex: { xs: 1, sm: "none" },
    minWidth: { xs: 0, sm: "130px" },
    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
    "& .MuiSelect-select": {
      py: "0.4rem",
      px: "0.7rem",
      fontSize: "0.76rem",
    },
  },

  filterBadge: {
    width: 18,
    height: 18,
    borderRadius: "50%",
    bgcolor: "#C4893A",
    color: "#FFFFFF",
    fontSize: "0.62rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  // ── Cards grid ────────────────────────────────────────────────────────────────
  cardsGrid: {
    display: "grid",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "border-box",
    gridTemplateColumns: {
      xs: "repeat(2, minmax(0, 1fr))", // 2 columns on mobile (<550px)
      sm: "repeat(2, minmax(0, 1fr))", // 2 columns next to sidebar (550px - 768px)
      md: "repeat(3, minmax(0, 1fr))", // 3 columns next to sidebar (768px - 1200px)
      lg: "repeat(4, minmax(0, 1fr))", // 4 columns next to sidebar (1200px+)
      xl: "repeat(4, minmax(0, 1fr))", // 4 columns on wide monitors
    },
    gap: { xs: "0.55rem", sm: "0.75rem", md: "0.85rem", lg: "0.95rem" },
  },

  // ── Empty state ──────────────────────────────────────────────────────────────
  emptyState: {
    textAlign: "center",
    py: "4rem",
    px: "1.5rem",
    bgcolor: "#FFFFFF",
    borderRadius: "10px",
    border: "1px dashed #E2DDD5",
  },

  emptyIcon: {
    fontSize: "2.2rem",
    mb: "0.75rem",
    display: "block",
  },

  emptyTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#18181B",
    mb: "0.35rem",
  },

  emptySub: {
    fontSize: "0.82rem",
    color: "#78716C",
    lineHeight: 1.5,
    maxWidth: "380px",
    mx: "auto",
  },
};
