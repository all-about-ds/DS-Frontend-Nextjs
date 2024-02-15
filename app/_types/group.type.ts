export type GroupType = {
  idx: number;
  name: string;
  img: string;
  description: string;
  memberCount: number;
  maxCount: number;
  leaderImg: string;
  leaderName: string;
  secret: boolean;
};

export type RequestGroupListType = {
  keyword: string | undefined;
  page: number;
  size: number;
  popularity: boolean;
};

export type GroupContents = {
  size: number;
  page: number;
  groups: [];
};

export type PasswordType = {
  password: string | undefined;
};

export type MemberType = {
  idx: number;
  name: string;
  profileImg: string;
};

export type GroupInformationType = {
  idx: number;
  name: string;
  img: string;
  description: string;
  host: boolean;
  head: {
    idx: number;
    name: string;
    profileImg: string;
  };
  memberList: MemberType[];
};

export type CreateGroupType = {
  name: string;
  description: string;
  img: string;
  maxCount: number;
  secret: boolean;
  password: string | undefined;
};

export type GroupBuilderType = "create" | "edit";
