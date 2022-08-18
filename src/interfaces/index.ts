export interface IAuth {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  email: string;
  activationSuccessful: boolean;
  profile: IProfile;
}

export interface IProfile {
  legal: string;
  itn: string;
  address: string;
  iban: string;
  bank: string;
  bic: string;
  phone: string;
}

export interface IClient extends IProfile {
  _id?: string;
  noticea?: string;
  noticeb?: string;
  contract?: string;
  contractdate?: Date;
  owner?: string;
}
