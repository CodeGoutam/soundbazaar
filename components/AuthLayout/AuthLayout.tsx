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
      {/* ── LEFT COLUMN: Brand Experience (Desktop Only) ──────────────── */}
      <Box sx={styles.leftColumn}>
        <Box sx={styles.leftGlow} />
        <Box sx={styles.brandArtwork} aria-hidden="true">
          <Box sx={styles.brandRing} />
          <Box sx={styles.brandRingInner} />
          <Box sx={styles.equalizer}>
            {[28, 52, 38, 70, 46, 82, 58, 34, 64, 44, 76, 30].map(
              (height, index) => (
                <Box key={index} component="span" sx={{ height }} />
              ),
            )}
          </Box>
        </Box>

        {/* Brand Logo */}
        <Link
          href={`/${locale}`}
          style={{ textDecoration: "none", width: "fit-content" }}
        >
          <Box sx={styles.logo}>
            <Box sx={styles.logoMark}>
              <LogoIcon fill="white" />
            </Box>
            <Typography sx={styles.logoText}>
              Sound<span>Bazaar</span>
            </Typography>
          </Box>
        </Link>

        {/* Left Copy & Benefits */}
        <Box sx={styles.leftBodyContainer}>{leftContent}</Box>

        {/* Left Footer Trust Badge */}
        <Box sx={styles.leftFooter}>
          <Typography sx={styles.leftFooterText}>
            © {new Date().getFullYear()} SoundBazaar · Verified Sound Systems &
            Engineers
          </Typography>
        </Box>
      </Box>

      {/* ── RIGHT COLUMN: Clean, High-Usability Auth Pane ────────────── */}
      <Box sx={styles.rightColumn}>
        {/* Mobile background decorative sound aesthetics */}
        <Box sx={styles.mobileBgDecor} aria-hidden="true">
          <Box sx={styles.mobileSoundRing1} />
          <Box sx={styles.mobileSoundRing2} />
          <Box sx={styles.mobileEqualizer}>
            {[18, 30, 22, 38, 26, 44, 32, 20].map((h, i) => (
              <Box key={i} component="span" sx={{ height: h }} />
            ))}
          </Box>
        </Box>

        {/* Right Header: Mobile Brand Logo & Desktop Back Link */}
        <Box sx={styles.rightHeader}>
          {/* Mobile Logo */}
          <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
            <Box sx={styles.mobileLogoWrap}>
              <Box sx={styles.mobileLogoMark}>
                <LogoIcon fill="white" />
              </Box>
              <Typography sx={styles.mobileLogoText}>
                Sound<span>Bazaar</span>
              </Typography>
            </Box>
          </Link>

          {/* Back to Explore */}
          <Link
            href={`/${locale}/search`}
            style={{ textDecoration: "none", marginLeft: "auto" }}
          >
            <Typography sx={styles.exploreLink}>← Back to Explore</Typography>
          </Link>
        </Box>

        {/* Centered Auth Content */}
        <Box sx={styles.rightBody}>{rightContent}</Box>

      </Box>
    </Box>
  );
}
