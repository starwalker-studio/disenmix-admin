import {
  useDataProvider,
  useNotify,
  useRecordContext,
  useRefresh,
} from "react-admin";
import type {
  LeadRecord,
  UserComments,
} from "../tables/leads/interface/lead.interfaces";
import { useState } from "react";
import { isUserMadeChanges } from "./functions/comment.functions";

export const useCommentField = () => {
  const record = useRecordContext<LeadRecord>();
  const [open, setOpen] = useState<boolean>(false);
  const [saving, setSaving] = useState(false);
  const dataProvider = useDataProvider();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleSave = async (data: UserComments) => {
    if (!record) return;
    isUserMadeChanges(data, record, setOpen);
    try {
      setSaving(true);
      await dataProvider.update("leads", {
        id: record.id,
        data: {
          comments: data.comments,
          client: {
            active: data.active,
          },
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
    handleSave,
    open,
    setOpen,
    record,
    saving,
  };
};
