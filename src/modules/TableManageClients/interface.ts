import { IClient } from "interfaces";

export interface ITableData {
  data: IClient[];
  onClick: (client: IClient) => void;
}
