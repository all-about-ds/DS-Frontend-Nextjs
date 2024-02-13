import { instance } from "@/app/_libs/instance";
import {
  FindPasswordType,
  LoginType,
  SignupType,
} from "@/app/_types/auth.type";
import { authRequestUrls } from "../url/auth.url";

class Auth {
  signin(data: LoginType) {
    try {
      return instance({
        method: "POST",
        url: authRequestUrls.signin(),
        data: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  sendSignupAuthenticationNumber(email: string) {
    try {
      return instance({
        method: "POST",
        url: authRequestUrls.sendSignupAuthenticationNumber(),
        params: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  sendFindPasswordAuthenticationNumber(email: string) {
    try {
      return instance({
        method: "POST",
        url: authRequestUrls.sendFindPasswordAuthenticationNumber(),
        params: {
          email: email,
        },
      });
    } catch (error) {
      return error;
    }
  }

  checkAuthenticationNumber(email: string, code: string) {
    try {
      return instance({
        method: "GET",
        url: authRequestUrls.checkAuthenticationNumber(),
        params: {
          email: email,
          code: code,
        },
      });
    } catch (error) {
      return error;
    }
  }

  signup(data: SignupType) {
    try {
      return instance({
        method: "POST",
        url: authRequestUrls.signup(),
        data: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }

  findPassword(data: FindPasswordType) {
    try {
      return instance({
        method: "PATCH",
        url: authRequestUrls.findPassword(),
        data: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Auth();
