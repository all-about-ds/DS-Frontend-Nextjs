"use client";

import AuthFrame from "@/app/_components/ui/auth/frame";
import * as S from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import tokenService from "@/app/_utils/tokenService";
import { toast } from "react-toastify";
import LoadingSpinner from "@/app/_components/ui/loading";
import { LoginType } from "@/app/_types/auth.type";
import authRequest from "@/app/_api/request/auth.request";
import CenterAlignmentLayout from "@/app/_components/common/layout/center";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [isError, setError] = useState<boolean>(false);
  const [isRequestEnd, setIsRequestEnd] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginType>();

  const onValid = async (data: LoginType) => {
    setIsRequestEnd(false);
    try {
      setError(false);

      const response: any = await authRequest.signin(data);
      setIsRequestEnd(true);
      toast.success("로그인 성공!");

      tokenService.setUser(response.data);
      router.push("/");
    } catch (e: any) {
      if (e.response.status === 400) {
        toast.error("유효하지 않는 비밀번호입니다!");
        setIsRequestEnd(true);
      }
      if (e.response.status === 404) {
        toast.error("존재하지 않는 이메일입니다!");
        setIsRequestEnd(true);
      }
    }
  };

  const inValid = () => setError(true);

  return (
    <CenterAlignmentLayout>
      <AuthFrame title="로그인">
        <LoadingSpinner isLoading={!isRequestEnd} />
        <S.DescWrapper>
          <S.IconBox>😎</S.IconBox>
          <S.DescText>
            DS에서 그룹을 만들거나 참여해서 같이 성장해봐!
          </S.DescText>
        </S.DescWrapper>
        <form onSubmit={handleSubmit(onValid, inValid)}>
          <S.InputWrapper>
            <S.InputText isError={isError}>이메일</S.InputText>
            <S.InputBox
              isError={isError}
              placeholder="이메일을 입력해주세요"
              {...register("email", {
                required: "이메일은 필수 입력입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식에 맞지 않습니다.",
                },
              })}
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.InputText isError={isError}>비밀번호</S.InputText>
            <S.InputBox
              type="password"
              autoComplete="off"
              isError={isError}
              placeholder="비밀번호를 입력해주세요"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                minLength: {
                  value: 8,
                  message: "8자 이상 15자 이하 비밀번호를 입력해주세요.",
                },
                maxLength: {
                  value: 15,
                  message: "8자 이상 15자 이하 비밀번호를 입력해주세요.",
                },
              })}
            />
          </S.InputWrapper>
          {isError && (
            <S.ErrorTextBox>
              <S.ErrorText>이메일 혹은 비밀번호가 일치하지 않아요</S.ErrorText>
            </S.ErrorTextBox>
          )}
          <S.Button isError={isError} disabled={isSubmitting}>
            로그인
          </S.Button>
        </form>
        <S.BottomTextBox>
          <S.FirstText>DS가 처음이신가요?</S.FirstText>
          <Link href={"/signup"}>
            <S.ClickText>회원가입</S.ClickText>
          </Link>
        </S.BottomTextBox>
        <S.Bar />
        <Link href={"/findPassword"}>
          <S.ClickText>비밀번호 찾기</S.ClickText>
        </Link>
      </AuthFrame>
    </CenterAlignmentLayout>
  );
}
