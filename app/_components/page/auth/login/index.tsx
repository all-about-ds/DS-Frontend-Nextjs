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
import CenterAlignmentLayout from "@/app/_components/common/layout/alignment";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PurpleButton from "@/app/_components/ui/button/purple";
import NormalInput from "@/app/_components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [isError, setError] = useState(false);
  const [isRequestEnd, setIsRequestEnd] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
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

  const inValid = () => {
    const emailErrorMessage = errors?.email?.message;
    const passwordErrorMessage = errors?.password?.message;

    if (emailErrorMessage) {
      setErrorMessage(emailErrorMessage);
    } else if (passwordErrorMessage) {
      setErrorMessage(passwordErrorMessage);
    } else if (emailErrorMessage && passwordErrorMessage) {
      setErrorMessage(errors?.email?.message);
    } else {
      setErrorMessage("이메일은 필수 입력입니다.");
    }

    setError(true);
  };

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
          <NormalInput
            title="이메일"
            placeholder="이메일을 입력해주세요"
            isError={isError}
            register={register("email", {
              required: "이메일은 필수 입력입니다.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            })}
          />
          <NormalInput
            title="비밀번호"
            type={"password"}
            placeholder="비밀번호를 입력해주세요"
            margin="2.08vh 0 0 0"
            autoComplete="off"
            isError={isError}
            register={register("password", {
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
          {isError && (
            <S.ErrorTextBox>
              <S.ErrorText>{errorMessage}</S.ErrorText>
            </S.ErrorTextBox>
          )}
          <PurpleButton
            isError={isError}
            style={{ marginTop: isError ? "7.5vh" : "10.32vh" }}
          >
            로그인
          </PurpleButton>
        </form>
        <S.BottomTextBox>
          <S.FirstText>DS가 처음이신가요?</S.FirstText>
          <Link href={"/signup"}>
            <S.ClickText>회원가입</S.ClickText>
          </Link>
        </S.BottomTextBox>
        <S.Bar />
        <Link href={"/find-password"}>
          <S.ClickText>비밀번호 찾기</S.ClickText>
        </Link>
      </AuthFrame>
    </CenterAlignmentLayout>
  );
}
