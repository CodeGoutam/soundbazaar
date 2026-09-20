import { Box } from "@mui/material";
import React from "react";

export const StarRating = React.memo(function ({ count }: { count: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "3px",
      }}
    >
      {[...Array(5)].map((_, i) => (
        <Box
          key={i}
          component="svg"
          viewBox="0 0 24 24"
          sx={{
            width: 13,
            height: 13,
            color:
              i < count ? "var(--amber, #C4893A)" : "var(--stone, #E8E4DE)",
          }}
        >
          <path
            fill="currentColor"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </Box>
      ))}
    </Box>
  );
});
