import {
  useDataProvider,
  useNotify,
  useRecordContext,
  useRefresh,
} from "react-admin";
import type { Client } from "../tables/clients/interface/client.interface";
import { useState } from "react";
import { isUserMadeChangesTask } from "./functions/comment.functions";

export const useTaskField = () => {
  const record = useRecordContext<Client>();
  const [open, setOpen] = useState<boolean>(false);
  const [saving, setSaving] = useState(false);
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleSaveTask = async (data: Client) => {
    if (!record) return;
    isUserMadeChangesTask(data, record, setOpen);
    try {
      setSaving(true);
      await dataProvider.update("clients", {
        id: record.id,
        data: {
          tasks: data.tasks,
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
    handleSaveTask,
    open,
    saving,
    record,
    setOpen,
  };
};
