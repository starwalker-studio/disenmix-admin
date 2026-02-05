import { Select, MenuItem } from "@mui/material";
import { PACKAGE_OPTIONS } from "../constants/lead.packages";
import { LEAD_STYLE } from "../../../styles/leads/leads-style";
import { usePackageField } from "../../../hooks/usePackageField";

export const PackageSelectField = () => {
  const { handleChange, record } = usePackageField();
  if (!record) return null;
  return (
    <Select
      value={record.package ?? ""}
      onChange={handleChange}
      size="small"
      sx={
        record.package
          ? LEAD_STYLE.DATAGRID_STYLE.SELECT
          : LEAD_STYLE.DATAGRID_STYLE.SELECT_NOPACKAGE
      }
    >
      <MenuItem value="" disabled>
        Selecciona paquete
      </MenuItem>
      {PACKAGE_OPTIONS.map((choice) => (
        <MenuItem key={choice.id} value={choice.value}>
          {choice.value}
        </MenuItem>
      ))}
    </Select>
  );
};
