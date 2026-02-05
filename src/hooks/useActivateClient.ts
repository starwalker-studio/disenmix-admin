import { useNotify, useRecordContext, useRefresh } from "react-admin";
import type { LeadRecord } from "../tables/leads/interface/lead.interfaces";
import { dataProvider } from "../data/dataProvider";
import { useState } from "react";
import type { Client } from "../tables/clients/interface/client.interface";

export const useActivateclient = () => {
  const [saving, setSaving] = useState(false);
  const record = useRecordContext<LeadRecord>();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleActivate = async (data: Client) => {
    if (!record) return;
    try {
      setSaving(true);
      await dataProvider.update("leads", {
        id: record.id,
        data: {
          client: {
            active: data.active,
          },
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
    handleActivate,
    record,
    saving
  };
};
