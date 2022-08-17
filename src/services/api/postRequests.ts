import { IAuth, IClient } from "interfaces";
import { instance } from "./configureApi";

export const postRequests = {
  login: (body: IAuth) => instance.post("/login", body),
  registration: (body: IAuth) => instance.post("/registration", body),
  logout: () => instance.post("/logout"),
  client: (body: IClient) => instance.post("/client", body),
};
