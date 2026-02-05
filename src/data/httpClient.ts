import { fetchUtils } from "react-admin";

export const httpClient = (url: string, options: fetchUtils.Options = {} ) => {
  const token = localStorage.getItem("token");

  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, {
    ...options,
    headers,
  });
};
