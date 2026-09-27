"use client";

import { Box, Skeleton } from "@mui/material";
import { detailStyles as s } from "./ServiceDetail.styles";

export function ServiceDetailSkeleton() {
  return (
    <Box sx={s.root}>
      {/* ── Back / Breadcrumb Skeleton ─────────────────────────────────── */}
      <Box sx={s.backBar}>
        <Skeleton width={60} height={16} animation="wave" />
        <Box component="span" sx={s.backSep}>
          ›
        </Box>
        <Skeleton width={160} height={16} animation="wave" />
      </Box>

      {/* ── Content Wrapper ──────────────────────────────────────────────── */}
      <Box sx={s.contentWrap}>
        {/* Left Column Skeleton */}
        <Box sx={s.leftCol}>
          {/* Media Carousel Skeleton */}
          <Box
            sx={{
              position: "relative",
              height: { xs: 240, md: 380 },
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
              animation="wave"
              sx={{ bgcolor: "#F0ECE6" }}
            />
            {/* Overlay Skeleton */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                p: { xs: "1.25rem", md: "2rem" },
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <Box sx={{ display: "flex", gap: "0.5rem" }}>
                <Skeleton
                  variant="rounded"
                  width={90}
                  height={22}
                  animation="wave"
                  sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
                />
                <Skeleton
                  variant="rounded"
                  width={120}
                  height={22}
                  animation="wave"
                  sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
                />
              </Box>
              <Skeleton
                width="60%"
                height={32}
                animation="wave"
                sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
              />
              <Skeleton
                width="40%"
                height={20}
                animation="wave"
                sx={{ bgcolor: "rgba(255,255,255,0.2)" }}
              />
            </Box>
          </Box>

          {/* Quick Info Grid Skeleton */}
          <Box sx={s.infoGrid}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Box key={item} sx={s.infoItem}>
                <Skeleton width="60%" height={12} animation="wave" />
                <Skeleton
                  width="80%"
                  height={24}
                  animation="wave"
                  sx={{ my: "0.2rem" }}
                />
                <Skeleton width={50} height={10} animation="wave" />
              </Box>
            ))}
          </Box>

          {/* Description Card Skeleton */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Skeleton width={140} height={20} animation="wave" />
            </Box>
            <Box sx={s.sectionBody}>
              <Skeleton width="100%" height={16} animation="wave" />
              <Skeleton
                width="92%"
                height={16}
                animation="wave"
                sx={{ mt: 1 }}
              />
              <Skeleton
                width="85%"
                height={16}
                animation="wave"
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          {/* Travel Charges Skeleton */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Skeleton width={120} height={20} animation="wave" />
            </Box>
            <Box sx={s.sectionBody}>
              <Skeleton width="75%" height={16} animation="wave" />
            </Box>
          </Box>

          {/* Tech Specs Skeleton */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Skeleton width={160} height={20} animation="wave" />
            </Box>
            <Box sx={s.sectionBody}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <Box
                    key={i}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Skeleton width="40%" height={14} animation="wave" />
                    <Skeleton width="45%" height={14} animation="wave" />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Column Skeleton (Booking Card) */}
        <Box
          sx={{
            bgcolor: "#FDFCFB",
            border: "1px solid #E8E4DE",
            borderRadius: "12px",
            p: { xs: "1.25rem", md: "1.5rem" },
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {/* Price Header Skeleton */}
          <Box sx={{ pb: "1rem", borderBottom: "1px solid #F0EDE8" }}>
            <Skeleton width="40%" height={14} animation="wave" />
            <Skeleton
              width="70%"
              height={32}
              animation="wave"
              sx={{ my: "0.2rem" }}
            />
            <Skeleton width="50%" height={12} animation="wave" />
          </Box>

          {/* Form Control Placeholders */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Box>
              <Skeleton
                width={80}
                height={14}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height={42}
                animation="wave"
              />
            </Box>
            <Box>
              <Skeleton
                width={70}
                height={14}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height={42}
                animation="wave"
              />
            </Box>
            <Box>
              <Skeleton
                width={90}
                height={14}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height={42}
                animation="wave"
              />
            </Box>
          </Box>

          {/* Breakdown Skeleton */}
          <Box
            sx={{
              bgcolor: "#F9F7F4",
              p: "0.85rem",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Skeleton width="50%" height={14} animation="wave" />
              <Skeleton width="30%" height={14} animation="wave" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Skeleton width="40%" height={14} animation="wave" />
              <Skeleton width="25%" height={14} animation="wave" />
            </Box>
          </Box>

          {/* CTA Button Skeleton */}
          <Skeleton
            variant="rounded"
            width="100%"
            height={48}
            animation="wave"
          />
        </Box>
      </Box>
    </Box>
  );
}
