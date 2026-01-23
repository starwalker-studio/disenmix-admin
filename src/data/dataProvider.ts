import simpleRestProvider from "ra-data-simple-rest";

const apiUrl = import.meta.env.VITE_API_URL_LOCAL;

export const dataProvider = simpleRestProvider(apiUrl);

console.log(apiUrl)
