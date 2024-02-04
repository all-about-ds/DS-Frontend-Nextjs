import { TokenType } from "@/types/auth.type";

class TokenService {
  getLocalRefreshToken() {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("token") || "{}");
      return user?.refreshToken;
    }
  }
  getLocalAccessToken() {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("token") || "{}");
      return user?.accessToken;
    }
  }
  updateLocalAccessToken(token: string) {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("token") || "{}");
      user.accessToken = token;
      localStorage.setItem("token", JSON.stringify(user));
    }
  }

  getUser() {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("token") || "{}");
    }
  }
  setUser(user: TokenType) {
    if (typeof window !== "undefined") {
      localStorage.setItem("token", JSON.stringify(user));
    }
  }
  removeUser() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
  }
}

export default new TokenService();
