import FindPasswordPage from "@/app/_components/page/auth/find-password";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 비밀번호 찾기",
  description: "이메일을 통해 비밀번호를 찾을 수 있어요.",
  openGraph: {
    title: "DS | 비밀번호 찾기",
    description: "이메일을 통해 비밀번호를 찾을 수 있어요.",
  },
};

export default function FindPassword() {
  return <FindPasswordPage />;
}
