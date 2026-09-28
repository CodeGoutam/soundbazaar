"use client";

import React, { useState, useCallback } from "react";
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
  const [prevSrc, setPrevSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setLoaded(false);
    setError(false);
  }

  const handleRef = useCallback((node: HTMLImageElement | null) => {
    if (node && node.complete) {
      if (node.naturalWidth > 0) {
        setLoaded(true);
      } else if (node.src) {
        setError(true);
      }
    }
  }, []);

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
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "#27272A",
            zIndex: 1,
          }}
        />
      )}

      {error ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "#18181B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#A1A1AA",
            fontSize: "0.82rem",
          }}
        >
          Image unavailable
        </Box>
      ) : (
        <Box
          component="img"
          ref={handleRef}
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
            transition: "opacity 0.25s ease-in-out",
          }}
        />
      )}
    </Box>
  );
}
