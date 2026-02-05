import { createTheme } from "@mui/material/styles";

export const proDarkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#eff1f5",
    },

    secondary: {
      main: "#3b82f6",
    },

    background: {
      default: "#282829",
      paper: "#111827",
    },

    text: {
      primary: "#e5e7eb",
      secondary: "#d6d9dd",
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
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
        size: "small",
        margin: "dense",
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#eff1f5",
          },
        },
        notchedOutline: {
          border: "solid 2px #eff1f5",
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          "&.Mui-focused": {
            color: "#eff1f5",
          },
        },
        shrink: {
          transform: "translate(14px, -9px) scale(0.75)",
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
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
          backgroundColor: "#141414ff",
          color: "#e5e7eb",
          borderRight: "none",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "1.2ex",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          transition: "background-color 0.2s ease",
          "&.MuiTableRow-hover:hover": {
            backgroundColor: "#000000",
          },
        },
      },
    },
  },
});
