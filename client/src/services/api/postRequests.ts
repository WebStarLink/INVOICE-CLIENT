import { IUser } from "interfaces";
import { instance } from "./configureApi";

export const postRequests = {
  login: (body: IUser) => instance.post("login", body),
  registration: (body: IUser) => instance.post("registration", body),
  logout: () => instance.post("logout"),
};
