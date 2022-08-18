import { instance } from "./configureApi";

export const deleteRequests = {
  remove: (id: string) =>
    instance.delete("/remove", {
      data: {
        id: id,
      },
    }),
};
