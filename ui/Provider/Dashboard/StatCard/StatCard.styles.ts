import { SxProps, Theme } from "@mui/material";

type StatCardStyles = {
  cardWrapper: SxProps<Theme>;
  topRow: SxProps<Theme>;
  iconContainer: (accent: string) => SxProps<Theme>;
  badge: (accent: string) => SxProps<Theme>;
  label: SxProps<Theme>;
  value: SxProps<Theme>;
  subText: SxProps<Theme>;
};

export const styles: StatCardStyles = {
  cardWrapper: {
    position: "relative",
    bgcolor: "#FFFFFF",
    p: { xs: "1.1rem", sm: "1.35rem" },
    borderRadius: "14px",
    border: "1px solid #EBE7E0",
    boxShadow: "0 2px 8px rgba(24, 24, 27, 0.03)",
    transition:
      "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 6px 18px rgba(24, 24, 27, 0.06)",
      borderColor: "#D9D4CD",
    },
  },
  topRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: "0.9rem",
  },
  iconContainer: (accent) => ({
    width: 36,
    height: 36,
    borderRadius: "10px",
    bgcolor: `${accent}14`,
    border: `1px solid ${accent}25`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  badge: (accent) => ({
    fontSize: "0.68rem",
    fontWeight: 600,
    color: accent,
    bgcolor: `${accent}10`,
    px: "0.55rem",
    py: "0.2rem",
    borderRadius: "20px",
    border: `1px solid ${accent}25`,
    letterSpacing: "0.02em",
  }),
  label: {
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#78716C",
    mb: "0.35rem",
  },
  value: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: { xs: "1.65rem", sm: "1.9rem" },
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1.1,
    color: "#18181B",
    mb: "0.35rem",
  },
  subText: {
    fontSize: "0.74rem",
    color: "#A8A29E",
    fontWeight: 500,
  },
};
