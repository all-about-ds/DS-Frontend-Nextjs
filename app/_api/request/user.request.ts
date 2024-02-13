import { instance } from "@/app/_libs/instance";
import tokenService from "@/app/_utils/tokenService";
import { userRequestUrls } from "../url/user.url";

class User {
  getHeaderData() {
    try {
      return instance({
        method: "GET",
        url: userRequestUrls.getHeaderData(),
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getMyData() {
    try {
      return instance({
        method: "GET",
        url: userRequestUrls.getUserData(),
        headers: {
          Authorization: tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  changeName(name: string) {
    try {
      return instance({
        method: "PATCH",
        url: userRequestUrls.changeName(),
        data: {
          name: name,
        },
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  changeProfileImage(profileImage: string) {
    try {
      return instance({
        method: "PATCH",
        url: userRequestUrls.changeProfileImage(),
        data: {
          updateUserProfile: profileImage,
        },
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  withdrawal() {
    try {
      return instance({
        method: "DELETE",
        url: "user",
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getUserId() {
    try {
      return instance({
        method: "GET",
        url: "chat",
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
