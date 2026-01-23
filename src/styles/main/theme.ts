import { createTheme } from "@mui/material/styles";

export const proDarkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#04142f",
    },

    secondary: {
      main: "#3b82f6",
    },

    background: {
      default: "#323d50ff",
      paper: "#111827",
    },

    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
    },
  },

  typography: {
    fontFamily: `"Inter", "Roboto", "Helvetica", "Arial", sans-serif`,
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: ".98rem",
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#04142f",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: "none", // elimina gradientes raros
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          backgroundColor: "#020c1dff", // o un tono dark cercano
          color: "#e5e7eb",
          borderRight: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "1.2ex"
        }
      }
    }
  },
});
