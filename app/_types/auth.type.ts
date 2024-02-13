import { SetterOrUpdater } from "recoil";

export type TokenType = {
  accessToken: string;
  refreshToken: string;
  accessExp: string;
  refreshExp: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type SignupType = {
  name: string;
  email: string;
  password: string;
};

export type FindPasswordType = {
  email: string;
  password: string;
};

export type AuthFormSectionPropsType = {
  title: string;
  setSection: SetterOrUpdater<number>;
  atomKey: string;
};
