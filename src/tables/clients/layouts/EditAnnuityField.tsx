import { useRecordContext, useUpdate } from "react-admin";
import { TextField } from "@mui/material";

export const EditAnnuityField = () => {
  const record = useRecordContext();
  const [update] = useUpdate();

  if (!record) return null;

  const value = record.date_web_site_annuity
    ? record.date_web_site_annuity.slice(0, 10)
    : "";
    
  return (
    <TextField
      label="vencimiento del sitio"
      type="date"
      size="small"
      key={record.id}
      value={value}
      onChange={(e) => {
        update("clients", {
          id: record.id,
          data: { date_web_site_annuity: e.target.value },
          previousData: record,
        });
      }}
      sx={{ minWidth: 150 }}
    />
  );
};
