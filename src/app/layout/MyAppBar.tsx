import { AppBar, type AppBarProps, TitlePortal } from "react-admin";
import { Box } from "@mui/material";

export const MyAppBar = (props: AppBarProps) => {
  return (
    <AppBar {...props}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mr: 2,
          padding: "1ex"
        }}
      >
        <img
          src="/img/logo/logo-darkblue-letters.png"
          alt="Disenmix"
          style={{ height: 42 }}
        />
      </Box>
      <TitlePortal title="Admin"/>
    </AppBar>
  );
};
