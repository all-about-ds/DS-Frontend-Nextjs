import authRequest from "@/app/_api/request/auth.request";
import * as S from "./style";
import * as Image from "@/app/_assets";
import { AuthEmailAtomFamily } from "@/app/_atoms";
import { AuthFormSectionPropsType } from "@/app/_types/auth.type";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import LoadingSpinner from "@/app/_components/ui/loading";
import PurpleButton from "@/app/_components/ui/button/purple";
import { useRouter } from "next/navigation";
import NormalInput from "@/app/_components/ui/input";

type UseFormType = {
  input1: string;
  input2: string;
};

export default function ThirdSection(props: AuthFormSectionPropsType) {
  const [isRequestEnd, setIsRequestEnd] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const email = useRecoilValue(AuthEmailAtomFamily(props.atomKey));
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const { register, handleSubmit } = useForm<UseFormType>();

  const onValid = async (data: UseFormType) => {
    setIsRequestEnd(false);
    if (props.atomKey === "signup") {
      try {
        await authRequest.signup({
          name: data.input1,
          email: email,
          password: data.input2,
        });

        setIsRequestEnd(true);
        toast.success("회원가입 성공!");
        router.replace("/login");
      } catch {
        setErrorMessage("이미 있는 닉네임이에요");
        setIsRequestEnd(true);
      }
    }

    if (props.atomKey === "findPassword") {
      if (data.input1 === data.input2) {
        try {
          await authRequest.findPassword({
            email: email,
            password: data.input1,
          });

          setIsRequestEnd(true);
          toast.success("비밀번호를 변경했어요!");
          router.replace("/login");
        } catch (e) {
          setIsRequestEnd(true);
          setErrorMessage("알 수 없는 에러에요");
        }
      } else {
        setIsRequestEnd(true);
        setErrorMessage("비밀번호가 일치하지 않아요");
      }
    }
  };

  const inValid = (e: any) => {
    const input1 = e?.input1;
    const input2 = e?.input2;

    if (input1 && input1.message) {
      setErrorMessage(e.input1.message);
    }

    if (input2 && input2.message) {
      setErrorMessage(e.input2.message);
    }
  };

  const inputsRendering = () => {
    const view = [];

    switch (props.atomKey) {
      case "signup":
        view.push(
          <div key={1}>
            <NormalInput
              title="닉네임"
              placeholder="닉네임을 입력해주세요"
              margin="2rem auto 1.2rem"
              isError={Boolean(errorMessage)}
              register={register("input1", {
                required: "닉네임은 필수 입력입니다.",
                minLength: {
                  message: "닉네임은 2자 이상이어야해요.",
                  value: 2,
                },
                maxLength: {
                  message: "닉네임은 최대 8자 입니다.",
                  value: 8,
                },
              })}
            />
            <S.InputWrapper
              className="password"
              isError={Boolean(errorMessage)}
            >
              <S.InputTitle isError={Boolean(errorMessage)}>
                비밀번호
              </S.InputTitle>
              <S.InputBox isError={Boolean(errorMessage)}>
                <S.Input
                  className="password-input"
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  {...register("input2", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      message: "비밀번호는 8자 이상이어야해요.",
                      value: 8,
                    },
                    maxLength: {
                      message: "비밀번호는 최대 16자 입니다.",
                      value: 16,
                    },
                    pattern: {
                      message: "잘못된 비밀번호 형식이에요.",
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    },
                  })}
                />
                <div onClick={toggleShowPassword}>
                  {!showPassword && <Image.HidePasswordIcon />}
                  {showPassword && <Image.ShowPasswordIcon />}
                </div>
              </S.InputBox>
            </S.InputWrapper>
          </div>
        );
        break;
      case "findPassword":
        view.push(
          <div key={2}>
            <S.InputWrapper
              className="password"
              isError={Boolean(errorMessage)}
            >
              <S.InputTitle isError={Boolean(errorMessage)}>
                비밀번호
              </S.InputTitle>
              <S.InputBox isError={Boolean(errorMessage)}>
                <S.Input
                  className="password-input"
                  placeholder="비밀번호를 입력해주세요"
                  autoComplete="off"
                  type={showPassword ? "text" : "password"}
                  {...register("input1", {
                    required: "이름은 필수 입력입니다.",
                    minLength: {
                      message: "비밀번호는 8자 이상이어야해요.",
                      value: 8,
                    },
                    maxLength: {
                      message: "비밀번호는 최대 16자 입니다.",
                      value: 16,
                    },
                    pattern: {
                      message: "잘못된 비밀번호 형식이에요.",
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    },
                  })}
                />
                <div onClick={toggleShowPassword}>
                  {!showPassword && <Image.HidePasswordIcon />}
                  {showPassword && <Image.ShowPasswordIcon />}
                </div>
              </S.InputBox>
            </S.InputWrapper>
            <NormalInput
              title="비밀번호 재입력"
              placeholder="비밀번호를 다시 입력해주세요"
              autoComplete="off"
              type={"password"}
              margin="2rem auto 1.2rem"
              isError={Boolean(errorMessage)}
              register={register("input2", {
                required: "비밀번호 재입력은 필수 입력입니다.",
              })}
            />
          </div>
        );
        break;
    }
    return view;
  };

  return (
    <S.ThirdSectionLayout onSubmit={handleSubmit(onValid, inValid)}>
      <LoadingSpinner isLoading={!isRequestEnd} />
      <S.Text>
        {props.title === "회원가입"
          ? "사용하실 닉네임과 비밀번호를 입력해주세요."
          : "다시 사용하실 비밀번호를 설정해주세요."}
      </S.Text>
      <S.Text className="password-description">
        비밀번호는 8~16자 영문, 숫자, 특수문자를 사용하세요.
      </S.Text>
      <>{inputsRendering()}</>
      <S.ErrorText isError={errorMessage}>{errorMessage}</S.ErrorText>
      <S.Box>
        <PurpleButton>완료</PurpleButton>
      </S.Box>
    </S.ThirdSectionLayout>
  );
}
