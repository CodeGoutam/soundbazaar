"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { BusinessCenterOutlined, PersonOutline } from "@mui/icons-material";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "@/components/AuthLayout/AuthLayout";
import OtpInput from "./OtpInput";
import { styles } from "./Auth.styles";
import { MobileFormData, mobileSchema } from "./authFormConfig";
import { CheckIcon } from "@/components/Icons/CheckIcon";

// ─── Types ────────────────────────────────────────────────────────────────────
type UserType = "customer" | "provider";
type Step = "mobile" | "otp";

// ─── Benefits ─────────────────────────────────────────────────────────────────
const BENEFITS = {
  customer: [
    {
      title: "Browse verified providers",
      sub: "Filter by city, budget, and equipment type.",
    },
    {
      title: "Secure token booking",
      sub: "Funds held in escrow until your event is done.",
    },
    {
      title: "Confirmed on a call",
      sub: "Speak with your provider before the event.",
    },
  ],
  provider: [
    {
      title: "Get more bookings",
      sub: "Customers find and book you — no cold calls.",
    },
    {
      title: "Guaranteed payment",
      sub: "Token system protects your earnings upfront.",
    },
    {
      title: "Your own dashboard",
      sub: "Manage services, track earnings, view reviews.",
    },
  ],
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function AuthPage() {
  const [userType, setUserType] = useState<UserType>("customer");
  const [step, setStep] = useState<Step>("mobile");
  const [mobile, setMobile] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const mobileForm = useForm<MobileFormData>({
    resolver: zodResolver(mobileSchema),
    defaultValues: { mobile: "" },
  });

  // ── Resend countdown ───────────────────────────────────────────────────────
  useEffect(() => {
    if (step !== "otp") return;
    setResendTimer(30);
    setCanResend(false);
    const id = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) {
          clearInterval(id);
          setCanResend(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [step]);

  // ── Send OTP ───────────────────────────────────────────────────────────────
  const handleMobileSubmit = async ({ mobile: mob }: MobileFormData) => {
    setError("");
    setLoading(true);
    try {
      setMobile(mob);
      // TODO: POST /auth/send-otp { mobile: mob, userType }
      // Backend creates account if new, logs in if existing
      setStep("otp");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  // ── Verify OTP ─────────────────────────────────────────────────────────────
  const handleOtpSubmit = async () => {
    if (otpValue.length < 6) {
      setError("Please enter the complete 6-digit OTP");
      return;
    }
    setError("");
    setLoading(true);
    try {
      // TODO: POST /auth/verify-otp { mobile, otp: otpValue, userType }
      // Response: { token, isNewUser, userType }
      // if (isNewUser && userType === "provider") → /provider/onboard
      // if (isNewUser && userType === "customer")  → /search (profile filled lazily)
      // if (!isNewUser)                            → /dashboard or /search
      // const redirect =
      //   userType === "provider"
      //     ? `/${locale}/provider/onboard`
      //     : `/${locale}/search`;
      // router.push(redirect);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid OTP. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  // ── Resend OTP ─────────────────────────────────────────────────────────────
  const handleResend = async () => {
    if (!canResend) return;
    setOtpValue("");
    setError("");
    try {
      // TODO: POST /auth/send-otp { mobile, userType }
      setResendTimer(30);
      setCanResend(false);
    } catch {
      setError("Failed to resend OTP");
    }
  };

  // ── Left panel ─────────────────────────────────────────────────────────────
  const leftContent = (
    <Box sx={styles.leftBody}>
      <Typography sx={styles.eyebrow}>
        {userType === "customer"
          ? "For event planners"
          : "For sound professionals"}
      </Typography>

      <Typography sx={styles.leftTitle}>
        {userType === "customer" ? (
          <>
            <span>Your event.</span>
            <br />
            <em>Perfect sound.</em>
            <br />
            <span>Guaranteed.</span>
          </>
        ) : (
          <>
            <span>More bookings.</span>
            <br />
            <em>Less hustle.</em>
            <br />
            <span>Start today.</span>
          </>
        )}
      </Typography>

      <Typography sx={styles.leftSub}>
        {userType === "customer"
          ? "Find and book trusted sound providers for any event — transparently, securely, in minutes."
          : "Join our platform and let customers find you. Zero cold calls, guaranteed payments, full control."}
      </Typography>

      <Box sx={styles.benefits}>
        {BENEFITS[userType].map((b, i) => (
          <Box key={i} sx={styles.benefit}>
            <Box sx={styles.benefitCheck}>
              <CheckIcon />
            </Box>
            <Box>
              <Typography sx={styles.benefitTitle}>{b.title}</Typography>
              <Typography sx={styles.benefitSub}>{b.sub}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );

  // ── Right panel ────────────────────────────────────────────────────────────
  const rightContent = (
    <Box sx={styles.formWrap}>
      {/* Header — same for signin and signup, backend handles the difference */}
      <Box sx={styles.formHead}>
        <Box sx={styles.progress}>
          <Typography sx={styles.progressText}>
            {step === "mobile" ? "Secure access" : "Almost there"}
          </Typography>
          <Box sx={styles.progressDots} aria-label={`Step ${step === "mobile" ? 1 : 2} of 2`}>
            <Box sx={[styles.progressDot, styles.progressDotActive]} />
            <Box sx={[styles.progressDot, step === "otp" && styles.progressDotActive]} />
          </Box>
        </Box>
        <Typography sx={styles.formLabel}>
          {step === "mobile" ? "Welcome" : "Verify mobile"}
        </Typography>
        <Typography sx={styles.formTitle}>
          {step === "mobile" ? "Enter your number" : "Enter OTP"}
        </Typography>
        <Box sx={styles.rule} />
        <Typography sx={styles.formSub}>
          {step === "mobile"
            ? "New or returning — just enter your number and we'll handle the rest."
            : `We sent a 6-digit OTP to +91 ${mobile}.`}
        </Typography>
      </Box>

      {/* Error */}
      {error && (
        <Box sx={styles.error}>
          <Box
            component="svg"
            sx={{ width: 15, height: 15, flexShrink: 0, mt: "1px" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </Box>
          <Typography sx={{ fontSize: "0.82rem" }}>{error}</Typography>
        </Box>
      )}

      {/* ── STEP 1: Mobile ───────────────────────────────────────────────── */}
      {step === "mobile" && (
        <>
          {/* User type toggle — only needed so backend knows what to create for new users */}
          <Box sx={styles.toggle}>
            {(["customer", "provider"] as UserType[]).map((t) => (
              <Button
                key={t}
                startIcon={
                  t === "customer" ? (
                    <PersonOutline fontSize="small" />
                  ) : (
                    <BusinessCenterOutlined fontSize="small" />
                  )
                }
                onClick={() => {
                  setUserType(t);
                  setError("");
                }}
                sx={[
                  styles.toggleBtn,
                  userType === t && styles.toggleBtnActive,
                ]}
              >
                {t === "customer" ? "Customer" : "Provider"}
              </Button>
            ))}
          </Box>
          <Typography sx={styles.roleHint}>
            {userType === "customer"
              ? "I want to find and book sound services for an event."
              : "I want to list my sound services and receive bookings."}
          </Typography>

          <Box
            component="form"
            onSubmit={mobileForm.handleSubmit(handleMobileSubmit)}
            sx={styles.form}
          >
            <Controller
              name="mobile"
              control={mobileForm.control}
              render={({ field, fieldState }) => (
                <Box sx={styles.mobileWrap}>
                  <Box sx={styles.mobilePrefix}>🇮🇳 +91</Box>
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    label="Mobile number"
                    type="tel"
                    placeholder="Enter 10-digit number"
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    inputProps={{ maxLength: 10, inputMode: "numeric" }}
                    autoFocus
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#18181B",
                        backgroundColor: "#FFFFFF",
                        borderRadius: "8px",
                        "& fieldset": {
                          borderColor: "#D4D4D8",
                        },
                        "&:hover fieldset": {
                          borderColor: "#A1A1AA",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C4893A",
                          borderWidth: "1.5px",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#71717A",
                        "&.Mui-focused": {
                          color: "#C4893A",
                        },
                      },
                      "& .MuiInputBase-input": {
                        fontSize: "0.92rem",
                        fontWeight: 500,
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#A1A1AA",
                        opacity: 1,
                      },
                    }}
                  />
                </Box>
              )}
            />

            <Button type="submit" disabled={loading} sx={styles.submit}>
              {loading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                "Continue with Mobile →"
              )}
            </Button>
          </Box>
          <Typography sx={styles.footerText}>
            By continuing, you agree to SoundBazaar's{" "}
            <Box component="span" sx={styles.footerLink}>
              Terms of Service
            </Box>{" "}
            and{" "}
            <Box component="span" sx={styles.footerLink}>
              Privacy Policy
            </Box>
            .
          </Typography>
        </>
      )}

      {/* ── STEP 2: OTP ──────────────────────────────────────────────────── */}
      {step === "otp" && (
        <>
          <Box sx={styles.infoBox}>
            OTP sent to <strong>+91 {mobile}</strong>. Check your SMS messages.
          </Box>

          <OtpInput
            value={otpValue}
            onChange={(v) => {
              setOtpValue(v);
              setError("");
            }}
            hasError={!!error}
          />

          <Box sx={styles.resendRow}>
            <Typography sx={{ fontSize: "0.8rem", color: "#71717A" }}>
              {canResend ? "Didn't receive code?" : `Resend code in ${resendTimer}s`}
            </Typography>
            <Box
              component="button"
              disabled={!canResend}
              onClick={handleResend}
              sx={styles.resendBtn}
            >
              Resend OTP
            </Box>
          </Box>

          <Button
            onClick={handleOtpSubmit}
            disabled={loading || otpValue.length < 6}
            sx={styles.submit}
          >
            {loading ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              "Verify & Continue →"
            )}
          </Button>

          <Button
            onClick={() => {
              setStep("mobile");
              setError("");
              setOtpValue("");
            }}
            sx={{
              color: "#71717A",
              fontSize: "0.82rem",
              textTransform: "none",
              fontWeight: 500,
              mt: "-0.25rem",
              "&:hover": { color: "#18181B", bgcolor: "transparent" },
            }}
          >
            ← Change phone number
          </Button>
        </>
      )}
    </Box>
  );

  return <AuthLayout leftContent={leftContent} rightContent={rightContent} />;
}
