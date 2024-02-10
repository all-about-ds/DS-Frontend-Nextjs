import {
  AuthEmailAtomFamily,
  ModalAtomFamily,
  TimerAtomFamily,
} from "@/app/_atoms";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "./style";
import LoadingSpinner from "@/app/_components/ui/loading";
import { AuthFormSectionPropsType } from "@/app/_types/auth.type";
import authRequest from "@/app/_api/request/auth.request";
import PurpleButton from "@/app/_components/ui/button/purple";
import NormalInput from "@/app/_components/ui/input";

export default function FirstSection(props: AuthFormSectionPropsType) {
  const [loaded, setLoaded] = useState<boolean>(true);
  const setEmail = useSetRecoilState(AuthEmailAtomFamily(props.atomKey));
  const setTimer = useSetRecoilState(TimerAtomFamily(props.atomKey));
  const setAuthErrorModal = useSetRecoilState(ModalAtomFamily(props.atomKey));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    defaultValues: {
      email: useRecoilValue(AuthEmailAtomFamily(props.atomKey)),
    },
  });

  useEffect(() => setAuthErrorModal(false), []);

  const onValid = async ({ email }: { email: string }) => {
    setLoaded(false);

    try {
      switch (props.atomKey) {
        case "signup": {
          await authRequest.sendSignupAuthenticationNumber(email);
          break;
        }
        case "findPassword": {
          await authRequest.sendFindPasswordAuthenticationNumber(email);
          break;
        }
      }
      setLoaded(true);
      setEmail(email);
      setTimer({
        minute: 5,
        seconds: 0,
      });
      props.setSection(2);
    } catch {
      setLoaded(true);
      setAuthErrorModal(true);
    }
  };

  return (
    <S.FirstSectionLayout onSubmit={handleSubmit(onValid)} isLoading={!loaded}>
      <LoadingSpinner isLoading={!loaded} />
      <NormalInput
        type="text"
        title={"이메일"}
        margin={"0 auto 24px"}
        placeholder={"이메일을 입력해주세요"}
        isError={Boolean(errors?.email?.message)}
        register={register("email", {
          required: "이메일은 필수 입력입니다.",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "이메일 형식에 맞지 않습니다.",
          },
        })}
      />
      <S.ErrorText>{errors?.email?.message}</S.ErrorText>
      <S.Description isError={errors?.email?.message}>
        {props.title === "회원가입" && "DS에 오신 것을 환영해요 😎"}
        {props.title === "비밀번호 찾기" && "가입한 이메일을 입력해주세요 🙂"}
      </S.Description>
      <S.Box>
        <PurpleButton>다음</PurpleButton>
      </S.Box>
    </S.FirstSectionLayout>
  );
}
