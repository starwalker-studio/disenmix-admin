import { useSiteActivate } from "../../../hooks/useActivateSite";
import { Button } from "react-admin";
import { CLIENT_STYLE } from "../../../styles/client/client-style";

export const SiteStatus = () => {
  const { handleSiteActivate, record, saving } = useSiteActivate();
  if (!record) return null;
  const active = record.web_site_status ?? false;
  return (
    <Button
      key={record.id + String(record?.web_site_status)}
      sx={
        active
          ? CLIENT_STYLE.FIELD_ACTION_BUTTON_SITE_ACTIVE
          : CLIENT_STYLE.FIELD_ACTION_BUTTON_ACTIVATE_SITE
      }
      onClick={() => handleSiteActivate({ web_site_status: !active })}
      disabled={saving}
    >
      {active ? "Online" : "Offline"}
      {saving && "…"}
    </Button>
  );
};
