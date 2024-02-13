import { MyGroupListType } from "@/app/_types/user.type";
import * as S from "./style";

export default function MyPostCard(props: MyGroupListType) {
  return (
    <S.MyPostCard>
      <S.ItemBackgroundImage src={props.img} alt="그룹 이미지" />
      <S.Shadow>
        <S.ItemName>{props.name}</S.ItemName>
      </S.Shadow>
    </S.MyPostCard>
  );
}
