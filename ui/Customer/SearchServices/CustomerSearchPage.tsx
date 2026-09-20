"use client";

import { useState, useCallback, useMemo } from "react";
import { Box, Typography, Button, Select, MenuItem } from "@mui/material";
import { Tune } from "@mui/icons-material";

import {
  SearchFilters,
  DEFAULT_FILTERS,
  SORT_OPTIONS,
  SERVICE_TYPES,
  DUMMY_SERVICES,
  ServiceWithProvider,
} from "../../../types/Search.types";
import { pageStyles as s } from "./Search.styles";
import FilterPanel from "./FilterPanel/FilterPanel";
import { SkeletonCard } from "./SkeletonCard";
import { FilterSheet } from "./FilterPanel/FilterSheet";
import ServiceCard from "./ServiceCard/ServiceCard";

// ─── Main page ────────────────────────────────────────────────────────────────
export default function CustomerSearchPage() {
  const [services] = useState<ServiceWithProvider[]>(DUMMY_SERVICES);
  const [loading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleFilterChange = useCallback(
    (f: SearchFilters) => setFilters(f),
    [],
  );

  const handleCategorySelect = (typeVal: string) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type === typeVal && typeVal !== "all" ? "all" : typeVal,
    }));
  };

  // ── Active filter count (for badge) ────────────────────────────────────────
  const activeCount = useMemo(
    () =>
      [
        filters.type !== "all",
        filters.maxPrice < 100000,
        filters.minRating > 0,
        filters.city !== "all",
      ].filter(Boolean).length,
    [filters],
  );

  // ── Filter + sort services ─────────────────────────────────────────────────
  const filtered = useMemo(() => {
    let result = services.filter(
      (s) =>
        s.base_price <= filters.maxPrice &&
        s.provider.average_rating >= filters.minRating &&
        (filters.type === "all" || s.equipment_type === filters.type) &&
        (filters.city === "all" || s.provider.city === filters.city),
    );

    switch (filters.sortBy) {
      case "price_asc":
        result = [...result].sort((a, b) => a.base_price - b.base_price);
        break;
      case "price_desc":
        result = [...result].sort((a, b) => b.base_price - a.base_price);
        break;
      case "rating":
        result = [...result].sort(
          (a, b) => b.provider.average_rating - a.provider.average_rating,
        );
        break;
      case "bookings":
        result = [...result].sort(
          (a, b) => b.provider.total_bookings - a.provider.total_bookings,
        );
        break;
    }

    return result;
  }, [services, filters]);

  return (
    <Box sx={s.root}>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <Box sx={s.hero}>
        <Box sx={s.heroEyebrow}>Curated Event Sound & Stage Gear</Box>
        <Typography sx={s.heroTitle}>
          Find & Book Verified
          <br />
          <Box component="em" sx={s.heroTitleAccent}>
            Sound, DJ & Lighting Systems
          </Box>
        </Typography>
        <Typography sx={s.heroSub}>
          Transparent pricing · Verified equipment & audio engineers · Fast
          booking
        </Typography>
      </Box>

      {/* ── Quick Category Filter Chips (Hidden as requested) ────────────────── */}
      {/* 
      <Box sx={s.categoryBar}>
        {SERVICE_TYPES.map((cat) => {
          const isActive = filters.type === cat.val;
          return (
            <Box
              key={cat.val}
              sx={{
                ...s.categoryChip,
                ...(isActive && s.categoryChipActive),
              }}
              onClick={() => handleCategorySelect(cat.val)}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </Box>
          );
        })}
      </Box>
      */}

      {/* ── Layout ────────────────────────────────────────────────────────── */}
      <Box sx={s.layoutWrap}>
        {/* ── Desktop sidebar ──────────────────────────────────────────────── */}
        <Box sx={s.sidebar}>
          <Box sx={s.sidebarCard}>
            <Box sx={s.sidebarHead}>
              <Typography sx={s.sidebarHeadTitle}>Refine Search</Typography>
              {activeCount > 0 && (
                <Button
                  onClick={() => handleFilterChange(DEFAULT_FILTERS)}
                  sx={{
                    fontSize: "0.72rem",
                    color: "#DC2626",
                    textTransform: "none",
                    fontWeight: 600,
                    p: 0,
                    minWidth: 0,
                    "&:hover": {
                      bgcolor: "transparent",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Reset ({activeCount})
                </Button>
              )}
            </Box>
            <Box sx={s.sidebarBody}>
              <FilterPanel
                filters={filters}
                onChange={handleFilterChange}
                activeCount={activeCount}
              />
            </Box>
          </Box>
        </Box>

        {/* ── Main content ─────────────────────────────────────────────────── */}
        <Box sx={s.mainContent}>
          {/* Toolbar */}
          <Box sx={s.toolbar}>
            <Typography sx={s.resultCount}>
              Showing{" "}
              <Box component="span" sx={s.resultCountBold}>
                {filtered.length}
              </Box>{" "}
              verified service{filtered.length !== 1 ? "s" : ""}
            </Typography>

            <Box sx={s.toolbarRight}>
              {/* Sort Dropdown */}
              <Select
                value={filters.sortBy}
                onChange={(e) =>
                  handleFilterChange({
                    ...filters,
                    sortBy: e.target.value as SearchFilters["sortBy"],
                  })
                }
                size="small"
                sx={s.sortSelect}
                variant="outlined"
                MenuProps={{
                  disableScrollLock: true,
                }}
              >
                {SORT_OPTIONS.map((option) => (
                  <MenuItem
                    key={option.val}
                    value={option.val}
                    sx={{ fontSize: "0.82rem" }}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </Select>

              {/* Mobile Filter Sheet Button */}
              <Button
                onClick={() => setSheetOpen(true)}
                startIcon={<Tune sx={{ fontSize: 16 }} />}
                sx={s.filterToggleBtn}
              >
                Filters
                {activeCount > 0 && <Box sx={s.filterBadge}>{activeCount}</Box>}
              </Button>
            </Box>
          </Box>

          {/* Cards grid */}
          {loading ? (
            <Box sx={s.cardsGrid}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </Box>
          ) : filtered.length === 0 ? (
            <Box sx={s.emptyState}>
              <Box component="span" sx={s.emptyIcon}>
                🔍
              </Box>
              <Typography sx={s.emptyTitle}>
                No services found matching your criteria
              </Typography>
              <Typography sx={s.emptySub}>
                Try adjusting your price range, equipment category, or selected
                city to see available sound systems.
              </Typography>
              <Button
                onClick={() => handleFilterChange(DEFAULT_FILTERS)}
                sx={{
                  mt: "1.25rem",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  bgcolor: "#C4893A",
                  borderRadius: "8px",
                  px: "1.3rem",
                  py: "0.6rem",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#B37930" },
                }}
              >
                Reset All Filters
              </Button>
            </Box>
          ) : (
            <Box sx={s.cardsGrid}>
              {filtered.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* ── Mobile filter bottom sheet ────────────────────────────────────── */}
      <FilterSheet
        open={sheetOpen}
        filters={filters}
        activeCount={activeCount}
        onChange={handleFilterChange}
        onClose={() => setSheetOpen(false)}
      />
    </Box>
  );
}
