export interface IData {
  id: number;
  name: string;
  text: string;
  number: number;
  desctiption: string;
}

export interface ITableData {
  data: IData[];
  onClick: (client: IData) => void;
}
