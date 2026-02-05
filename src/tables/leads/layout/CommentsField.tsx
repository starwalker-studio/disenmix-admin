import { Typography } from "@mui/material";
import { LeadCommentModal } from "./LeadCommentModal";
import { LEAD_STYLE } from "../../../styles/leads/leads-style";
import { useCommentField } from "../../../hooks/useCommentField";

export const CommentsField = () => {
  const { handleSave, open, setOpen, record, saving } = useCommentField();
  if (!record) return null;
  return (
    <>
      <Typography
        title={record.comments ?? ""}
        sx={
          record.comments
            ? LEAD_STYLE.DATAGRID_STYLE.COMMENT_FIELD
            : LEAD_STYLE.DATAGRID_STYLE.COMMENT_FIELD_EMPTY
        }
        onClick={() => setOpen(true)}
      >
        {record.comments || "Agregar comentario"}
      </Typography>
      <LeadCommentModal
        key={record.id + String(record.client?.active)}
        open={open}
        onClose={() => setOpen(false)}
        record={record}
        onSave={handleSave}
        saving={saving}
      />
    </>
  );
};
