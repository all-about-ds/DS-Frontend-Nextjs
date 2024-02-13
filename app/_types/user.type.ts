export interface GetMyDataType {
  idx: number;
  name: string;
  profileImg: string;
  groups: MyGroupListType[];
}

export interface MyGroupListType {
  idx: number;
  name: string;
  img: string;
}

export interface TimerUserType {
  name: string;
  time: number;
  active: boolean;
  id: number;
}
