export interface IValues {
  email: string;
  password: string;
}
export interface IForm {
  values: IValues;
  errors: IValues;
  touched: IValues;
  handleSubmit: () => void;
  handleChange: () => void;
  setFieldValue: (key: string, value: string) => void;
  isSubmitting: boolean;
}
