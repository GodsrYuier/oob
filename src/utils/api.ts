import http from "./http";

interface login {
  username: string;
  password: string;
}

export const getLoginApi = (params: login) => http.post("login", params);

export const getLeftiApi = (params: any) => http.get("menus", { params });

export const getListiApi = (params: any) => http.get("goods", { params });

export const getclsApi = (params: any) => http.get("categories", { params });
