import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const SearchAtom = atom({
  key: "search",
  default: {
    keyword: "",
    isSearchRequested: false,
  },
});

export const UserDataAtomFamily = atomFamily({
  key: "user-data",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
