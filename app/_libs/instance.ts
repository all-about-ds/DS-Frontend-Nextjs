import axios from "axios";
import tokenService from "@/app/_utils/tokenService";
import { NEXT_PUBLIC_BASE_URL } from "@/app/_shared/config";
import { authUrls } from "@/app/_api/url/auth.url";

export const instance = axios.create({
  baseURL: NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use(
  (config: any) => {
    const token = tokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const error = err.response;
    if (error.status === 401 && !error.config.__isRetryRequest) {
      return getAuthToken().then((response: any) => {
        console.log("new Token:", response.data);
        tokenService.setUser(response.data);
        error.config.__isRetryRequest = true;
        return instance(error.config);
      });
    }
    return Promise.reject(err);
  }
);

let authTokenRequest: any;

function getAuthToken() {
  if (!authTokenRequest) {
    authTokenRequest = makeActualAuthenticationRequest();
    authTokenRequest
      .catch(function () {
        tokenService.removeUser();
        window.location.replace("auth/signin");
      })
      .then(resetAuthTokenRequest, resetAuthTokenRequest);
  }

  return authTokenRequest;
}

function makeActualAuthenticationRequest() {
  return axios({
    method: "PATCH",
    url: authUrls.tokenReissuance(),
    headers: {
      RefreshToken: tokenService.getLocalRefreshToken(),
    },
  });
}

function resetAuthTokenRequest() {
  authTokenRequest = null;
}
