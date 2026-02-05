import { useNotify, useRecordContext, useRefresh } from "react-admin";
import type { Client } from "../tables/clients/interface/client.interface";
import { dataProvider } from "../data/dataProvider";
import { useState } from "react";

export const useSiteActivate = () => {
  const [saving, setSaving] = useState(false);
  const record = useRecordContext<Client>();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleSiteActivate = async (data: Client) => {
    if (!record) return;
    try {
      setSaving(true);
      await dataProvider.update("clients", {
        id: record.id,
        data: {
          web_site_status: data.web_site_status
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
    handleSiteActivate,
    record,
    saving,
  };
};
