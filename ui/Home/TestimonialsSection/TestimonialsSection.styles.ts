export const styles = {
  section: {
    background: "var(--warm-white, #FDFCFB)",
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
    gap: "1rem",
    marginBottom: { xs: "1.5rem", md: "3.5rem" },
  },

  label: {
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--muted, #7A756F)",
  },

  title: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(2rem, 4vw, 2.4rem)",
    fontWeight: 700,
    color: "var(--ink, #18181B)",
  },

  rule: {
    width: "56px",
    height: "1px",
    background: "var(--stone, #E8E4DE)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1px",
    background: "var(--stone, #E8E4DE)",
    border: "1px solid var(--stone, #E8E4DE)",
    borderRadius: "10px",
    overflow: "hidden",

    "@media (max-width:900px)": {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    background: "var(--warm-white, #FDFCFB)",
    transition: "0.22s",

    "&:hover": {
      background: "var(--parchment, #F9F7F4)",
    },
  },

  cardInner: {
    padding: "2.2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.4rem",
    height: "100%",
  },

  quote: {
    fontSize: "0.9rem",
    color: "var(--ink-soft, #3F3C38)",
    lineHeight: 1.82,
    fontStyle: "italic",
    flex: 1,
  },

  footer: {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
    paddingBottom: "1.2rem",
    borderBottom: "1px solid var(--stone, #E8E4DE)",
  },

  avatar: {
    width: 36,
    height: 36,
    border: "1.5px solid var(--stone, #E8E4DE)",
    borderRadius: "50%",
  },

  userInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  name: {
    fontSize: "0.85rem",
    fontWeight: 500,
    color: "var(--ink, #18181B)",
  },

  role: {
    fontSize: "0.72rem",
    color: "var(--muted-light, #B0AAA3)",
  },
};
