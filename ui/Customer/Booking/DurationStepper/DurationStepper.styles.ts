export const styles = {
  durationRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },

  durationBtn: (active: boolean) => ({
    width: 44,
    height: 44,
    borderRadius: "8px",
    border: "1px solid",
    borderColor: active ? "#18181B" : "#E8E4DE",
    bgcolor: active ? "#18181B" : "#FDFCFB",
    color: active ? "#fff" : "#7A756F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.82rem",
    fontWeight: 500,
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.15s",
    flexShrink: 0,
    "&:hover": active ? {} : { borderColor: "#C4893A", color: "#C4893A" },
  }),

  durationDisplay: {
    flex: 1,
    bgcolor: "#F5F3EF",
    borderRadius: "8px",
    border: "1px solid #E8E4DE",
    px: "1rem",
    py: "0.75rem",
    display: "flex",
    alignItems: "baseline",
    gap: "0.4rem",
  },

  durationVal: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#18181B",
    letterSpacing: "-0.03em",
    lineHeight: 1,
  },

  durationUnit: { fontSize: "0.82rem", color: "#7A756F" },
};
