import { instance } from "@/app/_libs/instance";
import tokenService from "@/app/_utils/tokenService";
import { userRequestUrls } from "../url/user.url";

class User {
  getUserData() {
    try {
      return instance({
        method: "GET",
        url: userRequestUrls.getUserData(),
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new User();
