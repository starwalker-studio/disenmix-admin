import type { Identifier } from "react-admin";

export interface Client {
  id?: Identifier;
  contact_lead_id?: number;
  active?: boolean;
  payment_status?: boolean;
  payment_method?: string;
  web_site?: string;
  tasks?: string;
  web_site_status?: boolean;
  date_web_site_annuity?: Date;
}

export type ModalClientProps = {
  open: boolean;
  onClose: () => void;
  record: Client;
  onSave: (data: { web_site?: string; tasks?: string }) => void;
  saving: boolean;
};

export interface IPAYMENT_OPTIONS {
  id: number;
  value: string;
}
