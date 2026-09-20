import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarComponent = ({
  snackOpen,
  setSnackOpen,
  autoHideDuration,
  message,
  severity,
}: {
  snackOpen: boolean;
  setSnackOpen: (open: boolean) => void;
  autoHideDuration: number;
  message: string;
  severity: "success" | "error" | "warning" | "info";
}) => {
  return (
    <Snackbar
      open={snackOpen}
      autoHideDuration={autoHideDuration}
      onClose={() => setSnackOpen(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert
        severity={severity}
        sx={{
          bgcolor: "#18181B",
          color: "#fff",
          "& .MuiAlert-icon": { color: "#C4893A" },
          borderRadius: "8px",
          fontSize: "0.82rem",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
