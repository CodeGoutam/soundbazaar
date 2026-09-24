"use client";

import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import { styles } from "./Auth.styles";

interface OtpInputProps {
  value: string; // 6-char string
  onChange: (val: string) => void;
  hasError?: boolean;
}

export default function OtpInput({ value, onChange, hasError }: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  // focus first empty box on mount
  useEffect(() => {
    refs.current[0]?.focus();
  }, []);

  const handleChange = (idx: number, char: string) => {
    const digit = char.replace(/\D/g, "").slice(-1); // keep only last digit
    const arr = value.padEnd(6, " ").split("");
    arr[idx] = digit || " ";
    const next = arr.join("").trimEnd();
    onChange(next.slice(0, 6));

    if (digit && idx < 5) {
      refs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace") {
      if (value[idx]) {
        // clear current
        const arr = value.padEnd(6, " ").split("");
        arr[idx] = " ";
        onChange(arr.join("").trimEnd());
      } else if (idx > 0) {
        // move to previous
        refs.current[idx - 1]?.focus();
        const arr = value.padEnd(6, " ").split("");
        arr[idx - 1] = " ";
        onChange(arr.join("").trimEnd());
      }
    }
    if (e.key === "ArrowLeft" && idx > 0) refs.current[idx - 1]?.focus();
    if (e.key === "ArrowRight" && idx < 5) refs.current[idx + 1]?.focus();
  };

  // handle paste of full OTP
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    onChange(pasted);
    refs.current[Math.min(pasted.length, 5)]?.focus();
  };

  return (
    <Box sx={styles.otpRow}>
      {[0, 1, 2, 3, 4, 5].map((idx) => (
        <Box
          key={idx}
          component="input"
          inputMode="numeric"
          maxLength={1}
          value={value[idx] ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(idx, e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(idx, e)
          }
          onPaste={handlePaste}
          ref={(el: HTMLInputElement | null) => {
            refs.current[idx] = el;
          }}
          sx={[
            styles.otpBox,
            hasError
              ? {
                  borderColor: "#EF4444",
                  boxShadow: "0 0 0 3px rgba(239,68,68,0.12)",
                }
              : {},
          ]}
        />
      ))}
    </Box>
  );
}
