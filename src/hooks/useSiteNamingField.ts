import {
  useDataProvider,
  useNotify,
  useRecordContext,
  useRefresh,
} from "react-admin";
import type { Client } from "../tables/clients/interface/client.interface";
import { useState } from "react";
import { isUserMadeChangesSite } from "./functions/comment.functions";

export const useSiteNamingField = () => {
  const record = useRecordContext<Client>();
  const [open, setOpen] = useState<boolean>(false);
  const [saving, setSaving] = useState(false);
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleNameSite = async (data: Client) => {
    if (!record) return;
    isUserMadeChangesSite(data, record, setOpen);
    try {
      setSaving(true);
      await dataProvider.update("clients", {
        id: record.id,
        data: {
          web_site: data.web_site,
        },
        previousData: record,
      });

      notify("Actualizado correctamente", { type: "success" });
      setOpen(false);
      refresh();
    } catch (error) {
      console.error(error);
      notify("Error al guardar", { type: "error" });
    } finally {
      setSaving(false);
    }
  };
  return {
    handleNameSite,
    open,
    saving,
    record,
    setOpen
  };
};
