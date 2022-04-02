export interface IGlobalStore {
  owner: [];
  client: [];
  status: string;
  success: string;
  error: undefined | string;
}
export interface IGlobalStoreSelector {
  globalStore: IGlobalStore;
}
