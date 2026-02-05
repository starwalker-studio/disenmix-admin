import {
  useDataProvider,
  useNotify,
  useRecordContext,
  useRefresh,
} from "react-admin";
import type { Client } from "../tables/clients/interface/client.interface";
import type { SelectChangeEvent } from "@mui/material";

export const usePaymentField = () => {
  const record = useRecordContext<Client>();
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleChange = async (event: SelectChangeEvent) => {
    if (!record) return;
    const payment = event.target.value;
    try {
      await dataProvider.update("clients", {
        id: record.id,
        data: { payment_method: payment },
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
