import { Button } from "react-admin";
import { LEAD_STYLE } from "../../../styles/leads/leads-style";
import { useActivateclient } from "../../../hooks/useActivateClient";

export const ActivateClientField = () => {
  const { handleActivate, record, saving } = useActivateclient();
  if (!record) return null;
  const active = record.client?.active ?? false;
  return (
    <Button
      key={record.id + String(record.client?.active)}
      sx={
        active
          ? LEAD_STYLE.FIELD_ACTION_BUTTON_CLIENT_ACTIVE
          : LEAD_STYLE.FIELD_ACTION_BUTTON_ACTIVATE_CLIENT
      }
      onClick={() => handleActivate({ active: true })}
      disabled={active || saving}
    >
      {active ? "Cliente activo" : "Activar cliente"}
      {saving && "…"}
    </Button>
  );
};
