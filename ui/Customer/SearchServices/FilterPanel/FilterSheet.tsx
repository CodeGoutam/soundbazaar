import { SearchFilters } from "@/types/Search.types";
import { Close } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { sheetStyles as sh } from "./Filters.styles";
import FilterPanel from "./FilterPanel";

export function FilterSheet({
  open,
  filters,
  activeCount,
  onChange,
  onClose,
}: {
  open: boolean;
  filters: SearchFilters;
  activeCount: number;
  onChange: (f: SearchFilters) => void;
  onClose: () => void;
}) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <Box sx={sh.backdrop} onClick={onClose} />

      {/* Sheet */}
      <Box sx={sh.sheet}>
        <Box sx={sh.handle} />

        <Box sx={sh.sheetHeader}>
          <Typography sx={sh.sheetTitle}>Filters</Typography>
          <Box component="button" onClick={onClose} sx={sh.sheetCloseBtn}>
            <Close sx={{ fontSize: 16, color: "#7A756F" }} />
          </Box>
        </Box>

        <Box sx={sh.sheetBody}>
          <FilterPanel
            filters={filters}
            onChange={onChange}
            activeCount={activeCount}
            onApply={onClose}
          />
        </Box>
      </Box>
    </>
  );
}
