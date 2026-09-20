"use client";

import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { styles } from "./AuthLayout.styles";
import Link from "next/link";
import { useParams } from "next/navigation";
import LogoIcon from "../Icons/LogoIcon";

interface AuthLayoutProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export default function AuthLayout({
  leftContent,
  rightContent,
}: AuthLayoutProps) {
  const { locale } = useParams() as { locale: string };

  return (
    <Box sx={styles.root}>
      {/* LEFT */}
      <Box sx={styles.left}>
        <Box sx={styles.leftGlow} />
        <Link
          href={`/${locale}`}
          style={styles.logoLink as React.CSSProperties}
        >
          <Box sx={styles.logo}>
            <Box sx={styles.logoMark}>
              <Box component="svg" viewBox="0 0 16 16" sx={styles.logoSvg}>
                <LogoIcon fill="white" />
              </Box>
            </Box>

            <Typography sx={styles.logoText}>
              Sound<span>Bazaar</span>
            </Typography>
          </Box>
        </Link>
        <Box>{leftContent}</Box>
      </Box>
      {/* RIGHT */}
      <Box sx={styles.right}>{rightContent}</Box>
    </Box>
  );
}
