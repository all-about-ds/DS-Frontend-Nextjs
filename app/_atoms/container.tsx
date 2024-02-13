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

export const ModalAtomFamily = atomFamily({
  key: "modal",
  default: false,
});

export const UserIdAtom = atom({
  key: "userId",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const CurrentSectionsAtomFamily = atomFamily({
  key: "currentSection",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const TimerAtomFamily = atomFamily({
  key: "currentTimer",
  default: {
    minute: 5,
    seconds: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const AuthEmailAtomFamily = atomFamily({
  key: "authEmail",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
