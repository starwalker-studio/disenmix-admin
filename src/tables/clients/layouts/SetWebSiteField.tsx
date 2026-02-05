import { Typography } from "@mui/material";
import { CLIENT_STYLE } from "../../../styles/client/client-style";
import { ClientNamingSiteModal } from "./ClientNamingSiteModal";
import { useSiteNamingField } from "../../../hooks/useSiteNamingField";

export const SetWebSiteField = () => {
  const { handleNameSite, open, setOpen, record, saving } =
    useSiteNamingField();
  if (!record) return null;
  return (
    <>
      <Typography
        sx={
          record.web_site
            ? CLIENT_STYLE.SITE_FIELD
            : CLIENT_STYLE.SITE_FIELD_EMPTY
        }
        onClick={() => setOpen(true)}
      >
        {record.web_site || "Nuevo sitio web"}
      </Typography>
      <ClientNamingSiteModal
        key={record.id + String(record.web_site)}
        open={open}
        onClose={() => setOpen(false)}
        record={record}
        onSave={handleNameSite}
        saving={saving}
      />
    </>
  );
};
