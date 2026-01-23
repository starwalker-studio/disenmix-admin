import { useState } from "react";
import { useDataProvider, useNotify, useRecordContext } from "react-admin";
import { Typography } from "@mui/material";
import { LeadCommentModal } from "./LeadCommentModal";
import type { LeadRecord } from "../interface/lead.interfaces";

export const CommentsField = () => {
  const record = useRecordContext<LeadRecord>();
  const [open, setOpen] = useState(false);
  const dataProvider = useDataProvider();
  const notify = useNotify();

  if (!record) return null;

  const handleSave = async (data: { comments: string; active: boolean }) => {
    try {
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
    } catch (error) {
      console.error(error);
      notify("Error al guardar", { type: "error" });
    }
  };

  return (
    <>
      <Typography
        sx={{
          background: "#ac6727ff",
          cursor: "pointer",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          fontWeight: 600,
          borderRadius: 2,
        }}
        onClick={() => setOpen(true)}
      >
        {record.comments || "Agregar comentario"}
      </Typography>

      <LeadCommentModal
        open={open}
        onClose={() => setOpen(false)}
        record={record}
        onSave={handleSave}
      />
    </>
  );
};
