import simpleRestProvider from "ra-data-simple-rest";
import { httpClient } from "./httpClient";

const apiUrl = import.meta.env.VITE_API_URL_PRODUCTION;

export const dataProvider = simpleRestProvider(apiUrl, httpClient);
