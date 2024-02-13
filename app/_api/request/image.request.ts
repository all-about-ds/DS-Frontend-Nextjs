import { instance } from "@/app/_libs/instance";
import tokenService from "@/app/_utils/tokenService";

class Image {
  postImage(data: FormData) {
    try {
      return instance({
        method: "POST",
        url: "image",
        data,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Image();
