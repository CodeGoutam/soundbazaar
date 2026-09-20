"use client";

import { useRouter, useParams } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import {
  ServiceDetail,
  DUMMY_SERVICE_DETAIL,
} from "../../../types/ServiceDetail.types";
import { detailStyles as s } from "./ServiceDetail.styles";
import { ILLUSTRATIONS } from "../SearchServices/SearchIllstrations";
import StarIcon from "@/components/Icons/StarIcon";
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { BookingCard } from "./BookingCard/BookingCard";
import { MediaCarousel } from "@/components/Media/MediaCarousel";

const TYPE_LABELS: Record<string, string> = {
  sound: "Sound System",
  dj: "DJ Setup",
  lighting: "Lighting",
  combo: "Combo Pack",
};

const ALL_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const HeaderOverlay = ({ service }: { service: ServiceDetail }) => (
  <Box sx={s.overlayContainer}>
    <Box sx={s.overlayBadgeRow}>
      <Box sx={s.overlayTypeBadge}>{TYPE_LABELS[service.equipment_type]}</Box>
      <Box sx={s.overlayCityBadge}>
        📍 {service.provider.city}, {service.provider.area}
      </Box>
    </Box>

    <Typography sx={s.overlayTitle}>{service.service_name}</Typography>

    <Box sx={s.overlayProviderRow}>
      <Typography sx={s.overlayProviderName}>
        by {service.provider.business_name}
      </Typography>
      <Box sx={s.overlayRatingRow}>
        <Typography sx={s.overlayRatingStar}>★</Typography>
        <Typography sx={s.overlayRatingVal}>
          {service.average_rating.toFixed(1)}
        </Typography>
        <Typography sx={s.overlayRatingCount}>
          ({service.total_bookings} bookings)
        </Typography>
      </Box>
    </Box>

    <Box sx={s.overlayEventTags}>
      {service.event_types.map((t) => (
        <Box key={t} sx={s.overlayEventTag}>
          {t}
        </Box>
      ))}
    </Box>
  </Box>
);

const ProviderDetails = ({ service }: { service: ServiceDetail }) => (
  <Box sx={s.sectionCard}>
    <Box sx={s.sectionHead}>
      <Typography sx={s.sectionTitle}>About the provider</Typography>
    </Box>
    <Box sx={s.sectionBody}>
      <Box sx={s.providerCard}>
        <Box sx={s.providerAvatar}>
          {service.provider.business_name.charAt(0)}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography sx={{ fontSize: "0.95rem", fontWeight: 700, color: "#18181B" }}>
            {service.provider.business_name}
          </Typography>
          <Typography sx={{ fontSize: "0.78rem", color: "#7A756F" }}>
            {service.provider.owner_name} · {service.provider.city}
          </Typography>
          <Typography sx={{ fontSize: "0.72rem", color: "#B0AAA3", mt: "0.1rem" }}>
            Member since {service.provider.member_since}
          </Typography>
        </Box>
      </Box>
      <Box sx={s.providerStatGrid}>
        <Box sx={s.providerStat}>
          <Typography sx={s.providerStatVal}>{service.provider.average_rating.toFixed(1)} ★</Typography>
          <Typography sx={s.providerStatLbl}>Avg rating</Typography>
        </Box>
        <Box sx={s.providerStat}>
          <Typography sx={s.providerStatVal}>{service.provider.total_bookings}</Typography>
          <Typography sx={s.providerStatLbl}>Total bookings</Typography>
        </Box>
        <Box sx={s.providerStat}>
          <Typography sx={s.providerStatVal}>{service.provider.total_services}</Typography>
          <Typography sx={s.providerStatLbl}>Services listed</Typography>
        </Box>
        <Box sx={s.providerStat}>
          <Typography sx={s.providerStatVal}>{service.advance_notice_days}d</Typography>
          <Typography sx={s.providerStatLbl}>Advance notice</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

const ReviewsSection = ({ service }: { service: ServiceDetail }) => (
  <Box sx={s.sectionCard}>
    <Box sx={s.sectionHead}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={s.sectionTitle}>Reviews</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <StarIcon size={13} fill="#C4893A" />
          <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "#18181B" }}>
            {service.average_rating.toFixed(1)}
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", color: "#B0AAA3" }}>
            ({service.reviews.length})
          </Typography>
        </Box>
      </Box>
    </Box>
    <Box
      sx={{
        px: "1.25rem",
        py: "1.1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
      }}
    >
      {service.reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Box>
  </Box>
);

// ─── Main page ─────────────────────────────────────────────────────────────────
export default function ServiceDetailPage() {
  const router = useRouter();
  const { locale } = useParams() as { locale: string };

  // TODO: replace with useQuery → GET /services/:serviceId
  const service: ServiceDetail = DUMMY_SERVICE_DETAIL;
  const loading = false;

  const goBack = () => {
    router.push(`/${locale}/search`);
  };
  const goBook = () => {
    router.push(`/${locale}/book/${service.id}`);
  };

  if (loading) return null; // TODO: add skeleton

  return (
    <Box sx={s.root}>
      {/* ── Back / breadcrumb ─────────────────────────────────────────────── */}
      <Box sx={s.backBar}>
        <Button
          startIcon={<ArrowBack sx={{ fontSize: 14 }} />}
          onClick={goBack}
          sx={s.backBtn}
        >
          Search
        </Button>
        <Box component="span" sx={s.backSep}>
          ›
        </Box>
        <Typography sx={s.breadcrumbCurrent}>{service.service_name}</Typography>
      </Box>

      {/* ── Two-column content ────────────────────────────────────────────── */}
      <Box sx={s.contentWrap}>
        {/* ── LEFT COLUMN ─────────────────────────────────────────────────── */}
        <Box sx={s.leftCol}>
          {/* Media Carousel with Overlaid Title & Details */}
          <MediaCarousel
            media={service.media}
            fallbackImageUrl={service.image_url}
            fallbackIllustration={ILLUSTRATIONS[service.equipment_type]}
            overlay={<HeaderOverlay service={service} />}
          />

          {/* ── Quick info grid ──────────────────────────────────────────── */}
          <Box sx={s.infoGrid}>
            <Box sx={s.infoItem}>
              <Typography sx={s.infoLabel}>Base price</Typography>
              <Typography sx={s.infoValue}>
                ₹{service.base_price.toLocaleString("en-IN")}
              </Typography>
              <Typography sx={s.infoSub}>
                for {service.min_hours} hrs
              </Typography>
            </Box>
            <Box sx={s.infoItem}>
              <Typography sx={s.infoLabel}>Extra hour</Typography>
              <Typography sx={s.infoValue}>
                ₹{service.extra_hour_rate.toLocaleString("en-IN")}
              </Typography>
              <Typography sx={s.infoSub}>per hr after min</Typography>
            </Box>
            <Box sx={s.infoItem}>
              <Typography sx={s.infoLabel}>Max capacity</Typography>
              <Typography sx={s.infoValue}>{service.max_capacity}</Typography>
              <Typography sx={s.infoSub}>guests</Typography>
            </Box>
            <Box sx={s.infoItem}>
              <Typography sx={s.infoLabel}>Min booking</Typography>
              <Typography sx={s.infoValue}>{service.min_hours} hrs</Typography>
              <Typography sx={s.infoSub}>
                up to {service.max_hours} hrs
              </Typography>
            </Box>
            <Box sx={s.infoItem}>
              <Typography sx={s.infoLabel}>Advance notice</Typography>
              <Typography sx={s.infoValue}>
                {service.advance_notice_days}
              </Typography>
              <Typography sx={s.infoSub}>days required</Typography>
            </Box>
            <Box sx={s.infoItem}>
              <Typography sx={s.infoLabel}>Location</Typography>
              <Typography sx={s.infoValue} style={{ fontSize: "0.9rem" }}>
                {service.provider.city}
              </Typography>
              <Typography sx={s.infoSub}>{service.provider.area}</Typography>
            </Box>
          </Box>

          {/* ── Description ─────────────────────────────────────────────── */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>About this service</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              <Typography sx={s.descText}>{service.description}</Typography>
            </Box>
          </Box>

          {/* ── Distance pricing ────────────────────────────────────────── */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>Travel charges</Typography>
            </Box>
            <Box>
              {service.distance_slabs.map((slab) => (
                <Box key={slab.id} sx={s.slabRow}>
                  <Typography sx={s.slabRange}>
                    {slab.from_km} – {slab.to_km === null ? "100+" : slab.to_km}{" "}
                    km
                  </Typography>
                  {slab.not_available ? (
                    <Typography
                      sx={[
                        {
                          fontFamily: "Fraunces, Georgia, serif",
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          textAlign: "right",
                        },
                        { color: "#B91C1C", textAlign: "right" },
                      ]}
                    >
                      Not available
                    </Typography>
                  ) : (
                    <Typography
                      sx={[
                        {
                          fontFamily: "Fraunces, Georgia, serif",
                          fontSize: "0.9rem",
                          fontWeight: 700,
                          textAlign: "right",
                        },
                        { color: slab.charge === 0 ? "#16a34a" : "#18181B" },
                      ]}
                    >
                      {slab.charge === 0
                        ? "Free"
                        : `+₹${slab.charge.toLocaleString("en-IN")}`}
                    </Typography>
                  )}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Availability ────────────────────────────────────────────── */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>Availability</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              <Box sx={s.dayChips}>
                {ALL_DAYS.map((d) => {
                  const avail = service.available_days.includes(d);
                  return (
                    <Box key={d} sx={s.dayChip(avail)}>
                      {d}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>

          {/* ── Special notes ───────────────────────────────────────────── */}
          {service.special_notes && (
            <Box sx={s.sectionCard}>
              <Box sx={s.sectionHead}>
                <Typography sx={s.sectionTitle}>Important notes</Typography>
              </Box>
              <Box sx={s.sectionBody}>
                <Box sx={s.notesText}>
                  <Box component="span" sx={s.notesIcon}>
                    ℹ️
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "0.85rem",
                      color: "#3F3C38",
                      lineHeight: 1.75,
                    }}
                  >
                    {service.special_notes}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}

          {/* ── About provider ──────────────────────────────────────────── */}
          <Box sx={{ ...s.sectionCard, display: { xs: "block", lg: "none" } }}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>About the provider</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              <Box sx={s.providerCard}>
                <Box sx={s.providerAvatar}>
                  {service.provider.business_name.charAt(0)}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "#18181B",
                    }}
                  >
                    {service.provider.business_name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: "#7A756F" }}>
                    {service.provider.owner_name} · {service.provider.city}
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.72rem", color: "#B0AAA3", mt: "0.1rem" }}
                  >
                    Member since {service.provider.member_since}
                  </Typography>
                </Box>
              </Box>
              <Box sx={s.providerStatGrid}>
                <Box sx={s.providerStat}>
                  <Typography sx={s.providerStatVal}>
                    {service.provider.average_rating.toFixed(1)} ★
                  </Typography>
                  <Typography sx={s.providerStatLbl}>Avg rating</Typography>
                </Box>
                <Box sx={s.providerStat}>
                  <Typography sx={s.providerStatVal}>
                    {service.provider.total_bookings}
                  </Typography>
                  <Typography sx={s.providerStatLbl}>Total bookings</Typography>
                </Box>
                <Box sx={s.providerStat}>
                  <Typography sx={s.providerStatVal}>
                    {service.provider.total_services}
                  </Typography>
                  <Typography sx={s.providerStatLbl}>
                    Services listed
                  </Typography>
                </Box>
                <Box sx={s.providerStat}>
                  <Typography sx={s.providerStatVal}>
                    {service.advance_notice_days}d
                  </Typography>
                  <Typography sx={s.providerStatLbl}>Advance notice</Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ── Reviews ─────────────────────────────────────────────────── */}
          <Box sx={{ ...s.sectionCard, display: { xs: "block", lg: "none" } }}>
            <Box sx={s.sectionHead}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={s.sectionTitle}>Reviews</Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                >
                  <StarIcon size={13} fill="#C4893A" />
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#18181B",
                    }}
                  >
                    {service.average_rating.toFixed(1)}
                  </Typography>
                  <Typography sx={{ fontSize: "0.75rem", color: "#B0AAA3" }}>
                    ({service.reviews.length})
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                px: "1.25rem",
                py: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
              }}
            >
              {service.reviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </Box>
          </Box>

          {/* Spacer for mobile sticky CTA */}
          <Box sx={{ display: { xs: "block", lg: "none" }, height: "80px" }} />
        </Box>

        {/* ── RIGHT COLUMN (sticky booking card) ──────────────────────── */}
        <Box sx={s.rightCol}>
          <BookingCard service={service} onBook={goBook} />
          <ProviderDetails service={service} />
          <ReviewsSection service={service} />
        </Box>
      </Box>

      {/* ── Mobile sticky bottom CTA ─────────────────────────────────────── */}
      <Box sx={s.mobileCta}>
        <Box sx={s.mobilePriceWrap}>
          <Typography sx={s.mobilePriceMain}>
            ₹{service.base_price.toLocaleString("en-IN")}
          </Typography>
          <Typography sx={s.mobilePriceSub}>
            base · {service.min_hours} hrs
          </Typography>
        </Box>
        <Button onClick={goBook} sx={s.mobileBookBtn}>
          Book Now ↗
        </Button>
      </Box>
    </Box>
  );
}
