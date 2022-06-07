import { instance } from "./configureApi";

export const getRequests = {
  getUsers: () => instance.get("users"),
};
