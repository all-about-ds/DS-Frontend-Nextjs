import { NEXT_PUBLIC_BASE_URL } from "@/shared/config";

export const authUrls = {
  tokenReissuance: () => {
    return NEXT_PUBLIC_BASE_URL + "auth";
  },
};
