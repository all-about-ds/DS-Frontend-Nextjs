import LoginPage from "@/app/_components/page/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 로그인",
  description: "아이디와 비밀번호로 로그인하고 Do-Study를 시작해보세요!",
  openGraph: {
    title: "DS | 로그인",
    description: "아이디와 비밀번호로 로그인하고 Do-Study를 시작해보세요!",
  },
};

export default function Login() {
  return <LoginPage />;
}
