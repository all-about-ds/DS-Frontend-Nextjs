"use client";

import * as S from "./style";
import * as Image from "@/app/_assets";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { ref, remove } from "@firebase/database";
import { GroupInformationType } from "@/app/_types/group.type";
import groupRequest from "@/app/_api/request/group.request";
import { db } from "@/app/_shared/firebase";
import { useRouter } from "next/navigation";
import memberRequest from "@/app/_api/request/member.request";
import GroupPageHeader from "@/app/_components/common/header/group-page";
import {
  GroupIsClickedAtom,
  ModalAtomFamily,
  UserDataAtomFamily,
} from "@/app/_atoms";
import DefaultModal from "@/app/_components/modal/default";
import Link from "next/link";

export default function GroupInformationPage({ groupId }: { groupId: number }) {
  const [leaveGroupModal, setLeaveGroupModal] = useRecoilState(
    ModalAtomFamily("leaveGroup")
  );
  const [deleteGroupModal, setDeleteGroupModal] = useRecoilState(
    ModalAtomFamily("deleteGroup")
  );

  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [information, setInformation] = useState<GroupInformationType>();
  const [, setGroupIsClicked] = useRecoilState(GroupIsClickedAtom);
  const router = useRouter();

  const memberList = JSON.stringify(information?.memberList);

  useEffect(() => {
    const getGroupInformationById = async () => {
      try {
        const res: any = await groupRequest.getGroupInformation(
          String(groupId)
        );
        setIsOwner(res.data.host);
        setInformation(res.data);
      } catch (e: any) {
        if (e.response.status === 404) {
          toast.error("존재하지 않는 그룹입니다");
          router.replace("/");
        }
      }
    };

    getGroupInformationById();
  }, []);

  const deleteGroup = async () => {
    try {
      await groupRequest.deleteGroup(information?.idx);
      remove(ref(db, `chattings/${information?.name}`));
      remove(ref(db, `timers/${information?.name}`));

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
      remove(ref(db, `timers/${information?.name}/users/${userName}`));

      setLeaveGroupModal(false);
      toast.success("그룹을 나갔어요");
      router.replace("/my");
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
      <GroupPageHeader title={information?.name} groupId={groupId} />
      <S.GroupImage src={information?.img} alt="그룹 이미지" />
      <S.TitleBox>
        <S.Title>{information?.name}</S.Title>
        {isOwner ? (
          <S.GroupManageButtonBox>
            <div onClick={() => setDeleteGroupModal(true)}>
              <Image.DeleteButton />
            </div>
            <Link
              href={{
                pathname: "/group/edit",
                query: {
                  idx: information?.idx,
                  img: information?.img,
                  title: information?.name,
                  description: information?.description,
                  maxCount: information?.memberList.length,
                },
              }}
              as={"/group/edit"}
            >
              <Image.OwnerButton />
            </Link>
          </S.GroupManageButtonBox>
        ) : (
          <S.LeaveGroupText onClick={() => setLeaveGroupModal(true)}>
            그룹 나가기
          </S.LeaveGroupText>
        )}
      </S.TitleBox>
      <S.Description>{information?.description}</S.Description>
      <S.Line />
      <S.TextMembersBox>
        <S.TextMembers>그룹원들</S.TextMembers>
        {isOwner && (
          <Link
            href={{
              pathname: "/group/" + groupId + "/member",
              query: { list: memberList },
            }}
            as={"/group/" + groupId + "/member"}
          >
            <Image.OwnerButton />
          </Link>
        )}
      </S.TextMembersBox>
      <div style={{ margin: "0px 0px 2px 0.3975rem" }}>
        <Image.OwnerIcon />
      </div>
      <S.MemberList>
        <S.MemberBox key={"head"}>
          {!information?.head.profileImg && <Image.DefaultProfileImage />}
          {information?.head.profileImg && (
            <S.MemberImage
              src={information?.head.profileImg}
              alt="그룹원 이미지"
            />
          )}
          <div>
            <S.MemberRole>그룹 부장</S.MemberRole>
            <S.MemberName>{information?.head.name}</S.MemberName>
          </div>
        </S.MemberBox>
        {information?.memberList.map((member) => (
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
