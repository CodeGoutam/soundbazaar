export const styles = {
  section: {
    background: "var(--parchment-dark, #F0EDE8)",
    // padding: "6rem 2.5rem",
    py: { xs: 6, md: 12 },
    px: { xs: 1, md: 3 },
  },

  inner: {
    maxWidth: "80%",
    margin: "0 auto",
  },

  head: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    marginBottom: "4rem",
  },

  label: {
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted, #7A756F)",
  },

  titleWrap: {},

  title: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(2rem, 4vw, 2.6rem)",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--ink, #18181B)",
    letterSpacing: "-0.02em",
  },

  rule: {
    width: "56px",
    height: "1px",
    background: "var(--stone, #E8E4DE)",
  },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    position: "relative",

    "@media (max-width:640px)": {
      gridTemplateColumns: "1fr 1fr",
      gap: "2.5rem",
    },

    "&::after": {
      content: '""',
      position: "absolute",
      top: "21px",
      left: "calc(12.5% + 21px)",
      right: "calc(12.5% + 21px)",
      height: "1px",
      background: "var(--stone, #E8E4DE)",
      zIndex: 0,

      "@media (max-width:640px)": {
        display: "none",
      },
    },
  },

  step: {
    textAlign: "center",
    padding: "0 0.75rem",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },

  circleWrap: {},

  circle: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "var(--warm-white, #FDFCFB)",
    border: "1.5px solid rgba(196,137,58,0.22)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--amber, #C4893A)",
    boxShadow: "0 2px 10px rgba(196,137,58,0.1)",
    transition: "0.2s",

    "&:hover": {
      background: "rgba(196,137,58,0.09)",
      transform: "scale(1.08)",
    },
  },

  stepContent: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },

  stepTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1rem",
    fontWeight: 700,
    color: "var(--ink, #18181B)",
    letterSpacing: "-0.01em",
  },

  stepDesc: {
    fontSize: "0.82rem",
    color: "var(--muted, #7A756F)",
    lineHeight: 1.65,
  },
};
