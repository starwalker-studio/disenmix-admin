import { MenuItem, Select } from "@mui/material";
import { usePaymentField } from "../../../hooks/usePaymentField";
import { PAYMENT_OPTIONS } from "../constants/client.payment";
import { CLIENT_STYLE } from "../../../styles/client/client-style";

export const PaymentSelectField = () => {
  const { handleChange, record } = usePaymentField();
  if (!record) return null;
  return (
    <Select
      value={record.payment_method ?? ""}
      onChange={handleChange}
      size="small"
      sx={
        record.payment_method
          ? CLIENT_STYLE.SELECT_PAYMENT
          : CLIENT_STYLE.NO_PAYMENT
      }
    >
      <MenuItem value="" disabled>
        Selecciona forma de pago
      </MenuItem>
      {PAYMENT_OPTIONS.map((choice) => (
        <MenuItem key={choice.id} value={choice.value}>
          {choice.value}
        </MenuItem>
      ))}
    </Select>
  );
};
