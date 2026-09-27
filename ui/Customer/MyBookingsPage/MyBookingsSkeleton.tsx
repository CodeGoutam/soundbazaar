"use client";

import { Box, Skeleton } from "@mui/material";
import { bookingsStyles as s } from "./MyBookings.styles";

export function MyBookingsSkeleton() {
  return (
    <Box sx={s.root}>
      {/* Banner Skeleton */}
      <Box sx={s.banner}>
        <Skeleton width={140} height={14} animation="wave" sx={{ mb: 1 }} />
        <Skeleton width="40%" height={36} animation="wave" />
      </Box>

      <Box sx={s.contentWrap}>
        {/* Filter Tabs Skeleton */}
        <Box sx={s.filterTabs}>
          {[1, 2, 3, 4, 5].map((tab) => (
            <Skeleton
              key={tab}
              variant="rounded"
              width={100}
              height={36}
              animation="wave"
              sx={{ borderRadius: "20px" }}
            />
          ))}
        </Box>

        {/* Booking Cards Grid Skeleton */}
        <Box sx={s.bookingGrid}>
          {[1, 2, 3].map((card) => (
            <Box key={card} sx={s.bookingCard}>
              {/* Main Section */}
              <Box sx={s.cardMain}>
                <Box sx={s.cardHeader}>
                  <Box>
                    <Skeleton width={110} height={14} animation="wave" />
                    <Skeleton
                      width={200}
                      height={22}
                      animation="wave"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                  <Skeleton
                    variant="rounded"
                    width={85}
                    height={24}
                    animation="wave"
                  />
                </Box>

                <Box sx={s.infoGrid}>
                  {[1, 2, 3].map((info) => (
                    <Box key={info} sx={s.infoItem}>
                      <Skeleton
                        variant="circular"
                        width={18}
                        height={18}
                        animation="wave"
                      />
                      <Box sx={{ width: "70%" }}>
                        <Skeleton width="50%" height={10} animation="wave" />
                        <Skeleton
                          width="90%"
                          height={16}
                          animation="wave"
                          sx={{ mt: 0.5 }}
                        />
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box sx={s.providerMini}>
                  <Skeleton
                    variant="circular"
                    width={32}
                    height={32}
                    animation="wave"
                  />
                  <Box sx={{ width: "50%" }}>
                    <Skeleton width="40%" height={10} animation="wave" />
                    <Skeleton
                      width="80%"
                      height={16}
                      animation="wave"
                      sx={{ mt: 0.5 }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Side Section */}
              <Box sx={s.cardSide}>
                <Skeleton width={60} height={12} animation="wave" />
                <Skeleton
                  width={100}
                  height={26}
                  animation="wave"
                  sx={{ my: 0.5 }}
                />
                <Skeleton
                  variant="rounded"
                  width="100%"
                  height={38}
                  animation="wave"
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
