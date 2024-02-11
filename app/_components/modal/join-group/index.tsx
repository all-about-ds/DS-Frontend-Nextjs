import { useRecoilState } from "recoil";
import * as S from "./style";
import * as Image from "@/app/_assets";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ref, set } from "@firebase/database";
import { db } from "@/app/_shared/firebase";
import BaseModal from "@/app/_components/common/layout/modal";
import { GroupType } from "@/app/_types/group.type";
import { ModalAtomFamily, UserDataAtomFamily, UserIdAtom } from "@/app/_atoms";
import { useRouter } from "next/navigation";
import groupRequest from "@/app/_api/request/group.request";

type JoinGroupModalProps = {
  modalProps: GroupType | undefined;
};

export default function JoinGroupModal(props: JoinGroupModalProps) {
  const [, setJoinGroupModal] = useRecoilState(ModalAtomFamily("join-group"));
  const [, setCheckPasswordModal] = useRecoilState(
    ModalAtomFamily("check-password")
  );
  const [userId] = useRecoilState(UserIdAtom);
  const [isMember, setIsMember] = useState<boolean>(false);
  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const router = useRouter();

  const onClick = async () => {
    if (isMember) {
      await router.push(`/group/${props.modalProps?.idx}/information`);
      setJoinGroupModal(false);
    } else {
      if (props.modalProps?.memberCount !== props.modalProps?.maxCount) {
        if (props.modalProps?.secret) {
          setJoinGroupModal(false);
          setCheckPasswordModal(true);
        } else {
          try {
            await groupRequest.joinGroup(undefined, props.modalProps?.idx);

            await set(
              ref(db, `timers/${props.modalProps?.name}/users/` + userName),
              {
                name: userName,
                time: 0,
                active: false,
                id: userId,
              }
            );

            router.push(`/group/${props.modalProps?.idx}/information`);
            setJoinGroupModal(false);
          } catch (e: any) {
            if (e.response.status === 404) {
              toast.error("존재하지 않는 그룹이에요");
            } else if (e.response.status === 409) {
              toast.error("이미 가입된 그룹이에요!");
            }
            Promise.reject(e);
          }
        }
      } else {
        toast.error("최대 인원 초과로 가입하실 수 없어요!");
      }
    }
  };

  const checkIsMember = async (idx: number | undefined) => {
    try {
      const response: any = await groupRequest.isMember(idx);
      setIsMember(response.data.isMember);
    } catch (e: any) {
      Promise.reject(e);
    }
  };

  useEffect(() => {
    checkIsMember(props.modalProps?.idx);
  }, []);

  return (
    <BaseModal setModal={setJoinGroupModal}>
      <S.GroupIsClickedModal onClick={(e) => e.stopPropagation()}>
        <div style={{ position: "relative" }}>
          <S.Image src={props.modalProps?.img} alt="그룹이미지" />
          {props.modalProps?.secret && (
            <S.LockBox>
              <Image.LockIcon />
            </S.LockBox>
          )}
          <S.ExitBox onClick={() => setJoinGroupModal(false)}>
            <Image.ExitIcon />
          </S.ExitBox>
        </div>
        <S.ContentWrapper>
          <S.memberNum>
            현재 {props.modalProps?.memberCount}/{props.modalProps?.maxCount}명
          </S.memberNum>
          <S.Title>{props.modalProps?.name}</S.Title>
          <S.UserBox>
            {!props.modalProps?.leaderImg && <Image.DefaultProfileImage />}
            {props.modalProps?.leaderImg && (
              <S.Profile src={props.modalProps?.leaderImg} alt="유저 프로필" />
            )}
            <S.UserName>{props.modalProps?.leaderName}</S.UserName>
          </S.UserBox>
          <S.Description>{props.modalProps?.description}</S.Description>
          <S.JoinButton onClick={onClick}>
            {isMember ? "이동" : "가입"}
          </S.JoinButton>
        </S.ContentWrapper>
      </S.GroupIsClickedModal>
    </BaseModal>
  );
}
