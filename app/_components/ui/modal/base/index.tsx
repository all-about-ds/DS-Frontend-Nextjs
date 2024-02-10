import * as S from "./style";
import { useEffect } from "react";
import { SetterOrUpdater } from "recoil";

interface Props extends React.HTMLAttributes<HTMLElement> {
  setModal: SetterOrUpdater<boolean>;
}

export default function BaseModal({ children, setModal }: Props) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px; 
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onClick = () => {
    setModal(false);
  };

  return (
    <S.BaseModalLayout>
      <S.Background onClick={onClick}>{children}</S.Background>
    </S.BaseModalLayout>
  );
}
