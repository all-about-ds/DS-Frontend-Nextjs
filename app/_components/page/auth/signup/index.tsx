"use client";

import { AuthEmailAtomFamily, CurrentSectionsAtomFamily } from "@/app/_atoms";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import * as S from "./style";
import { usePathname, useRouter } from "next/navigation";
import AuthForm from "@/app/_components/ui/auth/form";
import AuthSectionContainer from "@/app/_components/ui/auth/section";

export default function SignupPage() {
  const pathname = usePathname();
  const [currentSection, setCurrentSecion] = useRecoilState(
    CurrentSectionsAtomFamily("signup")
  );
  const [, setEmail] = useRecoilState(AuthEmailAtomFamily("signup"));
  const router = useRouter();

  const [progress, setProgress] = useState<number>(33);

  useEffect(() => {
    switch (currentSection) {
      case 1:
        setProgress(33);
        break;
      case 2:
        setProgress(66);
        break;
      case 3:
        setProgress(100);
        break;
    }
  }, [currentSection]);

  const onLogin = () => {
    setEmail("");
    setCurrentSecion(1);
    router.push("/login");
  };

  useEffect(() => {
    setEmail("");
    setCurrentSecion(1);
  }, [pathname]);

  return (
    <AuthForm
      title="회원가입"
      progressBarValue={progress}
      setSection={setCurrentSecion}
      atomKey={"signup"}
    >
      <AuthSectionContainer title="회원가입" atomKey="signup" />
      <S.GoLoginBox>
        <p>기존 회원이신가요?</p>
        <p style={{ color: "#7139EA", cursor: "pointer" }} onClick={onLogin}>
          로그인
        </p>
      </S.GoLoginBox>
    </AuthForm>
  );
}
