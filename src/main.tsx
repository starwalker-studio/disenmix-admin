import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DisenmixAdminApp } from "./app/DisenmixAdminApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DisenmixAdminApp />
  </StrictMode>,
);
