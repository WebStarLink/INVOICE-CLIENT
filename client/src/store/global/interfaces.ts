export interface IGlobalStore {
  user: [];
  client: [];
  status: string;
  success: string;
  error: undefined | string;
}
export interface IGlobalStoreSelector {
  globalStore: IGlobalStore;
}
