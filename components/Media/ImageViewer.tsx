"use client";

import React, { useState } from "react";
import { Box, Skeleton } from "@mui/material";

interface ImageViewerProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  objectFit?: "cover" | "contain" | "fill";
  onClick?: () => void;
}

export function ImageViewer({
  src,
  alt,
  style,
  objectFit = "cover",
  onClick,
}: ImageViewerProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    >
      {!loaded && !error && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{ bgcolor: "#E8E4DE" }}
        />
      )}

      {error ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#F5F3EF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#B0AAA3",
            fontSize: "0.82rem",
          }}
        >
          Image unavailable
        </Box>
      ) : (
        <Box
          component="img"
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: objectFit,
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </Box>
  );
}
