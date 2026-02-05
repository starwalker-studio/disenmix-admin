import { TextInput } from "react-admin";

export const LeadFilters = [
  <TextInput
    key="q"
    source="q"
    label="Buscar"
    alwaysOn
    placeholder="Nombre, correo o teléfono"
    resettable    
  />,
  <TextInput source="email" label="Email" />,
  <TextInput source="phone" label="Teléfono" />,
];
