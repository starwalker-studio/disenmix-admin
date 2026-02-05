import { Admin, Layout, Resource } from "react-admin";
import { dataProvider } from "../data/dataProvider";
import { LeadList } from "../tables/leads/LeadList";
import { proDarkTheme } from "../styles/main/theme";
import { MyAppBar } from "./layout/MyAppBar";
import { Dashboard } from "./layout/Dashboard";
import { MyMenu } from "./layout/Mymenu";
import { ClientList } from "../tables/clients/ClientList";
import { authProvider } from "../data/authProvider";
import { MyLogin } from "./layout/MyLogin";

export const DisenmixAdminApp = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      loginPage={MyLogin}
      theme={proDarkTheme}
      layout={(props) => (
        <Layout
          {...props}
          appBar={MyAppBar}
          sx={{ marginTop: "10px" }}
          menu={MyMenu}
        />
      )}
      dashboard={Dashboard}
    >
      <Resource name="leads" list={LeadList} />
      <Resource name="clients" list={ClientList} />
    </Admin>
  );
};
