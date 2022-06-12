import { IUser } from "interfaces";

export interface IGlobalStore {
  user: IUser | null;
  client: any;
  status: string;
  success: string;
  error: undefined | string;
}
export interface IGlobalStoreSelector {
  globalStore: IGlobalStore;
}
