import { IProfile } from "interfaces";
import { instance } from "./configureApi";

export const putRequests = {
  profile: (body: IProfile) => instance.put("/profile", body),
};
