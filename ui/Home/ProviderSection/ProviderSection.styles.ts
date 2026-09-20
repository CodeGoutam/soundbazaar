export const styles = {
  label: {
    fontSize: "0.75rem",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.4)",
  },

  title: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(2.2rem,4vw,2.6rem)",
    fontWeight: 700,
    color: "#18181B",
  },

  titleLight: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(2.2rem,4vw,2.6rem)",
    fontWeight: 700,
    color: "#fff",
  },

  rule: {
    width: "56px",
    height: "1px",
    background: "rgba(255,255,255,0.15)",
  },

  ruleCenter: {
    width: "56px",
    height: "1px",
    background: "#E8E4DE",
    margin: "0 auto",
  },

  // provider section
  pvSection: {
    background: "#0F1117",
    py: { xs: 6, md: 12 },
    px: { xs: 1, md: 3 },
  },

  pvInner: {
    maxWidth: "80%",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "5rem",
    alignItems: "center",

    "@media (max-width:860px)": {
      gridTemplateColumns: "1fr",
      gap: "3rem",
    },
  },

  pvLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
  },

  pvDesc: {
    fontSize: "0.92rem",
    color: "rgba(255,255,255,0.48)",
    lineHeight: 1.85,
  },

  perks: {
    display: "flex",
    flexDirection: "column",
  },

  perk: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.1rem 1.25rem",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    transition: "0.18s",
    borderRadius: "4px",

    "&:hover": {
      background: "rgba(255,255,255,0.025)",
    },
  },

  perkIcon: {
    width: 34,
    height: 34,
    borderRadius: "6px",
    background: "rgba(196,137,58,0.1)",
    border: "1px solid rgba(196,137,58,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.95rem",
  },

  perkText: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  perkTitle: {
    fontSize: "0.86rem",
    fontWeight: 500,
    color: "#fff",
  },

  perkSub: {
    fontSize: "0.78rem",
    color: "rgba(255,255,255,0.38)",
    lineHeight: 1.55,
  },

  // CTA
  fcSection: {
    background: "#F0EDE8",
    py: { xs: 6, md: 12 },
    px: { xs: 1, md: 3 },
    textAlign: "center",
    position: "relative",
  },

  fcInner: {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },

  fcDesc: {
    fontSize: "0.95rem",
    color: "#7A756F",
    lineHeight: 1.8,
  },

  fcBtns: {
    display: "flex",
    gap: "0.75rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  // buttons
  amberBtn: {
    background: "#C4893A",
    color: "#fff",
    padding: "10px 18px",
    textTransform: "none",
    "&:hover": {
      background: "#b3782d",
    },
  },

  darkBtn: {
    background: "#18181B",
    color: "#fff",
    padding: "10px 18px",
    textTransform: "none",
  },

  outlineBtn: {
    border: "1px solid #18181B",
    color: "#18181B",
    padding: "10px 18px",
    textTransform: "none",
  },

  // footer
  footer: {
    background: "#0F1117",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    padding: { xs: "0.75rem 1.25rem", md: "1.75rem 2.5rem" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media (max-width:640px)": {
      flexDirection: "column",
      gap: "0.5rem",
      textAlign: "center",
    },
  },

  logo: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "rgba(255,255,255,0.3)",

    "& span": {
      color: "#C4893A",
    },
  },

  copy: {
    fontSize: "0.72rem",
    color: "rgba(255,255,255,0.2)",
    letterSpacing: "0.06em",
  },
};
