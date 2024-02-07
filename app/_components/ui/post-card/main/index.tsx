import * as S from "./style";
import * as Image from "@/app/_assets";
import { GroupType } from "@/app/_types/group.type";

export default function MainPostCard(props: GroupType) {
  return (
    <>
      <S.PostCard>
        <div style={{ position: "relative" }}>
          <S.Thumbnail src={props.img} alt="그룹이미지"></S.Thumbnail>
          {props.secret && (
            <S.StyledLockIcon>
              <Image.LockIcon />
            </S.StyledLockIcon>
          )}
        </div>
        <S.TextBox>
          <S.MaxPeople>
            현재 {props.memberCount}/{props.maxCount}명
          </S.MaxPeople>
          <S.Title>{props.name}</S.Title>
          <S.Description>{props.description}</S.Description>
        </S.TextBox>
        <S.User>
          {!props.leaderImg && (
            <div style={{ marginRight: 8 }}>
              <Image.DefaultProfileImage />
            </div>
          )}
          {props.leaderImg && (
            <S.Profile src={props.leaderImg} alt="방장 프로필"></S.Profile>
          )}
          <S.UserName>{props.leaderName}</S.UserName>
        </S.User>
      </S.PostCard>
    </>
  );
}
