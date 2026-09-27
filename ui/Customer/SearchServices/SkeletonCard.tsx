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
        boxShadow: "0 1px 3px rgba(24,24,27,0.04)",
      }}
    >
      {/* Image placeholder with badges */}
      <Box sx={{ position: "relative", height: { xs: 110, sm: 135, md: 150 } }}>
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{ bgcolor: "#F0ECE6" }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "0.4rem",
            left: "0.4rem",
            display: "flex",
            gap: "0.25rem",
          }}
        >
          <Skeleton
            variant="rounded"
            width={75}
            height={20}
            animation="wave"
            sx={{ bgcolor: "rgba(255,255,255,0.7)" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0.4rem",
            left: "0.4rem",
            right: "0.4rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Skeleton
            width={70}
            height={14}
            animation="wave"
            sx={{ bgcolor: "rgba(255,255,255,0.6)" }}
          />
          <Skeleton
            width={45}
            height={14}
            animation="wave"
            sx={{ bgcolor: "rgba(255,255,255,0.6)" }}
          />
        </Box>
      </Box>

      {/* Body */}
      <Box
        sx={{
          p: "0.6rem 0.65rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.35rem",
        }}
      >
        {/* Title line */}
        <Skeleton width="88%" height={18} animation="wave" />

        {/* Spec chips */}
        <Box sx={{ display: "flex", gap: "0.25rem", my: "0.1rem" }}>
          <Skeleton width={60} height={18} variant="rounded" animation="wave" />
          <Skeleton width={50} height={18} variant="rounded" animation="wave" />
        </Box>

        {/* Divider */}
        <Box sx={{ height: 1, bgcolor: "#EAE6DF", my: "0.2rem" }} />

        {/* Price + CTA */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Skeleton width={65} height={18} animation="wave" />
            <Skeleton width={45} height={10} animation="wave" />
          </Box>
          <Skeleton
            variant="rounded"
            width={58}
            height={26}
            animation="wave"
            sx={{ borderRadius: "5px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
