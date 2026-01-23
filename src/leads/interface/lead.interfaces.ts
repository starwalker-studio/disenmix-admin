import type { Identifier } from "react-admin";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  record: LeadRecord;
  onSave: (data: { comments: string; active: boolean }) => void;
}

export type LeadRecord = {
  id: Identifier;
  comments?: string | null;
  client?: Client | null;
};

type Client = {
  active?: boolean;
};
