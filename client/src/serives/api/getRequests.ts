import { instance } from "./configureApi";

export const getRequests = {
  getTestData: () => instance.get("todos/10"),
};
