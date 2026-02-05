import { List, Datagrid, TextField, EmailField, DateField } from "react-admin";
import { exportToExcel } from "../../utils/exportToExcel";
import { CommentsField } from "./layout/CommentsField";
import { LEAD_STYLE } from "../../styles/leads/leads-style";
import { LeadFilters } from "./layout/LeadFilters";
import { ActivateClientField } from "./layout/ActivateClientField";
import { PackageSelectField } from "./layout/PackageSelectField";

export const LeadList = () => (
  <List
    perPage={10}
    title="Contactos"
    exporter={exportToExcel}
    filters={LeadFilters}
  >
    <Datagrid rowClick="show" sx={LEAD_STYLE.DATAGRID_STYLE}>
      <TextField source="id" />
      <ActivateClientField />
      <TextField source="name" label="Nombre" />
      <EmailField source="email" sx={LEAD_STYLE.DATAGRID_STYLE.EMAIL_FIELD} />
      <TextField source="phone" label="Teléfono" />
      <DateField source="created_at" label="Fecha" />
      <PackageSelectField />
      <CommentsField />
    </Datagrid>
  </List>
);
