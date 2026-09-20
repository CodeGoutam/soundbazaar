export const styles = {
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    height: { xs: "56px", sm: "64px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: { xs: "0 0.75rem", sm: "0 1.5rem", md: "0 2.5rem" },
    background: "rgba(253, 252, 251, 0.95)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(196, 137, 58, 0.12)",
    transition: "0.2s ease",
    width: "100%",
    maxWidth: "100vw",
    boxSizing: "border-box",
  },

  navScrolled: {
    boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)",
    background: "rgba(255, 255, 255, 0.98)",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "0.35rem", sm: "0.5rem" },
    textDecoration: "none",
    flexShrink: 0,
  },

  logoMark: {
    width: { xs: 28, sm: 32 },
    height: { xs: 28, sm: 32 },
    borderRadius: "6px",
    background: "#18181B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoSvg: {
    width: { xs: 16, sm: 18 },
    height: { xs: 16, sm: 18 },
  },

  logoText: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: { xs: "1.05rem", sm: "1.25rem" },
    fontWeight: 700,
    color: "#18181B",
    lineHeight: 1,
    letterSpacing: "-0.01em",

    "& span": {
      color: "#C4893A",
    },
  },

  // Logged in user navigation links
  links: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: "0.4rem",
  },

  link: {
    fontSize: "0.78rem",
    fontWeight: 500,
    color: "#57534E",
    textDecoration: "none",
    padding: "0.42rem 0.85rem",
    borderRadius: "6px",
    transition: "all 0.18s ease",
    "&:hover": {
      color: "#18181B",
      background: "rgba(0,0,0,0.04)",
    },
  },

  // Right actions wrapper
  right: {
    display: "flex",
    alignItems: "center",
    gap: { xs: "0.35rem", sm: "0.5rem" },
    flexShrink: 0,
  },

  // ── Navbar Buttons (Sized for Navbar Height, Matching Theme Colors) ────────
  btnAbout: {
    display: { xs: "none", sm: "inline-flex" },
    fontSize: { xs: "0.72rem", sm: "0.78rem" },
    fontWeight: 500,
    color: "#57534E",
    background: "transparent",
    border: "1px solid transparent",
    textTransform: "none",
    height: { xs: "32px", sm: "36px" },
    minHeight: { xs: "32px", sm: "36px" },
    padding: { xs: "0 0.6rem", sm: "0 0.85rem" },
    borderRadius: "6px",
    minWidth: 0,
    lineHeight: 1,
    whiteSpace: "nowrap",
    transition: "all 0.18s ease",
    "&:hover": {
      color: "#18181B",
      background: "rgba(0, 0, 0, 0.04)",
    },
  },

  btnBusiness: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: { xs: "0.72rem", sm: "0.78rem" },
    fontWeight: 500,
    color: "#C4893A",
    background: "rgba(196, 137, 58, 0.04)",
    border: "1.5px solid rgba(196, 137, 58, 0.4)",
    textTransform: "none",
    height: { xs: "32px", sm: "36px" },
    minHeight: { xs: "32px", sm: "36px" },
    padding: { xs: "0 0.65rem", sm: "0 0.95rem" },
    borderRadius: "6px",
    minWidth: 0,
    lineHeight: 1,
    whiteSpace: "nowrap",
    transition: "all 0.18s ease",
    "&:hover": {
      color: "#B37930",
      borderColor: "#C4893A",
      background: "rgba(196, 137, 58, 0.12)",
    },
  },

  btnAuth: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: { xs: "0.72rem", sm: "0.78rem" },
    fontWeight: 500,
    color: "#FFFFFF",
    background: "#C4893A",
    border: "1.5px solid #C4893A",
    textTransform: "none",
    height: { xs: "32px", sm: "36px" },
    minHeight: { xs: "32px", sm: "36px" },
    padding: { xs: "0 0.75rem", sm: "0 1.05rem" },
    borderRadius: "6px",
    minWidth: 0,
    lineHeight: 1,
    whiteSpace: "nowrap",
    boxShadow: "0 1px 4px rgba(196, 137, 58, 0.25)",
    transition: "all 0.18s ease",
    "&:hover": {
      background: "#B37930",
      borderColor: "#B37930",
      boxShadow: "0 3px 10px rgba(196, 137, 58, 0.35)",
    },
  },

  // Logged-in profile badge and logout
  avatar: {
    width: { xs: 28, sm: 32 },
    height: { xs: 28, sm: 32 },
    borderRadius: "50%",
    background: "rgba(196, 137, 58, 0.1)",
    border: "1.5px solid rgba(196, 137, 58, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "#C4893A",
  },

  name: {
    fontSize: "0.78rem",
    color: "#3F3C38",
    fontWeight: 500,
    display: { xs: "none", md: "block" },
  },

  logout: {
    fontSize: "0.72rem",
    fontWeight: 500,
    textTransform: "none",
    color: "#78716C",
    border: "1px solid #E8E4DE",
    borderRadius: "6px",
    height: { xs: "32px", sm: "36px" },
    minHeight: { xs: "32px", sm: "36px" },
    padding: { xs: "0 0.6rem", sm: "0 0.85rem" },
    minWidth: 0,
    lineHeight: 1,
    "&:hover": {
      color: "#DC2626",
      borderColor: "#DC2626",
      background: "rgba(220, 38, 38, 0.04)",
    },
  },
};
