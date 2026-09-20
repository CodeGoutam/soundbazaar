export const styles = {
  // ── Left panel ────────────────────────────────────────────────────────────
  leftBody: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "1.25rem",
    padding: "2rem 0",
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
    background: "rgba(196,137,58,0.1)",
    border: "1px solid rgba(196,137,58,0.22)",
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    width: "fit-content",
  },

  leftTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)",
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: "-0.025em",
    color: "#fff",
    "& em": { fontStyle: "italic", color: "#C4893A", fontWeight: 400 },
  },

  leftSub: {
    fontSize: "0.88rem",
    color: "rgba(255,255,255,0.42)",
    lineHeight: 1.82,
    maxWidth: 330,
  },

  benefits: { display: "flex", flexDirection: "column", gap: 0 },

  benefit: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.85rem",
    padding: "0.9rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    "&:first-of-type": { borderTop: "1px solid rgba(255,255,255,0.05)" },
  },

  benefitCheck: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    flexShrink: 0,
    background: "rgba(196,137,58,0.15)",
    border: "1px solid rgba(196,137,58,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.05rem",
  },

  benefitTitle: {
    fontSize: "0.84rem",
    fontWeight: 500,
    color: "rgba(255,255,255,0.85)",
    mb: "0.15rem",
  },

  benefitSub: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.32)",
    lineHeight: 1.5,
  },

  // ── Right panel ───────────────────────────────────────────────────────────
  formWrap: {
    width: "100%",
    maxWidth: 400,
    display: "flex",
    flexDirection: "column",
    gap: "1.1rem",
  },

  formHead: { display: "flex", flexDirection: "column", gap: "0.4rem" },

  formLabel: {
    fontSize: "0.68rem",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#C4893A",
  },

  formTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.9rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.025em",
    lineHeight: 1.1,
  },

  formSub: { fontSize: "0.86rem", color: "#7A756F", lineHeight: 1.6 },

  rule: {
    width: 32,
    height: "1.5px",
    background: "#C4893A",
    margin: "0.1rem 0",
  },

  // ── Toggle ────────────────────────────────────────────────────────────────
  toggle: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 0,
    background: "#E8E4DE",
    borderRadius: "8px",
    padding: "3px",
  },

  toggleBtn: {
    padding: "0.55rem 1rem",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.04em",
    cursor: "pointer",
    color: "#7A756F",
    background: "transparent",
    textTransform: "none",
    "&:hover": { background: "rgba(255,255,255,0.5)", color: "#18181B" },
  },

  toggleBtnActive: {
    background: "#FDFCFB",
    color: "#18181B",
    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
    "&:hover": { background: "#FDFCFB" },
  },

  // ── Form ──────────────────────────────────────────────────────────────────
  form: { display: "flex", flexDirection: "column", gap: "0.85rem" },

  mobileWrap: { display: "flex", gap: "0.5rem", alignItems: "flex-start" },

  mobilePrefix: {
    height: 40,
    minWidth: 56,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #E8E4DE",
    borderRadius: "6px",
    background: "#FDFCFB",
    fontSize: "0.87rem",
    color: "#3F3C38",
    fontWeight: 500,
    flexShrink: 0,
    marginTop: "0px",
  },

  // ── OTP ───────────────────────────────────────────────────────────────────
  otpRow: {
    display: "flex",
    gap: "0.6rem",
    justifyContent: "center",
    margin: "0.5rem 0",
  },

  otpBox: {
    width: 48,
    height: 52,
    border: "1px solid #E8E4DE",
    borderRadius: "8px",
    background: "#FDFCFB",
    fontSize: "1.3rem",
    fontWeight: 600,
    textAlign: "center",
    color: "#18181B",
    outline: "none",
    transition: "border-color 0.18s, box-shadow 0.18s",
    fontFamily: "Fraunces, Georgia, serif",
    "&:focus": {
      borderColor: "#C4893A",
      boxShadow: "0 0 0 3px rgba(196,137,58,0.12)",
    },
  },

  infoBox: {
    background: "#F0EDE8",
    borderRadius: "8px",
    padding: "0.9rem 1rem",
    fontSize: "0.82rem",
    color: "#3F3C38",
    lineHeight: 1.6,
  },

  resendRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "0.8rem",
    color: "#B0AAA3",
  },

  resendBtn: {
    fontSize: "0.8rem",
    color: "#C4893A",
    fontWeight: 500,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    "&:disabled": { opacity: 0.5, cursor: "not-allowed" },
  },

  // ── Submit button ─────────────────────────────────────────────────────────
  submit: {
    width: "100%",
    padding: "0.85rem",
    background: "#C4893A",
    color: "#fff",
    fontSize: "0.79rem",
    fontWeight: 500,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    borderRadius: "6px",
    marginTop: "0.25rem",
    border: "none",
    boxShadow: "0 2px 8px rgba(196,137,58,0.25)",
    transition: "all 0.18s ease",
    "&:hover:not(:disabled)": {
      background: "#B37930",
      boxShadow: "0 4px 12px rgba(196,137,58,0.35)",
    },
    "&:disabled": { opacity: 0.5 },
  },

  // ── Error ─────────────────────────────────────────────────────────────────
  error: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    background: "#FEF2F2",
    border: "1px solid #FECACA",
    borderRadius: "6px",
    padding: "0.7rem 0.9rem",
    fontSize: "0.82rem",
    color: "#B91C1C",
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footerText: {
    textAlign: "center",
    fontSize: "0.82rem",
    color: "#7A756F",
    mt: "0.25rem",
  },

  footerLink: {
    color: "#C4893A",
    fontWeight: 500,
    textDecoration: "none",
    marginLeft: "4px",
  },
};
