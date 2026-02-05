import {
  Menu,
  DashboardMenuItem,
  MenuItemLink,
} from "react-admin";
import PeopleIcon from "@mui/icons-material/People";
import BusinessIcon from "@mui/icons-material/Business";

export const MyMenu = () => (
  <Menu>
    <DashboardMenuItem />
    <MenuItemLink
      to="/leads"
      primaryText="Contactos"
      leftIcon={<PeopleIcon />}
    />
    <MenuItemLink
      to="/clients"
      primaryText="Clientes"
      leftIcon={<BusinessIcon />}
    />
  </Menu>
);
