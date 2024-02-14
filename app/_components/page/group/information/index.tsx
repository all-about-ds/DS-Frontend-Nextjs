"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import { ref, remove } from "@firebase/database";
import groupRequest from "@/app/_api/request/group.request";
import { db } from "@/app/_shared/firebase";
import { useRouter } from "next/navigation";
import memberRequest from "@/app/_api/request/member.request";
import GroupPageHeader from "@/app/_components/common/header/group-page";
import DefaultModal from "@/app/_components/modal/default";
import { GroupInformationType } from "@/app/_types/group.type";
import {
  GroupDataAtom,
  GroupIsClickedAtom,
  ModalAtomFamily,
  UserDataAtomFamily,
} from "@/app/_atoms";

export default function GroupInformationPage({ groupId }: { groupId: number }) {
  const [leaveGroupModal, setLeaveGroupModal] = useRecoilState(
    ModalAtomFamily("leaveGroup")
  );
  const [deleteGroupModal, setDeleteGroupModal] = useRecoilState(
    ModalAtomFamily("deleteGroup")
  );
  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const groupData = useRecoilValue(GroupDataAtom);
  const [data, setData] = useState<GroupInformationType>();
  const [, setGroupIsClicked] = useRecoilState(GroupIsClickedAtom);
  const router = useRouter();

  useEffect(() => {
    const checkServerClientSync = () => {
      if (
        groupData?.name !== "" &&
        !groupData?.memberList.some((member) => member.name === userName) &&
        !groupData?.head.name === userName
      ) {
        router.replace("/");
        toast.error("잘못된 접근입니다");
      } else if (groupData.name !== "") {
        setData(groupData);
      }
    };

    checkServerClientSync();
  }, [groupData]);

  const deleteGroup = async () => {
    try {
      await groupRequest.deleteGroup(data?.idx);
      remove(ref(db, `chattings/${data?.name}`));
      remove(ref(db, `timers/${data?.name}`));

      setDeleteGroupModal(false);
      toast.error("삭제되었습니다!");
      setGroupIsClicked(false);
      router.replace("/");
    } catch (e) {
      Promise.reject(e);
    }
  };

  const leaveGroup = async () => {
    try {
      await memberRequest.leaveGroup(String(groupId));
      remove(ref(db, `timers/${data?.name}/users/${userName}`));

      setLeaveGroupModal(false);
      toast.success("그룹을 나갔어요");
      router.replace("/my-page");
    } catch {
      setLeaveGroupModal(false);
      toast.error("알 수 없는 오류에요");
    }
  };

  return (
    <S.GroupInformationPageLayout>
      {leaveGroupModal && (
        <DefaultModal
          atomKey="leaveGroup"
          title="그룹 나가기"
          description="정말 그룹을 나가시겠어요?"
          excuteButtonText="나가기"
          executeFunc={leaveGroup}
        />
      )}
      {deleteGroupModal && (
        <DefaultModal
          atomKey="deleteGroup"
          title="그룹 삭제하기"
          description="정말 그룹을 삭제 하시겠어요?"
          excuteButtonText="삭제하기"
          executeFunc={deleteGroup}
        />
      )}
      <GroupPageHeader idx={groupId} />
      <S.GroupImage src={data?.img} alt="그룹 이미지" />
      <S.TitleBox>
        <S.Title>{data?.name}</S.Title>
        {data?.host ? (
          <S.GroupManageButtonBox>
            <div onClick={() => setDeleteGroupModal(true)}>
              <Image.DeleteButton />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/group/edit")}
            >
              <Image.OwnerButton />
            </div>
          </S.GroupManageButtonBox>
        ) : (
          <S.LeaveGroupText onClick={() => setLeaveGroupModal(true)}>
            그룹 나가기
          </S.LeaveGroupText>
        )}
      </S.TitleBox>
      <S.Description>{data?.description}</S.Description>
      <S.Line />
      <S.TextMembersBox>
        <S.TextMembers>그룹원들</S.TextMembers>
        {data?.host && (
          <div onClick={() => router.push("/group/members-management")}>
            <Image.OwnerButton />
          </div>
        )}
      </S.TextMembersBox>
      <div style={{ margin: "0px 0px 2px 0.3975rem" }}>
        <Image.OwnerIcon />
      </div>
      <S.MemberList>
        <S.MemberBox key={"head"}>
          {!data?.head.profileImg && <Image.DefaultProfileImage />}
          {data?.head.profileImg && (
            <S.MemberImage
              src={groupData?.head.profileImg}
              alt="그룹원 이미지"
            />
          )}
          <div>
            <S.MemberRole>그룹 부장</S.MemberRole>
            <S.MemberName>{data?.head.name}</S.MemberName>
          </div>
        </S.MemberBox>
        {data?.memberList
          .filter((member) => member.idx !== data?.head.idx)
          .map((member) => (
            <S.MemberBox key={member.idx}>
              {!member.profileImg && <Image.DefaultProfileImage />}
              {member.profileImg && (
                <S.MemberImage src={member.profileImg} alt="그룹원 이미지" />
              )}
              <div>
                <S.MemberRole>그룹원</S.MemberRole>
                <S.MemberName>{member.name}</S.MemberName>
              </div>
            </S.MemberBox>
          ))}
      </S.MemberList>
    </S.GroupInformationPageLayout>
  );
}
