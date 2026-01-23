import { Admin, Layout, Resource } from "react-admin";
import { dataProvider } from "../data/dataProvider";
import { LeadList } from "../leads/LeadList";
import { proDarkTheme } from "../styles/main/theme";
import { MyAppBar } from "./layout/MyAppBar";
import { Dashboard } from "./layout/Dashboard";
import { MyMenu } from "./layout/Mymenu";

export const DisenmixAdminApp = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      theme={proDarkTheme}
      layout={(props) => (
        <Layout {...props} appBar={MyAppBar} sx={{ marginTop: "8px" }} menu={MyMenu}/>
      )}
      dashboard={Dashboard}
    >
      <Resource name="leads" list={LeadList} />
    </Admin>
  );
};
