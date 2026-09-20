export const styles = {
  imageUpload: {
    width: "100%",
    height: 140,
    border: "2px dashed #E8E4DE",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    cursor: "pointer",
    transition: "border-color 0.18s, bgcolor 0.18s",
    bgcolor: "#F5F3EF",
    "&:hover": { borderColor: "#C4893A", bgcolor: "rgba(196,137,58,0.04)" },
    position: "relative",
    overflow: "hidden",
  },

  imageUploadText: {
    fontSize: "0.78rem",
    color: "#B0AAA3",
    textAlign: "center",
  },

  imageUploadHint: {
    fontSize: "0.68rem",
    color: "#B0AAA3",
  },

  imagePreview: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    bgcolor: "rgba(0,0,0,0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0,
    transition: "opacity 0.2s",
    "&:hover": { opacity: 1 },
  },
};
