import React from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import * as Image from "@/app/_assets";
import BaseModal from "@/app/_components/common/layout/modal";
import { ModalAtomFamily } from "@/app/_atoms";

type MyPageBaseModalLayoutProps = {
  title: string;
  atomKey: string;
  children: React.ReactNode;
};

export default function MyPageBaseModal(props: MyPageBaseModalLayoutProps) {
  const [, setModal] = useRecoilState(ModalAtomFamily(props.atomKey));

  return (
    <BaseModal setModal={setModal}>
      <S.MyPageModal onClick={(e) => e.stopPropagation()}>
        <S.TopBar>
          <div />
          <h1>{props.title}</h1>
          <div onClick={() => setModal(false)}>
            <Image.AuthExitIcon />
          </div>
        </S.TopBar>
        {props.children}
      </S.MyPageModal>
    </BaseModal>
  );
}
