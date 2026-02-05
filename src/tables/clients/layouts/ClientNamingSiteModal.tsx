import { useState } from "react";
import type { ModalClientProps } from "../interface/client.interface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { CLIENT_STYLE } from "../../../styles/client/client-style";

export const ClientNamingSiteModal = ({
  open,
  onClose,
  record,
  onSave,
  saving,
}: ModalClientProps) => {
  const [webSite, setWebSite] = useState(record?.web_site ?? "");
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={CLIENT_STYLE.DIALOG_TITLE}>
        Nombre del sitio web
      </DialogTitle>
      <DialogContent>
        <TextField
          sx={{ mt: 3 }}
          label={record.web_site ? "web site" : "nuevo sitio web"}
          value={webSite}
          onChange={(e) => setWebSite(e.target.value.trim())}
          margin="normal"
        />
      </DialogContent>
      <DialogActions sx={CLIENT_STYLE.DIALOG_ACTIONS_STYLE}>
        <Button onClick={onClose} sx={CLIENT_STYLE.DIALOG_ACTION_BUTTON_CANCEL}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={() => onSave({ web_site: webSite })}
          sx={CLIENT_STYLE.DIALOG_ACTION_BUTTON_SAVE}
          disabled={saving}
        >
          {saving ? "Guardando…" : "Guardar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
