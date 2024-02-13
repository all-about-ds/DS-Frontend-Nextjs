import React from "react";
import * as S from "./style";
import * as Image from "@/app/_assets";
import { SetterOrUpdater, useRecoilValue } from "recoil";
import { AuthEmailAtomFamily, CurrentSectionsAtomFamily } from "@/app/_atoms";
import { useRouter } from "next/navigation";
import authRequest from "@/app/_api/request/auth.request";

interface AuthFrameProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
  progressBarValue?: number;
  setSection?: SetterOrUpdater<number>;
  atomKey?: "signup" | "findPassword";
}

function AuthFrame(props: AuthFrameProps) {
  const authEmail = useRecoilValue(AuthEmailAtomFamily(props.atomKey));
  const section = useRecoilValue(CurrentSectionsAtomFamily(props.atomKey));
  const router = useRouter();

  const onBackIconClick = async () => {
    if (section === 3) {
      switch (props.atomKey) {
        case "signup": {
          await authRequest.sendSignupAuthenticationNumber(authEmail);
          break;
        }
        case "findPassword": {
          await authRequest.sendFindPasswordAuthenticationNumber(authEmail);
          break;
        }
      }
    }

    props.setSection?.((oldValue: number) => {
      if (oldValue === 1) {
        return 1;
      } else {
        return oldValue - 1;
      }
    });
  };

  const onExitIconClick = () => {
    router.replace("/");
  };

  return (
    <S.AuthFrame>
      {props.title === "로그인" && <S.LoginText>{props.title}</S.LoginText>}
      {props.title !== "로그인" && (
        <S.TopBox>
          <div onClick={onBackIconClick}>
            <Image.AuthGoBackIcon />
          </div>
          <S.AuthText>{props.title}</S.AuthText>
          <div onClick={onExitIconClick}>
            <Image.AuthExitIcon />
          </div>
        </S.TopBox>
      )}
      {props.progressBarValue ? (
        <S.ProgressBar id="progress" value={props.progressBarValue} max="100" />
      ) : (
        <></>
      )}
      {props.children}
    </S.AuthFrame>
  );
}

export default AuthFrame;
