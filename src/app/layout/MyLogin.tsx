import { Box, Card, Typography } from "@mui/material";
import { LoginForm } from "react-admin";

export const MyLogin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a, #020617)",
      }}
    >
      <Card sx={{ p: 4, width: 360 }}>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <img src="/img/logo/logo-transparent.png" alt="Disenmix" style={{ width: 180 }} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            Disenmix Admin
          </Typography>
        </Box>
        <LoginForm />
      </Card>
    </Box>
  );
};
