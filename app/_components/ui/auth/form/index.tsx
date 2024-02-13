import { ModalAtomFamily } from "@/app/_atoms";
import CenterAlignmentLayout from "@/app/_components/common/layout/alignment";
import { SetterOrUpdater, useRecoilState } from "recoil";
import AuthFrame from "@/app/_components/ui//auth/frame";
import EmailErrorModal from "@/app/_components/modal/email-error";

interface AuthFormProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: "회원가입" | "비밀번호 찾기";
  progressBarValue?: number;
  setSection?: SetterOrUpdater<number>;
  atomKey: "signup" | "find-password";
}

export default function AuthForm(props: AuthFormProps) {
  const [emailErrorModal] = useRecoilState(ModalAtomFamily(props.atomKey));

  return (
    <>
      {emailErrorModal && <EmailErrorModal pageType={props.atomKey} />}
      <CenterAlignmentLayout>
        <AuthFrame
          title={props.title}
          progressBarValue={props.progressBarValue}
          setSection={props.setSection}
          atomKey={props.atomKey}
        >
          {props.children}
        </AuthFrame>
      </CenterAlignmentLayout>
    </>
  );
}
