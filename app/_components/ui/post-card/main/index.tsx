import * as S from "./style";
import * as Image from "@/app/_assets";
import { GroupType } from "@/app/_types/group.type";

type MainPostCardPropsType = {
  cardProps: GroupType;
};

export default function MainPostCard(props: MainPostCardPropsType) {
  return (
    <>
      <S.GroupBox>
        <div style={{ position: "relative" }}>
          <S.Thumbnail
            src={props.cardProps?.img}
            alt="그룹이미지"
          ></S.Thumbnail>
          {props.cardProps?.secret && (
            <S.StyledLockIcon>
              <Image.LockIcon />
            </S.StyledLockIcon>
          )}
        </div>
        <S.TextBox>
          <S.MaxPeople>
            현재 {props.cardProps?.memberCount}/{props.cardProps?.maxCount}명
          </S.MaxPeople>
          <S.Title>{props.cardProps?.name}</S.Title>
          <S.Description>{props.cardProps?.description}</S.Description>
        </S.TextBox>
        <S.User>
          {!props.cardProps?.leaderImg && (
            <div style={{ marginRight: 8 }}>
              <Image.DefaultProfileImage />
            </div>
          )}
          {props.cardProps?.leaderImg && (
            <S.Profile
              src={props.cardProps?.leaderImg}
              alt="방장 프로필"
            ></S.Profile>
          )}
          <S.UserName>{props.cardProps?.leaderName}</S.UserName>
        </S.User>
      </S.GroupBox>
    </>
  );
}
