import { LEAD_STYLE } from "../../styles/leads/leads-style";
import { Datagrid, List, TextField } from "react-admin";
import { EditAnnuityField } from "./layouts/EditAnnuityField";
import { SiteStatus } from "./layouts/SiteStatus";
import { SetWebSiteField } from "./layouts/SetWebSiteField";
import { PaymentStatus } from "./layouts/PaymentStatus";
import { PaymentSelectField } from "./layouts/PaymentSelectField";
import { TasksField } from "./layouts/TasksField";
import { exportToExcel } from "../../utils/exportToExcel";
import { LeadFilters } from "../leads/layout/LeadFilters";
import { ClientFilters } from "./layouts/ClientFilters";

export const ClientList = () => {
  return (
    <List
      perPage={10}
      title="Clientes"
      exporter={exportToExcel}
      filters={[...LeadFilters, ...ClientFilters,]}
    >
      <Datagrid rowClick="show" sx={LEAD_STYLE.DATAGRID_STYLE}>
        <TextField source="id" label="id" />
        <TextField source="lead.name" label="Nombre" />
        <TextField source="lead.email" label="Email" />
        <TextField source="lead.phone" label="Teléfono" />
        <TextField source="lead.package" label="Paquete" />
        <SetWebSiteField />
        <SiteStatus />
        <PaymentStatus />
        <EditAnnuityField />
        <PaymentSelectField />
        <TasksField />
      </Datagrid>
    </List>
  );
};
