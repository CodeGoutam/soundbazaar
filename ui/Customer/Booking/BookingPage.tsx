"use client";

import { useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { bookingStyles as s } from "./Booking.styles";
import {
  BookingFormData,
  calcPriceBreakdown,
  DUMMY_SERVICE_DETAIL,
  ServiceDetail,
} from "@/types/ServiceDetail.types";
import { SummaryCard } from "./SummaryCard/SummaryCard";
import { getMinDate } from "@/lib/utils";
import { DurationStepper } from "./DurationStepper/DurationStepper";
import { bookingSchema } from "./BookingConfig";

type FormData = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const router = useRouter();
  const { locale, serviceId } = useParams() as {
    locale: string;
    serviceId: string;
  };

  // TODO: replace with useQuery → GET /services/:serviceId
  const service: ServiceDetail = DUMMY_SERVICE_DETAIL;

  const [durationHours, setDurationHours] = useState(service.min_hours);
  const [eventType, setEventType] = useState(service.event_types[0] ?? "");
  const [eventTypeError, setEventTypeError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      event_date: "",
      event_start_time: "",
      event_address: "",
      event_city: service.provider.city,
      event_type: service.event_types[0] ?? "",
      special_requests: "",
    },
  });

  // We use 0 km as default distance since we don't calculate until API
  // TODO: integrate Haversine/Maps distance once address is entered
  const distanceKm = 0;

  const breakdown = useMemo(
    () => calcPriceBreakdown(service, durationHours, distanceKm),
    [service, durationHours, distanceKm],
  );

  const minDate = getMinDate(service.advance_notice_days);

  const onSubmit = async (data: FormData) => {
    if (!eventType) {
      setEventTypeError("Select an event type");
      return;
    }
    setEventTypeError("");
    setSubmitting(true);

    try {
      const bookingPayload: BookingFormData = {
        ...data,
        duration_hours: durationHours,
        event_type: eventType,
        special_requests: "",
      };

      // TODO: useMutation → POST /bookings  { service_id, ...bookingPayload }
      console.log("booking payload", bookingPayload);

      router.push(`/${locale}/bookings/confirmation?serviceId=${serviceId}&success=true`);
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={s.root}>
      {/* ── Back breadcrumb ───────────────────────────────────────────────── */}
      <Box sx={s.backBar}>
        <Button
          startIcon={<ArrowBack sx={{ fontSize: 14 }} />}
          onClick={() => router.push(`/${locale}/search/${serviceId}`)}
          sx={s.backBtn}
        >
          {service.service_name}
        </Button>
        <Box component="span" sx={s.backSep}>
          ›
        </Box>
        <Typography sx={s.breadcrumbCurrent}>Book</Typography>
      </Box>

      {/* ── Two-column layout ─────────────────────────────────────────────── */}
      <Box sx={s.contentWrap}>
        {/* ── LEFT: Form ──────────────────────────────────────────────────── */}
        <Box sx={s.formCol}>
          <Box>
            <Typography component="span" sx={s.pageLabel}>
              Booking
            </Typography>
            <Typography sx={s.pageTitle}>Confirm your details</Typography>
          </Box>

          {/* ── Section 1: Event details ─────────────────────────────────── */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Box sx={s.sectionNum}>1</Box>
              <Typography sx={s.sectionTitle}>Event details</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              {/* Date + Time */}
              <Box sx={s.fieldRow}>
                <Controller
                  name="event_date"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <Typography component="span" sx={s.fieldLabel}>
                        Event date
                      </Typography>
                      <TextField
                        {...field}
                        type="date"
                        size="small"
                        fullWidth
                        inputProps={{ min: minDate }}
                        error={!!errors.event_date}
                        helperText={errors.event_date?.message}
                        sx={{ "& input": { fontSize: "0.85rem" } }}
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="event_start_time"
                  control={control}
                  render={({ field }) => (
                    <Box>
                      <Typography component="span" sx={s.fieldLabel}>
                        Start time
                      </Typography>
                      <TextField
                        {...field}
                        type="time"
                        size="small"
                        fullWidth
                        error={!!errors.event_start_time}
                        helperText={errors.event_start_time?.message}
                        sx={{ "& input": { fontSize: "0.85rem" } }}
                      />
                    </Box>
                  )}
                />
              </Box>

              {/* Duration stepper */}
              <Box>
                <Typography component="span" sx={s.fieldLabel}>
                  Duration — min {service.min_hours} hrs · max{" "}
                  {service.max_hours} hrs
                </Typography>
                <DurationStepper
                  value={durationHours}
                  min={service.min_hours}
                  max={service.max_hours}
                  onChange={setDurationHours}
                />
                {durationHours > service.min_hours && (
                  <Typography sx={s.helperText}>
                    +{durationHours - service.min_hours} extra hr
                    {durationHours - service.min_hours > 1 ? "s" : ""} × ₹
                    {service.extra_hour_rate.toLocaleString("en-IN")} = ₹
                    {(
                      (durationHours - service.min_hours) *
                      service.extra_hour_rate
                    ).toLocaleString("en-IN")}{" "}
                    added
                  </Typography>
                )}
              </Box>

              {/* Event type */}
              <Box>
                <Typography component="span" sx={s.fieldLabel}>
                  Event type
                </Typography>
                <Box sx={s.eventChips}>
                  {service.event_types.map((t) => (
                    <Box
                      key={t}
                      onClick={() => {
                        setEventType(t);
                        setEventTypeError("");
                      }}
                      sx={s.eventChip(eventType === t)}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
                {eventTypeError && (
                  <Typography
                    sx={{ fontSize: "0.72rem", color: "#B91C1C", mt: "0.3rem" }}
                  >
                    {eventTypeError}
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>

          {/* ── Section 2: Event location ────────────────────────────────── */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Box sx={s.sectionNum}>2</Box>
              <Typography sx={s.sectionTitle}>Event location</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              <Controller
                name="event_address"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography component="span" sx={s.fieldLabel}>
                      Full address
                    </Typography>
                    <TextField
                      {...field}
                      size="small"
                      fullWidth
                      placeholder="House/Flat no., Street, Area, Landmark"
                      error={!!errors.event_address}
                      helperText={
                        errors.event_address?.message ??
                        "Travel charge is calculated from this address"
                      }
                      multiline
                      rows={2}
                    />
                  </Box>
                )}
              />

              <Controller
                name="event_city"
                control={control}
                render={({ field }) => (
                  <Box>
                    <Typography component="span" sx={s.fieldLabel}>
                      City
                    </Typography>
                    <TextField
                      {...field}
                      size="small"
                      fullWidth
                      placeholder="e.g. Gurugram"
                      error={!!errors.event_city}
                      helperText={errors.event_city?.message}
                    />
                  </Box>
                )}
              />
            </Box>
          </Box>

          {/* ── Section 3: Special requests ──────────────────────────────── */}
          <Box sx={s.sectionCard}>
            <Box sx={s.sectionHead}>
              <Box sx={s.sectionNum}>3</Box>
              <Typography sx={s.sectionTitle}>
                Special requests (optional)
              </Typography>
            </Box>
            <Box sx={s.sectionBody}>
              <Controller
                name="special_requests"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    size="small"
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="Any specific song requests, setup instructions, access details for the venue..."
                    error={!!errors.special_requests}
                    helperText={errors.special_requests?.message}
                  />
                )}
              />
            </Box>
          </Box>

          {/* Spacer for mobile sticky bar */}
          <Box sx={{ display: { xs: "block", lg: "none" }, height: "90px" }} />
        </Box>

        {/* ── RIGHT: Summary ───────────────────────────────────────────────── */}
        <SummaryCard
          service={service}
          hours={durationHours}
          distanceKm={distanceKm}
          onSubmit={handleSubmit(onSubmit)}
          loading={submitting}
        />
      </Box>

      {/* ── Mobile sticky bottom bar ──────────────────────────────────────── */}
      <Box sx={s.mobileSummaryBar}>
        <Box>
          <Typography sx={s.mobileTotal}>
            ₹{breakdown.subtotal.toLocaleString("en-IN")}
          </Typography>
          <Typography sx={s.mobileSub}>
            {durationHours} hrs · token ₹
            {breakdown.token_amount.toLocaleString("en-IN")}
          </Typography>
        </Box>
        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={submitting}
          sx={s.mobileSubmitBtn}
        >
          {submitting ? (
            <CircularProgress size={16} color="inherit" />
          ) : (
            "Confirm ↗"
          )}
        </Button>
      </Box>
    </Box>
  );
}
