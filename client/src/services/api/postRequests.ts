import { instance } from "./configureApi";

export const postRequests = {
  login: (body: any) => instance.post("login", body),
};
