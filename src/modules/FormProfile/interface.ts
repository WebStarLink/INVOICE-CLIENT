import { IClient, IProfile } from "interfaces";

export interface IProps {
  profile?: IProfile;
  onSubmit: (values: IClient) => void;
}

export interface IForm {
  values: IClient;
  errors: IClient;
  touched: IClient;
  dirty: boolean;
  handleSubmit: () => void;
  handleChange: () => void;
  setFieldValue: (key: string, value: string) => void;
  isSubmitting: boolean;
}
