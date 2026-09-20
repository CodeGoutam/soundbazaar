"use client";

import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
  ChevronLeft,
  ChevronRight,
  Fullscreen,
  PlayCircleFilled,
} from "@mui/icons-material";
import { MediaItem } from "@/types/ServiceDetail.types";
import { VideoPlayer } from "./VideoPlayer";
import { ImageViewer } from "./ImageViewer";
import { MediaLightboxModal } from "./MediaLightboxModal";

interface MediaCarouselProps {
  media?: MediaItem[];
  fallbackImageUrl?: string | null;
  fallbackIllustration?: React.ReactNode;
  overlay?: React.ReactNode;
  height?: { xs: number; md: number };
}

export function MediaCarousel({
  media,
  fallbackImageUrl,
  fallbackIllustration,
  overlay,
  height = { xs: 280, md: 440 },
}: MediaCarouselProps) {
  // Construct list of media items
  const mediaList: MediaItem[] = React.useMemo(() => {
    if (media && media.length > 0) return media;
    if (fallbackImageUrl) {
      return [
        {
          id: "fallback-1",
          type: "image",
          url: fallbackImageUrl,
          title: "Service image",
        },
      ];
    }
    return [];
  }, [media, fallbackImageUrl]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeMedia = mediaList[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {/* ── Main display box ──────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: height,
          borderRadius: "16px",
          overflow: "hidden",
          bgcolor: "#121212",
          boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
        }}
      >
        {activeMedia ? (
          activeMedia.type === "video" ? (
            <VideoPlayer
              src={activeMedia.url}
              poster={activeMedia.thumbnailUrl}
              autoPlay={false}
              controls
            />
          ) : (
            <ImageViewer
              src={activeMedia.url}
              alt={activeMedia.title || "Service media"}
              objectFit="cover"
            />
          )
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "#F0EDE8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {fallbackIllustration}
          </Box>
        )}

        {/* Dark gradient overlay for bottom text contrast */}
        {overlay && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(to top, rgba(15,17,23,0.92) 0%, rgba(15,17,23,0.55) 45%, rgba(0,0,0,0.15) 100%)",
              zIndex: 1,
            }}
          />
        )}

        {/* Custom Header Overlay (Service Title, Badges, Rating, etc.) */}
        {overlay && (
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: { xs: "1rem", md: "1.5rem" },
              zIndex: 2,
              pointerEvents: "auto",
            }}
          >
            {overlay}
          </Box>
        )}

        {/* Top Right Fullscreen Button */}
        {activeMedia && (
          <IconButton
            onClick={() => setLightboxOpen(true)}
            sx={{
              position: "absolute",
              top: "0.85rem",
              right: "0.85rem",
              zIndex: 3,
              bgcolor: "rgba(0,0,0,0.45)",
              color: "#FFFFFF",
              backdropFilter: "blur(6px)",
              "&:hover": { bgcolor: "#C4893A" },
            }}
          >
            <Fullscreen fontSize="small" />
          </IconButton>
        )}

        {/* Previous / Next Arrows */}
        {mediaList.length > 1 && (
          <>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                bgcolor: "rgba(0,0,0,0.45)",
                color: "#FFFFFF",
                backdropFilter: "blur(4px)",
                "&:hover": { bgcolor: "#C4893A" },
              }}
            >
              <ChevronLeft />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: "0.75rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 3,
                bgcolor: "rgba(0,0,0,0.45)",
                color: "#FFFFFF",
                backdropFilter: "blur(4px)",
                "&:hover": { bgcolor: "#C4893A" },
              }}
            >
              <ChevronRight />
            </IconButton>
          </>
        )}
      </Box>

      {/* ── Thumbnail strip (if multiple media) ────────────────────────────── */}
      {mediaList.length > 1 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            overflowX: "auto",
            py: "0.25rem",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {mediaList.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <Box
                key={item.id || idx}
                onClick={() => setCurrentIndex(idx)}
                sx={{
                  position: "relative",
                  width: { xs: 68, md: 84 },
                  height: { xs: 50, md: 60 },
                  borderRadius: "8px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isSelected
                    ? "2px solid #C4893A"
                    : "1.5px solid #E8E4DE",
                  opacity: isSelected ? 1 : 0.65,
                  transition: "all 0.2s ease",
                  flexShrink: 0,
                  "&:hover": { opacity: 1, borderColor: "#C4893A" },
                }}
              >
                {item.type === "video" ? (
                  <Box
                    sx={{ position: "relative", width: "100%", height: "100%" }}
                  >
                    <ImageViewer
                      src={item.thumbnailUrl || fallbackImageUrl || ""}
                      alt={item.title || "Video thumbnail"}
                      objectFit="cover"
                    />
                    <PlayCircleFilled
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: 22,
                        color: "#C4893A",
                      }}
                    />
                  </Box>
                ) : (
                  <ImageViewer
                    src={item.url}
                    alt={item.title || `Thumbnail ${idx}`}
                    objectFit="cover"
                  />
                )}
              </Box>
            );
          })}
        </Box>
      )}

      {/* Lightbox Modal */}
      <MediaLightboxModal
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        media={mediaList}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
      />
    </Box>
  );
}
