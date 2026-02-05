import type { Client } from "../../tables/clients/interface/client.interface";
import type {
  LeadRecord,
  UserComments,
} from "../../tables/leads/interface/lead.interfaces";

export const isUserMadeChanges = (
  data: UserComments,
  record: LeadRecord,
  setOpen: (o: boolean) => void,
) => {
  if (
    data.comments === record.comments &&
    data.active === record.client?.active
  ) {
    setOpen(false);
    return;
  }
};

export const isUserMadeChangesSite = (
  data: Client,
  record: Client,
  setOpen: (o: boolean) => void,
) => {
  if (data.web_site === record.web_site) {
    setOpen(false);
    return;
  }
};

export const isUserMadeChangesTask = (
  data: Client,
  record: Client,
  setOpen: (o: boolean) => void,
) => {
  if (data.tasks === record.tasks) {
    setOpen(false);
    return;
  }
};
