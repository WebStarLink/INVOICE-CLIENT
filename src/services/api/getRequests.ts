import { instance } from "./configureApi";

export const getRequests = {
  getClients: () => instance.get("/clients"),
};
