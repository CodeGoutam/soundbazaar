"use client";

import { Box, Typography, Button } from "@mui/material";
import {
  LocationOn,
  Verified,
  Groups,
  AccessTime,
  Build,
  ArrowOutward,
} from "@mui/icons-material";
import { useRouter, useParams } from "next/navigation";
import { cardStyles as s } from "./ServiceCard.styles";
import { ServiceWithProvider } from "@/types/Search.types";
import { useState } from "react";

const TYPE_CONFIG: Record<
  string,
  { label: string; icon: string; fallbackImg: string }
> = {
  sound: {
    label: "Sound System",
    icon: "🔊",
    fallbackImg:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
  },
  dj: {
    label: "DJ Setup",
    icon: "🎧",
    fallbackImg:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
  },
  lighting: {
    label: "Lighting",
    icon: "💡",
    fallbackImg:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
  },
  combo: {
    label: "Combo Pack",
    icon: "✨",
    fallbackImg:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  },
};

interface ServiceCardProps {
  service: ServiceWithProvider;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const router = useRouter();
  const { locale } = useParams() as { locale: string };
  const typeInfo = TYPE_CONFIG[service.equipment_type] ?? TYPE_CONFIG.sound;

  const [imgSrc, setImgSrc] = useState<string>(
    service.image_url ?? typeInfo.fallbackImg,
  );

  const goToDetail = () => router.push(`/${locale}/search/${service.id}`);

  return (
    <Box
      sx={s.card}
      onClick={goToDetail}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          goToDetail();
        }
      }}
    >
      {/* ── Image ──────────────────────────────────────────────────────────── */}
      <Box sx={s.imageWrap}>
        <Box
          component="img"
          src={imgSrc}
          alt={service.service_name}
          onError={() => setImgSrc(typeInfo.fallbackImg)}
          className="card-img"
          sx={s.image}
          loading="lazy"
        />
        <Box sx={s.imageGradient} />

        {/* Category + Popular badge */}
        <Box sx={s.topLeftBadges}>
          <Box sx={s.typeBadge}>
            {typeInfo.icon} {typeInfo.label}
          </Box>
          {service.is_featured && <Box sx={s.featuredBadge}>Popular</Box>}
        </Box>

        {/* Verified */}
        {service.provider.is_verified && (
          <Box sx={s.verifiedChip}>
            <Verified sx={{ fontSize: 10 }} /> Verified
          </Box>
        )}

        {/* Rating */}
        <Box sx={s.ratingBadge}>
          <Typography sx={s.ratingStar}>★</Typography>
          <Typography sx={s.ratingScore}>
            {service.provider.average_rating.toFixed(1)}
          </Typography>
          <Typography sx={s.ratingCount}>
            ({service.provider.total_bookings})
          </Typography>
        </Box>
      </Box>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <Box sx={s.body}>
        {/* Provider + City */}
        <Box sx={s.providerRow}>
          <Typography
            sx={s.providerName}
            title={service.provider.business_name}
          >
            {service.provider.business_name}
          </Typography>
          <Box sx={s.locationTag}>
            <LocationOn sx={{ fontSize: 11, color: "#C4893A" }} />
            {service.provider.city || service.location}
          </Box>
        </Box>

        {/* Title */}
        <Typography sx={s.serviceTitle}>{service.service_name}</Typography>

        {/* Spec chips */}
        <Box sx={s.specsRow}>
          <Box sx={s.specItem}>
            <Groups sx={{ fontSize: 11, color: "#8C857B" }} />
            <span>{service.max_capacity}</span>
          </Box>
          <Box sx={s.specItem}>
            <AccessTime sx={{ fontSize: 11, color: "#8C857B" }} />
            <span>{service.min_hours}h</span>
          </Box>
          {service.setup_included && (
            <Box sx={s.specItem}>
              <Build sx={{ fontSize: 10, color: "#8C857B" }} />
              <span>Setup</span>
            </Box>
          )}
        </Box>

        <Box sx={s.divider} />

        {/* Price + Pill Book Button with ArrowOutward Icon */}
        <Box sx={s.footer}>
          <Box sx={s.pricingWrap}>
            <Box sx={s.priceMain}>
              <Typography sx={s.priceAmount}>
                ₹{service.base_price.toLocaleString("en-IN")}
              </Typography>
              <Typography sx={s.priceDuration}>
                /{service.min_hours}h
              </Typography>
            </Box>
            <Typography sx={s.priceExtra}>
              +₹{service.extra_hour_rate.toLocaleString("en-IN")}/hr
            </Typography>
          </Box>

          <Button
            sx={s.bookButton}
            onClick={(e) => {
              e.stopPropagation();
              goToDetail();
            }}
          >
            Book
            <ArrowOutward className="btn-icon" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
