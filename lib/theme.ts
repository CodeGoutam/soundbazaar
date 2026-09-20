import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#C4893A", contrastText: "#fff" },
    secondary: { main: "#0F1117", contrastText: "#fff" },
    background: { default: "#F9F7F4", paper: "#FDFCFB" },
    text: { primary: "#18181B", secondary: "#7A756F" },
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",
    h1: { fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700 },
    h2: { fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700 },
    h3: { fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 700 },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          letterSpacing: "normal",
        },
      },
    },
    MuiTextField: {
      defaultProps: { variant: "outlined", size: "small" },
      styleOverrides: {
        root: { "& .MuiOutlinedInput-root": { backgroundColor: "#FDFCFB" } },
      },
    },
  },
});
