"use client";

import { Box, Typography, Button, Slider, Divider } from "@mui/material";
import { filterStyles as s } from "./Filters.styles";
import {
  SearchFilters,
  SERVICE_TYPES,
  RATING_OPTIONS,
  CITIES,
} from "../../../../types/Search.types";

interface FilterPanelProps {
  filters: SearchFilters;
  onChange: (f: SearchFilters) => void;
  onApply?: () => void;
  activeCount: number;
}

export default function FilterPanel({
  filters,
  onChange,
  onApply,
  activeCount,
}: FilterPanelProps) {
  const reset = () =>
    onChange({
      type: "all",
      maxPrice: 100000,
      minRating: 0,
      city: "all",
      sortBy: "rating",
    });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {/* ── Category Filter Section (Hidden as requested) ─────────────────── */}
      {/* 
      <Box sx={s.section}>
        <Typography component="span" sx={s.sectionLabel}>
          Category
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {SERVICE_TYPES.map((t) => {
            const active = filters.type === t.val;
            return (
              <Button
                key={t.val}
                onClick={() => onChange({ ...filters, type: t.val })}
                sx={s.typeBtn(active)}
                disableRipple={false}
              >
                <Box
                  sx={[
                    s.typeBtnIcon,
                    {
                      bgcolor: active ? "rgba(196,137,58,0.14)" : "#F5F3EF",
                    },
                  ]}
                >
                  {t.icon}
                </Box>
                {t.label}
              </Button>
            );
          })}
        </Box>
      </Box>

      <Divider sx={s.divider} />
      */}

      {/* ── Max price ─────────────────────────────────────────────────────── */}
      <Box sx={s.section}>
        <Box sx={s.priceRow}>
          <Typography component="span" sx={s.sectionLabel}>
            Max price
          </Typography>
          <Typography sx={s.priceValue}>
            ₹{filters.maxPrice.toLocaleString("en-IN")}
          </Typography>
        </Box>
        <Slider
          min={1000}
          max={100000}
          step={1000}
          value={filters.maxPrice}
          onChange={(_, v) => onChange({ ...filters, maxPrice: v as number })}
          sx={s.sliderSx}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ fontSize: "0.68rem", color: "#B0AAA3" }}>
            ₹1K
          </Typography>
          <Typography sx={{ fontSize: "0.68rem", color: "#B0AAA3" }}>
            ₹1L
          </Typography>
        </Box>
      </Box>

      <Divider sx={s.divider} />

      {/* ── Min rating ────────────────────────────────────────────────────── */}
      <Box sx={s.section}>
        <Typography component="span" sx={s.sectionLabel}>
          Min rating
        </Typography>
        <Box sx={s.ratingChips}>
          {RATING_OPTIONS.map((r) => {
            const active = filters.minRating === r.val;
            return (
              <Box
                key={r.val}
                onClick={() => onChange({ ...filters, minRating: r.val })}
                sx={s.ratingChip(active)}
              >
                {r.label}
              </Box>
            );
          })}
        </Box>
      </Box>

      <Divider sx={s.divider} />

      {/* ── City ──────────────────────────────────────────────────────────── */}
      <Box sx={s.section}>
        <Typography component="span" sx={s.sectionLabel}>
          City
        </Typography>
        <Box sx={s.cityChips}>
          {CITIES.map((c) => {
            const active = filters.city === c;
            return (
              <Box
                key={c}
                onClick={() => onChange({ ...filters, city: c })}
                sx={s.cityChip(active)}
              >
                {c === "all" ? "All cities" : c}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* ── Reset ─────────────────────────────────────────────────────────── */}
      {activeCount > 0 && (
        <Button onClick={reset} sx={s.resetBtn} disableRipple>
          Reset all filters ({activeCount})
        </Button>
      )}

      {/* Mobile apply */}
      {onApply && (
        <Button onClick={onApply} sx={s.applyBtn}>
          Show Results
        </Button>
      )}
    </Box>
  );
}
