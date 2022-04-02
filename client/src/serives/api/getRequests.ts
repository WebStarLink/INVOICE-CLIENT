import { instance } from "./configureApi";

const PATH = "https://jsonplaceholder.typicode.com/todos/10";

export const getRequests = {
  getTestData: () => instance.get(PATH),
};
