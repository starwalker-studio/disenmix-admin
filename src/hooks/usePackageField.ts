import { useDataProvider, useNotify, useRecordContext, useRefresh } from "react-admin";
import type { LeadRecord } from "../tables/leads/interface/lead.interfaces";
import type { SelectChangeEvent } from "@mui/material";

export const usePackageField = () => {
  const record = useRecordContext<LeadRecord>();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleChange = async (event: SelectChangeEvent) => {
    if (!record) return;
    const newPackage = event.target.value;
    try {
      await dataProvider.update("leads", {
        id: record.id,
        data: { package: newPackage },
        previousData: record,
      });
      notify("Paquete actualizado", { type: "success" });
      refresh();
    } catch (error) {
      console.error(error);
      notify("Error al actualizar paquete", { type: "error" });
    }
  };
  return {
    handleChange,
    record,
  };
};
