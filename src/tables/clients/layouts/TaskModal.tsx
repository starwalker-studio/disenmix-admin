import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import type { ModalClientProps } from "../interface/client.interface";
import { useState } from "react";
import { CLIENT_STYLE } from "../../../styles/client/client-style";

export const TaskModal = ({
  open,
  onClose,
  record,
  onSave,
  saving,
}: ModalClientProps) => {
  const [task, setTask] = useState(record?.tasks ?? "");
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={CLIENT_STYLE.DIALOG_TASK_TITLE}>
          Tareas en el proyecto
        </DialogTitle>
        <DialogContent>
          <TextField
            sx={{ mt: 3 }}
            multiline
            minRows={4}
            fullWidth
            value={task}
            onChange={(e) => setTask(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions sx={CLIENT_STYLE.DIALOG_ACTIONS_STYLE}>
          <Button
            onClick={onClose}
            sx={CLIENT_STYLE.DIALOG_ACTION_BUTTON_CANCEL}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={() => onSave({ tasks: task })}
            sx={CLIENT_STYLE.DIALOG_ACTION_BUTTON_SAVE}
            disabled={saving}
          >
            {saving ? "Guardando…" : "Guardar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
