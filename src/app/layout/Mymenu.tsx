import {
  Menu,
  DashboardMenuItem,
  MenuItemLink,
} from "react-admin";
import PeopleIcon from "@mui/icons-material/People";

export const MyMenu = () => (
  <Menu>
    <DashboardMenuItem />
    <MenuItemLink
      to="/leads"
      primaryText="Leads"
      leftIcon={<PeopleIcon />}
    />
  </Menu>
);
