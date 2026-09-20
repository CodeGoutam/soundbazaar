"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button, IconButton, Tooltip } from "@mui/material";
import {
  Event,
  LocationOn,
  AccessTime,
  BookmarkBorder,
  Search,
  ChevronRight,
} from "@mui/icons-material";
import { bookingsStyles as s } from "./MyBookings.styles";
import { DUMMY_BOOKINGS, BookingStatus } from "./dummyBookings";
import { formateDate } from "@/lib/utils";

// ─── Main page ────────────────────────────────────────────────────────────────
export default function MyBookingsPage() {
  const router = useRouter();
  const { locale } = useParams() as { locale: string };

  const [activeTab, setActiveTab] = useState<BookingStatus | "all">("all");

  const filteredBookings = DUMMY_BOOKINGS.filter((b) =>
    activeTab === "all" ? true : b.status === activeTab,
  );

  const TABS: { label: string; value: BookingStatus | "all" }[] = [
    { label: "All Bookings", value: "all" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" },
  ];

  const handleViewDetails = (bookingId: string, status: string) => {
    router.push(
      `/${locale}/bookings/confirmation?bookingId=${bookingId}&status=${status}`,
    );
  };

  return (
    <Box sx={s.root}>
      {/* ── Header Banner ─────────────────────────────────────────────────── */}
      <Box sx={s.banner}>
        <Box sx={s.bannerGrid} />
        <Box sx={s.bannerGlow} />

        <Typography sx={s.bannerEyebrow}>Customer Dashboard</Typography>

        <Typography sx={s.bannerTitle}>
          Your{" "}
          <Box component="em" sx={s.bannerTitleAccent}>
            Bookings
          </Box>
        </Typography>
      </Box>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <Box sx={s.contentWrap}>
        {/* Filters */}
        <Box sx={s.filterTabs}>
          {TABS.map((tab) => (
            <Box
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              sx={s.filterTab(activeTab === tab.value)}
            >
              {tab.label}
            </Box>
          ))}
        </Box>

        {/* Booking List */}
        <Box sx={s.bookingGrid}>
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <Box key={booking.booking_id} sx={s.bookingCard}>
                {/* Main section */}
                <Box sx={s.cardMain}>
                  <Box sx={s.cardHeader}>
                    <Box>
                      <Typography sx={s.bookingId}>
                        {booking.booking_id}
                      </Typography>
                      <Typography sx={s.serviceName}>
                        {booking.service_name}
                      </Typography>
                    </Box>
                    <Box sx={s.statusBadge(booking.status)}>
                      {booking.status}
                    </Box>
                  </Box>

                  <Box sx={s.infoGrid}>
                    <Box sx={s.infoItem}>
                      <Event sx={s.infoIcon} />
                      <Box>
                        <Typography sx={s.infoLabel}>Date</Typography>
                        <Typography sx={s.infoValue}>
                          {formateDate(booking.event_date)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={s.infoItem}>
                      <AccessTime sx={s.infoIcon} />
                      <Box>
                        <Typography sx={s.infoLabel}>Time</Typography>
                        <Typography sx={s.infoValue}>
                          {booking.event_start_time} · {booking.duration_hours}h
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={s.infoItem}>
                      <LocationOn sx={s.infoIcon} />
                      <Box>
                        <Typography sx={s.infoLabel}>Venue</Typography>
                        <Typography sx={s.infoValue} noWrap>
                          {booking.event_city}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={s.providerMini}>
                    <Box sx={s.providerAvatar}>
                      {booking.provider.business_name.charAt(0)}
                    </Box>
                    <Box>
                      <Typography sx={s.infoLabel}>Provider</Typography>
                      <Typography sx={s.providerName}>
                        {booking.provider.business_name}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Side section */}
                <Box sx={s.cardSide}>
                  <Box sx={s.priceBox}>
                    <Typography sx={s.priceLabel}>Total Amount</Typography>
                    <Typography sx={s.priceValue}>
                      ₹{booking.subtotal.toLocaleString("en-IN")}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    endIcon={<ChevronRight />}
                    onClick={() =>
                      handleViewDetails(booking.booking_id, booking.status)
                    }
                    sx={s.viewDetailsBtn}
                    disableElevation
                  >
                    View Details
                  </Button>
                </Box>
              </Box>
            ))
          ) : (
            <Box sx={s.emptyState}>
              <BookmarkBorder sx={s.emptyIcon} />
              <Typography sx={s.emptyTitle}>No bookings found</Typography>
              <Typography sx={s.emptySub}>
                You haven't made any bookings in this category yet.
              </Typography>
              <Button
                startIcon={<Search />}
                // onClick={() => router.push(`/${locale}/search`)}
                sx={s.browseBtn}
                variant="contained"
                disableElevation
              >
                Browse Services
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
