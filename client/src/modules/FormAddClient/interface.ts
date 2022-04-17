export interface IValues {
  legal: string;
  itn: number | string;
  address: string;
  iban: string;
  bank: string;
  bic: string;
  noticea: string;
  noticeb: string;
  contract: string;
  contractdate: string;
  phone: string;
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
