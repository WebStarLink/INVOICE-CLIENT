import { IProfile } from "interfaces";

export interface IProps {
  profile?: IProfile;
  onSubmit: (values: IProfile) => void;
}

export interface IForm {
  values: IProfile;
  errors: IProfile;
  touched: IProfile;
  dirty: boolean;
  handleSubmit: () => void;
  handleChange: () => void;
  setFieldValue: (key: string, value: string) => void;
  isSubmitting: boolean;
}
