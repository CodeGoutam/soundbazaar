import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

export function DeleteDialog({
  open,
  title,
  subTitle,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title: string;
  subTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      PaperProps={{ sx: { borderRadius: "10px", maxWidth: 380 } }}
    >
      <DialogTitle
        sx={{
          fontFamily: "Fraunces, Georgia, serif",
          fontSize: "1rem",
          fontWeight: 700,
          pb: 0.5,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{ fontSize: "0.85rem", color: "#7A756F", lineHeight: 1.7 }}
        >
          {subTitle}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
        <Button
          onClick={onCancel}
          sx={{
            fontSize: "0.78rem",
            textTransform: "none",
            color: "#3F3C38",
            border: "1px solid #E8E4DE",
            borderRadius: "6px",
            px: "1rem",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onConfirm}
          sx={{
            fontSize: "0.78rem",
            textTransform: "none",
            bgcolor: "#B91C1C",
            color: "#fff",
            borderRadius: "6px",
            px: "1rem",
            "&:hover": { bgcolor: "#991B1B" },
          }}
        >
          Yes, delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
