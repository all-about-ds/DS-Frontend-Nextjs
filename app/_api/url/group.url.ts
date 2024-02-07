import { NEXT_PUBLIC_BASE_URL } from "@/app/_shared/config";

export const groupRequestUrls = {
  getGroupList: () => {
    return NEXT_PUBLIC_BASE_URL + "group";
  },
};
