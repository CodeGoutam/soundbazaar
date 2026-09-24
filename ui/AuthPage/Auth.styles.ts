export const styles = {
  // ── Left panel ────────────────────────────────────────────────────────────
  leftBody: {
    position: "relative",
    zIndex: 2,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "clamp(0.6rem, 1.2vh, 0.9rem)",
    padding: "1rem 0",
  },

  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.68rem",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "#C4893A",
    background: "rgba(196,137,58,0.12)",
    border: "1px solid rgba(196,137,58,0.25)",
    padding: "0.3rem 0.8rem",
    borderRadius: "20px",
    width: "fit-content",
  },

  leftTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)",
    fontWeight: 600,
    lineHeight: 1.12,
    letterSpacing: "-0.025em",
    color: "#FFFFFF",
    "& em": { fontStyle: "italic", color: "#C4893A", fontWeight: 400 },
  },

  leftSub: {
    fontSize: "0.88rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: 1.65,
    maxWidth: 380,
  },

  benefits: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
    mt: "0.5rem",
  },

  benefit: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.65rem",
    padding: "0.55rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    "&:first-of-type": { borderTop: "1px solid rgba(255,255,255,0.07)" },
    "&:last-of-type": { borderBottom: "none" },
  },

  benefitCheck: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    flexShrink: 0,
    background: "rgba(196,137,58,0.18)",
    border: "1px solid rgba(196,137,58,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "0.1rem",
  },

  benefitTitle: {
    fontSize: "0.84rem",
    fontWeight: 500,
    color: "rgba(255,255,255,0.9)",
    mb: "0.1rem",
  },

  benefitSub: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.45,
  },

  // ── Right panel ───────────────────────────────────────────────────────────
  formWrap: {
    width: "100%",
    maxWidth: 420,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    boxSizing: "border-box",
    position: "relative",
    zIndex: 2,
    bgcolor: "#FFFFFF",
    p: { xs: "1.25rem 1rem", sm: "1.5rem 1.5rem", md: "1.75rem 1.75rem" },
    borderRadius: "20px",
    border: "1px solid #EAE5DD",
    boxShadow: "0 8px 40px rgba(43, 35, 24, 0.07)",
  },

  formHead: { display: "flex", flexDirection: "column", gap: "0.3rem" },

  progress: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "0.25rem",
  },

  progressText: {
    fontSize: "0.68rem",
    color: "#C4893A",
    fontWeight: 500,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },

  progressDots: { display: "flex", gap: "0.3rem" },

  progressDot: {
    width: 20,
    height: 3,
    borderRadius: "999px",
    bgcolor: "#E4E4E7",
  },

  progressDotActive: { bgcolor: "#C4893A" },

  formLabel: {
    fontSize: "0.72rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#C4893A",
  },

  formTitle: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: { xs: "1.65rem", sm: "1.95rem" },
    fontWeight: 600,
    color: "#18181B",
    letterSpacing: "-0.025em",
    lineHeight: 1.15,
  },

  formSub: { fontSize: "0.88rem", color: "#71717A", lineHeight: 1.55 },

  rule: {
    width: 28,
    height: "2px",
    background: "#C4893A",
    margin: "0.2rem 0 0.1rem",
    borderRadius: "1px",
  },

  // ── Toggle ────────────────────────────────────────────────────────────────
  toggle: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "4px",
    background: "#F4F4F5",
    borderRadius: "10px",
    padding: "4px",
    border: "1px solid #E4E4E7",
  },

  toggleBtn: {
    padding: "0.55rem 0.6rem",
    border: "1px solid transparent",
    borderRadius: "7px",
    fontSize: "0.82rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    cursor: "pointer",
    color: "#71717A",
    background: "transparent",
    textTransform: "none",
    transition:
      "background-color 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease, transform 180ms ease",
    "&:hover": { background: "rgba(255,255,255,0.7)", color: "#18181B" },
  },

  toggleBtnActive: {
    background: "rgba(196,137,58,0.12)",
    borderColor: "rgba(196,137,58,0.45)",
    color: "#9A6420",
    boxShadow: "0 2px 6px rgba(196,137,58,0.16)",
    transform: "translateY(-1px)",
    "&:hover": { background: "rgba(196,137,58,0.16)" },
  },

  // ── Form ──────────────────────────────────────────────────────────────────
  form: { display: "flex", flexDirection: "column", gap: "0.75rem" },

  mobileWrap: { display: "flex", gap: "0.4rem", alignItems: "flex-start" },

  mobilePrefix: {
    height: 40,
    minWidth: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #D4D4D8",
    borderRadius: "8px",
    background: "#F4F4F5",
    fontSize: "0.88rem",
    color: "#18181B",
    fontWeight: 500,
    flexShrink: 0,
    gap: "0.25rem",
  },

  // ── OTP ───────────────────────────────────────────────────────────────────
  otpRow: {
    display: "flex",
    gap: { xs: "0.4rem", sm: "0.55rem" },
    justifyContent: "center",
    margin: "0.65rem 0",
  },

  otpBox: {
    width: { xs: 44, sm: 48 },
    height: 50,
    border: "1.5px solid #D4D4D8",
    borderRadius: "8px",
    background: "#FFFFFF",
    fontSize: "1.3rem",
    fontWeight: 700,
    textAlign: "center",
    color: "#18181B",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
    fontFamily: "inherit",
    "&:focus": {
      borderColor: "#C4893A",
      boxShadow: "0 0 0 3px rgba(196,137,58,0.18)",
    },
  },

  infoBox: {
    background: "#FAF7F2",
    border: "1px solid #EBE4D8",
    borderRadius: "8px",
    padding: "0.85rem 1rem",
    fontSize: "0.82rem",
    color: "#44403C",
    lineHeight: 1.55,
  },

  resendRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "0.8rem",
    color: "#71717A",
  },

  resendBtn: {
    fontSize: "0.8rem",
    color: "#C4893A",
    fontWeight: 600,
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    "&:disabled": { opacity: 0.45, cursor: "not-allowed" },
    "&:not(:disabled):hover": { textDecoration: "underline" },
  },

  // ── Submit button ─────────────────────────────────────────────────────────
  submit: {
    width: "100%",
    minHeight: 42,
    padding: "0.65rem 1rem",
    background: "#C4893A",
    color: "#FFFFFF",
    fontSize: "0.88rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    textTransform: "none",
    borderRadius: "8px",
    marginTop: "0.25rem",
    border: "none",
    boxShadow: "0 2px 8px rgba(196,137,58,0.22)",
    transition: "all 0.18s ease",
    "&:hover:not(:disabled)": {
      background: "#B37930",
      boxShadow: "0 4px 12px rgba(196,137,58,0.32)",
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
    borderRadius: "8px",
    padding: "0.7rem 0.9rem",
    fontSize: "0.82rem",
    color: "#B91C1C",
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footerText: {
    textAlign: "center",
    fontSize: "0.76rem",
    color: "#71717A",
    mt: "0.25rem",
    lineHeight: 1.5,
  },

  footerLink: {
    color: "#C4893A",
    fontWeight: 600,
    textDecoration: "none",
    marginLeft: "4px",
    "&:hover": { textDecoration: "underline" },
  },

  roleHint: {
    fontSize: "0.78rem",
    color: "#71717A",
    lineHeight: 1.5,
    px: "0.15rem",
  },
};
