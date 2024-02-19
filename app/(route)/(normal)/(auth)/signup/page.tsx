import SignupPage from "@/app/_components/page/auth/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 회원가입",
  description: "Do-Study의 멤버가 되어보세요!",
  openGraph: {
    title: "DS | 회원가입",
    description: "Do-Study의 멤버가 되어보세요!",
  },
};

export default function Signup() {
  return <SignupPage />;
}
