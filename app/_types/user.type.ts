export type GetMyDataType = {
  idx: number;
  name: string;
  profileImg: string;
  groups: MyGroupListType[];
};

export type MyGroupListType = {
  idx: number;
  name: string;
  img: string;
};

export type TimerUserType = {
  name: string;
  time: number;
  active: boolean;
  id: number;
};

export type MemberItemPropsType = {
  isClicked: boolean;
  handleClick(idx: number): void;
  elementIndex: number;
  idx: number;
  name: string;
  profileImg: string;
};
