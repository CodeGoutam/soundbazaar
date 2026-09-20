"use client";

import React from "react";
import { Modal, Box, IconButton, Typography } from "@mui/material";
import { Close, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { MediaItem } from "@/types/ServiceDetail.types";
import { VideoPlayer } from "./VideoPlayer";
import { ImageViewer } from "./ImageViewer";

interface LightboxProps {
  open: boolean;
  onClose: () => void;
  media: MediaItem[];
  currentIndex: number;
  onIndexChange: (idx: number) => void;
}

export function MediaLightboxModal({
  open,
  onClose,
  media,
  currentIndex,
  onIndexChange,
}: LightboxProps) {
  if (!media || media.length === 0) return null;

  const activeItem = media[currentIndex] || media[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange(currentIndex === 0 ? media.length - 1 : currentIndex - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange(currentIndex === media.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "90vw",
          maxWidth: "1100px",
          height: "82vh",
          display: "flex",
          flexDirection: "column",
          outline: "none",
        }}
      >
        {/* Header bar */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "0.75rem",
            px: "1rem",
            color: "#FFFFFF",
          }}
        >
          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600 }}>
            {activeItem.title || `Media ${currentIndex + 1}`} (
            {currentIndex + 1} of {media.length})
          </Typography>
          <IconButton onClick={onClose} sx={{ color: "#FFFFFF" }}>
            <Close />
          </IconButton>
        </Box>

        {/* Media content body */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: "12px",
            bgcolor: "#000000",
          }}
        >
          {activeItem.type === "video" ? (
            <VideoPlayer
              src={activeItem.url}
              poster={activeItem.thumbnailUrl}
              autoPlay
              controls
            />
          ) : (
            <ImageViewer
              src={activeItem.url}
              alt={activeItem.title || "Fullscreen media"}
              objectFit="contain"
            />
          )}

          {/* Navigation arrows */}
          {media.length > 1 && (
            <>
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: "absolute",
                  left: "1rem",
                  bgcolor: "rgba(0,0,0,0.5)",
                  color: "#FFFFFF",
                  "&:hover": { bgcolor: "#C4893A" },
                }}
              >
                <ChevronLeft fontSize="large" />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: "absolute",
                  right: "1rem",
                  bgcolor: "rgba(0,0,0,0.5)",
                  color: "#FFFFFF",
                  "&:hover": { bgcolor: "#C4893A" },
                }}
              >
                <ChevronRight fontSize="large" />
              </IconButton>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
