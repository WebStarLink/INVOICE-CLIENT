import { IClient, IProfile } from "interfaces";

export interface IProps {
  profile?: IProfile;
  client?: IClient;
  onSubmit: (values: IProfile | IClient) => void;
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
