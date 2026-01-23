import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { LEAD_STYLE } from "../../styles/leads/leads-style";
import type { ModalProps } from "../interface/lead.interfaces";

export const LeadCommentModal = ({
  open,
  onClose,
  record,
  onSave,
}: ModalProps) => {
  const [comments, setComments] = useState(record?.comments ?? "");
  const [active, setActive] = useState(record?.client?.active ?? false);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={LEAD_STYLE.DIALOG_TITLE}>Notas internas</DialogTitle>
      <DialogContent>
        <TextField
          label="Comentarios"
          multiline
          minRows={4}
          fullWidth
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          margin="normal"
        />
      </DialogContent>
      <DialogActions sx={LEAD_STYLE.DIALOG_ACTIONS_STYLE}>
        <Button onClick={onClose} sx={LEAD_STYLE.DIALOG_ACTION_BUTTON_CANCEL}>
          Cancelar
        </Button>

        <Button
          sx={LEAD_STYLE.DIALOG_ACTION_BUTTON_ACTIVATE_CLIENT}
          onClick={() => setActive(true)}
        >
          Activar cliente
        </Button>

        <Button
          variant="contained"
          onClick={() => onSave({ comments, active })}
          sx={LEAD_STYLE.DIALOG_ACTION_BUTTON_SAVE}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
