export const styles = {
  reviewCard: {
    pb: "1.1rem",
    borderBottom: "1px solid #F0EDE8",
    "&:last-child": { borderBottom: "none", pb: 0 },
  },

  reviewHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    mb: "0.5rem",
    gap: "0.5rem",
  },

  reviewAvatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    bgcolor: "rgba(196,137,58,0.12)",
    border: "1.5px solid rgba(196,137,58,0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#C4893A",
    flexShrink: 0,
  },

  reviewName: { fontSize: "0.85rem", fontWeight: 600, color: "#18181B" },
  reviewMeta: { fontSize: "0.72rem", color: "#B0AAA3" },
  reviewStars: { display: "flex", gap: "1px" },
  reviewText: { fontSize: "0.83rem", color: "#3F3C38", lineHeight: 1.75 },
};
