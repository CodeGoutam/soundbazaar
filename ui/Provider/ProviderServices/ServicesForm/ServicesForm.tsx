"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Drawer,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  CircularProgress,
} from "@mui/material";
import { Close, Delete, Add } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { serviceSchema, ServiceSchemaData } from "../ProviderServicesSchema";
import { formStyles as s } from "./ServicesForm.styles";
import {
  CAPACITY_OPTIONS,
  DAYS_OF_WEEK,
  DEFAULT_SLABS,
  DistanceSlab,
  EVENT_TYPES,
  Service,
  ServiceFormData,
} from "@/types/ProviderServicesTypes";
import { ImageUploader } from "@/components/ImageUploader/ImageUploader";
import { calcPrice } from "@/lib/utils";
import { SlabEditor } from "./SlabEditor";

// ─── Props ────────────────────────────────────────────────────────────────────
interface ServiceFormProps {
  open: boolean;
  onClose: () => void;
  onSave: (data: ServiceFormData) => Promise<void>;
  editService?: Service | null; // if set → edit mode
}

// ─── Main form component ──────────────────────────────────────────────────────
export default function ServiceForm({
  open,
  onClose,
  onSave,
  editService,
}: ServiceFormProps) {
  const isEdit = !!editService;

  // State outside RHF — image + slabs + multiselects
  const [imagePreview, setImagePreview] = useState<string | null>(
    editService?.image_url ?? null,
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [slabs, setSlabs] = useState<DistanceSlab[]>(
    editService?.distance_slabs ?? DEFAULT_SLABS,
  );
  const [eventTypes, setEventTypes] = useState<string[]>(
    editService?.event_types ?? [],
  );
  const [availDays, setAvailDays] = useState<string[]>(
    editService?.available_days ?? DAYS_OF_WEEK.slice(),
  );
  const [saving, setSaving] = useState(false);
  const [eventTypesError, setEventTypesError] = useState("");
  const [daysError, setDaysError] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ServiceSchemaData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      service_name: editService?.service_name ?? "",
      description: editService?.description ?? "",
      event_types: editService?.event_types ?? [],
      max_capacity: editService?.max_capacity ?? "200",
      base_price: editService?.base_price ?? (undefined as any),
      min_hours: editService?.min_hours ?? 4,
      extra_hour_rate: editService?.extra_hour_rate ?? (undefined as any),
      max_hours: editService?.max_hours ?? 12,
      advance_notice_days: editService?.advance_notice_days ?? 2,
      available_days: editService?.available_days ?? DAYS_OF_WEEK.slice(),
      special_notes: editService?.special_notes ?? "",
    },
  });

  const basePrice = watch("base_price") || 0;
  const minHours = watch("min_hours") || 4;
  const extraHourRate = watch("extra_hour_rate") || 0;
  const maxHours = watch("max_hours") || 12;

  const toggleEventType = (t: string) =>
    setEventTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );

  const toggleDay = (d: string) =>
    setAvailDays((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    );

  const onSubmit = async (data: ServiceSchemaData) => {
    // manual validation for multiselects not in RHF
    let valid = true;
    if (eventTypes.length === 0) {
      setEventTypesError("Select at least one event type");
      valid = false;
    } else setEventTypesError("");
    if (availDays.length === 0) {
      setDaysError("Select at least one day");
      valid = false;
    } else setDaysError("");
    if (!valid) return;

    setSaving(true);
    try {
      await onSave({
        ...data,
        event_types: eventTypes,
        available_days: availDays,
        distance_slabs: slabs,
        image_file: imageFile,
        image_url: imagePreview,
      } as ServiceFormData);
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { bgcolor: "#F9F7F4" } }}
    >
      <Box sx={s.drawerInner}>
        {/* Header */}
        <Box sx={s.drawerHeader}>
          <Typography sx={s.drawerTitle}>
            {isEdit ? "Edit service" : "Add new service"}
          </Typography>
          <IconButton onClick={onClose} sx={s.drawerCloseBtn} size="small">
            <Close fontSize="small" />
          </IconButton>
        </Box>

        {/* Scrollable form body */}
        <Box
          sx={s.drawerScroll}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ── Section 1: Basic info ──────────────────────────────────────── */}
          <Box sx={s.section}>
            <Box sx={s.sectionHead}>
              <Box sx={s.sectionNumber}>1</Box>
              <Typography sx={s.sectionTitle}>Basic info</Typography>
            </Box>
            <Box sx={s.sectionBody}>
              {/* Image upload */}
              <ImageUploader
                preview={imagePreview}
                onFile={(file, url) => {
                  setImageFile(file);
                  setImagePreview(url);
                }}
              />

              {/* Service name */}
              <Controller
                name="service_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Service name"
                    size="small"
                    fullWidth
                    placeholder='e.g. "Wedding DJ Package"'
                    error={!!errors.service_name}
                    helperText={errors.service_name?.message}
                  />
                )}
              />

              {/* Description */}
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description"
                    size="small"
                    fullWidth
                    multiline
                    rows={3}
                    placeholder="List your equipment: brands, power output, speakers, mixer, lights included..."
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />
                )}
              />

              {/* Event types */}
              <Box>
                <Typography component="span" sx={s.fieldLabel}>
                  Event types
                </Typography>
                <Box sx={s.eventChips}>
                  {EVENT_TYPES.map((t) => (
                    <Box
                      key={t}
                      onClick={() => toggleEventType(t)}
                      sx={s.eventChip(eventTypes.includes(t))}
                    >
                      {t}
                    </Box>
                  ))}
                </Box>
                {eventTypesError && (
                  <Typography
                    sx={{ fontSize: "0.72rem", color: "#B91C1C", mt: "0.3rem" }}
                  >
                    {eventTypesError}
                  </Typography>
                )}
              </Box>

              {/* Max capacity */}
              <Controller
                name="max_capacity"
                control={control}
                render={({ field }) => (
                  <FormControl
                    size="small"
                    fullWidth
                    error={!!errors.max_capacity}
                  >
                    <Typography component="span" sx={s.fieldLabel}>
                      Max guest capacity
                    </Typography>
                    <Select {...field} displayEmpty>
                      {CAPACITY_OPTIONS.map((c) => (
                        <MenuItem key={c.value} value={c.value}>
                          {c.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.max_capacity && (
                      <FormHelperText>
                        {errors.max_capacity.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                )}
              />
            </Box>
          </Box>
          {/* ── Section 2: Duration pricing ────────────────────────────────── */}

          {
            <Box sx={s.section}>
              <Box sx={s.sectionHead}>
                <Box sx={s.sectionNumber}>2</Box>
                <Typography sx={s.sectionTitle}>Duration pricing</Typography>
              </Box>
              <Box sx={s.sectionBody}>
                <Box sx={s.fieldRow}>
                  <Controller
                    name="base_price"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        label="Base price (₹)"
                        size="small"
                        type="number"
                        inputProps={{ min: 0 }}
                        error={!!errors.base_price}
                        helperText={
                          errors.base_price?.message ?? "For min hours block"
                        }
                      />
                    )}
                  />
                  <Controller
                    name="min_hours"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        label="Minimum hours"
                        size="small"
                        type="number"
                        inputProps={{ min: 1, max: 24 }}
                        error={!!errors.min_hours}
                        helperText={
                          errors.min_hours?.message ?? "Shortest booking"
                        }
                      />
                    )}
                  />
                </Box>

                <Box sx={s.fieldRow}>
                  <Controller
                    name="extra_hour_rate"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        label="Extra hour rate (₹)"
                        size="small"
                        type="number"
                        inputProps={{ min: 0 }}
                        error={!!errors.extra_hour_rate}
                        helperText={
                          errors.extra_hour_rate?.message ??
                          "Per hour beyond min"
                        }
                      />
                    )}
                  />
                  <Controller
                    name="max_hours"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        label="Max hours / day"
                        size="small"
                        type="number"
                        inputProps={{ min: 1, max: 24 }}
                        error={!!errors.max_hours}
                        helperText={
                          errors.max_hours?.message ?? "Cap per booking"
                        }
                      />
                    )}
                  />
                </Box>

                {/* Live pricing preview */}
                {basePrice > 0 && (
                  <Box sx={s.pricingPreview}>
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        color: "#3F3C38",
                        mb: "0.25rem",
                      }}
                    >
                      Price preview
                    </Typography>
                    {[minHours, minHours + 2, maxHours].map((h) => (
                      <Box
                        key={h}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "0.78rem", color: "#7A756F" }}
                        >
                          {h} hrs
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "0.78rem",
                            fontWeight: 600,
                            color: "#18181B",
                          }}
                        >
                          ₹
                          {calcPrice(
                            basePrice,
                            minHours,
                            extraHourRate,
                            h,
                          ).toLocaleString("en-IN")}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>
          }

          {/* ── Section 3: Distance pricing ────────────────────────────────── */}
          <Box sx={s.section}>
            <Box sx={s.sectionHead}>
              <Box sx={s.sectionNumber}>3</Box>
              <Typography sx={s.sectionTitle}>
                Travel / distance pricing
              </Typography>
            </Box>
            <Box sx={s.sectionBody}>
              <Typography
                sx={{ fontSize: "0.78rem", color: "#7A756F", lineHeight: 1.6 }}
              >
                Set extra charges based on how far the event is from your base
                location. Distance is calculated automatically at booking time.
              </Typography>
              <SlabEditor slabs={slabs} onChange={setSlabs} />
            </Box>
          </Box>
          {/* ── Section 4: Availability ────────────────────────────────────── */}
          {
            <Box sx={s.section}>
              <Box sx={s.sectionHead}>
                <Box sx={s.sectionNumber}>4</Box>
                <Typography sx={s.sectionTitle}>
                  Availability & rules
                </Typography>
              </Box>
              <Box sx={s.sectionBody}>
                {/* Available days */}
                <Box>
                  <Typography component="span" sx={s.fieldLabel}>
                    Available days
                  </Typography>
                  <Box sx={s.dayChips}>
                    {DAYS_OF_WEEK.map((d) => (
                      <Box
                        key={d}
                        onClick={() => toggleDay(d)}
                        sx={s.dayChip(availDays.includes(d))}
                      >
                        {d}
                      </Box>
                    ))}
                  </Box>
                  {daysError && (
                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        color: "#B91C1C",
                        mt: "0.3rem",
                      }}
                    >
                      {daysError}
                    </Typography>
                  )}
                </Box>

                {/* Advance notice */}
                <Controller
                  name="advance_notice_days"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      label="Advance notice required (days)"
                      size="small"
                      fullWidth
                      type="number"
                      inputProps={{ min: 0, max: 30 }}
                      error={!!errors.advance_notice_days}
                      helperText={
                        errors.advance_notice_days?.message ??
                        "Minimum days ahead a customer must book"
                      }
                    />
                  )}
                />

                {/* Special notes */}
                <Controller
                  name="special_notes"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Special notes (optional)"
                      size="small"
                      fullWidth
                      multiline
                      rows={2}
                      placeholder="Generator required, outdoor events only, setup needs 1 hr before event..."
                      error={!!errors.special_notes}
                      helperText={errors.special_notes?.message}
                    />
                  )}
                />
              </Box>
            </Box>
          }
        </Box>

        {/* Footer */}
        <Box sx={s.drawerFooter}>
          <Button onClick={onClose} sx={s.cancelBtn} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={saving}
            sx={s.saveBtn}
            variant="contained"
          >
            {saving ? (
              <CircularProgress size={16} color="inherit" />
            ) : isEdit ? (
              "Save changes"
            ) : (
              "Add service"
            )}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
