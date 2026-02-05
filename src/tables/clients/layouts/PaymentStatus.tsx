import { usePaymentStatus } from "../../../hooks/usePaymentStatus";
import { Button } from "react-admin";
import { CLIENT_STYLE } from "../../../styles/client/client-style";

export const PaymentStatus = () => {
  const { handlePaymentStatus, record, saving } = usePaymentStatus();
  const paid = record?.payment_status ?? false;
  if (!record) return null;
  return (
    <Button
      key={record.id + String(record?.payment_status)}
      sx={
        paid
          ? CLIENT_STYLE.FIELD_ACTION_BUTTON_SITE_ACTIVE
          : CLIENT_STYLE.FIELD_ACTION_BUTTON_ACTIVATE_SITE
      }
      onClick={() => handlePaymentStatus({ payment_status: !paid })}
      disabled={saving}
    >
      {paid ? "Pagado" : "Sin pago"}
      {saving && "…"}
    </Button>
  );
};
