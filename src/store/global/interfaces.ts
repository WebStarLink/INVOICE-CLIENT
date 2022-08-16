import { IClient, IUser } from "interfaces";

export interface IGlobalStore {
  user: IUser | null;
  clients: IClient[] | null;
  status: string;
  success: string;
  error: undefined | string;
}
export interface IGlobalStoreSelector {
  globalStore: IGlobalStore;
}
