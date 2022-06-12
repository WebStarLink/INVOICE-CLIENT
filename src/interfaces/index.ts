export interface IAuth {
  email: string;
  password: string;
}

export interface IProfile {
  legal: string;
  itn: string;
}

export interface IUser {
  id: string;
  email: string;
  activationSuccessful: boolean;
  profile: IProfile;
}
