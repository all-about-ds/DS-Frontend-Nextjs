import { instance } from "@/app/_libs/instance";
import { RequestGroupListType } from "@/app/_types/group.type";
import { groupRequestUrls } from "../url/group.url";
import tokenService from "@/app/_utils/tokenService";

class Group {
  getGroupList(data: RequestGroupListType) {
    try {
      return instance({
        method: "GET",
        url: data.popularity
          ? groupRequestUrls.getGroupList() + "/popularity"
          : groupRequestUrls.getGroupList(),
        params: {
          page: data.page,
          size: data.size,
          keyword: data.keyword,
        },
      });
    } catch (error) {
      return error;
    }
  }

  joinGroup(password: string | undefined, index: number | undefined) {
    try {
      return instance({
        method: "POST",
        url: groupRequestUrls.joinGroup() + `/${index}`,
        params: {
          password: password,
        },
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  isMember(idx: number | undefined) {
    try {
      return instance({
        method: "GET",
        url: groupRequestUrls.isMember() + `${idx}`,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }
}
export default new Group();
