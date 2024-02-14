import * as S from "./style";
import * as Image from "@/app/_assets";
import { toast } from "react-toastify";
import { MemberItemPropsType } from "@/app/_types/user.type";
import groupRequest from "@/app/_api/request/group.request";
import { useRecoilValue } from "recoil";
import { GroupDataAtom } from "@/app/_atoms";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MemberItem(props: MemberItemPropsType) {
  const { isClicked, handleClick, elementIndex } = props;
  const [deletedMemberIdx, setDeletedMemberIdx] = useState<number | undefined>(
    undefined
  );
  const groupData = useRecoilValue(GroupDataAtom);
  const router = useRouter();

  const onKickMember = async () => {
    setDeletedMemberIdx(undefined);

    try {
      setDeletedMemberIdx(props.idx);
      await groupRequest.kickMember(Number(groupData?.idx), props.idx);
      toast.success(props.name + "님을 추방했어요");
    } catch {
      toast.error("알 수 없는 오류에요");
    }
  };

  const onMandateMember = async () => {
    try {
      await groupRequest.mandateMember(Number(groupData?.idx), props.idx);
      toast.success("위임을 성공했어요");
      router.replace("/group/" + groupData?.idx + "/information");
    } catch {
      toast.error("알 수 없는 오류에요");
    }
  };

  return (
    <>
      <S.MemberItem className={deletedMemberIdx === props.idx ? "deleted" : ""}>
        <S.MemberBox>
          {!props.profileImg && <Image.DefaultProfileImage />}
          {props.profileImg && (
            <S.MemberProfile src={props.profileImg} alt="그룹원 이미지" />
          )}
          <S.MemberName>{props.name}</S.MemberName>
        </S.MemberBox>
        <S.SettingBox onClick={() => handleClick(elementIndex)}>
          <div style={{ cursor: "pointer" }}>
            {isClicked ? <Image.PurpleDot /> : <Image.ThreeDot />}
          </div>
          {isClicked && (
            <S.ManageButtonBox>
              <S.NameBox>{props.name}</S.NameBox>
              <S.Line />
              <S.Expel onClick={onKickMember}>추방하기</S.Expel>
              <S.Line />
              <S.HandOver onClick={onMandateMember}>관리자 넘기기</S.HandOver>
            </S.ManageButtonBox>
          )}
        </S.SettingBox>
      </S.MemberItem>
    </>
  );
}
