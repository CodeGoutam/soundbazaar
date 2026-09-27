"use client";

import { Box, Skeleton } from "@mui/material";
import { bookingStyles as s } from "./Booking.styles";

export function BookingPageSkeleton() {
  return (
    <Box sx={s.root}>
      {/* Back bar skeleton */}
      <Box sx={s.backBar}>
        <Skeleton width={120} height={16} animation="wave" />
        <Box component="span" sx={s.backSep}>
          ›
        </Box>
        <Skeleton width={50} height={16} animation="wave" />
      </Box>

      <Box sx={s.contentWrap}>
        {/* Left Column - Form Skeleton */}
        <Box sx={s.formCol}>
          <Box>
            <Skeleton width={140} height={14} animation="wave" sx={{ mb: 1 }} />
            <Skeleton width="60%" height={32} animation="wave" />
          </Box>

          {/* Section 1: Event Details */}
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
            <Skeleton width="40%" height={20} animation="wave" />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: "1rem",
              }}
            >
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
                  height={48}
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
                  height={48}
                  animation="wave"
                />
              </Box>
            </Box>

            <Box>
              <Skeleton
                width={110}
                height={14}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Box sx={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton
                    key={i}
                    variant="rounded"
                    width={90}
                    height={32}
                    animation="wave"
                  />
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "2fr 1fr" },
                gap: "1rem",
              }}
            >
              <Box>
                <Skeleton
                  width={100}
                  height={14}
                  animation="wave"
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height={48}
                  animation="wave"
                />
              </Box>
              <Box>
                <Skeleton
                  width={60}
                  height={14}
                  animation="wave"
                  sx={{ mb: 1 }}
                />
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height={48}
                  animation="wave"
                />
              </Box>
            </Box>

            <Box>
              <Skeleton
                width={130}
                height={14}
                animation="wave"
                sx={{ mb: 1 }}
              />
              <Skeleton
                variant="rounded"
                width="100%"
                height={80}
                animation="wave"
              />
            </Box>
          </Box>

          {/* Section 2: Duration Stepper */}
          <Box
            sx={{
              bgcolor: "#FDFCFB",
              border: "1px solid #E8E4DE",
              borderRadius: "12px",
              p: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            <Skeleton width="45%" height={20} animation="wave" sx={{ mb: 2 }} />
            <Skeleton
              variant="rounded"
              width="100%"
              height={60}
              animation="wave"
            />
          </Box>
        </Box>

        {/* Right Column - Summary Card Skeleton */}
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
          <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Skeleton
              variant="rounded"
              width={64}
              height={64}
              animation="wave"
            />
            <Box sx={{ flex: 1 }}>
              <Skeleton width="80%" height={18} animation="wave" />
              <Skeleton
                width="50%"
                height={14}
                animation="wave"
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <Skeleton width="100%" height={1} animation={false} />

          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {[1, 2, 3, 4].map((i) => (
              <Box
                key={i}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Skeleton width="45%" height={14} animation="wave" />
                <Skeleton width="35%" height={14} animation="wave" />
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              bgcolor: "rgba(196, 137, 58, 0.06)",
              p: "1rem",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Skeleton width="40%" height={16} animation="wave" />
            <Skeleton width="35%" height={24} animation="wave" />
          </Box>

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
