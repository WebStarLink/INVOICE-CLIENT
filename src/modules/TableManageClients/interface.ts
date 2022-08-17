import { IClient } from "interfaces";

export interface ITableData {
  data: IClient[];
  onClick: (value: IClient) => void;
}
