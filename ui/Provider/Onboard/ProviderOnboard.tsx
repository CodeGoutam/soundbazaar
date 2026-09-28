"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { StepBar } from "@/components/StepsBar/StepsBar";
import { PhotoTile } from "@/components/PhotoTile/PhotoTile";
import { styles } from "./ProviderOnboard.styles";
import Link from "next/link";
import { Route } from "next";

// ─── Types ────────────────────────────────────────────────────────────────────
type Step = 0 | 1 | 2;

interface FormData {
  ownerName: string;
  businessName: string;
  category: "sound" | "dj" | "both";
  tagline: string;
  description: string;
  address: string;
  profilePhoto: File | null;
  portfolioPhotos: File[];
}

const CATEGORIES = [
  { val: "sound", label: "Sound System", icon: "🔊" },
  { val: "dj", label: "DJ Setup", icon: "🎧" },
  { val: "both", label: "Sound + DJ", icon: "🎵" },
] as const;

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProviderOnboardPage() {
  const router = useRouter();
  const theme = useTheme();

  const { locale } = useParams() as { locale: string };
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [step, setStep] = useState<Step>(0);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");

  const [form, setForm] = useState<FormData>({
    ownerName: "",
    businessName: "",
    category: "dj",
    tagline: "",
    description: "",
    address: "",
    profilePhoto: null,
    portfolioPhotos: [],
  });

  const set = (key: keyof FormData, value: unknown) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // clear the error for this field on change
    setFieldErrors((prev) => ({ ...prev, [key]: "" }));
  };

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = (): Record<string, string> => {
    const errors: Record<string, string> = {};
    if (step === 0) {
      if (!form.ownerName.trim()) errors.ownerName = "Please enter your name";
      if (!form.businessName.trim())
        errors.businessName = "Please enter your business name";
    }
    if (step === 1) {
      if (!form.description.trim())
        errors.description = "Please add a business description";
      if (!form.address.trim())
        errors.address = "Please enter your business address";
    }
    return errors;
  };

  // ── Next / submit ──────────────────────────────────────────────────────────
  const handleNext = async () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setSubmitError("");
    if (step < 2) {
      setStep((s) => (s + 1) as Step);
      return;
    }
    setLoading(true);
    try {
      // TODO: POST /provider/onboard with multipart/form-data
      router.push(`/${locale}/dashboard` as Route);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Onboarding failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const selectedCategory =
    CATEGORIES.find((c) => c.val === form.category) ?? CATEGORIES[1];

  return (
    <Box sx={styles.root(isMobile)}>
      <Box sx={styles.container}>
        {/* Page header */}
        <Box sx={styles.pageHeader}>
          <Box sx={styles.eyebrowWrap}>
            <Typography sx={styles.eyebrow}>Provider Setup</Typography>
            <Typography sx={styles.progressText}>
              Step {step + 1} of 3 ·{" "}
              {step === 0 ? "33%" : step === 1 ? "66%" : "100%"} Complete
            </Typography>
          </Box>

          <Typography sx={styles.pageTitle}>
            Create your SoundBazaar business listing
          </Typography>
          <Typography sx={styles.pageSub}>
            Complete your profile to showcase your equipment and start receiving
            direct booking requests.
          </Typography>
        </Box>

        {/* ── Two-column grid ────────────────────────────────────────────────── */}
        <Box sx={styles.gridWrap}>
          {/* Left Column: Form Wizard */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* Step bar */}
            <StepBar
              activeStep={step}
              steps={["Identity", "Business", "Photos"]}
            />

            {/* Card */}
            <Box sx={styles.card}>
              {/* Card header */}
              <Box>
                <Typography sx={styles.cardTitle}>
                  {step === 0
                    ? "Who are you & what do you offer?"
                    : step === 1
                      ? "Describe your business & location"
                      : "Add profile & portfolio photos"}
                </Typography>
                <Typography sx={styles.cardSub}>
                  {step === 0
                    ? "Your business name and main service category is how customers discover you."
                    : step === 1
                      ? "A detailed description and accurate location help organizers book with confidence."
                      : "Profiles with real event photos receive 3x more token bookings."}
                </Typography>
              </Box>

              <Box sx={styles.divider} />

              {/* Submit Error (API failures only) */}
              {submitError && (
                <Box sx={styles.error}>
                  <ErrorIcon sx={styles.errorIcon} />
                  <Typography sx={styles.errorText}>{submitError}</Typography>
                </Box>
              )}

              {/* ── STEP 0: Identity & Category ────────────────────────────── */}
              {step === 0 && (
                <Box sx={styles.fieldStack}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Your full name"
                    placeholder="e.g. Rahul Sharma"
                    value={form.ownerName}
                    onChange={(e) => set("ownerName", e.target.value)}
                    required
                    error={!!fieldErrors.ownerName}
                    helperText={fieldErrors.ownerName}
                    autoFocus
                  />
                  <TextField
                    fullWidth
                    size="small"
                    label="Business / Brand name"
                    placeholder="e.g. Rahul Sound Systems"
                    value={form.businessName}
                    onChange={(e) => set("businessName", e.target.value)}
                    required
                    error={!!fieldErrors.businessName}
                    helperText={fieldErrors.businessName}
                  />

                  {/* Primary Service Category */}
                  <Box>
                    <Typography sx={styles.categoryLabel}>
                      Primary service category *
                    </Typography>
                    <Box sx={styles.categoryGrid}>
                      {CATEGORIES.map((cat) => {
                        const active = form.category === cat.val;
                        return (
                          <Box
                            key={cat.val}
                            onClick={() => set("category", cat.val)}
                            sx={styles.categoryChip(active)}
                          >
                            <Box sx={styles.categoryIcon}>{cat.icon}</Box>
                            <Typography sx={styles.categoryText(active)}>
                              {cat.label}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              )}

              {/* ── STEP 1: About & Location ───────────────────────────────── */}
              {step === 1 && (
                <Box sx={styles.fieldStack}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Short headline / tagline (optional)"
                    placeholder="e.g. 2000W JBL Sound & DJ Setup for 300+ guests"
                    value={form.tagline}
                    onChange={(e) => set("tagline", e.target.value)}
                  />

                  <Box>
                    <TextField
                      fullWidth
                      size="small"
                      label="Business description"
                      placeholder="Describe your equipment specs, event experience, and what makes your setup stand out..."
                      value={form.description}
                      onChange={(e) => set("description", e.target.value)}
                      multiline
                      rows={4}
                      inputProps={{ maxLength: 400 }}
                      required
                      error={!!fieldErrors.description}
                      helperText={fieldErrors.description}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        mt: "0.3rem",
                      }}
                    >
                      <Typography sx={styles.charCount}>
                        {form.description.length} / 400
                      </Typography>
                    </Box>
                  </Box>

                  <TextField
                    fullWidth
                    size="small"
                    label="Business address / area"
                    placeholder="e.g. Sector 14, Main Market, Gurugram"
                    value={form.address}
                    onChange={(e) => set("address", e.target.value)}
                    required
                    error={!!fieldErrors.address}
                    helperText={fieldErrors.address}
                  />
                </Box>
              )}

              {/* ── STEP 2: Photos & Showcase ──────────────────────────────── */}
              {step === 2 && (
                <Box sx={styles.photoSection}>
                  {/* Profile photo */}
                  <Box sx={styles.photoBlock}>
                    <Typography sx={styles.photoLabel}>
                      Profile / Logo photo
                      <Typography component="span" sx={styles.photoLabelSuffix}>
                        recommended
                      </Typography>
                    </Typography>
                    <Typography sx={styles.photoHint}>
                      Upload your logo or a professional photo. Increases
                      organizer responses.
                    </Typography>
                    <Box sx={styles.profilePhotoRow}>
                      <PhotoTile
                        isProfile
                        file={form.profilePhoto}
                        onAdd={(f) => set("profilePhoto", f)}
                        onRemove={() => set("profilePhoto", null)}
                      />
                      <Typography
                        sx={styles.profilePhotoStatus(!!form.profilePhoto)}
                      >
                        {form.profilePhoto
                          ? "✓ Logo / Photo uploaded"
                          : "Click circle to upload.\nSupports JPG or PNG format."}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Portfolio */}
                  <Box sx={styles.photoBlock}>
                    <Typography sx={styles.photoLabel}>
                      Portfolio & equipment photos
                      <Typography component="span" sx={styles.photoLabelSuffix}>
                        up to 5, optional
                      </Typography>
                    </Typography>
                    <Typography sx={styles.photoHint}>
                      Add photos of stage setups, DJ consoles, speaker rigs, or
                      lighting setups.
                    </Typography>
                    <Box sx={styles.portfolioGrid}>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <PhotoTile
                          key={i}
                          file={form.portfolioPhotos[i] ?? null}
                          onAdd={(f) => {
                            const arr = [...form.portfolioPhotos];
                            arr[i] = f;
                            set("portfolioPhotos", arr);
                          }}
                          onRemove={() => {
                            const arr = [...form.portfolioPhotos];
                            arr.splice(i, 1);
                            set("portfolioPhotos", arr);
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Box>
              )}

              {/* Action Buttons */}
              <Box sx={styles.actions}>
                <Box sx={styles.actionRow}>
                  {step > 0 && (
                    <Button
                      onClick={() => {
                        setStep((s) => (s - 1) as Step);
                        setFieldErrors({});
                      }}
                      sx={styles.backBtn}
                    >
                      ← Back
                    </Button>
                  )}
                  <Button
                    onClick={handleNext}
                    disabled={loading}
                    fullWidth
                    sx={styles.submitBtn}
                  >
                    {loading ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : step < 2 ? (
                      "Continue →"
                    ) : (
                      "Complete & Launch Profile"
                    )}
                  </Button>
                </Box>

                {step === 2 && (
                  <Button
                    component={Link}
                    href={`/${locale}/dashboard`}
                    sx={styles.skipBtn}
                  >
                    Skip photos — I&apos;ll add them later from dashboard
                  </Button>
                )}
              </Box>
            </Box>

            <Typography sx={styles.footerNote}>
              You can edit all details anytime from your SoundBazaar provider
              dashboard.
            </Typography>
          </Box>

          {/* Right Column: Live Interactive Listing Preview & Trust Highlights */}
          <Box sx={styles.previewCol}>
            {/* Live Profile Card Preview */}
            <Box sx={styles.previewBox}>
              <Box sx={styles.previewHeader}>
                <Typography sx={styles.previewTitle}>
                  Live Listing Preview
                </Typography>
                <Box sx={styles.previewBadge}>
                  <Box sx={styles.previewLiveDot} />
                  Live Preview
                </Box>
              </Box>

              <Box sx={styles.previewCardMock}>
                <Box sx={styles.previewCardHead}>
                  <Box sx={styles.previewCategoryBadge}>
                    {selectedCategory.icon} {selectedCategory.label}
                  </Box>
                  <Typography sx={styles.previewBusinessName}>
                    {form.businessName.trim() || "Your Business Name"}
                  </Typography>
                  <Typography sx={styles.previewOwnerName}>
                    by {form.ownerName.trim() || "Your Name"}
                  </Typography>
                </Box>

                <Box sx={styles.previewCardBody}>
                  {form.tagline && (
                    <Typography
                      sx={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#C4893A",
                      }}
                    >
                      {form.tagline}
                    </Typography>
                  )}
                  <Typography
                    sx={styles.previewDesc}
                    noWrap={!form.description}
                  >
                    {form.description.trim() ||
                      "Your business description will appear here so event organizers can read about your gear and experience."}
                  </Typography>
                  {form.address.trim() && (
                    <Typography sx={styles.previewLocation}>
                      <LocationOnIcon sx={{ fontSize: 13, color: "#C4893A" }} />
                      {form.address}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>

            {/* Provider Trust Highlights Panel */}
            <Box sx={styles.trustCard}>
              <Typography sx={styles.trustTitle}>
                Why onboard on SoundBazaar?
              </Typography>
              <Box sx={styles.trustList}>
                <Box sx={styles.trustItem}>
                  <Box sx={styles.trustIcon}>⚡</Box>
                  <Box>
                    <Typography sx={styles.trustItemTitle}>
                      100% Free Listing
                    </Typography>
                    <Typography sx={styles.trustItemSub}>
                      No upfront subscriptions or monthly listing fees.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={styles.trustItem}>
                  <Box sx={styles.trustIcon}>🛡️</Box>
                  <Box>
                    <Typography sx={styles.trustItemTitle}>
                      Guaranteed Token Payments
                    </Typography>
                    <Typography sx={styles.trustItemSub}>
                      Customers pay an upfront token deposit to confirm
                      bookings.
                    </Typography>
                  </Box>
                </Box>

                <Box sx={styles.trustItem}>
                  <Box sx={styles.trustIcon}>📞</Box>
                  <Box>
                    <Typography sx={styles.trustItemTitle}>
                      Direct Event Confirmations
                    </Typography>
                    <Typography sx={styles.trustItemSub}>
                      Connect directly with clients to finalize event specifics.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
