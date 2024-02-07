import { instance } from "@/app/_libs/instance";
import { RequestGroupListType } from "@/app/_types/group.type";
import { groupRequestUrls } from "../url/group.url";

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
}
export default new Group();
