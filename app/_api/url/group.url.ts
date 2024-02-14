import { NEXT_PUBLIC_BASE_URL } from "@/app/_shared/config";

export const groupRequestUrls = {
  getGroupList: () => {
    return "group";
  },

  joinGroup: () => {
    return "group/join";
  },

  isMember: () => {
    return "group/detail/";
  },

  getGroupInformation: () => {
    return "group/information/";
  },

  kickMember: () => {
    return "member/";
  },

  mandateMember: () => {
    return "member/";
  },

  deleteGroup: () => {
    return "group/";
  },
  getGroupTimer: () => {
    return "group/timer/";
  },
};
