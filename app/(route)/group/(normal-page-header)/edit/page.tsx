import EditGroupPage from "@/app/_components/page/group/edit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS | 그룹수정",
  description: "그룹 관련 정보를 수정하고 관리해봐요.",
  openGraph: {
    title: "DS | 그룹수정",
    description: "그룹 관련 정보를 수정하고 관리해봐요.",
  },
};

export default function EditGroup() {
  return <EditGroupPage />;
}
