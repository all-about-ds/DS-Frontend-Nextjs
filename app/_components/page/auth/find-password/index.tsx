"use client";

import { CurrentSectionsAtomFamily } from "@/app/_atoms";
import AuthForm from "@/app/_components/ui/auth/form";
import AuthSectionContainer from "@/app/_components/ui/auth/section";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

export default function FindPasswordPage() {
  const [currentSection, setCurrentSection] = useRecoilState(
    CurrentSectionsAtomFamily("find-password")
  );

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

  return (
    <>
      <AuthForm
        title="비밀번호 찾기"
        progressBarValue={progress}
        setSection={setCurrentSection}
        atomKey={"find-password"}
      >
        <AuthSectionContainer title="비밀번호 찾기" atomKey="findPassword" />
      </AuthForm>
    </>
  );
}
