import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { styles } from "./StatCard.styles";

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  accent: string;
  icon: React.ReactNode;
  loading: boolean;
}

export function StatCard({
  label,
  value,
  sub,
  accent,
  icon,
  loading,
}: StatCardProps) {
  return (
    <Box sx={styles.cardWrapper}>
      <Box sx={styles.accentBar(accent)} />

      <Box sx={styles.iconContainer(accent)}>{icon}</Box>

      <Typography sx={styles.label}>{label}</Typography>

      {loading ? (
        <Skeleton variant="text" width={80} height={34} />
      ) : (
        <Typography sx={styles.value}>{value}</Typography>
      )}

      <Typography sx={styles.subText}>{sub}</Typography>
    </Box>
  );
}
