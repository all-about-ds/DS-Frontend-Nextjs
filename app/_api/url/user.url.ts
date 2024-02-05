import { NEXT_PUBLIC_BASE_URL } from "@/app/_shared/config";

export const userRequestUrls = {
  getUserData: () => {
    return NEXT_PUBLIC_BASE_URL + "user/header";
  },
};
