import { AuthEmailAtomFamily, TimerAtomFamily } from "@/app/_atoms";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState, useRecoilValue } from "recoil";
import * as S from "./style";
import { AuthFormSectionPropsType } from "@/app/_types/auth.type";
import authRequest from "@/app/_api/request/auth.request";
import LoadingSpinner from "@/app/_components/ui/loading";
import PurpleButton from "@/app/_components/ui/button/purple";

export default function SecondSection(props: AuthFormSectionPropsType) {
  const [isRequestEnd, setIsRequestEnd] = useState<boolean>(true);
  const [inputs, setInputs] = useState<string[]>(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [timer, setTimer] = useRecoilState(TimerAtomFamily(props.atomKey));
  const email = useRecoilValue(AuthEmailAtomFamily(props.atomKey));

  const handleChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);

    if (value && index < 3) {
      const nextInput = document.getElementById(`input${index + 2}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.keyCode === 8 && inputs[index] === "") {
      const prevInput = document.getElementById(`input${index}`);
      prevInput?.focus();
    }
  };

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer.seconds > 0) {
        setTimer((oldValue: { seconds: number }) => ({
          ...oldValue,
          seconds: oldValue.seconds - 1,
        }));
      }
      if (timer.seconds === 0) {
        if (timer.minute === 0) {
          clearInterval(countdown);
        } else {
          setTimer((oldValue: { minute: number }) => ({
            minute: oldValue.minute - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const checkAuthenticationNumber = async () => {
    setIsRequestEnd(false);

    try {
      let code = "";
      inputs.forEach(function (currentvalue) {
        code += currentvalue;
      });
      await authRequest.checkAuthenticationNumber(email, code);
      setIsRequestEnd(true);
      props.setSection(3);
    } catch {
      setIsRequestEnd(true);
      setErrorMessage("거부된 인증번호 입니다");
    }
  };

  const resend = async () => {
    setErrorMessage("");
    setIsRequestEnd(false);

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

      setTimer({
        minute: 5,
        seconds: 0,
      });
      setIsRequestEnd(true);
      toast.success("인증번호를 재전송 했어요");
    } catch {
      setErrorMessage("알 수 없는 오류입니다");
      setIsRequestEnd(true);
    }
  };

  useEffect(() => {
    if (email && timer.minute === 0 && timer.seconds === 0) {
      setErrorMessage("인증번호가 만료됐어요");
    }
  }, [timer]);

  return (
    <S.SecondSectionLayout>
      <LoadingSpinner isLoading={!isRequestEnd} />
      <S.Text>입력하신 이메일로 인증번호 4자리를 전송했어요</S.Text>
      <S.NumberForm isError={errorMessage}>
        {inputs.map((input, index) => (
          <S.AuthenticationNumberInput
            key={index}
            id={`input${index + 1}`}
            type="text"
            value={input}
            maxLength={1}
            tabIndex={index + 1}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </S.NumberForm>
      <S.ResendBox>
        <p>인증번호가 오지않았나요?</p>
        <p style={{ color: "#7139EA", cursor: "pointer" }} onClick={resend}>
          재전송
        </p>
      </S.ResendBox>
      <S.Timer isError={errorMessage}>
        {timer.minute}:
        {timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}
      </S.Timer>
      <S.ErrorText isError={errorMessage}>{errorMessage}</S.ErrorText>
      <S.Box>
        <PurpleButton onClick={checkAuthenticationNumber}>다음</PurpleButton>
      </S.Box>
    </S.SecondSectionLayout>
  );
}
