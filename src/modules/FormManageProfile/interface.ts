import { IProfile } from "interfaces";

export interface IForm {
  values: IProfile;
  errors: IProfile;
  touched: IProfile;
  handleSubmit: () => void;
  handleChange: () => void;
  setFieldValue: (key: string, value: string) => void;
  isSubmitting: boolean;
}
