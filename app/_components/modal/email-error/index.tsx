import { ModalAtomFamily } from "@/app/_atoms";
import { useRecoilState } from "recoil";
import * as S from "./style";
import BaseModal from "@/app/_components/common/layout/modal";
import Link from "next/link";

type page = "signup" | "find-password";

interface EmailErrorModalProps {
  pageType: page;
}

export default function EmailErrorModal(props: EmailErrorModalProps) {
  const [_, setModal] = useRecoilState(ModalAtomFamily(props.pageType));

  const onMove = () => setModal(false);

  return (
    <BaseModal setModal={setModal}>
      <S.EmailErrorModal onClick={(e) => e.stopPropagation()}>
        <S.Text>
          {props.pageType === "signup" && "이미 가입된 이메일이에요"}
          {props.pageType === "find-password" &&
            "해당 이메일은 가입되지 않았어요"}
        </S.Text>
        <S.EmojiBox>😯</S.EmojiBox>
        <S.BottomButtonBox>
          <Link href={props.pageType === "signup" ? "/login" : "/signup"}>
            <S.GoLoginBox onClick={onMove}>
              {props.pageType === "signup" && "로그인 하러가기"}
              {props.pageType === "find-password" && "회원가입 하기"}
            </S.GoLoginBox>
          </Link>
          <S.RetryBox onClick={() => setModal(false)}>다시 입력</S.RetryBox>
        </S.BottomButtonBox>
      </S.EmailErrorModal>
    </BaseModal>
  );
}
