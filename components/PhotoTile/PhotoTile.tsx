import { Box } from "@mui/material";
import { useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export function PhotoTile({
  file,
  onAdd,
  onRemove,
  isProfile = false,
}: {
  file: File | null;
  onAdd: (f: File) => void;
  onRemove: () => void;
  isProfile?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const preview = file ? URL.createObjectURL(file) : null;

  return (
    <Box
      onClick={() => !file && inputRef.current?.click()}
      sx={{
        width: isProfile ? 100 : 88,
        height: isProfile ? 100 : 88,
        borderRadius: isProfile ? "50%" : "10px",
        border: `1.5px dashed ${file ? "#C4893A" : "#D5D0C8"}`,
        background: file ? "transparent" : "#FAFAF9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: file ? "default" : "pointer",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        transition: "border-color 0.2s, box-shadow 0.2s",
        "&:hover": !file
          ? {
              borderColor: "#C4893A",
              boxShadow: "0 0 0 3px rgba(196,137,58,0.08)",
            }
          : {},
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) onAdd(f);
        }}
      />
      {preview ? (
        <>
          <Box
            component="img"
            src={preview}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Box
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            sx={{
              position: "absolute",
              top: isProfile ? 16 : 4,
              right: isProfile ? 10 : 4,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 2,
              border: "2px solid #fff",
              "&:hover": { background: "#dc2626" },
              color: "#fff",
            }}
          >
            <CloseIcon sx={{ fontSize: 14 }} />
          </Box>
        </>
      ) : (
        <Box
          component="svg"
          viewBox="0 0 20 20"
          sx={{ width: 22, height: 22, color: "#C4C0B8" }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <AddIcon fontSize="small" />
        </Box>
      )}
    </Box>
  );
}
