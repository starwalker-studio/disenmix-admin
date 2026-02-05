import type { Identifier } from "react-admin";
import type { Client } from "../../clients/interface/client.interface";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  record: LeadRecord;
  onSave: (data: { comments: string; active: boolean }) => void;
  saving: boolean;
}

export type LeadRecord = {
  id: Identifier;
  comments?: string | null;
  client?: Client | null;
  package?: string;
};

export interface IPACKAGE_OPTIONS {
  id: number;
  value: string;
}

export interface UserComments {
  comments: string;
  active: boolean;
}
