"use client";

import {
  CalendarMonth,
  ChevronLeft,
  ChevronRight,
  AccessTime,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormLabel,
  IconButton,
  MenuItem,
  Popover,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { forwardRef, useMemo, useState } from "react";

export type DateTimeInputProps = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  name?: string;
  id?: string;
  min?: string;
  max?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const HOURS = Array.from({ length: 12 }, (_, index) => index + 1);
const MINUTES = ["00", "15", "30", "45"];

function toLocalDate(value: string) {
  return new Date(`${value}T00:00:00`);
}

function toDateValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value: string) {
  return toLocalDate(value).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatTime(value: string) {
  const [hourValue, minute = "00"] = value.split(":");
  const hour = Number(hourValue);
  return `${String(hour % 12 || 12).padStart(2, "0")}:${minute} ${hour >= 12 ? "PM" : "AM"}`;
}

function FieldShell({
  label,
  id,
  value,
  placeholder,
  icon,
  open,
  disabled,
  error,
  helperText,
  onClick,
  onBlur,
  buttonRef,
}: {
  label: string;
  id: string;
  value: string;
  placeholder: string;
  icon: React.ReactNode;
  open: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onClick: () => void;
  onBlur?: () => void;
  buttonRef: React.ForwardedRef<HTMLButtonElement>;
}) {
  return (
    <>
      <FormLabel
        htmlFor={id}
        error={error}
        sx={{
          display: "block",
          mb: "0.3rem",
          fontSize: "0.72rem",
          fontWeight: 500,
          color: "#3F3C38",
        }}
      >
        {label}
      </FormLabel>
      <Box
        component="button"
        ref={buttonRef}
        id={id}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={`Choose ${label.toLowerCase()}`}
        disabled={disabled}
        onClick={onClick}
        onBlur={onBlur}
        sx={{
          width: "100%",
          minHeight: 42,
          px: "0.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          borderRadius: "8px",
          border: "1px solid",
          borderColor: error ? "#B91C1C" : open ? "#C4893A" : "#D9D4CD",
          bgcolor: "#FDFCFB",
          boxShadow: open ? "0 0 0 3px rgba(196, 137, 58, 0.14)" : "none",
          color: value ? "#18181B" : "#9A958E",
          fontFamily: "inherit",
          fontSize: "0.9rem",
          textAlign: "left",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "border-color 0.15s, box-shadow 0.15s",
          "&:hover": disabled ? {} : { borderColor: "#C4893A" },
          "&:focus-visible": {
            outline: "none",
            borderColor: "#C4893A",
            boxShadow: "0 0 0 3px rgba(196, 137, 58, 0.14)",
          },
          "&:disabled": { bgcolor: "#F5F3EF", color: "#B0AAA3" },
        }}
      >
        <Box component="span">{value || placeholder}</Box>
        <Box
          component="span"
          sx={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            bgcolor: "#F5F3EF",
            color: "#7A756F",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
      </Box>
      {helperText && (
        <Typography
          sx={{
            mt: "0.3rem",
            fontSize: "0.7rem",
            color: error ? "#B91C1C" : "#7A756F",
          }}
        >
          {helperText}
        </Typography>
      )}
    </>
  );
}

export const DateInput = forwardRef<HTMLButtonElement, DateTimeInputProps>(
  function DateInput(
    {
      label,
      value = "",
      onChange,
      onBlur,
      name,
      id,
      min,
      max,
      disabled,
      error,
      helperText,
    },
    ref,
  ) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [viewDate, setViewDate] = useState(() =>
      value ? toLocalDate(value) : min ? toLocalDate(min) : new Date(),
    );
    const fieldId = id ?? `${name ?? "date"}-input`;
    const todayValue = toDateValue(new Date());
    const monthDays = useMemo(() => {
      const first = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
      const start = new Date(
        viewDate.getFullYear(),
        viewDate.getMonth(),
        1 - first.getDay(),
      );
      return Array.from({ length: 42 }, (_, index) => {
        const day = new Date(start);
        day.setDate(start.getDate() + index);
        return day;
      });
    }, [viewDate]);
    const effectiveMin = min !== undefined ? min : todayValue;
    const unavailable = (date: Date) => {
      const dateValue = toDateValue(date);
      return (
        (effectiveMin !== "" && dateValue < effectiveMin) ||
        (max !== undefined && max !== "" && dateValue > max)
      );
    };
    const chooseDate = (date: Date) => {
      if (unavailable(date)) return;
      onChange(toDateValue(date));
      setAnchorEl(null);
    };
    const openPicker = () => {
      setViewDate(value ? toLocalDate(value) : new Date());
      setAnchorEl(document.getElementById(fieldId) as HTMLButtonElement);
    };
    return (
      <>
        <FieldShell
          label={label}
          id={fieldId}
          value={value ? formatDate(value) : ""}
          placeholder="DD-MM-YYYY"
          icon={<CalendarMonth sx={{ fontSize: 18 }} />}
          open={Boolean(anchorEl)}
          disabled={disabled}
          error={error}
          helperText={helperText}
          onBlur={onBlur}
          onClick={openPicker}
          buttonRef={ref}
        />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          disableScrollLock
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          slotProps={{
            paper: {
              sx: {
                mt: "0.4rem",
                p: "0.85rem",
                width: 304,
                borderRadius: "10px",
                border: "1px solid #E8E4DE",
                boxShadow: "0 12px 32px rgba(24,24,27,0.14)",
              },
            },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: "0.7rem" }}
          >
            <IconButton
              aria-label="Previous month"
              size="small"
              onClick={() =>
                setViewDate(
                  (date) =>
                    new Date(date.getFullYear(), date.getMonth() - 1, 1),
                )
              }
            >
              <ChevronLeft />
            </IconButton>
            <Typography
              sx={{
                fontFamily: "Fraunces, Georgia, serif",
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#18181B",
              }}
            >
              {viewDate.toLocaleDateString("en-IN", {
                month: "long",
                year: "numeric",
              })}
            </Typography>
            <IconButton
              aria-label="Next month"
              size="small"
              onClick={() =>
                setViewDate(
                  (date) =>
                    new Date(date.getFullYear(), date.getMonth() + 1, 1),
                )
              }
            >
              <ChevronRight />
            </IconButton>
          </Stack>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              rowGap: "0.25rem",
              textAlign: "center",
            }}
          >
            {WEEKDAYS.map((day) => (
              <Typography
                key={day}
                sx={{
                  py: "0.3rem",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "#7A756F",
                }}
              >
                {day}
              </Typography>
            ))}
            {monthDays.map((day) => {
              const dateValue = toDateValue(day);
              const selected = dateValue === value;
              const isToday = dateValue === todayValue;
              const currentMonth = day.getMonth() === viewDate.getMonth();
              const isDisabled = unavailable(day);
              return (
                <Box
                  key={dateValue}
                  component="button"
                  type="button"
                  disabled={isDisabled}
                  onClick={() => chooseDate(day)}
                  sx={{
                    justifySelf: "center",
                    width: 32,
                    height: 32,
                    border: isToday && !selected ? "1px solid #C4893A" : 0,
                    borderRadius: "50%",
                    bgcolor: selected ? "#C4893A" : "transparent",
                    color: selected
                      ? "#fff"
                      : !currentMonth || isDisabled
                        ? "#C5C0B9"
                        : "#18181B",
                    font: "inherit",
                    fontSize: "0.76rem",
                    fontWeight: isToday || selected ? 700 : 400,
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    "&:hover": isDisabled
                      ? {}
                      : {
                          bgcolor: selected
                            ? "#B37930"
                            : "rgba(196,137,58,0.12)",
                          color: selected ? "#fff" : "#C4893A",
                        },
                  }}
                >
                  {day.getDate()}
                </Box>
              );
            })}
          </Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ mt: "0.8rem", pt: "0.7rem", borderTop: "1px solid #E8E4DE" }}
          >
            <Button
              size="small"
              onClick={() => {
                onChange("");
                setAnchorEl(null);
              }}
              sx={{ color: "#7A756F", textTransform: "none" }}
            >
              Clear
            </Button>
            <Button
              size="small"
              disabled={
                todayValue < (min ?? "") || todayValue > (max ?? "9999-12-31")
              }
              onClick={() => chooseDate(new Date())}
              sx={{ color: "#C4893A", textTransform: "none" }}
            >
              Today
            </Button>
          </Stack>
        </Popover>
      </>
    );
  },
);

export const TimeInput = forwardRef<HTMLButtonElement, DateTimeInputProps>(
  function TimeInput(
    {
      label,
      value = "",
      onChange,
      onBlur,
      name,
      id,
      disabled,
      error,
      helperText,
    },
    ref,
  ) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [hour, setHour] = useState("06");
    const [minute, setMinute] = useState("00");
    const [period, setPeriod] = useState("PM");
    const fieldId = id ?? `${name ?? "time"}-input`;
    const openPicker = () => {
      const match = value
        ? formatTime(value).match(/(\d{2}):(\d{2}) (AM|PM)/)
        : null;
      if (match) {
        setHour(match[1]);
        setMinute(match[2]);
        setPeriod(match[3]);
      }
      setAnchorEl(document.getElementById(fieldId) as HTMLButtonElement);
    };
    const saveTime = () => {
      let hours = Number(hour) % 12;
      if (period === "PM") hours += 12;
      onChange(`${String(hours).padStart(2, "0")}:${minute}`);
      setAnchorEl(null);
    };
    return (
      <>
        <FieldShell
          label={label}
          id={fieldId}
          value={value ? formatTime(value) : ""}
          placeholder="--:--"
          icon={<AccessTime sx={{ fontSize: 18 }} />}
          open={Boolean(anchorEl)}
          disabled={disabled}
          error={error}
          helperText={helperText}
          onBlur={onBlur}
          onClick={openPicker}
          buttonRef={ref}
        />
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          disableScrollLock
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          slotProps={{
            paper: {
              sx: {
                mt: "0.4rem",
                p: "1rem",
                width: 300,
                borderRadius: "10px",
                border: "1px solid #E8E4DE",
                boxShadow: "0 12px 32px rgba(24,24,27,0.14)",
              },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Fraunces, Georgia, serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#18181B",
              mb: "0.8rem",
            }}
          >
            Choose a start time
          </Typography>
          <Stack direction="row" spacing="0.45rem" alignItems="center">
            <Select
              value={hour}
              onChange={(event) => setHour(event.target.value)}
              size="small"
              fullWidth
            >
              {HOURS.map((item) => (
                <MenuItem key={item} value={String(item).padStart(2, "0")}>
                  {String(item).padStart(2, "0")}
                </MenuItem>
              ))}
            </Select>
            <Typography sx={{ fontWeight: 700, color: "#7A756F" }}>
              :
            </Typography>
            <Select
              value={minute}
              onChange={(event) => setMinute(event.target.value)}
              size="small"
              fullWidth
            >
              {MINUTES.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            <Select
              value={period}
              onChange={(event) => setPeriod(event.target.value)}
              size="small"
              sx={{ minWidth: 76 }}
            >
              <MenuItem value="AM">AM</MenuItem>
              <MenuItem value="PM">PM</MenuItem>
            </Select>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ mt: "1rem", pt: "0.8rem", borderTop: "1px solid #E8E4DE" }}
          >
            <Button
              size="small"
              onClick={() => {
                onChange("");
                setAnchorEl(null);
              }}
              sx={{ color: "#7A756F", textTransform: "none" }}
            >
              Clear
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={saveTime}
              sx={{
                bgcolor: "#C4893A",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": { bgcolor: "#B37930", boxShadow: "none" },
              }}
            >
              Done
            </Button>
          </Stack>
        </Popover>
      </>
    );
  },
);
