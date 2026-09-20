"use client";

import React, { useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import {
  PlayArrow,
  Pause,
  VolumeUp,
  VolumeOff,
  Fullscreen,
} from "@mui/icons-material";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  controls = true,
  style,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const requestFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        bgcolor: "#000000",
        borderRadius: "inherit",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Play / Pause big center overlay toggle when paused */}
      {!isPlaying && (
        <IconButton
          onClick={togglePlay}
          sx={{
            position: "absolute",
            width: 60,
            height: 60,
            bgcolor: "rgba(196,137,58,0.9)",
            color: "#FFFFFF",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            "&:hover": {
              bgcolor: "#B37930",
              transform: "scale(1.08)",
            },
            transition: "all 0.2s ease",
          }}
        >
          <PlayArrow sx={{ fontSize: 36, ml: "3px" }} />
        </IconButton>
      )}

      {/* Quick custom control overlay bar */}
      {controls && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            py: "0.5rem",
            px: "0.85rem",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: isPlaying ? 0.7 : 1,
            transition: "opacity 0.2s ease",
            "&:hover": { opacity: 1 },
          }}
        >
          <IconButton
            size="small"
            onClick={togglePlay}
            sx={{ color: "#FFFFFF" }}
          >
            {isPlaying ? (
              <Pause fontSize="small" />
            ) : (
              <PlayArrow fontSize="small" />
            )}
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <IconButton
              size="small"
              onClick={toggleMute}
              sx={{ color: "#FFFFFF" }}
            >
              {isMuted ? (
                <VolumeOff fontSize="small" />
              ) : (
                <VolumeUp fontSize="small" />
              )}
            </IconButton>
            <IconButton
              size="small"
              onClick={requestFullscreen}
              sx={{ color: "#FFFFFF" }}
            >
              <Fullscreen fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
}
