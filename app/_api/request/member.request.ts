import { instance } from "@/app/_libs/instance";
import tokenService from "@/app/_utils/tokenService";

class Member {
  leaveGroup(groupId: string) {
    try {
      return instance({
        method: "DELETE",
        url: "member/exit/" + groupId,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}

export default new Member();
