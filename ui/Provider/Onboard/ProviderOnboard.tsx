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
  description: string;
  address: string;
  profilePhoto: File | null;
  portfolioPhotos: File[];
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProviderOnboardPage() {
  const router = useRouter();
  const theme = useTheme();

  const { locale } = useParams() as { locale: string };
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const [step, setStep] = useState<Step>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    ownerName: "",
    businessName: "",
    description: "",
    address: "",
    profilePhoto: null,
    portfolioPhotos: [],
  });

  const set = (key: keyof FormData, value: unknown) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  // ── Validation ─────────────────────────────────────────────────────────────
  const validate = (): string => {
    if (step === 0) {
      if (!form.ownerName.trim()) return "Please enter your name";
      if (!form.businessName.trim()) return "Please enter your business name";
    }
    if (step === 1) {
      if (!form.description.trim()) return "Please add a business description";
      if (!form.address.trim()) return "Please enter your business address";
    }
    return "";
  };

  // ── Next / submit ──────────────────────────────────────────────────────────
  const handleNext = async () => {
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setError("");
    if (step < 2) {
      setStep((s) => (s + 1) as Step);
      return;
    }
    setLoading(true);
    try {
      // TODO: POST /provider/onboard with multipart/form-data
      router.push(`/${locale}/dashboard` as Route);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Onboarding failed. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={styles.root(isMobile)}>
      <Box sx={styles.inner}>
        {/* Page header */}
        <Box sx={styles.pageHeader}>
          <Typography sx={styles.eyebrow}>Provider setup</Typography>
          <Typography sx={styles.pageTitle}>Set up your profile</Typography>
          <Typography sx={styles.pageSub}>
            Complete your profile so customers can find and trust you. Takes
            less than 2 minutes.
          </Typography>
        </Box>

        {/* Step bar */}
        <StepBar activeStep={step} steps={["Identity", "About", "Photos"]} />

        {/* Card */}
        <Box sx={styles.card}>
          {/* Card header */}
          <Box>
            <Typography sx={styles.cardTitle}>
              {step === 0
                ? "Who are you?"
                : step === 1
                  ? "About your business"
                  : "Add photos"}
            </Typography>
            <Typography sx={styles.cardSub}>
              {step === 0
                ? "Your name and business name is how customers will find you."
                : step === 1
                  ? "A good description and your location help customers decide."
                  : "Photos build trust. Profile photo is recommended, portfolio is optional."}
            </Typography>
          </Box>

          <Box sx={styles.divider} />

          {/* Error */}
          {error && (
            <Box sx={styles.error}>
              <ErrorIcon sx={styles.errorIcon} />
              <Typography sx={styles.errorText}>{error}</Typography>
            </Box>
          )}

          {/* ── STEP 0: Identity ─────────────────────────────────────────── */}
          {step === 0 && (
            <Box sx={styles.fieldStack}>
              <TextField
                fullWidth
                size="small"
                label="Your name"
                placeholder="Rahul Sharma"
                value={form.ownerName}
                onChange={(e) => set("ownerName", e.target.value)}
                autoFocus
              />
              <TextField
                fullWidth
                size="small"
                label="Business name"
                placeholder="Rahul Sound Systems"
                value={form.businessName}
                onChange={(e) => set("businessName", e.target.value)}
              />
            </Box>
          )}

          {/* ── STEP 1: About ────────────────────────────────────────────── */}
          {step === 1 && (
            <Box sx={styles.fieldStack}>
              <Box>
                <TextField
                  fullWidth
                  size="small"
                  label="Business description"
                  placeholder="Describe your services, experience, and what makes you stand out..."
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  multiline
                  rows={4}
                  inputProps={{ maxLength: 400 }}
                />
                <Typography sx={styles.charCount}>
                  {form.description.length} / 400
                </Typography>
              </Box>
              <TextField
                fullWidth
                size="small"
                label="Business address"
                placeholder="Sector 14, Gurugram, Haryana"
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
              />
            </Box>
          )}

          {/* ── STEP 2: Photos ───────────────────────────────────────────── */}
          {step === 2 && (
            <Box sx={styles.photoSection}>
              {/* Profile photo */}
              <Box>
                <Typography sx={styles.photoLabel}>
                  Profile photo
                  <Typography component="span" sx={styles.photoLabelSuffix}>
                    recommended
                  </Typography>
                </Typography>
                <Typography sx={styles.photoHint}>
                  A clear face or logo photo. Increases bookings significantly.
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
                      ? "✓ Photo uploaded"
                      : "Click to upload.\nJPG or PNG, at least 400×400px."}
                  </Typography>
                </Box>
              </Box>

              <Box sx={styles.divider} />

              {/* Portfolio */}
              <Box>
                <Typography sx={styles.photoLabel}>
                  Portfolio photos
                  <Typography component="span" sx={styles.photoLabelSuffix}>
                    up to 5, optional
                  </Typography>
                </Typography>
                <Typography sx={styles.photoHint}>
                  Event setups, equipment shots, past work — anything that shows
                  what you do.
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

          {/* Actions */}
          <Box sx={styles.actions}>
            <Box sx={styles.actionRow}>
              {step > 0 && (
                <Button
                  onClick={() => {
                    setStep((s) => (s - 1) as Step);
                    setError("");
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
                  "Continue"
                ) : (
                  "Complete Setup"
                )}
              </Button>
            </Box>

            {step === 2 && (
              <Button
                component={Link}
                href={`/${locale}/dashboard`}
                sx={styles.skipBtn}
              >
                Skip photos — I'll add them later
              </Button>
            )}
          </Box>
        </Box>

        <Typography sx={styles.footerNote}>
          You can edit all of this anytime from your dashboard.
        </Typography>
      </Box>
    </Box>
  );
}
