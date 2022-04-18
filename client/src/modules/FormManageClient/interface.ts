export interface IValues {
  id: number;
}
export interface IForm {
  values: IValues;
  errors: IValues;
  touched: IValues;
  handleSubmit: () => void;
  handleChange: () => void;
  isSubmitting: boolean;
}

export interface IFormManageClient {
  selectedClient: IValues;
  handleCancel: () => void;
}
