import StarIcon from "@/components/Icons/StarIcon";
import { Review } from "@/types/ServiceDetail.types";
import { Box, Typography } from "@mui/material";
import { styles as s } from "./ReviewCard.styles";

export function ReviewCard({ review }: { review: Review }) {
  const date = new Date(review.created_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Box sx={s.reviewCard}>
      <Box sx={s.reviewHeader}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
          <Box sx={s.reviewAvatar}>{review.avatar_initial}</Box>
          <Box>
            <Typography sx={s.reviewName}>{review.customer_name}</Typography>
            <Typography sx={s.reviewMeta}>
              {review.event_type} · {date}
            </Typography>
          </Box>
        </Box>
        <Box className="flex items-center gap-1">
          <StarIcon size={13} />
          <Typography
            sx={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#18181B",
            }}
          >
            {review.rating}
          </Typography>
        </Box>
      </Box>
      <Typography sx={s.reviewText}>{review.comment}</Typography>
    </Box>
  );
}
