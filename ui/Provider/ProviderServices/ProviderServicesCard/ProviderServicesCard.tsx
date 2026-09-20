import { Box, Typography, Button, Chip } from "@mui/material";
import { MusicNote } from "@mui/icons-material";
import { pageStyles as s } from "../ProviderServices.styles";
import { Service } from "@/types/ProviderServicesTypes";

interface ServiceCardProps {
  service: Service;
  onEdit: (service: Service) => void;
  onDelete: (id: string) => void;
  onToggleActive: (id: string, active: boolean) => void;
}

export default function ServiceCard({
  service,
  onEdit,
  onDelete,
  onToggleActive,
}: ServiceCardProps) {
  const freeSlabs = service.distance_slabs.filter(
    (sl) => sl.charge === 0 && !sl.not_available,
  );
  const freeRange =
    freeSlabs.length > 0
      ? `Free within ${freeSlabs[freeSlabs.length - 1].to_km} km`
      : null;

  return (
    <Box sx={s.serviceCard}>
      {/* Image */}
      <Box>
        {service.image_url ? (
          <Box
            component="img"
            src={service.image_url}
            alt={service.service_name}
            sx={{
              width: "100%",
              height: 160,
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Box sx={s.cardImagePlaceholder}>
            <MusicNote sx={{ fontSize: 32, color: "#C4893A", opacity: 0.5 }} />
          </Box>
        )}

        <Chip
          label={service.is_active ? "Active" : "Inactive"}
          size="small"
          onClick={() => onToggleActive(service.id, !service.is_active)}
          sx={s.cardStatusChip(service.is_active)}
        />
      </Box>

      {/* Body */}
      <Box sx={s.cardBody}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <Typography sx={s.cardName}>{service.service_name}</Typography>
          <Typography sx={s.cardDesc}>{service.description}</Typography>
        </Box>

        {/* Pricing row */}
        <Box sx={s.cardPriceRow}>
          <Typography sx={s.cardPrice}>
            ₹{service.base_price.toLocaleString("en-IN")}
          </Typography>
          <Typography sx={s.cardPriceSub}>
            for {service.min_hours} hrs
            {service.extra_hour_rate > 0 &&
              ` · ₹${service.extra_hour_rate.toLocaleString("en-IN")}/hr after`}
          </Typography>
        </Box>

        {/* Tags */}
        <Box sx={s.cardTags}>
          <Box sx={s.cardTag}>{service.max_capacity} guests</Box>
          {freeRange && <Box sx={s.cardTag}>{freeRange}</Box>}
          {service.event_types.length > 2 && (
            <Box sx={s.cardTag}>+{service.event_types.length - 2} more</Box>
          )}
        </Box>

        {/* Actions */}
        <Box sx={s.cardActions}>
          <Button
            onClick={() => onEdit(service)}
            sx={s.cardEditBtn}
            variant="outlined"
          >
            Edit
          </Button>
          <Button
            onClick={() => onDelete(service.id)}
            sx={s.cardDeleteBtn}
            variant="outlined"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
