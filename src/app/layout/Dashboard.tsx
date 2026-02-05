import { Box, Card, CardContent } from "@mui/material";

export const Dashboard = () => {
  return (
    <Card
      sx={{
        minHeight: "95vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Box
          component="img"
          src="/img/logo/logo-desinmix-586x524-darkblue.png" // ajusta la ruta
          alt="Logo"
          sx={{
            maxWidth: 320,
            opacity: 0.85,
          }}
        />
      </CardContent>
    </Card>
  );
};
