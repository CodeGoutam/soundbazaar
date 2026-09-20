export const styles = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    minHeight: "100vh",
    "@media (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },

  left: {
    background: "#0F1117",
    color: "#fff",
    padding: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    "@media (max-width: 900px)": {
      display: "none",
    },
  },

  leftGlow: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 40% 30%, rgba(196,137,58,0.18), transparent 60%)",
    pointerEvents: "none",
  },
  logoSvg: {
    width: 16,
    height: 16,
  },
  logoMark: {
    width: 34,
    height: 34,
    borderRadius: "6px",
    background: "#C4893A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    position: "relative",
    zIndex: 2,
  },
  logoLink: {
    textDecoration: "none",
    position: "absolute",
    top: 24,
    zIndex: 2,
  },
  logoText: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.3rem",
    fontWeight: 700,

    "& span": {
      color: "#C4893A",
    },
  },

  right: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FDFCFB",
    padding: "2.5rem",
  },
};
