import { DistanceSlab } from "@/types/ProviderServicesTypes";
import { Add, Delete } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { formStyles as s } from "./ServicesForm.styles";

export function SlabEditor({
  slabs,
  onChange,
}: {
  slabs: DistanceSlab[];
  onChange: (slabs: DistanceSlab[]) => void;
}) {
  const update = (id: string, patch: Partial<DistanceSlab>) =>
    onChange(slabs.map((s) => (s.id === id ? { ...s, ...patch } : s)));

  const remove = (id: string) => onChange(slabs.filter((s) => s.id !== id));

  const addSlab = () => {
    const last = slabs[slabs.length - 1];
    const from = last ? (last.to_km ?? 100) + 1 : 0;
    onChange([
      ...slabs,
      {
        id: Math.random().toString(36).substring(2, 8), // replace with real ID from backend
        from_km: from,
        to_km: from + 25,
        charge: 0,
        not_available: false,
      },
    ]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      {/* Header labels */}
      <Box
        sx={{
          display: { xs: "none", sm: "grid" },
          gridTemplateColumns: "80px 80px 1fr auto",
          gap: "0.5rem",
          px: "0.75rem",
        }}
      >
        {["From km", "To km", "Extra charge (₹)", ""].map((h) => (
          <Typography key={h} sx={s.slabLabel}>
            {h}
          </Typography>
        ))}
      </Box>

      {slabs.map((slab, idx) => (
        <Box key={slab.id} sx={s.slabRow}>
          {/* From km */}
          <TextField
            size="small"
            type="number"
            value={slab.from_km}
            onChange={(e) =>
              update(slab.id, { from_km: Number(e.target.value) })
            }
            inputProps={{ min: 0 }}
            sx={{ "& input": { fontSize: "0.82rem" } }}
          />

          {/* To km */}
          <TextField
            size="small"
            type="number"
            value={slab.to_km ?? ""}
            placeholder="100+"
            onChange={(e) =>
              update(slab.id, {
                to_km: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            inputProps={{ min: 0 }}
            sx={{ "& input": { fontSize: "0.82rem" } }}
          />

          {/* Charge or not-available toggle */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {slab.not_available ? (
              <Typography
                sx={{ fontSize: "0.75rem", color: "#B91C1C", fontWeight: 500 }}
              >
                Not available
              </Typography>
            ) : (
              <TextField
                size="small"
                type="number"
                value={slab.charge}
                onChange={(e) =>
                  update(slab.id, { charge: Number(e.target.value) })
                }
                inputProps={{ min: 0 }}
                InputProps={{
                  startAdornment: (
                    <Typography
                      sx={{
                        fontSize: "0.8rem",
                        color: "#B0AAA3",
                        mr: "0.3rem",
                      }}
                    >
                      ₹
                    </Typography>
                  ),
                }}
                sx={{ flex: 1, "& input": { fontSize: "0.82rem" } }}
              />
            )}
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <Typography sx={{ fontSize: "0.68rem", color: "#B0AAA3" }}>
                N/A
              </Typography>
              <Switch
                size="small"
                checked={slab.not_available}
                onChange={(e) =>
                  update(slab.id, {
                    not_available: e.target.checked,
                    charge: 0,
                  })
                }
                sx={{
                  "& .MuiSwitch-thumb": { width: 12, height: 12 },
                  "& .MuiSwitch-track": { borderRadius: 6 },
                }}
              />
            </Box>
          </Box>

          {/* Delete — keep at least 1 slab */}
          <IconButton
            size="small"
            onClick={() => remove(slab.id)}
            disabled={slabs.length <= 1}
            sx={{
              color: "#B0AAA3",
              "&:hover": { color: "#B91C1C" },
              flexShrink: 0,
            }}
          >
            <Delete sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>
      ))}

      <Button
        startIcon={<Add sx={{ fontSize: 15 }} />}
        onClick={addSlab}
        sx={s.addSlabBtn}
      >
        Add distance slab
      </Button>
    </Box>
  );
}
