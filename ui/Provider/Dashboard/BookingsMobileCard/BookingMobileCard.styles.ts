import { SxProps, Theme } from "@mui/material";

type MobileCardStyles = {
  container: SxProps<Theme>;
  headerBox: SxProps<Theme>;
  eventType: SxProps<Theme>;
  eventMeta: SxProps<Theme>;
  location: SxProps<Theme>;
  statusChip: (cfg: any) => SxProps<Theme>;
  divider: SxProps<Theme>;
  footerBox: SxProps<Theme>;
  statsGroup: SxProps<Theme>;
  statLabel: SxProps<Theme>;
  totalValue: SxProps<Theme>;
  earnValue: SxProps<Theme>;
  callButton: SxProps<Theme>;
  callDoneBox: SxProps<Theme>;
  callDoneText: SxProps<Theme>;
};

export const styles: MobileCardStyles = {
  container: {
    border: "1px solid #E8E4DE",
    borderRadius: "10px",
    p: "1.1rem",
    mb: "0.75rem",
    bgcolor: "#FDFCFB",
  },
  headerBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "0.5rem",
    mb: "0.75rem",
  },
  eventType: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#18181B",
    fontFamily: "Fraunces, Georgia, serif",
  },
  eventMeta: {
    fontSize: "0.75rem",
    color: "#7A756F",
    mt: "0.1rem",
  },
  location: {
    fontSize: "0.72rem",
    color: "#B0AAA3",
    mt: "0.05rem",
  },
  statusChip: (cfg) => ({
    bgcolor: cfg?.bg,
    color: cfg?.color,
    fontWeight: 600,
    fontSize: "0.66rem",
    height: 22,
    borderRadius: "20px",
    flexShrink: 0,
  }),
  divider: {
    borderColor: "#F0EDE8",
    mb: "0.75rem",
  },
  footerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.5rem",
  },
  statsGroup: {
    display: "flex",
    gap: "1.5rem",
  },
  statLabel: {
    fontSize: "0.62rem",
    color: "#B0AAA3",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    mb: "0.1rem",
  },
  totalValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#18181B",
  },
  earnValue: {
    fontFamily: "Fraunces, Georgia, serif",
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#16a34a",
  },
  callButton: {
    fontSize: "0.71rem",
    fontWeight: 500,
    color: "#C4893A",
    border: "1px solid rgba(196,137,58,0.35)",
    borderRadius: "6px",
    px: "0.7rem",
    py: "0.3rem",
    textTransform: "none",
    bgcolor: "rgba(196,137,58,0.06)",
    flexShrink: 0,
    "&:hover": { bgcolor: "rgba(196,137,58,0.12)" },
  },
  callDoneBox: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  callDoneText: {
    fontSize: "0.71rem",
    color: "#16a34a",
    fontWeight: 500,
  },
};
