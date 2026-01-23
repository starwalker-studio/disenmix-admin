import { List, Datagrid, TextField, EmailField, DateField } from "react-admin";
import { exportToExcel } from "../utils/exportToExcel";
import { CommentsField } from "./layout/CommentsField";

export const LeadList = () => (
  <List perPage={10} title="Contact Leads" exporter={exportToExcel}>
    <Datagrid
      rowClick="show"
      sx={{
        backgroundColor: "#111827",
        borderRadius: 2,
        "& .RaDatagrid-headerCell": {
          backgroundColor: "#0a7995",
          color: "#f0f2f7ff",
          fontWeight: 800,
          fontSize: "1.15rem",
        },
        "& .RaDatagrid-row:hover": {
          backgroundColor: "#1f2937",
        },
      }}
    >
      <TextField source="id" />
      <TextField source="name" label="Nombre" />
      <EmailField
        source="email"
        sx={{ color: "#fff", textDecoration: "underline" }}
      />
      <TextField source="phone" label="Teléfono" />
      <TextField source="package" label="Paquetes" />
      <CommentsField />
      <DateField source="created_at" label="Fecha" />
    </Datagrid>
  </List>
);
