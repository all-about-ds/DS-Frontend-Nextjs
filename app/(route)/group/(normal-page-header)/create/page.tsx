import CreateGroupPage from "@/app/_components/page/group/create";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 그룹생성",
  description: "그룹을 만들고 관리해봐요.",
  openGraph: {
    title: "DS | 그룹생성",
    description: "그룹을 만들고 관리해봐요.",
  },
};

export default function CreateGroup() {
  return <CreateGroupPage />;
}
