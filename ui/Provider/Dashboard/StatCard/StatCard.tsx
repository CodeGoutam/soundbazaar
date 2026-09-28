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
  badge?: string;
}

export function StatCard({
  label,
  value,
  sub,
  accent,
  icon,
  loading,
  badge,
}: StatCardProps) {
  return (
    <Box sx={styles.cardWrapper}>
      <Box sx={styles.topRow}>
        <Box sx={styles.iconContainer(accent)}>{icon}</Box>
        {badge && <Typography sx={styles.badge(accent)}>{badge}</Typography>}
      </Box>

      <Box>
        <Typography sx={styles.label}>{label}</Typography>

        {loading ? (
          <Skeleton variant="text" width={100} height={40} />
        ) : (
          <Typography sx={styles.value}>{value}</Typography>
        )}

        <Typography sx={styles.subText}>{sub}</Typography>
      </Box>
    </Box>
  );
}
