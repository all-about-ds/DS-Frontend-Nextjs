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
