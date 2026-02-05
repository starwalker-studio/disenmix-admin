import type { IPAYMENT_OPTIONS } from "../interface/client.interface";

export const PAYMENT_OPTIONS: IPAYMENT_OPTIONS[] = [
  { id: 1, value: "Efectivo" },
  { id: 2, value: "Transferencia bancaria" },
  { id: 3, value: "Depósito bancario" },
  { id: 4, value: "Tarjeta de crédito" },
  { id: 5, value: "Tarjeta de débito" },
  { id: 6, value: "PayPal" },
  { id: 7, value: "Mercado Pago" },
  //   { id: 8, value: "Stripe" },
  //   { id: 9, value: "Clip" },
  //   { id: 10, value: "CoDi" },
  //   { id: 11, value: "SPEI" },
  //   { id: 12, value: "OXXO / Pago en tienda" },
  //   { id: 13, value: "PayU" },
  //   { id: 14, value: "Apple Pay" },
  //   { id: 15, value: "Google Pay" },
  //   { id: 16, value: "Cheque" },
  //   { id: 17, value: "Criptomonedas" },
];
