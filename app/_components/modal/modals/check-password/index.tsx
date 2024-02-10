import { ref, set } from "@firebase/database";
import { db } from "@/app/_shared/firebase";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { useRouter } from "next/navigation";
import BaseModal from "@/app/_components/modal/base";
import { ModalAtomFamily, UserDataAtomFamily, UserIdAtom } from "@/app/_atoms";
import groupRequest from "@/app/_api/request/group.request";

type CheckPasswordModalProps = {
  index: number | undefined;
  groupName: string | undefined;
};

export default function CheckPasswordModal(props: CheckPasswordModalProps) {
  const [, setCheckPasswordModal] = useRecoilState(
    ModalAtomFamily("check-password")
  );
  const [userId] = useRecoilState(UserIdAtom);
  const [userName] = useRecoilState(UserDataAtomFamily("name"));
  const router = useRouter();
  const [isError, setError] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{ password: string }>();

  const onValid = async (data: { password: string | undefined }) => {
    try {
      setError(false);
      await groupRequest.joinGroup(data.password, props.index);

      await set(ref(db, `timers/${props.groupName}/users/${userName}`), {
        name: userName,
        time: 0,
        active: false,
        id: userId,
      });

      router.push(`/group/${props.index}/information`);
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("비밀번호가 일치하지 않았어요!");
      } else if (e.response.status === 404) {
        toast.error("존재하지 않는 그룹이에요");
      } else if (e.response.status === 409) {
        toast.error("이미 가입된 그룹이에요!");
      }
    }
  };

  const inValid = () => {
    setError(true);
  };

  const cancel = () => {
    setCheckPasswordModal(false);
  };

  return (
    <BaseModal setModal={setCheckPasswordModal}>
      <S.PasswordBox onClick={(e) => e.stopPropagation()}>
        <S.Title>비밀번호</S.Title>
        <S.Description>
          비공개 설정이 걸려있는 그룹입니다, 가입하실려면 비밀번호를
          입력해주세요.
        </S.Description>
        <form onSubmit={handleSubmit(onValid, inValid)}>
          <S.InputBox
            isError={isError}
            placeholder="비밀번호를 입력해주세요."
            type="password"
            {...register("password", {
              required: "비밀번호는 필수입력입니다.",
              minLength: {
                value: 4,
                message: "숫자 4자리의 비밀번호를 입력해주세요.",
              },
              maxLength: {
                value: 4,
                message: "숫자 4자리의 비밀번호를 입력해주세요.",
              },
            })}
          />
          <S.ButtonBox>
            <S.CancelButton onClick={cancel}>취소</S.CancelButton>
            <S.SubmitButton disabled={isSubmitting}>완료</S.SubmitButton>
          </S.ButtonBox>
        </form>
      </S.PasswordBox>
    </BaseModal>
  );
}
