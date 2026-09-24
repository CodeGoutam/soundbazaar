export const styles = {
  root: {
    display: "flex",
    minHeight: "100dvh",
    width: "100%",
    backgroundColor: "#FFFFFF",
    overflowX: "hidden",
  },

  // ── Left Column: Brand Experience (Desktop Only) ─────────────────────────
  leftColumn: {
    display: { xs: "none", md: "flex" },
    width: { md: "46%", lg: "48%" },
    minHeight: "100dvh",
    backgroundColor: "#0F1117",
    color: "#FFFFFF",
    position: "relative",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: { md: "2rem 2.25rem", lg: "2.5rem 3.25rem" },
    flexShrink: 0,
    boxSizing: "border-box",
  },

  leftGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 15% 15%, rgba(196,137,58,0.25), transparent 45%), radial-gradient(ellipse at 85% 85%, rgba(196,137,58,0.12), transparent 40%)",
    pointerEvents: "none",
  },

  brandArtwork: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
  },

  brandRing: {
    position: "absolute",
    width: "min(40vw, 520px)",
    height: "min(40vw, 520px)",
    right: "-10%",
    bottom: "-25%",
    borderRadius: "50%",
    border: "1px solid rgba(196,137,58,0.2)",
    boxShadow:
      "0 0 0 24px rgba(196,137,58,0.03), 0 0 0 60px rgba(196,137,58,0.02)",
  },

  brandRingInner: {
    position: "absolute",
    width: "min(24vw, 310px)",
    height: "min(24vw, 310px)",
    right: "-3%",
    bottom: "-10%",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 35% 35%, rgba(196,137,58,0.25), rgba(196,137,58,0.03) 45%, transparent 68%)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  equalizer: {
    position: "absolute",
    right: "10%",
    top: "18%",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    height: 80,
    opacity: 0.45,
    "& span": {
      display: "block",
      width: "4px",
      borderRadius: "999px",
      background: "linear-gradient(180deg, #E0B06A, #8A5B20)",
    },
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.65rem",
    position: "relative",
    zIndex: 10,
  },

  logoMark: {
    width: 36,
    height: 36,
    borderRadius: "9px",
    background: "#C4893A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "#FFFFFF",
    "& span": {
      color: "#C4893A",
    },
  },

  leftBodyContainer: {
    position: "relative",
    zIndex: 5,
    my: "auto",
    py: "1.25rem",
  },

  leftFooter: {
    position: "relative",
    zIndex: 5,
    pt: "1rem",
    borderTop: "1px solid rgba(255,255,255,0.08)",
  },

  leftFooterText: {
    fontSize: "0.74rem",
    color: "rgba(255,255,255,0.4)",
    letterSpacing: "0.02em",
  },

  // ── Right Column: Clean Auth Pane ────────────────────────────────────────
  rightColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100dvh",
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(ellipse at 88% 5%, rgba(196,137,58,0.14) 0%, transparent 45%), radial-gradient(ellipse at 12% 95%, rgba(196,137,58,0.08) 0%, transparent 40%), #FAF8F5",
    padding: {
      xs: "1rem 0.75rem 1.25rem",
      sm: "1.5rem 1.25rem",
      md: "2rem 2rem",
      lg: "2.25rem 3rem",
    },
    boxSizing: "border-box",
    overflowY: "auto",
  },

  // Background decorative sound aesthetics
  mobileBgDecor: {
    display: "block",
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    zIndex: 0,
    overflow: "hidden",
  },

  mobileSoundRing1: {
    position: "absolute",
    top: "-80px",
    right: "-80px",
    width: { xs: "240px", md: "320px" },
    height: { xs: "240px", md: "320px" },
    borderRadius: "50%",
    border: "1.5px solid rgba(196, 137, 58, 0.16)",
    boxShadow:
      "0 0 0 24px rgba(196, 137, 58, 0.04), 0 0 0 55px rgba(196, 137, 58, 0.02)",
  },

  mobileSoundRing2: {
    position: "absolute",
    bottom: "-60px",
    left: "-60px",
    width: { xs: "200px", md: "280px" },
    height: { xs: "200px", md: "280px" },
    borderRadius: "50%",
    border: "1px dashed rgba(196, 137, 58, 0.14)",
  },

  mobileEqualizer: {
    position: "absolute",
    top: { xs: "1.2rem", md: "2rem" },
    right: { xs: "4.5rem", md: "8rem" },
    display: "flex",
    alignItems: "center",
    gap: "3px",
    height: { xs: 32, md: 44 },
    opacity: 0.14,
    "& span": {
      display: "block",
      width: "3px",
      borderRadius: "999px",
      background: "#C4893A",
    },
  },

  rightHeader: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  mobileLogoWrap: {
    display: { xs: "flex", md: "none" },
    alignItems: "center",
    gap: "0.5rem",
  },

  mobileLogoMark: {
    width: 32,
    height: 32,
    borderRadius: "8px",
    background: "#C4893A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mobileLogoText: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.15rem",
    fontWeight: 700,
    color: "#18181B",
    "& span": { color: "#C4893A" },
  },

  exploreLink: {
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#71717A",
    ml: "auto",
    transition: "color 0.15s ease",
    "&:hover": {
      color: "#C4893A",
    },
  },

  rightBody: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
    my: "auto",
    py: { xs: "0.75rem", md: "1.5rem" },
  },

};
