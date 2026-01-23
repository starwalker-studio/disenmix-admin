export const LEAD_STYLE = {
  DIALOG_TITLE: { background: "#0a7995" },
  DIALOG_ACTIONS_STYLE: {
    gap: 1.2,
    px: 3,
    pb: 2,

    "& .MuiButton-root": {
      fontSize: ".90rem",
      fontWeight: 600,
      textTransform: "none",
      px: 3,
      py: 1,
      borderRadius: 2,
    },
  },
  DIALOG_ACTION_BUTTON_CANCEL: {
    backgroundColor: "#dc2626",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#b91c1c",
    },
  },
  DIALOG_ACTION_BUTTON_ACTIVATE_CLIENT: {
    backgroundColor: "#d9762b",
    color: "#2e2d2d",
    "&:hover": {
      backgroundColor: "#c46a22",
    },
  },
  DIALOG_ACTION_BUTTON_SAVE: {
    backgroundColor: "#119346",
    "&:hover": {
      backgroundColor: "#0f7f3c",
    },
  },
};
