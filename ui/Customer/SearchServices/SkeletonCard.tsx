import { Box, Skeleton } from "@mui/material";

export function SkeletonCard() {
  return (
    <Box
      sx={{
        bgcolor: "#FFFFFF",
        border: "1px solid #EAE6DF",
        borderRadius: "6px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image placeholder */}
      <Skeleton
        variant="rectangular"
        height={135}
        animation="wave"
        sx={{ bgcolor: "#F0ECE6" }}
      />

      {/* Body */}
      <Box
        sx={{
          p: "0.6rem 0.65rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.28rem",
        }}
      >
        {/* Provider / City row */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Skeleton width="45%" height={12} animation="wave" />
          <Skeleton width="25%" height={12} animation="wave" />
        </Box>

        {/* Title line */}
        <Skeleton width="85%" height={16} animation="wave" />

        {/* Spec chips */}
        <Box sx={{ display: "flex", gap: "0.25rem", mt: "0.1rem" }}>
          <Skeleton width={60} height={18} variant="rounded" animation="wave" />
          <Skeleton width={45} height={18} variant="rounded" animation="wave" />
        </Box>

        {/* Divider */}
        <Skeleton
          width="100%"
          height={1}
          animation={false}
          sx={{ my: "0.15rem" }}
        />

        {/* Price + CTA */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Skeleton width={65} height={16} animation="wave" />
            <Skeleton width={50} height={10} animation="wave" />
          </Box>
          <Skeleton
            variant="rounded"
            width={52}
            height={26}
            animation="wave"
            sx={{ borderRadius: "5px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
