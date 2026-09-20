"use client";

import { useState } from "react";
import { useRouter, useParams, useSearchParams } from "next/navigation";
import {
  Box,
  Typography,
  Button,
  Divider,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  CheckCircle,
  Phone,
  ContentCopy,
  BookmarkBorder,
  Search,
  WhatsApp,
  HourglassEmpty,
  Block,
  CheckCircleOutline,
} from "@mui/icons-material";
import { confirmStyles as s } from "./BookingConfirmation.styles";
import { DUMMY_BOOKING } from "./dummyBooking";
import { formatDateWithTime, formateDate } from "@/lib/utils";
import SnackbarComponent from "@/components/Snackbar/Snackbar";
import { TIMELINE_STEPS } from "./TimeLineSteps";

// ─── Main page ────────────────────────────────────────────────────────────────
export default function BookingConfirmationPage() {
  const router = useRouter();
  const { locale } = useParams() as { locale: string };
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  // TODO: fetch real booking using searchParams.get("bookingId") via useQuery
  // Mocking status logic for now
  const booking = {
    ...DUMMY_BOOKING,
    status: isSuccess ? "confirmed" : (searchParams.get("status") || "confirmed"),
  };

  const getBannerConfig = () => {
    if (isSuccess) {
      return {
        eyebrow: "Booking confirmed",
        title: (
          <>
            Your slot is{" "}
            <Box component="em" sx={s.bannerTitleAccent}>
              locked in
            </Box>
          </>
        ),
        sub: "Token payment received. The provider will call you within 24 hours to confirm your event details.",
        icon: <CheckCircle sx={s.successIcon} />,
      };
    }

    switch (booking.status) {
      case "pending":
        return {
          eyebrow: "Awaiting confirmation",
          title: (
            <>
              Your booking is{" "}
              <Box component="em" sx={s.bannerTitleAccent}>
                pending
              </Box>
            </>
          ),
          sub: "The provider has received your request. Expect a call or update shortly.",
          icon: <HourglassEmpty sx={[s.successIcon, { color: "#F59E0B" }]} />,
        };
      case "completed":
        return {
          eyebrow: "Service completed",
          title: (
            <>
              The event was a{" "}
              <Box component="em" sx={s.bannerTitleAccent}>
                success
              </Box>
            </>
          ),
          sub: "We hope you had a great experience! Review your provider below.",
          icon: (
            <CheckCircleOutline sx={[s.successIcon, { color: "#3B82F6" }]} />
          ),
        };
      case "cancelled":
        return {
          eyebrow: "Booking cancelled",
          title: (
            <>
              This booking was{" "}
              <Box component="em" sx={s.bannerTitleAccent}>
                cancelled
              </Box>
            </>
          ),
          sub: "If this was a mistake, please reach out to support or the provider.",
          icon: <Block sx={[s.successIcon, { color: "#EF4444" }]} />,
        };
      default:
        return {
          eyebrow: "Booking Details",
          title: (
            <>
              Details for your{" "}
              <Box component="em" sx={s.bannerTitleAccent}>
                event
              </Box>
            </>
          ),
          sub: "Review your booking information and provider details below.",
          icon: <CheckCircle sx={s.successIcon} />,
        };
    }
  };

  const banner = getBannerConfig();

  const [copied, setCopied] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const copyBookingId = () => {
    navigator.clipboard.writeText(booking.booking_id).then(() => {
      setCopied(true);
      setSnackOpen(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const callProvider = () => {
    window.location.href = `tel:${booking.provider.mobile.replace(/\s/g, "")}`;
  };

  const whatsappProvider = () => {
    const num = booking.provider.mobile.replace(/[^0-9]/g, "");
    const msg = encodeURIComponent(
      `Hi, I just booked "${booking.service_name}" (Booking ID: ${booking.booking_id}) for ${formateDate(booking.event_date)}. Looking forward to connecting!`,
    );
    window.open(`https://wa.me/${num}?text=${msg}`, "_blank");
  };

  return (
    <Box sx={s.root}>
      {/* ── Success banner ─────────────────────────────────────────────────── */}
      <Box sx={s.banner(booking.status)}>
        <Box sx={s.bannerGrid} />
        <Box sx={s.bannerGlow} />

        {/* Status icon */}
        <Box sx={s.successRing(booking.status)}>
          {banner.icon}
        </Box>

        <Typography sx={s.bannerEyebrow(booking.status)}>{banner.eyebrow}</Typography>

        <Typography sx={s.bannerTitle}>
          {banner.title}
        </Typography>

        <Typography sx={s.bannerSub}>
          {banner.sub}
        </Typography>

        {/* Booking ID chip */}
        <Box sx={s.bookingIdChip}>
          <Typography sx={s.bookingIdLabel}>Booking ID</Typography>
          <Typography sx={s.bookingIdValue}>{booking.booking_id}</Typography>
          <Button onClick={copyBookingId} sx={s.copyBtn} disableRipple>
            <ContentCopy sx={{ fontSize: 11, mr: "0.25rem" }} />
            {copied ? "Copied" : "Copy"}
          </Button>
        </Box>
      </Box>

      {/* ── Two-column content ────────────────────────────────────────────── */}
      <Box sx={s.contentWrap}>
        {/* ── LEFT COLUMN ──────────────────────────────────────────────────── */}
        <Box sx={s.leftCol}>
          {/* What happens next */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>What happens next</Typography>
            </Box>
            <Box sx={{ px: "1.25rem", pt: "1.25rem", pb: "0.5rem" }}>
              <Box sx={s.timeline}>
                {TIMELINE_STEPS.map((step, i) => {
                  const isLast = i === TIMELINE_STEPS.length - 1;
                  return (
                    <Box key={i} sx={s.timelineItem}>
                      <Box sx={s.timelineLeft}>
                        <Box sx={s.timelineDot(step.done, step.active)}>
                          {step.done ? (
                            <CheckCircle sx={{ fontSize: 14, color: "#fff" }} />
                          ) : (
                            <Typography
                              sx={{
                                fontSize: "0.72rem",
                                color: step.active ? "#fff" : "#B0AAA3",
                              }}
                            >
                              {i + 1}
                            </Typography>
                          )}
                        </Box>
                        {!isLast && <Box sx={s.timelineLine(step.done)} />}
                      </Box>

                      <Box sx={s.timelineContent}>
                        <Typography sx={s.timelineTitle(step.active)}>
                          {step.title}
                        </Typography>
                        <Typography sx={s.timelineSub}>{step.sub}</Typography>
                        {step.tag && <Box sx={s.timelineTag}>{step.tag}</Box>}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>

          {/* Booking details */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>Booking details</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              {[
                { label: "Service", value: booking.service_name },
                { label: "Event type", value: booking.event_type },
                { label: "Date", value: formateDate(booking.event_date) },
                { label: "Start time", value: booking.event_start_time },
                { label: "Duration", value: `${booking.duration_hours} hours` },
                {
                  label: "Venue",
                  value: `${booking.event_address}, ${booking.event_city}`,
                },
                {
                  label: "Booked on",
                  value: formatDateWithTime(booking.booked_at),
                },
              ].map(({ label, value }) => (
                <Box key={label} sx={s.detailRow}>
                  <Typography sx={s.detailLabel}>{label}</Typography>
                  <Typography sx={s.detailValue}>{value}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Payment summary */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Typography sx={s.sectionTitle}>Payment summary</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              {/* Breakdown */}
              <Box sx={s.paymentBreakdown}>
                <Box sx={s.breakdownRow}>
                  <Typography sx={s.breakdownLabel}>Base price</Typography>
                  <Typography sx={s.breakdownValue}>
                    ₹{booking.base_price.toLocaleString("en-IN")}
                  </Typography>
                </Box>
                {booking.extra_hours_charge > 0 && (
                  <Box sx={s.breakdownRow}>
                    <Typography sx={s.breakdownLabel}>Extra hours</Typography>
                    <Typography sx={s.breakdownValue}>
                      ₹{booking.extra_hours_charge.toLocaleString("en-IN")}
                    </Typography>
                  </Box>
                )}
                <Box sx={s.breakdownRow}>
                  <Typography sx={s.breakdownLabel}>Travel charge</Typography>
                  <Typography
                    sx={[
                      s.breakdownValue,
                      {
                        color:
                          booking.travel_charge === 0 ? "#16a34a" : "#18181B",
                      },
                    ]}
                  >
                    {booking.travel_charge === 0
                      ? "Free"
                      : `₹${booking.travel_charge.toLocaleString("en-IN")}`}
                  </Typography>
                </Box>
                <Box sx={s.breakdownTotal}>
                  <Typography sx={s.breakdownTotalLabel}>Total</Typography>
                  <Typography sx={s.breakdownTotalValue}>
                    ₹{booking.subtotal.toLocaleString("en-IN")}
                  </Typography>
                </Box>
              </Box>

              {/* Token paid */}
              <Box sx={s.tokenPaidBadge}>
                <Box sx={s.tokenPaidLeft}>
                  <CheckCircle sx={{ fontSize: 16, color: "#16a34a" }} />
                  <Box>
                    <Typography sx={s.tokenPaidLabel}>Token paid</Typography>
                    <Typography sx={s.tokenPaidSub}>
                      Slot confirmed · payment secured
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={s.tokenPaidValue}>
                  ₹{booking.token_paid.toLocaleString("en-IN")}
                </Typography>
              </Box>

              {/* Remaining */}
              <Box sx={s.remainingBadge}>
                <Box>
                  <Typography sx={s.remainingLabel}>
                    Remaining amount
                  </Typography>
                  <Typography sx={s.remainingSub}>
                    Pay directly to provider after event
                  </Typography>
                </Box>
                <Typography sx={s.remainingValue}>
                  ₹{booking.remaining_amount.toLocaleString("en-IN")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ── RIGHT COLUMN ─────────────────────────────────────────────────── */}
        <Box sx={s.rightCol}>
          {/* Provider contact card */}
          <Box sx={s.providerContactCard}>
            <Box sx={s.providerContactHead}>
              <Typography sx={s.providerContactTitle}>Your provider</Typography>
              <Typography sx={s.providerContactSub}>
                Expect a call within 24 hours
              </Typography>
            </Box>

            <Box sx={s.providerContactBody}>
              {/* Provider info */}
              <Box sx={s.providerRow}>
                <Box sx={s.providerAvatar}>
                  {booking.provider.business_name.charAt(0)}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={s.providerName}>
                    {booking.provider.business_name}
                  </Typography>
                  <Typography sx={s.providerLocation}>
                    {booking.provider.owner_name} · {booking.provider.city}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ borderColor: "#F0EDE8" }} />

              {/* Contact number */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.68rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#B0AAA3",
                      mb: "0.2rem",
                    }}
                  >
                    Mobile
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "#18181B",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {booking.provider.mobile}
                  </Typography>
                </Box>
              </Box>

              {/* Call button */}
              <Button
                startIcon={<Phone sx={{ fontSize: 16 }} />}
                onClick={callProvider}
                sx={s.callBtn}
              >
                Call Provider
              </Button>

              {/* WhatsApp button */}
              <Button
                startIcon={<WhatsApp sx={{ fontSize: 16 }} />}
                onClick={whatsappProvider}
                sx={s.whatsappBtn}
              >
                WhatsApp
              </Button>

              <Typography sx={s.callNote}>
                Provider has been notified of your booking and will reach out to
                confirm details.
              </Typography>
            </Box>
          </Box>

          {/* Action buttons */}
          <Box sx={s.actionsCard}>
            <Button
              startIcon={<BookmarkBorder sx={{ fontSize: 16 }} />}
              // onClick={() => router.push(`/${locale}/bookings`)}
              sx={s.myBookingsBtn}
            >
              View My Bookings
            </Button>
            <Button
              startIcon={<Search sx={{ fontSize: 16 }} />}
              //   onClick={() => router.push(`/${locale}/search`)}
              sx={s.searchMoreBtn}
            >
              Browse more services
            </Button>
          </Box>
        </Box>
      </Box>

      <SnackbarComponent
        autoHideDuration={2000}
        message="Booking ID copied to clipboard"
        severity="success"
        snackOpen={snackOpen}
        setSnackOpen={setSnackOpen}
      />
    </Box>
  );
}
