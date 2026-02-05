import { useNotify, useRecordContext, useRefresh } from "react-admin";
import type { Client } from "../tables/clients/interface/client.interface";
import { dataProvider } from "../data/dataProvider";
import { useState } from "react";

export const usePaymentStatus = () => {
  const [saving, setSaving] = useState(false);
  const record = useRecordContext<Client>();
  const notify = useNotify();
  const refresh = useRefresh();

  const handlePaymentStatus = async (data: Client) => {
    if (!record) return;
    try {
      setSaving(true);
      await dataProvider.update("clients", {
        id: record.id,
        data: {
          payment_status: data.payment_status
        },
        previousData: record,
      });

      notify("Actualizado correctamente", { type: "success" });
      refresh();
    } catch (error) {
      console.error(error);
      notify("Error al guardar", { type: "error" });
    } finally {
      setSaving(false);
    }
  };
  return {
    handlePaymentStatus,
    record,
    saving,
  };
};
