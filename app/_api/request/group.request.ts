import { instance } from "@/app/_libs/instance";
import { CreateGroupType, RequestGroupListType } from "@/app/_types/group.type";
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

  getGroupInformation(groupId: string) {
    try {
      return instance({
        method: "GET",
        url: groupRequestUrls.getGroupInformation() + groupId,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  createGroup(data: CreateGroupType) {
    try {
      return instance({
        method: "POST",
        url: groupRequestUrls.getGroupList(),
        data,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  editGroup(data: CreateGroupType, index: number) {
    try {
      return instance({
        method: "PATCH",
        url: groupRequestUrls.getGroupList() + `/${index}`,
        data,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  kickMember(groupId: number, memberId: number) {
    try {
      return instance({
        method: "DELETE",
        url: groupRequestUrls.kickMember() + groupId + "/" + memberId,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  mandateMember(groupId: number, memberId: number) {
    try {
      return instance({
        method: "PATCH",
        url: groupRequestUrls.mandateMember() + groupId + "/" + memberId,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  deleteGroup(index: number | undefined) {
    try {
      return instance({
        method: "DELETE",
        url: groupRequestUrls.deleteGroup() + `${index}`,
        headers: {
          Authorization: "Bearer " + tokenService.getLocalAccessToken(),
        },
      });
    } catch (error) {
      return error;
    }
  }

  getGroupTimer(id: string) {
    try {
      return instance({
        method: "GET",
        url: groupRequestUrls.getGroupTimer() + id,
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
