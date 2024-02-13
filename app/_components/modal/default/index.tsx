import * as S from "./style";
import { useRecoilState } from "recoil";
import BaseModal from "@/app/_components/common/layout/modal";
import { ModalAtomFamily } from "@/app/_atoms";

type DefaultModal = {
  atomKey: string;
  title: string;
  description: string;
  excuteButtonText: string;
  executeFunc: () => void;
};

export default function DefaultModal(props: DefaultModal) {
  const [_, setModal] = useRecoilState(ModalAtomFamily(props.atomKey));

  const onCancle = () => {
    setModal(false);
  };

  return (
    <BaseModal setModal={setModal}>
      <S.DefaultModal onClick={(e) => e.stopPropagation()}>
        <div>
          <S.Title>{props.title}</S.Title>
          <S.Description>{props.description}</S.Description>
        </div>
        <S.ButtonBox>
          <S.CancleButton onClick={onCancle}>취소</S.CancleButton>
          <S.ExecuteButton onClick={props.executeFunc}>
            {props.excuteButtonText}
          </S.ExecuteButton>
        </S.ButtonBox>
      </S.DefaultModal>
    </BaseModal>
  );
}
