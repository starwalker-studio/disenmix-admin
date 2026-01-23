import { Card, CardContent, Typography } from "@mui/material";

export const Dashboard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Bienvenido al panel
        </Typography>
        <Typography variant="body2">
          Aquí podrás gestionar leads, clientes y métricas.
        </Typography>
      </CardContent>
    </Card>
  );
};
