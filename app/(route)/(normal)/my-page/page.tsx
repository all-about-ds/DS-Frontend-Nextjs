import MyPage from "@/app/_components/page/my";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 마이페이지",
  description: "나의 프로필을 살펴보아요.",
  openGraph: {
    title: "DS | 마이페이지",
    description: "나의 프로필을 살펴보아요.",
  },
};

export default function My() {
  return <MyPage />;
}
