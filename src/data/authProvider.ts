import type { AuthProvider, HttpError } from "react-admin";
import type { LoginResponse } from "./interface/auth.interface";

const apiUrl = import.meta.env.VITE_API_URL_PRODUCTION;

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error("Credenciales incorrectas");
    }

    const data: LoginResponse = await response.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    return Promise.resolve();
  },

  logout: async () => {
    const token = localStorage.getItem("token");

    if (token) {
      await fetch(`${apiUrl}/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    return Promise.resolve();
  },

  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),

  checkError: (error: HttpError) => {
    if (error.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getIdentity: () => {
    const user = localStorage.getItem("user");
    return user ? Promise.resolve(JSON.parse(user)) : Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
};
