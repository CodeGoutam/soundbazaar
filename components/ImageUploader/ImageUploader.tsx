import { Edit, PhotoCamera } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useCallback, useRef } from "react";
import { styles as s } from "./ImageUploader.styles";

// ─── Image uploader ───────────────────────────────────────────────────────────
export function ImageUploader({
  preview,
  onFile,
  acceptedTypes = "image/jpeg, image/png, image/webp",
}: {
  preview: string | null;
  onFile: (file: File, url: string) => void;
  acceptedTypes?: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (file: File) => {
      const url = URL.createObjectURL(file);
      onFile(file, url);
    },
    [onFile],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  };

  return (
    <Box
      sx={s.imageUpload}
      onClick={() => inputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        accept={acceptedTypes}
        style={{ display: "none" }}
        onChange={handleChange}
      />

      {preview ? (
        <>
          <Box
            component="img"
            src={preview}
            sx={s.imagePreview}
            alt="Service preview"
          />
          <Box sx={s.imageOverlay}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <Edit sx={{ color: "#fff", fontSize: 20 }} />
              <Typography sx={{ color: "#fff", fontSize: "0.72rem" }}>
                Change photo
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <PhotoCamera sx={{ fontSize: 28, color: "#C4893A", opacity: 0.7 }} />
          <Typography sx={s.imageUploadText}>Tap to upload photo</Typography>
          <Typography sx={s.imageUploadHint}>
            JPG, PNG or WebP · Max 5MB
          </Typography>
        </>
      )}
    </Box>
  );
}
