import { NEXT_PUBLIC_BASE_URL } from "@/app/_shared/config";

export const authRequestUrls = {
  signin: () => {
    return "auth/signin";
  },

  sendSignupAuthenticationNumber: () => {
    return "auth/email";
  },

  sendFindPasswordAuthenticationNumber: () => {
    return "auth/password/email";
  },

  checkAuthenticationNumber: () => {
    return "auth/code";
  },

  signup: () => {
    return "auth/signup";
  },

  tokenReissuance: () => {
    return NEXT_PUBLIC_BASE_URL + "auth";
  },

  findPassword: () => {
    return "auth/password";
  },
};
