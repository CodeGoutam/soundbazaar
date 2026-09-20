import { SxProps, Theme } from "@mui/material";

type StatCardStyles = {
  cardWrapper: SxProps<Theme>;
  label: SxProps<Theme>;
  value: SxProps<Theme>;
  subText: SxProps<Theme>;
  accentBar: (accent: string) => SxProps<Theme>;
  iconContainer: (accent: string) => SxProps<Theme>;
};

export const styles: StatCardStyles = {
  cardWrapper: {
    position: "relative",
    bgcolor: "#FDFCFB",
    p: "1.35rem",
    overflow: "hidden",
    transition: "bgcolor 0.2s",
    "&:hover": { bgcolor: "#F9F7F4" },
  },
  accentBar: (accent) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: 3,
    height: "100%",
    bgcolor: accent,
  }),
  iconContainer: (accent) => ({
    position: "absolute",
    top: "1.1rem",
    right: "1.1rem",
    width: 30,
    height: 30,
    borderRadius: "6px",
    bgcolor: `${accent}18`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  label: {
    fontSize: "0.64rem",
    fontWeight: 500,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "#B0AAA3",
    display: "block",
    mb: "0.5rem",
  },
  value: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "1.85rem",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    lineHeight: 1,
    color: "#18181B",
    mb: "0.3rem",
  },
  subText: {
    fontSize: "0.7rem",
    color: "#B0AAA3",
  },
};
